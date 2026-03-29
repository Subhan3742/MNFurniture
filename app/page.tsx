import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Link from "next/link";
import CategoriesCarousel from "./components/CategoriesCarousel";
import FeaturedProducts from "./components/FeaturedProducts";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoriesCarousel />
      <FeaturedProducts />

      {/* Quote Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-5xl text-amber-300 leading-none">"</span>
          <p className="text-2xl md:text-3xl font-semibold text-stone-700 italic mt-2 mb-4">
            A beautiful home is not about how much you spend — it&apos;s about how much love you put into it.
          </p>
          <p className="text-stone-400 text-sm uppercase tracking-widest">— MNFurniture.online</p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-amber-800 to-stone-800 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Custom Furniture, Your Way
          </h2>
          <p className="text-amber-200 text-lg mb-8">
            Can&apos;t find what you&apos;re looking for? We craft furniture to your exact
            specifications and style.
          </p>
          <Link
            href="#"
            className="bg-white text-amber-800 hover:bg-amber-50 px-10 py-3 rounded-full font-bold text-lg transition-colors duration-200 shadow-lg"
          >
            Request Custom Order
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
