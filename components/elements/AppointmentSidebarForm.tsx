"use client";

import { useState } from "react";
import Image from "next/image";
import { submitEnquiry } from "../../src/utils/submitEnquiry";

export default function AppointmentSidebarForm({ formName = "Sidebar Appointment Form" }: { formName?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      setFormData({ name: "", email: "", interest: "", message: "" });
    } else {
      setStatus("error");
      setStatusMessage(result.message);
    }
  };

  return (
    <div className="form-inner">
        <form onSubmit={handleSubmit} className="default-form">
            {statusMessage && (
                <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '4px', background: status === 'success' ? '#dcfce7' : '#fee2e2', color: status === 'success' ? '#166534' : '#991b1b', fontSize: '13px' }}>
                    {statusMessage}
                </div>
            )}
            <div className="form-group">
                <div className="icon"><i className="icon-45"></i></div>
                <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
                <div className="icon"><i className="icon-46"></i></div>
                <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
                <div className="icon"><Image src="/assets/images/icons/icon-15.svg" alt="Image" width={15} height={15} priority /></div>
                <div className="select-box">
                    <select name="interest" className="selectmenu" value={formData.interest} onChange={handleChange}>
                        <option value="">I&apos;m interested in *</option>
                        <option value="Heart Health">Heart Health</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Dental">Dental</option>
                        <option value="Gastroenterology">Gastroenterology</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <div className="icon"><i className="icon-48"></i></div>
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div className="form-group message-btn">
                <button type="submit" className="theme-btn btn-two" disabled={status === "loading"}>
                    <span style={{ opacity: status === "loading" ? 0.7 : 1 }}>{status === "loading" ? 'Sending...' : 'Send your message'}</span>
                </button>
            </div>
        </form>
    </div>
  );
}
