"use client";

import { useState } from "react";
import Image from "next/image";

const certificates = [
    {
        id: 1,
        image: "/images/certificate-1.jpg",
        title: "ISO 14001:2015",
    },
    {
        id: 2,
        image: "/images/certificate-2.jpg",
        title: "ISO 9001:2015",
    },
    {
        id: 3,
        image: "/images/certificate-3.jpg",
        title: "Quality Certification",
    },
    {
        id: 4,
        image: "/images/certificate-4.jpg",
        title: "Medical Equipment Certification",
    },
];

const faqs = [
    {
        question: "Are You A Manufacturer Or A Trader?",
        answer:
            "We are a professional manufacturer and supplier of hospital furniture, medical equipment and healthcare products, serving hospitals, clinics and healthcare institutions across India.",
    },
    {
        question: "What Products Do You Manufacture?",
        answer:
            "We manufacture and supply hospital beds, ICU furniture, medical trolleys, examination tables, hospital equipment and other healthcare solutions.",
    },
    {
        question: "Do You Supply Products Across India?",
        answer:
            "Yes. We supply our products across India and support hospitals, clinics, distributors, dealers and healthcare projects.",
    },
    {
        question: "Do You Provide Installation Support?",
        answer:
            "Yes. Professional installation and after-sales support can be provided for applicable hospital furniture and medical equipment.",
    },
    {
        question: "Can You Handle Bulk Hospital Requirements?",
        answer:
            "Yes. We handle bulk requirements and customized healthcare projects according to the specifications and requirements of hospitals and institutions.",
    },
    {
        question: "How Can I Start An Inquiry?",
        answer:
            "Simply share your product requirements with our team. We will help you select the right products and provide the required quotation.",
    },
];

export default function AchievementSection() {
    const [activeCertificate, setActiveCertificate] = useState(0);
    const [activeFaq, setActiveFaq] = useState(null);

    const nextCertificate = () => {
        setActiveCertificate(
            (prev) => (prev + 1) % certificates.length
        );
    };

    const previousCertificate = () => {
        setActiveCertificate(
            (prev) =>
                (prev - 1 + certificates.length) %
                certificates.length
        );
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <section className="achievement-section">
            <div className="container">

                {/* =====================================
            SECTION HEADER
        ===================================== */}

                {/* <div className="section-heading text-center">

          <div className="section-small-title">
            <span className="small-line"></span>
            OUR ACHIEVEMENTS
            <span className="small-line"></span>
          </div>

          <h2>
            Trusted By <span>1000+</span> Hospitals
            <br />
            Across India
          </h2>

          <p>
            Delivering reliable healthcare products and solutions
            with quality, consistency and professional service.
          </p>

        </div> */}

                {/* =====================================
            MAIN CONTENT
        ===================================== */}

                <div className="row align-items-center g-4">

                    {/* =====================================
              LEFT - CERTIFICATES
          ===================================== */}

                    <div className="col-lg-6">

                        <div className="achievement-content">

                            <div className="content-label">
                                <span className="label-icon">✦</span>
                                QUALITY & CERTIFICATION
                            </div>

                            <h3>
                                Quality You Can
                                <br />
                                <span>Trust</span>
                            </h3>

                            <p className="achievement-description">
                                Our commitment to quality is reflected in our
                                manufacturing standards, certifications and
                                continuous quality inspection processes.
                            </p>

                            {/* Certificate Slider */}

                            <div className="certificate-wrapper">

                                <button
                                    type="button"
                                    className="certificate-arrow certificate-prev"
                                    onClick={previousCertificate}
                                    aria-label="Previous certificate"
                                >
                                    <i className="bi bi-chevron-left"></i>
                                    ‹
                                </button>

                                <div className="row g-3">

                                    {/* First certificate */}
                                    <div className="col-6">
                                        <div className="certificate-card">

                                            <div className="certificate-image-wrapper">

                                                <Image
                                                    src={
                                                        certificates[
                                                            activeCertificate
                                                        ].image
                                                    }
                                                    alt={
                                                        certificates[
                                                            activeCertificate
                                                        ].title
                                                    }
                                                    width={416}
                                                    height={520}
                                                    className="certificate-image"
                                                />

                                            </div>

                                            <div className="certificate-footer">
                                                <span>
                                                    {certificates[
                                                        activeCertificate
                                                    ].title}
                                                </span>
                                            </div>

                                        </div>
                                    </div>

                                    {/* Second certificate */}
                                    <div className="col-6">
                                        <div className="certificate-card">

                                            <div className="certificate-image-wrapper">

                                                <Image
                                                    src={
                                                        certificates[
                                                            (activeCertificate + 1) %
                                                            certificates.length
                                                        ].image
                                                    }
                                                    alt={
                                                        certificates[
                                                            (activeCertificate + 1) %
                                                            certificates.length
                                                        ].title
                                                    }
                                                    width={416}
                                                    height={520}
                                                    className="certificate-image"
                                                />

                                            </div>

                                            <div className="certificate-footer">
                                                <span>
                                                    {
                                                        certificates[
                                                            (activeCertificate + 1) %
                                                            certificates.length
                                                        ].title
                                                    }
                                                </span>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <button
                                    type="button"
                                    className="certificate-arrow certificate-next"
                                    onClick={nextCertificate}
                                    aria-label="Next certificate"
                                >
                                    ›
                                </button>

                            </div>

                            {/* Slider Dots */}

                            {/* Certificate Navigation */}
                            <div className="certificate-navigation">

                                <span className="navigation-line"></span>

                                <button
                                    type="button"
                                    className="navigation-arrow"
                                    onClick={previousCertificate}
                                    aria-label="Previous certificate"
                                >
                                    <span>‹</span>
                                </button>

                                <button
                                    type="button"
                                    className="navigation-arrow"
                                    onClick={nextCertificate}
                                    aria-label="Next certificate"
                                >
                                    <span>›</span>
                                </button>

                                <span className="navigation-line"></span>

                            </div>

                        </div>

                    </div>

                    {/* =====================================
              RIGHT - INQUIRY / FAQ
          ===================================== */}

                    <div className="col-lg-6">

                        <div className="inquiry-card">

                            <div className="inquiry-top">

                                <div>
                                    <span className="content-label">
                                        HAVE QUESTIONS?
                                    </span>

                                    <h3>
                                        Start Your
                                        <br />
                                        <span>Inquiry</span>
                                    </h3>
                                </div>

                                <div className="inquiry-icon">
                                    <span>✦</span>
                                </div>

                            </div>

                            <div className="faq-list">

                                {faqs.map((faq, index) => (
                                    <div
                                        className={
                                            activeFaq === index
                                                ? "faq-item active"
                                                : "faq-item"
                                        }
                                        key={index}
                                    >

                                        <button
                                            type="button"
                                            className="faq-question"
                                            onClick={() =>
                                                toggleFaq(index)
                                            }
                                        >

                                            <span className="faq-number">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="faq-text">
                                                {faq.question}
                                            </span>

                                            <span className="faq-plus">
                                                {activeFaq === index
                                                    ? "−"
                                                    : "+"}
                                            </span>

                                        </button>

                                        <div
                                            className={
                                                activeFaq === index
                                                    ? "faq-answer show"
                                                    : "faq-answer"
                                            }
                                        >
                                            <p>{faq.answer}</p>
                                        </div>

                                    </div>
                                ))}

                            </div>

                            <div className="inquiry-bottom">

                                <div>
                                    <strong>
                                        Need More Information?
                                    </strong>

                                    <span>
                                        Talk to our healthcare experts.
                                    </span>
                                </div>

                                <a
                                    href="/contact"
                                    className="orange-button"
                                >
                                    Start Inquiry
                                    <span>→</span>
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <style jsx>{`

        /* ==========================================
           SECTION
        ========================================== */

        .achievement-section {
          width: 100%;
          background: #ffffff;
          padding: 90px 0;
          position: relative;
          overflow: hidden;
        }

        /* ==========================================
   CERTIFICATE PAGINATION / NAVIGATION
========================================== */

.certificate-navigation {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  margin-top: 28px;
}

/* Horizontal Lines */

.navigation-line {
  width: 64px;
  height: 1px;
  background: #cfcfcf;
  display: block;
}

/* Circular Buttons */

.navigation-arrow {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  border: none;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #0754d9;
  font-size: 38px;
  font-weight: 300;
  line-height: 1;

  cursor: pointer;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);

  transition: all 0.3s ease;
}

/* Arrow alignment */

.navigation-arrow span {
  display: block;
  margin-top: -5px;
}

/* Hover */

.navigation-arrow:hover {
  background: #f58220;
  color: #ffffff;
  transform: translateY(-2px);
}

/* ==========================================
   MOBILE
========================================== */

@media (max-width: 767px) {

  .certificate-navigation {
    gap: 12px;
    margin-top: 22px;
  }

  .navigation-line {
    width: 40px;
  }

  .navigation-arrow {
    width: 52px;
    height: 52px;
    font-size: 32px;
  }

}

        /* ==========================================
           SECTION HEADER
        ========================================== */

        .section-heading {
          max-width: 750px;
          margin: 0 auto 55px;
        }

        .section-small-title {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #f58220;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 14px;
        }

        .small-line {
          width: 28px;
          height: 1px;
          background: #f58220;
        }

        .section-heading h2 {
          color: #172554;
          font-size: 44px;
          line-height: 1.15;
          font-weight: 800;
          margin: 0 0 15px;
        }

        .section-heading h2 span {
          color: #f58220;
        }

        .section-heading p {
          color: #64748b;
          font-size: 15px;
          line-height: 1.7;
          max-width: 620px;
          margin: auto;
        }

        /* ==========================================
           LEFT CONTENT
        ========================================== */

        .achievement-content {
          padding-right: 30px;
        }

        .content-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #f58220;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.2px;
          margin-bottom: 10px;
        }

        .label-icon {
          font-size: 14px;
        }

        .achievement-content h3 {
          color: #172554;
          font-size: 36px;
          line-height: 1.15;
          font-weight: 800;
          margin: 0 0 14px;
        }

        .achievement-content h3 span {
          color: #f58220;
        }

        .achievement-description {
          color: #64748b;
          font-size: 14px;
          line-height: 1.7;
          max-width: 550px;
          margin-bottom: 25px;
        }

        /* ==========================================
           CERTIFICATE
        ========================================== */

        .certificate-wrapper {
          position: relative;
        }

        .certificate-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
          transition: all 0.3s ease;
        }

        .certificate-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 35px rgba(15, 23, 42, 0.10);
        }

        .certificate-image-wrapper {
          background: #f8fafc;
          padding: 10px;
          height: 370px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .certificate-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .certificate-footer {
          border-top: 1px solid #eef2f7;
          padding: 11px 14px;
          color: #172554;
          font-size: 12px;
          font-weight: 700;
        }

        /* ==========================================
           ARROWS
        ========================================== */

        .certificate-arrow {
          position: absolute;
          z-index: 5;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid #e5e7eb;
          background: #fff;
          color: #172554;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(0,0,0,.08);
          transition: .3s ease;
        }

        .certificate-arrow:hover {
          color: #fff;
          background: #f58220;
          border-color: #f58220;
        }

        .certificate-prev {
          left: -17px;
          top: 47%;
        }

        .certificate-next {
          right: -17px;
          top: 47%;
        }

        /* ==========================================
           DOTS
        ========================================== */

        .certificate-dots {
          display: flex;
          justify-content: center;
          gap: 7px;
          margin-top: 17px;
        }

        .dot {
          width: 7px;
          height: 7px;
          padding: 0;
          border: 0;
          border-radius: 50%;
          background: #d1d5db;
          cursor: pointer;
          transition: .3s ease;
        }

        .dot.active {
          width: 22px;
          border-radius: 10px;
          background: #f58220;
        }

        /* ==========================================
           INQUIRY CARD
        ========================================== */

        .inquiry-card {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 10px 35px rgba(15, 23, 42, 0.06);
        }

        .inquiry-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 24px;
          border-bottom: 1px solid #e5e7eb;
          margin-bottom: 18px;
        }

        .inquiry-top h3 {
          color: #172554;
          font-size: 38px;
          line-height: 1.05;
          font-weight: 800;
          margin: 0;
        }

        .inquiry-top h3 span {
          color: #f58220;
        }

        .inquiry-icon {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: #fff1e6;
          color: #f58220;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 25px;
        }

        /* ==========================================
           FAQ
        ========================================== */

        .faq-item {
          border-bottom: 1px solid #e5e7eb;
        }

        .faq-question {
          width: 100%;
          border: 0;
          background: transparent;
          display: flex;
          align-items: center;
          text-align: left;
          padding: 17px 4px;
          cursor: pointer;
          gap: 13px;
        }

        .faq-number {
          color: #f58220;
          font-size: 11px;
          font-weight: 800;
          min-width: 22px;
        }

        .faq-text {
          flex: 1;
          color: #172554;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
        }

        .faq-plus {
          color: #f58220;
          font-size: 22px;
          font-weight: 400;
          width: 22px;
          text-align: center;
        }

        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows .3s ease;
        }

        .faq-answer p {
          overflow: hidden;
          margin: 0;
          padding: 0 40px 0 39px;
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
        }

        .faq-answer.show {
          grid-template-rows: 1fr;
        }

        .faq-answer.show p {
          padding-bottom: 17px;
        }

        /* ==========================================
           BOTTOM CTA
        ========================================== */

        .inquiry-bottom {
          margin-top: 25px;
          padding-top: 22px;
          border-top: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .inquiry-bottom strong {
          display: block;
          color: #172554;
          font-size: 14px;
          margin-bottom: 3px;
        }

        .inquiry-bottom span {
          color: #64748b;
          font-size: 12px;
        }

        .orange-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #f58220;
          color: #fff;
          text-decoration: none;
          padding: 11px 17px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          transition: .3s ease;
        }

        .orange-button:hover {
          background: #df6d0d;
          color: #fff;
          transform: translateY(-2px);
        }

        .orange-button span {
          color: #fff;
          font-size: 17px;
        }

        /* ==========================================
           TABLET
        ========================================== */

        @media (max-width: 991px) {

          .achievement-section {
            padding: 70px 0;
          }

          .achievement-content {
            padding-right: 0;
            margin-bottom: 35px;
          }

          .section-heading h2 {
            font-size: 38px;
          }

        }

        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 767px) {

          .achievement-section {
            padding: 55px 0;
          }

          .section-heading {
            margin-bottom: 35px;
          }

          .section-heading h2 {
            font-size: 31px;
          }

          .section-heading p {
            font-size: 13px;
          }

          .achievement-content h3 {
            font-size: 29px;
          }

          .certificate-image-wrapper {
            height: 300px;
          }

          .certificate-prev {
            left: -10px;
          }

          .certificate-next {
            right: -10px;
          }

          .inquiry-card {
            padding: 20px 16px;
          }

          .inquiry-top h3 {
            font-size: 30px;
          }

          .inquiry-icon {
            width: 45px;
            height: 45px;
            font-size: 19px;
          }

          .faq-question {
            padding: 14px 2px;
          }

          .faq-text {
            font-size: 13px;
          }

          .faq-answer p {
            padding-left: 35px;
            padding-right: 20px;
          }

          .inquiry-bottom {
            align-items: flex-start;
            flex-direction: column;
          }

        }

        /* ==========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 480px) {

          .section-heading h2 {
            font-size: 27px;
          }

          .achievement-content h3 {
            font-size: 26px;
          }

          .certificate-image-wrapper {
            height: 250px;
          }

          .certificate-footer {
            font-size: 11px;
          }

        }

      `}</style>
        </section>
    );
}