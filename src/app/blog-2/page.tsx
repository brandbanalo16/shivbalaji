import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import ModalVideo from "../../../components/elements/VideoPopup";
import Cta from "../../../components/sections/home2/Cta";
import { categoryMeta } from "../../../data/products";
export default function Departments_Details() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Blog Standard">
                <section className="sidebar-page-container pt_120 pb_120">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                                <div className="blog-standard-content">
                                    <div className="news-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="/blog-details"><Image src="/assets/images/news/news-7.jpg" alt="Image" width={856} height={425} priority /></Link></figure>
                                            <div className="lower-content">
                                                <span className="comment-box">2Comment</span>
                                                <h3><Link href="/blog-details">Prepare to Speak with Your Eye Specialist.</Link></h3>
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-59"></i>March 6, 2023</li>
                                                    <li><i className="icon-60"></i><Link href="/blog-details">Author</Link></li>
                                                </ul>
                                                <p>Medical science is a field that deals with the diagnosis, treatment, and prevention of diseases and injuries. It encompasses a wide range of disciplines, including anatomy, physiology, pharmacology, microbiology, pathology, and many others.</p>
                                                <div className="link">
                                                    <Link href="/blog-details">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box"><Link href="/blog-details"><Image src="/assets/images/news/news-8.jpg" alt="Image" width={856} height={425} priority /></Link></figure>
                                            <div className="lower-content">
                                                <span className="comment-box">1 Comment</span>
                                                <h3><Link href="/blog-details">Prepare to Speak with Your Eye Specialist.</Link></h3>
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-59"></i>March 5, 2023</li>
                                                    <li><i className="icon-60"></i><Link href="/blog-details">Author</Link></li>
                                                </ul>
                                                <p>Medical science is a field that deals with the diagnosis, treatment, and prevention of diseases and injuries. It encompasses a wide range of disciplines, including anatomy, physiology, pharmacology, microbiology, pathology, and many others.</p>
                                                <div className="link">
                                                    <Link href="/blog-details">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="news-block-one">
                                        <div className="inner-box">
                                            <figure className="image-box">
                                                <Image src="/assets/images/news/news-9.jpg" alt="Image" width={856} height={425} priority />
                                                <ModalVideo />
                                            </figure>
                                            <div className="lower-content">
                                                <span className="comment-box">4 Comment</span>
                                                <h3><Link href="/blog-details">Prepare to Speak with Your Eye Specialist.</Link></h3>
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-59"></i>March 4, 2023</li>
                                                    <li><i className="icon-60"></i><Link href="/blog-details">Author</Link></li>
                                                </ul>
                                                <p>Medical science is a field that deals with the diagnosis, treatment, and prevention of diseases and injuries. It encompasses a wide range of disciplines, including anatomy, physiology, pharmacology, microbiology, pathology, and many others.</p>
                                                <div className="link">
                                                    <Link href="/blog-details">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pagination-wrapper centred">
                                        <ul className="pagination clearfix">
                                            <li><Link href="/blog-2"><i className="icon-21"></i></Link></li>
                                            <li><Link href="/blog-2" className="current">01</Link></li>
                                            <li><Link href="/blog-2">02</Link></li>
                                            <li className="dotted"><Image src="/assets/images/icons/icon-21.svg" alt="Image" width={23} height={5} priority /></li>
                                            <li><Link href="/blog-2"><i className="icon-22"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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
                                    <div className="sidebar-widget post-widget mb_40">
                                        <div className="widget-title">
                                            <h3>Latest News</h3>
                                        </div>
                                        <div className="post-inner">
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><Image src="/assets/images/news/post-1.jpg" alt="Image" width={100} height={101} priority /></Link></figure>
                                                <h3><Link href="/blog-details">Prepare to Speak with Your Eye Specialist.</Link></h3>
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-59"></i>March 6, 2023</li>
                                                    <li><i className="icon-60"></i><Link href="/blog-details">Author</Link></li>
                                                </ul>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><Image src="/assets/images/news/post-2.jpg" alt="Image" width={100} height={101} priority /></Link></figure>
                                                <h3><Link href="/blog-details">From Diagnosis to Cure: The Role.</Link></h3>
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-59"></i>March 5, 2023</li>
                                                    <li><i className="icon-60"></i><Link href="/blog-details">Author</Link></li>
                                                </ul>
                                            </div>
                                            <div className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><Image src="/assets/images/news/post-3.jpg" alt="Image" width={100} height={101} priority /></Link></figure>
                                                <h3><Link href="/blog-details">Empowering Patients in through</Link></h3>
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-59"></i>March 4, 2023</li>
                                                    <li><i className="icon-60"></i><Link href="/blog-details">Author</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="consulting-widget">
                                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/resource/sidebar-1.jpg)" }}></div>
                                        <h3>Get Free <br />Consultations Today!</h3>
                                        <p>Speak with our expert team and receive professional advice on your next project. No obligation, no cost. Schedule your consultation now!</p>
                                        <Link href="/contact" className="theme-btn btn-two"><span>get a quote</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Cta/>
            </Layout>
        </div>
    )
}
