"use client";
import React from "react";

const PricingSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development Packages",
    provider: {
      "@type": "Organization",
      name: "StackMates",
      url: "https://stackmates-v1.vercel.app",
    },
    serviceType: "Web Development",
    offers: [
      {
        "@type": "Offer",
        name: "Starter Package",
        price: "600",
        priceCurrency: "USD",
        description:
          "Modern responsive website, up to 5 pages, basic SEO setup, and email support.",
        url: "https://stackmates-v1.vercel.app/pricing",
      },
      {
        "@type": "Offer",
        name: "Growth Package",
        price: "1200",
        priceCurrency: "USD",
        description:
          "Advanced package with up to 15 pages, advanced SEO, analytics, and priority support.",
        url: "https://stackmates-v1.vercel.app/pricing",
      },
      {
        "@type": "Offer",
        name: "Enterprise Package",
        price: "Custom",
        priceCurrency: "USD",
        description:
          "Tailored solutions for large organizations with unlimited pages, maintenance, and full customization.",
        url: "https://stackmates-v1.vercel.app/pricing",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default PricingSchema;
