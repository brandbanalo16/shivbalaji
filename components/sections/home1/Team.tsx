"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Team() {
    const [activeCertificate, setActiveCertificate] = useState(0);
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    /* ==========================================
       CERTIFICATES
    ========================================== */

    const certificates = [
        {
            id: 1,
            image: "/assets/images/certificates/certificate-1.png",
            title: "ISO 14001:2015",
        },
        {
            id: 2,
            image: "/assets/images/certificates/certificate-2.png",
            title: "Manufacturing Certification" ,
        },
        {
            id: 3,
            image: "/assets/images/certificates/certificate-3.png",
            title: "ISO 13485:2016",
        },
        {
            id: 4,
            image: "/assets/images/certificates/certificate-4.png",
            title: "ISO 9001:2015",
        },
        {
            id: 5,
            image: "/assets/images/certificates/certificate-5.png",
            title: "GMP Certification",
        },
    ];

    /* ==========================================
       FAQ
    ========================================== */

    const faqs = [
        {
            question: "Are You A Manufacturer Or A Trader?",
            answer:
                "We are a professional manufacturer and supplier of hospital furniture, medical equipment and healthcare products, serving hospitals, clinics, healthcare institutions, distributors and dealers across India.",
        },
        {
            question: "What Products Do You Manufacture?",
            answer:
                "We manufacture and supply hospital beds, ICU furniture, medical trolleys, examination tables, hospital equipment and other healthcare products designed for hospitals and healthcare facilities.",
        },
        {
            question: "Do You Supply Products Across India?",
            answer:
                "Yes, we supply our products across India and support hospitals, clinics, distributors, dealers and healthcare projects with reliable product solutions.",
        },
        {
            question: "Do You Provide Installation Support?",
            answer:
                "Yes. Professional installation and after-sales support can be provided for applicable hospital furniture and medical equipment.",
        },
        {
            question: "Can You Handle Bulk Hospital Requirements?",
            answer:
                "Yes. We handle bulk requirements and customized healthcare projects according to the specifications and requirements of hospitals, clinics and healthcare institutions.",
        },
        {
            question: "How Can I Start An Inquiry?",
            answer:
                "Simply share your product requirements with our team. Our experts will help you select the right products and provide the required information and quotation.",
        },
    ];

    /* ==========================================
       CERTIFICATE NAVIGATION
    ========================================== */

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

    /* ==========================================
       FAQ TOGGLE
    ========================================== */

    const toggleFaq = (index: number) => {
        setActiveFaq(
            activeFaq === index ? null : index
        );
    };

    return (
        <section className="team-section achievement-section">

            {/* Background */}
            {/* <div
                className="bg-layer"
                style={{
                    backgroundImage:
                        "url('/assets/images/background/team-bg.jpg')",
                }}
            ></div> */}

            <div className="auto-container">

                {/* =====================================
            SECTION HEADER
        ===================================== */}
                {/* <div className="sec-title mb_60" style={{ textAlign: "center" }}>
                    <span className="sub-title mb_5">Our Achievements</span>
                    <h2>Trusted By <span>1000+</span> Hospitals<br />Across India</h2>
                    <p>Delivering reliable healthcare products and
                        solutions with quality, consistency and
                        professional service.</p>
                </div> */}

                {/* =====================================
            MAIN ROW
        ===================================== */}

                <div className="row align-items-center g-4">

                    {/* =====================================
              LEFT - CERTIFICATES
          ===================================== */}
                    <div className="col-lg-6">
                        <div className="achievement-content">
                            {/* Label */}
                            {/* <div className="content-label sec-title mb_60">
                                <span className=" label-icon sub-title mb_5">
                                    ✦
                                </span>
                               <span className="sub-title mb_5">Quality & Certification</span>
                            </div> */}
                            <div className="sec-title mb_60" >
                                <span className=" label-icon sub-title mb_5">
                                    ✦
                                </span>
                                <span className="sub-title mb_5">Achievements & Certification</span>
                                <h2>Quality You Can Trust</h2>
                                <p>Our commitment to quality is reflected in
                                    our manufacturing standards,
                                    certifications and continuous quality
                                    inspection processes.</p>
                            </div>
                            {/* Heading */}
                            {/* <h3>
                                Quality You Can
                                <br />
                                <span>Trust</span>
                            </h3> */}
                            {/* <p className="achievement-description">
                                Our commitment to quality is reflected in
                                our manufacturing standards,
                                certifications and continuous quality
                                inspection processes.
                            </p> */}
                            {/* =================================
                  CERTIFICATE CARDS
              ================================= */}

                            <div className="certificate-wrapper">
                                <div className="row g-3">
                                    {/* Certificate 1 */}
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
                                                    {
                                                        certificates[
                                                            activeCertificate
                                                        ].title
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Certificate 2 */}
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
                            </div>

                            {/* =================================
                  PAGINATION
              ================================= */}
                            <div className="certificate-navigation">
                                {/* Left Line */}
                                <span className="navigation-line"></span>
                                {/* Previous */}
                                <button
                                    type="button"
                                    className="navigation-arrow"
                                    onClick={previousCertificate}
                                    aria-label="Previous certificate"
                                >
                                    <span className="chevron chevron-left"></span>
                                </button>

                                {/* Next */}
                                <button
                                    type="button"
                                    className="navigation-arrow"
                                    onClick={nextCertificate}
                                    aria-label="Next certificate"
                                >
                                    <span className="chevron chevron-right"></span>
                                </button>
                                {/* Right Line */}
                                <span className="navigation-line"></span>
                            </div>
                        </div>
                    </div>
                    {/* =====================================
              RIGHT - FAQ / INQUIRY
          ===================================== */}
                    <div className="col-lg-6">
                        <div className="inquiry-card">
                            {/* =================================
                  FAQ HEADER
              ================================= */}
                            <div className="inquiry-top">
                                {/* <div>
                                    <span className="content-label">
                                        HAVE QUESTIONS?
                                    </span>
                                    <h3>
                                        Start Your
                                        <br />
                                        <span>Inquiry</span>
                                    </h3>

                                </div> */}
                                <div className="sec-title mb_50" >
                                    <span className=" label-icon sub-title mb_5">
                                        ✦
                                    </span>
                                    <span className="sub-title mb_5" style={{fontSize:"20px"}}>HAVE QUESTIONS?</span>
                                    <h2>Start Your Inquiry</h2>
                                    {/* <p>Our commitment to quality is reflected in
                                        our manufacturing standards,
                                        certifications and continuous quality
                                        inspection processes.</p> */}
                                </div>

                                <div className="inquiry-icon">
                                    <span>✦</span>
                                </div>

                            </div>

                            {/* =================================
                  FAQ LIST
              ================================= */}

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

                                        {/* Question */}

                                        <button
                                            type="button"
                                            className="faq-question"
                                            onClick={() =>
                                                toggleFaq(index)
                                            }
                                            aria-expanded={
                                                activeFaq === index
                                            }
                                        >

                                            <span className="faq-number">
                                                {String(index + 1).padStart(
                                                    2,
                                                    "0"
                                                )}
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

                                        {/* Answer */}

                                        <div
                                            className={
                                                activeFaq === index
                                                    ? "faq-answer show"
                                                    : "faq-answer"
                                            }
                                        >

                                            <p>
                                                {faq.answer}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                            {/* =================================
                  BOTTOM CTA
              ================================= */}

                            <div className="inquiry-bottom">

                                <div>

                                    <strong>
                                        Need More Information?
                                    </strong>

                                    <span>
                                        Talk to our healthcare experts.
                                    </span>

                                </div>

                                <Link
                                    href="/contact"
                                    className="orange-button"
                                >
                                    Start Inquiry

                                    <span>
                                        →
                                    </span>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            {/* ==========================================
          CSS
      ========================================== */}

            <style jsx>{`

        /* ==========================================
           MAIN SECTION
        ========================================== */

        .achievement-section {
          position: relative;
          width: 100%;
          background: #ffffff;
          padding: 90px 0;
          overflow: hidden;
        }

        .achievement-section .bg-layer {
          position: absolute;
          inset: 0;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0.03;
          pointer-events: none;
        }

        .achievement-section .auto-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 15px;
          padding-right: 15px;
        }


        /* ==========================================
           SECTION TITLE
        ========================================== */

        .achievement-main-title {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 55px;
        }

        .achievement-main-title .sub-title {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          color: #f58220;

          font-size: 13px;
          line-height: 1.2;
          font-weight: 700;

          letter-spacing: 1.5px;
          text-transform: uppercase;

          margin-bottom: 13px;
        }

        .achievement-main-title .sub-title::before,
        .achievement-main-title .sub-title::after {
          content: "";
          width: 28px;
          height: 1px;
          background: #f58220;
        }

        .achievement-main-title h2 {
          color: #172554;

          font-size: 44px;
          line-height: 1.15;

          font-weight: 800;

          margin: 0 0 15px;
        }

        .achievement-main-title h2 span {
          color: #f58220;
        }

        .achievement-main-title p {
          color: #64748b;

          font-size: 14px;
          line-height: 1.7;

          max-width: 620px;
          margin: 0 auto;
        }


        /* ==========================================
           LEFT CONTENT
        ========================================== */

        .achievement-content {
          padding-right: 25px;
        }

        .content-label {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          color: #f58220;

          font-size: 12px;
          line-height: 1.2;

          font-weight: 800;

          letter-spacing: 1.1px;

          margin-bottom: 10px;
        }

        .label-icon {
          font-size: 15px;
          color: #f58220;
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

          margin: 0 0 25px;
        }


        /* ==========================================
           CERTIFICATE WRAPPER
        ========================================== */

        .certificate-wrapper {
          width: 100%;
          position: relative;
        }

        .certificate-card {
          width: 100%;

          background: #ffffff;

          border: 1px solid #e7eaf0;

          border-radius: 12px;

          overflow: hidden;

          box-shadow:
            0 8px 30px rgba(
              15,
              23,
              42,
              0.06
            );

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .certificate-card:hover {
          transform: translateY(-4px);

          box-shadow:
            0 15px 40px rgba(
              15,
              23,
              42,
              0.10
            );
        }


        /* ==========================================
           CERTIFICATE IMAGE
        ========================================== */

        .certificate-image-wrapper {
          width: 100%;
          height: 360px;

          background: #f8fafc;

          padding: 10px;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .certificate-image {
          width: 100%;
          height: 100%;

          object-fit: contain;

          display: block;
        }


        /* ==========================================
           CERTIFICATE FOOTER
        ========================================== */

        .certificate-footer {
          min-height: 42px;

          display: flex;
          align-items: center;

          padding: 10px 13px;

          border-top: 1px solid #edf0f4;

          background: #ffffff;
        }

        .certificate-footer span {
          color: #172554;

          font-size: 14px;

          line-height: 1.3;

          font-weight: 700;
        }


        /* ==========================================
           PAGINATION
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
          display: block;

          width: 64px;
          height: 1px;

          background: #cfcfcf;
        }


        /* Circle Buttons */

        .navigation-arrow {
          width: 62px;
          height: 62px;

          padding: 0;

          border: none;

          border-radius: 50%;

          background: #ffffff;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          box-shadow:
            0 8px 25px rgba(
              0,
              0,
              0,
              0.06
            );

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease;
        }

        .navigation-arrow:hover {
          background: #ffffff;

          transform: translateY(-2px);

          box-shadow:
            0 12px 30px rgba(
              0,
              0,
              0,
              0.10
            );
        }


        /* ==========================================
           CHEVRON
        ========================================== */

        .chevron {
          display: block;

          width: 11px;
          height: 11px;

          border-top: 2px solid #0754d9;
          border-right: 2px solid #0754d9;

          transition:
            border-color 0.25s ease;
        }

        .chevron-left {
          transform: rotate(-135deg);

          margin-left: 5px;
        }

        .chevron-right {
          transform: rotate(45deg);

          margin-right: 5px;
        }


        /* ==========================================
           INQUIRY CARD
        ========================================== */

        .inquiry-card {
          width: 100%;

          background: #f8fafc;

          border: 1px solid #e5e7eb;

          border-radius: 16px;

          padding: 30px;

          box-shadow:
            0 10px 35px rgba(
              15,
              23,
              42,
              0.06
            );
        }


        /* ==========================================
           INQUIRY HEADER
        ========================================== */

        .inquiry-top {
          display: flex;

          align-items: flex-start;

          justify-content: space-between;

          gap: 20px;

          padding-bottom: 24px;

          margin-bottom: 5px;

          border-bottom: 1px solid #e5e7eb;
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


        /* ==========================================
           INQUIRY ICON
        ========================================== */

        .inquiry-icon {
          flex-shrink: 0;

          width: 58px;
          height: 58px;

          border-radius: 50%;

          background: #fff1e6;

          color: #f58220;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 24px;
        }


        /* ==========================================
           FAQ LIST
        ========================================== */

        .faq-list {
          width: 100%;
        }

        .faq-item {
          width: 100%;

          border-bottom: 1px solid #e5e7eb;
        }

        .faq-item:last-child {
          border-bottom: none;
        }


        /* ==========================================
           FAQ QUESTION
        ========================================== */

        .faq-question {
          width: 100%;

          display: flex;

          align-items: center;

          gap: 13px;

          padding: 17px 4px;

          border: none;

          background: transparent;

          text-align: left;

          cursor: pointer;
        }

        .faq-number {
          flex: 0 0 22px;

          color: #fe5e04;

          font-size: 14px;

          font-weight: 800;
        }

        .faq-text {
          flex: 1;

          color: #000000;

          font-size: 16px;

          line-height: 1.4;

          font-weight: 700;
        }

        .faq-plus {
          flex: 0 0 22px;

          color: #fe5e04;

          font-size: 23px;

          line-height: 1;

          font-weight: 400;

          text-align: center;
        }


        /* ==========================================
           FAQ ANSWER
        ========================================== */

        .faq-answer {
          display: grid;

          grid-template-rows: 0fr;

          transition:
            grid-template-rows 0.3s ease;
        }

        .faq-answer p {
          min-height: 0;

          overflow: hidden;

          color: #485466;

          font-size: 15px;

          line-height: 1.7;

          margin: 0;

          padding: 0 40px 0 39px;
        }

        .faq-answer.show {
          grid-template-rows: 1fr;
        }

        .faq-answer.show p {
          padding-bottom: 17px;
        }


        /* ==========================================
           INQUIRY BOTTOM
        ========================================== */

        .inquiry-bottom {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 15px;

          margin-top: 20px;

          padding-top: 20px;

          border-top: 1px solid #e5e7eb;
        }

        .inquiry-bottom strong {
          display: block;

          color: #191b63;

          font-size: 18px;

          line-height: 1.4;

          margin-bottom: 3px;
        }

        .inquiry-bottom span {
          color: #64748b;

          font-size: 14px;

          line-height: 1.4;
        }


        /* ==========================================
           ORANGE BUTTON
        ========================================== */

        .orange-button {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          background:linear-gradient(135deg, #fe5e04 0%, #ea9203 100%);

          color: #ffffff;

          text-decoration: none;

          padding: 11px 17px;

          border-radius: 6px;

          font-size: 16px;

          line-height: 1.2;

          font-weight: 700;

          white-space: nowrap;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .orange-button:hover {
          color: #ffffff;

          background: #df6d0d;

          transform: translateY(-2px);
        }

        .orange-button span {
          color: #ffffff;

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

            margin-bottom: 30px;
          }

          .achievement-main-title h2 {
            font-size: 38px;
          }

          .inquiry-card {
            margin-top: 10px;
          }

        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 767px) {

          .achievement-section {
            padding: 55px 0;
          }

          .achievement-section .auto-container {
            padding-left: 15px;
            padding-right: 15px;
          }

          .achievement-main-title {
            margin-bottom: 35px;
          }

          .achievement-main-title h2 {
            font-size: 30px;

            line-height: 1.15;
          }

          .achievement-main-title p {
            font-size: 13px;
          }

          .achievement-content h3 {
            font-size: 29px;
          }

          .achievement-description {
            font-size: 13px;
          }


          /* Certificate */

          .certificate-image-wrapper {
            height: 290px;

            padding: 8px;
          }


          /* Pagination */

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
          }

          .chevron {
            width: 10px;
            height: 10px;
          }


          /* Inquiry */

          .inquiry-card {
            padding: 20px 16px;

            border-radius: 13px;
          }

          .inquiry-top {
            padding-bottom: 18px;
          }

          .inquiry-top h3 {
            font-size: 30px;
          }

          .inquiry-icon {
            width: 46px;
            height: 46px;

            font-size: 19px;
          }


          /* FAQ */

          .faq-question {
            padding: 14px 2px;

            gap: 9px;
          }

          .faq-number {
            flex-basis: 20px;

            font-size: 10px;
          }

          .faq-text {
            font-size: 13px;
          }

          .faq-plus {
            flex-basis: 20px;

            font-size: 21px;
          }

          .faq-answer p {
            padding-left: 29px;

            padding-right: 15px;

            font-size: 12px;
          }

          .faq-answer.show p {
            padding-bottom: 14px;
          }


          /* Bottom */

          .inquiry-bottom {
            align-items: flex-start;

            flex-direction: column;
          }

          .orange-button {
            width: 100%;
          }

        }


        /* ==========================================
           SMALL MOBILE
        ========================================== */

        @media (max-width: 480px) {

          .achievement-main-title h2 {
            font-size: 26px;
          }

          .achievement-main-title .sub-title {
            font-size: 11px;

            letter-spacing: 1px;
          }

          .achievement-main-title .sub-title::before,
          .achievement-main-title .sub-title::after {
            width: 20px;
          }

          .achievement-content h3 {
            font-size: 25px;
          }

          .certificate-image-wrapper {
            height: 235px;
          }

          .certificate-footer {
            min-height: 38px;

            padding: 8px 10px;
          }

          .certificate-footer span {
            font-size: 10px;
          }

          .navigation-line {
            width: 30px;
          }

          .navigation-arrow {
            width: 48px;
            height: 48px;
          }

          .inquiry-top h3 {
            font-size: 27px;
          }

        }

      `}</style>

        </section>
    );
}