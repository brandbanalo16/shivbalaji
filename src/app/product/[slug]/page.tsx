import { notFound } from "next/navigation";
import ProductDetailPage from "../../../../components/sections/ProductShowcase/ProductDetailPage";
import { getProductBySlug as getProduct, allProducts } from "../../../../data/products";

export async function generateStaticParams() {
  return allProducts.map((p) => ({
    slug: p.slug,
  }));
}

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.seo?.meta_title || `${product.product_name} | Shiv Balaji Surgical`,
    description: product.seo?.meta_description || product.short_description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  if (!getProduct(slug)) {
    notFound();
  }

  return <ProductDetailPage slug={slug} />;
}
