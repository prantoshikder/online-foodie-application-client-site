"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Bell, ChevronDown, ChevronRight, Heart, MoreVertical, Plus, Star } from "lucide-react";
import AuthArea from "@/components/AuthArea";
import Image from "next/image";

const tabs = ["Restaurants", "Dishes"];

const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian, Pizza",
    rating: 4.6,
    time: "30–40 min",
    delivery: "$2.49 delivery",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=60&q=80",
  },
  {
    id: 2,
    name: "Burger House",
    cuisine: "American, Burgers",
    rating: 4.5,
    time: "25–35 min",
    delivery: "$1.99 delivery",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=60&q=80",
  },
  {
    id: 3,
    name: "Biryani King",
    cuisine: "Indian, Biryani",
    rating: 4.7,
    time: "35–45 min",
    delivery: "$2.99 delivery",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80",
    logo: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=60&q=80",
  },
  {
    id: 4,
    name: "Wok Express",
    cuisine: "Asian, Chinese",
    rating: 4.4,
    time: "20–30 min",
    delivery: "$1.49 delivery",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80",
    logo: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=60&q=80",
  },
];

const dishes = [
  {
    id: 1,
    name: "Margherita Pizza",
    restaurant: "Pizza Palace",
    desc: "Classic delight with 100% real mozzarella cheese.",
    price: "$12.99",
    veg: true,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80",
  },
  {
    id: 2,
    name: "Cheese Burst Burger",
    restaurant: "Burger House",
    desc: "Juicy grilled patty with cheese burst and special sauce.",
    price: "$9.49",
    veg: false,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    restaurant: "Biryani King",
    desc: "Aromatic basmati rice cooked with tender chicken and authentic spices.",
    price: "$10.49",
    veg: false,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=300&q=80",
  },
];

const collections = [
  {
    name: "Weekend Treats",
    count: 12,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=80&q=80",
  },
  {
    name: "Healthy Choices",
    count: 8,
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=80&q=80",
  },
  {
    name: "Late Night Cravings",
    count: 6,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&q=80",
  },
];

const suggestions = [
  {
    name: "Peri Peri Fries",
    restaurant: "Wok Express",
    price: "$4.49",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=80&q=80",
  },
  {
    name: "Veggie Supreme Pizza",
    restaurant: "Pizza Palace",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=80&q=80",
  },
  {
    name: "Chocolate Lava Cake",
    restaurant: "Dessert Corner",
    price: "$6.49",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=80&q=80",
  },
];

export default function FavoritesContainer() {
  const [activeTab, setActiveTab] = useState("Restaurants");
  const [likedRestaurants, setLikedRestaurants] = useState<number[]>([1, 2, 3, 4]);
  const [likedDishes, setLikedDishes] = useState<number[]>([1, 2, 3]);

  const toggleRestaurant = (id: number) =>
    setLikedRestaurants((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  const toggleDish = (id: number) =>
    setLikedDishes((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <DashboardLayout>
      <div className="flex gap-5 min-h-full">
        {/* Center content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between mb-5">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Favorites</h1>
              <p className="text-gray-400 text-sm mt-0.5">
                Save your favorite restaurants and dishes for quick access.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                <Bell size={18} className="text-gray-600" />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-orange-500 rounded-full" />
              </button>
              <AuthArea />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 border-b border-gray-200 mb-6">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`pb-3 text-sm font-semibold transition-colors relative ${
                  activeTab === t ? "text-orange-500" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {t}
                {activeTab === t && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Favorite Restaurants */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900 text-base">Favorite Restaurants</h2>
              <button className="text-orange-500 text-sm font-semibold hover:underline">
                View all
              </button>
            </div>
            <div className="relative">
              <div className="flex gap-4 overflow-x-auto pb-2 pr-10">
                {restaurants.map((r) => (
                  <div
                    key={r.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow shrink-0 w-52"
                  >
                    <div className="relative h-36">
                      <Image
                        src={r.image}
                        alt={r.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <button
                        onClick={() => toggleRestaurant(r.id)}
                        className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
                      >
                        <Heart
                          size={15}
                          className={
                            likedRestaurants.includes(r.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-300"
                          }
                        />
                      </button>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-8 h-8 rounded-lg overflow-hidden bg-orange-100 shrink-0">
                          <Image
                            src={r.logo}
                            alt={r.name}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-xs leading-tight">
                            {r.name}
                          </div>
                          <div className="text-gray-400 text-[11px]">{r.cuisine}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1">
                        <Star size={11} className="fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-gray-700">{r.rating}</span>
                        <span className="text-gray-300">•</span>
                        <span>{r.time}</span>
                      </div>
                      <div className="text-gray-400 text-xs">{r.delivery}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="absolute right-0 top-1/2 -translate-y-8 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 hover:bg-gray-50">
                <ChevronRight size={18} className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* Favorite Dishes */}
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-4">Favorite Dishes</h2>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-50">
              {dishes.map((dish) => (
                <div key={dish.id} className="flex items-center gap-4 p-4">
                  <div className="relative shrink-0">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      width={80}
                      height={80}
                      className="rounded-xl object-cover"
                    />
                    <button
                      onClick={() => toggleDish(dish.id)}
                      className="absolute top-1.5 right-1.5 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm"
                    >
                      <Heart
                        size={12}
                        className={
                          likedDishes.includes(dish.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-300"
                        }
                      />
                    </button>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-900 text-sm">{dish.name}</div>
                    <div className="text-gray-400 text-xs mb-1">{dish.restaurant}</div>
                    <div className="text-gray-400 text-xs mb-2 leading-snug line-clamp-1">
                      {dish.desc}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 text-sm">{dish.price}</span>
                      {dish.veg && (
                        <span className="bg-green-100 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-md border border-green-200">
                          Veg
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="border border-orange-400 text-orange-500 text-xs font-bold px-4 py-2 rounded-xl hover:bg-orange-50 transition-colors whitespace-nowrap">
                      Add to Order
                    </button>
                    <button className="text-gray-300 hover:text-gray-500">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center gap-2 py-4">
                <button className="flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-gray-700">
                  View all favorite dishes
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-64 shrink-0 flex flex-col gap-4">
          {/* My Collections */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-sm">My Collections</h3>
              <button className="text-orange-500 text-xs font-semibold hover:underline">
                View all
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {collections.map((c) => (
                <button
                  key={c.name}
                  className="flex items-center gap-3 hover:bg-gray-50 rounded-xl p-1.5 -mx-1.5 transition-colors w-full text-left"
                >
                  <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-orange-50">
                    <Image
                      src={c.image}
                      alt={c.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 text-xs">{c.name}</div>
                    <div className="text-gray-400 text-[11px]">{c.count} items</div>
                  </div>
                  <ChevronRight size={15} className="text-gray-300 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          {/* You May Also Like */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 text-sm mb-3">You May Also Like</h3>
            <div className="flex flex-col gap-3">
              {suggestions.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 text-xs truncate">{item.name}</div>
                    <div className="text-gray-400 text-[11px]">{item.restaurant}</div>
                    <div className="font-bold text-gray-800 text-xs mt-0.5">{item.price}</div>
                  </div>
                  <button className="w-7 h-7 bg-orange-500 hover:bg-orange-600 rounded-lg flex items-center justify-center shrink-0 transition-colors">
                    <Plus size={14} className="text-white" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Love it? Save it! */}
          <div className="bg-orange-50 rounded-2xl p-5 flex flex-col items-start gap-3">
            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center">
              <Heart size={26} className="fill-white text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-900 text-sm mb-1">Love it? Save it!</div>
              <div className="text-gray-500 text-xs leading-relaxed">
                Add your favorite restaurants and dishes to access them easily anytime.
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
