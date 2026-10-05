 "use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export default function CartSummary() {
  const { itemCount, total } = useCart();

  return (
    <Link
      href="/cart"
      className="rounded-full border border-brand-border bg-[#efe4d6] px-3.5 py-1.5 text-xs font-semibold"
    >
      <span className="mr-2 rounded-full bg-[#1c3d2b] px-2 py-0.5 text-white">
        {itemCount} {itemCount === 1 ? "Item" : "Items"}
      </span>
      <span>ETB {total.toLocaleString()}</span>
    </Link>
  );
}
