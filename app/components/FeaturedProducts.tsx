"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getFeaturedProducts } from "@/sanity/queries";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFeaturedProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (!loading && products.length === 0) return null;

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">Featured Products</h2>
            <p className="text-stone-500">Handpicked for quality and style</p>
          </div>
          <Link
            href="/shop"
            className="hidden md:block text-amber-700 hover:text-amber-800 font-semibold border-b-2 border-amber-700 pb-0.5"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {loading
            ? [...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
                  <div className="h-48 bg-stone-200" />
                  <div className="p-5 space-y-2">
                    <div className="h-3 bg-stone-200 rounded w-1/3" />
                    <div className="h-4 bg-stone-200 rounded w-2/3" />
                    <div className="h-4 bg-stone-200 rounded w-1/2" />
                  </div>
                </div>
              ))
            : products.map((p) => (
                <Link
                  key={p._id}
                  href={`/category/${p.categorySlug}/product/${p.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
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
                    <button className="mt-4 w-full bg-stone-800 hover:bg-amber-700 text-white py-2 rounded-xl text-sm font-medium transition-colors duration-200">
                      View Details
                    </button>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}
