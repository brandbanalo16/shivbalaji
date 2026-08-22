"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { submitEnquiry } from "../../../src/utils/submitEnquiry";

export default function Subscribe() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await submitEnquiry({
      formName: "Newsletter Subscribe",
      name: "Subscriber", // Name is required by backend, so we provide a default
      email: formData.get("email") as string,
    });

    setStatusMessage(result.message);
    if (result.success) {
      e.currentTarget.reset();
    }
    setLoading(false);
  };

  return (
    <section className="subscribe-section">
      <div className="auto-container">
        <div className="inner-container">
          <div className="row clearfix">

            {/* Content Column */}
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div className="light-icon">
                  <Image
                    src="/assets/images/icons/icon-16.svg"
                    alt="Light Icon"
                    width={100}
                    height={100}
                  />
                </div>
                <h2>Emergency Call</h2>
                <div className="support-box">
                  <div className="icon-box">
                    <Image
                      src="/assets/images/icons/icon-17.svg"
                      alt="Telephone Icon"
                      width={45}
                      height={45}
                    />
                  </div>
                  <span>Telephone</span>
                  <a href="tel:111454564567">+ (111) 45 456 4567</a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="col-lg-6 col-md-12 col-sm-12 form-column">
              <div className="form-inner">
                <h2>Sign up for Email</h2>
                {statusMessage && (
                  <div style={{ padding: '8px', marginBottom: '10px', fontSize: '13px', color: statusMessage.includes('Thank') ? '#166534' : '#991b1b' }}>
                    {statusMessage}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                    <button type="submit" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                      {loading ? '...' : 'Submit Now'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
