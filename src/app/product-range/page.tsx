import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/layout/Layout";
import { departments } from "../../../data/products";

// Map each department to a service image and accent color
const deptMeta: Record<string, { image: string; icon: string; accent: string }> = {
  "bedside-lockers-over-bed-tables": { image: "/assets/images/caterogy/Bedside Lockers & Over-Bed Tables Manufacturer.png", icon: "fa-box-archive", accent: "#4a90e2" },
  "examination-room-furniture": { image: "/assets/images/caterogy/Examination Room Furniture.png", icon: "fa-stethoscope", accent: "#27ae60" },
  "hospital-icu-beds": { image: "/assets/images/service/service-1.jpg", icon: "fa-bed", accent: "#e74c3c" },
  "medical-trolleys-carts": { image: "/assets/images/service/service-6.jpg", icon: "fa-truck-medical", accent: "#f39c12" },
  "stools-chairs-patient-seating": { image: "/assets/images/service/service-5.jpg", icon: "fa-chair", accent: "#8e44ad" },
  "stretchers-screens-accessories": { image: "/assets/images/service/service-7.jpg", icon: "fa-wheelchair", accent: "#16a085" },
};

const getServiceImg = (slug: string, fallbackIdx: number) =>
  deptMeta[slug]?.image ?? `/assets/images/service/service-${(fallbackIdx % 10) + 1}.jpg`;

const getIcon = (slug: string, fallbackIcon: string) =>
  deptMeta[slug]?.icon ?? fallbackIcon;

export default function ProductRangePage() {
  return (
    <Layout breadcrumbTitle="Our Product Range" wrapperCls="product-range-page">
      <style>{`
        /* ── Hero Stats Bar ── */
        .pr-stats-bar {
          background: linear-gradient(90deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%);
          padding: 28px 0;
          border-bottom: 3px solid #fe5e04;
        }
        .pr-stat-item {
          text-align: center;
          color: #fff;
          position: relative;
        }
        .pr-stat-item + .pr-stat-item::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; height: 60%;
          width: 1px;
          background: rgba(255,255,255,0.15);
        }
        .pr-stat-num {
          font-size: 32px;
          font-weight: 800;
          color: #fe5e04;
          line-height: 1;
          display: block;
        }
        .pr-stat-label {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          margin-top: 4px;
          display: block;
          letter-spacing: 0.5px;
        }

        /* ── Section Header ── */
        .pr-section-header {
          text-align: center;
          padding: 70px 0 50px;
        }
        .pr-section-header .sub-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff4ee;
          color: #fe5e04;
          border: 1px solid #ffd7c2;
          border-radius: 30px;
          padding: 6px 18px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .pr-section-header h2 {
          font-size: 36px;
          font-weight: 800;
          color: #1a1a2e;
          margin-bottom: 14px;
          line-height: 1.25;
        }
        .pr-section-header h2 span { color: #fe5e04; }
        .pr-section-header p {
          font-size: 16px;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ── Grid ── */
        .pr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          padding-bottom: 80px;
        }
        @media (max-width: 991px) {
          .pr-grid { grid-template-columns: repeat(2, 1fr); }
          .pr-section-header h2 { font-size: 28px; }
        }
        @media (max-width: 575px) {
          .pr-grid { grid-template-columns: 1fr; gap: 20px; }
        }

        /* ── Card ── */
        .pr-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          border: 1px solid #f0f0f0;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          display: flex;
          flex-direction: column;
        }
        .pr-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.13);
        }
        .pr-card-img {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #f5f5f5;
        }
        .pr-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .pr-card:hover .pr-card-img img {
          transform: scale(1.07);
        }
        .pr-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .pr-card:hover .pr-card-overlay {
          opacity: 1;
        }
        .pr-card-count {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(255,255,255,0.95);
          color: #fe5e04;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 30px;
          backdrop-filter: blur(4px);
        }
        .pr-card-icon {
          position: absolute;
          bottom: 14px;
          left: 14px;
          width: 42px;
          height: 42px;
          background: #fe5e04;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 17px;
          opacity: 0;
          transform: translateY(8px);
          transition: all 0.35s ease;
        }
        .pr-card:hover .pr-card-icon {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Card Body ── */
        .pr-card-body {
          padding: 22px 24px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .pr-card-cat {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #fe5e04;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 10px;
        }
        .pr-card-cat::before {
          content: '';
          display: block;
          width: 18px;
          height: 2px;
          background: #fe5e04;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .pr-card-body h3 {
          font-size: 19px;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 10px;
          line-height: 1.35;
        }
        .pr-card-body h3 a {
          color: inherit;
          text-decoration: none;
          transition: color 0.2s;
        }
        .pr-card-body h3 a:hover { color: #fe5e04; }
        .pr-card-body p {
          font-size: 14px;
          color: #777;
          line-height: 1.65;
          flex: 1;
          margin-bottom: 20px;
        }
        .pr-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #f0f0f0;
          padding-top: 16px;
          margin-top: auto;
        }
        .pr-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #fe5e04;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 9px 20px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
        }
        .pr-view-btn:hover {
          background: #d94e00;
          color: #fff;
          transform: translateX(3px);
        }
        .pr-card-products-count {
          font-size: 12px;
          color: #aaa;
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .pr-card-products-count i { color: #fe5e04; font-size: 11px; }

        /* ── CTA strip ── */
        .pr-cta-strip {
          background: linear-gradient(135deg, #fe5e04 0%, #ff8533 100%);
          border-radius: 20px;
          padding: 50px 50px;
          margin: 0 0 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          box-shadow: 0 10px 40px rgba(254,94,4,0.3);
        }
        @media (max-width: 767px) {
          .pr-cta-strip { flex-direction: column; text-align: center; padding: 40px 24px; }
        }
        .pr-cta-strip h3 {
          font-size: 26px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 8px;
        }
        .pr-cta-strip p {
          font-size: 15px;
          color: rgba(255,255,255,0.85);
          margin: 0;
        }
        .pr-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #fff;
          color: #fe5e04;
          font-size: 15px;
          font-weight: 700;
          padding: 14px 32px;
          border-radius: 50px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        .pr-cta-btn:hover {
          background: #1a1a2e;
          color: #fff;
        }
      `}</style>

      {/* Stats Bar */}
      {/* <div className="pr-stats-bar">
        <div className="auto-container">
          <div className="row clearfix">
            {[
              { num: "88+",  label: "Total Products" },
              { num: "6+",   label: "Product Categories" },
              { num: "500+", label: "Happy Clients" },
              { num: "15+",  label: "Years Experience" },
            ].map((s, i) => (
              <div className="col-lg-3 col-md-6 col-sm-6 col-6" key={i}>
                <div className="pr-stat-item">
                  <span className="pr-stat-num">{s.num}</span>
                  <span className="pr-stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Section Header */}
      <div className="auto-container">
        <div className="pr-section-header">
          <div className="sub-badge">
            <i className="fas fa-th-large"></i>
            Explore Our Categories
          </div>
          <h2>Our <span>Product Range</span></h2>
          <p>
            Browse our complete range of premium hospital furniture and surgical equipment —
            designed for durability, safety, and clinical excellence.
          </p>
        </div>

        {/* 3×3 Grid */}
        <div className="pr-grid">
          {departments.map((dept, index) => {
            const img = getServiceImg(dept.slug, index);
            const icon = getIcon(dept.slug, dept.icon || "fa-box");
            return (
              <div className="pr-card" key={dept.slug}>
                <div className="pr-card-img">
                  <Image
                    src={img}
                    alt={dept.name}
                    width={480}
                    height={230}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div className="pr-card-overlay" />
                  <span className="pr-card-count">{dept.products.length} Products</span>
                  <div className="pr-card-icon">
                    <i className={`fas ${icon}`}></i>
                  </div>
                </div>

                <div className="pr-card-body">
                  <span className="pr-card-cat">Category</span>
                  <h3>
                    <Link href={`/${dept.slug}`}>{dept.name}</Link>
                  </h3>
                  <p>
                    {dept.description.length > 120
                      ? dept.description.substring(0, 120) + "..."
                      : dept.description}
                  </p>
                  <div className="pr-card-footer">
                    <Link href={`/${dept.slug}`} className="pr-view-btn">
                      View Products <i className="fas fa-arrow-right"></i>
                    </Link>
                    <span className="pr-card-products-count">
                      <i className="fas fa-cube"></i>
                      {dept.products.length} items
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="pr-cta-strip">
          <div>
            <h3>Can&apos;t find what you&apos;re looking for?</h3>
            <p>Contact us for custom orders, bulk pricing, or product enquiries.</p>
          </div>
          <Link href="/contact" className="pr-cta-btn">
            <i className="fas fa-phone-alt"></i>
            Get In Touch
          </Link>
        </div>
      </div>
    </Layout>
  );
}
