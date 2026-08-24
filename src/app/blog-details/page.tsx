import Layout from "../../../components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import Cta from "../../../components/sections/home2/Cta";
import { categoryMeta } from "../../../data/products";
export default function Departments_Details() {

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
                                            <figure className="image-box"><Image src="/assets/images/news/news-7.jpg" alt="Image" width={856} height={425} priority /></figure>
                                            <div className="lower-content">
                                                <span className="comment-box">2Comment</span>
                                                <h3>Prepare to Speak with Your Eye Specialist.</h3>
                                                <ul className="post-info clearfix">
                                                    <li><i className="icon-59"></i>March 6, 2023</li>
                                                    <li><i className="icon-60"></i><Link href="/blog-details">Author</Link></li>
                                                </ul>
                                                <p>Medical care is the practice of providing diagnosis, treatment, and preventive care for various illnesses, injuries, and diseases. It involves a wide range of healthcare professionals such as doctors, nurses, pharmacists, therapists, and many more, who work together to provide the best possible care for patients. Medical care encompasses various aspects of healthcare, including primary care, specialty care, urgent care, emergency care, and long-term care. Primary care is often the first point of contact for patients seeking medical attention and includes routine check-ups, screenings, and preventive care. Specialty care focuses on specific medical conditions or diseases, such as cardiology, oncology, or neurology. Urgent care provides immediate medical attention for non-life-threatening conditions, while emergency care is reserved for life-threatening situations. Medical care also involves the use of advanced medical technologies and treatments such as surgeries, imaging tests, laboratory tests, and medications. Medical research and development continually improve the effectiveness of treatments and the quality of care provided to patients. In addition to treating illnesses and injuries, medical care also emphasizes the importance of preventive care, such as regular check-ups, vaccinations, and lifestyle modifications, to help patients maintain optimal health and well-being. Overall, medical care plays a crucial role in promoting and maintaining good health and quality of life for individuals, families, and communities. It is essential for people to have access to high-quality medical care, regardless of their socioeconomic status or geographical location.</p>
                                                <blockquote>
                                                    <h2>How Pauloag&apos;s Conversion Optimization Techniques Inform His Design Work</h2>
                                                    <span className="designation">Jane Cooper</span>
                                                </blockquote>
                                                {/* <p>In addition to treating illnesses and injuries, medical care also emphasizes the importance of preventive care, such as regular check-ups, vaccinations, and lifestyle modifications, to help patients maintain optimal health and well-being.teh Overall, medical care plays a crucial role in promoting and maintaining good health and quality of life for individuals, shfamilies, and communities. It is essential for people to have access to high-quality medical care, regardless of their socioeconomic status or geographical location.</p> */}
                                            </div>
                                        </div>
                                    </div>



                                    <div className="comment-form">
                                        <h3>Leave a Reply</h3>
                                        <form method="post" action="/blog-details" className="default-form">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="text" name="name" placeholder="Name" required />
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <input type="email" name="email" placeholder="Email" required />
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <textarea name="message" placeholder="Type Comment Here ..."></textarea>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button type="submit" className="theme-btn btn-two"><span>Send your message</span></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                                <div className="blog-sidebar">
                                    <div className="sidebar-widget about-widget mb_40" style={{ background: "#064acb !important", padding: "30px", borderRadius: "10px", border: "1px solid #e2e8f0" }}>
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
                                        <h3>Trusted Hospital Furniture Manufacturer</h3>
                                        <p>Speak with our expert team and receive professional advice on your next project. No obligation, no cost. Schedule your consultation now!</p>
                                        <Link href="/contact" className="theme-btn btn-two"><span>get a quote</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Cta />
            </Layout>
        </div>
    )
}
