"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type AuthUser = {
  name: string;
  // A user signs in with either an email or a phone number — at least one is set.
  email?: string;
  phone?: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  ready: boolean; // hydration-safe: true once localStorage has been read
  login: (user: AuthUser) => void;
  logout: () => void;
};

const STORAGE_KEY = "foodie.auth.user";

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [ready, setReady] = useState(false);

  // Restore session on mount. Reading persisted auth is a legitimate one-time
  // sync from an external store (localStorage), kept in an effect so SSR renders
  // the logged-out shell and the client hydrates to match before restoring.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setUser(JSON.parse(raw) as AuthUser);
    } catch {
      // ignore malformed / unavailable storage
    }
    setReady(true);
  }, []);

  const login = useCallback((next: AuthUser) => {
    setUser(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({ user, isAuthenticated: !!user, ready, login, logout }),
    [user, ready, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an <AuthProvider>");
  return ctx;
}
