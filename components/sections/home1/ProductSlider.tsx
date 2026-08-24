'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

import { departments } from '../../../data/products';

export default function ProductSlider() {
  const products = useMemo(() => {
    const all = departments.flatMap((dept) =>
      dept.products.map((p) => ({
        image: p.image,
        name: p.product_name,
        category: dept.name,
        slug: p.slug,
      }))
    );
    return [...all].sort(() => Math.random() - 0.5).slice(0, 8);
  }, []);

  return (
    <section
      className="product-grid-section"
      style={{ background: 'linear-gradient(135deg, #f5f0eb 0%, #ede8e3 50%, #f0ece8 100%)', padding: '80px 0 60px' }}
    >
      <style>{`
        .prod-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 26px;
        }
        .prod-grid-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 0 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .prod-grid-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.14);
        }
        .prod-grid-img {
          width: 100%;
          aspect-ratio: 1 / 1;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .prod-grid-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .prod-grid-card:hover .prod-grid-img img {
          transform: scale(1.06);
        }
        .prod-grid-body {
          width: 100%;
          padding: 16px 22px 0;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .prod-grid-cat {
          display: inline-block;
          background: #fff4ee;
          color: #fe5e04;
          font-size: 11px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 20px;
          border: 1px solid #ffd7c2;
        }
        .prod-grid-name {
          font-size: 16px;
          font-weight: 700;
          color: #1a1a2e;
          line-height: 1.4;
          margin: 0;
        }
        .prod-grid-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 1.5px solid #fe5e04;
          border-radius: 6px;
          padding: 9px 20px;
          font-size: 13px;
          font-weight: 600;
          color: #fe5e04;
          text-decoration: none;
          background: #fff;
          transition: all 0.3s ease;
        }
        .prod-grid-btn:hover {
          background: #fe5e04;
          color: #fff;
        }
        .view-all-prod-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fe5e04;
          border: 2px solid #fe5e04;
          color: #fff;
          border-radius: 50px;
          padding: 13px 36px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 18px rgba(254,94,4,0.3);
        }
        .view-all-prod-btn:hover {
          background: transparent;
          color: #fe5e04;
        }
        .prod-grid-title .sub-title {
          color: #fe5e04 !important;
        }
        .prod-grid-title h2 {
          color: #1a1a2e !important;
        }

        @media (max-width: 1199px) {
          .prod-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 991px) {
          .prod-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 575px) {
          .prod-grid { 
            grid-template-columns: repeat(2, 1fr); 
            gap: 10px;
          }
          .prod-grid-card { padding: 0 0 12px !important; }
          .prod-grid-img { aspect-ratio: 1 / 1 !important; padding: 5px !important; }
          .prod-grid-img img { object-fit: contain !important; }
          .prod-grid-name { font-size: 12px !important; }
          .prod-grid-body { padding: 8px 6px 0 !important; gap: 6px !important; }
          .prod-grid-btn { padding: 4px 10px !important; font-size: 11px !important; white-space: nowrap !important; }
          .prod-grid-cat { display: none !important; }
        }
      `}</style>

      <div className="auto-container">
        {/* Section Title */}
        <div className="sec-title centred mb_60 prod-grid-title">
          <span className="sub-title mb_5">Our Products</span>
          <h2>Featured Medical Equipment</h2>
          <p>
            Explore our most popular hospital furniture and surgical equipment — engineered for
            durability, patient safety, and clinical excellence.
          </p>
        </div>

        {/* 4×2 Grid */}
        <div className="prod-grid">
          {products.map((product, index) => (
            <div className="prod-grid-card" key={index}>
              <div className="prod-grid-img">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="prod-grid-body">
                <span className="prod-grid-cat">{product.category}</span>
                <h3 className="prod-grid-name">
                  {product.name.length > 40
                    ? product.name.substring(0, 40) + '...'
                    : product.name}
                </h3>
                <Link href={`/product/${product.slug}`} className="prod-grid-btn">
                  <i className="fas fa-shopping-cart"></i>
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link href="/product-range" className="view-all-prod-btn">
            View All Products
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
