"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomStyle, setZoomStyle] = useState({});
  const [isZoomed, setIsZoomed] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  const displayImages = images;

  const activeImage = displayImages[activeIndex] || displayImages[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to the image container
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      transformOrigin: x + "% " + y + "%",
      transform: "scale(2.5)", // 2.5x Zoom Magnification
    });
  };

  const handleMouseEnter = () => setIsZoomed(true);
  const handleMouseLeave = () => {
    setIsZoomed(false);
    setZoomStyle({ transformOrigin: "center center", transform: "scale(1)" });
  };

  return (
    <div className="product-image-gallery layout-side">
      <style>{`
        .product-image-gallery {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        @media (min-width: 992px) {
          .product-image-gallery.layout-side {
            flex-direction: row-reverse;
          }
          .gallery-thumbnails.layout-side {
            flex-direction: column;
            width: 90px;
          }
        }

        .gallery-main-image {
          flex: 1;
          position: relative;
          aspect-ratio: 1 / 1;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          cursor: crosshair;
        }

        .gallery-main-image img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* Product centered inside the square */
          padding: 30px;
          transition: transform 0.1s ease-out;
        }
        
        .gallery-main-image.zoomed img {
          padding: 0;
          object-fit: cover;
        }

        .gallery-thumbnails {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          padding-bottom: 8px; /* space for scrollbar */
        }
        
        .gallery-thumbnails::-webkit-scrollbar {
          height: 4px;
        }
        .gallery-thumbnails::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }

        .gallery-thumbnail {
          width: 90px;
          height: 90px;
          flex-shrink: 0;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
          background: #ffffff;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }

        .gallery-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 10px;
        }

        .gallery-thumbnail:hover {
          border-color: #cbd5e1;
        }

        .gallery-thumbnail.active {
          border-color: #fe5e04;
          box-shadow: 0 4px 15px rgba(254,94,4,0.15);
        }
      `}</style>

      {/* Main Image */}
      <div 
        className={"gallery-main-image " + (isZoomed ? "zoomed" : "")}
        ref={imgRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={activeImage}
          alt={productName}
          width={800}
          height={800}
          style={isZoomed ? zoomStyle : {}}
          priority
        />
      </div>

      {/* Thumbnails */}
      {displayImages.length > 1 && (
        <div className="gallery-thumbnails layout-side">
          {displayImages.map((img, idx) => (
            <div 
              key={idx} 
              className={"gallery-thumbnail " + (idx === activeIndex ? "active" : "")}
              onClick={() => setActiveIndex(idx)}
            >
              <Image src={img} alt={productName + " thumbnail " + (idx + 1)} width={100} height={100} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
