import type { Metadata } from "next";
import OffersContainer from "@/container/OffersContainer";

export const metadata: Metadata = {
  title: "Offers & Deals",
  description:
    "Discover the best food deals, discount codes, bank offers, and free delivery promotions. Save more every time you order.",
  keywords: [
    "food offers",
    "food deals",
    "discount codes",
    "free delivery",
    "promo codes",
    "bank offers",
    "restaurant discounts",
  ],
  openGraph: {
    title: "Offers & Deals | Foodie",
    description:
      "Discover the best food deals, discount codes, bank offers, and free delivery promotions.",
    url: "https://foodie.app/offers",
  },
  twitter: {
    title: "Offers & Deals | Foodie",
    description:
      "Discover the best food deals, discount codes, bank offers, and free delivery promotions.",
  },
};

export default function Page() {
  return <OffersContainer />;
}
