"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const brands = [
  "/assets/images/brands/brand-1.png",
  "/assets/images/brands/brand-2.png",
  "/assets/images/brands/brand-3.png",
  "/assets/images/brands/brand-4.png",
  "/assets/images/brands/brand-5.png",
  "/assets/images/brands/brand-6.png",
  "/assets/images/brands/brand-7.png",
  "/assets/images/brands/brand-8.png",
];

export default function Brands() {
  return ( 
    <section className="py-5 bg-white container pattern-layer"
        style={{ backgroundImage: "url(/assets/images/shape/shape-8.png)" }} >
      <div className="container ">
        {/* <div className="text-center mb-5">
          <span className="title-text p_relative d_block text-primary fw-semibold text-uppercase" style={{ color:"#fe5e04", fontWeight: "bold", fontSize: "14px" , fontFamily:"cavet, cursive"}}> Our Trusted Clients</span>
          <h2 className="fw-bold mt-2">
            Brands That Trust Us
          </h2>

          <p className="text-muted mb-0">
            We proudly collaborate with leading brands across multiple industries.
          </p>
        </div> */}

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            },
            1200: {
              slidesPerView: 6,
            },
          }}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="brand-card" style={{ maxWidth: "80%" }}>
                <img
                  src={brand}
                  alt={`Brand ${index + 1}`}
                  className="img-fluid"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}