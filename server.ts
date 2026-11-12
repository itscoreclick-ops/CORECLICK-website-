import 'dotenv/config';
import express, { Request, Response } from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';
import { sendLeadNotificationEmail, NOTIFICATION_RECIPIENT } from './src/server/emailNotification.ts';
import { LeadSubmission } from './src/types/index.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Enable Gzip/Brotli compression for all textual and JSON responses
app.use(compression({
  threshold: 1024, // only compress responses above 1KB
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  },
}));

app.use(express.json());

// In-memory lead storage buffer (can be hooked to Google Sheets or CRM Webhooks)
interface IngestionLead extends LeadSubmission {
  leadId: string;
  receivedAt: string;
  emailStatus?: string;
}

const leadsBuffer: IngestionLead[] = [];

// Health Endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'CoreClick Lead Engine',
    timestamp: new Date().toISOString(),
    recipient: NOTIFICATION_RECIPIENT,
    storedLeadsCount: leadsBuffer.length,
  });
});

// Lead Ingestion Endpoint with Server-side validation & automated email notification
app.post('/api/leads', async (req: Request, res: Response): Promise<void> => {
  const body = req.body || {};
  const {
    fullName,
    phone,
    email,
    businessName,
    city,
    industry,
    serviceInterestedIn,
    adBudget,
    budgetRange,
    projectType,
    timeline,
    estimatedPages,
    preferredPlatform,
    contentFrequency,
    businessObjectives,
    websiteUrl,
    instagramProfile,
    targetKeywords,
    message,
    sourceUrl,
    utmSource,
    utmMedium,
    utmCampaign,
    honeypot,
    _hp,
    website_hp,
  } = body;

  // 1. Anti-Spam Honeypot Verification
  if (honeypot || _hp || website_hp) {
    console.warn('[CoreClick Spam Guard] Bot submission detected via honeypot field. Silently discarded.');
    res.status(200).json({
      success: true,
      leadId: `CC-BOT-${Date.now().toString(36).toUpperCase()}`,
      message: 'Thank you! Your enquiry has been received.',
    });
    return;
  }

  // 2. Server-side Validation
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
      message: 'Server-side validation failed. Please check the highlighted fields.',
      errors,
    });
    return;
  }

  // 3. Duplicate Submission Protection (30-second window per phone/email)
  const now = Date.now();
  const isDuplicate = leadsBuffer.some((lead) => {
    const samePhone = lead.phone === cleanPhone;
    const sameEmail = email && lead.email && lead.email.toLowerCase() === email.trim().toLowerCase();
    const timeDiff = now - new Date(lead.receivedAt).getTime();
    return (samePhone || sameEmail) && timeDiff < 30000;
  });

  if (isDuplicate) {
    res.status(429).json({
      success: false,
      message: 'This enquiry has already been received. Our team will contact you shortly.',
    });
    return;
  }

  const leadId = `CC-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
  const receivedAt = new Date().toISOString();

  const newLead: IngestionLead = {
    id: leadId,
    leadId,
    fullName: fullName.trim(),
    phone: cleanPhone,
    email: email?.trim() || undefined,
    businessName: businessName?.trim() || undefined,
    city: city?.trim() || undefined,
    industry: industry?.trim() || undefined,
    serviceInterestedIn: serviceInterestedIn || 'General Enquiry',
    adBudget: adBudget?.trim() || undefined,
    budgetRange: budgetRange?.trim() || undefined,
    projectType: projectType?.trim() || undefined,
    timeline: timeline?.trim() || undefined,
    estimatedPages: estimatedPages?.trim() || undefined,
    preferredPlatform: preferredPlatform?.trim() || undefined,
    contentFrequency: contentFrequency?.trim() || undefined,
    businessObjectives: businessObjectives?.trim() || undefined,
    websiteUrl: websiteUrl?.trim() || undefined,
    instagramProfile: instagramProfile?.trim() || undefined,
    targetKeywords: targetKeywords?.trim() || undefined,
    message: message?.trim() || undefined,
    submittedAt: receivedAt,
    receivedAt,
    sourceUrl: sourceUrl || undefined,
    utmSource: utmSource || undefined,
    utmMedium: utmMedium || undefined,
    utmCampaign: utmCampaign || undefined,
  };

  // 4. Automated Email Notification to itscoreclick@gmail.com
  let emailResult: { success: boolean; simulated?: boolean; recipient: string; error?: string } = {
    success: false,
    simulated: false,
    recipient: NOTIFICATION_RECIPIENT,
  };
  try {
    emailResult = await sendLeadNotificationEmail(newLead);
    newLead.emailStatus = emailResult.success ? (emailResult.simulated ? 'SIMULATED' : 'SENT') : 'FAILED';
  } catch (err: unknown) {
    console.error('[CoreClick Lead Notification Email Error]:', err);
    newLead.emailStatus = 'ERROR';
  }

  leadsBuffer.unshift(newLead);
  if (leadsBuffer.length > 500) leadsBuffer.pop();

  console.log(
    `[CoreClick Lead Received] ID: ${leadId} | Name: ${newLead.fullName} | Phone: ${newLead.phone} | Service: ${newLead.serviceInterestedIn} | EmailStatus: ${newLead.emailStatus}`
  );

  res.status(200).json({
    success: true,
    leadId,
    message: 'Thank you! Your enquiry has been safely received by CoreClick.',
    emailNotification: {
      recipient: NOTIFICATION_RECIPIENT,
      status: newLead.emailStatus,
    },
  });
});

// Production Static Serving with optimal HTTP caching
const distPath = path.resolve(__dirname, 'dist');

app.use(
  express.static(distPath, {
    maxAge: '1d',
    setHeaders: (res, filePath) => {
      // Hashed assets in /assets/ can be cached immutably for 1 year
      if (filePath.includes('/assets/')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      } else if (/\.(webp|avif|png|jpg|jpeg|svg|woff2|woff)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=604800, stale-while-revalidate=86400');
      } else if (filePath.endsWith('index.html')) {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
      }
    },
  })
);

// Fallback to index.html for SPA routing with no-cache header
app.get('*', (_req: Request, res: Response) => {
  res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
  res.sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`CoreClick server running on http://0.0.0.0:${PORT}`);
});
