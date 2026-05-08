"use client";

import { useState } from "react";
import { Heart, Star } from "lucide-react";

interface Restaurant {
  name: string;
  cuisine: string;
  rating: number;
  time: string;
  price: string;
  discount: string;
  image: string;
}

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="relative">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-36 object-cover" />
        <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
          {restaurant.discount}
        </span>
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
        >
          <Heart size={16} className={liked ? "fill-red-500 text-red-500" : "text-gray-400"} />
        </button>
      </div>
      <div className="p-3">
        <div className="font-bold text-gray-900 text-sm mb-0.5">{restaurant.name}</div>
        <div className="text-gray-400 text-xs mb-2">{restaurant.cuisine}</div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="font-medium text-gray-700">{restaurant.rating}</span>
          </span>
          <span>{restaurant.time}</span>
          <span className="font-medium text-gray-700">{restaurant.price}</span>
        </div>
      </div>
    </div>
  );
}
