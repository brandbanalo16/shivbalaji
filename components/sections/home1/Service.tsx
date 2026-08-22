'use client';

import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const services = [
  {
    title: "Hospital Beds",
    image: "/assets/images/service/R1.webp",
    icon: "fa-bed",
    tag: "Premium Care",
    category: "Hospital Bed Manufacturer in India",
    link: "/hospital-icu-beds",
    alt: "Hospital Bed Manufacturer in India — Shiv Balaji Surgical",
    desc: "As a top Hospital Bed Manufacturer in India, we supply premium beds for safe patient care and recovery. Explore Fowler Beds, Recovery Beds & more.",
  },
  {
    title: "ICU Beds",
    image: "/assets/images/service/R2.webp",
    icon: "fa-hospital-user",
    tag: "Critical Care",
    category: "ICU Bed Manufacturer in Delhi",
    link: "/hospital-icu-beds",
    alt: "ICU Bed Manufacturer in Delhi — Electric & Mechanical ICU Beds | Shiv Balaji Surgical",
    desc: "Trusted ICU Bed Manufacturer in Delhi. Our ICU Beds — both Electric and Mechanical variants — meet the highest critical care standards.",
  },
  {
    title: "Examination Couches",
    image: "/assets/images/service/R3.webp",
    icon: "fa-stethoscope",
    tag: "Clinical Ready",
    category: "Examination Couch Manufacturer",
    link: "/examination-room-furniture",
    alt: "Examination Couch Manufacturer in Delhi — Shiv Balaji Surgical",
    desc: "Leading Examination Couch Manufacturer in Delhi. Our ergonomic examination tables are built for efficient OPD and diagnostic procedures.",
  },
  {
    title: "Medical Trolleys",
    image: "/assets/images/service/R4.webp",
    icon: "fa-truck-medical",
    tag: "Smart Utility",
    category: "Hospital Trolley Manufacturer",
    link: "/medical-trolleys-carts",
    alt: "Hospital Trolley Manufacturer in Delhi — Crash Cart, Medicine Trolley | Shiv Balaji Surgical",
    desc: "Shiv Balaji Surgical is a leading Hospital Trolley Manufacturer. We supply Crash Cart Trolleys, Medicine Trolleys, Instrument Trolleys & more.",
  },
  {
    title: "Patient Stretchers",
    image: "/assets/images/service/R5.webp",
    icon: "fa-wheelchair",
    tag: "Mobility Support",
    category: "Stretcher Trolley Manufacturer",
    link: "/stretchers-screens-accessories",
    alt: "Stretcher Trolley Manufacturer — Emergency Recovery Trolley | Shiv Balaji Surgical",
    desc: "Durable Stretcher Trolley Manufacturer in India. Our stretchers enable smooth and safe patient transport across hospitals and clinics.",
  },
  {
    title: "Hospital Furniture",
    image: "/assets/images/service/R6.webp",
    icon: "fa-box-archive",
    tag: "Complete Solutions",
    category: "Hospital Furniture Manufacturer in Delhi",
    link: "/bedside-lockers-over-bed-tables",
    alt: "Hospital Furniture Manufacturer in Delhi — Bedside Locker, Over Bed Table | Shiv Balaji Surgical",
    desc: "Comprehensive Hospital Furniture Manufacturer in Delhi. From Bedside Lockers to Over Bed Tables — designed for hospital use and nursing homes.",
  },
  {
    title: "Fowler Beds",
    image: "/assets/images/service/R7.webp",
    icon: "fa-bed-pulse",
    tag: "Comfort Plus",
    category: "Fowler Bed Manufacturer",
    link: "/hospital-icu-beds",
    alt: "Fowler Bed Manufacturer — Electric & ABS Panel Fowler Beds | Shiv Balaji Surgical",
    desc: "Top Fowler Bed Manufacturer in Delhi. Offering Semi Fowler Beds, Electric Fowler Beds and Fowler Beds with ABS Panels for all patient needs.",
  },
  {
    title: "Stools & Chairs",
    image: "/assets/images/service/R8.webp",
    icon: "fa-chair",
    tag: "Seating",
    category: "Surgeon Stool Manufacturer",
    link: "/stools-chairs-patient-seating",
    alt: "Surgeon Stool Manufacturer — Patient Stool, Blood Donor Chair | Shiv Balaji Surgical",
    desc: "Reliable Surgeon Stool Manufacturer & Blood Donor Chair Manufacturer. Our hospital seating products are built for durability and long-term use.",
  },
  {
    title: "Pediatric Beds",
    image: "/assets/images/service/R9.webp",
    icon: "fa-child",
    tag: "Pediatric Care",
    category: "Pediatric Bed Manufacturer",
    link: "/hospital-icu-beds",
    alt: "Pediatric Bed Manufacturer — Children Hospital Bed Supplier | Shiv Balaji Surgical",
    desc: "Dedicated Pediatric Bed Manufacturer and Pediatric Hospital Bed Supplier. Safe, comfortable, and purpose-built for pediatric ward environments.",
  },
];

export default function Service() {
  return (
    <section className="service-section p_relative">
      <div
        className="pattern-layer"
        style={{ backgroundImage: "url(/assets/images/shape/shape-13.png)" }}
      />

      <span className="big-text" >Shiv Balaji Surgical, Shiv Balaji Surgical</span>

      <style>{`
        .svc-slide-card {
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .svc-slide-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 36px rgba(0,0,0,0.14);
        }
        .svc-slide-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #f0f0f0;
        }
        .svc-slide-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .svc-slide-card:hover .svc-slide-img img {
          transform: scale(1.06);
        }
        .svc-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: #fff;
          color: #fe5e04;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 12px;
          border-radius: 30px;
          box-shadow: 0 2px 8px rgba(254,94,4,0.18);
          z-index: 2;
        }
        .svc-slide-body {
          padding: 20px 22px 22px;
        }
        .svc-cat-tag {
          display: inline-block;
          background: #fff4ee;
          color: #fe5e04;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
          margin-bottom: 10px;
          border: 1px solid #ffd7c2;
        }
        .svc-slide-body h3 {
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .svc-slide-body h3 i {
          color: #fe5e04;
          font-size: 18px;
        }
        .svc-slide-body h3 a {
          color: #1a1a2e;
          text-decoration: none;
          transition: color 0.2s;
        }
        .svc-slide-body h3 a:hover { color: #fe5e04; }
        .svc-slide-body p {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .svc-view-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #fe5e04;
          text-decoration: none;
          transition: gap 0.2s;
        }
        .svc-view-link:hover { gap: 10px; }
        .svc-nav-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid #e5e5e5;
          color: #fe5e04;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: all 0.2s;
        }
        .svc-nav-btn:hover {
          background: #fe5e04;
          border-color: #fe5e04;
          color: #fff;
        }
      `}</style>

      <div className="auto-container">
        <div className="sec-title mb_60" style={{ textAlign: "center" }}>
          <span className="sub-title mb_5">Hospital Furniture Manufacturer in Delhi</span>
          <h2>HOSPITAL BED, ICU BED &amp; MEDICAL FURNITURE MANUFACTURER</h2>
          <p>
            Shiv Balaji Surgical is a leading <strong>Hospital Furniture Manufacturer in Delhi</strong> and <strong>Hospital Bed Manufacturer in India</strong>. We supply ICU Beds, Fowler Beds, Examination Couches, Medical Trolleys, and complete Hospital Furniture solutions to hospitals, nursing homes, clinics, and government tenders across India.
          </p>
        </div>

        {/* Slider */}
        <div style={{ position: "relative" }}>
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={26}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{ nextEl: ".svc-nav-next", prevEl: ".svc-nav-prev" }}
            breakpoints={{
              320: { slidesPerView: 1 },
              575: { slidesPerView: 1 },
              767: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
              1199: { slidesPerView: 3 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="svc-slide-card">
                  <div className="svc-slide-img">
                    <Image
                      src={service.image}
                      alt={service.alt || service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 416px"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />

                    {/* <span className="svc-badge">{service.tag}</span> */}
                  </div>
                  <div className="svc-slide-body">
                    <span className="svc-cat-tag">{service.category}</span>
                    <h3>
                      <i className={`fas ${service.icon}`}></i>
                      <Link href={service.link}>{service.title}</Link>
                    </h3>
                    <p>{service.desc}</p>
                    <Link href={service.link} className="svc-view-link">
                      View Products <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav buttons */}
          <div className="nav-style-one" style={{ marginTop: "30px" }}>
            <div className="swiper-nav" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
              <button type="button" className="svc-nav-btn svc-nav-prev" aria-label="Previous category">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button type="button" className="svc-nav-btn svc-nav-next" aria-label="Next category">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}