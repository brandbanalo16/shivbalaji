"use client";

import { useState } from "react";
import { submitEnquiry } from "../../src/utils/submitEnquiry";

export default function DownloadProductList() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const result = await submitEnquiry({
      formName: "Download Product List",
      ...formData
    });

    if (!result.success) {
      setStatusMessage(result.message);
      setLoading(false);
      return;
    }

    // Download PDF
    const link = document.createElement("a");
    link.href = "/assets/documents/product-list.pdf"; // Assuming there's a document here, or just a fallback
    link.download = "Shiv-Balaji-Product-List.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setStatusMessage("Download started!");
    setTimeout(() => {
      setShowForm(false);
      setStatusMessage("");

      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        city: "",
        message: "",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      {/* Left Fixed Button */}
      <div className="download-product-list">
        <button className="download-btn" onClick={() => setShowForm(true)}>
          <i className="fa fa-download"></i>
          <span>Download Product List</span>
        </button>
      </div>

      {/* Popup */}
      {showForm && (
        <div className="download-overlay">
          <div className="download-popup">
            <button className="close-btn" onClick={() => setShowForm(false)}>
              ×
            </button>

            <h2>Download Product List</h2>
            <p>Fill out the form below to get our complete product catalog.</p>
            {statusMessage && (
              <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '4px', background: statusMessage.includes('started') ? '#dcfce7' : '#fee2e2', color: statusMessage.includes('started') ? '#166534' : '#991b1b', fontSize: '14px' }}>
                {statusMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                pattern="[0-9]{10}"
                minLength={10}
                maxLength={10}
                inputMode="numeric"
                value={formData.phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setFormData({ ...formData, phone: value });
                }}
              />
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Your City"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
              />

              <input
                type="text"
                placeholder="Your Requirements"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />

              <button type="submit" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Processing...' : 'Submit & Download'}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
