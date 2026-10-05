 "use client";

import { useEffect, useMemo, useState } from "react";

export default function FilterShell({ children, dishes }) {
  const [activeCategory, setActiveCategory] = useState("All Dishes");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = useMemo(
    () => ["All Dishes", ...new Set(dishes.map((dish) => dish.category))],
    [dishes]
  );

  useEffect(() => {
    const cards = document.querySelectorAll("[data-menu-card]");
    const search = searchTerm.trim().toLowerCase();

    cards.forEach((card) => {
      const category = card.dataset.category;
      const searchableText = card.dataset.search ?? "";

      const matchesCategory =
        activeCategory === "All Dishes" || category === activeCategory;
      const matchesSearch = !search || searchableText.includes(search);

      card.hidden = !(matchesCategory && matchesSearch);
    });
  }, [activeCategory, searchTerm]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 rounded-xl border border-[#eaded9] bg-white p-3 lg:flex-row lg:items-center">
        <div className="flex-1">
          <input
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search dishes..."
            className="w-full rounded-lg border border-[#eee0db] bg-[#fffaf8] px-4 py-3 text-sm outline-none focus:border-[#b53a29] focus:ring-2 focus:ring-[#b53a29]/10"
            aria-label="Search dishes"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-3 py-2 text-xs font-semibold ${
                activeCategory === category
                  ? "bg-[#94381c] text-white"
                  : "bg-[#f4ece1] text-[#6e5d57]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {children}
    </div>
  );
}
