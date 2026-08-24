import Link from "next/link";

export default function GoogleMapSection() {
    return (
        <section className="google-map-section">
            <div className="map-inner">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56036.90191969373!2d77.0374685939866!3d28.62057856336221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sA-294%2C%20Second%20Floor%2C%20Hastal%2C%20Uttam%20Nagar%2C%20New%20Delhi%20-%20110059%2C%20India!5e0!3m2!1sen!2sin!4v1787557529799!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Our Location - A-294, Second Floor, Hastal, Uttam Nagar, New Delhi"
                />
            </div>

            {/* <div className="content-box">
                <div className="inner-box">
                    <h3>Get In Touch With Us</h3>

                    <div className="content-inner" style={{ background: "white" }}>
                       

                        <h4>Contact Info</h4>

                        <ul className="info-list clearfix">
                            <li>
                                <i className="icon-46"></i>
                                Email:{" "}
                                <Link href="mailto:shivbalajisurgical@gmail.com" style={{ color: "black" }}>
                                    shivbalajisurgical@gmail.com
                                </Link>
                            </li>

                            <li>
                                <i className="icon-35"></i>
                                Call:{" "}
                                <Link href="tel:+917678285286" style={{ color: "black" }}>
                                    +91 76782 85286
                                </Link> | &nbsp;
                                <Link href="tel:+919891874277" style={{ color: "black" }}>
                                    +91 98918 74277
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}
        </section>
    );
}