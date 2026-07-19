import WalletContainer from "@/container/WalletContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallet",
  description:
    "Manage your Foodie wallet balance, view transaction history, add money, and track cashback rewards.",
  openGraph: {
    title: "Wallet | Foodie",
    description: "Manage your Foodie wallet balance, view transaction history, and track cashback.",
    url: "https://foodie-online.vercel.app/wallet",
  },
  twitter: {
    title: "Wallet | Foodie",
    description: "Manage your Foodie wallet balance, view transaction history, and track cashback.",
  },
};

export default function Page() {
  return <WalletContainer />;
}
