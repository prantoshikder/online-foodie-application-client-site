"use client";

import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setCredentials, clearCredentials, type AuthUser } from "@/redux/features/auth/authSlice";

export type { AuthUser };

/**
 * User/auth accessor backed by the Redux store (persisted via redux-persist).
 *
 * `ready` mirrors redux-persist's rehydration flag: it starts `false` on the
 * server and the first client render (matching the logged-out shell), then
 * flips `true` once the persisted state has been restored — the same
 * hydration-safe pattern the old Context provided.
 */
export function useUserDetails() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);
  const ready = useAppSelector((s) => s._persist?.rehydrated ?? false);

  const login = useCallback((next: AuthUser) => dispatch(setCredentials(next)), [dispatch]);
  const logout = useCallback(() => dispatch(clearCredentials()), [dispatch]);

  return { user, isAuthenticated: !!user, ready, login, logout };
}
