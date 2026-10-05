 "use client";

import { useCart } from "./CartProvider";

export default function AddToCartButton({ dish }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(dish)}
      className="rounded-full bg-[#94381c] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#7d2e16]"
    >
      Add to cart
    </button>
  );
}
