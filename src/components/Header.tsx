"use client";

import Link from "next/link";
import { Bell, ChevronDown, Gift, MapPin, Search } from "lucide-react";
import AuthArea from "./AuthArea";

export default function Header() {
  return (
    <header className="flex items-center gap-3">
      {/* Location — primary control for a delivery app */}
      <button className="flex items-center gap-1.5 text-sm shrink-0">
        <MapPin size={16} className="text-orange-500" />
        <div className="text-left">
          <div className="text-[10px] text-gray-400 leading-none">Deliver to</div>
          <div className="font-semibold text-gray-800 flex items-center gap-1">
            221B Baker Street, London
            <ChevronDown size={14} className="text-gray-500" />
          </div>
        </div>
      </button>

      {/* Push the action cluster to the right now that the search field is gone */}
      <div className="flex-1" />

      {/* Search — compact icon that opens the dedicated search page */}
      <Link
        href="/search"
        aria-label="Search"
        className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition-colors"
      >
        <Search size={18} />
      </Link>

      {/* Offers quick link */}
      <Link
        href="/offers"
        aria-label="Offers"
        className="w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition-colors"
      >
        <Gift size={18} />
      </Link>

      {/* Notifications */}
      <button
        aria-label="Notifications"
        className="relative w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 text-gray-600 hover:bg-gray-50 transition-colors"
      >
        <Bell size={18} />
        <span className="absolute top-2 right-2.5 w-2 h-2 bg-orange-500 rounded-full" />
      </button>

      <AuthArea />
    </header>
  );
}
