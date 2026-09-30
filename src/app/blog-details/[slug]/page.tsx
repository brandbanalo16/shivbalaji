import type { Metadata } from "next";
import Layout from "../../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../../components/sections/home2/Cta";
import CommentForm from "../../../../components/elements/CommentForm";

import { blogs } from "../../blog/blogs";
import { categoryMeta } from "../../../../data/products";
import { notFound, permanentRedirect } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return blogs.flatMap((blog) =>
    [blog.slug, ...blog.legacySlugs].map((slug) => ({ slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find(
    (item) => item.slug === slug || item.legacySlugs.includes(slug),
  );

  if (!blog) {
    return { title: "Blog post not found", robots: { index: false } };
  }

  const canonicalUrl = `/blog-details/${blog.slug}`;

  return {
    title: blog.seoTitle,
    description: blog.description,
    keywords: blog.focusKeywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: blog.seoTitle,
      description: blog.description,
      url: canonicalUrl,
      type: "article",
      images: [{ url: blog.image, alt: blog.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seoTitle,
      description: blog.description,
      images: [blog.image],
    },
  };
}

export default async function BlogDetails({ params }: Props) {
  const { slug } = await params;
  const blog = blogs.find(
    (item) => item.slug === slug || item.legacySlugs.includes(slug),
  );

  if (!blog) {
    notFound();
  }

  if (blog.slug !== slug) {
    permanentRedirect(`/blog-details/${blog.slug}`);
  }

  const focusKeywordPattern = new RegExp(
    blog.focusKeyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    "i",
  );
  const isHtmlContent = blog.content.trimStart().startsWith("<");
  const articleHtml = isHtmlContent
    ? blog.content.replace(focusKeywordPattern, (match) => `<strong>${match}</strong>`)
    : null;
  const focusKeywordIndex = blog.content
    .toLowerCase()
    .indexOf(blog.focusKeyword.toLowerCase());

  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog Details">
        <section className="sidebar-page-container pt_120 pb_120">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                <div className="blog-details-content">
                  <div className="news-block-one">
                    <div className="inner-box">
                      {/* Dynamic Feature Image */}

                      <figure className="image-box">
                        <Image
                          src={blog.image}
                          alt={blog.title}
                          width={856}
                          height={425}
                          priority
                        />
                      </figure>

                      <div className="lower-content">
                        <span className="comment-box">
                          {blog.category} | Hospital Furniture Manufacturer
                        </span>

                        {/* Dynamic Title */}

                        <h3>{blog.title}</h3>

                        {/* Dynamic Date */}

                        <ul className="post-info clearfix">
                          <li>
                            <i className="icon-59"></i>

                            {blog.date}
                          </li>

                          <li>
                            <i className="icon-60"></i>

                            <Link href="#">{blog.author}</Link>
                          </li>
                        </ul>

                        {/* Dynamic Blog Content */}

                        <div className="blog-article-content">
                          {articleHtml !== null ? (
                            <div
                              dangerouslySetInnerHTML={{ __html: articleHtml }}
                            />
                          ) : (
                            <p>
                              {blog.content.slice(0, focusKeywordIndex)}
                              {focusKeywordIndex >= 0 ? (
                                <strong>
                                  {blog.content.slice(
                                    focusKeywordIndex,
                                    focusKeywordIndex + blog.focusKeyword.length,
                                  )}
                                </strong>
                              ) : null}
                              {focusKeywordIndex >= 0
                                ? blog.content.slice(
                                    focusKeywordIndex + blog.focusKeyword.length,
                                  )
                                : blog.content}
                            </p>
                          )}
                        </div>

                        <blockquote>
                          <h2 style={{ color: "#fe5e04" }}>
                            Trusted Hospital Furniture for Better Care
                          </h2>

                          <span className="designation">{blog.author}</span>
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  {/* Comment Form SAME */}

                  <CommentForm formName={"Blog Reply - " + blog.title} />
                </div>
              </div>

              {/* Sidebar keep your existing code here */}

              <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                <div className="blog-sidebar">
                  <div className="sidebar-widget about-widget mb_40" style={{ background: "#f8fafc", padding: "30px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
                    <div className="widget-title">
                      <h3>Company Intro</h3>
                    </div>
                    <div className="widget-content">
                      <p style={{ marginBottom: "15px", color: "#475569" }}>Shiv Balaji Surgical manufactures premium hospital furniture, beds, trolleys, and medical equipment with trusted quality and innovative designs.</p>
                      <Link href="/about" className="theme-btn btn-two"><span>Read More</span></Link>
                    </div>
                  </div>
                  <div className="sidebar-widget category-widget mb_40">
                    <div className="widget-title">
                      <h3>Category</h3>
                    </div>
                    <div className="widget-content">
                      <ul className="category-list clearfix">
                        {categoryMeta.map((cat) => (
                          <li key={cat.slug}><Link href={`/${cat.slug}`}>{cat.name}</Link></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="blog-sidebar">
                    <div className="sidebar-widget post-widget mb_40">
                      <div className="widget-title">
                        <h3>Latest News</h3>
                      </div>

                      <div className="post-inner">
                        {blogs.slice(0, 3).map((item) => (
                          <div className="post" key={item.id}>
                            <figure className="post-thumb">
                              <Link href={`/blog-details/${item.slug}`}>
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  width={100}
                                  height={101}
                                />
                              </Link>
                            </figure>

                            <h3>
                              <Link href={`/blog-details/${item.slug}`}>
                                {item.title}
                              </Link>
                            </h3>

                            <ul className="post-info clearfix">
                              <li>
                                <i className="icon-59"></i>

                                {item.date}
                              </li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="consulting-widget">
                    <div
                      className="bg-layer"
                      style={{
                        backgroundImage:
                          "url(assets/images/resource/sidebar-1.jpg)",
                      }}
                    ></div>
                    <h3>
                      Get Free <br />
                      Consultations Today!
                    </h3>
                    <p>
                      Speak with our expert team and receive professional advice
                      on your next project. No obligation, no cost. Schedule
                      your consultation now!
                    </p>
                    <Link href="/contact" className="theme-btn btn-two">
                      <span>get a quote</span>
                    </Link>
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
