/**
 * generate-products-ts.js
 * Reads products.json (SEO + features + categories) and medical-products.json (specifications)
 * and outputs a complete data/products.ts file.
 *
 * Run: node generate-products-ts.js
 */

const fs = require("fs");
const path = require("path");

// ─── Load source data ────────────────────────────────────────────────────────
const seoData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data/products.json"), "utf8")
);
const specsData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "data/medical-products.json"), "utf8")
);

// Build a lookup map from model_no → specs entry
const specsMap = {};
specsData.forEach((p) => {
  specsMap[p.model] = p;
});

const products = seoData.products;

// ─── Slugify helper ──────────────────────────────────────────────────────────
function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// ─── Group products by category (preserve order) ─────────────────────────────
const categoryOrder = seoData.categories;
const grouped = {};
categoryOrder.forEach((cat) => (grouped[cat] = []));

products.forEach((p) => {
  const cat = p.category;
  if (!grouped[cat]) grouped[cat] = [];
  grouped[cat].push(p);
});

// ─── Category meta ───────────────────────────────────────────────────────────
const categoryMeta = {
  "Bedside Lockers & Over-Bed Tables": {
    slug: "bedside-lockers-over-bed-tables",
    image: "/assets/images/service/service-3.jpg",
    icon: "fa-box-archive",
    description:
      "Bedside lockers and over-bed tables for organized patient storage and bedside utility. Available in standard, deluxe, ABS and stainless steel variants.",
  },
  "Examination Room Furniture": {
    slug: "examination-room-furniture",
    image: "/assets/images/service/service-2.jpg",
    icon: "fa-stethoscope",
    description:
      "Examination couches, OPD chairs and procedure tables designed for patient comfort and clinical efficiency. Trusted by hospitals and clinics across India.",
  },
  "Hospital & ICU Beds": {
    slug: "hospital-icu-beds",
    image: "/assets/images/service/service-1.jpg",
    icon: "fa-bed",
    description:
      "Comfort-oriented hospital & ICU beds built for safe patient handling, reliable positioning and efficient clinical care. ISO-certified products.",
  },
  "Medical Trolleys & Carts": {
    slug: "medical-trolleys-carts",
    image: "/assets/images/service/service-4.jpg",
    icon: "fa-truck-medical",
    description:
      "Hospital trolleys and carts for emergency response, medication distribution, instrument handling and ward mobility. ISO-certified.",
  },
  "Stools, Chairs & Patient Seating": {
    slug: "stools-chairs-patient-seating",
    image: "/assets/images/service/service-5.jpg",
    icon: "fa-chair",
    description:
      "Hospital stools, chairs and patient seating including revolving stools, surgeon's chairs, blood donor chairs and multi-seated waiting area chairs.",
  },
  "Stretchers, Screens & Accessories": {
    slug: "stretchers-screens-accessories",
    image: "/assets/images/service/service-6.jpg",
    icon: "fa-person-rays",
    description:
      "Patient stretchers, trolleys, bedside privacy screens and hospital accessories. Built for safe patient transport and clinical privacy.",
  },
};

// ─── Serialize helpers ────────────────────────────────────────────────────────
function escStr(s) {
  return JSON.stringify(String(s || ""));
}

function escArr(arr) {
  if (!arr || !arr.length) return "[]";
  const lines = arr.map((item) => `          ${escStr(item)},`).join("\n");
  return `[\n${lines}\n        ]`;
}

// ─── Build product block ──────────────────────────────────────────────────────
function buildProduct(p, index) {
  const modelNo = p.model_no;
  const specEntry = specsMap[modelNo] || {};
  const specifications = specEntry.specifications || [];
  const optional_feature = specEntry.optional || [];
  const features = p.features || [];

  const slug = slugify(`${p.product_name}-${modelNo}`);

  // Full SEO from products.json
  const seo = p.seo || {};
  const metaTitle = seo.meta_title || `${p.product_name} | Shiv Balaji Surgical`;
  const metaDesc =
    seo.meta_description ||
    `Buy ${p.product_name} (Model ${modelNo}) from Shiv Balaji Surgical - ISO certified hospital furniture manufacturer, supplier & dealer in Delhi NCR. Call +91 8287153753.`;
  const focusKw = seo.focus_keyword || p.product_name;
  const urlSlug = seo.url_slug || `/products/${slugify(p.category)}/${slug}`;
  const imageAlt = seo.image_alt_text || `${p.product_name} ${modelNo} - Shiv Balaji Surgical`;
  const ogTitle = seo.og_title || metaTitle;
  const ogDesc = seo.og_description || metaDesc;
  const twitterTitle = seo.twitter_title || metaTitle;
  const twitterDesc = seo.twitter_description || metaDesc;

  const additionalKws = (seo.additional_keywords || []).map(escStr).join(", ");
  const businessKws = (p.business_keywords || []).map(escStr).join(", ");
  const seoContentBlock = seo.seo_content_block || "";

  // Schema.org
  const schema = p.schema_org_product || {};

  // Short description
  const shortDesc =
    p.short_description ||
    `${p.product_name} (Model ${modelNo}) by Shiv Balaji Surgical.`;

  // Description = h1 heading + short desc
  const description = `${p.h1_heading || p.product_name} — ${shortDesc}`;

  // Product ID from index
  const productId = `SBS-${String(index + 1).padStart(3, "0")}`;

  return `    makeProduct({
      product_id: ${escStr(productId)},
      product_name: ${escStr(p.product_name)},
      model: ${escStr(modelNo)},
      category: ${escStr(p.category)},
      image: productImg(${index + 1}),
      short_description: ${escStr(shortDesc)},
      description: ${escStr(description)},
      subcategory: ${escStr(p.subcategory || "Other")},
      specifications: ${escArr(specifications)},
      optional_feature: ${escArr(optional_feature)},
      features: ${escArr(features)},
      seo: {
        focus_keyword: ${escStr(focusKw)},
        meta_title: ${escStr(metaTitle)},
        meta_description: ${escStr(metaDesc)},
        url_slug: ${escStr(urlSlug)},
        image_alt_text: ${escStr(imageAlt)},
        og_title: ${escStr(ogTitle)},
        og_description: ${escStr(ogDesc)},
        twitter_title: ${escStr(twitterTitle)},
        twitter_description: ${escStr(twitterDesc)},
        additional_keywords: [${additionalKws}],
        business_keywords: [${businessKws}],
        seo_content_block: ${escStr(seoContentBlock)},
        schema_org: ${JSON.stringify(schema, null, 2).split("\n").join("\n        ")},
      },
    })`;
}

// ─── Build departments array ──────────────────────────────────────────────────
let deptBlocks = categoryOrder
  .map((catName) => {
    const meta = categoryMeta[catName];
    const catProducts = grouped[catName] || [];
    const productBlocks = catProducts.map((p, i) => buildProduct(p, products.indexOf(p))).join(",\n");

    return `  {
    slug: ${escStr(meta.slug)},
    name: ${escStr(catName)},
    image: ${escStr(meta.image)},
    icon: ${escStr(meta.icon)},
    description: ${escStr(meta.description)},
    products: [
${productBlocks}
    ],
  }`;
  })
  .join(",\n\n");

// ─── Final file content ───────────────────────────────────────────────────────
const output = `// ============================================================
// products.ts — Shiv Balaji Surgical — Auto-generated
// Source: data/products.json + data/medical-products.json
// Total products: ${products.length}
// Generated: ${new Date().toISOString()}
// ============================================================

export type ProductSeo = {
  focus_keyword: string;
  meta_title: string;
  meta_description: string;
  url_slug: string;
  image_alt_text: string;
  og_title?: string;
  og_description?: string;
  twitter_title?: string;
  twitter_description?: string;
  additional_keywords?: string[];
  business_keywords?: string[];
  seo_content_block?: string;
  schema_org?: Record<string, unknown>;
};

export type Product = {
  product_id: string;
  product_name: string;
  model: string;
  category: string;
  image: string;
  description: string;
  short_description: string;
  subcategory: string;
  specifications: string[];
  optional_feature: string[];
  features: string[];
  slug: string;
  seo?: ProductSeo;
};

export type Category = {
  slug: string;
  name: string;
  image: string;
  description: string;
  icon: string;
  products: Product[];
};

export const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

const makeProduct = (
  product: Omit<Product, "slug">,
): Product => ({
  ...product,
  slug:
    slugify(\`\${product.product_name}-\${product.model || product.product_id}\`) ||
    slugify(product.product_id),
});

const productImg = (index: number) =>
  \`/assets/images/product/\${index}.webp\`;

export const departments: Category[] = [
${deptBlocks}
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export const allProducts = departments.flatMap((d) => d.products);

export const getCategoryBySlug = (slug: string) =>
  departments.find((d) => d.slug === slug);

export const getProductsByCategory = (slug: string) =>
  getCategoryBySlug(slug)?.products ?? [];

export const getProductsByCategoryName = (categoryName: string) =>
  departments.find(
    (d) =>
      d.name.toLowerCase() === categoryName.toLowerCase() ||
      d.slug === slugify(categoryName),
  )?.products ?? [];

export const getProductBySlug = (slug: string) =>
  allProducts.find((p) => p.slug === slug);

export const getRelatedProducts = (category: string, currentProductId: string) =>
  getProductsByCategoryName(category).filter((p) => p.product_id !== currentProductId);

export const productCategoryParams = departments.map((d) => ({ category: d.slug }));

export const productParams = allProducts.map((p) => ({ product: p.slug }));

export const getProductByCategoryAndSlug = (categorySlug: string, productSlug: string) => {
  const category = getCategoryBySlug(categorySlug);
  return category?.products.find((p) => p.slug === productSlug);
};

export const categoryMeta = departments.map((d) => ({
  slug: d.slug,
  name: d.name,
  count: d.products.length,
}));

export const getSubcategoriesByCategory = (categorySlug: string) => {
  const products = getProductsByCategory(categorySlug);
  const subcategories = Array.from(new Set(products.map(p => p.subcategory)));
  return subcategories;
};

export const getProductsBySubcategory = (categorySlug: string, subcategoryName: string) => {
  const products = getProductsByCategory(categorySlug);
  return products.filter(p => p.subcategory === subcategoryName);
};

export const getRelatedProductsBySubcategory = (subcategoryName: string, categorySlug: string, currentProductId: string) => {
  const products = getProductsBySubcategory(categorySlug, subcategoryName);
  const related = products.filter(p => p.product_id !== currentProductId);
  // If not enough products in subcategory, fallback to category
  if (related.length < 4) {
    const catProducts = getProductsByCategory(categorySlug).filter(p => p.product_id !== currentProductId && p.subcategory !== subcategoryName);
    return [...related, ...catProducts];
  }
  return related;
};
`;

fs.writeFileSync(path.join(__dirname, "data/products.ts"), output, "utf8");

// Summary
console.log("✅ products.ts generated successfully!");
console.log(`   Total products: ${products.length}`);
categoryOrder.forEach((cat) => {
  console.log(`   ${cat}: ${(grouped[cat] || []).length} products`);
});
const totalLines = output.split("\n").length;
console.log(`   File size: ${(output.length / 1024).toFixed(1)} KB  (${totalLines} lines)`);
