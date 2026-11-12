import { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers for Vercel production
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const body = req.body || {};
    const {
      fullName,
      phone,
      email,
      businessName,
      city,
      serviceInterestedIn,
      budgetRange,
      adBudget,
      message,
      projectType,
      timeline,
      estimatedPages,
      preferredPlatform,
      contentFrequency,
      businessObjectives,
      websiteUrl,
      instagramProfile,
      targetKeywords,
      sourceUrl,
      honeypot,
      _hp,
      website_hp,
    } = body;

    // 1. Anti-Spam Honeypot Check (Silent Bot Trap)
    if (honeypot || _hp || website_hp) {
      console.warn('[CoreClick Spam Guard] Bot submission detected via honeypot field. Discarding silently.');
      return res.status(200).json({
        success: true,
        leadId: `CC-BOT-${Date.now().toString(36).toUpperCase()}`,
        message: 'Thank you! Your enquiry has been received.',
      });
    }

    // 2. Server-Side Payload Validation
    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const cleanPhone = (phone || '').toString().replace(/[\s\-\(\)]/g, '');
    const indianPhoneRegex = /^(?:\+91|91)?[6-9]\d{9}$/;
    if (!cleanPhone || !indianPhoneRegex.test(cleanPhone)) {
      errors.phone = 'Please provide a valid 10-digit Indian phone number (e.g., 8707414150).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Server-side validation failed. Please check the highlighted fields.',
        errors,
      });
    }

    // 3. Verify Server Environment Variable RESEND_API_KEY
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || typeof apiKey !== 'string' || apiKey.trim() === '' || apiKey === 'MY_RESEND_API_KEY') {
      console.error('[Resend Error] RESEND_API_KEY environment variable is missing or invalid on server.');
      return res.status(500).json({
        success: false,
        message: 'Server configuration error: RESEND_API_KEY is not set in environment variables.',
      });
    }

    const recipient = process.env.NOTIFICATION_EMAIL || 'itscoreclick@gmail.com';
    const fromEmail =
      process.env.EMAIL_FROM ||
      process.env.RESEND_FROM_EMAIL ||
      'CoreClick Inquiries <leads@coreclick.in>';
    const subject = 'New Business Enquiry – CoreClick Website';

    const leadId = `CC-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
    const submittedAt = new Date().toISOString();

    // Format IST Date
    const formattedDate =
      new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'medium',
      }).format(new Date(submittedAt)) + ' IST';

    const budget = budgetRange || adBudget || 'Not specified / Discussion required';
    const service = serviceInterestedIn || 'General Growth Enquiry';
    const business = businessName || 'Not specified';
    const location = city || 'Varanasi / India';
    const projDetails = message || 'No additional project details or challenges provided.';

    // Professional HTML Email Template matching CoreClick branding
    const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FFF9F6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #11121D; line-height: 1.6;">
  <div style="max-width: 640px; margin: 24px auto; background: #FFFFFF; border-radius: 20px; overflow: hidden; border: 1px solid #FFE0D3; box-shadow: 0 10px 25px rgba(17, 18, 29, 0.06);">
    <div style="height: 8px; background: linear-gradient(90deg, #FF8A24 0%, #FF6038 50%, #FF087F 100%);"></div>
    <div style="padding: 32px 32px 24px; background: #FFF9F6; border-bottom: 1px solid #FFEBE1;">
      <span style="display: inline-block; font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; color: #FF6038; background: #FFF0E9; border: 1px solid rgba(255, 96, 56, 0.25); padding: 4px 12px; border-radius: 9999px; margin-bottom: 12px;">⚡ NEW BUSINESS ENQUIRY</span>
      <h1 style="margin: 0 0 6px 0; font-size: 26px; font-weight: 800; color: #11121D; letter-spacing: -0.5px;">${escapeHtml(fullName)}</h1>
      <p style="margin: 0; font-size: 14px; color: #65677A;">Enquiry for <strong>${escapeHtml(service)}</strong> &bull; ${escapeHtml(business)}</p>
    </div>

    <div style="padding: 32px;">
      <h2 style="font-size: 12px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; color: #FF6038; margin: 0 0 16px 0; border-bottom: 1px solid #F0E9E4; padding-bottom: 8px;">Business Enquiry Details</h2>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
        <tr>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; width: 38%; color: #727383; font-weight: 600;">Full Name</td>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; width: 62%; color: #11121D; font-weight: 700;">${escapeHtml(fullName)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #727383; font-weight: 600;">Phone Number</td>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #FF6038; font-weight: 700;">
            <a href="tel:${escapeHtml(cleanPhone)}" style="color: #FF6038; text-decoration: none;">${escapeHtml(phone)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #727383; font-weight: 600;">Email Address</td>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #11121D; font-weight: 700;">
            <a href="mailto:${escapeHtml(email)}" style="color: #11121D; text-decoration: underline;">${escapeHtml(email)}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #727383; font-weight: 600;">Business / Brand Name</td>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #11121D; font-weight: 700;">${escapeHtml(business)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #727383; font-weight: 600;">City / Location</td>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #11121D; font-weight: 700;">${escapeHtml(location)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #727383; font-weight: 600;">Primary Service of Interest</td>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #FF087F; font-weight: 700;">${escapeHtml(service)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #727383; font-weight: 600;">Estimated Monthly Budget</td>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #11121D; font-weight: 700;">${escapeHtml(budget)}</td>
        </tr>
        ${
          projectType
            ? `<tr>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #727383; font-weight: 600;">Project Type</td>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #11121D; font-weight: 700;">${escapeHtml(projectType)}</td>
        </tr>`
            : ''
        }
        ${
          timeline
            ? `<tr>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #727383; font-weight: 600;">Timeline</td>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #11121D; font-weight: 700;">${escapeHtml(timeline)}</td>
        </tr>`
            : ''
        }
        <tr>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #727383; font-weight: 600;">Submission Date and Time</td>
          <td style="padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #F8F1EC; color: #11121D; font-weight: 700;">${escapeHtml(formattedDate)}</td>
        </tr>
      </table>

      <div style="background: #FFF9F6; border-left: 4px solid #FF6038; border-radius: 8px; padding: 16px 20px; margin-bottom: 28px;">
        <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #FF6038; margin-bottom: 8px;">Project Details / Current Challenges</div>
        <div style="margin: 0; font-size: 14px; color: #11121D; white-space: pre-wrap;">${escapeHtml(projDetails)}</div>
      </div>

      <div style="background: #F8F9FA; border-radius: 12px; padding: 16px 20px; font-size: 12px; color: #65677A;">
        <div><strong>Lead ID:</strong> ${escapeHtml(leadId)}</div>
        <div><strong>Source URL:</strong> ${escapeHtml(sourceUrl || 'CoreClick Website')}</div>
      </div>
    </div>

    <div style="padding: 24px 32px; background: #11121D; color: #A0A2B3; font-size: 12px; text-align: center;">
      <strong>CoreClick Digital Growth Agency</strong><br>
      D64/29 KA-1, Bank Colony, Sigra, Varanasi, Uttar Pradesh 221002<br>
      <span style="display:inline-block; margin-top: 8px;">Sent to <strong>${escapeHtml(recipient)}</strong> &bull; Reply-To set to ${escapeHtml(email)}</span>
    </div>
  </div>
</body>
</html>`;

    // 4. Send Email via Official Resend SDK
    const resend = new Resend(apiKey);
    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      replyTo: email.trim(),
      subject,
      html: htmlContent,
      text: `New Business Enquiry — CoreClick Website\n\nFull Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nBusiness: ${business}\nCity: ${location}\nService: ${service}\nBudget: ${budget}\nDetails: ${projDetails}\nSubmitted: ${formattedDate}`,
    });

    // 5. Inspect Resend Error Object BEFORE Returning Success
    if (emailResponse.error) {
      console.error(
        '[Resend Delivery Error]:',
        emailResponse.error.name || 'APIError',
        emailResponse.error.message || 'Resend error'
      );
      return res.status(502).json({
        success: false,
        message: `Email delivery failed: ${emailResponse.error.message}`,
        error: emailResponse.error,
      });
    }

    console.log('[Resend Email Delivered Successfully] Message ID:', emailResponse.data?.id);

    return res.status(200).json({
      success: true,
      leadId,
      message: 'Thank you! Your enquiry has been received and forwarded to CoreClick.',
      messageId: emailResponse.data?.id,
    });
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.error('[Vercel API Exception]:', errMsg);
    return res.status(500).json({
      success: false,
      message: `Failed to process enquiry: ${errMsg}`,
    });
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
