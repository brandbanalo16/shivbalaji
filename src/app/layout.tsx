import type { Metadata } from "next";
import { Roboto, Caveat } from "next/font/google";
// import ToggleBodyClass from "../../components/elements/Togglebtn";
// import SwitcherMenu from "../../components/elements/ColorStyle";
import DownloadProductList from "../../components/elements/DownloadProductList";
import ContactRight from "../../components/elements/ContactRight";

import "../../public/assets/css/bootstrap.css";
import "../../public/assets/css/rtl.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/DownloadProductList.css";
import "../../public/assets/css/ContactRight.css";

import "../../components/layout/header/header.css";

// import "../../components/layout/footer/footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@fortawesome/fontawesome-free/css/all.min.css";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "700"],
  variable: "--roboto",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shivbalajisurgical.com"),
  title: {
    default: "Shiv Balaji Surgical | Hospital Bed & Hospital Furniture Manufacturer in Delhi",
    template: "%s | Shiv Balaji Surgical",
  },
  description: "Shiv Balaji Surgical — Leading Hospital Furniture Manufacturer in Delhi, India. ISO & GMP Certified manufacturer of Hospital Beds, ICU Beds, Fowler Beds, Medical Trolleys, Examination Couches and all Hospital Furniture.",
  keywords: "Hospital Bed Manufacturer in India, Hospital Furniture Manufacturer in Delhi, ICU Bed Manufacturer, Fowler Bed Manufacturer, Medical Furniture Manufacturer India",
  openGraph: {
    siteName: "Shiv Balaji Surgical",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${caveat.variable}`}>
        {children}
        {/* <ToggleBodyClass/> */}
        {/* <SwitcherMenu /> */}
       <DownloadProductList />
        
        <ContactRight />
      </body>
    </html>
  );
}
