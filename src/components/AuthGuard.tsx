"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/redux/useAuth";
import DashboardLayout from "./DashboardLayout";

/**
 * Page-level auth gate for account-only routes (orders, profile, wallet,
 * favorites). Renders the dashboard shell with a spinner until redux-persist
 * has rehydrated, then either shows the protected content (signed in) or
 * redirects to /login with a `redirect` back to the current page.
 */
export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, ready } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (ready && !isAuthenticated) {
      router.replace(`/login?redirect=${encodeURIComponent(pathname || "/")}`);
    }
  }, [ready, isAuthenticated, pathname, router]);

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
