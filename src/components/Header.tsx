"use client";

import Link from "next/link";
import { Bell, ChevronDown, Gift, MapPin, Search } from "lucide-react";
import AuthArea from "./AuthArea";

export default function Header() {
  return (
    <header className="flex items-center gap-2 sm:gap-3">
      {/* Location — primary control for a delivery app */}
      <button className="flex items-center gap-1.5 text-sm min-w-0">
        <MapPin size={16} className="text-orange-500 shrink-0" />
        <div className="text-left min-w-0">
          <div className="text-[10px] text-gray-400 leading-none">Deliver to</div>
          <div className="font-semibold text-gray-800 flex items-center gap-1">
            <span className="truncate max-w-28 sm:max-w-none">221B Baker Street, London</span>
            <ChevronDown size={14} className="text-gray-500 shrink-0" />
          </div>
        </div>
      </button>

      {/* Push the action cluster to the right now that the search field is gone */}
      <div className="flex-1" />

      {/* Search — compact icon that opens the dedicated search page */}
      <Link
        href="/search"
        aria-label="Search"
        className="w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition-colors shrink-0"
      >
        <Search size={18} />
      </Link>

      {/* Offers quick link — hidden on mobile (available in the bottom nav) */}
      <Link
        href="/offers"
        aria-label="Offers"
        className="hidden sm:flex w-11 h-11 bg-white rounded-2xl items-center justify-center shadow-sm border border-gray-100 text-gray-600 hover:bg-gray-50 hover:text-orange-500 transition-colors shrink-0"
      >
        <Gift size={18} />
      </Link>

      {/* Notifications */}
      <button
        aria-label="Notifications"
        className="relative w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 text-gray-600 hover:bg-gray-50 transition-colors shrink-0"
      >
        <Bell size={18} />
        <span className="absolute top-1.5 right-2 sm:top-2 sm:right-2.5 w-2 h-2 bg-orange-500 rounded-full" />
      </button>

      <AuthArea />
    </header>
  );
}
