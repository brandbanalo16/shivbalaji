"use client";

import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home2/Cta";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

import { latestBlogs } from "./blogs";

function BlogGrid() {
  const searchParams = useSearchParams();
  const pageParam = searchParams.get("page");
  const currentPage = Number(pageParam) || 1;

  const blogsPerPage = 20;
  const totalBlogs = latestBlogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const blogs = latestBlogs.slice(startIndex, endIndex);

  return (
    <div className="blog-grid-content">
      <div className="row clearfix">
        {blogs.map((blog) => (
          <div
            className="col-lg-4 col-md-6 col-sm-12 news-block"
            key={blog.id}
          >
            <div className="news-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <Link href={`/blog-details/${blog.slug}`}>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={416}
                      height={287}
                    />
                  </Link>
                </figure>

                <div className="lower-content">
                  <span className="comment-box">
                    {blog.category} category
                  </span>

                  <h3>
                    <Link href={`/blog-details/${blog.slug}`}>
                      {blog.title.length > 49
                        ? blog.title.substring(0, 49) + "..."
                        : blog.title}
                    </Link>
                  </h3>

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

                  <p>
                    {blog.description.length > 120
                      ? blog.description.substring(0, 120) + "..."
                      : blog.description}
                  </p>

                  <div className="link">
                    <Link href={`/blog-details/${blog.slug}`}>
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-wrapper centred">
        <ul className="pagination clearfix">
          {currentPage > 1 && (
            <li>
              <Link href={`/blog?page=${currentPage - 1}`}>
                <i className="icon-21"></i>
              </Link>
            </li>
          )}

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <li key={page}>
                <Link
                  href={`/blog?page=${page}`}
                  className={currentPage === page ? "current" : ""}
                >
                  {page}
                </Link>
              </li>
            ),
          )}

          {currentPage < totalPages && (
            <li>
              <Link href={`/blog?page=${currentPage + 1}`}>
                <i className="icon-22"></i>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <div className="boxed_wrapper">
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog Grid">
        <section className="sidebar-page-container pt_120 pb_120">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-12 content-side">
                <Suspense fallback={<div>Loading blogs...</div>}>
                  <BlogGrid />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
        <Cta />
      </Layout>
    </div>
  );
}
