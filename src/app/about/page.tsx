"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Layout from "../../../components/layout/Layout";
import Working from "../../../components/sections/home2/Working";
import Clients from "../../../components/sections/home3/Clients";
import Team from "../../../components/sections/home1/Team";
import Cta from "../../../components/sections/home2/Cta";
import Contact_Info from "../../../components/sections/home1/Contact_Info";
import Appointment from "../../../components/sections/home1/Appointment";
import Chooseus from "../../../components/sections/home1/Chooseus";

export default function About_Page() {
    const [activeTab, setActiveTab] = useState(1);

    const tabs = [
        {
            id: 1,
            title: "Premium Quality",
        },
        {
            id: 2,
            title: "Wide Product Range",
        },
        {
            id: 3,
            title: "Trusted Service",
        },
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
                "Built for Long-Term Performance",
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
                "Timely Delivery",
                "Customer-Centric Support",
                "Customized Solutions",
                "Trusted by Healthcare Professionals",
            ],
        },
    ];

    return (
        <div className="boxed_wrapper">
            <Layout
                headerStyle={3}
                footerStyle={1}
                breadcrumbTitle="About Us"
            >
                {/* =========================
                    ABOUT SECTION
                ========================== */}
                <section className="about-section about-page p_relative pb_50">
                    <div className="auto-container">
                        <div className="upper-content mb_80">
                            <div className="row clearfix">

                                {/* Content */}
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-block-one">
                                        <div className="content-box">

                                            <div className="sec-title mb_15">
                                                <span className="sub-title mb_5">
                                                    Welcome To Shiv Balaji Surgical
                                                </span>

                                                <h2>
                                                    Trusted Hospital Furniture & Surgical Equipment Manufacturer
                                                </h2>
                                            </div>

                                            <div className="text-box mb_30 pb_30">
                                                <p>
                                                    Shiv Balaji Surgical, established in 2019,
                                                    manufactures premium hospital furniture and
                                                    surgical equipment, including Hospital Beds,
                                                    ICU Beds, OT Tables, Stretchers, and Medical
                                                    Trolleys, delivering ISO-certified quality,
                                                    durability, innovation, and reliable PAN India
                                                    healthcare solutions.
                                                </p>
                                            </div>

                                            <div className="inner-box">
                                                <div className="row clearfix">

                                                    {/* Specialities */}
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="specialities-box">
                                                            <h4>Our Specialities</h4>

                                                            <ul className="list-style-one clearfix">
                                                                <li>
                                                                    Hospital Furniture Manufacturing
                                                                </li>
                                                                <li>
                                                                    Premium Surgical Equipment
                                                                </li>
                                                                <li>
                                                                    ISO Certified Products
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    {/* Vision */}
                                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                        <div className="specialities-box">
                                                            <h4>Our Vision</h4>

                                                            <ul className="list-style-one clearfix">
                                                                <li>
                                                                    Delivering Lasting Quality
                                                                </li>
                                                                <li>
                                                                    Innovation Through Excellence
                                                                </li>
                                                                <li>
                                                                    Customer First Always
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Image */}
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-block-one">
                                        <div className="image-box">

                                            <div className="shape">
                                                <div
                                                    className="shape-2"
                                                    style={{
                                                        backgroundImage:
                                                            "url(/assets/images/shape/shape-5.png)",
                                                    }}
                                                ></div>
                                            </div>

                                            <figure className="image">
                                                <Image
                                                    src="/assets/images/resource/about.png"
                                                    alt="Shiv Balaji Surgical Hospital Furniture"
                                                    width={523}
                                                    height={399}
                                                    priority
                                                />
                                            </figure>

                                            <div className="text-box">
                                                <div
                                                    className="image-shape"
                                                    style={{
                                                        backgroundImage:
                                                            "url(/assets/images/shape/shape-7.png)",
                                                    }}
                                                ></div>

                                                <h2>7+</h2>

                                                <span>Years of Experience</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================CONTACT INFO========================== */}
                <section style={{ marginBottom: "-110px" }}>
                    <Contact_Info />
                </section>

                {/* =========================VISION MISSION SPECIALIZATION========================== */}
                <section className="service-section about-page p_relative" style={{ paddingTop: "250px" }}>

                    <div
                        className="pattern-layer"
                        style={{
                            backgroundImage:
                                "url(/assets/images/shape/shape-13.png)",
                        }}
                    ></div>

                    <div className="auto-container">

                        <div className="sec-title mb_60 centred">

                            <span className="sub-title mb_5">
                                Our Commitment to Healthcare
                            </span>

                            <h2>
                                Our Vision, Mission & Core Specialization
                            </h2>

                            <p>
                                We are committed to providing quality healthcare
                                through patient-focused services, professional
                                expertise, and continuous innovation.
                            </p>

                        </div>

                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 3 },
                            }}
                            className="vision-mission-slider pb_30"
                        >

                            {/* Vision */}
                            <SwiperSlide>
                                <div className="service-block-one">
                                    <div className="inner-box">

                                        <figure className="image-box">
                                            <Image
                                                src="/assets/images/service/vision.png"
                                                alt="Vision"
                                                width={416}
                                                height={358}
                                                priority
                                            />
                                        </figure>

                                        <div className="lower-content">
                                            <div className="inner">

                                                <div className="icon-box">
                                                    <i className="icon-18"></i>
                                                </div>

                                                <h3>
                                                    <Link href="/department-details">
                                                        Vision
                                                    </Link>
                                                </h3>

                                                <ul className="list-style-one clearfix">
                                                    <li>Patient-Centered Care</li>
                                                    <li>Healthcare Innovation</li>
                                                    <li>Better Outcomes</li>
                                                    <li>Trusted Care</li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Mission */}
                            <SwiperSlide>
                                <div className="service-block-one">
                                    <div className="inner-box">

                                        <figure className="image-box">
                                            <Image
                                                src="/assets/images/service/mission.png"
                                                alt="Mission"
                                                width={416}
                                                height={358}
                                                priority
                                            />
                                        </figure>

                                        <div className="lower-content">
                                            <div className="inner">

                                                <div className="icon-box">
                                                    <i className="icon-19"></i>
                                                </div>

                                                <h3>
                                                    <Link href="/department-details-2">
                                                        Mission
                                                    </Link>
                                                </h3>

                                                <ul className="list-style-one clearfix">
                                                    <li>Quality Healthcare</li>
                                                    <li>Compassionate Service</li>
                                                    <li>Clinical Excellence</li>
                                                    <li>Patient Satisfaction</li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Core Specialization */}
                            <SwiperSlide>
                                <div className="service-block-one">
                                    <div className="inner-box">

                                        <figure className="image-box">
                                            <Image
                                                src="/assets/images/service/core-specialization.png"
                                                alt="Core Specialization"
                                                width={416}
                                                height={358}
                                                priority
                                            />
                                        </figure>

                                        <div className="lower-content">
                                            <div className="inner">

                                                <div className="icon-box">
                                                    <i className="icon-20"></i>
                                                </div>

                                                <h3>
                                                    <Link href="/department-details-3">
                                                        Core Specialization
                                                    </Link>
                                                </h3>

                                                <ul className="list-style-one clearfix">
                                                    <li>Advanced Medical Services</li>
                                                    <li>Expert Professionals</li>
                                                    <li>Modern Technology</li>
                                                    <li>Complete Patient Care</li>
                                                </ul>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </section>



                <Appointment />
                <Chooseus />
                <section className="founder-section" style={{ width: "86%", alignContent: "center", margin: "0 auto" }}>
                    <div className="container">
                        <div className="row align-items-center">

                            {/* LEFT SIDE - FOUNDER IMAGE */}
                            <div className="col-lg-6 col-md-12">
                                <div className="founder-left">

                                    <div className="founder-subtitle">
                                        <span>✦</span> Leadership & Vision
                                    </div>

                                    <h2 className="founder-heading">
                                        LEADING WITH
                                        <br />
                                        VISION & PURPOSE
                                    </h2>

                                    <p className="founder-intro">
                                        Our journey is driven by strong leadership, continuous
                                        innovation and a commitment to delivering excellence in
                                        healthcare solutions.
                                    </p>

                                    <div className="founder-image-box">
                                        <Image
                                            src="/assets/images/founder.png"
                                            alt="Founder"
                                            width={650}
                                            height={600}
                                            priority
                                        />

                                        <div className="founder-image-icon">
                                            ✦
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* RIGHT SIDE - FOUNDER MESSAGE */}
                            <div className="col-lg-6 col-md-12">
                                <div className="founder-content">

                                    <div className="founder-subtitle">
                                        <span>✦</span> Founder Says
                                    </div>

                                    <h2 className="founder-heading">
                                        BUILDING A BETTER
                                        <br />
                                        HEALTHCARE FUTURE
                                    </h2>

                                    <div className="founder-quote">
                                        <span className="quote-icon">“</span>

                                        <p>
                                            Our vision has always been to create healthcare solutions
                                            that combine quality, innovation and reliability. We believe
                                            that every product we deliver should contribute towards
                                            better healthcare outcomes and create lasting value for our
                                            customers.
                                        </p>
                                    </div>

                                    <p className="founder-text">
                                        With a strong focus on quality and customer satisfaction,
                                        we continue to grow by embracing new technologies, improving
                                        our capabilities and building long-term relationships with
                                        healthcare institutions and partners.
                                    </p>

                                    <p className="founder-text">
                                        Our commitment is simple — to deliver dependable solutions,
                                        maintain the highest standards and continuously move forward
                                        with purpose.
                                    </p>

                                    {/* FOUNDER NAME */}
                                    <div className="founder-info">
                                        <div className="founder-line"></div>

                                        <div>
                                            <h4>Mrs. Narender Kumar</h4>
                                            <span>Founder & Director</span>
                                        </div>
                                    </div>

                                    {/* BUTTON */}
                                    <div className="founder-btn-wrap">
                                        <Link href="/about" className="founder-btn">
                                            Discover Our Journey
                                            <span>→</span>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>


                    {/* ================= CUSTOM CSS ================= */}
                    <style jsx>{`
    .founder-section {
      position: relative;
      padding: 100px 0;
      background: #ffffff;
      overflow: hidden;
    }

    .founder-left {
      padding-right: 25px;
    }

    .founder-subtitle {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 12px;
      color: #ff6900;
      font-size: 18px;
      font-weight: 600;
      font-style: italic;
      font-family: cursive;
    }

    .founder-subtitle span {
      color: #ff6900;
      font-size: 20px;
    }

    .founder-heading {
      margin: 0;
      color: #101b35;
      font-size: 36px;
      line-height: 1.15;
      font-weight: 800;
      letter-spacing: -0.5px;
    }

    .founder-intro {
      max-width: 570px;
      margin: 22px 0 30px;
      color: #707070;
      font-size: 16px;
      line-height: 1.8;
    }

    /* FOUNDER IMAGE */

    .founder-image-box {
      position: relative;
      width: 100%;
      height: 590px;
      overflow: hidden;
      border-radius: 12px;
      background: #f5f6f8;
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.08);
    }

    .founder-image-box img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      object-position: center;
      transition: transform 0.5s ease;
    }

    .founder-image-box:hover img {
      transform: scale(1.03);
    }

    .founder-image-icon {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 58px;
      height: 58px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: #fff0e5;
      color: #ff6900;
      font-size: 25px;
    }

    /* RIGHT CONTENT */

    .founder-content {
      margin-left: 25px;
      padding: 40px 30px;
      background: #f7f8fa;
      border: 1px solid #e1e4e8;
      border-radius: 18px;
      box-shadow: 0 10px 35px rgba(0, 0, 0, 0.03);
    }

    .founder-content .founder-heading {
      margin-bottom: 28px;
    }

    /* QUOTE */

    .founder-quote {
      position: relative;
      margin-bottom: 22px;
      padding: 25px 25px 22px 32px;
      background: #ffffff;
      border-left: 4px solid #ff6900;
      border-radius: 5px;
    }

    .quote-icon {
      position: absolute;
      top: -8px;
      left: 10px;
      color: #ff6900;
      font-size: 55px;
      line-height: 1;
      font-family: Georgia, serif;
    }

    .founder-quote p {
      position: relative;
      z-index: 1;
      margin: 0;
      color: #444444;
      font-size: 16px;
      line-height: 1.8;
    }

    .founder-text {
      margin: 0 0 15px;
      color: #6c6c6c;
      font-size: 15px;
      line-height: 1.8;
    }

    /* FOUNDER DETAILS */

    .founder-info {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-top: 28px;
    }

    .founder-line {
      width: 45px;
      height: 2px;
      background: #ff6900;
    }

    .founder-info h4 {
      margin: 0 0 4px;
      color: #101b35;
      font-size: 18px;
      font-weight: 700;
    }

    .founder-info span {
      color: #777777;
      font-size: 14px;
    }

    /* BUTTON */

    .founder-btn-wrap {
      margin-top: 28px;
    }

    .founder-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 18px;
      padding: 13px 22px;
      border-radius: 6px;
      background: linear-gradient(
        90deg,
        #ff6900 0%,
        #f59e00 100%
      );
      color: #ffffff;
      text-decoration: none;
      font-size: 15px;
      font-weight: 600;
      transition: all 0.3s ease;
    }

    .founder-btn span {
      font-size: 20px;
      line-height: 1;
      transition: transform 0.3s ease;
    }

    .founder-btn:hover {
      color: #ffffff;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(255, 105, 0, 0.2);
    }

    .founder-btn:hover span {
      transform: translateX(5px);
    }

    /* TABLET */

    @media (max-width: 991px) {
      .founder-section {
        padding: 70px 0;
      }

      .founder-left {
        padding-right: 0;
        margin-bottom: 40px;
      }

      .founder-content {
        margin-left: 0;
      }

      .founder-image-box {
        height: 500px;
      }
    }

    /* MOBILE */

    @media (max-width: 767px) {
      .founder-section {
        padding: 55px 0;
      }

      .founder-heading {
        font-size: 28px;
      }

      .founder-subtitle {
        font-size: 16px;
      }

      .founder-intro {
        font-size: 15px;
      }

      .founder-image-box {
        height: 420px;
      }

      .founder-content {
        padding: 30px 20px;
        border-radius: 12px;
      }

      .founder-quote {
        padding: 23px 18px 18px 27px;
      }

      .founder-quote p {
        font-size: 14px;
      }

      .founder-text {
        font-size: 14px;
      }
    }

    /* SMALL MOBILE */

    @media (max-width: 480px) {
      .founder-image-box {
        height: 350px;
      }

      .founder-heading {
        font-size: 25px;
      }

      .founder-content {
        padding: 25px 18px;
      }

      .founder-btn {
        width: 100%;
      }
    }
  `}</style>
                </section>
                <Cta />
            </Layout>
        </div>
    );
}