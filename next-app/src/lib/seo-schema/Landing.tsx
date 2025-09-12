"use client";
import React from "react";

const LandingSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "StackMates",
    url: "https://stackmates-v1.vercel.app",
    logo: "https://stackmates-v1.vercel.app/og.png",
    sameAs: [
      "https://www.linkedin.com/company/stackmates",
      "https://twitter.com/stackmates",
    ],
    description:
      "StackMates builds modern websites, scalable SaaS platforms, and backend solutions with Next.js, React, and Node.js.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "prep.interview.cloud@gmail.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LandingSchema;
