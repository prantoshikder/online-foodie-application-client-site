"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Search,
  ShoppingBag,
  Heart,
  Tag,
  Wallet,
  User,
  Headphones,
  LogOut,
  Gift,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: ShoppingBag, label: "Orders", href: "/orders" },
  { icon: Heart, label: "Favorites", href: "/favorites" },
  { icon: Tag, label: "Offers", href: "/offers" },
  { icon: Wallet, label: "Wallet", href: "/wallet" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Headphones, label: "Support", href: "/support" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-52 bg-white h-full flex flex-col py-6 px-4 shadow-sm shrink-0">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-8 px-2">
        <img src="/logo.svg" alt="Foodie" className="w-9 h-9" />
        <div>
          <div className="font-bold text-gray-900 text-base leading-tight">Foodie</div>
          <div className="text-gray-400 text-[10px]">Delicious delivered</div>
        </div>
      </Link>

      {/* Nav */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(({ icon: Icon, label, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active
                  ? "bg-orange-500 text-white"
                  : "text-gray-500 hover:bg-orange-50 hover:text-orange-500"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Invite card */}
      <div className="bg-orange-50 rounded-2xl p-4 mb-4">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm">
          <Gift size={20} className="text-orange-500" />
        </div>
        <div className="font-semibold text-gray-800 text-sm mb-1">Invite friends</div>
        <div className="text-gray-500 text-xs mb-3 leading-snug">
          Get $10 off on your first order
        </div>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded-xl transition-colors">
          Invite Now
        </button>
      </div>

      {/* Logout */}
      <button className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors">
        <LogOut size={18} />
        Logout
      </button>
    </aside>
  );
}
