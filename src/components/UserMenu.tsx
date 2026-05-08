"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronRight,
  Crown,
  Heart,
  LogOut,
  Settings,
  ShoppingBag,
  User,
  Wallet,
  X,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { icon: User, label: "My Profile", href: "/profile", color: "text-blue-500", bg: "bg-blue-50" },
  {
    icon: ShoppingBag,
    label: "My Orders",
    href: "/orders",
    color: "text-orange-500",
    bg: "bg-orange-50",
    badge: "3",
  },
  { icon: Heart, label: "Favourites", href: "/favorites", color: "text-red-500", bg: "bg-red-50" },
  {
    icon: Wallet,
    label: "Wallet",
    href: "/wallet",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/profile",
    color: "text-gray-500",
    bg: "bg-gray-100",
  },
];

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-2 px-3 py-2 rounded-2xl border transition-colors ${open ? "bg-orange-50 border-orange-200" : "border-transparent hover:bg-gray-100"}`}
      >
        <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-200 ring-2 ring-orange-200">
          <Image
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"
            alt="Arjun"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-gray-800">Hello, Arjun</span>
          <ChevronDown
            size={14}
            className={`text-gray-500 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+8px)] w-72 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
          {/* User info header */}
          <div
            className="p-4 relative"
            style={{ background: "linear-gradient(135deg,#f97316 0%,#ea580c 100%)" }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X size={12} className="text-white" />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-white/40">
                <Image
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"
                  alt="Arjun"
                  fill
                  className="object-cover bg-orange-200"
                  priority
                  unoptimized
                />
              </div>
              <div>
                <div className="font-bold text-white text-sm">Arjun Sharma</div>
                <div className="text-orange-100 text-xs">arjun@email.com</div>
                <div className="flex items-center gap-1 mt-1">
                  <Crown size={11} className="text-yellow-300" />
                  <span className="text-yellow-200 text-[11px] font-semibold">Foodie Pro</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-3">
              {[
                { label: "Orders", value: "48" },
                { label: "Favourites", value: "12" },
                { label: "Reviews", value: "24" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white/20 rounded-xl py-2 text-center">
                  <div className="text-white font-black text-sm leading-none">{value}</div>
                  <div className="text-orange-100 text-[10px] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Menu items */}
          <div className="p-2">
            {menuItems.map(({ icon: Icon, label, href, color, bg, badge }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
              >
                <div
                  className={`w-8 h-8 ${bg} rounded-xl flex items-center justify-center shrink-0`}
                >
                  <Icon size={15} className={color} />
                </div>
                <span className="flex-1 text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  {label}
                </span>
                {badge && (
                  <span className="w-5 h-5 bg-orange-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {badge}
                  </span>
                )}
                <ChevronRight size={14} className="text-gray-300 group-hover:text-gray-400" />
              </Link>
            ))}
          </div>

          {/* Logout */}
          <div className="px-2 pb-2">
            <div className="border-t border-gray-100 mb-2" />
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-red-50 transition-colors group text-left">
              <div className="w-8 h-8 bg-red-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-red-100 transition-colors">
                <LogOut size={15} className="text-red-500" />
              </div>
              <span className="flex-1 text-sm font-medium text-red-500">Log Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
