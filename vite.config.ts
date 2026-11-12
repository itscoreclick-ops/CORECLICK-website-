import 'dotenv/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import { sendLeadNotificationEmail, NOTIFICATION_RECIPIENT } from './src/server/emailNotification.ts';
import { LeadSubmission } from './src/types/index.ts';

// Native Vite Connect middleware to handle /api/leads with real server-side validation & email notifications
function leadsApiPlugin(): Plugin {
  interface StoredLead extends LeadSubmission {
    leadId: string;
    receivedAt: string;
    serverStatus?: string;
  }
  const inMemoryLeads: StoredLead[] = [];

  return {
    name: 'leads-api-handler',
    configureServer(server) {
      server.middlewares.use('/api/leads', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');

              // 1. Anti-Spam Honeypot Check
              if (data.honeypot || data._hp || data.website_hp) {
                console.warn('[Vite Dev Lead Engine] Spam bot detected via honeypot. Discarding silently.');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(
                  JSON.stringify({
                    success: true,
                    leadId: `CC-BOT-${Date.now().toString(36).toUpperCase()}`,
                    message: 'Thank you! Your enquiry has been received.',
                  })
                );
                return;
              }

              const errors: Record<string, string> = {};

              // Server-side validation
              if (!data.fullName || typeof data.fullName !== 'string' || data.fullName.trim().length < 2) {
                errors.fullName = 'Full name is required (minimum 2 characters).';
              }

              const cleanPhone = (data.phone || '').toString().replace(/[\s\-\(\)]/g, '');
              const indianPhoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
              if (!cleanPhone || !indianPhoneRegex.test(cleanPhone)) {
                errors.phone = 'Valid 10-digit Indian phone number required (e.g. 8707414150).';
              }

              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!data.email || typeof data.email !== 'string' || !emailRegex.test(data.email.trim())) {
                errors.email = 'Please provide a valid email address.';
              }

              if (Object.keys(errors).length > 0) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(
                  JSON.stringify({
                    success: false,
                    message: 'Server-side validation failed. Please check the provided information.',
                    errors,
                  })
                );
                return;
              }

              // 2. Duplicate submission protection (30s window)
              const now = Date.now();
              const isDuplicate = inMemoryLeads.some((lead) => {
                const samePhone = lead.phone === cleanPhone;
                const sameEmail =
                  data.email && lead.email && lead.email.toLowerCase() === data.email.trim().toLowerCase();
                const timeDiff = now - new Date(lead.receivedAt).getTime();
                return (samePhone || sameEmail) && timeDiff < 30000;
              });

              if (isDuplicate) {
                res.writeHead(429, { 'Content-Type': 'application/json' });
                res.end(
                  JSON.stringify({
                    success: false,
                    message: 'This enquiry has already been received. Our team will contact you shortly.',
                  })
                );
                return;
              }

              // Server-side lead record with ID and timestamp
              const leadId = `CC-${Date.now().toString(36).toUpperCase()}-${Math.floor(
                100 + Math.random() * 900
              )}`;

              const leadRecord: StoredLead = {
                id: leadId,
                leadId,
                ...data,
                phone: cleanPhone,
                receivedAt: new Date().toISOString(),
                serverStatus: 'CONFIRMED_QUEUED',
              };

              // 3. Automated Email Notification
              const emailResult = await sendLeadNotificationEmail(leadRecord);
              if (!emailResult.success) {
                console.error('[Dev Leads API] Resend email delivery failed:', emailResult.error);
                res.writeHead(502, { 'Content-Type': 'application/json' });
                res.end(
                  JSON.stringify({
                    success: false,
                    message: `Failed to deliver email notification: ${emailResult.error || 'Resend error'}`,
                  })
                );
                return;
              }

              inMemoryLeads.unshift(leadRecord);

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(
                JSON.stringify({
                  success: true,
                  leadId,
                  message: 'Enquiry confirmed. CoreClick strategists will reach out to you within 24 hours.',
                  emailNotification: {
                    recipient: NOTIFICATION_RECIPIENT,
                    status: 'SENT',
                  },
                })
              );
            } catch {
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: false, message: 'Invalid payload JSON format.' }));
            }
          });
        } else if (req.method === 'GET') {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(
            JSON.stringify({
              status: 'operational',
              service: 'CoreClick Lead Ingestion Gateway',
              recipient: NOTIFICATION_RECIPIENT,
              totalLeadsReceived: inMemoryLeads.length,
            })
          );
        } else {
          res.writeHead(405, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'Method Not Allowed' }));
        }
      });
    },
  };
}

export default defineConfig(() => {
  const rootDir = typeof import.meta.dirname !== 'undefined' ? import.meta.dirname : process.cwd();

  return {
    plugins: [react(), tailwindcss(), leadsApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(rootDir, '.'),
      },
    },
    build: {
      target: 'es2020',
      minify: 'esbuild',
      cssMinify: true,
      sourcemap: false,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (
                id.includes('react') ||
                id.includes('react-dom') ||
                id.includes('react-router-dom')
              ) {
                return 'vendor-react';
              }
              if (id.includes('lucide-react')) {
                return 'vendor-icons';
              }
              if (id.includes('motion')) {
                return 'vendor-motion';
              }
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
