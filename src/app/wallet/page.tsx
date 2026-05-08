import type { Metadata } from "next";
import WalletContainer from "@/container/WalletContainer";

export const metadata: Metadata = {
  title: "Wallet",
  description:
    "Manage your Foodie wallet balance, view transaction history, add money, and track cashback rewards.",
  openGraph: {
    title: "Wallet | Foodie",
    description: "Manage your Foodie wallet balance, view transaction history, and track cashback.",
    url: "https://foodie.app/wallet",
  },
  twitter: {
    title: "Wallet | Foodie",
    description: "Manage your Foodie wallet balance, view transaction history, and track cashback.",
  },
};

export default function Page() {
  return <WalletContainer />;
}
