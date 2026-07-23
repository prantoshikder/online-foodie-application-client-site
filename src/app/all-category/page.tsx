import AllCategoryContainer from "@/container/AllCategoryContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Categories",
  description:
    "Browse every food category on Foodie — pizza, burgers, biryani, sushi, desserts, healthy bowls and more. Find your craving and order from thousands of restaurants.",
  openGraph: {
    title: "All Categories | Foodie",
    description:
      "Browse every food category on Foodie and order from thousands of restaurants near you.",
    url: "https://foodie-online.vercel.app/all-category",
  },
  twitter: {
    title: "All Categories | Foodie",
    description:
      "Browse every food category on Foodie and order from thousands of restaurants near you.",
  },
};

export default function AllCategoryPage() {
  return <AllCategoryContainer />;
}
