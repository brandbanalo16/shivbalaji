import type { Metadata } from "next";
import Layout from "../../components/layout/Layout";
import About from "../../components/sections/home1/About";
import Appointment from "../../components/sections/home1/Appointment";
import Banner from "../../components/sections/home1/Banner";
import Chooseus from "../../components/sections/home1/Chooseus";
import News from "../../components/sections/home1/News";
import Portfolio from "../../components/sections/home1/Portfolio";
import Service from "../../components/sections/home1/Service";
import ProductSlider from "../../components/sections/home1/ProductSlider";
import Team from "../../components/sections/home1/Team";
import Working from "../../components/sections/home1/Working";

export const metadata: Metadata = {
  title: "Shiv Balaji Surgical | ICU Bed, Fowler Bed & Hospital Bed Manufacturer in Delhi",
  description: "Shiv Balaji Surgical is a leading Hospital Bed Manufacturer in India and Hospital Furniture Manufacturer in Delhi. We supply ISO Certified ICU Beds, Fowler Beds, Pediatric Beds, Medical Trolleys, Examination Couches, and complete Hospital Furniture to hospitals, clinics, and nursing homes across India.",
  keywords: "Hospital Bed Manufacturer in India, Hospital Bed Manufacturer in Delhi, ICU Bed Manufacturer, ICU Bed Manufacturer in Delhi, Fowler Bed Manufacturer, Semi Fowler Bed Manufacturer, Hospital Furniture Manufacturer in Delhi, Medical Furniture Manufacturer India, Pediatric Bed Manufacturer, Hospital Bed Manufacturer Najafgarh, Hospital Bed Manufacturer New Delhi, ISO Certified Hospital Bed Manufacturer",
  openGraph: {
    title: "Shiv Balaji Surgical | Hospital Bed & ICU Bed Manufacturer in Delhi",
    description: "Buy ISO Certified Hospital Beds, ICU Beds, Fowler Beds, Medical Trolleys & Hospital Furniture from Shiv Balaji Surgical — leading Hospital Furniture Manufacturer in Delhi, India.",
    url: "https://www.shivbalajisurgical.com",
    siteName: "Shiv Balaji Surgical",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shiv Balaji Surgical",
  url: "https://www.shivbalajisurgical.com",
  logo: "https://www.shivbalajisurgical.com/assets/images/logo.png",
  description: "Leading Hospital Furniture Manufacturer in Delhi, India. Specialized in Hospital Beds, ICU Beds, Fowler Beds, Medical Trolleys, Examination Couches and complete Hospital Furniture solutions.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kh. No. 25/2, Nangli Sakrawati",
    addressLocality: "Najafgarh",
    addressRegion: "New Delhi",
    postalCode: "110043",
    addressCountry: "IN",
  },
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+91-8287153753", contactType: "sales", areaServed: "IN" },
    { "@type": "ContactPoint", telephone: "+91-7678285286", contactType: "customer service", areaServed: "IN" },
  ],
  sameAs: ["https://www.shivbalajisurgical.com"],
  keywords: "Hospital Bed Manufacturer in India, Hospital Bed Manufacturer in Delhi, ICU Bed Manufacturer, Fowler Bed Manufacturer, Hospital Furniture Manufacturer in Delhi",
};

export default function Home() {
    return (
        <div className="boxed_wrapper">
            {/* Organization JSON-LD */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
            />
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <About />
                <Service />
                <ProductSlider />
                <Chooseus />
                <Appointment />
                <Working />
                <Team />
                <Portfolio />
                <News />
            </Layout>
        </div>
    )
}
