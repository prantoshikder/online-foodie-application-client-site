"use client";

import { useUserDetails } from "@/hooks/useUserDetails";
import { Loader2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import DashboardLayout from "./DashboardLayout";

// Routes only accessible to signed-in users. Everything else is public.
// Add a path here to gate it — no per-page wiring required.
const PRIVATE_ROUTES = ["/orders", "/profile", "/wallet", "/favorites"];

function isPrivate(pathname: string) {
  return PRIVATE_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

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
