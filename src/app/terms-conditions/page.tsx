import Layout from "../../../components/layout/Layout";
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Shiv Balaji Surgical",
  description: "Terms & Conditions of Shiv Balaji Surgical. Read our rules, guidelines, and terms of service.",
};

export default function TermsConditions() {
  return (
    <Layout breadcrumbTitle="Terms & Conditions">
      <section className="terms-conditions-section pt_120 pb_120">
        <div className="auto-container">
          <div className="content-box shadow-sm p-4 p-lg-5 bg-white rounded-3">
            <div className="sec-title mb_30">
              <span className="sub-title mb_5">Legal Information</span>
              <h2>Terms & Conditions</h2>
            </div>
            
            <div className="text-content" style={{ color: '#555', fontSize: '16px' }}>
              <p className="mb-4">
                <strong>Last Updated: August 2026</strong>
              </p>

              <h4 className="mt-5 mb-3 fw-bold" style={{ color: '#1a1a1a' }}>1. Agreement to Terms</h4>
              <p>
                These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and Shiv Balaji Surgical, concerning your access to and use of the website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto. You agree that by accessing the site, you have read, understood, and agree to be bound by all of these Terms and Conditions.
              </p>

              <h4 className="mt-5 mb-3 fw-bold" style={{ color: '#1a1a1a' }}>2. Intellectual Property Rights</h4>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us. The Content and the Marks are provided on the Site &quot;AS IS&quot; for your information and personal use only.
              </p>

              <h4 className="mt-5 mb-3 fw-bold" style={{ color: '#1a1a1a' }}>3. Products & Pricing</h4>
              <p>
                We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products. All products are subject to availability, and we cannot guarantee that items will be in stock.
              </p>
              <p>
                We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.
              </p>

              <h4 className="mt-5 mb-3 fw-bold" style={{ color: '#1a1a1a' }}>4. Quotations and Inquiries</h4>
              <p>
                Submitting a quote request or inquiry through our website does not constitute a legally binding purchase agreement. Our sales representatives will review your requirements and provide an official quotation outlining the cost, lead time, and shipping details. An order is only confirmed once you have accepted our official quotation and fulfilled the payment terms specified within.
              </p>

              <h4 className="mt-5 mb-3 fw-bold" style={{ color: '#1a1a1a' }}>5. Limitation of Liability</h4>
              <p>
                In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.
              </p>

              <h4 className="mt-5 mb-3 fw-bold" style={{ color: '#1a1a1a' }}>6. Contact Us</h4>
              <p>
                In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please <Link href="/contact" className="text-primary fw-bold">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
