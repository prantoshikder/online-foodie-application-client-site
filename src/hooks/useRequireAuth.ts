"use client";

import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

/**
 * Gate sensitive actions (confirm order, make payment) behind authentication.
 *
 * Usage:
 *   const requireAuth = useRequireAuth();
 *   <button onClick={() => requireAuth(() => placeOrder())}>Confirm Order</button>
 *
 * If the user is signed in, `action` runs immediately. Otherwise they are sent
 * to /login with a redirect back to the current page.
 */
export function useRequireAuth() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (action?: () => void) => {
      if (isAuthenticated) {
        action?.();
        return true;
      }
      const redirect = encodeURIComponent(pathname || "/");
      router.push(`/login?redirect=${redirect}`);
      return false;
    },
    [isAuthenticated, router, pathname]
  );
}
