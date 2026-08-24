"use client";

import { useState } from "react";
import Image from "next/image";
import { submitEnquiry } from "../../src/utils/submitEnquiry";

export default function DoctorContactForm({ formName = "Doctor Details Contact Form" }: { formName?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      formName,
      ...formData
    });

    if (result.success) {
      setStatus("success");
      setStatusMessage(result.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
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
            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                <div className="form-group">
                    <div className="icon"><i className="icon-45"></i></div>
                    <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
                </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                <div className="form-group">
                    <div className="icon"><i className="icon-46"></i></div>
                    <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                <div className="form-group">
                    <div className="icon">
                        <Image src="/assets/images/icons/icon-18.svg" alt="Phone" width={14} height={15} />
                    </div>
                    <input type="text" name="phone" placeholder="Phone" required value={formData.phone} onChange={handleChange} />
                </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                <div className="form-group">
                    <div className="icon"><i className="icon-48"></i></div>
                    <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                </div>
            </div>

            <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                <div className="form-group message-btn mx-0">
                    <button type="submit" className="theme-btn btn-two" disabled={status === "loading"}>
                        <span style={{ opacity: status === "loading" ? 0.7 : 1 }}>{status === "loading" ? 'Sending...' : 'Send your message'}</span>
                    </button>
                </div>
            </div>
        </div>
    </form>
  );
}
