import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../../../components/layout/Layout";
import Cta from "../../../../components/sections/home2/Cta";
import { getCategoryBySlug, getSubcategoriesByCategory, getProductsBySubcategory, slugify } from "../../../../data/products";

interface PageProps {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const { categoryMeta, getSubcategoriesByCategory, slugify } = await import("../../../../data/products");

  const params: { category: string; subcategory: string }[] = [];

  for (const cat of categoryMeta) {
    const subcats = getSubcategoriesByCategory(cat.slug);
    for (const sub of subcats) {
      params.push({
        category: cat.slug,
        subcategory: slugify(sub),
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.category);

  if (!category) return { title: "Subcategory Not Found" };

  const subcategories = getSubcategoriesByCategory(resolvedParams.category);
  const actualSubName = subcategories.find(s => slugify(s) === resolvedParams.subcategory);

  if (!actualSubName) return { title: "Subcategory Not Found" };

  return {
    title: `${actualSubName} | ${category.name} | Shiv Balaji Surgical`,
    description: `Explore our range of ${actualSubName} in the ${category.name} category from Shiv Balaji Surgical, a leading manufacturer and supplier.`,
  };
}

export default async function SubcategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const category = getCategoryBySlug(resolvedParams.category);

  if (!category) {
    notFound();
  }

  const subcategories = getSubcategoriesByCategory(resolvedParams.category);
  const actualSubName = subcategories.find(s => slugify(s) === resolvedParams.subcategory);

  if (!actualSubName) {
    notFound();
  }

  const products = getProductsBySubcategory(resolvedParams.category, actualSubName);

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={actualSubName}>
        <section className="sidebar-page-container pt_120 pb_120">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 content-side">
                <div className="blog-grid-content">
                  <div className="text-center mb_50">
                    <span style={{ color: "#fe5e04", fontWeight: 600, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "10px", display: "inline-block" }}>
                      <Link href={`/${category.slug}`} style={{ color: "inherit" }}>
                        {category.name}
                      </Link>
                    </span>
                    <h2 style={{ marginBottom: 15 }}>{actualSubName}</h2>
                    <p style={{ maxWidth: 800, margin: "0 auto", color: "#64748b", fontSize: 16 }}>
                      Explore our premium range of {actualSubName.toLowerCase()} designed for clinical excellence and patient comfort.
                    </p>
                  </div>

                  <div className="row clearfix">
                    {products.map((product) => (
                      <div className="col-lg-3 col-md-6 col-sm-12" key={product.slug} style={{ marginBottom: "30px" }}>
                        <div className="product-card-clean" style={{ background: "#fff", borderRadius: "8px", border: "1px solid #eaeaea", overflow: "hidden", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}>
                          <figure className="image-box" style={{ position: "relative", padding: "0", background: "#eef5ff", textAlign: "center", margin: 0, aspectRatio: "1 / 1", overflow: "hidden" }}>
                            <Link href={`/${category.slug}/${resolvedParams.subcategory}/${product.slug}`} style={{ display: "block", width: "100%", height: "100%" }}>
                              <Image
                                src={product.image}
                                alt={product.product_name}
                                width={300}
                                height={300}
                                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease" }}
                              />
                            </Link>
                          </figure>

                          <div className="card-content" style={{ padding: "20px 15px", display: "flex", flexDirection: "column", alignItems: "center", background: "#fff" }}>
                            <h3 style={{ fontSize: "15px", lineHeight: "22px", fontWeight: 700, marginBottom: "15px", textAlign: "center", textTransform: "uppercase" }}>
                              <Link href={`/${category.slug}/${resolvedParams.subcategory}/${product.slug}`} style={{ color: "#d32f2f", textDecoration: "none" }}>
                                {product.product_name}
                              </Link>
                            </h3>

                            <div className="link-btn">
                              <Link
                                href={`/${category.slug}/${resolvedParams.subcategory}/${product.slug}`}
                                style={{ display: "inline-block", padding: "8px 20px", background: "#003b8e", color: "#fff", fontWeight: 600, borderRadius: "4px", fontSize: "13px", textDecoration: "none" }}
                              >
                                Read more
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {products.length === 0 && (
                      <div className="col-12 text-center" style={{ padding: "50px 0" }}>
                        <h3 style={{ color: "#64748b" }}>No products found in this subcategory.</h3>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Cta />
      </Layout>
    </div>
  );
}
