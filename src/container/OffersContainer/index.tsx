"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Image from "next/image";
import {
  Bell,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  Heart,
  Crown,
  ShoppingCart,
  Tag,
  Sparkles,
} from "lucide-react";
import AuthArea from "@/components/AuthArea";

const tabs = ["All Offers", "Bank Offers", "Partner Offers", "Free Delivery"];

const bestOffers = [
  {
    id: 1,
    restaurant: "Burger House",
    logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=60&q=80",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    badge: "30% OFF",
    badgeColor: "bg-orange-500",
    title: "30% OFF up to $10",
    condition: "On orders above $20",
    code: "BURGER30",
    valid: "Valid till 31 May 2024",
  },
  {
    id: 2,
    restaurant: "Pizza Palace",
    logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=60&q=80",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    badge: "25% OFF",
    badgeColor: "bg-green-500",
    title: "25% OFF up to $8",
    condition: "On orders above $15",
    code: "PIZZA25",
    valid: "Valid till 28 May 2024",
  },
  {
    id: 3,
    restaurant: "Wok Express",
    logo: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=60&q=80",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80",
    badge: "FLAT $5 OFF",
    badgeColor: "bg-purple-600",
    title: "Flat $5 OFF",
    condition: "On orders above $25",
    code: "WOK5",
    valid: "Valid till 25 May 2024",
  },
  {
    id: 4,
    restaurant: "Dessert Corner",
    logo: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=60&q=80",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
    badge: "20% OFF",
    badgeColor: "bg-orange-500",
    title: "20% OFF up to $6",
    condition: "On orders above $20",
    code: "SWEET20",
    valid: "Valid till 30 May 2024",
  },
];

const moreOfferFilters = [
  { label: "All", count: 28 },
  { label: "New Offers", count: 8 },
  { label: "Student", count: 4 },
  { label: "First Order", count: 6 },
];

const moreOffers = [
  {
    id: 1,
    icon: "🛵",
    bg: "bg-green-100",
    title: "Free Delivery",
    desc: "Free delivery on all orders",
    sub: "No minimum order value",
    valid: "Valid till 31 May 2024",
    noCode: true,
  },
  {
    id: 2,
    icon: "🏦",
    bg: "bg-yellow-100",
    title: "10% Instant Discount",
    desc: "On HDFC Bank Credit & Debit Cards",
    sub: "Min order value $30",
    valid: "Valid till 30 May 2024",
    noCode: true,
  },
];

const bankOffers = [
  {
    name: "HDFC Bank",
    desc: "10% OFF up to $20",
    sub: "On Credit & Debit Cards",
    color: "bg-red-500",
    short: "HDFC",
  },
  {
    name: "SBI Card",
    desc: "15% OFF up to $25",
    sub: "On Credit Cards",
    color: "bg-blue-600",
    short: "SBI",
  },
  {
    name: "ICICI Bank",
    desc: "10% OFF up to $15",
    sub: "On Credit Cards",
    color: "bg-orange-500",
    short: "ICICI",
  },
];

const howToSteps = [
  {
    icon: ShoppingCart,
    num: 1,
    title: "Add items to cart",
    desc: "Add your favorite items to the cart",
  },
  { icon: Tag, num: 2, title: "Apply code", desc: "Enter promo code at checkout" },
  {
    icon: Sparkles,
    num: 3,
    title: "Enjoy savings!",
    desc: "Discount will be applied to your total",
  },
];

const bankOffersDetailed = [
  {
    id: 10,
    icon: "🏦",
    bg: "bg-red-100",
    badgeColor: "bg-red-500",
    badge: "10% OFF",
    restaurant: "HDFC Bank",
    logo: null,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    title: "10% OFF up to $20",
    condition: "On Credit & Debit Cards. Min order $30",
    code: "HDFC10",
    valid: "Valid till 31 May 2024",
  },
  {
    id: 11,
    icon: "🏛",
    bg: "bg-blue-100",
    badgeColor: "bg-blue-600",
    badge: "15% OFF",
    restaurant: "SBI Card",
    logo: null,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80",
    title: "15% OFF up to $25",
    condition: "On Credit Cards. Min order $20",
    code: "SBI15",
    valid: "Valid till 28 May 2024",
  },
  {
    id: 12,
    icon: "💳",
    bg: "bg-orange-100",
    badgeColor: "bg-orange-500",
    badge: "10% OFF",
    restaurant: "ICICI Bank",
    logo: null,
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=400&q=80",
    title: "10% OFF up to $15",
    condition: "On Credit Cards. Min order $25",
    code: "ICICI10",
    valid: "Valid till 30 May 2024",
  },
  {
    id: 13,
    icon: "🏪",
    bg: "bg-green-100",
    badgeColor: "bg-green-500",
    badge: "5% OFF",
    restaurant: "Axis Bank",
    logo: null,
    image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=400&q=80",
    title: "5% OFF up to $10",
    condition: "On Debit Cards. Min order $15",
    code: "AXIS5",
    valid: "Valid till 25 May 2024",
  },
];

const partnerOffers = [
  {
    id: 20,
    restaurant: "Burger House",
    logo: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=60&q=80",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
    badge: "EXCLUSIVE",
    badgeColor: "bg-purple-600",
    title: "Buy 1 Get 1 Burger",
    condition: "On all large burgers",
    code: "BOGO50",
    valid: "Valid till 20 May 2024",
  },
  {
    id: 21,
    restaurant: "Pizza Palace",
    logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=60&q=80",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    badge: "PARTNER",
    badgeColor: "bg-green-600",
    title: "Free Garlic Bread",
    condition: "On any large pizza order",
    code: "GARLIC",
    valid: "Valid till 22 May 2024",
  },
  {
    id: 22,
    restaurant: "Biryani King",
    logo: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=60&q=80",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80",
    badge: "35% OFF",
    badgeColor: "bg-orange-500",
    title: "35% OFF up to $12",
    condition: "On orders above $30",
    code: "BKING35",
    valid: "Valid till 27 May 2024",
  },
  {
    id: 23,
    restaurant: "Wok Express",
    logo: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=60&q=80",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80",
    badge: "NEW",
    badgeColor: "bg-blue-500",
    title: "Flat $8 OFF",
    condition: "On first order from Wok Express",
    code: "WOKFIRST",
    valid: "Valid till 31 May 2024",
  },
];

const freeDeliveryOffers = [
  {
    id: 30,
    icon: "🛵",
    bg: "bg-green-100",
    title: "Free Delivery — All Orders",
    desc: "Get free delivery on every order today",
    sub: "No minimum order value",
    valid: "Valid till 31 May 2024",
    code: "FREEDEL",
    noCode: false,
  },
  {
    id: 31,
    icon: "🌙",
    bg: "bg-purple-100",
    title: "Free Late Night Delivery",
    desc: "Free delivery on orders placed after 10 PM",
    sub: "Min order value $10",
    valid: "Everyday",
    code: "NIGHT",
    noCode: false,
  },
  {
    id: 32,
    icon: "👑",
    bg: "bg-orange-100",
    title: "Pro Member Free Delivery",
    desc: "Unlimited free delivery for Foodie Pro members",
    sub: "On all orders, always",
    valid: "Always active",
    code: null,
    noCode: true,
  },
  {
    id: 33,
    icon: "🎉",
    bg: "bg-blue-100",
    title: "Weekend Free Delivery",
    desc: "Every Saturday & Sunday — no delivery charges",
    sub: "Min order value $15",
    valid: "Every weekend",
    code: "WEEKEND",
    noCode: false,
  },
];

type OfferCard = {
  id: number;
  restaurant: string;
  logo: string | null;
  image: string;
  badge: string;
  badgeColor: string;
  title: string;
  condition: string;
  code: string;
  valid: string;
};

function OfferCardsRow({
  title,
  offers,
  copied,
  onCopy,
}: {
  title: string;
  offers: OfferCard[];
  copied: string | null;
  onCopy: (code: string) => void;
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-gray-900 text-base">{title}</h2>
        <button className="text-orange-500 text-sm font-semibold hover:underline">View all</button>
      </div>
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-1 pr-10">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow shrink-0 w-52"
            >
              <div className="relative h-32">
                <Image
                  src={offer.image}
                  alt={offer.restaurant}
                  fill
                  className="object-cover"
                  sizes="208px"
                />
                <span
                  className={`absolute bottom-3 left-3 ${offer.badgeColor} text-white text-[11px] font-bold px-2 py-0.5 rounded-lg`}
                >
                  {offer.badge}
                </span>
                <button className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Heart size={13} className="text-gray-300" />
                </button>
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2 mb-2">
                  {offer.logo && (
                    <div className="w-7 h-7 rounded-lg overflow-hidden bg-orange-50 shrink-0">
                      <Image
                        src={offer.logo}
                        alt={offer.restaurant}
                        width={28}
                        height={28}
                        className="object-cover"
                      />
                    </div>
                  )}
                  <span className="font-semibold text-gray-700 text-xs">{offer.restaurant}</span>
                </div>
                <div className="font-bold text-gray-900 text-sm mb-0.5">{offer.title}</div>
                <div className="text-gray-400 text-[11px] mb-2">{offer.condition}</div>
                <button
                  onClick={() => onCopy(offer.code)}
                  className={`w-full flex items-center justify-between border rounded-lg px-3 py-1.5 mb-2 transition-colors ${
                    copied === offer.code
                      ? "border-green-400 bg-green-50"
                      : "border-orange-200 bg-orange-50 hover:bg-orange-100"
                  }`}
                >
                  <span
                    className={`text-xs font-bold ${copied === offer.code ? "text-green-600" : "text-orange-500"}`}
                  >
                    Code: {offer.code}
                  </span>
                  {copied === offer.code ? (
                    <Check size={13} className="text-green-500" />
                  ) : (
                    <Copy size={13} className="text-orange-400" />
                  )}
                </button>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-green-500 font-medium">{offer.valid}</span>
                  <button className="text-orange-400 font-semibold">T&amp;C</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="absolute right-0 top-14 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 hover:bg-gray-50">
          <ChevronRight size={18} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
}

type SimpleOffer = {
  id: number;
  icon: string;
  bg: string;
  title: string;
  desc: string;
  sub: string;
  valid: string;
  noCode: boolean;
};

function MoreOffersSection({
  offers,
  filters,
  activeFilter,
  setActiveFilter,
  likedOffers,
  toggleLike,
}: {
  offers: SimpleOffer[];
  filters: { label: string; count: number }[];
  activeFilter: string;
  setActiveFilter: (f: string) => void;
  likedOffers: number[];
  toggleLike: (id: number) => void;
}) {
  return (
    <div>
      <h2 className="font-bold text-gray-900 text-base mb-4">More Offers</h2>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 flex-wrap">
          {filters.map(({ label, count }) => (
            <button
              key={label}
              onClick={() => setActiveFilter(label)}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                activeFilter === label
                  ? "border-orange-500 bg-orange-50 text-orange-500"
                  : "border-gray-200 text-gray-500 hover:border-orange-300"
              }`}
            >
              {label}
              <span className={`${activeFilter === label ? "text-orange-400" : "text-gray-400"}`}>
                ({count})
              </span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <span className="font-medium">Sort by</span>
          <button className="flex items-center gap-1 border border-gray-200 rounded-xl px-3 py-1.5 font-semibold text-gray-700 hover:bg-gray-50">
            Recommended <ChevronDown size={13} />
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-50">
        {offers.map((o) => (
          <div key={o.id} className="flex items-center gap-4 p-4">
            <div
              className={`w-12 h-12 ${o.bg} rounded-2xl flex items-center justify-center text-2xl shrink-0`}
            >
              {o.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-gray-900 text-sm">{o.title}</div>
              <div className="text-gray-500 text-xs">{o.desc}</div>
              <div className="text-gray-400 text-xs">{o.sub}</div>
            </div>
            <div className="text-gray-400 text-xs shrink-0">{o.valid}</div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="bg-green-100 text-green-600 text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                No Code Needed
              </span>
              <button onClick={() => toggleLike(o.id)}>
                <Heart
                  size={16}
                  className={
                    likedOffers.includes(o.id) ? "fill-red-500 text-red-500" : "text-gray-300"
                  }
                />
              </button>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center gap-2 py-4">
          <button className="flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-gray-700">
            View all offers <ChevronDown size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function OffersContainer() {
  const [activeTab, setActiveTab] = useState("All Offers");
  const [activeFilter, setActiveFilter] = useState("All");
  const [promo, setPromo] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [likedOffers, setLikedOffers] = useState<number[]>([]);

  const copy = (code: string) => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  const toggleLike = (id: number) =>
    setLikedOffers((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  return (
    <DashboardLayout>
      <div className="flex gap-5 min-h-full">
        {/* Center */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Offers</h1>
              <p className="text-gray-400 text-sm mt-0.5">
                Great deals to enjoy more of your favorite food.
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
                className={`pb-3 text-sm font-semibold transition-colors relative whitespace-nowrap ${
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

          {/* Promo code bar */}
          <div className="bg-orange-50 rounded-2xl p-4 mb-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
              <span className="text-2xl">🎟</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-gray-900 text-sm">Have a promo code?</div>
              <div className="text-gray-400 text-xs">
                Enter your code &amp; get amazing discounts
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
                placeholder="Enter promo code"
                className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 w-44"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
                Apply
              </button>
            </div>
          </div>

          {/* ── ALL OFFERS ── */}
          {activeTab === "All Offers" && (
            <>
              <OfferCardsRow
                title="Best Offers for You"
                offers={bestOffers}
                copied={copied}
                onCopy={copy}
              />
              <MoreOffersSection
                offers={moreOffers}
                filters={moreOfferFilters}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
                likedOffers={likedOffers}
                toggleLike={toggleLike}
              />
            </>
          )}

          {/* ── BANK OFFERS ── */}
          {activeTab === "Bank Offers" && (
            <>
              <OfferCardsRow
                title="Bank & Card Offers"
                offers={bankOffersDetailed}
                copied={copied}
                onCopy={copy}
              />
              <div className="mt-2">
                <div className="bg-blue-50 rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-2xl">ℹ️</span>
                  <div>
                    <div className="font-bold text-gray-800 text-sm mb-0.5">
                      How bank offers work
                    </div>
                    <div className="text-gray-500 text-xs leading-snug">
                      Bank discounts are applied automatically at checkout when you pay with an
                      eligible card. No code needed for most offers.
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ── PARTNER OFFERS ── */}
          {activeTab === "Partner Offers" && (
            <>
              <OfferCardsRow
                title="Partner Restaurant Deals"
                offers={partnerOffers}
                copied={copied}
                onCopy={copy}
              />
              <div className="mt-2">
                <div className="bg-purple-50 rounded-2xl p-4 flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <div className="font-bold text-gray-800 text-sm mb-0.5">
                      About Partner Offers
                    </div>
                    <div className="text-gray-500 text-xs leading-snug">
                      These exclusive deals are offered directly by our restaurant partners. Apply
                      the code at checkout to avail the discount.
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ── FREE DELIVERY ── */}
          {activeTab === "Free Delivery" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-bold text-gray-900 text-base">Free Delivery Offers</h2>
                <span className="text-gray-400 text-xs">
                  {freeDeliveryOffers.length} offers available
                </span>
              </div>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-50">
                {freeDeliveryOffers.map((o) => (
                  <div key={o.id} className="flex items-center gap-4 p-4">
                    <div
                      className={`w-12 h-12 ${o.bg} rounded-2xl flex items-center justify-center text-2xl shrink-0`}
                    >
                      {o.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 text-sm">{o.title}</div>
                      <div className="text-gray-500 text-xs">{o.desc}</div>
                      <div className="text-gray-400 text-xs">{o.sub}</div>
                    </div>
                    <div className="text-gray-400 text-xs shrink-0 mr-3">{o.valid}</div>
                    <div className="flex items-center gap-2 shrink-0">
                      {o.noCode ? (
                        <span className="bg-green-100 text-green-600 text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                          No Code Needed
                        </span>
                      ) : (
                        <button
                          onClick={() => o.code && copy(o.code)}
                          className={`flex items-center gap-1.5 border rounded-xl px-3 py-1.5 text-xs font-bold transition-colors ${
                            copied === o.code
                              ? "border-green-400 text-green-600 bg-green-50"
                              : "border-orange-300 text-orange-500 hover:bg-orange-50"
                          }`}
                        >
                          {copied === o.code ? <Check size={12} /> : <Copy size={12} />}
                          {o.code}
                        </button>
                      )}
                      <button onClick={() => toggleLike(o.id)}>
                        <Heart
                          size={16}
                          className={
                            likedOffers.includes(o.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-300"
                          }
                        />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="flex items-center justify-center gap-2 py-4">
                  <button className="flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-gray-700">
                    View all offers <ChevronDown size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right panel */}
        <div className="w-64 shrink-0 flex flex-col gap-4">
          {/* Exclusive Pro Offer */}
          <div className="bg-orange-50 rounded-2xl p-5 relative overflow-hidden">
            {/* Decorative dots */}
            <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-orange-200 opacity-60" />
            <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-orange-300 opacity-40" />
            <div className="absolute bottom-4 right-4 w-4 h-4 rounded-full bg-orange-200 opacity-50" />

            <div className="relative">
              <div className="text-xs font-bold text-orange-600 mb-3">Exclusive Pro Offer</div>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                  <Crown size={20} className="text-orange-500" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">Extra 10% OFF</div>
                  <div className="text-gray-500 text-xs">On all orders</div>
                  <div className="text-gray-400 text-[11px]">Only for Foodie Pro members</div>
                </div>
              </div>
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm py-2.5 rounded-xl transition-colors">
                Explore Pro
              </button>
            </div>
          </div>

          {/* Bank Offers */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-sm">Bank Offers</h3>
              <button className="text-orange-500 text-xs font-semibold hover:underline">
                View all
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {bankOffers.map((b) => (
                <div key={b.name} className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 ${b.color} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <span className="text-white text-[9px] font-bold text-center leading-tight">
                      {b.short}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-900 text-xs">{b.name}</div>
                    <div className="text-gray-600 text-[11px]">{b.desc}</div>
                    <div className="text-gray-400 text-[11px]">{b.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to use offers */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 text-sm mb-4">How to use offers?</h3>
            <div className="flex flex-col gap-3">
              {howToSteps.map(({ icon: Icon, num, title, desc }) => (
                <div key={num} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-gray-300 text-xs font-bold">{num}</span>
                      <span className="font-bold text-gray-800 text-xs">{title}</span>
                    </div>
                    <div className="text-gray-400 text-[11px] leading-snug">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Terms &amp; Conditions</h3>
            <ul className="flex flex-col gap-1.5 mb-3">
              <li className="text-gray-500 text-[11px] flex items-start gap-1.5">
                <span className="text-gray-300 mt-0.5">•</span>
                Offers are valid on selected restaurants
              </li>
              <li className="text-gray-500 text-[11px] flex items-start gap-1.5">
                <span className="text-gray-300 mt-0.5">•</span>
                One offer can be used per order
              </li>
            </ul>
            <button className="text-orange-500 text-xs font-bold hover:underline">
              View all T&amp;C
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
