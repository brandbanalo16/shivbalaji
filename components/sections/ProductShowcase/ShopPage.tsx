import Link from "next/link";
import Image from "next/image";
import Layout from "../..//layout/Layout";
import Cta from "../home2/Cta";
import { departments } from "../../../data/products";

const PER_PAGE = 8;

export default async function ShopPage({
  searchParams,
}: {
  searchParams?: Promise<{ category?: string; page?: string }> | { category?: string; page?: string };
}) {
  const params = (await searchParams) ?? {};
  const selectedCategory = params.category || "all";
  const currentPage = Number(params.page) || 1;

  const allProducts = departments.flatMap((department) =>
    department.products.map((product) => ({
      ...product,
      departmentName: department.name,
      departmentSlug: department.slug,
    })),
  );

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter(
          (product) =>
            product.departmentSlug === selectedCategory ||
            product.category.toLowerCase().replaceAll(" ", "-") ===
              selectedCategory,
        );

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + PER_PAGE);

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Product Showcase">
        <section className="sidebar-page-container pt_120 pb_120">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 content-side">
                <div className="blog-grid-content">
                  <div className="mb_40 text-center">
                    <div className="d-flex flex-wrap justify-content-center gap-2">
                      <Link
                        href="/products?category=all&page=1"
                        className={`theme-btn btn-two ${selectedCategory === "all" ? "active" : ""}`}
                        style={{
                          minWidth: "120px",
                          opacity: selectedCategory === "all" ? 1 : 0.85,
                        }}
                      >
                        All Products
                      </Link>

                      {departments.map((department) => (
                        <Link
                          key={department.slug}
                          href={`/products?category=${department.slug}&page=1`}
                          className={`theme-btn btn-two ${selectedCategory === department.slug ? "active" : ""}`}
                          style={{
                            minWidth: "140px",
                            opacity: selectedCategory === department.slug ? 1 : 0.85,
                          }}
                        >
                          {department.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="row clearfix">
                    {paginatedProducts.map((product) => (
                      <div
                        className="col-xl-3 col-lg-4 col-md-6 col-sm-12 news-block"
                        key={product.slug}
                      >
                        <div className="news-block-one">
                          <div className="inner-box">
                            <figure className="image-box">
                              <Link href={`/products/${product.slug}`}>
                                <Image
                                  src={product.image}
                                  alt={product.product_name}
                                  width={416}
                                  height={287}
                                />
                              </Link>
                            </figure>

                            <div className="lower-content">
                              <span className="comment-box">{product.departmentName}</span>

                              <h3>
                                <Link href={`/products/${product.slug}`}>
                                  {product.product_name}
                                </Link>
                              </h3>

                              <p>
                                {product.short_description.length > 120
                                  ? `${product.short_description.substring(0, 120)}...`
                                  : product.short_description}
                              </p>

                              <div className="link">
                                <Link href={`/products/${product.slug}`}>
                                  Read More
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {paginatedProducts.length > 0 && (
                    <div className="pagination-wrapper centred mt_40">
                      <ul className="pagination clearfix">
                        {safePage > 1 && (
                          <li>
                            <Link
                              href={`/products?category=${selectedCategory}&page=${safePage - 1}`}
                            >
                              <i className="icon-21"></i>
                            </Link>
                          </li>
                        )}

                        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                          (page) => (
                            <li key={page}>
                              <Link
                                href={`/products?category=${selectedCategory}&page=${page}`}
                                className={safePage === page ? "current" : ""}
                              >
                                {page}
                              </Link>
                            </li>
                          ),
                        )}

                        {safePage < totalPages && (
                          <li>
                            <Link
                              href={`/products?category=${selectedCategory}&page=${safePage + 1}`}
                            >
                              <i className="icon-22"></i>
                            </Link>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
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
