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
  [key: string]: unknown; // for any extra form fields
}

export interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitEnquiry(data: EnquiryData): Promise<SubmitResult> {
  try {
    // Basic validation
    if (!data.name || (!data.email && !data.phone)) {
      return { success: false, message: 'Name and either Email or Phone are required.' };
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, EMAIL_TO } = process.env;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === 'true',
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: SMTP_USER,
      to: EMAIL_TO,
      subject: `New Enquiry from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email || 'N/A'}
        Phone: ${data.phone || 'N/A'}
        Company: ${data.company || 'N/A'}
        Product: ${data.product || 'N/A'}
        Message: ${data.message || 'N/A'}
        Page URL: ${data.pageUrl || 'N/A'}
      `,
      html: `
        <h3>New Enquiry Received</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
        <p><strong>Product:</strong> ${data.product || 'N/A'}</p>
        <p><strong>Message:</strong> ${data.message || 'N/A'}</p>
        <p><strong>Page URL:</strong> ${data.pageUrl || 'N/A'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.' };
  } catch (error) {
    console.error('Submit Enquiry Error:', error);
    return { success: false, message: 'Unable to submit your enquiry right now. Please try again or contact us directly.' };
  }
}
