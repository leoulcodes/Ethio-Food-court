import Link from "next/link";
import { notFound } from "next/navigation";
import { getDishes } from "../../../lib/menu";
import { getDishImage } from "../../../lib/menu-images";
import AddToCartButton from "../../../components/cart/AddToCartButton";

export default async function DishDetailPage({ params }) {
  const { slug } = await params;
  const dishes = await getDishes();
  const dish = dishes.find((item) => item.slug === slug);

  if (!dish) notFound();

  return (
    <main className="min-h-screen bg-[#fffaf7] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/menu" className="text-sm font-semibold text-[#94381c]">
          ← Back to menu
        </Link>

        <div className="mt-6 grid overflow-hidden rounded-3xl border border-[#eaded9] bg-white shadow-xl md:grid-cols-2">
          <img src={getDishImage(dish.slug)} alt={dish.nameEn} className="h-full min-h-[420px] w-full object-cover" />

          <div className="p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-[#b53a29]">{dish.category}</p>
            <h1 className="mt-2 font-serif text-4xl font-bold text-[#8f2116]">{dish.nameEn}</h1>
            <p className="mt-1 text-lg text-brand-muted">{dish.nameAm}</p>
            <p className="mt-6 text-base leading-7 text-[#6e5d57]">{dish.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#fff0e8] px-3 py-1 text-xs">{dish.spiceLevel}</span>
              {dish.isFasting && <span className="rounded-full bg-[#f0f8e9] px-3 py-1 text-xs">Fasting / Tsom</span>}
              {dish.isSpecial && <span className="rounded-full bg-[#fff7d6] px-3 py-1 text-xs">Chef's Special</span>}
            </div>

            <div className="mt-8 flex items-center justify-between border-t pt-6">
              <span className="text-2xl font-bold text-[#1c3d2b]">ETB {dish.priceETB}</span>
              <AddToCartButton dish={dish} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
