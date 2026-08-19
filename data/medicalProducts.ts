import medicalProductsJson from "./medical-products.json";

export type MedicalProduct = {
  product_id: string;
  product_name: string;
  model: string;
  category: string;
  image: string;
  specifications: string[];
  optional: string[];
  feature: string[];
};

export const medicalProducts: MedicalProduct[] = medicalProductsJson as MedicalProduct[];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function normalizeCategory(value?: string) {
  return slugify(value || "uncategorized");
}

export function getProductByRoute(category: string, slug: string) {
  const categorySlug = normalizeCategory(category);
  const searchSlug = decodeURIComponent(slug).toLowerCase();

  return medicalProducts.find((product) => {
    const routeCandidates = new Set<string>([
      slugify(product.product_id || ""),
      slugify(product.model || ""),
      slugify(product.product_name || ""),
      normalizeCategory(product.category),
    ]);

    const matchesCategory = normalizeCategory(product.category) === categorySlug;
    const matchesSlug = Array.from(routeCandidates).includes(searchSlug);
    const matchesExactId = product.product_id.toLowerCase() === searchSlug;

    return matchesCategory && (matchesSlug || matchesExactId);
  });
}

export function getProductsByCategory(category: string) {
  const categorySlug = normalizeCategory(category);
  return medicalProducts.filter(
    (product) => normalizeCategory(product.category) === categorySlug,
  );
}

export function getRelatedProducts(category: string, currentProductId?: string) {
  return getProductsByCategory(category).filter(
    (product) => product.product_id !== currentProductId,
  );
}

export function getProductImage(product: MedicalProduct) {
  if (!product.image) {
    return "/assets/images/service/service-1.jpg";
  }

  if (product.image.startsWith("/assets/") || product.image.startsWith("http")) {
    return product.image;
  }

  return "/assets/images/service/service-1.jpg";
}

export function getProductRoute(product: MedicalProduct) {
  const categorySlug = normalizeCategory(product.category);
  const routeSlug = slugify(product.model || product.product_name || product.product_id || "product");
  return `/departments/${categorySlug}/products/${routeSlug}`;
}

export function getAllProductParams() {
  return medicalProducts.flatMap((product) => {
    const categorySlug = normalizeCategory(product.category);
    const candidates = [
      slugify(product.model || product.product_id || product.product_name),
      slugify(product.product_name || product.model || product.product_id),
      slugify(product.product_id || product.model || product.product_name),
    ];

    return Array.from(new Set(candidates.filter(Boolean))).map((slug) => ({
      category: categorySlug,
      slug,
    }));
  });
}
