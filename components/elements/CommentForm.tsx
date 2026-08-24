"use client";

import { useState } from "react";
import { submitEnquiry } from "../../src/utils/submitEnquiry";

export default function CommentForm({ formName = "Leave a Reply" }: { formName?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
      setStatusMessage(result.message);
    }
  };

  return (
    <div className="comment-form">
        <h3>Leave a Reply</h3>
        <form onSubmit={handleSubmit} className="default-form">
            {statusMessage && (
            <div style={{ padding: '15px', marginBottom: '20px', borderRadius: '6px', background: status === 'success' ? '#dcfce7' : '#fee2e2', color: status === 'success' ? '#166534' : '#991b1b', fontSize: '14px' }}>
                {statusMessage}
            </div>
            )}
            <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                    <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                    <textarea name="message" placeholder="Type Comment Here ..." required value={formData.message} onChange={handleChange}></textarea>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                    <button type="submit" className="theme-btn btn-two" disabled={status === "loading"}>
                        <span style={{ opacity: status === "loading" ? 0.7 : 1 }}>{status === "loading" ? 'Sending...' : 'Send your message'}</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
  );
}
