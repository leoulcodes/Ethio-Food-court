import Link from "next/link";
import { getDishImage } from "../../lib/menu-images";
import AddToCartButton from "../cart/AddToCartButton";

export default function DishCard({ dish }) {
  return (
    <article
      data-menu-card
      data-category={dish.category}
      data-search={`${dish.nameEn} ${dish.nameAm} ${dish.description} ${dish.slug}`.toLowerCase()}
      className="group overflow-hidden rounded-2xl border border-[#eaded9] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <Link href={`/menu/${dish.slug}`}>
        <img
          src={getDishImage(dish.slug)}
          alt={dish.nameEn}
          className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/menu/${dish.slug}`}>
              <h2 className="font-serif text-xl font-bold text-[#8f2116]">{dish.nameEn}</h2>
            </Link>
            <p className="text-sm text-brand-muted">{dish.nameAm}</p>
          </div>
          <span className="font-bold text-[#1c3d2b]">ETB {dish.priceETB}</span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6e5d57]">{dish.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="rounded-full bg-[#fff0e8] px-3 py-1 text-xs text-[#80543e]">{dish.spiceLevel}</span>
          <AddToCartButton dish={dish} />
        </div>
      </div>
    </article>
  );
}
