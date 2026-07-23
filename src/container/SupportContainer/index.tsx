"use client";

import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import {
  MessageCircle,
  Phone,
  Mail,
  ChevronDown,
  Search,
  X,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  Headphones,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

const faqs = [
  {
    category: "Orders",
    q: "How do I track my order?",
    a: "Go to Orders → find your active order → click Track Order. You'll see real-time rider location on a map.",
  },
  {
    category: "Orders",
    q: "Can I cancel my order after placing it?",
    a: "You can cancel within 2 minutes of placing. After that, contact support for help. Orders already picked up cannot be cancelled.",
  },
  {
    category: "Payments",
    q: "How do I apply a promo code?",
    a: "Add items to cart → go to checkout → tap 'Apply Promo Code' → enter your code → tap Apply.",
  },
  {
    category: "Orders",
    q: "What if I receive the wrong order?",
    a: "Tap 'Report Issue' on your order page. We'll refund you or resend the correct order within 30 minutes.",
  },
  {
    category: "Foodie Pro",
    q: "How does Foodie Pro work?",
    a: "Foodie Pro is a monthly subscription ($9.99/mo) that gives you free delivery, 10% cashback, and exclusive deals.",
  },
  {
    category: "Payments",
    q: "Is my payment information secure?",
    a: "Yes. We use 256-bit SSL encryption and are PCI-DSS compliant. We never store your full card details.",
  },
  {
    category: "Account",
    q: "How do I change my delivery address?",
    a: "Go to Profile → Saved Addresses → tap the pencil icon on an address or 'Add New Address' to save a new one.",
  },
  {
    category: "Orders",
    q: "What is the estimated delivery time?",
    a: "Delivery time depends on your location and the restaurant. Typical delivery is 25–45 minutes. You can see the estimate before placing your order.",
  },
];

const faqCategories = ["All", "Orders", "Payments", "Account", "Foodie Pro"];

const contactOptions = [
  {
    icon: MessageCircle,
    label: "Live Chat",
    desc: "Avg wait: 2 min",
    badge: "Online",
    badgeColor: "bg-green-500",
    bg: "bg-blue-500",
    action: "Start Chat",
  },
  {
    icon: Phone,
    label: "Call Us",
    desc: "+44 800 123 4567",
    badge: "24/7",
    badgeColor: "bg-orange-500",
    bg: "bg-green-500",
    action: "Call Now",
  },
  {
    icon: Mail,
    label: "Email Us",
    desc: "Reply in ~2 hrs",
    badge: "Fast",
    badgeColor: "bg-blue-500",
    bg: "bg-orange-500",
    action: "Send Email",
  },
];

const helpTopics = [
  { emoji: "🛵", label: "Delivery Issues", color: "bg-green-50 hover:bg-green-100" },
  { emoji: "💳", label: "Payments", color: "bg-blue-50 hover:bg-blue-100" },
  { emoji: "🍔", label: "Wrong Order", color: "bg-orange-50 hover:bg-orange-100" },
  { emoji: "🔒", label: "Account", color: "bg-purple-50 hover:bg-purple-100" },
  { emoji: "⭐", label: "Reviews", color: "bg-yellow-50 hover:bg-yellow-100" },
  { emoji: "👑", label: "Foodie Pro", color: "bg-amber-50 hover:bg-amber-100" },
];

const recentTickets = [
  {
    id: "#TKT-3821",
    subject: "Order delivered late",
    status: "Resolved",
    statusColor: "text-green-500",
    statusBg: "bg-green-100",
    icon: CheckCircle,
    iconColor: "text-green-500",
    time: "2 days ago",
  },
  {
    id: "#TKT-3798",
    subject: "Wrong item received",
    status: "In Progress",
    statusColor: "text-blue-500",
    statusBg: "bg-blue-100",
    icon: Clock,
    iconColor: "text-blue-500",
    time: "4 days ago",
  },
];

export default function SupportContainer() {
  const [open, setOpen] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { from: "bot", text: "Hi Arjun! 👋 How can I help you today?" },
  ]);

  const filtered = faqs.filter((f) => {
    const matchSearch =
      !search ||
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || f.category === activeCategory;
    return matchSearch && matchCategory;
  });

  const sendMessage = () => {
    if (!message.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      { from: "user", text: message },
      {
        from: "bot",
        text: "Thanks for reaching out! A support agent will be with you shortly. Estimated wait: 2 minutes.",
      },
    ]);
    setMessage("");
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col xl:flex-row gap-5 min-h-full">
        {/* ── MAIN ── */}
        <div className="flex-1 min-w-0">
          {/* Hero header */}
          <div
            className="relative rounded-3xl overflow-hidden mb-6 p-6"
            style={{ background: "linear-gradient(135deg, #f97316 0%, #ea580c 60%, #c2410c 100%)" }}
          >
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full" />
            <div className="absolute -bottom-10 right-24 w-32 h-32 bg-white/10 rounded-full" />
            <div className="absolute top-5 right-48 w-4 h-4 bg-white/20 rounded-full" />

            <div className="relative flex items-center gap-5">
              <div className="w-14 h-14 bg-white/20 border border-white/30 rounded-2xl flex items-center justify-center shrink-0">
                <Headphones size={26} className="text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-black text-white mb-0.5">Help & Support</h1>
                <p className="text-orange-100 text-sm">We&apos;re here 24/7 — ask us anything</p>
              </div>
            </div>

            {/* Search bar */}
            <div className="relative mt-5">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for help, topics, FAQs..."
                className="w-full bg-white rounded-2xl pl-11 pr-10 py-3.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none shadow-sm"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2"
                >
                  <X size={15} className="text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>

          {/* Contact options */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            {contactOptions.map(({ icon: Icon, label, desc, badge, badgeColor, bg, action }) => (
              <button
                key={label}
                onClick={() => label === "Live Chat" && setShowChat(true)}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 text-left group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center shrink-0`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <span
                    className={`${badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded-full`}
                  >
                    {badge}
                  </span>
                </div>
                <div className="font-bold text-gray-900 text-sm mb-0.5">{label}</div>
                <div className="text-gray-400 text-xs mb-3">{desc}</div>
                <div className="flex items-center gap-1 text-orange-500 text-xs font-bold">
                  {action}
                  <ChevronRight
                    size={13}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Live chat panel */}
          {showChat && (
            <div className="bg-white rounded-2xl shadow-sm mb-6 overflow-hidden border border-blue-100">
              <div className="flex items-center justify-between px-5 py-3.5 bg-blue-500">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Live Support</div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <span className="text-blue-100 text-xs">Agent online</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowChat(false)}
                  className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <X size={14} className="text-white" />
                </button>
              </div>

              <div className="p-4 flex flex-col gap-3 min-h-32 max-h-48 overflow-y-auto">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                        msg.from === "user"
                          ? "bg-blue-500 text-white rounded-br-sm"
                          : "bg-gray-100 text-gray-700 rounded-bl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-4 pb-4 flex items-center gap-2 border-t border-gray-100 pt-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 transition-colors"
                />
                <button
                  onClick={sendMessage}
                  className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                >
                  <Send size={15} className="text-white" />
                </button>
              </div>
            </div>
          )}

          {/* Help topics */}
          <div className="mb-6">
            <h2 className="font-bold text-gray-900 mb-3">Browse by Topic</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {helpTopics.map(({ emoji, label, color }) => (
                <button
                  key={label}
                  onClick={() => {
                    const cat = faqCategories.find((c) =>
                      label.toLowerCase().includes(c.toLowerCase())
                    );
                    if (cat) setActiveCategory(cat);
                  }}
                  className={`flex items-center gap-2.5 ${color} rounded-2xl px-4 py-3 transition-colors text-left`}
                >
                  <span className="text-xl">{emoji}</span>
                  <span className="font-semibold text-gray-700 text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-gray-900">
                Frequently Asked Questions
                {search && (
                  <span className="ml-2 text-gray-400 text-sm font-normal">
                    ({filtered.length} result{filtered.length !== 1 ? "s" : ""})
                  </span>
                )}
              </h2>
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-2 flex-wrap mb-4">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                    activeCategory === cat
                      ? "bg-orange-500 border-orange-500 text-white"
                      : "border-gray-200 text-gray-500 hover:border-orange-300 bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              {filtered.length === 0 && (
                <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
                  <div className="text-4xl mb-3">🔍</div>
                  <div className="font-bold text-gray-700 mb-1">No results found</div>
                  <div className="text-gray-400 text-sm">
                    Try a different search term or{" "}
                    <button
                      className="text-orange-500 font-semibold hover:underline"
                      onClick={() => setShowChat(true)}
                    >
                      chat with us
                    </button>
                  </div>
                </div>
              )}
              {filtered.map((faq, i) => (
                <div
                  key={i}
                  className={`bg-white rounded-2xl overflow-hidden transition-shadow ${open === i ? "shadow-md" : "shadow-sm"}`}
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left focus:outline-none"
                  >
                    <span
                      className={`shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        faq.category === "Orders"
                          ? "bg-orange-100 text-orange-600"
                          : faq.category === "Payments"
                            ? "bg-blue-100 text-blue-600"
                            : faq.category === "Foodie Pro"
                              ? "bg-amber-100 text-amber-600"
                              : "bg-purple-100 text-purple-600"
                      }`}
                    >
                      {faq.category}
                    </span>
                    <span className="flex-1 font-semibold text-gray-800 text-sm">{faq.q}</span>
                    <ChevronDown
                      size={17}
                      className={`shrink-0 transition-transform duration-300 ${
                        open === i ? "rotate-180 text-orange-500" : "text-gray-400"
                      }`}
                    />
                  </button>
                  {/* Smoothly animate open/close via grid-rows (0fr → 1fr) */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-3">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="w-full xl:w-64 xl:shrink-0 flex flex-col gap-4">
          {/* Support status */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-sm">Support Status</h3>
              <span className="flex items-center gap-1.5 text-green-500 text-xs font-semibold">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                All systems normal
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Live Chat", time: "~2 min", color: "bg-green-500" },
                { label: "Phone Support", time: "~5 min", color: "bg-green-500" },
                { label: "Email Support", time: "~2 hrs", color: "bg-yellow-400" },
              ].map(({ label, time, color }) => (
                <div key={label} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 ${color} rounded-full shrink-0`} />
                    <span className="text-gray-600 text-xs">{label}</span>
                  </div>
                  <span className="text-gray-400 text-xs">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent tickets */}
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-sm">My Tickets</h3>
              <button className="text-orange-500 text-xs font-semibold hover:underline">
                View all
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {recentTickets.map((ticket) => (
                <button
                  key={ticket.id}
                  className="flex items-start gap-3 text-left hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors"
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${ticket.statusBg}`}
                  >
                    <ticket.icon size={14} className={ticket.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 text-xs truncate">
                      {ticket.subject}
                    </div>
                    <div className="flex items-center justify-between mt-0.5">
                      <span className={`text-[10px] font-bold ${ticket.statusColor}`}>
                        {ticket.status}
                      </span>
                      <span className="text-gray-400 text-[10px]">{ticket.time}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <button className="w-full mt-3 border border-dashed border-gray-200 rounded-xl py-2.5 text-xs font-semibold text-gray-500 hover:border-orange-300 hover:text-orange-500 transition-colors flex items-center justify-center gap-1.5">
              <AlertCircle size={13} />
              Raise New Ticket
            </button>
          </div>

          {/* Quick links */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="font-bold text-gray-900 text-sm">Quick Links</h3>
            </div>
            {[
              { label: "Order Issues", emoji: "📦" },
              { label: "Refund Status", emoji: "💰" },
              { label: "Account Help", emoji: "👤" },
              { label: "Report a Bug", emoji: "🐛" },
            ].map(({ label, emoji }, i, arr) => (
              <button
                key={label}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left ${i !== arr.length - 1 ? "border-b border-gray-50" : ""}`}
              >
                <span className="text-base">{emoji}</span>
                <span className="flex-1 text-gray-700 text-xs font-semibold">{label}</span>
                <ExternalLink size={12} className="text-gray-300 shrink-0" />
              </button>
            ))}
          </div>

          {/* Community */}
          <div className="bg-orange-50 rounded-2xl p-4">
            <div className="text-2xl mb-2">💬</div>
            <div className="font-bold text-gray-900 text-sm mb-1">Community Forum</div>
            <div className="text-gray-500 text-xs mb-3 leading-snug">
              Ask questions, share tips, and get help from the Foodie community.
            </div>
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs py-2.5 rounded-xl transition-colors">
              Visit Forum
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
