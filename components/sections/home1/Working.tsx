import Image from "next/image";
export default function Working() {
    return (
        <section className="working-section sec-pad centred">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title mb_60">
                    <span className="sub-title mb_5">How It Works</span>
                    <h2>How We Deliver Quality <br />Hospital Furniture</h2>
                    <p>We make it simple to find, customize, and receive premium hospital furniture tailored to your healthcare facility&apos;s needs.</p>
                </div>
                <div className="inner-container p_relative">
                    <div className="arrow-shape" style={{ backgroundImage: "url(assets/images/shape/shape-18.png)" }}></div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Image src="/assets/images/resource/work1.png" alt="Image" width={250} height={250} priority /></figure>
                                        <span className="count-text">01</span>
                                    </div>
                                    <div className="lower-content">
                                        <h3>Share Your Requirements</h3>
                                        <p>Share your healthcare project :<br /> our experts recommend suitable hospital furniture solutions..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Image src="/assets/images/resource/work2.png" alt="Image" width={250} height={250} priority /></figure>
                                        <span className="count-text">02</span>
                                    </div>
                                    <div className="lower-content">
                                        <h3>Manufacturing & Quality Check</h3>
                                        <p>We manufacture premium hospital furniture with quality materials and strict inspections.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Image src="/assets/images/resource/work3.png" alt="Image" width={250} height={250} priority /></figure>
                                        <span className="count-text">03</span>
                                    </div>
                                    <div className="lower-content">
                                        <h3>Fast Delivery & Installation</h3>
                                        <p>Delivered on time with expert installation and dependable after-sales support for satisfaction.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
