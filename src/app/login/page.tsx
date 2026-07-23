import LoginContainer from "@/container/LoginContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to your Foodie account to reorder favourites, track deliveries live, and unlock member-only offers.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Sign In | Foodie",
    description: "Sign in to continue your foodie journey.",
    url: "https://foodie-online.vercel.app/login",
  },
};

export default function Page() {
  return <LoginContainer />;
}
