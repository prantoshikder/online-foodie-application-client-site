"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { User, Mail, Phone, Lock, Eye, EyeOff, ArrowRight, Check, Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

type Method = "email" | "phone";

const perks = [
  { emoji: "🎁", text: "$10 off your very first order" },
  { emoji: "🔥", text: "Daily deals tailored to your taste" },
  { emoji: "📍", text: "Real-time tracking, every order" },
];

function strengthOf(pw: string) {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score; // 0–4
}

const strengthMeta = [
  { label: "Too short", color: "bg-gray-200", text: "text-gray-400" },
  { label: "Weak", color: "bg-red-400", text: "text-red-500" },
  { label: "Fair", color: "bg-yellow-400", text: "text-yellow-600" },
  { label: "Good", color: "bg-lime-400", text: "text-lime-600" },
  { label: "Strong", color: "bg-green-500", text: "text-green-600" },
];

export default function RegisterContainer() {
  const [name, setName] = useState("");
  const [method, setMethod] = useState<Method>("email");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const strength = strengthOf(password);
  const meta = strengthMeta[strength];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    setLoading(true);
    // Demo auth — no backend. Sign the new user straight in with whichever
    // contact method (email or phone) they registered with.
    setTimeout(() => {
      login({ name: name.trim() || "Foodie", [method]: identifier });
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
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-white/10 rounded-full" />
        <div className="absolute top-52 -left-24 w-56 h-56 bg-white/10 rounded-full" />
        <div className="absolute -bottom-20 -right-16 w-64 h-64 bg-white/10 rounded-full" />
        <div className="absolute top-28 right-20 w-6 h-6 bg-white/20 rounded-full" />
        <div className="absolute bottom-44 right-40 w-4 h-4 bg-white/20 rounded-full" />

        <Link href="/" className="relative flex items-center gap-2.5 w-fit">
          <div className="w-11 h-11 bg-white/15 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Image src="/logo.svg" alt="Foodie" width={28} height={28} />
          </div>
          <div>
            <div className="font-black text-lg leading-tight">Foodie</div>
            <div className="text-orange-100 text-[11px]">Delicious delivered</div>
          </div>
        </Link>

        <div className="relative">
          <div className="text-5xl mb-5">🥳🎉🍟</div>
          <h1 className="text-4xl font-black leading-tight mb-4">
            Join the tastiest
            <br />
            club in town.
          </h1>
          <p className="text-orange-100 text-base leading-relaxed mb-8 max-w-md">
            Create a free account and start ordering from thousands of restaurants near you today.
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

        <div className="relative flex items-center gap-6 max-w-md">
          <div>
            <div className="text-2xl font-black">2M+</div>
            <div className="text-orange-100 text-xs">Happy foodies</div>
          </div>
          <div className="w-px h-10 bg-white/25" />
          <div>
            <div className="text-2xl font-black">15k+</div>
            <div className="text-orange-100 text-xs">Restaurants</div>
          </div>
          <div className="w-px h-10 bg-white/25" />
          <div>
            <div className="text-2xl font-black">4.8★</div>
            <div className="text-orange-100 text-xs">App rating</div>
          </div>
        </div>
      </div>

      {/* ── RIGHT: form ── */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <Link href="/" className="flex lg:hidden items-center gap-2 mb-8">
            <Image src="/logo.svg" alt="Foodie" width={36} height={36} />
            <span className="font-black text-xl text-gray-900">Foodie</span>
          </Link>

          <div className="mb-8">
            <h2 className="text-3xl font-black text-gray-900 mb-1.5">Create account 🍽️</h2>
            <p className="text-gray-400 text-sm">Free forever — no card required.</p>
          </div>

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
            <span className="text-gray-400 text-xs">or sign up with</span>
            <div className="h-px bg-gray-200 flex-1" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Full Name</label>
              <div className="relative">
                <User
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Arjun Sharma"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-orange-400 focus:bg-white transition-colors"
                />
              </div>
            </div>

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
              <label className="block text-xs font-semibold text-gray-500 mb-1.5">Password</label>
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
                  placeholder="Create a strong password"
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

              {/* Strength meter */}
              {password.length > 0 && (
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex gap-1 flex-1">
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          i < strength ? meta.color : "bg-gray-100"
                        }`}
                      />
                    ))}
                  </div>
                  <span className={`text-[11px] font-semibold ${meta.text}`}>{meta.label}</span>
                </div>
              )}
            </div>

            <label className="flex items-start gap-2.5 cursor-pointer select-none">
              <button
                type="button"
                onClick={() => setAgree((v) => !v)}
                className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors shrink-0 mt-0.5 ${
                  agree ? "bg-orange-500" : "bg-gray-100 border border-gray-300"
                }`}
              >
                {agree && <Check size={12} className="text-white" />}
              </button>
              <span className="text-sm text-gray-500 leading-snug">
                I agree to the{" "}
                <span className="text-orange-500 font-semibold hover:underline">Terms</span> and{" "}
                <span className="text-orange-500 font-semibold hover:underline">
                  Privacy Policy
                </span>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={loading || !agree}
              className="mt-1 w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Creating account…
                </>
              ) : (
                <>
                  Create Account <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-orange-500 font-bold hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
