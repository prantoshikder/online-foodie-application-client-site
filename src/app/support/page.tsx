import SupportContainer from "@/container/SupportContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help & Support",
  description:
    "Get help with your Foodie orders. Browse FAQs, chat live with support, or contact us via phone and email. We're here 24/7.",
  keywords: [
    "food delivery support",
    "order help",
    "contact foodie",
    "foodie FAQ",
    "customer service",
  ],
  openGraph: {
    title: "Help & Support | Foodie",
    description:
      "Get help with your orders. Browse FAQs, chat live, or contact us via phone and email.",
    url: "https://foodie-online.vercel.app/support",
  },
  twitter: {
    title: "Help & Support | Foodie",
    description:
      "Get help with your orders. Browse FAQs, chat live, or contact us via phone and email.",
  },
};

export default function Page() {
  return <SupportContainer />;
}
