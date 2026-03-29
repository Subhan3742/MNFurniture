import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProductGallery from "@/app/components/ProductGallery";
import AddToCart from "@/app/components/AddToCart";
import { getCategoryBySlug, getProductBySlug, getCategories, getProductsByCategory } from "@/sanity/queries";

export async function generateStaticParams() {
  const cats = await getCategories();
  const params: { slug: string; productId: string }[] = [];
  for (const cat of cats) {
    const products = await getProductsByCategory(cat.slug);
    for (const p of products) {
      params.push({ slug: cat.slug, productId: p.slug });
    }
  }
  return params;
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string; productId: string }> }) {
  const { slug, productId } = await params;
  const [category, product] = await Promise.all([
    getCategoryBySlug(slug),
    getProductBySlug(slug, productId),
  ]);

  if (!category || !product) notFound();

  const images: string[] = product.images?.length ? product.images : [product.image];

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#f5ede0] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-stone-400 mb-10">
            <Link href="/" className="hover:text-amber-700">Home</Link>
            <span>›</span>
            <Link href={`/category/${slug}`} className="hover:text-amber-700">{category.name}</Link>
            <span>›</span>
            <span className="text-stone-600">{product.name}</span>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden shadow-lg grid md:grid-cols-2">
            <div className="flex flex-col">
              <ProductGallery images={images} />
            </div>

            <div className="p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-3 py-1 rounded-full">
                  {product.tag}
                </span>
                <h1 className="text-3xl font-black text-stone-800 mt-4 mb-2">{product.name}</h1>
                <p className="text-2xl text-amber-700 font-bold mb-4">{product.price}</p>
                <p className="text-stone-500 leading-relaxed mb-6">{product.description}</p>

                <div className="space-y-2 text-sm text-stone-600 mb-8">
                  {product.material && (
                    <div className="flex gap-2">
                      <span className="font-semibold text-stone-800 w-24">Material:</span>
                      <span>{product.material}</span>
                    </div>
                  )}
                  {product.dimensions && (
                    <div className="flex gap-2">
                      <span className="font-semibold text-stone-800 w-24">Dimensions:</span>
                      <span>{product.dimensions}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <AddToCart id={product._id} name={product.name} price={product.price} image={images[0]} />
                <a
                  href={`https://wa.me/923001234567?text=Hi! I'm interested in ${encodeURIComponent(product.name)} (${product.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.75.75 0 00.916.916l5.573-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.964-1.355l-.355-.212-3.686.972.986-3.596-.232-.371A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                  </svg>
                  Order on WhatsApp
                </a>
                <Link
                  href={`/category/${slug}`}
                  className="text-center border border-stone-300 text-stone-600 hover:border-amber-700 hover:text-amber-700 py-3 rounded-xl font-semibold transition-colors"
                >
                  ← Back to {category.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
