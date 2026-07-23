"use client";

import { clearCredentials, setCredentials, type AuthUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCallback } from "react";

export type { AuthUser };

export function useUserDetails() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((s) => s.auth.user);
  const ready = useAppSelector((s) => s._persist?.rehydrated ?? false);

  const login = useCallback((next: AuthUser) => dispatch(setCredentials(next)), [dispatch]);
  const logout = useCallback(() => dispatch(clearCredentials()), [dispatch]);

  return { user, isAuthenticated: !!user, ready, login, logout };
}
