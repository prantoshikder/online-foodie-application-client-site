"use client";

import Link from "next/link";
import { LogIn } from "lucide-react";
import UserMenu from "./UserMenu";
import { useUserDetails } from "@/hooks/useUserDetails";

/**
 * Auth-aware account control. Renders the `UserMenu` (avatar + dropdown) when
 * the user is signed in, and Login / Sign Up buttons otherwise. Drop this in
 * anywhere a title bar would otherwise show `<UserMenu />` directly so signed-out
 * visitors never see the "Hello, Guest" menu.
 */
export default function AuthArea() {
  const { isAuthenticated, ready } = useUserDetails();

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
