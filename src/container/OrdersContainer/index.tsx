"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import UserMenu from "@/components/UserMenu";
import { Bell, MapPin, MoreVertical, Phone, MessageSquare, Star, Plus } from "lucide-react";

const tabs = ["All Orders", "Ongoing", "Completed", "Cancelled"];

const ongoingOrders = [
  {
    id: "#FD1245789",
    restaurant: "Burger House",
    item: "Classic Veg Burger",
    price: "$8.49",
    count: "1 item",
    status: "Preparing your order",
    eta: "Arriving in 25–30 min",
    placed: "10 May, 2024 • 12:30 PM",
    step: 1,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80",
  },
];

const completedOrders = [
  {
    id: "#FD1245780",
    restaurant: "Pizza Palace",
    item: "Margherita Pizza",
    price: "$12.99",
    count: "1 item",
    date: "09 May, 2024 • 07:45 PM",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80",
  },
  {
    id: "#FD1245771",
    restaurant: "Biryani King",
    item: "Chicken Biryani",
    price: "$10.49",
    count: "1 item",
    date: "08 May, 2024 • 01:15 PM",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=200&q=80",
  },
  {
    id: "#FD1245762",
    restaurant: "Dessert Corner",
    item: "Chocolate Lava Cake",
    price: "$6.49",
    count: "1 item",
    date: "07 May, 2024 • 08:30 PM",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=200&q=80",
  },
];

const cancelledOrders = [
  {
    id: "#FD1245750",
    restaurant: "Wok Express",
    item: "Veg Hakka Noodles",
    price: "$7.49",
    count: "1 item",
    date: "06 May, 2024 • 02:20 PM",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=200&q=80",
  },
];

const suggestions = [
  {
    name: "Cheese Burst Burger",
    restaurant: "Burger House",
    price: "$9.49",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&q=80",
  },
  {
    name: "Peri Peri Fries",
    restaurant: "Wok Express",
    price: "$4.49",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=80&q=80",
  },
];

const steps = ["Placed", "Preparing", "On the way", "Delivered"];

export default function OrdersContainer() {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <DashboardLayout>
      <div className="flex gap-5 min-h-full">
        {/* Center content */}
        <div className="flex-1 min-w-0">
          {/* Page header */}
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
            <div className="flex items-center gap-3">
              <button className="relative w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                <Bell size={18} className="text-gray-600" />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-orange-500 rounded-full" />
              </button>
              <UserMenu />
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

          {/* Ongoing Orders */}
          {(activeTab === "All Orders" || activeTab === "Ongoing") && (
            <div className="mb-8">
              <h2 className="font-bold text-gray-800 text-base mb-3">Ongoing Orders</h2>
              {ongoingOrders.map((order) => (
                <div key={order.id} className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <img
                      src={order.image}
                      alt={order.restaurant}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <div>
                          <div className="font-bold text-gray-900 text-base">
                            {order.restaurant}
                          </div>
                          <div className="text-gray-400 text-sm">{order.item}</div>
                          <div className="flex items-center gap-2 mt-1 text-sm text-gray-700">
                            <span className="font-bold">{order.price}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-gray-400">{order.count}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="text-right">
                            <div className="text-green-500 text-sm font-semibold">
                              {order.status}
                            </div>
                            <div className="text-orange-500 text-xs font-medium">{order.eta}</div>
                          </div>
                          <button className="text-gray-300 hover:text-gray-500">
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="text-xs text-gray-400">
                          Order ID: <span className="text-gray-600 font-medium">{order.id}</span>
                          <span className="mx-2">•</span>
                          Placed on {order.placed}
                        </div>
                        <button className="flex items-center gap-1.5 border border-orange-400 text-orange-500 text-xs font-bold px-4 py-2 rounded-xl hover:bg-orange-50 transition-colors">
                          <MapPin size={13} />
                          Track Order
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Progress stepper */}
                  <div className="mt-5 flex items-center">
                    {steps.map((step, i) => {
                      const done = i <= order.step;
                      return (
                        <div key={step} className="flex items-center flex-1 last:flex-none">
                          <div className="flex flex-col items-center gap-1.5">
                            <div
                              className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-colors ${
                                done ? "bg-green-500 border-green-500" : "bg-white border-gray-200"
                              }`}
                            >
                              {done ? (
                                <svg
                                  viewBox="0 0 24 24"
                                  className="w-4 h-4 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={3}
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              ) : (
                                <div className="w-3 h-3 rounded-full bg-gray-200" />
                              )}
                            </div>
                            <span
                              className={`text-xs font-medium ${done ? "text-gray-700" : "text-gray-400"}`}
                            >
                              {step}
                            </span>
                          </div>
                          {i < steps.length - 1 && (
                            <div
                              className={`flex-1 h-0.5 mb-5 mx-1 ${i < order.step ? "bg-green-400" : "bg-gray-200"}`}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Completed Orders */}
          {(activeTab === "All Orders" || activeTab === "Completed") && (
            <div className="mb-8">
              <h2 className="font-bold text-gray-800 text-base mb-3">Completed Orders</h2>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-50">
                {completedOrders.map((order) => (
                  <div key={order.id} className="flex items-center gap-4 p-4">
                    <img
                      src={order.image}
                      alt={order.restaurant}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 text-sm">{order.restaurant}</div>
                      <div className="text-gray-400 text-xs">{order.item}</div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 mt-0.5">
                        <span className="font-bold">{order.price}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-400">{order.count}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-gray-400 text-xs mb-1.5">Delivered on</div>
                      <div className="text-gray-600 text-xs font-medium">{order.date}</div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0 ml-4">
                      <span className="bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full">
                        Delivered
                      </span>
                      <button className="border border-orange-400 text-orange-500 text-xs font-bold px-4 py-1.5 rounded-xl hover:bg-orange-50 transition-colors">
                        Reorder
                      </button>
                    </div>
                    <button className="text-gray-300 hover:text-gray-500 ml-1">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cancelled Orders */}
          {(activeTab === "All Orders" || activeTab === "Cancelled") && (
            <div className="mb-6">
              <h2 className="font-bold text-gray-800 text-base mb-3">Cancelled Orders</h2>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {cancelledOrders.map((order) => (
                  <div key={order.id} className="flex items-center gap-4 p-4">
                    <img
                      src={order.image}
                      alt={order.restaurant}
                      className="w-14 h-14 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-gray-900 text-sm">{order.restaurant}</div>
                      <div className="text-gray-400 text-xs">{order.item}</div>
                      <div className="flex items-center gap-2 text-xs text-gray-600 mt-0.5">
                        <span className="font-bold">{order.price}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-gray-400">{order.count}</span>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-gray-400 text-xs mb-1.5">Cancelled on</div>
                      <div className="text-gray-600 text-xs font-medium">{order.date}</div>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0 ml-4">
                      <span className="bg-red-100 text-red-500 text-xs font-bold px-3 py-1 rounded-full">
                        Cancelled
                      </span>
                      <button className="border border-orange-400 text-orange-500 text-xs font-bold px-4 py-1.5 rounded-xl hover:bg-orange-50 transition-colors">
                        View Details
                      </button>
                    </div>
                    <button className="text-gray-300 hover:text-gray-500 ml-1">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="text-center py-4 text-sm text-gray-400">
            Can&apos;t find your order?{" "}
            <button className="text-orange-500 font-semibold hover:underline">
              Contact Support
            </button>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-64 shrink-0 flex flex-col gap-4">
          {/* Track Your Order */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-4 pt-4 pb-2">
              <h3 className="font-bold text-gray-900 text-sm">Track Your Order</h3>
            </div>
            <div className="relative bg-green-50 mx-3 rounded-xl overflow-hidden h-28">
              <svg
                viewBox="0 0 260 112"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 90 Q80 60 130 56 Q180 52 240 30"
                  stroke="#d1d5db"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="6 4"
                />
                <path d="M20 90 Q80 60 130 56" stroke="#22c55e" strokeWidth="3" fill="none" />
                <circle cx="20" cy="90" r="12" fill="#22c55e" />
                <text x="20" y="95" textAnchor="middle" fontSize="11" fill="white">
                  🏠
                </text>
                <circle cx="240" cy="30" r="12" fill="#f97316" />
                <text x="240" y="35" textAnchor="middle" fontSize="11" fill="white">
                  🍔
                </text>
                <circle cx="130" cy="56" r="10" fill="white" stroke="#f97316" strokeWidth="2" />
                <text x="130" y="60" textAnchor="middle" fontSize="9">
                  🛵
                </text>
              </svg>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&q=80"
                  alt="Burger House"
                  className="w-10 h-10 rounded-xl object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 text-xs">Burger House</div>
                  <div className="text-gray-400 text-[11px]">Preparing your order</div>
                  <div className="text-orange-500 text-[11px] font-semibold">
                    Arriving in 25–30 min
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-bold">R</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-gray-800 text-xs">Rohan</span>
                    <Star size={10} className="fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-500 text-[11px]">4.8</span>
                  </div>
                  <div className="text-gray-400 text-[11px]">Your delivery partner</div>
                </div>
                <div className="flex gap-2">
                  <button className="w-7 h-7 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50">
                    <Phone size={13} className="text-gray-500" />
                  </button>
                  <button className="w-7 h-7 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50">
                    <MessageSquare size={13} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 text-sm mb-4">Order Summary</h3>
            <div className="flex flex-col gap-2 mb-4">
              {[
                { label: "Items Total", value: "$8.49" },
                { label: "Delivery Fee", value: "$2.49" },
                { label: "Taxes & Charges", value: "$1.00" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between text-xs text-gray-500">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900 text-sm mb-3">
              <span>Total Paid</span>
              <span>$11.98</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Paid via</span>
              <div className="flex items-center gap-2">
                <div className="bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                  VISA
                </div>
                <span className="text-gray-500 text-xs">•••• 4242</span>
              </div>
            </div>
          </div>

          {/* You May Also Like */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-sm">You May Also Like</h3>
              <button className="text-orange-500 text-xs font-semibold hover:underline">
                View all
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {suggestions.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
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
        </div>
      </div>
    </DashboardLayout>
  );
}
