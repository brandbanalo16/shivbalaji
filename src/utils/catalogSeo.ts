import type { Metadata } from "next";
import type { Product } from "../../data/products";

const companyName = "Shiv Balaji Surgical";

const uniqueKeywords = (keywords: string[]) =>
  [...new Set(keywords.map((keyword) => keyword.trim()).filter(Boolean))].slice(0, 15);

export function getProductMetadata(product: Product, canonicalPath: string): Metadata {
  const productName = product.product_name.trim();
  const categoryName = product.category.trim();
  const description = `${productName} from ${companyName}, a hospital furniture manufacturer, supplier and dealer in India. View specifications and request a quote.`;

  return {
    title: `${productName} Manufacturer in India`,
    description,
    keywords: uniqueKeywords([
      `${productName} manufacturer in India`,
      `${productName} supplier in India`,
      `${productName} dealer in India`,
      `${productName} wholesaler in India`,
      `${productName} manufacturer in Delhi`,
      `${productName} supplier in Delhi`,
      `${productName} dealer in Delhi`,
      `${productName} wholesaler in Delhi`,
      `${categoryName} manufacturer in India`,
      `${categoryName} supplier in India`,
      `${categoryName} dealer in India`,
      `${categoryName} wholesaler in India`,
      "hospital furniture manufacturer in Delhi",
      "hospital furniture supplier in India",
      "medical equipment dealer in India",
    ]),
    alternates: { canonical: canonicalPath },
    openGraph: {
      title: `${productName} Manufacturer in India | ${companyName}`,
      description,
      images: [product.image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${productName} Manufacturer in India | ${companyName}`,
      description,
    },
  };
}

export function getCategoryMetadata(
  categoryName: string,
  canonicalPath: string,
): Metadata {
  const category = categoryName.trim();
  const description = `Explore ${category.toLowerCase()} from ${companyName}, a Delhi manufacturer, supplier and dealer serving hospitals across India. View products and request a quote.`;

  return {
    title: `${category} Manufacturer & Supplier in India`,
    description,
    keywords: uniqueKeywords([
      `${category} manufacturer in India`,
      `${category} supplier in India`,
      `${category} dealer in India`,
      `${category} wholesaler in India`,
      `${category} manufacturer in Delhi`,
      `${category} supplier in Delhi`,
      `${category} dealer in Delhi`,
      `${category} wholesaler in Delhi`,
      "hospital furniture manufacturer in India",
      "hospital furniture supplier in Delhi",
      "hospital furniture dealer in India",
      "medical equipment wholesaler in India",
    ]),
    alternates: { canonical: canonicalPath },
    openGraph: { title: `${category} | ${companyName}`, description },
  };
}

export function getSubcategoryMetadata(
  subcategoryName: string,
  categoryName: string,
  canonicalPath: string,
): Metadata {
  const subcategory = subcategoryName.trim();
  const category = categoryName.trim();
  const description = `Browse ${subcategory.toLowerCase()} in ${category.toLowerCase()} from ${companyName}, a hospital furniture manufacturer and supplier in India. Contact us for specifications and bulk pricing.`;

  return {
    title: `${subcategory} Manufacturer & Supplier in India`,
    description,
    keywords: uniqueKeywords([
      `${subcategory} manufacturer in India`,
      `${subcategory} supplier in India`,
      `${subcategory} dealer in India`,
      `${subcategory} wholesaler in India`,
      `${subcategory} manufacturer in Delhi`,
      `${subcategory} supplier in Delhi`,
      `${subcategory} dealer in Delhi`,
      `${subcategory} wholesaler in Delhi`,
      `${category} manufacturer in India`,
      `${category} supplier in India`,
      `${category} dealer in India`,
      "hospital furniture manufacturer in Delhi",
      "hospital furniture supplier in India",
      "medical equipment dealer in India",
    ]),
    alternates: { canonical: canonicalPath },
    openGraph: { title: `${subcategory} | ${companyName}`, description },
  };
}