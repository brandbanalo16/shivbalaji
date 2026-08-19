"use client";

import { useState } from "react";

export default function DownloadProductList() {
  const [showForm, setShowForm] = useState(false);

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

    // Save data (Optional)
    console.log(formData);

    // API Call
    // await fetch("/api/download", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // Download PDF
    const link = document.createElement("a");
    link.href = "/downloads/product-list.pdf"; // Put PDF inside public/downloads
    link.download = "Product-List.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowForm(false);

    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      city: "",
      message: "",
    });
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

            <h3 style={{ color: "orange", fontWeight: "bold" }}>
              Download Product Catalogue
            </h3>

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

              <button type="submit" className="submit-btn">
                Submit & Download
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
