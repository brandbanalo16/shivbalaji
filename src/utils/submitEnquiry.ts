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

    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        pageUrl: typeof window !== 'undefined' ? window.location.href : data.pageUrl,
      }),
    });

    let result;
    try {
        result = await res.json();
    } catch {
        return { success: false, message: 'Unable to submit your enquiry right now. Please try again or contact us directly.' };
    }

    if (res.ok && result.success) {
      return { success: true, message: result.message || 'Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.' };
    } else {
      return { success: false, message: result.message || 'Unable to submit your enquiry right now. Please try again or contact us directly.' };
    }
  } catch (error) {
    console.error('Submit Enquiry Error:', error);
    return { success: false, message: 'Unable to submit your enquiry right now. Please try again or contact us directly.' };
  }
}
