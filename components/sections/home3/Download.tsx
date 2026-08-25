"use client";

import Image from "next/image";
import { useState } from "react";
import { submitEnquiry } from "../../../src/utils/submitEnquiry";

export default function Download() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    setStatusMessage("");
    
    const formData = new FormData(form);
    const result = await submitEnquiry({
      formName: "Home3 Appointment Form",
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      product: formData.get("interest") as string,
    });
    
    setStatusMessage(result.message);
    setStatusType(result.success ? "success" : "error");
    
    if (result.success) {
      form.reset();
    }
    setLoading(false);
  };

  return (
        <section className="download-section pt_120">
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-39.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-40.png)" }}></div>
            </div>
            <figure className="ambulance"><Image src="/assets/images/resource/ambulance-2.png" alt="Image" width={453} height={254} priority /></figure>
            <figure className="image-layer"><Image src="/assets/images/resource/download-1.jpg" alt="Image" width={728} height={782} priority /></figure>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_six">
                            <div className="content-box">
                                <div className="sec-title mb_20">
                                    <span className="sub-title mb_5">Download Mobile App</span>
                                    <h2>For Better Test Download Mobile App</h2>
                                </div>
                                <div className="text-box mb_40">
                                    <p>Medical professionals include doctors, nurses, pharmacists, and other healthcare workers who work together to provide patient care. They may work in hospitals, clinics, private practices, or other healthcare settings.</p>
                                    <p>In summary, medical science is a complex and interdisciplinary field that plays a critical role in maintaining and improving human health. Its practitioners use a range of techniques and technologies to diagnose and treat illnesses and injuries, and medical research is an essential component of advancing healthcare.</p>
                                </div>
                                <div className="btn-box">
                                    <button type="button" className="app-store">
                                        <i className="icon-43"></i>
                                        <span>Download on</span>
                                        App Store
                                    </button>
                                    <button type="button" className="play-store">
                                        <i className="icon-44"></i>
                                        <span>Download on</span>
                                        Google Play
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                        <div className="content_block_seven">
                            <div className="content-box ml_100">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-33.png)" }}></div>
                                <h3>Make an Appointment</h3>
                                {statusMessage && (
                                  <div style={{ padding: '10px', marginBottom: '15px', borderRadius: '4px', background: statusType === 'success' ? '#dcfce7' : '#fee2e2', color: statusType === 'success' ? '#166534' : '#991b1b', fontSize: '14px' }}>
                                    {statusMessage}
                                  </div>
                                )}
                                <form onSubmit={handleSubmit} className="default-form">
                                    <div className="form-group">
                                        <div className="icon"><i className="icon-45"></i></div>
                                        <input type="text" name="name" placeholder="Name" required/>
                                    </div>
                                    <div className="form-group">
                                        <div className="icon"><i className="icon-46"></i></div>
                                        <input type="email" name="email" placeholder="Email" required/>
                                    </div>
                                    <div className="form-group">
                                        <div className="icon"><Image src="/assets/images/icons/icon-15.svg" alt="Icon" width={15} height={15} priority /></div>
                                        <div className="select-box">
                                            <select name="interest" className="selectmenu">
                                                <option value="">I&apos;m interested in *</option>
                                                <option value="Heart Health">Heart Health</option>
                                                <option value="Cardiology">Cardiology</option>
                                                <option>Dental</option>
                                                <option>Gastroenterology</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="icon"><i className="icon-48"></i></div>
                                        <textarea name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group mb_0 message-btn">
                                        <button type="submit" className="theme-btn btn-one" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                                            <span>{loading ? 'Submitting...' : 'Send Request'}</span>
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
