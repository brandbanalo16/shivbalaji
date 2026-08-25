"use server";

import nodemailer from "nodemailer";

export interface EnquiryData {
  formName?: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  product?: string;
  message?: string;
  pageUrl?: string;
  [key: string]: unknown;
}

export interface SubmitResult {
  success: boolean;
  message: string;
}

const sanitizeHtml = (str: unknown): string => {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

export async function submitEnquiry(data: EnquiryData): Promise<SubmitResult> {
  try {
    // 1. Validate Fields
    if (!data.name || (!data.email && !data.phone)) {
      return { success: false, message: 'Name and either Email or Phone are required.' };
    }

    // 2. Sanitize Inputs
    const sanitizedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, typeof value === 'string' ? sanitizeHtml(value) : value])
    ) as EnquiryData;

    // 3. Configure SMTP
    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = process.env.SMTP_PORT || '587';
    const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const EMAIL_BCC = process.env.EMAIL_BCC;
    const EMAIL_TO = process.env.EMAIL_TO || SMTP_USER;

    if (!SMTP_USER || !SMTP_PASS) {
      console.error('SMTP credentials are not configured properly.');
      return { success: false, message: 'Unable to submit your enquiry. Please try again.' };
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const formName = sanitizedData.formName || 'Website Enquiry';
    const currentDateTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    
    // Dynamic fields to display
    const fieldsToDisplay = [
      { label: 'Name', value: sanitizedData.name },
      { label: 'Email', value: sanitizedData.email },
      { label: 'Phone', value: sanitizedData.phone },
      { label: 'Company', value: sanitizedData.company },
      { label: 'Product/Interest', value: sanitizedData.product || sanitizedData.interest },
      { label: 'City', value: sanitizedData.city },
      { label: 'Message', value: sanitizedData.message },
      { label: 'Submitted From Page', value: sanitizedData.pageUrl }
    ].filter(f => f.value); // Only show fields that have a value

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #ff6b00; padding: 20px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">${formName}</h2>
        </div>
        
        <div style="padding: 30px;">
          <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
            <div style="color: #666666; font-size: 12px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Submission Details</div>
            <div style="color: #333333; font-size: 14px;"><strong>Date/Time:</strong> ${currentDateTime}</div>
          </div>

          ${fieldsToDisplay.map(field => `
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
              <div style="color: #666666; font-size: 12px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">${field.label}</div>
              <div style="color: #333333; font-size: 16px;">${field.value}</div>
            </div>
          `).join('')}
        </div>
        <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #888888;">
          This is an automated message from the Shiv Balaji Surgicals website.
        </div>
      </div>
    `;

    const textContent = fieldsToDisplay.map(field => `${field.label.toUpperCase()}\n${field.value}`).join('\n\n');

    const mailOptions = {
      from: SMTP_USER, // Must use configured SMTP_USER
      replyTo: sanitizedData.email || undefined,
      to: EMAIL_TO,
      bcc: EMAIL_BCC,
      subject: `New ${formName} from ${sanitizedData.name}`,
      text: `New Website Enquiry (${currentDateTime})\n\n${textContent}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Thank you! Your enquiry has been submitted successfully.' };
  } catch (error) {
    // Log generic error to avoid exposing sensitive info
    console.error('Submit Enquiry Error: Failed to send email.');
    return { success: false, message: 'Unable to submit your enquiry. Please try again.' };
  }
}
