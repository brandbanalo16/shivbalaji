import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../../components/layout/Layout";
import Cta from "../../../components/sections/home2/Cta";
import {
  getCategoryBySlug,
  categoryMeta,
  getSubcategoriesByCategory,
  getProductsBySubcategory,
  slugify,
  subcategoryImages,
} from "../../../data/products";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  return categoryMeta.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.category);

  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.name} Manufacturer in Delhi | Shiv Balaji Surgical`,
    description: `Leading ${category.name} Manufacturer in Delhi, India. Explore our range of premium ${category.name.toLowerCase()} designed for durability and high performance.`,
    keywords: `${category.name} Manufacturer, ${category.name} Manufacturer in Delhi, ${category.name} Supplier`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.category);

  if (!category) {
    notFound();
  }

  const subcategories = getSubcategoriesByCategory(resolvedParams.category);

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={`${category.name} Manufacturer`}>
        <style>{`
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
            max-width: 800px;
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
            background: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
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
            background: linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 55%);
            opacity: 0;
            transition: opacity 0.35s ease;
            pointer-events: none;
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
            border: 1px solid #f0f0f0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
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
            background: #fafafa;
            border-top: 1px solid #f0f0f0;
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
            border-top: 1px solid #eaeaea;
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
        `}</style>

        <section className="sidebar-page-container" style={{ padding: "0 0 120px 0" }}>
          <div className="auto-container">
            {/* Section Header */}
            <div className="pr-section-header">
              <div className="sub-badge">
                <i className={`fas ${category.icon}`}></i>
                {category.name}
              </div>
              <h2>
                Explore <span>Subcategories</span>
              </h2>
              <p>{category.description}</p>
            </div>

            {/* 3×3 Grid */}
            <div className="pr-grid">
              {subcategories.map((subName) => {
                const subSlug = slugify(subName);
                const products = getProductsBySubcategory(resolvedParams.category, subName);
                const firstProduct = products[0];

                let subImage = subcategoryImages[subName] || firstProduct?.image || '/assets/images/placeholder.jpg';

                return (
                  <div className="pr-card" key={subSlug}>
                    <div className="pr-card-img">
                      {subImage && (
                        <Image
                          src={subImage}
                          alt={subName}
                          width={300}
                          height={300}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      )}
                      <div className="pr-card-overlay" />
                      <span className="pr-card-count">
                        {products.length} Products
                      </span>
                      <div className="pr-card-icon">
                        <i className={`fas ${category.icon}`}></i>
                      </div>
                    </div>

                    <div className="pr-card-body">
                      <span className="pr-card-cat">Subcategory</span>
                      <h3>
                        <Link href={`/${category.slug}/${subSlug}`}>{subName}</Link>
                      </h3>
                      <p>
                        Explore our range of premium {subName.toLowerCase()} designed
                        for durability and high performance.
                      </p>
                      <div className="pr-card-footer">
                        <Link
                          href={`/${category.slug}/${subSlug}`}
                          className="pr-view-btn"
                        >
                          View Products <i className="fas fa-arrow-right"></i>
                        </Link>
                        <span className="pr-card-products-count">
                          <i className="fas fa-cube"></i>
                          {products.length} items
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SEO Content Block */}
        <section className="seo-content-section" style={{ padding: "0 0 80px 0", background: "#f8f9fb" }}>
          <div className="auto-container">
            <div className="seo-box" style={{ padding: "40px", background: "#fff", borderRadius: "18px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <h2 style={{ fontSize: "28px", color: "#1a1a2e", marginBottom: "20px" }}>Why Choose Us as your {category.name} Manufacturer</h2>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "15px" }}>
                When searching for a top-quality <strong>{category.name} Manufacturer</strong>, it&apos;s essential to partner with experts who understand healthcare needs.
                As a leading <strong>{category.name} Manufacturer in Delhi</strong>, we ensure every product is built to last. Our reputation as a reliable <strong>{category.name} Manufacturer</strong>
                extends across India. If you need a trusted <strong>{category.name} Manufacturer</strong>, we provide the best solutions. Our team takes pride in being a top <strong>{category.name} Manufacturer</strong>.
              </p>
              <p style={{ color: "#666", lineHeight: 1.8, marginBottom: "15px" }}>
                Many clinics prefer our products because we are an ISO Certified <strong>{category.name} Manufacturer</strong>. Furthermore, being a prominent <strong>{category.name} Manufacturer</strong> means we offer competitive pricing.
                If you are looking for a bulk <strong>{category.name} Manufacturer</strong>, you are in the right place. Our journey as a premium <strong>{category.name} Manufacturer</strong> guarantees innovation.
              </p>
              <p style={{ color: "#666", lineHeight: 1.8 }}>
                Experience the difference with a true <strong>{category.name} Manufacturer</strong> today. Contact us for all your needs from a distinguished <strong>{category.name} Manufacturer</strong>. We are the <strong>{category.name} Manufacturer</strong> you can trust.
              </p>
            </div>
          </div>
        </section>

        <Cta />
      </Layout>
    </div>
  );
}
