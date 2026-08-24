"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ShieldCheck, Truck, Wrench } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const bannerData = [
  {
    id: 1,
    title: "Welcome To Shiv Balaji Surgical",
    text: "India's leading Hospital Furniture Manufacturer. We supply premium ISO Certified ICU Beds, Fowler Beds, and complete hospital furniture solutions for modern healthcare.",
    image: "/assets/images/banner/first-image.png",
  },
  {
    id: 2,
    title: "Premium ICU & Fowler Beds",
    text: "Experience unmatched patient comfort and safety with our state-of-the-art ICU beds, semi-fowler beds, and medical trolleys designed to meet global medical standards.",
    image: "/assets/images/banner/second-image.png",
  },
  {
    id: 3,
    title: "Complete Hospital Furniture Range",
    text: "From examination couches to pediatric beds, we deliver highly durable, customized, and quality-tested medical equipment to hospitals and clinics across the globe.",
    image: "/assets/images/banner/third-image.png",
  },
];

const HeroBanner: React.FC = () => {
  return (
    <section className="hero-slider-section">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="hero-swiper"
      >
        {bannerData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content-wrapper">
              <div className="container custom-container">
                <div className="row align-items-center min-vh-60">
                  {/* Left Side Content */}
                  <div className="col-lg-7 col-md-12 order-2 order-lg-1">
                    <div className="content-box">

                      <h1 className="hero-title">{slide.title}</h1>
                      <p className="hero-text">{slide.text}</p>

                      <div className="hero-buttons">
                        <Link href="/product-range" className="hero-btn">
                          Explore Products
                        </Link>
                        <Link href="/contact" className="hero-btn-outline">
                          Enquire Now
                        </Link>
                      </div>

                      {/* Bottom Features Bar */}
                      <div className="bottom-features-bar">
                        <div className="feature-item">
                          <div className="icon-box"><ShieldCheck size={20} /></div>
                          <div className="feature-text">
                            <h5>ISO Certified</h5>
                            <p>Quality Assured</p>
                          </div>
                        </div>
                        <div className="feature-divider"></div>
                        <div className="feature-item">
                          <div className="icon-box"><Wrench size={20} /></div>
                          <div className="feature-text">
                            <h5>Customized Design</h5>
                            <p>Hospital Furniture</p>
                          </div>
                        </div>
                        <div className="feature-divider"></div>
                        <div className="feature-item">
                          <div className="icon-box"><Truck size={20} /></div>
                          <div className="feature-text">
                            <h5>Pan India</h5>
                            <p>Delivery Network</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Right Side Image */}
                  <div className="col-lg-5 col-md-12 order-1 order-lg-2 mb-5 mb-lg-0">
                    <div className="image-box">
                      <Image src={slide.image} alt={slide.title} width={600} height={400} className="slider-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .hero-slider-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 240, 230, 0.85) 100%), url('/assets/images/background/female-doctor-hospital-room.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .slide-content-wrapper {
          padding: 80px 0;
          min-height: 650px;
          display: flex;
          align-items: center;
        }

        .custom-container {
          padding-left: 5%;
          padding-right: 5%;
          max-width: 1500px;
        }

        .min-vh-60 {
          min-height: 650px;
        }

        .content-box {
          padding-right: 20px;
          padding-left: 10px;
        }

        .hero-title {
          color: rgb(254 94 4);
          font-size: clamp(36px, 4.5vw, 60px);
          line-height: 1.15;
          font-weight: 800;
          margin-bottom: 20px;
        }

        .hero-text {
          color: #333333;
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 35px;
          font-weight: 500;
          max-width: 90%;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        :global(.hero-btn),
        :global(.hero-btn-outline) {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 15px 35px;
          border-radius: 50px; /* Pill shape like the image */
          font-weight: 700;
          font-size: 16px;
          text-decoration: none !important;
          transition: all 0.3s ease-in-out;
          font-family: inherit;
          cursor: pointer;
        }

        :global(.hero-btn) {
          color: #ffffff !important;
          background: #ff7a00;
          border: 2px solid #ff7a00;
          box-shadow: 0 4px 15px rgba(255, 122, 0, 0.3);
        }

        :global(.hero-btn:hover) {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(255, 122, 0, 0.4);
          color: #ffffff !important;
          background: #e66a00;
          border-color: #e66a00;
        }

        :global(.hero-btn-outline) {
          color: #ff7a00 !important;
          border: 2px solid #ff7a00;
          background: transparent;
        }

        :global(.hero-btn-outline:hover) {
          color: #ffffff !important;
          background: #ff7a00;
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(255, 122, 0, 0.25);
        }

        /* Bottom Features Bar */
        .bottom-features-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icon-box {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255, 122, 0, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ff7a00;
          background: rgba(255, 122, 0, 0.1);
        }

        .feature-text h5 {
          font-size: 14px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 2px 0;
        }

        .feature-text p {
          font-size: 12px;
          color: #555;
          margin: 0;
          line-height: 1.2;
          font-weight: 500;
        }

        .feature-divider {
          width: 1px;
          height: 35px;
          background-color: #d0d0d0;
          margin: 0 10px;
        }

        .image-box {
          position: relative;
          margin-right: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .slider-image {
          width: 100%;
          max-width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          transition: transform 0.5s ease;
        }

        .image-box:hover .slider-image {
          transform: scale(1.03);
        }

        /* Swiper Overrides */
        :global(.hero-swiper .swiper-pagination) {
          bottom: 20px !important;
        }
        :global(.hero-swiper .swiper-pagination-bullet) {
          background: #ff7a00;
          opacity: 0.3;
          width: 8px;
          height: 8px;
          margin: 0 5px !important;
        }
        :global(.hero-swiper .swiper-pagination-bullet-active) {
          opacity: 1;
          width: 24px;
          border-radius: 10px;
        }
        
        /* Hide nav buttons completely to match the reference style better (which only has pagination) or keep them subtle */
        :global(.hero-swiper .swiper-button-next),
        :global(.hero-swiper .swiper-button-prev) {
          display: none; 
        }

        @media (max-width: 1199px) {
          .top-stats-bar, .bottom-features-bar {
            gap: 10px;
          }
          .stat-divider, .feature-divider {
            margin: 0 5px;
          }
        }

        @media (max-width: 991px) {
          .slide-content-wrapper {
            padding: 60px 0;
          }
          .content-box {
            padding-right: 0;
            padding-left: 0;
            text-align: center;
          }
          .image-box {
            margin-right: 0;
          }
          .hero-text {
            margin: 0 auto 30px;
          }
          .hero-buttons {
            justify-content: center;
          }
          .top-stats-bar {
            justify-content: center;
          }
          .bottom-features-bar {
            justify-content: center;
          }
        }
        
        @media (max-width: 767px) {
          .hero-slider-section {
            background-attachment: scroll;
          }
          .slider-image {
            max-height: 250px;
            width: 100%;
            object-fit: contain;
          }
          .slide-content-wrapper {
            padding: 100px 0 60px;
            min-height: auto;
          }
          .custom-container {
            padding-left: 15px;
            padding-right: 15px;
          }
          .hero-title {
            font-size: 32px;
          }
          .hero-text {
            font-size: 16px;
          }
          .hero-buttons {
            flex-wrap: nowrap;
            gap: 10px;
            width: 100%;
          }
          :global(.hero-btn),
          :global(.hero-btn-outline) {
            flex: 1;
            padding: 10px 5px;
            font-size: 13px;
            text-align: center;
          }
          .bottom-features-bar {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;