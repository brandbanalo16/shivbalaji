'use client';

import Link from 'next/link';
import Image from 'next/image';

import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const portfolioItems = [
  {
    img: '/assets/images/gallery/indusry-1.png',
    title: 'Hospitals',
    category: 'Healthcare',
    link: '#',
  },
  {
    img: '/assets/images/gallery/indusry-2.png',
    title: 'Clinics & Medical Centers',
    category: 'Healthcare',
    link: '#',
  },
  {
    img: '/assets/images/gallery/indusry-3.png',
    title: 'Emergency & Trauma Centers',
    category: 'Emergency Care',
    link: '#',
  },
  {
    img: '/assets/images/gallery/indusry-4.png',
    title: 'Diagnostic & Pathology Labs',
    category: 'Laboratory',
    link: '#',
  },
  {
    img: '/assets/images/gallery/indusry-5.png',
    title: 'Maternity & Pediatric Centers',
    category: "Women's Healthcare",
    link: '#',
  },
  {
    img: '/assets/images/gallery/indusry-6.png',
    title: 'Nursing Homes & Rehabilitation Centers',
    category: 'Long-Term Care',
    link: '#',
  },
  {
    img: '/assets/images/gallery/indusry-7.png',
    title: 'Medical Colleges & Training Institutes',
    category: 'Education',
    link: '#',
  },
  {
    img: '/assets/images/gallery/indusry-8.png',
    title: 'Industrial Health Units',
    category: 'Corporate Healthcare',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <>
      <section className="portfolio-section">

        {/* Section Heading */}
        <div className="sec-title portfolio-title">
          <span className="sub-title">Industries We Serve</span>

          <h2>
            Professional Healthcare Solutions <br />
            for Every Industry
          </h2>

          <p>
            We provide reliable medical equipment, healthcare solutions, and
            professional support <br className="desktop-break" />
            designed to meet the unique needs of hospitals, clinics, and
            healthcare facilities.
          </p>
        </div>

        {/* Portfolio Slider */}
        <div className="portfolio-slider-wrapper" >

          {/* Previous Arrow */}
          <button
            type="button"
            className="portfolio-prev"
            aria-label="Previous"
          >
            <span>‹</span>
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            navigation={{
              prevEl: '.portfolio-prev',
              nextEl: '.portfolio-next',
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={800}
            spaceBetween={12}
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 12,
              },

              576: {
                slidesPerView: 2,
                spaceBetween: 12,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 14,
              },

              992: {
                slidesPerView: 3,
                spaceBetween: 16,
              },

              1200: {
                slidesPerView: 4,
                spaceBetween: 12,
              },

              1500: {
                slidesPerView: 4,
                spaceBetween: 12,
              },
            }}
            className="portfolio-swiper"
          >

            {portfolioItems.map((item, index) => (
              <SwiperSlide key={index}>

                <div className="portfolio-card">

                  {/* Image */}
                  <div className="portfolio-image">

                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      priority={index < 4}
                      sizes="
                        (max-width: 575px) 92vw,
                        (max-width: 991px) 47vw,
                        (max-width: 1199px) 31vw,
                        24vw
                      " 
                    />

                    {/* Image Overlay */}
                    <div className="portfolio-overlay"></div>

                    {/* Content */}
                    <div className="portfolio-content">

                      <Link
                        href={item.link}
                        className="portfolio-title-link"
                      >
                        <h3>{item.title}</h3>
                      </Link>

                      <span className="portfolio-category">
                        {item.category}
                      </span>

                    </div>

                    {/* Hover Arrow */}
                    <Link
                      href={item.link}
                      className="portfolio-arrow"
                      aria-label={`View ${item.title}`}
                    >
                      <span>↗</span>
                    </Link>

                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

          {/* Next Arrow */}
          <button
            type="button"
            className="portfolio-next"
            aria-label="Next"
          >
            <span>›</span>
          </button>

        </div>

      </section>
    </>
  );
}
