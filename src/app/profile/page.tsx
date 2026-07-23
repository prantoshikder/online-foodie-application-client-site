import ProfileContainer from "@/container/ProfileContainer";
import AuthGuard from "@/components/AuthGuard";
import type { Metadata } from "next";

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
    url: "https://foodie-online.vercel.app/profile",
  },
};

export default function Page() {
  return (
    <AuthGuard>
      <ProfileContainer />
    </AuthGuard>
  );
}
