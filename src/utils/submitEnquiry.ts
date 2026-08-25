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

export async function submitEnquiry(data: EnquiryData): Promise<SubmitResult> {
  try {
    // 1. Client-Side Validation
    if (!data.name || (!data.email && !data.phone)) {
      return { success: false, message: 'Name and either Email or Phone are required.' };
    }

    // 2. Add current page URL if not present
    if (typeof window !== 'undefined' && !data.pageUrl) {
      data.pageUrl = window.location.href;
    }

    // 3. Call the PHP Endpoint
    // We send a POST request to sendmail.php located in the root of the server
    const response = await fetch('/sendmail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    return { 
      success: result.success, 
      message: result.message || (result.success ? 'Thank you! Your enquiry has been submitted successfully.' : 'Unable to submit your enquiry. Please try again.')
    };

  } catch (error) {
    console.error('Submit Enquiry Error:', error);
    return { success: false, message: 'Unable to submit your enquiry. Please try again.' };
  }
}
