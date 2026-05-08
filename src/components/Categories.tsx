const categories = [
  { emoji: "🍕", label: "Pizza", bg: "#FFF3ED" },
  { emoji: "🍔", label: "Burger", bg: "#FFF8ED" },
  { emoji: "🍛", label: "Biryani", bg: "#FFF3ED" },
  { emoji: "🥡", label: "Chinese", bg: "#FFEEF0" },
  { emoji: "🎂", label: "Desserts", bg: "#FFEEF0" },
  { emoji: "🥤", label: "Beverages", bg: "#F0F0FF" },
  { emoji: "🥗", label: "Healthy", bg: "#F0FFF4" },
];

export default function Categories() {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Top Categories</h2>
        <button className="text-orange-500 text-sm font-semibold hover:underline">View all</button>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map(({ emoji, label, bg }) => (
          <button key={label} className="flex flex-col items-center gap-2 group shrink-0">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-105"
              style={{ backgroundColor: bg }}
            >
              {emoji}
            </div>
            <span className="text-xs font-medium text-gray-600">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
