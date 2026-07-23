import RegisterContainer from "@/container/RegisterContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account",
  description:
    "Create a free Foodie account and start ordering from thousands of restaurants near you. $10 off your first order.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Create Account | Foodie",
    description: "Join the tastiest club in town — free forever, no card required.",
    url: "https://foodie-online.vercel.app/register",
  },
};

export default function Page() {
  return <RegisterContainer />;
}
