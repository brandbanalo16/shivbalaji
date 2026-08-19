import Image from "next/image";
import Link from "next/link";
export default function Cta() {
  return (
        <section className="cta-section">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="content-box">
                        <h2>Need Premium Hospital Equipment? Contact Us Today.!</h2>
                        <div className="support-box">
                            <div className="icon-box"><Image src="/assets/images/icons/icon-8.svg" alt="Image" width={34} height={34} priority /></div>
                            <span>Call: <Link href="+917678285286">+91 76782 85286</Link></span>
                        </div>
                    </div>
                    <figure className="image-layer"><Image src="/assets/images/contact.png" alt="Image" width={576} height={303} priority style={{ marginBottom: "-50px" }}/></figure>
                </div>
            </div>
        </section>
  );
}
