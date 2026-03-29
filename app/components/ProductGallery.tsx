"use client";
import { useState } from "react";

export default function ProductGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      {/* Main Image */}
      <div
        className="relative h-80 md:h-full min-h-[360px] overflow-hidden cursor-zoom-in bg-stone-100"
        onClick={() => setZoomed(true)}
      >
        <img
          src={images[active]}
          alt="Product"
          className="w-full h-full object-cover transition-all duration-500"
        />
        <span className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2 py-1 rounded-full">
          🔍 Click to zoom
        </span>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 p-3 bg-stone-50 overflow-x-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                i === active ? "border-amber-600 scale-105" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Zoom Modal */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setZoomed(false)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-amber-400"
            onClick={() => setZoomed(false)}
          >
            ✕
          </button>
          <div className="flex items-center gap-4 w-full max-w-4xl">
            <button
              className="text-white text-4xl hover:text-amber-400 px-2"
              onClick={(e) => { e.stopPropagation(); setActive((active - 1 + images.length) % images.length); }}
            >
              ‹
            </button>
            <img
              src={images[active]}
              alt="Zoomed"
              className="max-h-[80vh] max-w-full object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="text-white text-4xl hover:text-amber-400 px-2"
              onClick={(e) => { e.stopPropagation(); setActive((active + 1) % images.length); }}
            >
              ›
            </button>
          </div>
          <p className="absolute bottom-4 text-white/50 text-sm">{active + 1} / {images.length}</p>
        </div>
      )}
    </>
  );
}
