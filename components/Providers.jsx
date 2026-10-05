/**
 * This is the ONLY provider boundary for the cart.
 * Keep this file client-side because React context/state are interactive.
 */
"use client";

import { CartProvider } from "./cart/CartProvider";

export default function Providers({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
