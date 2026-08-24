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

    const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
    const SMTP_PORT = process.env.SMTP_PORT || '587';
    const SMTP_SECURE = process.env.SMTP_SECURE || 'false';
    const SMTP_USER = process.env.SMTP_USER || 'workankit0807@gmail.com';
    const SMTP_PASS = process.env.SMTP_PASS || 'ryza lpbq jcpn kgwm';
    const EMAIL_TO = process.env.EMAIL_TO || 'workankit0807@gmail.com';

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
      from: `"Shiv Balaji Website" <${SMTP_USER}>`,
      replyTo: data.email || SMTP_USER,
      to: EMAIL_TO,
      subject: `New Website Enquiry from ${data.name}`,
      text: `
        New Website Enquiry
        
        FORM NAME
        ${data.formName || 'Contact Us Form'}
        
        NAME
        ${data.name}
        
        EMAIL
        ${data.email || 'N/A'}
        
        PHONE
        ${data.phone || 'N/A'}
        
        COMPANY
        ${data.company || 'N/A'}
        
        PRODUCT
        ${data.product || 'N/A'}
        
        MESSAGE
        ${data.message || 'N/A'}
        
        SUBMITTED FROM PAGE
        ${data.pageUrl || 'N/A'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #ff6b00; padding: 20px; text-align: center;">
            <h2 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 600;">New Website Enquiry</h2>
          </div>
          
          <div style="padding: 30px;">
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
              <div style="color: #666666; font-size: 12px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Form Name</div>
              <div style="color: #333333; font-size: 16px;">${data.formName || 'Contact Us Form'}</div>
            </div>
            
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
              <div style="color: #666666; font-size: 12px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Name</div>
              <div style="color: #333333; font-size: 16px;">${data.name}</div>
            </div>
            
            ${data.email ? `
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
              <div style="color: #666666; font-size: 12px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Email</div>
              <div style="color: #333333; font-size: 16px;"><a href="mailto:${data.email}" style="color: #1a73e8; text-decoration: none;">${data.email}</a></div>
            </div>
            ` : ''}
            
            ${data.phone ? `
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
              <div style="color: #666666; font-size: 12px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Phone</div>
              <div style="color: #333333; font-size: 16px;">${data.phone}</div>
            </div>
            ` : ''}

            ${data.company ? `
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
              <div style="color: #666666; font-size: 12px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Company</div>
              <div style="color: #333333; font-size: 16px;">${data.company}</div>
            </div>
            ` : ''}

            ${data.product ? `
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
              <div style="color: #666666; font-size: 12px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Product</div>
              <div style="color: #333333; font-size: 16px;">${data.product}</div>
            </div>
            ` : ''}
            
            ${data.message ? `
            <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #f0f0f0;">
              <div style="color: #666666; font-size: 12px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Message</div>
              <div style="color: #333333; font-size: 16px;">${data.message}</div>
            </div>
            ` : ''}
            
            ${data.pageUrl ? `
            <div style="margin-bottom: 10px;">
              <div style="color: #666666; font-size: 12px; font-weight: bold; margin-bottom: 5px; text-transform: uppercase;">Submitted From Page</div>
              <div style="color: #333333; font-size: 16px; background-color: #e8f0fe; display: inline-block; padding: 2px 5px; color: #1a73e8; font-weight: 600;">${data.pageUrl}</div>
            </div>
            ` : ''}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.' };
  } catch (error) {
    console.error('Submit Enquiry Error:', error);
    return { success: false, message: 'Unable to submit your enquiry right now. Please try again or contact us directly.' };
  }
}
