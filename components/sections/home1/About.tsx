"use client";
import Image from "next/image";
import Contact_Info from "./Contact_Info";

export default function About() {
    return (
        <section className="about-section p_relative">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
            <div className="wave-layer">
                <div className="wave-1">
                    <svg width="318" height="131" viewBox="0 0 318 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 69.0468L74.0685 69.0468L98.2276 40.7213L125.459 121L164.762 10L191.919 105.268L208.417 57.4162L233.167 87.0291L249.076 69.0468L308 69.0468" stroke="#BDBDBD" />
                    </svg>
                </div>
                <div className="wave-2">
                    <svg width="318" height="131" viewBox="0 0 318 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 69.0468L74.0685 69.0468L98.2276 40.7213L125.459 121L164.762 10L191.919 105.268L208.417 57.4162L233.167 87.0291L249.076 69.0468L308 69.0468" stroke="#BDBDBD" />
                    </svg>
                </div>
            </div>
            <div className="auto-container">
                <div className="upper-content about-upper-content">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-block-one">
                                <div className="content-box">
                                    <div className="sec-title mb_15">
                                        <span className="sub-title mb_5">About Shiv Balaji Surgical</span>
                                        <h2 style={{ color: "linear-gradient(135deg, #033695 0%, #074bc9 100%)" }}>Trusted Hospital Beds & Surgical Equipment Manufacturer</h2>
                                    </div>
                                    <div className="text-box mb_30 pb_30">
                                        <p style={{ color: "black", marginBottom: "15px" }}>Shiv Balaji Surgical, established in 2019, is widely recognized as a premier <strong>Hospital Furniture Manufacturer in Delhi</strong>. We manufacture premium hospital furniture and surgical equipment, delivering ISO-certified quality, durability, and innovation. As a trusted <strong>Hospital Furniture Manufacturer in Delhi</strong>, we ensure all our products meet strict medical standards.</p>


                                    </div>
                                    <div className="inner-box">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="specialities-box">
                                                    <h4>Our Specialities</h4>
                                                    <ul className="list-style-one clearfix">
                                                        <li>Hospital Furniture Manufacturer in Delhi</li>
                                                        <li>Hospital Bed Manufacturer in India</li>
                                                        <li>ISO Certified Products</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                <div className="specialities-box">
                                                    <h4>Our Vision</h4>
                                                    <ul className="list-style-one clearfix">
                                                        <li>Delivering Lasting Quality</li>
                                                        <li>Innovation Through Excellence</li>
                                                        <li>Customer First Always</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-block-one">
                                <div className="image-box">
                                    <div className="shape">
                                        <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div>
                                        <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}></div>
                                    </div>
                                    <figure className="image"><Image src="/assets/images/resource/about.png" alt="About Image" width={523} height={399} priority /></figure>
                                    <div className="text-box">
                                        <div className="image-shape" style={{ backgroundImage: "url(assets/images/shape/shape-7.png)" }}></div>
                                        <h2>7+</h2>
                                        <span>Years of Experience </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower-content">
                    <Contact_Info embedded />
                </div>
                {/* <div className="appointment-box">
                    <h4>Book an Appointment</h4>
                    <div className="form-inner">
                        <form method="post" action="index.html" className="clearfix">
                            <div className="form-group">
                                <div className="icon-box"><i className="icon-15"></i></div>
                                <span>Chose services</span>
                                <div className="select-box">
                                    <select className="selectmenu">
                                        <option>Heart Health</option>
                                        <option>Cardiology</option>
                                        <option>Dental</option>
                                        <option>Gastroenterology</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="icon-box"><i className="icon-16"></i></div>
                                <span>Date</span>
                                <input
                                type="date"
                                id="date"
                                placeholder="MM / DD / YYYY"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <div className="icon-box"><i className="icon-17"></i></div>
                                <span>Phone</span>
                                <input type="text" name="phone" placeholder="+ 1 (XXX) XXX XXX"/>
                            </div>
                            <div className="message-btn">
                                <button type="submit" className="theme-btn btn-one"><span>Book Now</span></button>
                            </div>
                        </form>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
