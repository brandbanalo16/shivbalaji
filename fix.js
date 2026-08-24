const fs = require('fs');

let content = fs.readFileSync('c:\\shiv\\data\\products.ts', 'utf-8');

// 1. Fix getSubcategoriesByCategory
content = content.replace(
  /export const getSubcategoriesByCategory = \(categorySlug: string\) => \{\s+const products = getProductsByCategory\(categorySlug\);\s+const subcategories = Array\.from\(new Set\(products\.map\(p => p\.subcategory\)\)\);\s+return subcategories;\s+\};/g,
  `export const getSubcategoriesByCategory = (categorySlug: string) => {
  const products = getProductsByCategory(categorySlug);
  const subcategories = Array.from(new Set(products.map(p => p.subcategory)));
  return subcategories.filter(sub => !["Hospital Accessories", "Bucket Stands", "Swab Stands"].includes(sub));
};`
);

// 2. Fix subcategoryImages
content = content.replace(
  /"Bedside Screen": "\/assets\/images\/Sub Categoty\/Bedside Screen\.webp",/g,
  `"Bedside Screens": "/assets/images/Sub Categoty/Bedside Screen.webp",`
);

// 3. Replace SBS-065
const sbs065Regex = /makeProduct\(\{\s+product_id: "SBS-065",[\s\S]*?\}\),/g;
const newSbs065 = `makeProduct({
        product_id: "SBS-065",
        product_name: "Premium Bedside Screen (Multi-Panel)",
        model: "SB-G165",
        category: "Stretchers, Screens & Accessories",
        image: productImg(66),
        short_description: "Premium Bedside Screen (Multi-Panel) (Model SB-G165) — Folding privacy screen with castor wheels",
        description: "Premium Bedside Screen (Multi-Panel) - Model SB-G165 — Folding privacy screen with castor wheels, available in 3-panel and 4-panel configurations.",
        subcategory: "Bedside Screens",
        specifications: [
          "Available in 3-panel and 4-panel configurations.",
          "M.S. tubular frame construction.",
          "Fitted with smooth castor wheels for easy mobility.",
          "Supplied with durable, washable curtain cloth.",
          "Pre-treated and epoxy powder coated finish.",
        ],
        optional_feature: [],
        features: [
          "Folding multi-panel design",
          "M.S. tubular construction",
          "Castor wheels for mobility",
          "Washable curtains included",
          "Pre-treated and epoxy powder coated finish",
        ],
        seo: {
          focus_keyword: "Premium Bedside Screen",
          meta_title: "Premium Bedside Screen (Multi-Panel) | Hospital Bed Manufacturer in Delhi | Shiv Balaji Surgical",
          meta_description: "Buy the best Premium Bedside Screen (Multi-Panel). We are a leading Hospital Furniture Manufacturer. Explore our high-quality Bedside Screens today!",
          url_slug: "/products/stretchers-screens-accessories/sb-g165-premium-bedside-screen-multi-panel",
          image_alt_text: "Premium Bedside Screen - Hospital Furniture Manufacturer",
          og_title: "Premium Bedside Screen | Shiv Balaji Surgical",
          og_description: "Buy Premium Bedside Screen (Multi-Panel) from Shiv Balaji Surgical - leading hospital furniture manufacturer, supplier & dealer in Delhi NCR.",
          business_keywords: ["Premium Bedside Screen Manufacturer", "Bedside Screen Supplier", "Hospital Furniture Manufacturer India", "Hospital Equipment Supplier Delhi NCR"],
          seo_content_block: "If you are looking for the best Premium Bedside Screen, you are in the right place. Our Premium Bedside Screen is designed for optimal performance. As a top Hospital Furniture Manufacturer, we ensure every Premium Bedside Screen meets high standards. Patients and caregivers prefer our Premium Bedside Screen for its reliability and privacy.",
        },
      }),`;
content = content.replace(sbs065Regex, newSbs065);

// 4. Replace SBS-083
const sbs083Regex = /makeProduct\(\{\s+product_id: "SBS-083",[\s\S]*?\}\)\n    \],/g;
const newSbs083 = `makeProduct({
        product_id: "SBS-083",
        product_name: "S.S. Bedside Screen (3-Panel)",
        model: "SB-G68",
        category: "Stretchers, Screens & Accessories",
        image: productImg(85),
        short_description: "S.S. Bedside Screen (3-Panel) (Model SB-G68) — Stainless steel folding privacy screen",
        description: "S.S. Bedside Screen (3-Panel) - Model SB-G68 — High-quality stainless steel folding privacy screen with blue fabric curtains.",
        subcategory: "Bedside Screens",
        specifications: [
          "Three-panel folding privacy screen.",
          "Premium stainless steel (S.S.) tubular frame.",
          "Mounted on twin-wheel castors for mobility.",
          "Supplied with blue curtain cloth.",
        ],
        optional_feature: [],
        features: [
          "Three-panel folding design",
          "Premium S.S. frame",
          "Castor wheels for smooth movement",
          "Easy to clean and maintain",
        ],
        seo: {
          focus_keyword: "S.S. Bedside Screen",
          meta_title: "S.S. Bedside Screen (3-Panel) | Hospital Furniture Manufacturer | Shiv Balaji Surgical",
          meta_description: "Buy the best S.S. Bedside Screen (3-Panel). We are a leading Hospital Furniture Manufacturer. Explore our high-quality S.S. Bedside Screens today!",
          url_slug: "/products/stretchers-screens-accessories/sb-g68-ss-bedside-screen-3-panel",
          image_alt_text: "S.S. Bedside Screen (3-Panel) - Hospital Furniture Manufacturer",
          og_title: "S.S. Bedside Screen (3-Panel) | Shiv Balaji Surgical",
          og_description: "Buy S.S. Bedside Screen (3-Panel) from Shiv Balaji Surgical - leading hospital furniture manufacturer, supplier & dealer in Delhi NCR.",
          business_keywords: ["S.S. Bedside Screen Manufacturer", "Stainless Steel Bedside Screen Supplier", "Hospital Furniture Manufacturer India", "Hospital Equipment Supplier Delhi NCR"],
          seo_content_block: "If you are looking for the best S.S. Bedside Screen, you are in the right place. Our S.S. Bedside Screen is designed for optimal performance. As a top Hospital Furniture Manufacturer, we ensure every S.S. Bedside Screen meets high standards for hygiene and durability. Ensure patient privacy with our premium S.S. Bedside Screens.",
        },
      })
    ],`;
content = content.replace(sbs083Regex, newSbs083);

fs.writeFileSync('c:\\shiv\\data\\products.ts', content, 'utf-8');
console.log('done!');
