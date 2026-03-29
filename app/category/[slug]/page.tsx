import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getCategoryBySlug, getProductsByCategory, getCategories } from "@/sanity/queries";

export async function generateStaticParams() {
  const cats = await getCategories();
  return cats.map((c: any) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [category, products] = await Promise.all([
    getCategoryBySlug(slug),
    getProductsByCategory(slug),
  ]);

  if (!category) notFound();

  return (
    <>
      <Navbar />
      <div
        className="h-56 bg-cover bg-center relative"
        style={{ backgroundImage: `url('${category.image}')` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col gap-2">
          <p className="text-amber-300 uppercase tracking-widest text-xs">MNFurniture.online</p>
          <h1 className="text-4xl font-black text-white uppercase">{category.name}</h1>
          <p className="text-white/60 text-sm">{category.count} items</p>
        </div>
      </div>

      <section className="py-16 bg-[#f5ede0] min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-stone-400 mb-8">
            <Link href="/" className="hover:text-amber-700">Home</Link>
            <span>›</span>
            <span className="text-stone-600">{category.name}</span>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-24 text-stone-400">No products yet in this category.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((p: any) => (
                <Link
                  key={p._id}
                  href={`/category/${slug}/product/${p.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">
                      {p.tag}
                    </span>
                    <h3 className="font-semibold text-stone-800 mt-2 mb-1">{p.name}</h3>
                    <p className="text-amber-700 font-bold">{p.price}</p>
                    <p className="text-xs text-stone-400 mt-1">Click to view details →</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
