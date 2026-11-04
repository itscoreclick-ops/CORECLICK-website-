import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

// Native Vite Connect middleware to handle /api/leads with real server-side validation
function leadsApiPlugin(): Plugin {
  const inMemoryLeads: Array<Record<string, unknown>> = [];

  return {
    name: 'leads-api-handler',
    configureServer(server) {
      server.middlewares.use('/api/leads', (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
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

              if (data.email && typeof data.email === 'string') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(data.email.trim())) {
                  errors.email = 'Please provide a valid email format.';
                }
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

              // Server-side lead record with ID and timestamp
              const leadId = `CC-${Date.now().toString(36).toUpperCase()}-${Math.floor(
                100 + Math.random() * 900
              )}`;

              const leadRecord = {
                leadId,
                ...data,
                receivedAt: new Date().toISOString(),
                serverStatus: 'CONFIRMED_QUEUED',
              };

              inMemoryLeads.unshift(leadRecord);

              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(
                JSON.stringify({
                  success: true,
                  leadId,
                  message: 'Enquiry confirmed. CoreClick strategists will reach out to you within 24 hours.',
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
  return {
    plugins: [react(), tailwindcss(), leadsApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
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
