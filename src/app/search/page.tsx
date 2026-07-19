import SearchContainer from "@/container/SearchContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Restaurants & Dishes",
  description:
    "Search thousands of restaurants and dishes near you. Filter by cuisine, price, rating, and delivery time to find exactly what you're craving.",
  keywords: [
    "search food",
    "find restaurants",
    "order pizza",
    "order burger",
    "nearby restaurants",
    "food search",
    "cuisine filter",
  ],
  openGraph: {
    title: "Search Restaurants & Dishes | Foodie",
    description:
      "Search thousands of restaurants and dishes near you. Filter by cuisine, price, and more.",
    url: "https://foodie-online.vercel.app/search",
  },
  twitter: {
    title: "Search Restaurants & Dishes | Foodie",
    description:
      "Search thousands of restaurants and dishes near you. Filter by cuisine, price, and more.",
  },
};

export default function Page() {
  return <SearchContainer />;
}
