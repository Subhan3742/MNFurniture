"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getAllProducts, getCategories } from "@/sanity/queries";

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([getAllProducts(), getCategories()]).then(([products, cats]) => {
      setAllProducts(products);
      setCategories(cats);
    });
  }, []);

  const filters = ["All", ...categories.map((c: any) => c.name)];
  const filtered = activeFilter === "All" ? allProducts : allProducts.filter((p) => p.categoryName === activeFilter);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#f5ede0] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-stone-800 mb-1">All Products</h1>
            <p className="text-stone-400 text-sm">{filtered.length} products found</p>
          </div>

          {/* Filter Row */}
          <div className="flex gap-2 flex-wrap mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-amber-700 text-white shadow-md"
                    : "bg-white text-stone-600 hover:bg-amber-50 hover:text-amber-700 border border-stone-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {allProducts.length === 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
                  <div className="h-48 bg-stone-200" />
                  <div className="p-4 space-y-2">
                    <div className="h-3 bg-stone-200 rounded w-1/3" />
                    <div className="h-4 bg-stone-200 rounded w-2/3" />
                    <div className="h-4 bg-stone-200 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map((p: any) => (
                <Link
                  key={p._id}
                  href={`/category/${p.categorySlug}/product/${p.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">
                        {p.tag}
                      </span>
                      <span className="text-xs text-stone-400">{p.categoryName}</span>
                    </div>
                    <h3 className="font-semibold text-stone-800 mt-2 mb-1 text-sm">{p.name}</h3>
                    <p className="text-amber-700 font-bold text-sm">{p.price}</p>
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
