import { notFound } from "next/navigation";
import ProductDetailPage from "../../../../components/sections/ProductShowcase/ProductDetailPage";
import { getProductBySlug as getProduct, allProducts } from "../../../../data/products";
import { getProductMetadata } from "../../../utils/catalogSeo";

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

  return getProductMetadata(product, `/product/${product.slug}`);
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  if (!getProduct(slug)) {
    notFound();
  }

  return <ProductDetailPage slug={slug} />;
}
