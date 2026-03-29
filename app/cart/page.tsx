"use client";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { items, removeFromCart, updateQty } = useCart();

  const total = items.reduce((sum, item) => {
    const num = parseInt(item.price.replace(/[^0-9]/g, ""), 10);
    return sum + num * item.quantity;
  }, 0);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#f5ede0] pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-3xl font-black text-stone-800 mb-2">Your Cart</h1>
          <p className="text-stone-400 text-sm mb-10">
            {items.length === 0 ? "Your cart is empty." : `${items.length} item(s) in your cart`}
          </p>

          {items.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-6xl mb-4">🛒</p>
              <p className="text-stone-500 mb-6">Nothing here yet. Start shopping!</p>
              <Link
                href="/"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Items */}
              <div className="md:col-span-2 flex flex-col gap-4">
                {items.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl p-4 flex gap-4 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-semibold text-stone-800">{item.name}</h3>
                        <p className="text-amber-700 font-bold text-sm">{item.price}</p>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        {/* Qty Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQty(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full bg-stone-100 hover:bg-amber-100 text-stone-700 font-bold flex items-center justify-center transition-colors"
                          >
                            −
                          </button>
                          <span className="w-6 text-center font-semibold text-stone-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQty(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full bg-stone-100 hover:bg-amber-100 text-stone-700 font-bold flex items-center justify-center transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-red-400 hover:text-red-600 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
                <h2 className="font-bold text-stone-800 text-lg mb-4">Order Summary</h2>
                <div className="space-y-2 text-sm text-stone-600 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.name} x{item.quantity}</span>
                      <span className="font-medium text-stone-800">
                        PKR {(parseInt(item.price.replace(/[^0-9]/g, ""), 10) * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-stone-100 pt-4 flex justify-between font-bold text-stone-800 mb-6">
                  <span>Total</span>
                  <span className="text-amber-700">PKR {total.toLocaleString()}</span>
                </div>

                <Link
                  href="/checkout"
                  className="flex items-center justify-center bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-xl font-bold transition-colors w-full mb-3"
                >
                  Proceed to Checkout →
                </Link>

                <div className="relative flex items-center gap-2 my-1">
                  <div className="flex-1 h-px bg-stone-100" />
                  <span className="text-xs text-stone-400">or</span>
                  <div className="flex-1 h-px bg-stone-100" />
                </div>

                <a
                  href={`https://wa.me/923001234567?text=Hi! I'd like to order:%0A${items.map((i) => `- ${i.name} x${i.quantity} (${i.price})`).join("%0A")}%0A%0ATotal: PKR ${total.toLocaleString()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-green-500 text-green-600 hover:bg-green-50 py-2.5 rounded-xl text-sm font-semibold transition-colors w-full mt-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.428a.75.75 0 00.916.916l5.573-1.471A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.725 9.725 0 01-4.964-1.355l-.355-.212-3.686.972.986-3.596-.232-.371A9.722 9.722 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                  </svg>
                  Quick Order via WhatsApp
                </a>
                <Link
                  href="/"
                  className="block text-center mt-3 text-stone-500 hover:text-amber-700 text-sm transition-colors"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
