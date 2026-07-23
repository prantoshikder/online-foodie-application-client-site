"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Search, TrendingUp, X } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import RestaurantCard from "@/components/RestaurantCard";

type Category = {
  emoji: string;
  label: string;
  places: number;
  bg: string;
  trending?: boolean;
};

const categories: Category[] = [
  { emoji: "🍕", label: "Pizza", places: 128, bg: "#FFF3ED", trending: true },
  { emoji: "🍔", label: "Burger", places: 96, bg: "#FFF8ED", trending: true },
  { emoji: "🍛", label: "Biryani", places: 84, bg: "#FFF3ED" },
  { emoji: "🥡", label: "Chinese", places: 112, bg: "#FFEEF0" },
  { emoji: "🎂", label: "Desserts", places: 74, bg: "#FFEEF0" },
  { emoji: "🥤", label: "Beverages", places: 63, bg: "#F0F0FF" },
  { emoji: "🥗", label: "Healthy", places: 58, bg: "#F0FFF4", trending: true },
  { emoji: "🍣", label: "Sushi", places: 41, bg: "#FFF1F2" },
  { emoji: "🌮", label: "Mexican", places: 52, bg: "#FFF7ED" },
  { emoji: "🍜", label: "Noodles", places: 69, bg: "#FEF3C7" },
  { emoji: "🍗", label: "Fried Chicken", places: 88, bg: "#FFF3ED" },
  { emoji: "🥪", label: "Sandwich", places: 47, bg: "#F0FDF4" },
  { emoji: "🍩", label: "Bakery", places: 55, bg: "#FDF2F8" },
  { emoji: "☕", label: "Coffee", places: 61, bg: "#F5F3FF" },
  { emoji: "🍦", label: "Ice Cream", places: 39, bg: "#EFF6FF" },
  { emoji: "🦐", label: "Seafood", places: 33, bg: "#ECFEFF" },
  { emoji: "🍝", label: "Pasta", places: 44, bg: "#FFF7ED" },
  { emoji: "🥘", label: "South Indian", places: 72, bg: "#FFFBEB" },
  { emoji: "🫓", label: "North Indian", places: 91, bg: "#FEF2F2" },
  { emoji: "🍳", label: "Breakfast", places: 66, bg: "#FFFBEB" },
  { emoji: "🍢", label: "Street Food", places: 78, bg: "#FFF1F2" },
  { emoji: "🥟", label: "Momos", places: 57, bg: "#F0FDFA" },
  { emoji: "🧋", label: "Bubble Tea", places: 29, bg: "#FAF5FF" },
  { emoji: "🍲", label: "Thai", places: 36, bg: "#F0FFF4" },
];

/* ── Mock restaurant generator (deterministic, no backend) ──────────────── */

const PREFIX = ["Royal", "Urban", "Golden", "Fresh", "Street", "Cozy", "Grand", "Hungry"];
const SUFFIX = ["Kitchen", "House", "Hub", "Corner", "Junction", "Express", "Factory", "Bistro"];
const TIMES = ["20–30 min", "25–35 min", "30–40 min", "30–45 min", "15–25 min", "35–45 min"];
const RATINGS = [4.7, 4.5, 4.8, 4.4, 4.6, 4.3, 4.9, 4.2];
const DISCOUNTS = ["20% OFF", "15% OFF", "10% OFF", "25% OFF", "Free Delivery", "30% OFF"];
const PRICES = ["$", "$$", "$$", "$"];
const FOOD_IMAGES = [
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80",
  "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80",
  "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
];

function restaurantsFor(category: Category) {
  const seed = category.label.length + category.label.charCodeAt(0);
  const count = 8;
  return Array.from({ length: count }, (_, i) => {
    const p = (seed + i) % PREFIX.length;
    const s = (seed + i * 3) % SUFFIX.length;
    return {
      name: `${PREFIX[p]} ${category.label} ${SUFFIX[s]}`,
      cuisine: `${category.label} • ${category.places - i} places nearby`,
      rating: RATINGS[(seed + i) % RATINGS.length],
      time: TIMES[(seed + i) % TIMES.length],
      price: PRICES[(seed + i) % PRICES.length],
      discount: DISCOUNTS[(seed + i) % DISCOUNTS.length],
      image: FOOD_IMAGES[(seed + i) % FOOD_IMAGES.length],
    };
  });
}

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function AllCategoryContainer() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // The selected category lives in the URL (`?category=Pizza`) so it survives a
  // page refresh and stays shareable / back-button friendly.
  const selectedLabel = searchParams.get("category");
  const selected = selectedLabel
    ? (categories.find((c) => c.label === selectedLabel) ?? null)
    : null;

  const goToCategory = (label: string | null) => {
    setQuery("");
    router.push(label ? `${pathname}?category=${encodeURIComponent(label)}` : pathname);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories.filter((c) => c.label.toLowerCase().includes(q));
  }, [query]);

  const totalPlaces = useMemo(() => categories.reduce((sum, c) => sum + c.places, 0), []);
  const results = useMemo(() => (selected ? restaurantsFor(selected) : []), [selected]);

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto">
        {/* Title bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {selected ? (
              <button
                onClick={() => goToCategory(null)}
                className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
                aria-label="Back to all categories"
              >
                <ArrowLeft size={18} className="text-gray-600" />
              </button>
            ) : (
              <Link
                href="/"
                className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
                aria-label="Back to home"
              >
                <ArrowLeft size={18} className="text-gray-600" />
              </Link>
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {selected ? `${selected.emoji} ${selected.label}` : "All Categories"}
              </h1>
              <p className="text-gray-400 text-sm">
                {selected
                  ? `${selected.places} places serving ${selected.label}`
                  : `${categories.length} cuisines · ${totalPlaces.toLocaleString()}+ places to explore`}
              </p>
            </div>
          </div>
        </div>

        {selected ? (
          /* ── Selected category: results within the same page ── */
          <>
            {/* Quick-switch chips */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-5">
              <button
                onClick={() => goToCategory(null)}
                className="flex items-center gap-1 shrink-0 px-3 py-2 rounded-xl text-sm font-semibold bg-white border border-gray-200 text-gray-500 hover:border-gray-300 transition-colors"
              >
                <X size={14} />
                All
              </button>
              {categories.map((c) => {
                const active = c.label === selected.label;
                return (
                  <button
                    key={c.label}
                    onClick={() => goToCategory(c.label)}
                    className={`shrink-0 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                      active
                        ? "bg-orange-500 text-white"
                        : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-500"
                    }`}
                  >
                    <span className="mr-1">{c.emoji}</span>
                    {c.label}
                  </button>
                );
              })}
            </div>

            {/* Results grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {results.map((r) => (
                <RestaurantCard key={r.name} restaurant={r} />
              ))}
            </div>
          </>
        ) : (
          /* ── Default: searchable category grid ── */
          <>
            <div className="relative mb-6">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a category — pizza, sushi, coffee…"
                className="w-full bg-white border border-gray-100 rounded-2xl pl-11 pr-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 shadow-sm focus:outline-none focus:border-orange-300 transition-colors"
              />
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 text-gray-400">
                <div className="text-4xl mb-3">🍽️</div>
                <p className="text-sm">
                  No category matches <span className="font-semibold text-gray-600">“{query}”</span>
                  .
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {filtered.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => goToCategory(cat.label)}
                    className="group relative bg-white rounded-2xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col items-center text-center"
                  >
                    {cat.trending && (
                      <span className="absolute top-2.5 right-2.5 flex items-center gap-0.5 bg-orange-50 text-orange-500 text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                        <TrendingUp size={10} />
                        Hot
                      </span>
                    )}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-3 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: cat.bg }}
                    >
                      {cat.emoji}
                    </div>
                    <div className="font-bold text-gray-900 text-sm">{cat.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{cat.places} places</div>
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
