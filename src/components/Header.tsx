"use client";

import Link from "next/link";
import { Bell, ChevronDown, LogIn, MapPin, Search } from "lucide-react";
import UserMenu from "./UserMenu";
import { useAuth } from "@/redux/useAuth";

function AuthArea() {
  const { isAuthenticated, ready } = useAuth();

  // Avoid a hydration flash: reserve space until we know the auth state.
  if (!ready) {
    return <div className="w-40 h-11 rounded-2xl bg-gray-100 animate-pulse shrink-0" />;
  }

  if (isAuthenticated) return <UserMenu />;

  return (
    <div className="flex items-center gap-2 shrink-0">
      <Link
        href="/login"
        className="flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-sm font-semibold text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-colors"
      >
        <LogIn size={16} />
        Login
      </Link>
      <Link
        href="/register"
        className="px-4 py-2.5 rounded-2xl text-sm font-bold text-white bg-orange-500 hover:bg-orange-600 transition-colors"
      >
        Sign Up
      </Link>
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex items-center gap-4 mb-6">
      {/* Location */}
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

      {/* Search */}
      <div className="flex-1 relative">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for dishes, restaurants..."
          className="w-full bg-white border border-gray-100 rounded-2xl pl-10 pr-4 py-3 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:border-orange-300 shadow-sm"
        />
      </div>

      {/* Bell */}
      <button className="relative w-11 h-11 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
        <Bell size={18} className="text-gray-600" />
        <span className="absolute top-2 right-2.5 w-2 h-2 bg-orange-500 rounded-full" />
      </button>

      <AuthArea />
    </header>
  );
}
