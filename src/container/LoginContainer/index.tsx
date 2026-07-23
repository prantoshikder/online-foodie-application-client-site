"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Mail, Phone, Lock, Eye, EyeOff, ArrowRight, Check, Loader2 } from "lucide-react";
import { useUserDetails } from "@/hooks/useUserDetails";

type Method = "email" | "phone";

const perks = [
  { emoji: "🚀", text: "Lightning-fast delivery to your door" },
  { emoji: "💸", text: "Exclusive deals & Foodie Pro cashback" },
  { emoji: "🍜", text: "Thousands of restaurants, one app" },
];

export default function LoginContainer() {
  const [method, setMethod] = useState<Method>("email");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);
  const { login } = useUserDetails();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Demo auth — no backend. Derive a display name from the email local part,
    // or fall back to a generic name when signing in with a phone number.
    setTimeout(() => {
      const displayName =
        method === "email"
          ? identifier
              .split("@")[0]
              .replace(/[._-]+/g, " ")
              .trim() || "Foodie"
          : "Foodie";
      login({
        name: displayName.replace(/\b\w/g, (c) => c.toUpperCase()),
        [method]: identifier,
      });
      const redirect = new URLSearchParams(window.location.search).get("redirect");
      router.push(redirect || "/");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex bg-[#f8f8f8]">
      {/* ── LEFT: brand panel ── */}
      <div
        className="hidden lg:flex flex-col justify-between w-[44%] max-w-2xl relative overflow-hidden p-12 text-white"
        style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 55%, #c2410c 100%)" }}
      >
        {/* decorative shapes */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/10 rounded-full" />
        <div className="absolute top-40 -right-24 w-56 h-56 bg-white/10 rounded-full" />
        <div className="absolute -bottom-20 -left-16 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute top-24 left-16 w-6 h-6 bg-white/20 rounded-full" />
        <div className="absolute bottom-40 left-32 w-4 h-4 bg-white/20 rounded-full" />

        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-2.5 w-fit">
          <div className="w-11 h-11 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Image src="/logo.svg" alt="Foodie" width={28} height={28} />
          </div>
          <div>
            <div className="font-black text-lg leading-tight">Foodie</div>
            <div className="text-orange-100 text-[11px]">Delicious delivered</div>
          </div>
        </Link>

        {/* Headline */}
        <div className="relative">
          <div className="text-5xl mb-5">🍔🍕🍣</div>
          <h1 className="text-4xl font-black leading-tight mb-4">
            Craving something
            <br />
            delicious?
          </h1>
          <p className="text-orange-100 text-base leading-relaxed mb-8 max-w-md">
            Sign in to reorder your favourites, track deliveries live, and unlock member-only
            offers.
          </p>

          <div className="flex flex-col gap-3">
            {perks.map(({ emoji, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center text-lg shrink-0">
                  {emoji}
                </div>
                <span className="text-white/90 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative bg-white/15 border border-white/20 rounded-2xl p-5 backdrop-blur-sm max-w-md">
          <div className="flex items-center gap-1 mb-2">
            {"★★★★★".split("").map((s, i) => (
              <span key={i} className="text-yellow-300 text-sm">
                {s}
              </span>
            ))}
          </div>
          <p className="text-white/90 text-sm leading-relaxed mb-3">
            &ldquo;Best food app I&rsquo;ve used — orders arrive hot and the deals are
            unreal.&rdquo;
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center text-sm">
              👩
            </div>
            <div>
              <div className="font-bold text-xs">Priya Nair</div>
              <div className="text-orange-100 text-[11px]">Foodie Pro member</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: form ── */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          {/* mobile logo */}
          <Link href="/" className="flex lg:hidden items-center gap-2 mb-8">
            <Image src="/logo.svg" alt="Foodie" width={36} height={36} />
            <span className="font-black text-xl text-gray-900">Foodie</span>
          </Link>

          <div className="mb-8">
            <h2 className="text-3xl font-black text-gray-900 mb-1.5">Welcome back 👋</h2>
            <p className="text-gray-400 text-sm">Sign in to continue your foodie journey.</p>
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors">
              <svg width="17" height="17" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09a6.6 6.6 0 0 1 0-4.18V7.07H2.18a11 11 0 0 0 0 9.86l3.66-2.84z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.36 1c.08 1-.32 1.98-.94 2.7-.66.75-1.74 1.33-2.8 1.25-.1-1 .38-2 .96-2.66C14.26 1.52 15.4.98 16.36 1zm3.5 16.4c-.5 1.15-.74 1.67-1.38 2.69-.9 1.42-2.17 3.2-3.74 3.2-1.4.02-1.76-.9-3.66-.9-1.9 0-2.29.88-3.68.92-1.57.06-2.76-1.53-3.66-2.95C1.4 17.8.85 13.4 2.5 10.6c.87-1.5 2.42-2.44 4.11-2.47 1.44-.03 2.8.97 3.68.97.88 0 2.53-1.2 4.27-1.02.73.03 2.77.29 4.08 2.2-.1.07-2.44 1.42-2.41 4.25.03 3.38 2.96 4.5 3 4.51z" />
              </svg>
              Apple
            </button>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px bg-gray-200 flex-1" />
            <span className="text-gray-400 text-xs">or sign in with</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                {method === "email" ? "Email Address" : "Phone Number"}
              </label>
              <div className="relative">
                {method === "email" ? (
                  <Mail
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                ) : (
                  <Phone
                    size={16}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                )}
                <input
                  type={method === "email" ? "email" : "tel"}
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder={method === "email" ? "you@example.com" : "+1 555 000 1234"}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-11 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => {
                    setMethod((m) => (m === "email" ? "phone" : "email"));
                    setIdentifier("");
                  }}
                  title={method === "email" ? "Use phone number instead" : "Use email instead"}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {method === "email" ? <Phone size={16} /> : <Mail size={16} />}
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-gray-500">Password</label>
                <button
                  type="button"
                  className="text-orange-500 text-xs font-semibold hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type={showPass ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-11 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <button
                type="button"
                onClick={() => setRemember((v) => !v)}
                className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors shrink-0 ${
                  remember ? "bg-orange-500" : "bg-gray-100 border border-gray-300"
                }`}
              >
                {remember && <Check size={12} className="text-white" />}
              </button>
              <span className="text-sm text-gray-500">Keep me signed in</span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Signing in…
                </>
              ) : (
                <>
                  Sign In <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&rsquo;t have an account?{" "}
            <Link href="/register" className="text-orange-500 font-bold hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
