import type { Metadata } from "next";
import OrdersContainer from "@/container/OrdersContainer";

export const metadata: Metadata = {
  title: "My Orders",
  description:
    "Track your active orders in real-time, view your order history, and reorder your favourite meals with one tap.",
  openGraph: {
    title: "My Orders | Foodie",
    description: "Track your active orders in real-time and view your complete order history.",
    url: "https://foodie.app/orders",
  },
  twitter: {
    title: "My Orders | Foodie",
    description: "Track your active orders in real-time and view your complete order history.",
  },
};

export default function Page() {
  return <OrdersContainer />;
}
