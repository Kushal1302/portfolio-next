import type { Metadata } from "next";
import Pricing from "@/components/Pricing";
import PricingSchema from "@/lib/seo-schema/Pricing";

export const metadata: Metadata = {
  title: "Affordable Web Development Pricing | StackMates",
  description:
    "Transparent pricing for web development services starting at $600. Choose from Starter, Growth, or Enterprise packages to fit your business needs.",
  keywords: [
    "web development pricing",
    "website design cost",
    "affordable web development",
    "business website packages",
    "StackMates pricing",
  ],
  openGraph: {
    title: "Affordable Web Development Pricing | StackMates",
    description:
      "Transparent pricing for web development services starting at $600. Flexible packages for startups, growing businesses, and enterprises.",
    url: "https://stackmates-v1.vercel.app/pricing",
    siteName: "StackMates",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Pricing />
      <PricingSchema />
    </>
  );
}
