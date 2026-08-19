"use client";
import { useState } from "react";
import ModalVideo from "../../../components/elements/VideoPopup";
import Link from "next/link";

export default function Chooseus() {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, title: "Premium Quality" },
    { id: 2, title: "Wide Product Range" },
    { id: 3, title: "Trusted Service" },
  ];

  const tabContent = [
    {
      id: 1,
      Img: "/assets/images/resource/why1.png",
      heading: "Premium Quality",
      text: "We use high-grade materials and advanced manufacturing processes to produce hospital furniture and medical equipment that deliver exceptional durability, safety, and long-term performance.",
      list: [
        "Premium Grade Materials",
        "Strict Quality Control",
        "Durable & Reliable Products",
        "Built for Long - Term Performance",
      ],
    },
    {
      id: 2,
      Img: "/assets/images/resource/why2.png",
      heading: "Wide Product Range",
      text: "From hospital beds and ICU beds to trolleys, hospital tables, and medical utility equipment, we provide complete solutions for modern healthcare facilities.",
      list: [
        "Hospital Beds & ICU Beds",
        "Hospital & Instrument Trolleys",
        "Hospital Tables",
        "Medical Utility Equipment",
      ],
    },
    {
      id: 3,
      Img: "/assets/images/resource/why3.png",
      heading: "Trusted Service",
      text: "We are committed to timely delivery, customer satisfaction, and dependable support, helping hospitals and healthcare institutions operate with confidence.",
      list: [
        " Timely Delivery",
        "Customer - Centric Support",
        "Customized Solutions",
        "Trusted by Healthcare Professionals",
      ],
    },
  ];

  return (
    <section className="chooseus-section sec-pad p_relative">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(/assets/images/shape/shape-15.png)" }}
      ></div>

      <div className="auto-container">
        <div className="sec-title centred mb_55">
          <span className="sub-title mb_5">Why Choose Us</span>

          <h2>What&apos;s Our Speciality</h2>

          <p>
            We manufacture premium hospital furniture and medical equipment designed
            for reliability, safety,
            <br />
            and long-lasting performance. Trusted by healthcare professionals for
            quality and innovation.
          </p>
        </div>

        

        {/* Tabs Buttons */}
        <div className="tabs-box">
          <div className="tab-btns tab-buttons clearfix centred mb_40">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? "active-btn" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <h3>{tab.title}</h3>
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          <div className="tabs-content">
            {tabContent.map((content) => (
              <div
                key={content.id}
                className={`tab ${activeTab === content.id ? "active-tab" : ""}`}
              >

                
                <div className="inner-box">
                  <div
                    className="shape"
                    style={{ backgroundImage: "url(/assets/images/shape/shape-14.png)" }}
                  ></div>
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                      <div
                        className="video-inner"
                        style={{ backgroundImage: `url(${content.Img})` }}
                      >
                        {/* <div className="video-btn">
                          <ModalVideo />
                        </div> */}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                      <div className="content-block-two">
                        <div className="content-box ml_40">
                          <div className="text-box">
                            <h3>{content.heading}</h3>
                            <p>{content.text}</p>

                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                marginTop: "25px",
                                gap: "0px",
                                flexWrap: "wrap",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0px",
                                }}
                              >
                                <i
                                  className="fas fa-shield-alt"
                                  style={{
                                    fontSize: "26px",
                                    color: "#fe5e04",
                                  }}
                                ></i>
                                <span
                                  style={{
                                    color: "#08245c",
                                    fontWeight: 600,
                                    fontSize: "16px",
                                  }}
                                >
                                  Trusted Quality
                                </span>
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "0px",
                                }}
                              >
                                <i
                                  className="fas fa-award"
                                  style={{
                                    fontSize: "26px",
                                    color: "#fe5e04",
                                  }}
                                ></i>
                                <span
                                  style={{
                                    color: "#08245c",
                                    fontWeight: 600,
                                    fontSize: "16px",
                                  }}
                                >
                                  Premium Materials
                                </span>
                              </div>

                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "05px",
                                }}
                              >
                                <i
                                  className="fas fa-hospital"
                                  style={{
                                    fontSize: "26px",
                                    color: "#fe5e04",
                                  }}
                                ></i>
                                <span
                                  style={{
                                    color: "#08245c",
                                    fontWeight: 600,
                                    fontSize: "16px",
                                  }}
                                >
                                  Healthcare Focused
                                </span>
                              </div>
                            </div>
                          </div>
                          <ul className="list-style-one clearfix">
                            {content.list.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                          <div className="btn-box">
                            <Link href="/" className="theme-btn btn-two">
                              <span>See All Product Range</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}