"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

interface RelatedProduct {
  slug: string;
  subcategory: string;
  product_name: string;
  image: string;
}

export default function RelatedProductsSlider({
  relatedProducts,
  categorySlug,
}: {
  relatedProducts: RelatedProduct[];
  categorySlug: string;
}) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      loop={true}
      speed={1500}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {relatedProducts.map((relatedProduct) => (
        <SwiperSlide key={relatedProduct.slug} style={{ height: "auto" }}>
          <div className="product-card-clean" style={{ background: "#fff", borderRadius: "8px", border: "1px solid #eaeaea", overflow: "hidden", transition: "transform 0.3s ease, box-shadow 0.3s ease", width: "100%", display: "flex", flexDirection: "column", height: "100%" }}>
            <figure className="image-box" style={{ position: "relative", padding: "0", background: "#eef5ff", textAlign: "center", margin: 0, aspectRatio: "1 / 1", overflow: "hidden", flexShrink: 0 }}>
              <Link href={`/${categorySlug}/${relatedProduct.subcategory}/${relatedProduct.slug}`} style={{ display: "block", width: "100%", height: "100%" }}>
                <Image
                  src={relatedProduct.image}
                  alt={relatedProduct.product_name}
                  width={300}
                  height={300}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
                />
              </Link>
            </figure>

            <div className="card-content" style={{ padding: "20px 15px", display: "flex", flexDirection: "column", alignItems: "center", background: "#fff", flex: 1 }}>
              <h3 style={{ fontSize: "15px", lineHeight: "22px", fontWeight: 700, marginBottom: "15px", textAlign: "center", textTransform: "uppercase" }}>
                <Link href={`/${categorySlug}/${relatedProduct.subcategory}/${relatedProduct.slug}`} style={{ color: "#d32f2f", textDecoration: "none" }}>
                  {relatedProduct.product_name}
                </Link>
              </h3>
              <div className="link-btn" style={{ marginTop: "auto", paddingBottom: "5px" }}>
                <Link 
                  href={`/${categorySlug}/${relatedProduct.subcategory}/${relatedProduct.slug}`}
                  style={{ display: "inline-block", padding: "8px 20px", background: "#003b8e", color: "#fff", fontWeight: 600, borderRadius: "4px", fontSize: "13px", textDecoration: "none" }}
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
