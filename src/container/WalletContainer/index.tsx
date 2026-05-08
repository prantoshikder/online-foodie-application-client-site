"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import {
  Plus,
  ArrowDownLeft,
  ArrowUpRight,
  Gift,
  Send,
  History,
  Crown,
  Wallet,
  ChevronRight,
  CreditCard,
  X,
  Check,
} from "lucide-react";

const transactionGroups = [
  {
    date: "Today",
    items: [
      {
        id: 1,
        type: "credit",
        icon: "💰",
        bg: "bg-green-100",
        label: "Cashback Reward",
        sub: "Burger House · Order #2847",
        time: "2:30 PM",
        amount: "+$2.49",
      },
      {
        id: 2,
        type: "debit",
        icon: "🍔",
        bg: "bg-orange-100",
        label: "Food Order",
        sub: "Burger House · Order #2847",
        time: "2:15 PM",
        amount: "-$18.48",
      },
    ],
  },
  {
    date: "Yesterday",
    items: [
      {
        id: 3,
        type: "credit",
        icon: "🎁",
        bg: "bg-purple-100",
        label: "Referral Bonus",
        sub: "Invited Priya",
        time: "6:00 PM",
        amount: "+$10.00",
      },
      {
        id: 4,
        type: "debit",
        icon: "🍕",
        bg: "bg-orange-100",
        label: "Food Order",
        sub: "Pizza Palace · Order #2831",
        time: "7:45 PM",
        amount: "-$21.97",
      },
    ],
  },
  {
    date: "May 7",
    items: [
      {
        id: 5,
        type: "credit",
        icon: "💳",
        bg: "bg-blue-100",
        label: "Added via Credit Card",
        sub: "VISA •••• 4242",
        time: "10:00 AM",
        amount: "+$50.00",
      },
      {
        id: 6,
        type: "debit",
        icon: "🍛",
        bg: "bg-orange-100",
        label: "Food Order",
        sub: "Biryani King · Order #2819",
        time: "1:15 PM",
        amount: "-$26.49",
      },
    ],
  },
  {
    date: "May 1",
    items: [
      {
        id: 7,
        type: "credit",
        icon: "🏷",
        bg: "bg-yellow-100",
        label: "Promo Credit",
        sub: "Code: WELCOME50",
        time: "9:00 AM",
        amount: "+$5.00",
      },
    ],
  },
];

const addAmounts = [50, 100, 200, 500];

const savedCards = [
  { type: "VISA", last4: "4242", color: "bg-blue-600", expiry: "09/26" },
  { type: "MC", last4: "8819", color: "bg-red-500", expiry: "12/25" },
];

const quickActions = [
  { icon: Plus, label: "Add Money", id: "add", bg: "bg-orange-500", color: "text-white" },
  { icon: Send, label: "Transfer", id: "send", bg: "bg-white", color: "text-gray-700" },
  { icon: Gift, label: "Redeem", id: "redeem", bg: "bg-white", color: "text-gray-700" },
  { icon: History, label: "History", id: "history", bg: "bg-white", color: "text-gray-700" },
];

export default function WalletContainer() {
  const [showAdd, setShowAdd] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paid, setPaid] = useState(false);

  const handlePay = () => {
    if (!selected && !customAmount) return;
    setPaid(true);
    setTimeout(() => {
      setPaid(false);
      setShowAdd(false);
      setSelected(null);
      setCustomAmount("");
    }, 1800);
  };

  const displayAmount = customAmount ? `$${customAmount}` : selected ? `$${selected}` : "";

  return (
    <DashboardLayout>
      <div className="flex gap-5 min-h-full">
        {/* ── MAIN ── */}
        <div className="flex-1 min-w-0">
          {/* Page title */}
          <div className="flex items-center justify-between mb-5">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Wallet</h1>
              <p className="text-gray-400 text-sm mt-0.5">Manage your balance & transactions</p>
            </div>
          </div>

          {/* Balance card */}
          <div
            className="relative rounded-3xl overflow-hidden mb-5 p-6 text-white"
            style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 55%, #c2410c 100%)" }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full" />
            <div className="absolute -bottom-14 -right-4 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute top-6 right-32 w-6 h-6 bg-white/20 rounded-full" />
            <div className="absolute bottom-8 right-20 w-3 h-3 bg-white/30 rounded-full" />

            <div className="relative">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Wallet size={16} className="text-orange-200" />
                    <span className="text-orange-100 text-sm font-medium">Foodie Wallet</span>
                  </div>
                  <div className="text-5xl font-black tracking-tight mb-1">$48.55</div>
                  <div className="text-orange-200 text-xs">Available balance</div>
                </div>
                <div className="bg-white/20 border border-white/30 rounded-2xl px-3 py-1.5">
                  <span className="text-white text-xs font-bold">👑 Pro Member</span>
                </div>
              </div>

              {/* Quick actions */}
              <div className="flex items-center gap-3">
                {quickActions.map(({ icon: Icon, label, id, bg, color }) => (
                  <button
                    key={id}
                    onClick={() => id === "add" && setShowAdd(!showAdd)}
                    className={`flex flex-col items-center gap-1.5 ${bg} rounded-2xl px-4 py-2.5 transition-all hover:scale-105 shadow-sm`}
                  >
                    <Icon size={18} className={color} />
                    <span className={`text-[11px] font-bold ${color}`}>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Add money panel */}
          {showAdd && (
            <div className="bg-white rounded-2xl p-5 mb-5 shadow-sm border border-orange-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Add Money</h3>
                <button
                  onClick={() => {
                    setShowAdd(false);
                    setSelected(null);
                    setCustomAmount("");
                  }}
                  className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <X size={14} className="text-gray-500" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3 mb-4">
                {addAmounts.map((a) => (
                  <button
                    key={a}
                    onClick={() => {
                      setSelected(a);
                      setCustomAmount("");
                    }}
                    className={`py-3 rounded-xl font-bold text-sm border-2 transition-all ${
                      selected === a
                        ? "border-orange-500 bg-orange-50 text-orange-500 scale-105"
                        : "border-gray-200 text-gray-600 hover:border-orange-300"
                    }`}
                  >
                    ${a}
                  </button>
                ))}
              </div>
              <div className="relative mb-4">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">
                  $
                </span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelected(null);
                  }}
                  placeholder="Enter custom amount"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-8 pr-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-orange-400 transition-colors"
                />
              </div>
              <button
                onClick={handlePay}
                disabled={!selected && !customAmount}
                className={`w-full font-bold py-3.5 rounded-xl transition-all text-sm flex items-center justify-center gap-2 ${
                  paid
                    ? "bg-green-500 text-white"
                    : selected || customAmount
                      ? "bg-orange-500 hover:bg-orange-600 text-white"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
              >
                {paid ? (
                  <>
                    <Check size={16} /> Added successfully!
                  </>
                ) : (
                  `Proceed to Pay${displayAmount ? ` ${displayAmount}` : ""}`
                )}
              </button>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-5">
            {[
              {
                icon: ArrowDownLeft,
                label: "Total Added",
                value: "$65.00",
                bg: "bg-green-100",
                color: "text-green-600",
                trend: "+$50 this month",
              },
              {
                icon: ArrowUpRight,
                label: "Total Spent",
                value: "$66.94",
                bg: "bg-red-100",
                color: "text-red-500",
                trend: "-$40.45 this month",
              },
              {
                icon: Gift,
                label: "Cashback Earned",
                value: "$12.49",
                bg: "bg-purple-100",
                color: "text-purple-500",
                trend: "+$2.49 today",
              },
            ].map(({ icon: Icon, label, value, bg, color, trend }) => (
              <div key={label} className="bg-white rounded-2xl p-4 shadow-sm">
                <div className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon size={18} className={color} />
                </div>
                <div className="font-black text-gray-900 text-xl mb-0.5">{value}</div>
                <div className="text-gray-500 text-xs mb-1">{label}</div>
                <div className={`text-[11px] font-semibold ${color}`}>{trend}</div>
              </div>
            ))}
          </div>

          {/* Monthly spending progress */}
          <div className="bg-white rounded-2xl p-5 shadow-sm mb-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="font-bold text-gray-900 text-sm">Monthly Spending</div>
                <div className="text-gray-400 text-xs mt-0.5">$40.45 of $100 budget used</div>
              </div>
              <span className="text-orange-500 font-bold text-sm">40%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div
                className="h-2.5 rounded-full"
                style={{ width: "40%", background: "linear-gradient(90deg, #f97316, #ea580c)" }}
              />
            </div>
            <div className="flex justify-between mt-2 text-[11px] text-gray-400">
              <span>$0</span>
              <span>Budget: $100</span>
            </div>
          </div>

          {/* Transaction history */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-bold text-gray-900">Transaction History</h3>
              <button className="text-orange-500 text-xs font-semibold hover:underline">
                View all
              </button>
            </div>
            <div>
              {transactionGroups.map((group) => (
                <div key={group.date}>
                  <div className="px-5 py-2 bg-gray-50 border-y border-gray-100">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                      {group.date}
                    </span>
                  </div>
                  <div className="divide-y divide-gray-50">
                    {group.items.map((t) => (
                      <div
                        key={t.id}
                        className="flex items-center gap-4 px-5 py-3.5 hover:bg-gray-50 transition-colors"
                      >
                        <div
                          className={`w-10 h-10 ${t.bg} rounded-xl flex items-center justify-center text-lg shrink-0`}
                        >
                          {t.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-800 text-sm">{t.label}</div>
                          <div className="text-gray-400 text-xs truncate">{t.sub}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div
                            className={`font-bold text-sm ${
                              t.type === "credit" ? "text-green-500" : "text-gray-800"
                            }`}
                          >
                            {t.amount}
                          </div>
                          <div className="text-gray-400 text-[11px]">{t.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="w-64 shrink-0 flex flex-col gap-4">
          {/* Cashback card */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-5 text-white relative overflow-hidden">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
            <div className="relative">
              <div className="text-purple-200 text-xs font-semibold mb-1">Cashback Balance</div>
              <div className="text-3xl font-black mb-3">$12.49</div>
              <button className="w-full bg-white/20 border border-white/30 text-white text-xs font-bold py-2 rounded-xl hover:bg-white/30 transition-colors">
                Redeem Cashback
              </button>
            </div>
          </div>

          {/* Saved cards */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-sm">Saved Cards</h3>
              <button className="w-7 h-7 bg-orange-50 rounded-lg flex items-center justify-center hover:bg-orange-100 transition-colors">
                <Plus size={14} className="text-orange-500" />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {savedCards.map((card) => (
                <div key={card.last4} className="flex items-center gap-3">
                  <div
                    className={`w-10 h-7 ${card.color} rounded-lg flex items-center justify-center shrink-0`}
                  >
                    <span className="text-white text-[9px] font-black">{card.type}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 text-xs">
                      {card.type} •••• {card.last4}
                    </div>
                    <div className="text-gray-400 text-[11px]">Expires {card.expiry}</div>
                  </div>
                  <CreditCard size={14} className="text-gray-300 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Pro benefits */}
          <div className="bg-orange-50 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
                <Crown size={15} className="text-white" />
              </div>
              <div className="font-bold text-gray-900 text-sm">Foodie Pro Perks</div>
            </div>
            <div className="flex flex-col gap-2 mb-4">
              {[
                "10% cashback on every order",
                "Free delivery always",
                "Priority customer support",
              ].map((perk) => (
                <div key={perk} className="flex items-start gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={9} className="text-white" />
                  </div>
                  <span className="text-gray-600 text-xs leading-snug">{perk}</span>
                </div>
              ))}
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-2.5 rounded-xl transition-colors">
              Manage Pro
            </button>
          </div>

          {/* Quick links */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {[
              { label: "Transaction History", sub: "View all past payments" },
              { label: "Refer & Earn", sub: "Get $10 per referral" },
              { label: "Help & Support", sub: "Wallet related queries" },
            ].map(({ label, sub }, i, arr) => (
              <button
                key={label}
                className={`w-full flex items-center gap-3 px-4 py-3.5 hover:bg-gray-50 transition-colors text-left ${
                  i !== arr.length - 1 ? "border-b border-gray-50" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 text-xs">{label}</div>
                  <div className="text-gray-400 text-[11px]">{sub}</div>
                </div>
                <ChevronRight size={14} className="text-gray-300 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
