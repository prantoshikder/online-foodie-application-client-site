import type { Metadata, Viewport } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/ReduxProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://foodie-online.vercel.app"),
  title: {
    default: "Foodie — Delicious Delivered",
    template: "%s | Foodie",
  },
  description:
    "Order food from the best restaurants near you. Fast delivery, exclusive deals, and a huge variety of cuisines — pizza, burgers, biryani, sushi and more.",
  keywords: [
    "food delivery",
    "order food online",
    "restaurant delivery",
    "fast food",
    "pizza delivery",
    "burger delivery",
    "biryani delivery",
    "sushi delivery",
    "online food ordering",
    "food app",
  ],
  authors: [{ name: "Foodie" }],
  creator: "Foodie",
  publisher: "Foodie",
  category: "food",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://foodie-online.vercel.app",
    siteName: "Foodie",
    title: "Foodie — Delicious Delivered",
    description:
      "Order food from the best restaurants near you. Fast delivery, exclusive deals, and a huge variety of cuisines.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Foodie — Delicious Delivered",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Foodie — Delicious Delivered",
    description:
      "Order food from the best restaurants near you. Fast delivery, exclusive deals, and a huge variety of cuisines.",
    images: ["/opengraph-image"],
    creator: "@foodieapp",
    site: "@foodieapp",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Foodie",
  url: "https://foodie-online.vercel.app",
  description:
    "Order food from the best restaurants near you. Fast delivery, exclusive deals, and a huge variety of cuisines.",
  applicationCategory: "FoodOrderingApplication",
  operatingSystem: "Web",
  inLanguage: "en",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free to use food delivery platform",
  },
  featureList: [
    "Real-time order tracking",
    "Multiple cuisine options",
    "Exclusive discount codes",
    "Foodie Pro subscription",
    "Live chat support",
  ],
  screenshot: "https://foodie-online.vercel.app/opengraph-image",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "12400",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body suppressHydrationWarning className="h-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
