'use client';

import { useState } from 'react';
import { submitEnquiry } from '../../src/utils/submitEnquiry';

interface ProductEnquiryFormProps {
  productName: string;
}

export default function ProductEnquiryForm({ productName }: ProductEnquiryFormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setMessage(null);

    const formData = new FormData(form);
    const data = {
      formName: 'Product Enquiry',
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      product: productName,
    };

    const result = await submitEnquiry(data);
    
    setMessage({
      type: result.success ? 'success' : 'error',
      text: result.message,
    });

    if (result.success) {
      form.reset();
    }
    
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && (
        <div style={{ padding: '15px', marginBottom: '20px', borderRadius: '6px', background: message.type === 'success' ? '#dcfce7' : '#fee2e2', color: message.type === 'success' ? '#166534' : '#991b1b', fontSize: '14px' }}>
          {message.text}
        </div>
      )}
      <div className="form-group mb-3">
        <label style={{ fontSize: "14px", fontWeight: 600, color: "#475569", marginBottom: "8px", display: "block" }}>Full Name *</label>
        <input type="text" name="name" required style={{ width: "100%", padding: "14px 20px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "15px", background: "#f8fafc" }} placeholder="Enter your name" disabled={loading} />
      </div>
      <div className="row mb-3">
        <div className="col-md-6 form-group mb-3 mb-md-0">
          <label style={{ fontSize: "14px", fontWeight: 600, color: "#475569", marginBottom: "8px", display: "block" }}>Email Address *</label>
          <input type="email" name="email" required style={{ width: "100%", padding: "14px 20px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "15px", background: "#f8fafc" }} placeholder="Enter your email" disabled={loading} />
        </div>
        <div className="col-md-6 form-group">
          <label style={{ fontSize: "14px", fontWeight: 600, color: "#475569", marginBottom: "8px", display: "block" }}>Phone Number *</label>
          <input type="text" name="phone" required style={{ width: "100%", padding: "14px 20px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "15px", background: "#f8fafc" }} placeholder="Enter your phone" disabled={loading} />
        </div>
      </div>
      <div className="form-group mb-4">
        <label style={{ fontSize: "14px", fontWeight: 600, color: "#475569", marginBottom: "8px", display: "block" }}>Message</label>
        <textarea name="message" rows={4} style={{ width: "100%", padding: "14px 20px", border: "1px solid #cbd5e1", borderRadius: "6px", fontSize: "15px", resize: "none", background: "#f8fafc" }} placeholder={`I am interested in ${productName}...`} disabled={loading}></textarea>
      </div>
      <button type="submit" disabled={loading} className="theme-btn btn-one" style={{ width: "100%", border: "none", padding: "15px", borderRadius: "6px", opacity: loading ? 0.7 : 1 }}>
        <span style={{ padding: "0" }}>{loading ? 'Submitting...' : 'Submit Enquiry'} <i className="fa-solid fa-arrow-right ms-2"></i></span>
      </button>
    </form>
  );
}
