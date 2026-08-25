

export default function GoogleMapSection() {
    return (
        <section className="google-map-section">
            <div className="map-inner">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0874970984805!2d76.99552627928156!3d28.627139621607466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0fb4e5c95ff5%3A0x7f91f57df94c0424!2sSHIV%20BALAJI%20SURGICAL!5e0!3m2!1sen!2sin!4v1787651006426!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Shiv Balaji Surgical Location"
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