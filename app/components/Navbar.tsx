"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🪑</span>
          <span className="text-xl font-bold tracking-tight text-amber-800">
            MN<span className="text-stone-700">Furniture</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-stone-600 hover:text-amber-700 font-medium transition-colors duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/cart" className="relative text-stone-600 hover:text-amber-700 transition-colors text-xl">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            href="#"
            className="bg-amber-700 hover:bg-amber-800 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <Link href="/cart" className="relative text-stone-700 text-xl">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-700 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            className="text-stone-700 text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-stone-700 hover:text-amber-700 font-medium"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#"
            className="bg-amber-700 text-white text-center px-5 py-2 rounded-full text-sm font-semibold"
          >
            Get Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
