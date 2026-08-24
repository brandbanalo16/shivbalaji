
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "../../../../../components/layout/Layout";
import Cta from "../../../../../components/sections/home2/Cta";
import { getProductByCategoryAndSlug, getCategoryBySlug, getSubcategoriesByCategory, getRelatedProductsBySubcategory, slugify, categoryMeta } from "../../../../../data/products";
import ProductTabs from "../../../../../components/sections/product/ProductTabs";

import ProductImageGallery from "../../../../../components/sections/ProductShowcase/ProductImageGallery";
import ProductEnquiryForm from "../../../../../components/elements/ProductEnquiryForm";
import RelatedProductsSlider from "../../../../../components/elements/RelatedProductsSlider";

interface PageProps {
  params: Promise<{
    category: string;
    subcategory: string;
    product: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: { category: string; subcategory: string; product: string }[] = [];
  
  for (const cat of categoryMeta) {
    const subcats = getSubcategoriesByCategory(cat.slug);
    for (const sub of subcats) {
      const subSlug = slugify(sub);
      const { getProductsBySubcategory } = await import("../../../../../data/products");
      const products = getProductsBySubcategory(cat.slug, sub);
      
      for (const p of products) {
        params.push({
          category: cat.slug,
          subcategory: subSlug,
          product: p.slug,
        });
      }
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductByCategoryAndSlug(resolvedParams.category, resolvedParams.product);
  
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: product.seo?.meta_title || `${product.product_name} | Shiv Balaji Surgical`,
    description: product.seo?.meta_description || product.short_description,
    keywords: [product.seo?.focus_keyword, ...(product.seo?.additional_keywords || []), ...(product.seo?.business_keywords || [])].filter(Boolean).join(", "),
    openGraph: {
      title: product.seo?.og_title || product.seo?.meta_title || product.product_name,
      description: product.seo?.og_description || product.seo?.meta_description,
      images: [product.image],
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo?.twitter_title || product.seo?.meta_title || product.product_name,
      description: product.seo?.twitter_description || product.seo?.meta_description,
    }
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductByCategoryAndSlug(resolvedParams.category, resolvedParams.product);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(resolvedParams.category);
  const actualSubName = getSubcategoriesByCategory(resolvedParams.category).find(s => slugify(s) === resolvedParams.subcategory);

  if (!category || !actualSubName || product.subcategory !== actualSubName) {
    // If the URL structure is mismatched, 404
    notFound();
  }

  const relatedProducts = getRelatedProductsBySubcategory(actualSubName, resolvedParams.category, product.product_id).slice(0, 4);

  // JSON-LD Schema
  const schemaOrg = product.seo?.schema_org || null;

  return (
    <div className="boxed_wrapper">
      {schemaOrg && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      )}
      
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={product.product_name}>
        <section className="sidebar-page-container pt_120 pb_40">
          <div className="auto-container">
            
            {/* Breadcrumb generated from hierarchy */}
            <div className="bread-crumb mb_40">
              <ul className="clearfix" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", padding: 0, margin: 0, listStyle: "none", gap: "10px", fontSize: "14px", color: "#64748b" }}>
                <li><Link href="/" style={{ color: "#fe5e04" }}>Home</Link></li>
                <li><i className="fa-solid fa-angle-right" style={{ fontSize: "12px" }}></i></li>
                <li><Link href={`/${category.slug}`} style={{ color: "#fe5e04" }}>{category.name}</Link></li>
                <li><i className="fa-solid fa-angle-right" style={{ fontSize: "12px" }}></i></li>
                <li><Link href={`/${category.slug}/${resolvedParams.subcategory}`} style={{ color: "#fe5e04" }}>{actualSubName}</Link></li>
                <li><i className="fa-solid fa-angle-right" style={{ fontSize: "12px" }}></i></li>
                <li style={{ color: "#1e293b", fontWeight: 500 }}>{product.product_name}</li>
              </ul>
            </div>
            
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <ProductImageGallery images={[product.image]} productName={product.product_name} />
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="product-detail-content" style={{ paddingLeft: "20px" }}>
                  <h1 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "20px", color: "#1e293b", textTransform: "uppercase" }}>{product.product_name}</h1>
                  
                  <div className="table-responsive" style={{ marginBottom: "25px" }}>
                    <table className="table" style={{ border: "1px solid #e2e8f0", borderRadius: "5px", overflow: "hidden", marginBottom: 0 }}>
                      <thead>
                        <tr style={{ background: "#f8fafc" }}>
                          <th style={{ padding: "12px 20px", color: "#334155", fontSize: "14px", fontWeight: 700, borderBottom: "1px solid #e2e8f0", width: "40%" }}>Additional Details</th>
                          <th style={{ padding: "12px 20px", color: "#334155", fontSize: "14px", fontWeight: 700, borderBottom: "1px solid #e2e8f0", width: "60%" }}>Information</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                          <td style={{ padding: "12px 20px", color: "#64748b", fontSize: "14px" }}>Category</td>
                          <td style={{ padding: "12px 20px", color: "#64748b", fontSize: "14px" }}>{category.name}</td>
                        </tr>
                        <tr style={{ borderBottom: "1px solid #e2e8f0" }}>
                          <td style={{ padding: "12px 20px", color: "#64748b", fontSize: "14px" }}>Subcategory</td>
                          <td style={{ padding: "12px 20px", color: "#64748b", fontSize: "14px" }}>{actualSubName}</td>
                        </tr>
                        <tr>
                          <td style={{ padding: "12px 20px", color: "#64748b", fontSize: "14px" }}>Model No.</td>
                          <td style={{ padding: "12px 20px", color: "#64748b", fontSize: "14px" }}>{product.model || "N/A"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div style={{ marginBottom: "0px" }}>
                    <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "10px", color: "#1e293b" }}>Description:</h3>
                    <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#475569", marginBottom: "20px" }}>
                      {product.short_description || (product.description.length > 150 ? product.description.substring(0, 150) + "..." : product.description)}
                    </p>
                    <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                      <Link href={`https://wa.me/918287153753?text=${encodeURIComponent(`Hi, I'm interested in the ${product.product_name}. Please provide the best quote.`)}`} target="_blank" style={{ flex: 1, background: "#1e293b", color: "#fff", padding: "12px 5px", borderRadius: "30px", fontWeight: 600, display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", fontSize: "14px", transition: "all 0.3s ease", textAlign: "center" }}>
                        <i className="fa-brands fa-whatsapp"></i> Get Quote
                      </Link>
                      <Link href="tel:+918287153753" style={{ flex: 1, background: "#fe5e04", color: "#fff", padding: "12px 5px", borderRadius: "30px", fontWeight: 600, display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", fontSize: "14px", transition: "all 0.3s ease", textAlign: "center" }}>
                        <i className="fa-solid fa-phone"></i> Call Now
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="sidebar-page-container pb_80">
          <div className="auto-container">
            <ProductTabs 
              description={product.description} 
              features={product.features || []} 
              specifications={product.specifications || []} 
            />
          </div>
        </section>

        <section className="contact-section pb_120 pt_60">
          <div className="auto-container">
            <div className="row clearfix" style={{ alignItems: "center" }}>
               {/* Left side: Heading & Text */}
               <div className="col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-0 pr_50">
                  <div className="sec-title mb_30" style={{ textAlign: "left" }}>
                     <span className="sub-title" style={{ color: "#fe5e04", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", fontSize: "14px", display: "inline-block", marginBottom: "15px" }}>Get in Touch</span>
                     <h2 style={{ fontSize: "42px", fontWeight: 800, lineHeight: "1.2", color: "#002046" }}>Ready to order or need more details?</h2>
                  </div>
                  <div className="text-content">
                     <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#475569", marginBottom: "35px", fontWeight: 400 }}>
                       Contact us today to request a quote for the <strong style={{ color: "#002046" }}>{product.product_name}</strong>. Our experienced team is ready to assist you with the best possible pricing, bulk orders, and delivery options to suit your needs.
                     </p>
                     
                     <div className="info-box-wrapper" style={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                       <div className="info-box" style={{ display: "flex", alignItems: "center", background: "#f8fafc", padding: "20px", borderRadius: "10px", border: "1px solid #e2e8f0", transition: "all 0.3s ease" }}>
                          <div className="icon-box" style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#fff", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #e2e8f0", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", marginRight: "20px", flexShrink: 0 }}>
                            <i className="fa-solid fa-phone" style={{ color: "#fe5e04", fontSize: "22px" }}></i>
                          </div>
                          <div>
                            <span style={{ display: "block", fontSize: "14px", color: "#64748b", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>Call Us Anytime</span>
                            <a href="tel:+918287153753" style={{ fontSize: "22px", fontWeight: 700, color: "#002046", textDecoration: "none", transition: "color 0.3s ease" }} className="hover-orange">+91 82871 53753</a>
                          </div>
                       </div>
                       
                       <div className="info-box" style={{ display: "flex", alignItems: "center", background: "#f8fafc", padding: "20px", borderRadius: "10px", border: "1px solid #e2e8f0", transition: "all 0.3s ease" }}>
                          <div className="icon-box" style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#fff", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #e2e8f0", boxShadow: "0 5px 15px rgba(0,0,0,0.05)", marginRight: "20px", flexShrink: 0 }}>
                            <i className="fa-solid fa-envelope" style={{ color: "#fe5e04", fontSize: "22px" }}></i>
                          </div>
                          <div>
                            <span style={{ display: "block", fontSize: "14px", color: "#64748b", marginBottom: "5px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>Email Us</span>
                            <a href="mailto:info@shivbalajisurgical.com" style={{ fontSize: "22px", fontWeight: 700, color: "#002046", textDecoration: "none", transition: "color 0.3s ease" }} className="hover-orange">info@shivbalajisurgical.com</a>
                          </div>
                       </div>
                     </div>
                  </div>
               </div>

               {/* Right side: Form */}
               <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="form-inner" style={{ padding: "40px", background: "#fff", borderRadius: "10px", border: "1px solid #e2e8f0", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
                    <h3 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "25px", color: "#1e293b", borderBottom: "2px solid #fe5e04", paddingBottom: "15px" }}>Request a Quote</h3>
                    
                    <ProductEnquiryForm productName={product.product_name} />
                  </div>
               </div>
            </div>
          </div>
        </section>

        {relatedProducts.length > 0 && (
          <section className="related-products-section pb_120">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-12 text-center mb_40">
                  <span className="sub-title" style={{ color: "#fe5e04", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>Related Products</span>
                  <h2 style={{ fontSize: "36px", fontWeight: 700, marginTop: "10px" }}>More from {actualSubName}</h2>
                </div>

                <div className="col-lg-12">
                  <RelatedProductsSlider 
                    relatedProducts={relatedProducts.map(p => ({
                      slug: p.slug,
                      subcategory: slugify(p.subcategory),
                      product_name: p.product_name,
                      image: p.image
                    }))} 
                    categorySlug={category.slug} 
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        <Cta />
      </Layout>
    </div>
  );
}
