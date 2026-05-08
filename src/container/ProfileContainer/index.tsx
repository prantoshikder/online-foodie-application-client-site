"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import Image from "next/image";
import {
  Camera,
  Bell,
  Shield,
  CreditCard,
  MapPin,
  ChevronRight,
  LogOut,
  Check,
  Crown,
  ShoppingBag,
  Star,
  Heart,
  User,
  Mail,
  Phone,
  Edit3,
  X,
} from "lucide-react";

const settingsMenu = [
  {
    icon: Bell,
    label: "Notifications",
    desc: "Push & email alerts",
    bg: "bg-blue-100",
    color: "text-blue-500",
  },
  {
    icon: Shield,
    label: "Privacy & Security",
    desc: "Password, 2FA, data",
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    icon: CreditCard,
    label: "Payment Methods",
    desc: "Cards, UPI, wallets",
    bg: "bg-purple-100",
    color: "text-purple-500",
  },
  {
    icon: MapPin,
    label: "Saved Addresses",
    desc: "Home, work & more",
    bg: "bg-orange-100",
    color: "text-orange-500",
  },
];

const stats = [
  { icon: ShoppingBag, label: "Orders", value: "48", color: "text-orange-500", bg: "bg-orange-50" },
  { icon: Heart, label: "Favourites", value: "12", color: "text-red-500", bg: "bg-red-50" },
  { icon: Star, label: "Reviews", value: "24", color: "text-yellow-500", bg: "bg-yellow-50" },
];

export default function ProfileContainer() {
  const [name, setName] = useState("Arjun Sharma");
  const [email, setEmail] = useState("arjun@email.com");
  const [phone, setPhone] = useState("+44 7700 900123");
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setEditing(false);
    }, 1500);
  };

  return (
    <DashboardLayout>
      <div className="flex gap-5 min-h-full">
        {/* ── MAIN ── */}
        <div className="flex-1 min-w-0">
          <div className="mb-5">
            <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-400 text-sm mt-0.5">Manage your account details</p>
          </div>

          {/* Hero profile card */}
          <div
            className="relative rounded-3xl overflow-hidden mb-5 p-6"
            style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 60%, #c2410c 100%)" }}
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-10 right-20 w-32 h-32 bg-white/10 rounded-full" />
            <div className="absolute top-4 right-52 w-5 h-5 bg-white/20 rounded-full" />

            <div className="relative flex items-center gap-5">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-3 border-white/40 shadow-lg">
                  <Image
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun"
                    alt="Arjun"
                    fill
                    className="object-cover bg-orange-200"
                    priority
                    unoptimized
                  />
                </div>
                <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-white rounded-xl flex items-center justify-center shadow-md hover:scale-110 transition-transform">
                  <Camera size={13} className="text-orange-500" />
                </button>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="font-black text-white text-xl leading-tight mb-0.5">{name}</div>
                <div className="text-orange-100 text-sm mb-2">{email}</div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 bg-white/20 border border-white/30 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    👑 Foodie Pro
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white/20 border border-white/30 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    ⭐ Top Foodie
                  </span>
                </div>
              </div>

              {/* Edit button */}
              <button
                onClick={() => setEditing(true)}
                className="shrink-0 flex items-center gap-1.5 bg-white text-orange-500 font-bold text-xs px-4 py-2 rounded-xl hover:bg-orange-50 transition-colors shadow-sm"
              >
                <Edit3 size={13} />
                Edit
              </button>
            </div>

            {/* Stats row */}
            <div className="relative mt-5 grid grid-cols-3 gap-3">
              {stats.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-white/15 border border-white/20 rounded-2xl p-3 text-center"
                >
                  <Icon size={16} className="text-white mx-auto mb-1" />
                  <div className="text-white font-black text-lg leading-none">{value}</div>
                  <div className="text-orange-100 text-[11px] mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Edit form */}
          {editing && (
            <div className="bg-white rounded-2xl p-5 shadow-sm mb-5 border border-orange-100">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-gray-900">Edit Profile</h3>
                <button
                  onClick={() => setEditing(false)}
                  className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X size={14} className="text-gray-500" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { icon: User, label: "Full Name", value: name, setter: setName, type: "text" },
                  {
                    icon: Mail,
                    label: "Email Address",
                    value: email,
                    setter: setEmail,
                    type: "email",
                  },
                  {
                    icon: Phone,
                    label: "Phone Number",
                    value: phone,
                    setter: setPhone,
                    type: "tel",
                  },
                ].map(({ icon: Icon, label, value, setter, type }) => (
                  <div key={label}>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                      {label}
                    </label>
                    <div className="relative">
                      <Icon
                        size={15}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                      />
                      <input
                        type={type}
                        value={value}
                        onChange={(e) => setter(e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-orange-400 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                ))}

                <div className="flex gap-3 pt-1">
                  <button
                    onClick={handleSave}
                    className={`flex-1 font-bold py-3 rounded-xl transition-all text-sm flex items-center justify-center gap-2 ${
                      saved
                        ? "bg-green-500 text-white"
                        : "bg-orange-500 hover:bg-orange-600 text-white"
                    }`}
                  >
                    {saved ? (
                      <>
                        <Check size={15} /> Saved!
                      </>
                    ) : (
                      "Save Changes"
                    )}
                  </button>
                  <button
                    onClick={() => setEditing(false)}
                    className="px-5 border border-gray-200 text-gray-500 font-semibold py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Personal info display (when not editing) */}
          {!editing && (
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-5">
              <div className="px-5 py-3.5 border-b border-gray-100 flex items-center justify-between">
                <h3 className="font-bold text-gray-900 text-sm">Personal Information</h3>
                <button
                  onClick={() => setEditing(true)}
                  className="text-orange-500 text-xs font-semibold hover:underline"
                >
                  Edit
                </button>
              </div>
              {[
                { icon: User, label: "Full Name", value: name },
                { icon: Mail, label: "Email Address", value: email },
                { icon: Phone, label: "Phone Number", value: phone },
              ].map(({ icon: Icon, label, value }, i, arr) => (
                <div
                  key={label}
                  className={`flex items-center gap-4 px-5 py-3.5 ${i !== arr.length - 1 ? "border-b border-gray-50" : ""}`}
                >
                  <div className="w-9 h-9 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={15} className="text-gray-500" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-[11px]">{label}</div>
                    <div className="font-semibold text-gray-800 text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Settings */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-5">
            <div className="px-5 py-3.5 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 text-sm">Settings</h3>
            </div>
            {settingsMenu.map(({ icon: Icon, label, desc, bg, color }, i) => (
              <button
                key={label}
                className={`w-full flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors text-left ${
                  i !== settingsMenu.length - 1 ? "border-b border-gray-50" : ""
                }`}
              >
                <div
                  className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center shrink-0`}
                >
                  <Icon size={18} className={color} />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 text-sm">{label}</div>
                  <div className="text-gray-400 text-xs">{desc}</div>
                </div>
                <ChevronRight size={16} className="text-gray-300" />
              </button>
            ))}
          </div>

          {/* Logout */}
          <button className="w-full flex items-center justify-center gap-2 bg-red-50 border border-red-100 text-red-500 font-bold py-3.5 rounded-2xl hover:bg-red-100 transition-colors text-sm">
            <LogOut size={16} />
            Log Out
          </button>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="w-64 shrink-0 flex flex-col gap-4">
          {/* Pro card */}
          <div
            className="rounded-2xl p-5 relative overflow-hidden text-white"
            style={{ background: "linear-gradient(135deg, #7c3aed, #6d28d9)" }}
          >
            <div className="absolute -top-5 -right-5 w-24 h-24 bg-white/10 rounded-full" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                  <Crown size={16} className="text-yellow-300" />
                </div>
                <span className="font-bold text-sm">Foodie Pro</span>
              </div>
              <div className="text-purple-200 text-xs mb-3 leading-snug">
                Your Pro membership is active. Enjoy exclusive perks every day.
              </div>
              <div className="flex flex-col gap-1.5 mb-4">
                {[
                  "Free delivery on all orders",
                  "10% cashback always",
                  "Priority support 24/7",
                ].map((perk) => (
                  <div key={perk} className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center shrink-0">
                      <Check size={9} className="text-white" />
                    </div>
                    <span className="text-white/90 text-[11px]">{perk}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/20 border border-white/30 rounded-xl px-3 py-2 text-center">
                <span className="text-white text-xs font-semibold">Renews on Jun 10, 2026</span>
              </div>
            </div>
          </div>

          {/* Account level */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-sm">Account Level</h3>
              <span className="text-orange-500 text-xs font-bold bg-orange-50 px-2 py-0.5 rounded-full">
                Gold
              </span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-xl">🥇</span>
              </div>
              <div>
                <div className="font-bold text-gray-800 text-sm">Gold Foodie</div>
                <div className="text-gray-400 text-xs">720 / 1000 XP to Platinum</div>
              </div>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-1.5">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400"
                style={{ width: "72%" }}
              />
            </div>
            <div className="flex justify-between text-[11px] text-gray-400">
              <span>Gold</span>
              <span>280 XP to Platinum</span>
            </div>
          </div>

          {/* Recent activity */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <h3 className="font-bold text-gray-900 text-sm mb-3">Recent Activity</h3>
            <div className="flex flex-col gap-3">
              {[
                { emoji: "🍔", text: "Ordered from Burger House", time: "2h ago" },
                { emoji: "⭐", text: "Left a 5-star review", time: "Yesterday" },
                { emoji: "❤️", text: "Saved Pizza Palace", time: "2 days ago" },
              ].map(({ emoji, text, time }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-xl flex items-center justify-center shrink-0 text-sm">
                    {emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-700 text-xs leading-snug">{text}</div>
                    <div className="text-gray-400 text-[11px] mt-0.5">{time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Refer & earn */}
          <div className="bg-orange-50 rounded-2xl p-4">
            <div className="text-2xl mb-2">🎁</div>
            <div className="font-bold text-gray-900 text-sm mb-1">Refer & Earn</div>
            <div className="text-gray-500 text-xs mb-3 leading-snug">
              Invite friends and get <span className="font-bold text-orange-500">$10</span> for
              every successful referral.
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-2.5 rounded-xl transition-colors">
              Invite Friends
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
