"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
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
  LogIn,
  Gift,
} from "lucide-react";
import { useUserDetails } from "@/hooks/useUserDetails";

// `protected` items are only shown once the user is signed in.
const navItems = [
  { icon: Home, label: "Home", href: "/", protected: false },
  { icon: Search, label: "Search", href: "/search", protected: false },
  { icon: ShoppingBag, label: "Orders", href: "/orders", protected: true },
  { icon: Heart, label: "Favorites", href: "/favorites", protected: true },
  { icon: Tag, label: "Offers", href: "/offers", protected: false },
  { icon: Wallet, label: "Wallet", href: "/wallet", protected: true },
  { icon: User, label: "Profile", href: "/profile", protected: true },
  { icon: Headphones, label: "Support", href: "/support", protected: false },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, ready, logout } = useUserDetails();

  // Until rehydration completes, assume signed-out so protected links don't
  // flash in and then disappear.
  const visibleItems = navItems.filter((item) => !item.protected || (ready && isAuthenticated));

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <aside className="hidden lg:flex w-52 bg-white h-full flex-col py-6 px-4 shadow-sm shrink-0">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 mb-8 px-2">
        <Image src="/logo.svg" alt="Foodie" width={36} height={36} />
        <div>
          <div className="font-bold text-gray-900 text-base leading-tight">Foodie</div>
          <div className="text-gray-400 text-[10px]">Delicious delivered</div>
        </div>
      </Link>

      {/* Nav */}
      <nav className="flex flex-col gap-1 flex-1">
        {visibleItems.map(({ icon: Icon, label, href }) => {
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

      {/* Auth action: Logout when signed in, otherwise a Login link */}
      {ready && isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-gray-600 text-sm font-medium transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-orange-500 text-sm font-medium transition-colors"
        >
          <LogIn size={18} />
          Login
        </Link>
      )}
    </aside>
  );
}
