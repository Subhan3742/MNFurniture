import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🪑</span>
            <span className="text-xl font-bold text-white">
              MN<span className="text-amber-500">Furniture</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed text-stone-400">
            Crafting timeless furniture that brings warmth and elegance to every
            home since 2005.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            {["Home", "Shop", "About Us", "Blog", "Contact"].map((l) => (
              <li key={l}>
                <Link href="#" className="hover:text-amber-400 transition-colors">
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Categories
          </h4>
          <ul className="space-y-2 text-sm">
            {["Living Room", "Bedroom", "Dining Room", "Office", "Outdoor"].map(
              (c) => (
                <li key={c}>
                  <Link href="#" className="hover:text-amber-400 transition-colors">
                    {c}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm text-stone-400">
            <li>📍 123 Furniture Street, Lahore, Pakistan</li>
            <li>📞 +92 300 1234567</li>
            <li>✉️ info@mnfurniture.com</li>
          </ul>
          <div className="flex gap-4 mt-5 text-lg">
            {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
              <Link
                key={i}
                href="#"
                className="hover:text-amber-400 transition-colors"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800 text-center py-5 text-xs text-stone-500">
        © {new Date().getFullYear()} MNFurniture.online. All rights reserved.
      </div>
    </footer>
  );
}
