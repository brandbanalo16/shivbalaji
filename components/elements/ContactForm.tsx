"use client";

import { useState } from "react";
import { submitEnquiry } from "../../src/utils/submitEnquiry";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const result = await submitEnquiry({
      formName: "Contact Us Form",
      ...formData
    });

    if (result.success) {
      setStatus("success");
      setStatusMessage(result.message);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      setStatus("error");
      setStatusMessage(result.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="default-form">
        {statusMessage && (
          <div style={{ padding: '15px', marginBottom: '20px', borderRadius: '6px', background: status === 'success' ? '#dcfce7' : '#fee2e2', color: status === 'success' ? '#166534' : '#991b1b', fontSize: '14px' }}>
            {statusMessage}
          </div>
        )}
        <div className="row clearfix">
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Comment Here..."
                />
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                <button className="theme-btn btn-one" type="submit" name="submit-form" disabled={status === "loading"}>
                    <span style={{ opacity: status === "loading" ? 0.7 : 1 }}>{status === "loading" ? 'Sending...' : 'Send Message'}</span>
                </button>
            </div>
        </div>
    </form>
  );
}
