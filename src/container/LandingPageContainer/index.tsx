"use client";

import DashboardLayout from "@/components/DashboardLayout";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import { Bike, Copy, Crown, Heart, Star } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

/* ─── DATA ──────────────────────────────────────────────── */

const categories = [
  { emoji: "🍕", label: "Pizza", bg: "#FFF3ED" },
  { emoji: "🍔", label: "Burger", bg: "#FFF8ED" },
  { emoji: "🍛", label: "Biryani", bg: "#FFF3ED" },
  { emoji: "🥡", label: "Chinese", bg: "#FFEEF0" },
  { emoji: "🎂", label: "Desserts", bg: "#FFEEF0" },
  { emoji: "🥤", label: "Beverages", bg: "#F0F0FF" },
  { emoji: "🥗", label: "Healthy", bg: "#F0FFF4" },
];

const restaurants = [
  {
    id: 1,
    name: "Cheesy Bites",
    cuisine: "Pizza, Italian",
    rating: 4.6,
    time: "30–40 min",
    price: "$$",
    discount: "20% OFF",
    badgeColor: "bg-green-500",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  },
  {
    id: 2,
    name: "Burger House",
    cuisine: "Burger, American",
    rating: 4.5,
    time: "25–35 min",
    price: "$$",
    discount: "15% OFF",
    badgeColor: "bg-green-500",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    id: 3,
    name: "Biryani King",
    cuisine: "Biryani, Indian",
    rating: 4.7,
    time: "30–45 min",
    price: "$$",
    discount: "10% OFF",
    badgeColor: "bg-green-500",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80",
  },
  {
    id: 4,
    name: "Wok Express",
    cuisine: "Chinese, Asian",
    rating: 4.4,
    time: "20–30 min",
    price: "$",
    discount: "15% OFF",
    badgeColor: "bg-green-500",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80",
  },
];

const orderItems = [
  {
    name: "Margherita Pizza",
    size: "1 x Regular",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=80&q=80",
  },
  {
    name: "Classic Veg Burger",
    size: "1 x Regular",
    price: 8.49,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=80&q=80",
  },
];

const exclusiveOffers = [
  {
    id: 1,
    icon: "🏷",
    bg: "bg-orange-100",
    color: "text-orange-500",
    title: "Flat 30% OFF",
    desc: "Up to $10 on orders above $20",
    code: "SAVE30",
  },
  {
    id: 2,
    icon: "🛵",
    bg: "bg-green-100",
    color: "text-green-600",
    title: "Free Delivery",
    desc: "On orders above $15",
    code: "FREEDEL",
  },
  {
    id: 3,
    icon: "💳",
    bg: "bg-red-100",
    color: "text-red-500",
    title: "20% Cashback",
    desc: "On online payments",
    code: "PAY20",
  },
];

const subtotal = orderItems.reduce((s, i) => s + i.price, 0);
const delivery = 2.49;
const total = subtotal + delivery;

export default function LandingPageContainer() {
  const [likedRest, setLikedRest] = useState<number[]>([]);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const toggleLike = (id: number) =>
    setLikedRest((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <DashboardLayout>
      <div className="flex gap-5 min-h-full">
        {/* ── MAIN SCROLL ── */}
        <main className="flex-1 min-w-0">
          <Header />
          {/* Hero Slider */}
          <HeroSlider />

          {/* Top Categories */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900 text-base">Top Categories</h2>
              <button className="text-orange-500 text-sm font-semibold hover:underline">
                View all
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-1">
              {categories.map(({ emoji, label, bg }) => (
                <button key={label} className="flex flex-col items-center gap-2 group shrink-0">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-105"
                    style={{ backgroundColor: bg }}
                  >
                    {emoji}
                  </div>
                  <span className="text-xs font-medium text-gray-600">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Popular Restaurants */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900 text-base">Popular Restaurants</h2>
              <button className="text-orange-500 text-sm font-semibold hover:underline">
                View all
              </button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {restaurants.map((r) => (
                <div
                  key={r.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="relative h-32">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <span
                      className={`absolute top-2.5 left-2.5 ${r.badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-md`}
                    >
                      {r.discount}
                    </span>
                    <button
                      onClick={() => toggleLike(r.id)}
                      className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm"
                    >
                      <Heart
                        size={13}
                        className={
                          likedRest.includes(r.id) ? "fill-red-500 text-red-500" : "text-gray-300"
                        }
                      />
                    </button>
                  </div>
                  <div className="p-3">
                    <div className="font-bold text-gray-900 text-sm mb-0.5">{r.name}</div>
                    <div className="text-gray-400 text-xs mb-2">{r.cuisine}</div>
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                      <Star size={11} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-gray-700">{r.rating}</span>
                      <span className="text-gray-300">•</span>
                      <span>{r.time}</span>
                      <span className="font-semibold text-gray-600 ml-auto">{r.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Foodie Pro */}
          <div className="flex items-center justify-between bg-orange-50 rounded-2xl px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                <Crown size={18} className="text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">Join Foodie Pro</div>
                <div className="text-gray-500 text-xs">
                  Unlock exclusive offers, free delivery &amp; more!
                </div>
              </div>
            </div>
            <button className="text-orange-500 font-bold text-sm hover:underline shrink-0">
              Explore Pro
            </button>
          </div>
        </main>

        {/* ── RIGHT PANEL ── */}
        <div className="w-64 shrink-0 flex flex-col gap-4 overflow-y-auto">
          {/* Your Order */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-base">Your Order</h3>
              <button className="text-orange-500 text-xs font-semibold hover:underline">
                View all
              </button>
            </div>

            <div className="flex flex-col gap-3 mb-4">
              {orderItems.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={44}
                    height={44}
                    className="rounded-xl object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 text-xs truncate">{item.name}</div>
                    <div className="text-gray-400 text-[11px]">{item.size}</div>
                  </div>
                  <span className="font-bold text-gray-800 text-xs shrink-0">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-3 flex flex-col gap-1.5 mb-4">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Delivery Fee</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between font-bold text-gray-900 text-sm mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm">
              <Bike size={16} />
              Track Order
            </button>
          </div>

          {/* Exclusive Offers */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-base">Exclusive Offers</h3>
              <button className="text-orange-500 text-xs font-semibold hover:underline">
                View all
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {exclusiveOffers.map((o) => (
                <div key={o.id} className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${o.bg} rounded-xl flex items-center justify-center text-lg shrink-0`}
                  >
                    {o.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 text-xs">{o.title}</div>
                    <div className="text-gray-400 text-[11px] truncate">{o.desc}</div>
                    <div className={`text-[11px] font-bold ${o.color} mt-0.5`}>{o.code}</div>
                  </div>
                  <button
                    onClick={() => copyCode(o.code)}
                    className={`transition-colors ${copiedCode === o.code ? "text-green-500" : "text-gray-300 hover:text-orange-400"}`}
                    title="Copy code"
                  >
                    <Copy size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
