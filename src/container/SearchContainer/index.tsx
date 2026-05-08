"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Image from "next/image";
import {
  Search,
  X,
  Bell,
  ChevronDown,
  ChevronRight,
  Heart,
  Star,
  SlidersHorizontal,
} from "lucide-react";
import UserMenu from "@/components/UserMenu";

/* ─── DATA ─────────────────────────────────────────────── */

const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    restaurant: "Pizza Palace",
    price: "$12.99",
    rating: 4.6,
    time: "30–40 min",
    bestseller: false,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&q=80",
  },
  {
    id: 2,
    name: "Farmhouse Pizza",
    restaurant: "Cheese Burst",
    price: "$14.49",
    rating: 4.5,
    time: "25–35 min",
    bestseller: false,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80",
  },
  {
    id: 3,
    name: "Pepperoni Pizza",
    restaurant: "Pizza Palace",
    price: "$13.49",
    rating: 4.7,
    time: "30–40 min",
    bestseller: true,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&q=80",
  },
  {
    id: 4,
    name: "Veggie Supreme Pizza",
    restaurant: "Slice City",
    price: "$12.49",
    rating: 4.4,
    time: "25–35 min",
    bestseller: false,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&q=80",
  },
  {
    id: 5,
    name: "BBQ Chicken Pizza",
    restaurant: "Pizza Palace",
    price: "$14.99",
    rating: 4.6,
    time: "30–40 min",
    bestseller: false,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&q=80",
  },
];

const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian, Pizza",
    rating: 4.6,
    time: "30–40 min",
    delivery: "$2.49 delivery",
    logo: "🍕",
    bg: "bg-red-100",
  },
  {
    id: 2,
    name: "Cheese Burst",
    cuisine: "Pizza, Fast Food",
    rating: 4.5,
    time: "25–35 min",
    delivery: "$2.99 delivery",
    logo: "🧀",
    bg: "bg-yellow-100",
  },
  {
    id: 3,
    name: "Slice City",
    cuisine: "Pizza, Italian",
    rating: 4.4,
    time: "20–30 min",
    delivery: "$1.99 delivery",
    logo: "🍕",
    bg: "bg-orange-100",
  },
  {
    id: 4,
    name: "Oven Story Pizza",
    cuisine: "Pizza, Italian",
    rating: 4.6,
    time: "30–40 min",
    delivery: "$2.49 delivery",
    logo: "🔥",
    bg: "bg-amber-100",
  },
];

const collections = [
  {
    id: 1,
    name: "Best Pizza In Town",
    items: 25,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
  },
  {
    id: 2,
    name: "Cheese Lovers Collection",
    items: 18,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  },
  {
    id: 3,
    name: "Veg Pizza Delights",
    items: 22,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
  },
  {
    id: 4,
    name: "Party Pizza Combo",
    items: 15,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
  },
];

const cuisineOptions = ["Italian", "Fast Food", "American", "Mexican", "Others"];
const priceOptions = [
  { label: "Under $10", symbol: "$" },
  { label: "$10 - $20", symbol: "" },
  { label: "$20 - $30", symbol: "$$$" },
  { label: "Above $30", symbol: "$$$$" },
];
const ratingOptions = ["4.0 & above", "3.5 & above", "3.0 & above"];
const timeOptions = ["Under 30 min", "30 - 45 min", "45 - 60 min", "Above 60 min"];
const resultTabs = [
  { label: "All", count: 126 },
  { label: "Dishes", count: 98 },
  { label: "Restaurants", count: 20 },
  { label: "Collections", count: 8 },
];

/* ─── COMPONENTS ─────────────────────────────────────────── */

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-100 pb-4 mb-4 last:border-0 last:mb-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between mb-3"
      >
        <span className="font-bold text-gray-900 text-sm">{title}</span>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && children}
    </div>
  );
}

function OrangeCheckbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`w-4 h-4 rounded flex items-center justify-center border-2 shrink-0 transition-colors ${
        checked ? "bg-orange-500 border-orange-500" : "border-gray-300 bg-white"
      }`}
    >
      {checked && (
        <svg viewBox="0 0 10 8" className="w-2.5 h-2.5" fill="none">
          <path
            d="M1 4l2.5 2.5L9 1"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

function OrangeRadio({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`w-4 h-4 rounded-full flex items-center justify-center border-2 shrink-0 transition-colors ${
        checked ? "border-orange-500" : "border-gray-300"
      }`}
    >
      {checked && <span className="w-2 h-2 rounded-full bg-orange-500" />}
    </button>
  );
}

/* ─── PAGE ──────────────────────────────────────────────── */

export default function SearchContainer() {
  const [query, setQuery] = useState("Pizza");
  const [activeTab, setActiveTab] = useState("All");
  const [likedDishes, setLikedDishes] = useState<number[]>([]);

  // Filter state
  const [catDishes, setCatDishes] = useState(true);
  const [catRestaurants, setCatRestaurants] = useState(false);
  const [catCollections, setCatCollections] = useState(false);
  const [cuisines, setCuisines] = useState<string[]>(["Italian", "Fast Food"]);
  const [priceIdx, setPriceIdx] = useState<number | null>(1);
  const [ratingIdx, setRatingIdx] = useState<number | null>(0);
  const [timeIdx, setTimeIdx] = useState<number | null>(1);
  const [showMoreCuisine, setShowMoreCuisine] = useState(false);

  const toggleCuisine = (c: string) =>
    setCuisines((p) => (p.includes(c) ? p.filter((x) => x !== c) : [...p, c]));
  const toggleLike = (id: number) =>
    setLikedDishes((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const visibleCuisines = showMoreCuisine ? cuisineOptions : cuisineOptions.slice(0, 4);

  const showDishes = activeTab === "All" || activeTab === "Dishes";
  const showRestaurants = activeTab === "All" || activeTab === "Restaurants";
  const showCollections = activeTab === "All" || activeTab === "Collections";

  return (
    <DashboardLayout>
      <div className="flex gap-5 min-h-full">
        {/* Center */}
        <div className="flex-1 min-w-0">
          {/* Search bar + user */}
          <div className="flex items-center gap-4 mb-5">
            <div className="flex-1 relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for dishes, restaurants..."
                className="w-full bg-white border border-gray-200 rounded-2xl pl-11 pr-10 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 shadow-sm"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <X size={16} className="text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
            <button className="relative w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 shrink-0">
              <Bell size={18} className="text-gray-600" />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-orange-500 rounded-full" />
            </button>
            <UserMenu />
          </div>

          {/* Results header */}
          {query && (
            <div className="mb-4">
              <h1 className="text-xl font-bold text-gray-900">
                Search results for &quot;<span className="text-gray-700">{query}</span>&quot;
              </h1>
              <p className="text-gray-400 text-sm mt-0.5">126 results found</p>
            </div>
          )}

          {/* Type tabs + sort */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            {resultTabs.map(({ label, count }) => (
              <button
                key={label}
                onClick={() => setActiveTab(label)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
                  activeTab === label
                    ? "border-orange-500 bg-white text-orange-500"
                    : "border-gray-200 text-gray-500 bg-white hover:border-orange-300"
                }`}
              >
                {label} ({count})
              </button>
            ))}
            <div className="ml-auto flex items-center gap-2 text-sm text-gray-500">
              <span>Sort by</span>
              <button className="flex items-center gap-1 border border-gray-200 bg-white rounded-xl px-3 py-1.5 font-semibold text-gray-700 hover:bg-gray-50">
                Relevance <ChevronDown size={13} />
              </button>
            </div>
          </div>

          {/* ── DISHES ── */}
          {showDishes && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900 text-base">Dishes</h2>
                <button className="text-orange-500 text-sm font-semibold hover:underline flex items-center gap-1">
                  View all <SlidersHorizontal size={13} />
                </button>
              </div>
              <div className="relative">
                <div className="flex gap-3 overflow-x-auto pb-1 pr-10">
                  {dishes.map((dish) => (
                    <div
                      key={dish.id}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow shrink-0 w-44 cursor-pointer"
                    >
                      <div className="relative h-32">
                        <Image
                          src={dish.image}
                          alt={dish.name}
                          fill
                          className="object-cover"
                          sizes="176px"
                        />
                        {dish.bestseller && (
                          <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-lg">
                            Bestseller
                          </span>
                        )}
                        <button
                          onClick={() => toggleLike(dish.id)}
                          className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm"
                        >
                          <Heart
                            size={13}
                            className={
                              likedDishes.includes(dish.id)
                                ? "fill-red-500 text-red-500"
                                : "text-gray-300"
                            }
                          />
                        </button>
                      </div>
                      <div className="p-3">
                        <div className="font-bold text-gray-900 text-xs leading-tight mb-0.5 truncate">
                          {dish.name}
                        </div>
                        <div className="text-gray-400 text-[11px] mb-1">{dish.restaurant}</div>
                        <div className="font-bold text-gray-800 text-sm mb-1">{dish.price}</div>
                        <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                          <Star size={10} className="fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold text-gray-700">{dish.rating}</span>
                          <span className="text-gray-300">•</span>
                          <span>{dish.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="absolute right-0 top-12 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 hover:bg-gray-50">
                  <ChevronRight size={18} className="text-gray-500" />
                </button>
              </div>
            </div>
          )}

          {/* ── RESTAURANTS ── */}
          {showRestaurants && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900 text-base">Restaurants</h2>
                <button className="text-orange-500 text-sm font-semibold hover:underline">
                  View all
                </button>
              </div>
              <div className="relative">
                <div className="flex gap-3 overflow-x-auto pb-1 pr-10">
                  {restaurants.map((r) => (
                    <div
                      key={r.id}
                      className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow shrink-0 w-48 cursor-pointer"
                    >
                      <div
                        className={`w-14 h-14 ${r.bg} rounded-2xl flex items-center justify-center text-2xl mb-3 mx-auto`}
                      >
                        {r.logo}
                      </div>
                      <div className="font-bold text-gray-900 text-sm text-center mb-0.5">
                        {r.name}
                      </div>
                      <div className="text-gray-400 text-xs text-center mb-2">{r.cuisine}</div>
                      <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 mb-1">
                        <Star size={10} className="fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-700">{r.rating}</span>
                        <span className="text-gray-300">•</span>
                        <span>{r.time}</span>
                      </div>
                      <div className="text-gray-400 text-[11px] text-center">{r.delivery}</div>
                    </div>
                  ))}
                </div>
                <button className="absolute right-0 top-10 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 hover:bg-gray-50">
                  <ChevronRight size={18} className="text-gray-500" />
                </button>
              </div>
            </div>
          )}

          {/* ── COLLECTIONS ── */}
          {showCollections && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900 text-base">Collections</h2>
                <button className="text-orange-500 text-sm font-semibold hover:underline">
                  View all
                </button>
              </div>
              <div className="relative">
                <div className="flex gap-3 overflow-x-auto pb-1 pr-10">
                  {collections.map((c) => (
                    <div
                      key={c.id}
                      className="relative rounded-2xl overflow-hidden shrink-0 w-52 h-36 cursor-pointer group"
                    >
                      <Image
                        src={c.image}
                        alt={c.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="208px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className="text-white font-bold text-sm leading-tight">{c.name}</div>
                        <div className="text-white/80 text-xs mt-0.5">{c.items} Items</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="absolute right-0 top-12 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 hover:bg-gray-50">
                  <ChevronRight size={18} className="text-gray-500" />
                </button>
              </div>
            </div>
          )}

          {/* Empty state */}
          {!query && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <div className="font-bold text-gray-600 text-lg mb-1">Search for anything</div>
              <div className="text-gray-400 text-sm">
                Try &quot;Pizza&quot;, &quot;Burger&quot;, &quot;Biryani&quot;...
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT: FILTERS ── */}
        <div className="w-56 shrink-0">
          <div className="bg-white rounded-2xl p-4 shadow-sm sticky top-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-base">Filters</h3>
              <button
                onClick={() => {
                  setCatDishes(false);
                  setCatRestaurants(false);
                  setCatCollections(false);
                  setCuisines([]);
                  setPriceIdx(null);
                  setRatingIdx(null);
                  setTimeIdx(null);
                }}
                className="text-orange-500 text-xs font-semibold hover:underline"
              >
                Clear all
              </button>
            </div>

            {/* Category */}
            <FilterSection title="Category">
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Dishes", checked: catDishes, toggle: () => setCatDishes(!catDishes) },
                  {
                    label: "Restaurants",
                    checked: catRestaurants,
                    toggle: () => setCatRestaurants(!catRestaurants),
                  },
                  {
                    label: "Collections",
                    checked: catCollections,
                    toggle: () => setCatCollections(!catCollections),
                  },
                ].map(({ label, checked, toggle }) => (
                  <label key={label} className="flex items-center gap-2.5 cursor-pointer">
                    <OrangeCheckbox checked={checked} onChange={toggle} />
                    <span className="text-sm text-gray-700">{label}</span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Cuisine */}
            <FilterSection title="Cuisine">
              <div className="flex flex-col gap-2.5">
                {visibleCuisines.map((c) => (
                  <label key={c} className="flex items-center gap-2.5 cursor-pointer">
                    <OrangeCheckbox
                      checked={cuisines.includes(c)}
                      onChange={() => toggleCuisine(c)}
                    />
                    <span className="text-sm text-gray-700">{c}</span>
                  </label>
                ))}
                <button
                  onClick={() => setShowMoreCuisine(!showMoreCuisine)}
                  className="text-orange-500 text-xs font-semibold text-left mt-1 hover:underline"
                >
                  {showMoreCuisine ? "− View less" : "+ View more"}
                </button>
              </div>
            </FilterSection>

            {/* Price Range */}
            <FilterSection title="Price Range">
              <div className="flex flex-col gap-2.5">
                {priceOptions.map(({ label, symbol }, i) => (
                  <label key={label} className="flex items-center gap-2.5 cursor-pointer">
                    <OrangeCheckbox
                      checked={priceIdx === i}
                      onChange={() => setPriceIdx(priceIdx === i ? null : i)}
                    />
                    <span className="text-sm text-gray-700 flex items-center gap-1.5">
                      {symbol && (
                        <span className="text-gray-400 font-medium text-xs">{symbol}</span>
                      )}
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Rating */}
            <FilterSection title="Rating">
              <div className="flex flex-col gap-2.5">
                {ratingOptions.map((r, i) => (
                  <label key={r} className="flex items-center gap-2.5 cursor-pointer">
                    <OrangeCheckbox
                      checked={ratingIdx === i}
                      onChange={() => setRatingIdx(ratingIdx === i ? null : i)}
                    />
                    <span className="flex items-center gap-1 text-sm text-gray-700">
                      <Star size={11} className="fill-yellow-400 text-yellow-400" />
                      <Star size={11} className="fill-yellow-400 text-yellow-400" />
                      {r}
                    </span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Delivery Time */}
            <FilterSection title="Delivery Time">
              <div className="flex flex-col gap-2.5">
                {timeOptions.map((t, i) => (
                  <label key={t} className="flex items-center gap-2.5 cursor-pointer">
                    <OrangeRadio checked={timeIdx === i} onChange={() => setTimeIdx(i)} />
                    <span className="text-sm text-gray-700">{t}</span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Apply */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors mt-2 text-sm">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
