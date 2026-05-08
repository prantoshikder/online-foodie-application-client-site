"use client";

import { Bike, Copy } from "lucide-react";

const orderItems = [
  {
    name: "Margherita Pizza",
    size: "1 x Regular",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=80&q=80",
  },
  {
    name: "Classic Veg Burger",
    size: "1 x Regular",
    price: 8.49,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=80&q=80",
  },
];

const offers = [
  {
    icon: "🏷",
    bg: "bg-orange-100",
    color: "text-orange-500",
    title: "Flat 30% OFF",
    desc: "Up to $10 on orders above $20",
    code: "SAVE30",
  },
  {
    icon: "🛵",
    bg: "bg-green-100",
    color: "text-green-600",
    title: "Free Delivery",
    desc: "On orders above $15",
    code: "FREEDEL",
  },
  {
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

export default function OrderSidebar() {
  return (
    <aside className="w-64 shrink-0 flex flex-col gap-4">
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
              <img src={item.image} alt={item.name} className="w-11 h-11 rounded-xl object-cover" />
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

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors">
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
          {offers.map((o) => (
            <div key={o.code} className="flex items-center gap-3">
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
              <button className="text-gray-300 hover:text-gray-500 transition-colors">
                <Copy size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
