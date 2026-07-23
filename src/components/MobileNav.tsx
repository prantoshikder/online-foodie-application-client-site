"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, ShoppingBag, Tag, User, LogIn } from "lucide-react";
import { useUserDetails } from "@/hooks/useUserDetails";

// Compact bottom bar for phones & tablets (hidden on lg+, where the Sidebar shows).
// `protected` items require sign-in; the account slot swaps to a Login link when
// signed out.
const items = [
  { icon: Home, label: "Home", href: "/", protected: false },
  { icon: Search, label: "Search", href: "/search", protected: false },
  { icon: Tag, label: "Offers", href: "/offers", protected: false },
  { icon: ShoppingBag, label: "Orders", href: "/orders", protected: true },
];

export default function MobileNav() {
  const pathname = usePathname();
  const { isAuthenticated, ready } = useUserDetails();

  const visible = items.filter((i) => !i.protected || (ready && isAuthenticated));
  const authed = ready && isAuthenticated;

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-gray-100 flex items-stretch justify-around px-1 pb-[env(safe-area-inset-bottom)]">
      {visible.map(({ icon: Icon, label, href }) => {
        const active = pathname === href;
        return (
          <Link
            key={label}
            href={href}
            className={`flex flex-col items-center gap-0.5 flex-1 py-2 text-[10px] font-medium transition-colors ${
              active ? "text-orange-500" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Icon size={20} />
            {label}
          </Link>
        );
      })}

      {/* Account slot */}
      <Link
        href={authed ? "/profile" : "/login"}
        className={`flex flex-col items-center gap-0.5 flex-1 py-2 text-[10px] font-medium transition-colors ${
          pathname === (authed ? "/profile" : "/login")
            ? "text-orange-500"
            : "text-gray-400 hover:text-gray-600"
        }`}
      >
        {authed ? <User size={20} /> : <LogIn size={20} />}
        {authed ? "Profile" : "Login"}
      </Link>
    </nav>
  );
}
