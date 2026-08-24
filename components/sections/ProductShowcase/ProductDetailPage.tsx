import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "../../layout/Layout";
import Cta from "../home2/Cta";
import { departments, getProductBySlug as getProduct } from "../../../data/products";
import ProductImageGallery from "./ProductImageGallery";

interface ProductDetailPageProps {
  slug: string;
}

export default function ProductDetailPage({ slug }: ProductDetailPageProps) {
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = departments
    .flatMap((item) => item.products)
    .filter(
      (item) =>
        item.category === product.category && item.slug !== product.slug,
    )
    .slice(0, 4);


  const relatedProductAlt = (rp: typeof relatedProducts[0]) =>
    rp.seo?.image_alt_text || `${rp.product_name} - Hospital Furniture Manufacturer Delhi | Shiv Balaji Surgical`;

  // JSON-LD structured data
  const jsonLd = product.seo?.schema_org ?? {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.product_name,
    sku: product.model,
    category: product.category,
    brand: { "@type": "Brand", name: "Shiv Balaji Surgical" },
    manufacturer: {
      "@type": "Organization",
      name: "Shiv Balaji Surgical",
      address: "Kh. No. 25/2, Nangli Sakrawati, Najafgarh, New Delhi - 110043, India",
    },
    description: product.seo?.meta_description || product.short_description,
  };

  return (
    <div className="boxed_wrapper">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle={product.product_name}>
        <section className="sidebar-page-container pt_120 pb_120">
          <div className="auto-container">
            <div className="row clearfix align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <ProductImageGallery images={[product.image]} productName={product.product_name} />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="product-detail-content">
                  <span className="product-category" style={{ display: "inline-block", padding: "8px 18px", background: "rgba(254,94,4,0.08)", color: "#fe5e04", borderRadius: 30, fontWeight: 700, marginBottom: 18 }}>
                    {product.category}
                  </span>

                  <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", fontWeight: 800, color: "#08245c", lineHeight: 1.2, marginBottom: 18 }}>
                    {product.product_name}
                  </h2>

                  <p className="product-short-description" style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.8, marginBottom: 28 }}>
                    {product.short_description}
                  </p>

                  <div className="product-description" style={{ marginBottom: 28 }}>
                    <h3 style={{ fontSize: 24, fontWeight: 700, color: "#08245c", marginBottom: 10 }}>
                      Product Details
                    </h3>
                    <p style={{ fontSize: 17, color: "#4b5563", lineHeight: 1.8 }}>
                      {product.description}
                    </p>
                  </div>

                  <Link href="/contact" className="theme-btn btn-one">
                    <span>Enquire Now</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row mt_60 clearfix">
              <div className="col-lg-12">
                <div className="product-info-box" style={{ background: "#f8f9fb", borderRadius: 24, padding: "42px 35px", boxShadow: "0 20px 45px rgba(12, 26, 58, 0.08)" }}>
                  <div className="product-info-title text-center mb_30">
                    <span className="sub-title" style={{ color: "#fe5e04", fontWeight: 700 }}>
                      Product Features
                    </span>
                    <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", color: "#08245c", marginTop: 10 }}>
                      Key Features
                    </h2>
                  </div>

                  <div className="row clearfix">
                    {product.features?.map((feature, index) => (
                      <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
                        <div className="feature-item" style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "18px 14px", borderBottom: "1px solid #edf0f4" }}>
                          <span style={{ display: "inline-flex", width: 30, height: 30, borderRadius: "50%", background: "rgba(254,94,4,0.12)", color: "#fe5e04", alignItems: "center", justifyContent: "center", fontSize: 14 }}>
                            <i className="fa-solid fa-check"></i>
                          </span>
                          <p style={{ fontSize: 16, color: "#334155", lineHeight: 1.8, margin: 0 }}>{feature}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt_60 clearfix">
              <div className="col-lg-12">
                <div className="product-specifications" style={{ background: "#fff", borderRadius: 24, padding: "42px 35px", boxShadow: "0 20px 45px rgba(12, 26, 58, 0.08)" }}>
                  <div className="product-info-title text-center mb_30">
                    <span className="sub-title" style={{ color: "#fe5e04", fontWeight: 700 }}>
                      Technical Information
                    </span>
                    <h2 style={{ fontSize: "clamp(2rem, 3vw, 3rem)", color: "#08245c", marginTop: 10 }}>
                      Specifications
                    </h2>
                  </div>

                  <div className="table-responsive">
                    <table className="table specification-table" style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        {product.specifications?.map((spec, index) => (
                          <tr key={index} style={{ borderBottom: "1px solid #edf0f4" }}>
                            <td style={{ padding: "18px 20px", color: "#4b5563" }}>
                              <i className="fa-solid fa-check" style={{ color: "#fe5e04", marginRight: "10px" }}></i>
                              {spec}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Content Block */}
            {product.seo?.seo_content_block && (
              <div className="row mt_60 clearfix">
                <div className="col-lg-12">
                  <div className="product-seo-block" style={{ background: "#f8f9fb", borderRadius: 24, padding: "42px 35px", boxShadow: "0 20px 45px rgba(12, 26, 58, 0.08)" }}>
                    <div className="text-center mb_30">
                      <span className="sub-title" style={{ color: "#fe5e04", fontWeight: 700 }}>About This Product</span>
                      <h3 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#08245c", marginTop: 10 }}>
                        {product.product_name} — Hospital Furniture Manufacturer in Delhi
                      </h3>
                    </div>
                    <p style={{ fontSize: 16, color: "#4b5563", lineHeight: 1.9, maxWidth: 900, margin: "0 auto" }}>
                      {product.seo.seo_content_block}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="row mt_60 clearfix">
              <div className="col-lg-12">
                <div className="product-bottom-content" style={{ background: "linear-gradient(135deg, rgba(254,94,4,0.08), rgba(255,255,255,0.9))", borderRadius: 24, padding: "42px 35px", textAlign: "center" }}>
                  <span className="sub-title" style={{ color: "#fe5e04", fontWeight: 700 }}>
                    Quality Healthcare Equipment
                  </span>
                  <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.6rem)", color: "#08245c", margin: "14px 0 18px" }}>
                    Designed for Reliable Patient Care
                  </h2>
                  <p style={{ maxWidth: 890, margin: "0 auto 20px", fontSize: 17, color: "#4b5563", lineHeight: 1.9 }}>
                    Our healthcare products are designed with quality, durability and easy operation in mind. We focus on delivering reliable equipment that supports modern medical teams and improves patient care environments.
                  </p>
                  <p style={{ maxWidth: 890, margin: "0 auto 28px", fontSize: 17, color: "#4b5563", lineHeight: 1.9 }}>
                    For detailed technical information, pricing, availability and customization requirements, contact our team.
                  </p>

                  <Link href="/contact" className="theme-btn btn-one">
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>

            {relatedProducts.length > 0 && (
              <div className="row mt_60 clearfix">
                <div className="col-lg-12 text-center mb_30">
                  <span className="sub-title" style={{ color: "#fe5e04", fontWeight: 700 }}>
                    Related Products
                  </span>
                  <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#08245c", marginTop: 10 }}>
                    More from {product.category}
                  </h2>
                </div>

                {relatedProducts.map((relatedProduct) => (
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 news-block" key={relatedProduct.slug}>
                    <div className="news-block-one">
                      <div className="inner-box">
                        <figure className="image-box" style={{ aspectRatio: "1 / 1", overflow: "hidden", margin: 0 }}>
                          <Link href={`/product/${relatedProduct.slug}`} style={{ display: "block", width: "100%", height: "100%" }}>
                            <Image
                              src={relatedProduct.image}
                              alt={relatedProductAlt(relatedProduct)}
                              width={416}
                              height={416}
                              style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                          </Link>
                        </figure>

                        <div className="lower-content">
                          <span className="comment-box">{relatedProduct.category}</span>

                          <h3>
                            <Link href={`/product/${relatedProduct.slug}`}>
                              {relatedProduct.product_name}
                            </Link>
                          </h3>

                          <p>
                            {relatedProduct.short_description.length > 120
                              ? `${relatedProduct.short_description.substring(0, 120)}...`
                              : relatedProduct.short_description}
                          </p>

                          <div className="link">
                            <Link href={`/product/${relatedProduct.slug}`}>
                              Read More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <Cta />
      </Layout>
    </div>
  );
}
