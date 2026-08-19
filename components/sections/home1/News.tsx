"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { latestBlogs } from "../../../src/app/blog/blogs";

export default function News() {
  // ALL blogs from blogs.ts
  const newsItems = latestBlogs;

  return (
    <section className="news-section sec-pad">
      <div className="auto-container">

        {/* Section Title */}
        <div className="sec-title centred mb_60">
          <span className="sub-title mb_5">
            Latest News
          </span>
          <h2>
            Resources to Keep You Informed with Our Blog
          </h2>
          <p>
            Medical care is the practice of providing diagnosis,
            treatment, and preventive care for various illnesses,
            injuries, and diseases.
          </p>
        </div>

        {/* Blog Slider */}
        <Swiper
          modules={[
            Autoplay,
            Navigation,
            Pagination,
          ]}
          slidesPerView={1}
          spaceBetween={30}
          loop={newsItems.length > 1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            1199: {
              slidesPerView: 3,
            },
          }}
          className="news-slider"
        >

          {/* ALL BLOGS */}
          {newsItems.map((item) => (
            <SwiperSlide key={item.slug}>

              <div className="news-block-one">
                <div className="inner-box">

                  {/* Image */}
                  <figure className="image-box">
                    <Link
                      href={`/blog-details/${item.slug}`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={300}
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                  </figure>

                  {/* Content */}
                  <div className="lower-content">

                    {/* Category */}
                    <span className="comment-box">
                      {item.category}
                    </span>

                    {/* Title */}
                    <h3>
                      <Link
                        href={`/blog-details/${item.slug}`}
                      >
                        {item.title.length > 49
                          ? item.title.substring(0, 49) + "..."
                          : item.title}
                      </Link>
                    </h3>

                    {/* Date / Author */}
                    <ul className="post-info clearfix">

                      <li>
                        <i className="icon-59"></i>
                        {item.date}
                      </li>

                      <li>
                        <i className="icon-60"></i>

                        <Link
                          href={`/blog-details/${item.slug}`}
                        >
                          {item.author}
                        </Link>
                      </li>

                    </ul>

                    {/* Description */}
                    <p>
                      {item.description.length > 120
                        ? item.description.substring(0, 120) + "..."
                        : item.description}
                    </p>

                    {/* Read More */}
                    <div className="link">
                      <Link
                        href={`/blog-details/${item.slug}`}
                      >
                        Read More
                      </Link>
                    </div>

                  </div>
                </div>
              </div>

            </SwiperSlide>
          ))}

          {/* Navigation */}
          <div className="nav-style-one">
            <div className="swiper-nav">

              <button
                type="button"
                className="swiper-prev"
                aria-label="Previous blog"
              >
                <span className="icon-21"></span>
              </button>

              <button
                type="button"
                className="swiper-next"
                aria-label="Next blog"
              >
                <span className="icon-22"></span>
              </button>

            </div>
          </div>

        </Swiper>

      </div>
    </section>
  );
}