import DishList from "../../components/menu/DishList";
import FilterShell from "../../components/menu/FilterShell";
import { getDishes } from "../../lib/menu";

export default async function MenuPage() {
  const dishes = await getDishes();

  return (
    <main className="min-h-screen bg-[#fffaf7] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b53a29]">
            Addis Ababa • Culinary Heritage
          </p>
          <h1 className="mt-2 font-serif text-4xl font-extrabold tracking-tight text-[#8f2116]">
            Our Complete Culinary Heritage
          </h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#6e5d57]">
            Every dish is prepared daily from scratch using traditional spices,
            highland ingredients and Ethiopian hospitality.
          </p>
        </div>

        <FilterShell dishes={dishes}>
          <DishList dishes={dishes} />
        </FilterShell>
      </div>
    </main>
  );
}
