import Link from "next/link";
import CartSummary from "../cart/CartSummary";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-brand-border/60 bg-brand-cream/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/menu" className="flex flex-col items-center">
          <span className="font-serif text-2xl font-bold text-brand-terracotta">
            Addis
          </span>
          <span className="text-[10px] font-semibold tracking-[0.25em] text-brand-muted">
            EATS
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="/menu" className="hover:text-brand-terracotta">Menu</Link>
          <Link href="/cart" className="hover:text-brand-terracotta">Order & Cart</Link>
          <Link href="/signin" className="hover:text-brand-terracotta">Sign In</Link>
          <Link href="/register" className="hover:text-brand-terracotta">Register</Link>
        </nav>

        <CartSummary />
      </div>
    </header>
  );
}
