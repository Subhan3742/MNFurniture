"use client";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";

type Props = {
  id: string;
  name: string;
  price: string;
  image: string;
};

export default function AddToCart({ id, name, price, image }: Props) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart({ id, name, price, image });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
        added ? "bg-green-600 text-white scale-95" : "bg-stone-800 hover:bg-amber-700 text-white"
      }`}
    >
      {added ? "✓ Added to Cart!" : "Add to Cart"}
    </button>
  );
}
