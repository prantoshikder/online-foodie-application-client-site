import Image from "next/image";

export default function HeroBanner() {
  return (
    <div
      className="relative rounded-3xl overflow-hidden mb-6 bg-orange-50"
      style={{ minHeight: 200 }}
    >
      <div className="flex items-center h-full">
        {/* Text */}
        <div className="flex-1 p-8 z-10">
          <div className="flex items-center gap-1 text-orange-500 font-semibold text-sm mb-2">
            <span>HOT DEAL</span>
            <span>🔥</span>
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">
            50% OFF on
            <br />
            your first order
          </h1>
          <div className="inline-block border-2 border-orange-400 rounded-lg px-4 py-1.5 text-orange-500 text-sm font-semibold mb-5">
            Use code: WELCOME50
          </div>
          <br />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-xl transition-colors shadow-md">
            Order Now
          </button>
        </div>

        {/* Image */}
        <div className="w-80 h-52 shrink-0 relative">
          <Image
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80"
            alt="Burger"
            fill
            className="object-cover rounded-3xl"
            sizes="320px"
            priority
          />
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-8 flex gap-2">
        <span className="w-6 h-2 bg-white rounded-full opacity-80" />
        <span className="w-2 h-2 bg-orange-400 rounded-full" />
      </div>
    </div>
  );
}
