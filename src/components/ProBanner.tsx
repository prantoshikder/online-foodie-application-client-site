import { Crown } from "lucide-react";

export default function ProBanner() {
  return (
    <div className="flex items-center justify-between bg-orange-50 rounded-2xl px-5 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center shrink-0">
          <Crown size={18} className="text-white" />
        </div>
        <div>
          <div className="font-bold text-gray-900 text-sm">Join Foodie Pro</div>
          <div className="text-gray-500 text-xs">
            Unlock exclusive offers, free delivery &amp; more!
          </div>
        </div>
      </div>
      <button className="text-orange-500 font-bold text-sm hover:underline shrink-0">
        Explore Pro
      </button>
    </div>
  );
}
