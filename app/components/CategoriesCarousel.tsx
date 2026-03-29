"use client";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { getCategories } from "@/sanity/queries";

export default function CategoriesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-[#f5ede0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-amber-700 uppercase tracking-[0.3em] text-xs font-semibold mb-2">Handcrafted in Wood</p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Shop by Category</h2>
          <p className="text-stone-500">Find the perfect piece for every room</p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md hover:bg-amber-700 hover:text-white text-stone-700 flex items-center justify-center rounded-full transition-all"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.length === 0
              ? [...Array(4)].map((_, i) => (
                  <div key={i} className="flex-shrink-0 w-64 h-72 rounded-xl bg-stone-200 animate-pulse" />
                ))
              : categories.map((cat: any) => (
                  <Link
                    key={cat._id}
                    href={`/category/${cat.slug}`}
                    className="group relative flex-shrink-0 w-64 h-72 overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
                    <div className="absolute top-3 right-3 bg-amber-700/80 text-white text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {cat.count} items
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-bold text-base tracking-wide">{cat.name}</p>
                      <p className="text-xs text-amber-300 mt-0.5 group-hover:underline">Browse Collection →</p>
                    </div>
                  </Link>
                ))}
          </div>

          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-md hover:bg-amber-700 hover:text-white text-stone-700 flex items-center justify-center rounded-full transition-all"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
