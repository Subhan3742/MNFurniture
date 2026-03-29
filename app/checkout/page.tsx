"use client";
import { useState } from "react";
import { createOrder } from "@/sanity/queries";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useCart } from "@/app/context/CartContext";

export default function CheckoutPage() {
  const { items, totalItems } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", address: "", city: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const total = items.reduce((sum, item) => {
    return sum + parseInt(item.price.replace(/[^0-9]/g, ""), 10) * item.quantity;
  }, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Save order to Sanity
    await createOrder({
      customerName: form.name,
      phone: form.phone,
      address: form.address,
      city: form.city,
      notes: form.notes,
      items: items.map((i) => ({
        productName: i.name,
        price: i.price,
        quantity: i.quantity,
      })),
      total,
    });

    const orderText = [
      `New Order from MNFurniture.online`,
      ``,
      `Customer: ${form.name}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}, ${form.city}`,
      form.notes ? `Notes: ${form.notes}` : "",
      ``,
      `Items:`,
      ...items.map((i) => `- ${i.name} x${i.quantity} (${i.price})`),
      ``,
      `Total: PKR ${total.toLocaleString()}`,
    ].filter(Boolean).join("\n");

    const waUrl = `https://wa.me/923001234567?text=${encodeURIComponent(orderText)}`;
    window.open(waUrl, "_blank");
    setSubmitted(true);
  };

  if (totalItems === 0 && !submitted) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen bg-[#f5ede0] pt-28 pb-16 flex items-center justify-center">
          <div className="text-center">
            <p className="text-6xl mb-4">🛒</p>
            <p className="text-stone-500 mb-6">Your cart is empty.</p>
            <Link href="/" className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors">
              Browse Products
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <section className="min-h-screen bg-[#f5ede0] pt-28 pb-16 flex items-center justify-center">
          <div className="text-center bg-white rounded-3xl p-12 shadow-lg max-w-md mx-auto">
            <p className="text-6xl mb-4">✅</p>
            <h2 className="text-2xl font-black text-stone-800 mb-2">Order Placed!</h2>
            <p className="text-stone-500 mb-6">Your order has been sent via WhatsApp. We will contact you shortly to confirm.</p>
            <Link href="/" className="bg-amber-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-800 transition-colors">
              Back to Home
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#f5ede0] pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-stone-400 mb-8">
            <Link href="/" className="hover:text-amber-700">Home</Link>
            <span>›</span>
            <Link href="/cart" className="hover:text-amber-700">Cart</Link>
            <span>›</span>
            <span className="text-stone-600">Checkout</span>
          </div>

          <h1 className="text-3xl font-black text-stone-800 mb-10">Checkout</h1>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Form */}
            <form onSubmit={handleSubmit} className="md:col-span-2 flex flex-col gap-5">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-bold text-stone-800 mb-4">Delivery Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Full Name *</label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="[Your Name]"
                      className="border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Phone Number *</label>
                    <input
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="03XX-XXXXXXX"
                      className="border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1 sm:col-span-2">
                    <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Address *</label>
                    <input
                      name="address"
                      required
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Street, Area"
                      className="border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">City *</label>
                    <input
                      name="city"
                      required
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Lahore, Karachi..."
                      className="border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Special Notes</label>
                    <input
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="Color, size preference..."
                      className="border border-stone-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Note */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-sm text-amber-800">
                💳 Payment will be collected on delivery (Cash on Delivery). Our team will confirm your order via WhatsApp.
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white py-4 rounded-xl font-bold text-base transition-colors shadow-md"
              >
                Place Order via WhatsApp →
              </button>
            </form>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm h-fit">
              <h2 className="font-bold text-stone-800 text-lg mb-4">Order Summary</h2>
              <div className="flex flex-col gap-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-stone-800 truncate">{item.name}</p>
                      <p className="text-xs text-stone-400">x{item.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-amber-700 flex-shrink-0">
                      PKR {(parseInt(item.price.replace(/[^0-9]/g, ""), 10) * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
              <div className="border-t border-stone-100 pt-4 flex justify-between font-bold text-stone-800">
                <span>Total</span>
                <span className="text-amber-700">PKR {total.toLocaleString()}</span>
              </div>
              <Link href="/cart" className="block text-center mt-4 text-xs text-stone-400 hover:text-amber-700 transition-colors">
                ← Edit Cart
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
