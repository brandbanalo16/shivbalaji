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
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // 2. Parse Body
    const body = await request.json();
    const { formName, name, email, phone, company, product, message, pageUrl, ...additionalFields } = body;

    // 3. Validation
    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { error: 'Name and either Email or Phone are required.' },
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
    
    for (const [key, value] of Object.entries(additionalFields)) {
      if (value) {
        extraFieldsHtml += `<tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">${key}</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${value}</td>
        </tr>`;
      }
    }

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <div style="background-color: #fe5e04; padding: 20px; text-align: center;">
          <h2 style="color: #fff; margin: 0;">New Website Enquiry</h2>
        </div>
        
        <div style="padding: 20px; background-color: #f9f9f9; border: 1px solid #eee;">
          <p>You have received a new enquiry from the website. Below are the details:</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tbody>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 35%;">Form Name</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formName || 'Website Form'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Date & Time</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${email || ''}">${email || 'N/A'}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${phone || 'N/A'}</td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Company</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${company}</td>
              </tr>` : ''}
              ${product ? `<tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Product/Service</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${product}</td>
              </tr>` : ''}
              ${pageUrl ? `<tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Page URL</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><a href="${pageUrl}">${pageUrl}</a></td>
              </tr>` : ''}
              ${extraFieldsHtml}
            </tbody>
          </table>

          ${message ? `
          <div style="margin-top: 20px; padding: 15px; background-color: #fff; border: 1px solid #ddd; border-left: 4px solid #fe5e04;">
            <h4 style="margin-top: 0;">Message:</h4>
            <p style="white-space: pre-wrap; margin-bottom: 0;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
          ` : ''}
        </div>
        
        <div style="text-align: center; padding: 20px; font-size: 12px; color: #777;">
          <p>This email was sent automatically from the Shiv Balaji Surgical website.</p>
        </div>
      </div>
    `;

    const toEmail = process.env.ENQUIRY_EMAIL || 'brandbanalo25@gmail.com';
    const safeFormName = formName ? ` - ${formName}` : '';

    // 6. Send Email
    await transporter.sendMail({
      from: `"Shiv Balaji Website" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: `New Website Enquiry${safeFormName}`,
      html: htmlContent,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true, message: 'Enquiry submitted successfully.' });

  } catch (error) {
    console.error('Email API Error:', error);
    // Don't expose internal server error details to the frontend
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again later.' },
      { status: 500 }
    );
  }
}
