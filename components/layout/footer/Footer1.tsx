import Image from "next/image";
import Link from "next/link";
import { footerCompanyLinks, productCategories, footerQuickLinks, contactInfo } from "../../../data/navData";

export default function Footer1() {
    return (
        <>
            <footer className="main-footer">
                <div className="widget-section p_relative">
                    <div className="pattern-layer">
                        <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-21.png)" }}></div>
                        <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-22.png)" }}></div>
                        <div className="pattern-3" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
                        <div className="pattern-4" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
                    </div>
                    <div className="auto-container">
                        <div className="row clearfix">
                            {/* Column 1: About */}
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget about-widget">
                                    <div className="widget-title">
                                        <figure className="logo-box">
                                            <Link href="/">
                                                <Image src="/assets/images/logo.png" alt="Footer Logo" width={250} height={40} priority />
                                            </Link>
                                        </figure>
                                    </div>
                                    <div className="widget-content">
                                        <p>Shiv Balaji Surgical manufactures premium hospital furniture, beds, trolleys, and medical equipment with trusted quality.</p>
                                        <ul className="social-links clearfix">
                                            <li><Link href={contactInfo.social.facebook}><i className="fab fa-facebook-f"></i></Link></li>
                                            <li><Link href={contactInfo.social.instagram}><i className="fab fa-instagram"></i></Link></li>
                                            <li><Link href={contactInfo.social.youtube}><i className="fab fa-youtube"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 2: Quick Links */}
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget ml_30">
                                    <div className="widget-title">
                                        <h3
                                            style={{
                                                background: "linear-gradient(135deg, #fe5e04 0%, #ea9203 100%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text",
                                                fontSize: "28px",
                                                display: "inline-block",
                                            }}
                                        >
                                            Quick Links
                                        </h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            {footerQuickLinks.map((link, idx) => (
                                                <li key={idx}><Link href={link.href}>{link.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 3: Our Products */}
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h3
                                            style={{
                                                background: "linear-gradient(135deg, #fe5e04 0%, #ea9203 100%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text",
                                                fontSize: "28px",
                                                display: "inline-block",
                                            }}
                                        >
                                            Our Products Range
                                        </h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="links-list clearfix">
                                            {productCategories.map((cat, idx) => (
                                                <li key={idx}><Link href={`/${cat.slug}`}>{cat.title}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Column 4: Contact Us */}
                            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                                <div className="footer-widget contact-widget">
                                    <div className="widget-title">
                                        <h3
                                            style={{
                                                background: "linear-gradient(135deg, #fe5e04 0%, #ea9203 100%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                                backgroundClip: "text",
                                                fontSize: "28px",
                                                display: "inline-block",
                                            }}
                                        >
                                            Contact Us
                                        </h3>
                                    </div>
                                    <div className="widget-content">
                                        <ul className="info-list clearfix">
                                            <li>
                                                <i className="fas fa-envelope"> </i>
                                                <Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>
                                            </li>
                                            <li>
                                                <i className="fas fa-phone-alt"> </i>
                                                <Link href={`tel:${contactInfo.phones[0].replace(/\s+/g, '')}`}>
                                                    {contactInfo.phones[0]} | {contactInfo.phones[1]}
                                                </Link>
                                            </li>
                                            <li>
                                                <i className="fas fa-map-marker-alt"> </i>
                                                {contactInfo.regdAddress}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom centred">
                    <div className="auto-container">
                        <div className="copyright">
                            <p style={{ color: 'white', textDecoration: 'none' }}>
                                Copyright &copy; {new Date().getFullYear()} Shiv Balaji Surgical All Right Reserved | Managed By <Link href="https://brandbanalo.com/">Brandbanalo</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
