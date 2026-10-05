 "use client";

import Link from "next/link";
import { useCart } from "../../components/cart/CartProvider";

export default function CartPage() {
  const { items, total, updateQuantity, removeFromCart } = useCart();

  return (
    <main className="min-h-screen bg-[#fffaf7] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/menu" className="text-sm font-semibold text-[#94381c]">← Continue shopping</Link>
        <h1 className="mt-4 font-serif text-4xl font-bold text-[#8f2116]">Your Cart</h1>

        {items.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="text-brand-muted">Your cart is empty.</p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div>
                  <h2 className="font-serif text-xl font-bold">{item.nameEn}</h2>
                  <p className="text-sm text-brand-muted">ETB {item.priceETB} each</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                    className="w-16 rounded border p-2 text-center"
                    aria-label={`Quantity for ${item.nameEn}`}
                  />
                  <button onClick={() => removeFromCart(item.id)} className="rounded-full border px-3 py-2 text-xs">
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-end pt-4 text-xl font-bold">Total: ETB {total.toLocaleString()}</div>
          </div>
        )}
      </div>
    </main>
  );
}
