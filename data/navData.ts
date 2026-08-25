// ============================================================
// data/navData.ts
// Single source of truth for ALL navigation:
//   - Desktop header dropdown
//   - Mobile accordion menu
//   - Footer product links
// ============================================================

import { categoryMeta, getSubcategoriesByCategory, slugify } from "./products";

type SubCategory = {
  title: string;
  slug: string;
};

export type ProductCategory = {
  title: string;
  slug: string; // matches /[category]
  subcategories: SubCategory[]; // matches /[category]/[subcategory]
};

/**
 * Product categories used across header, mobile menu and footer.
 * Generated dynamically from products.ts
 */
export const productCategories: ProductCategory[] = categoryMeta.map((cat) => ({
  title: cat.name,
  slug: cat.slug,
  subcategories: getSubcategoriesByCategory(cat.slug).map((sub) => ({
    title: sub,
    slug: slugify(sub),
  })),
}));

/** Top-level navigation links used in Header & Mobile Menu */
const mainNavLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  // "Our Product Range" is rendered separately as a mega-dropdown
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];

/** Footer quick links */
export const footerQuickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Products", href: "/hospital-icu-beds" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms & Conditions", href: "/terms-conditions" },
];

/** Footer company links */
export const footerCompanyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];

/** Contact details */
export const contactInfo = {
  address: "Kh. Number 25/2, Kala Bus Depot, Najafgarh, behind Dichaon, Nangli Sakrawati, New Delhi, Delhi 110043",
  regdAddress: "A-294, Second Floor, Hastal, Uttam Nagar, New Delhi - 110059, India",
  phones: ["+91 8287153753", "+91 7678285286", "+91 7678281217"],
  email: "shivbalajisurgical@gmail.com",
  website: "https://www.shivbalajisurgical.com",
  mapsUrl:
    "https://www.google.com/maps/search/Kh.+No.+25%2F2,+Nangli+Sakrawati,+Najafgarh,+New+Delhi",
  social: {
    facebook: "https://www.facebook.com/shivbalajisurgical",
    instagram: "https://www.instagram.com/shivbalajisurgical",
    youtube: "https://www.youtube.com/@shivbalajisurgical",
    whatsapp: "https://wa.me/918287153753",
  },
};
