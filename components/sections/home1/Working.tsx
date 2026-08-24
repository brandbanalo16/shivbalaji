'use client';

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const steps = [
    {
        num: "01",
        title: "Share Your Requirements",
        text: <>Share your healthcare project :<br /> our experts recommend suitable hospital furniture solutions..</>,
        img: "/assets/images/resource/work1.png"
    },
    {
        num: "02",
        title: "Manufacturing & Quality Check",
        text: "We manufacture premium hospital furniture with quality materials and strict inspections.",
        img: "/assets/images/resource/work2.png"
    },
    {
        num: "03",
        title: "Fast Delivery & Installation",
        text: "Delivered on time with expert installation and dependable after-sales support for satisfaction.",
        img: "/assets/images/resource/work3.png"
    }
];

export default function Working() {
    return (
        <section className="working-section sec-pad centred">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title mb_60">
                    <span className="sub-title mb_5">How It Works</span>
                    <h2>How We Deliver Quality <br />Hospital Furniture</h2>
                    <p>We make it simple to find, customize, and receive premium hospital furniture tailored to your healthcare facility&apos;s needs.</p>
                </div>
                <div className="inner-container p_relative">
                    <div className="arrow-shape d-none d-md-block" style={{ backgroundImage: "url(assets/images/shape/shape-18.png)" }}></div>
                    
                    {/* Desktop View (Standard Grid) */}
                    <div className="row clearfix d-none d-md-flex">
                        {steps.map((step) => (
                            <div key={step.num} className="col-lg-4 col-md-4 col-sm-12 working-block">
                                <div className="working-block-one">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><Image src={step.img} alt={step.title} width={250} height={250} priority /></figure>
                                            <span className="count-text">{step.num}</span>
                                        </div>
                                        <div className="lower-content">
                                            <h3>{step.title}</h3>
                                            <p>{step.text}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile View (Swiper Loop) */}
                    <div className="d-block d-md-none">
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                        >
                            {steps.map((step) => (
                                <SwiperSlide key={step.num}>
                                    <div className="working-block-one m-0">
                                        <div className="inner-box">
                                            <div className="image-box">
                                                <figure className="image"><Image src={step.img} alt={step.title} width={250} height={250} priority /></figure>
                                                <span className="count-text">{step.num}</span>
                                            </div>
                                            <div className="lower-content">
                                                <h3>{step.title}</h3>
                                                <p>{step.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}
