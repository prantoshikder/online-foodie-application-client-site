import type { Metadata } from "next";
import ProfileContainer from "@/container/ProfileContainer";

export const metadata: Metadata = {
  title: "My Profile",
  description:
    "Manage your Foodie account — update personal details, delivery addresses, payment methods, and notification preferences.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "My Profile | Foodie",
    description: "Manage your Foodie account and preferences.",
    url: "https://foodie.app/profile",
  },
};

export default function Page() {
  return <ProfileContainer />;
}
