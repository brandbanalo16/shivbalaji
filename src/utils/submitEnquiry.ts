"use server";

import nodemailer from "nodemailer";

export interface EnquiryData {
  formName?: string;
  name: string;
  email?: string;
  phone?: string;
  company?: string;
  product?: string;
  interest?: string;
  message?: string;
  pageUrl?: string;
  [key: string]: unknown;
}

export interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitEnquiry(data: EnquiryData): Promise<SubmitResult> {
  try {
    const name = data.name || "N/A";
    const email = data.email || "N/A";
    const phone = data.phone || "N/A";
    const company = data.company || "N/A";
    const message = data.message || "N/A";
    const productOrInterest = data.product || data.interest || "";
    
    if (name === "N/A" || (email === "N/A" && phone === "N/A")) {
      return { success: false, message: "Name and either Email or Phone are required." };
    }

    const subjectLine = productOrInterest ? `New Enquiry about ${productOrInterest}` : `New Enquiry from ${name}`;
    const dateStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Format body exactly like screenshot
    let bodyText = `New Website Enquiry\n\n`;
    bodyText += `Name: ${name}\n`;
    bodyText += `Email: ${email}\n`;
    bodyText += `Phone: ${phone}\n`;
    bodyText += `Company: ${company}\n`;
    bodyText += `Subject: ${subjectLine}\n\n`;
    bodyText += `Message:\n${message}\n\n`;
    bodyText += `Website: Shiv Balaji Surgicals\n`;
    bodyText += `Submission Date & Time: ${dateStr}\n`;

    // Ensure we have SMTP credentials from env
    const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
    const SMTP_PORT = process.env.SMTP_PORT || "587";
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    
    if (!SMTP_USER || !SMTP_PASS) {
      console.error("SMTP credentials are not configured properly.");
      return { success: false, message: "Unable to submit your enquiry. Please try again." };
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <noreply@shivbalajisurgicals.com>`,
      replyTo: email !== "N/A" ? email : undefined,
      to: ["shivbalajisurgical@gmail.com", "brandbanalo16@gmail.com"],
      subject: `New Website Enquiry - ${name}`,
      text: bodyText,
      html: bodyText.replace(/\n/g, "<br>"),
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Thank you! Your enquiry has been submitted successfully." };
  } catch (error) {
    console.error("Submit Enquiry Error:", error);
    return { success: false, message: "Unable to submit your enquiry. Please try again." };
  }
}
