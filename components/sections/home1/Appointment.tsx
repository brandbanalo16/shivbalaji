import Image from "next/image";
export default function Appointment() {
  return (
        <section className="appointment-section">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}></div>
            <figure className="image-layer"><Image src="/assets/images/resource/women.png" alt="Image" width={488} height={591} priority /></figure>
            <div className="outer-container clearfix">
                <div className="left-column">
                  <div className="bg-layer" style={{ backgroundImage: "url(/assets/images/background/appointment-bg.png)" }}></div>
                    <div className="content-box">
                        <div className="icon-box"><Image src="/assets/images/icons/icon-4.svg" alt="Icon" width={88} height={88} priority /></div>
                      <h3>Looking for Premium Hospital Furniture? Call Us Today!</h3>
                      <span><a href="tel:917678285286">Call: +91 76782 85286</a></span>
                      <span><a href="tel:919891874277">Call: +91 98918 74277</a></span>
                    </div>
                </div>
                <div className="right-column">
                    <div className="form-inner">
                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
                      <h3>Start Your Inquiry</h3>
                      <form action="index.html" method="post">
                          <div className="row">

                              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                  <label className="mb-2 fw-bold">
                                      Name <span className="text-danger">*</span>
                                  </label>
                                  <input
                                      type="text"
                                      name="name"
                                      className="form-control"
                                      placeholder="Enter Your Full Name"
                                      required
                                  />
                              </div>

                              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                  <label className="mb-2 fw-bold">
                                      Phone No. <span className="text-danger">*</span>
                                  </label>
                                  <input
                                      type="tel"
                                      name="phone"
                                      className="form-control"
                                      placeholder="Enter Your Phone No."
                                      required
                                  />
                              </div>

                              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                  <label className="mb-2 fw-bold">
                                      Email <span className="text-danger">*</span>
                                  </label>
                                  <input
                                      type="email"
                                      name="email"
                                      className="form-control"
                                      placeholder="Enter Your Email Address"
                                      required
                                  />
                              </div>

                              <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                                  <label className="mb-2 fw-bold">
                                      City <span className="text-danger">*</span>
                                  </label>
                                  <input
                                      type="text"
                                      name="city"
                                      className="form-control"
                                      placeholder="Enter Your City"
                                      required
                                  />
                              </div>

                              <div className="col-12 mb-3">
                                  <label className="mb-2 fw-bold">
                                      Message <span className="text-danger">*</span>
                                  </label>
                                  <textarea
                                      name="message"
                                      rows={5}
                                      className="form-control"
                                      placeholder="Tell Us About Your Requirements"
                                      required
                                  ></textarea>
                              </div>

                              {/* reCAPTCHA */}
                              <div className="col-12 mb-3">
                                  <div
                                      className="g-recaptcha"
                                      data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                  ></div>
                              </div>

                              <div className="col-12">
                                  <button
                                      type="submit"
                                      className="theme-btn btn-two "
                                  >
                                      <span>Send Message</span>
                                  </button>
                              </div>

                          </div>
                      </form>
                    </div>
                </div>
            </div>
        </section>
  );
}
