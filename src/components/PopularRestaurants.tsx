import RestaurantCard from "./RestaurantCard";

const restaurants = [
  {
    name: "Cheesy Bites",
    cuisine: "Pizza, Italian",
    rating: 4.6,
    time: "30–40 min",
    price: "$$",
    discount: "20% OFF",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  },
  {
    name: "Burger House",
    cuisine: "Burger, American",
    rating: 4.5,
    time: "25–35 min",
    price: "$$",
    discount: "15% OFF",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  },
  {
    name: "Biryani King",
    cuisine: "Biryani, Indian",
    rating: 4.7,
    time: "30–45 min",
    price: "$$",
    discount: "10% OFF",
    image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&q=80",
  },
  {
    name: "Wok Express",
    cuisine: "Chinese, Asian",
    rating: 4.4,
    time: "20–30 min",
    price: "$",
    discount: "15% OFF",
    image: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=400&q=80",
  },
];

export default function PopularRestaurants() {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Popular Restaurants</h2>
        <button className="text-orange-500 text-sm font-semibold hover:underline">View all</button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {restaurants.map((r) => (
          <RestaurantCard key={r.name} restaurant={r} />
        ))}
      </div>
    </div>
  );
}
