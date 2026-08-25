import Layout from "../../../components/layout/Layout";
import ContactForm from "../../../components/elements/ContactForm";
import Image from "next/image";
import Link from "next/link";
import GoogleMapSection from "../../../components/sections/home1/GoogleMap";

export default function ContactPage() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Contact Us">
                <section className="contact-info-two centred">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }}></div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                                <div className="info-block-two wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"> <Image src="/assets/images/icons/icon-23.svg" alt="Icon" width={50} height={50} priority /></div>
                                        <h3>Office Location</h3>
                                        <p style={{ color: "#2f2727" }}>Kh. No. 25/2, Nangli Sakrawati, Najafgarh, New Delhi-110043</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                                <div className="info-block-two wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><Image src="/assets/images/icons/icon-24.svg" alt="Icon" width={50} height={50} priority /></div>
                                        <h3>Company Email</h3>
                                        <p><Link href="mailto:shivbalajisurgical@gmail.com" style={{ color: "#2f2727 !important", fontSize: "20px" }}>shivbalajisurgical@gmail.com</Link><br /><Link href="mailto:contact@example.com" style={{ color: "#2f2727 !important", fontSize: "20px" }}>.</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 info-block">
                                <div className="info-block-two wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="icon-box"><Image src="/assets/images/icons/icon-25.svg" alt="Icon" width={50} height={50} priority /></div>
                                        <h3>Contact Us</h3>
                                        <p><Link href="tel:919891874277" style={{ color: "#2f2727 !important", fontSize: "18px" }}>+91 98918 74277</Link><br /><Link href="tel:9176782 85286" style={{ color: "#2f2727 !important", fontSize: "18px" }}>+91 76782 85286</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className="contact-section sec-pad"
                    style={{
                        background: "#fff",
                        position: "relative",
                        overflow: "hidden",
                        padding: "100px 0px 150px 0px",
                    }}
                >
                    <div
                        className="pattern-layer"
                        style={{
                            backgroundImage: "url(/assets/images/shape/shape-42.png)",
                            opacity: 0.08,
                        }}
                    ></div>

                    <div className="auto-container">
                        <div className="row align-items-center">

                            {/* Left Side */}
                            <div className="col-lg-6">

                                <span
                                    style={{
                                        display: "inline-block",
                                        padding: "8px 18px",
                                        border: "1px solid #fe5e04",
                                        color: "#fe5e04",
                                        borderRadius: "30px",
                                        fontWeight: 600,
                                        marginBottom: 20,
                                    }}
                                >
                                    Get In Touch
                                </span>

                                <h2
                                    style={{
                                        fontSize: "49px",
                                        fontWeight: 800,
                                        color: "#08245c",
                                        lineHeight: "65px",
                                        marginBottom: 20,
                                    }}
                                >
                                    We&apos;re Here to Help You
                                </h2>

                                <p
                                    style={{
                                        color: "#6b7280",
                                        fontSize: 18,
                                        lineHeight: "32px",
                                        marginBottom: 45,
                                    }}
                                >
                                    Reach out to our team for clear guidance, quick responses,
                                    and personalized support for your concerns.
                                </p>

                                <div className="row">

                                    <div className="col-md-6" style={{
                                        background: "linear-gradient(135deg, #fe5e04 0%, #ea9203 100%)",
                                        borderRadius: "30px",
                                    }}>
                                        <Image
                                            src="/assets/images/contact.png"
                                            alt=""
                                            width={700}
                                            height={700}
                                            style={{
                                                width: "100%",
                                                borderRadius: 30,
                                            }}
                                        />
                                    </div>

                                    <div className="col-md-6 d-flex flex-column justify-content-center">

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: 18,
                                                marginBottom: 30,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 55,
                                                    height: 55,
                                                    borderRadius: 12,
                                                    border: "1px solid #fe5e04",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "#fe5e04",
                                                    fontSize: 22,
                                                }}
                                            >
                                                <i className="fas fa-map-marker-alt"></i>
                                            </div>

                                            <div>
                                                <span
                                                    style={{
                                                        color: "#fe5e04",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    Address
                                                </span>

                                                <h5
                                                    style={{
                                                        marginTop: 6,
                                                        fontWeight: 700,
                                                        color: "#08245c",
                                                        lineHeight: "32px",
                                                    }}
                                                >
                                                    Kh. Number 25/2, Kala Bus Depot, Najafgarh, behind Dichaon, Nangli Sakrawati, New Delhi, Delhi 110043
                                                </h5>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: 18,
                                                marginBottom: 30,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 55,
                                                    height: 55,
                                                    borderRadius: 12,
                                                    border: "1px solid #fe5e04",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "#fe5e04",
                                                    fontSize: 22,
                                                }}
                                            >
                                                <i className="fas fa-envelope"></i>
                                            </div>

                                            <div>
                                                <span
                                                    style={{
                                                        color: "#fe5e04",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    Email
                                                </span>

                                                <h5
                                                    style={{
                                                        marginTop: 5,
                                                        color: "#08245c",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    shivbalajisurgical@gmail.com

                                                </h5>
                                            </div>
                                        </div>

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: 18,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 55,
                                                    height: 55,
                                                    borderRadius: 12,
                                                    border: "1px solid #fe5e04",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: "#fe5e04",
                                                    fontSize: 22,
                                                }}
                                            >
                                                <i className="fas fa-phone-alt"></i>
                                            </div>

                                            <div>
                                                <span
                                                    style={{
                                                        color: "#fe5e04",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    Phone
                                                </span>

                                                <h5
                                                    style={{
                                                        marginTop: 5,
                                                        color: "#08245c",
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    +91 76782 85286
                                                    <br />
                                                    +91 98918 74277
                                                </h5>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="col-lg-6">

                                <div
                                    style={{
                                        background: "#f4f9ff",
                                        padding: 45,
                                        borderRadius: 30,
                                        boxShadow: "0 15px 50px rgba(0,0,0,.08)",
                                    }}
                                >
                                    <ContactForm />
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <GoogleMapSection />
            </Layout>
        </div>
    )
}
