import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting (Note: clears on serverless cold starts)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.lastReset > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown-ip';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // 2. Parse Body
    let body;
    try {
        body = await request.json();
    } catch (err) {
        return NextResponse.json({ success: false, message: 'Invalid JSON request format.' }, { status: 400 });
    }
    const { formName, name, email, phone, company, product, message, pageUrl, ...additionalFields } = body;

    // 3. Validation
    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { success: false, message: 'Name and either Email or Phone are required.' },
        { status: 400 }
      );
    }

    // 4. Configure Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // App Password
      },
    });

    // 5. Construct Email HTML
    const formattedDate = new Date().toLocaleString();
    let extraFieldsHtml = '';
    
    // Process extra dynamically submitted fields
    for (const [key, value] of Object.entries(additionalFields)) {
      if (value && typeof value === 'string') {
        const cleanKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        extraFieldsHtml += `<tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">${cleanKey}</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${value.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
        </tr>`;
      }
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #333;">
        <div style="background-color: #033695; padding: 25px; text-align: center; border-radius: 8px 8px 0 0;">
          <h2 style="color: #fff; margin: 0; font-size: 24px;">New Website Enquiry</h2>
        </div>
        
        <div style="padding: 25px; background-color: #f8fafc; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
          <p style="font-size: 16px; margin-bottom: 25px;">You have received a new enquiry from the website. Below are the details:</p>
          
          <table style="width: 100%; border-collapse: collapse; background: #fff; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <tbody>
              <tr>
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; width: 35%; color: #1e293b;">Form Source</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #334155;">
                    <span style="background-color: #e2e8f0; padding: 4px 8px; border-radius: 4px; font-size: 13px; font-weight: bold;">
                        ${formName || 'General Website Form'}
                    </span>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Date & Time</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #334155;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Name</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #334155;">${name.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Email</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #334155;"><a href="mailto:${email || ''}" style="color: #033695;">${email || 'N/A'}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Phone</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #334155;">${phone || 'N/A'}</td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Company / Org</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #334155;">${company.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
              </tr>` : ''}
              ${product ? `<tr>
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Product / Service</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #334155;">${product.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
              </tr>` : ''}
              ${pageUrl ? `<tr>
                <td style="padding: 12px; border: 1px solid #e2e8f0; font-weight: bold; color: #1e293b;">Page URL</td>
                <td style="padding: 12px; border: 1px solid #e2e8f0; color: #334155;"><a href="${pageUrl}" style="color: #033695;">Link</a></td>
              </tr>` : ''}
              ${extraFieldsHtml}
            </tbody>
          </table>

          ${message ? `
          <div style="margin-top: 25px; padding: 15px; background-color: #fff; border: 1px solid #e2e8f0; border-left: 4px solid #033695; border-radius: 4px;">
            <h4 style="margin-top: 0; color: #1e293b; margin-bottom: 10px;">Message:</h4>
            <p style="white-space: pre-wrap; margin-bottom: 0; color: #334155; line-height: 1.5;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
          ` : ''}
        </div>
        
        <div style="text-align: center; padding: 20px; font-size: 13px; color: #64748b; margin-top: 10px;">
          <p>© ${new Date().getFullYear()} Shiv Balaji Surgical. All rights reserved.</p>
        </div>
      </div>
    `;

    const toEmail = process.env.EMAIL_TO || 'brandbanalo25@gmail.com';
    const safeFormName = formName ? ` - ${formName.replace(/</g, "&lt;").replace(/>/g, "&gt;")}` : '';

    // 6. Send Email
    await transporter.sendMail({
      from: `"Shiv Balaji Website" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: `New Website Enquiry${safeFormName}`,
      html: htmlContent,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true, message: 'Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.' });

  } catch (error) {
    console.error('Email API Error:', error);
    // Don't expose internal server error details to the frontend
    return NextResponse.json(
      { success: false, message: 'Unable to submit your enquiry right now. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}
