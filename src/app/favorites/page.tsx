import FavoritesContainer from "@/container/FavoritesContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favourites",
  description:
    "Your saved restaurants and favourite dishes, all in one place. Quickly reorder from the meals you love most.",
  openGraph: {
    title: "Favourites | Foodie",
    description: "Your saved restaurants and favourite dishes, all in one place.",
    url: "https://foodie-online.vercel.app/favorites",
  },
  twitter: {
    title: "Favourites | Foodie",
    description: "Your saved restaurants and favourite dishes, all in one place.",
  },
};

export default function Page() {
  return <FavoritesContainer />;
}
