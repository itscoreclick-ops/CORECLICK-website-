import { Resend } from 'resend';
import { LeadSubmission } from '../types/index.ts';

export const NOTIFICATION_RECIPIENT = process.env.NOTIFICATION_EMAIL || 'itscoreclick@gmail.com';
export const DEFAULT_FROM_EMAIL =
  process.env.EMAIL_FROM ||
  process.env.RESEND_FROM_EMAIL ||
  'CoreClick Inquiries <leads@coreclick.in>';

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  simulated?: boolean;
  error?: string;
  recipient: string;
}

/**
 * Format Indian Phone number to clean 10-digit number for WhatsApp
 */
function cleanIndianPhone(phone: string): string {
  const digits = (phone || '').replace(/\D/g, '');
  if (digits.length === 10) return `91${digits}`;
  if (digits.length === 12 && digits.startsWith('91')) return digits;
  return digits;
}

/**
 * Format date in Indian Standard Time (IST)
 */
function formatISTDate(dateString?: string): string {
  const date = dateString ? new Date(dateString) : new Date();
  try {
    return (
      new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'medium',
      }).format(date) + ' IST'
    );
  } catch {
    return date.toISOString();
  }
}

function escapeHtml(text?: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Generate branded CoreClick HTML Email Template
 */
export function generateCoreClickEmailHtml(lead: LeadSubmission): string {
  const waPhone = cleanIndianPhone(lead.phone);
  const waUrl = waPhone
    ? `https://wa.me/${waPhone}?text=${encodeURIComponent(
        `Hello ${lead.fullName || 'there'}, thank you for contacting CoreClick regarding ${lead.serviceInterestedIn || 'our digital growth services'}. We have reviewed your enquiry!`
      )}`
    : '';

  const formattedDate = formatISTDate(lead.submittedAt);
  const budget = lead.budgetRange || lead.adBudget || 'Not specified / Discussion required';
  const service = lead.serviceInterestedIn || 'General Growth Enquiry';
  const business = lead.businessName || 'Not specified';
  const city = lead.city || 'Varanasi / India';

  // Build secondary requirements table rows
  const secondaryDetails: { label: string; value?: string }[] = [
    { label: 'Project Type / Focus', value: lead.projectType },
    { label: 'Monthly Output / Frequency', value: lead.contentFrequency },
    { label: 'Preferred Platforms', value: lead.preferredPlatform },
    { label: 'Project Timeline', value: lead.timeline },
    { label: 'Estimated Pages / Scope', value: lead.estimatedPages },
    { label: 'Target Keywords', value: lead.targetKeywords },
    { label: 'Current Website', value: lead.websiteUrl },
    { label: 'Instagram Profile', value: lead.instagramProfile },
    { label: 'Business Objectives', value: lead.businessObjectives },
  ].filter((item) => Boolean(item.value && item.value.trim()));

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead: ${escapeHtml(lead.fullName)}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #FFF9F6;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #11121D;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      max-width: 640px;
      margin: 24px auto;
      background: #FFFFFF;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid #FFE0D3;
      box-shadow: 0 10px 25px rgba(17, 18, 29, 0.06);
    }
    .header-bar {
      height: 8px;
      background: linear-gradient(90deg, #FF8A24 0%, #FF6038 50%, #FF087F 100%);
    }
    .header {
      padding: 32px 32px 24px;
      background: #FFF9F6;
      border-bottom: 1px solid #FFEBE1;
    }
    .brand-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: #FF6038;
      background: #FFF0E9;
      border: 1px solid rgba(255, 96, 56, 0.25);
      padding: 4px 12px;
      border-radius: 9999px;
      margin-bottom: 12px;
    }
    .headline {
      margin: 0 0 6px 0;
      font-size: 26px;
      font-weight: 800;
      color: #11121D;
      letter-spacing: -0.5px;
    }
    .subheadline {
      margin: 0;
      font-size: 14px;
      color: #65677A;
    }
    .action-bar {
      padding: 20px 32px;
      background: #FFF0E9;
      border-bottom: 1px solid #FFE0D3;
      text-align: center;
    }
    .action-btn {
      display: inline-block;
      margin: 6px 4px;
      padding: 11px 20px;
      border-radius: 9999px;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      text-align: center;
    }
    .btn-call {
      background-color: #11121D;
      color: #FFFFFF !important;
    }
    .btn-wa {
      background-color: #25D366;
      color: #FFFFFF !important;
    }
    .btn-mail {
      background-color: #FFFFFF;
      color: #11121D !important;
      border: 1px solid #11121D;
    }
    .content {
      padding: 32px;
    }
    .section-title {
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: #FF6038;
      margin: 0 0 16px 0;
      border-bottom: 1px solid #F0E9E4;
      padding-bottom: 8px;
    }
    .info-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 28px;
    }
    .info-table td {
      padding: 10px 12px;
      font-size: 14px;
      border-bottom: 1px solid #F8F1EC;
      vertical-align: top;
    }
    .info-table td.label {
      width: 38%;
      color: #727383;
      font-weight: 600;
    }
    .info-table td.value {
      width: 62%;
      color: #11121D;
      font-weight: 700;
    }
    .message-card {
      background: #FFF9F6;
      border-left: 4px solid #FF6038;
      border-radius: 8px;
      padding: 16px 20px;
      margin-bottom: 28px;
    }
    .message-card-title {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #FF6038;
      margin-bottom: 8px;
    }
    .message-text {
      margin: 0;
      font-size: 14px;
      color: #11121D;
      white-space: pre-wrap;
      word-break: break-word;
    }
    .meta-box {
      background: #F8F9FA;
      border-radius: 12px;
      padding: 16px 20px;
      font-size: 12px;
      color: #65677A;
      margin-bottom: 24px;
    }
    .meta-item {
      margin-bottom: 4px;
    }
    .meta-item strong {
      color: #11121D;
    }
    .footer {
      padding: 24px 32px;
      background: #11121D;
      color: #A0A2B3;
      font-size: 12px;
      text-align: center;
      line-height: 1.6;
    }
    .footer a {
      color: #FF8A24;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header-bar"></div>
    <div class="header">
      <span class="brand-badge">⚡ NEW INCOMING LEAD</span>
      <h1 class="headline">${escapeHtml(lead.fullName || 'New Prospect')}</h1>
      <p class="subheadline">Interested in <strong>${escapeHtml(service)}</strong> &bull; ${escapeHtml(business)}</p>
    </div>

    <!-- Quick Team Action Bar -->
    <div class="action-bar">
      ${
        lead.phone
          ? `<a href="tel:${escapeHtml(lead.phone)}" class="action-btn btn-call">📞 Call ${escapeHtml(lead.phone)}</a>`
          : ''
      }
      ${
        waUrl
          ? `<a href="${escapeHtml(waUrl)}" target="_blank" rel="noopener noreferrer" class="action-btn btn-wa">💬 WhatsApp Chat</a>`
          : ''
      }
      ${
        lead.email
          ? `<a href="mailto:${escapeHtml(lead.email)}?subject=${encodeURIComponent(
              `CoreClick — Response to your ${service} enquiry`
            )}" class="action-btn btn-mail">✉️ Reply Email</a>`
          : ''
      }
    </div>

    <div class="content">
      <!-- Contact Details -->
      <h2 class="section-title">Lead Contact Information</h2>
      <table class="info-table">
        <tr>
          <td class="label">Full Name</td>
          <td class="value">${escapeHtml(lead.fullName)}</td>
        </tr>
        <tr>
          <td class="label">Phone / WhatsApp</td>
          <td class="value">
            <a href="tel:${escapeHtml(lead.phone)}" style="color: #FF6038; text-decoration: none; font-weight: 800;">
              ${escapeHtml(lead.phone)}
            </a>
          </td>
        </tr>
        <tr>
          <td class="label">Email Address</td>
          <td class="value">
            ${
              lead.email
                ? `<a href="mailto:${escapeHtml(lead.email)}" style="color: #11121D; text-decoration: underline;">
                    ${escapeHtml(lead.email)}
                  </a> <span style="font-size: 11px; color: #28a745; font-weight: normal;">(Set as Reply-To)</span>`
                : '<span style="color: #8C8E9E; font-weight: normal;">Not provided</span>'
            }
          </td>
        </tr>
        <tr>
          <td class="label">Business / Brand</td>
          <td class="value">${escapeHtml(business)}</td>
        </tr>
        <tr>
          <td class="label">Location / City</td>
          <td class="value">${escapeHtml(city)}</td>
        </tr>
      </table>

      <!-- Commercial & Service Scope -->
      <h2 class="section-title">Commercial & Project Scope</h2>
      <table class="info-table">
        <tr>
          <td class="label">Selected Service</td>
          <td class="value" style="color: #FF087F;">${escapeHtml(service)}</td>
        </tr>
        <tr>
          <td class="label">Budget / Spend</td>
          <td class="value" style="color: #11121D; font-weight: 800;">
            ${escapeHtml(budget)}
          </td>
        </tr>
        ${secondaryDetails
          .map(
            (item) => `
        <tr>
          <td class="label">${escapeHtml(item.label)}</td>
          <td class="value">${escapeHtml(item.value || '')}</td>
        </tr>`
          )
          .join('')}
      </table>

      <!-- Project Requirements / Message -->
      ${
        lead.message
          ? `
      <div class="message-card">
        <div class="message-card-title">📝 Project Requirements & Message</div>
        <div class="message-text">${escapeHtml(lead.message)}</div>
      </div>
      `
          : ''
      }

      <!-- Attribution & Source -->
      <h2 class="section-title">Attribution & Source Metadata</h2>
      <div class="meta-box">
        <div class="meta-item"><strong>Lead ID:</strong> ${escapeHtml(lead.id || 'N/A')}</div>
        <div class="meta-item"><strong>Submission Time:</strong> ${escapeHtml(formattedDate)}</div>
        <div class="meta-item"><strong>Page Source:</strong> ${
          lead.sourceUrl
            ? `<a href="${escapeHtml(lead.sourceUrl)}" target="_blank" style="color: #FF6038; word-break: break-all;">${escapeHtml(
                lead.sourceUrl
              )}</a>`
            : 'Website Direct Form'
        }</div>
        ${lead.utmSource ? `<div class="meta-item"><strong>UTM Source:</strong> ${escapeHtml(lead.utmSource)}</div>` : ''}
        ${lead.utmMedium ? `<div class="meta-item"><strong>UTM Medium:</strong> ${escapeHtml(lead.utmMedium)}</div>` : ''}
        ${lead.utmCampaign ? `<div class="meta-item"><strong>UTM Campaign:</strong> ${escapeHtml(lead.utmCampaign)}</div>` : ''}
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <strong>CoreClick Digital Growth Agency</strong><br>
      D64/29 KA-1, Bank Colony, Sigra, Varanasi, Uttar Pradesh 221002<br>
      <span style="display:inline-block; margin-top: 8px;">Direct Notification to <strong>${escapeHtml(
        NOTIFICATION_RECIPIENT
      )}</strong> &bull; Reply-To set to visitor's email</span>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Generate plain-text fallback for email clients without HTML support
 */
export function generateCoreClickEmailText(lead: LeadSubmission): string {
  const formattedDate = formatISTDate(lead.submittedAt);
  const budget = lead.budgetRange || lead.adBudget || 'Not specified';
  const service = lead.serviceInterestedIn || 'General Growth Enquiry';
  const business = lead.businessName || 'Not specified';

  return `
=====================================================
⚡ NEW LEAD RECEIVED — CORECLICK
=====================================================

LEAD DETAILS:
- Full Name: ${lead.fullName}
- Phone: ${lead.phone}
- Email: ${lead.email || 'Not provided'}
- Business Name: ${business}
- City: ${lead.city || 'Varanasi'}

PROJECT & SCOPE:
- Service: ${service}
- Budget: ${budget}
- Project Type: ${lead.projectType || 'N/A'}
- Preferred Platforms: ${lead.preferredPlatform || 'N/A'}
- Timeline: ${lead.timeline || 'N/A'}
- Estimated Pages: ${lead.estimatedPages || 'N/A'}
- Target Keywords: ${lead.targetKeywords || 'N/A'}
- Website URL: ${lead.websiteUrl || 'N/A'}
- Instagram: ${lead.instagramProfile || 'N/A'}

REQUIREMENTS & MESSAGE:
${lead.message || 'No additional message provided.'}

ATTRIBUTION & METADATA:
- Lead ID: ${lead.id || 'N/A'}
- Submitted At: ${formattedDate}
- Source URL: ${lead.sourceUrl || 'Direct Website'}
- UTM: ${[lead.utmSource, lead.utmMedium, lead.utmCampaign].filter(Boolean).join(' / ') || 'None'}

Direct Reply: Visitor's email is set as Reply-To in this message.
Recipient: ${NOTIFICATION_RECIPIENT}
CoreClick Varanasi — https://coreclick.in
=====================================================
`.trim();
}

/**
 * Send automated email notification via Resend
 */
export async function sendLeadNotificationEmail(lead: LeadSubmission): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = NOTIFICATION_RECIPIENT;
  const subject = `⚡ New Lead: ${lead.fullName} – ${lead.serviceInterestedIn || 'General Enquiry'} (${lead.businessName || 'Direct'})`;

  // Check if Resend API key is configured
  if (!apiKey || apiKey === 'MY_RESEND_API_KEY' || apiKey.trim() === '') {
    console.error('[Resend Error] RESEND_API_KEY environment variable is not configured.');
    return {
      success: false,
      recipient,
      error: 'RESEND_API_KEY environment variable is missing on server.',
    };
  }

  try {
    const resend = new Resend(apiKey);
    const html = generateCoreClickEmailHtml(lead);
    const text = generateCoreClickEmailText(lead);

    const fromAddress = DEFAULT_FROM_EMAIL;

    const emailPayload: {
      from: string;
      to: string[];
      subject: string;
      html: string;
      text: string;
      replyTo?: string;
    } = {
      from: fromAddress,
      to: [recipient],
      subject,
      html,
      text,
    };

    // Set Reply-To to visitor's email
    if (lead.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email.trim())) {
      emailPayload.replyTo = lead.email.trim();
    }

    const response = await resend.emails.send(emailPayload);

    if (response.error) {
      console.error('[Resend API Delivery Error]:', response.error.name || 'Error', response.error.message);
      return {
        success: false,
        recipient,
        error: response.error.message || 'Resend API returned an error.',
      };
    }

    console.log(`[Resend Email Dispatched Successfully] ID: ${response.data?.id} to ${recipient}`);
    return {
      success: true,
      simulated: false,
      recipient,
      messageId: response.data?.id,
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error('[Resend Email Exception]:', errorMessage);
    return {
      success: false,
      recipient,
      error: errorMessage,
    };
  }
}
