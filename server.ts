import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// In-memory lead storage buffer (can be hooked to Google Sheets or CRM Webhooks)
interface IngestionLead {
  leadId: string;
  fullName: string;
  phone: string;
  email?: string;
  businessName?: string;
  city?: string;
  serviceInterestedIn?: string;
  message?: string;
  receivedAt: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

const leadsBuffer: IngestionLead[] = [];

// Health Endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'CoreClick Lead Engine',
    timestamp: new Date().toISOString(),
    storedLeadsCount: leadsBuffer.length,
  });
});

// Lead Ingestion Endpoint with Server-side validation
app.post('/api/leads', (req: Request, res: Response): void => {
  const { fullName, phone, email, businessName, city, serviceInterestedIn, message, utmSource, utmMedium, utmCampaign } = req.body;
  const errors: Record<string, string> = {};

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  const cleanPhone = (phone || '').toString().replace(/[\s\-\(\)]/g, '');
  const indianPhoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
  if (!cleanPhone || !indianPhoneRegex.test(cleanPhone)) {
    errors.phone = 'Please provide a valid 10-digit Indian phone number (e.g., 8707414150).';
  }

  if (email && typeof email === 'string' && email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email format.';
    }
  }

  if (Object.keys(errors).length > 0) {
    res.status(400).json({
      success: false,
      message: 'Server-side validation failed.',
      errors,
    });
    return;
  }

  const leadId = `CC-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
  const newLead: IngestionLead = {
    leadId,
    fullName: fullName.trim(),
    phone: cleanPhone,
    email: email?.trim(),
    businessName: businessName?.trim(),
    city: city?.trim(),
    serviceInterestedIn: serviceInterestedIn || 'General Enquiry',
    message: message?.trim(),
    receivedAt: new Date().toISOString(),
    utmSource,
    utmMedium,
    utmCampaign,
  };

  leadsBuffer.unshift(newLead);
  if (leadsBuffer.length > 500) leadsBuffer.pop();

  console.log(`[CoreClick Lead Received] ID: ${leadId} | Name: ${newLead.fullName} | Phone: ${newLead.phone}`);

  res.status(200).json({
    success: true,
    leadId,
    message: 'Thank you! Your enquiry has been safely received by CoreClick.',
  });
});

// Production Static Serving
const distPath = path.resolve(__dirname, 'dist');
app.use(express.static(distPath));

// Fallback to index.html for SPA routing
app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`CoreClick server running on http://0.0.0.0:${PORT}`);
});
