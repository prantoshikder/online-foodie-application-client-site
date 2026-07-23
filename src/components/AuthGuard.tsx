"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useUserDetails } from "@/hooks/useUserDetails";
import DashboardLayout from "./DashboardLayout";

// Routes only accessible to signed-in users. Everything else is public.
// Add a path here to gate it — no per-page wiring required.
const PRIVATE_ROUTES = ["/orders", "/profile", "/wallet", "/favorites"];

function isPrivate(pathname: string) {
  return PRIVATE_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

/**
 * Central route guard, mounted once in the root layout. It inspects the current
 * path: public routes render immediately, while private routes wait for
 * redux-persist to rehydrate and then either render (signed in) or redirect to
 * /login (signed out). Signed-in users can reach every page — public or private.
 */
export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, ready } = useUserDetails();
  const router = useRouter();
  const pathname = usePathname() || "/";
  const guarded = isPrivate(pathname);

  useEffect(() => {
    if (guarded && ready && !isAuthenticated) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [guarded, ready, isAuthenticated, pathname, router]);

  // Public routes are always accessible.
  if (!guarded) return <>{children}</>;

  // Private route: show the dashboard shell + spinner until we know the user is
  // signed in; otherwise the effect above redirects to /login.
  if (!ready || !isAuthenticated) {
    return (
      <DashboardLayout>
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-3 text-gray-400">
          <Loader2 className="animate-spin text-orange-500" size={28} />
          <p className="text-sm">{ready ? "Redirecting to login…" : "Checking your session…"}</p>
        </div>
      </DashboardLayout>
    );
  }

  return <>{children}</>;
}
