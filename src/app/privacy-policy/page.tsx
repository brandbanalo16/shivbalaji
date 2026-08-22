import Layout from "../../../components/layout/Layout";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Shiv Balaji Surgical",
  description: "Privacy Policy of Shiv Balaji Surgical. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <Layout breadcrumbTitle="Privacy Policy">
      <section className="privacy-policy-section pt_120 pb_120">
        <div className="auto-container">
          <div className="content-box shadow-sm p-4 p-lg-5 bg-white rounded-3">
            <div className="sec-title mb_30">
              <span className="sub-title mb_5">Legal Information</span>
              <h2>Privacy Policy</h2>
            </div>
            
            <div className="text-content" style={{ color: '#555', fontSize: '16px' }}>
              <p className="mb-4">
                <strong>Last Updated: August 2026</strong>
              </p>

              <h4 className="mt-5 mb-3 fw-bold" style={{ color: '#1a1a1a' }}>1. Introduction</h4>
              <p>
                Welcome to Shiv Balaji Surgical. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regard to your personal information, please <Link href="/contact" className="text-primary fw-bold">contact us</Link>.
              </p>

              <h4 className="mt-5 mb-3 fw-bold" style={{ color: '#1a1a1a' }}>2. Information We Collect</h4>
              <p>
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website, or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make, and the products and features you use.
              </p>
              <ul className="list-unstyled mt-3 mb-4 ps-3" style={{ lineHeight: '2', listStyleType: 'disc' }}>
                <li><strong>Personal Data:</strong> Names, phone numbers, email addresses, mailing addresses, company names, and similar information.</li>
                <li><strong>Enquiry Data:</strong> Specific product requirements and medical furniture needs submitted through our quote forms.</li>
              </ul>

              <h4 className="mt-5 mb-3 fw-bold" style={{ color: '#1a1a1a' }}>3. How We Use Your Information</h4>
              <p>
                We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul className="list-unstyled mt-3 mb-4 ps-3" style={{ lineHeight: '2', listStyleType: 'disc' }}>
                <li>To facilitate the delivery of product quotations and catalogs.</li>
                <li>To respond to user inquiries and offer support.</li>
                <li>To send administrative information to you.</li>
                <li>To protect our Services and maintain security.</li>
              </ul>

              <h4 className="mt-5 mb-3 fw-bold" style={{ color: '#1a1a1a' }}>4. Will Your Information Be Shared With Anyone?</h4>
              <p>
                We only share and disclose your information in the following situations:
              </p>
              <ul className="list-unstyled mt-3 mb-4 ps-3" style={{ lineHeight: '2', listStyleType: 'disc' }}>
                <li><strong>Compliance with Laws:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              </ul>

              <h4 className="mt-5 mb-3 fw-bold" style={{ color: '#1a1a1a' }}>5. Contact Us</h4>
              <p>
                If you have questions or comments about this notice, you may email us at <strong>brandbanalo25@gmail.com</strong> or by post to our office address.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
