import type { Metadata } from "next";
import FavoritesContainer from "@/container/FavoritesContainer";

export const metadata: Metadata = {
  title: "Favourites",
  description:
    "Your saved restaurants and favourite dishes, all in one place. Quickly reorder from the meals you love most.",
  openGraph: {
    title: "Favourites | Foodie",
    description: "Your saved restaurants and favourite dishes, all in one place.",
    url: "https://foodie.app/favorites",
  },
  twitter: {
    title: "Favourites | Foodie",
    description: "Your saved restaurants and favourite dishes, all in one place.",
  },
};

export default function Page() {
  return <FavoritesContainer />;
}
