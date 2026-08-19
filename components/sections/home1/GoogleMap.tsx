import Link from "next/link";

export default function GoogleMapSection() {
    return (
        <section className="google-map-section">
            <div className="map-inner">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>

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