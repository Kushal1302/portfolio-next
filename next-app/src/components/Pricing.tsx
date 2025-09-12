import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$600+",
      description:
        "Perfect for individuals & small businesses getting started online.",
      features: [
        "Modern responsive website",
        "Up to 5 pages",
        "Basic SEO setup",
        "Email support",
      ],
    },
    {
      name: "Growth",
      price: "$1200+",
      description: "Best for growing businesses that need scalability.",
      features: [
        "Everything in Starter",
        "Up to 15 pages",
        "Advanced SEO & analytics",
        "Priority support",
        "Custom integrations",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      description:
        "Tailored solutions for large organizations & complex needs.",
      features: [
        "Everything in Growth",
        "Unlimited pages",
        "Dedicated project manager",
        "Ongoing maintenance",
        "Full customization",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white">
      <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
      <p className="text-lg text-gray-300 mb-12">
        Choose the package that fits your business — starting from just{" "}
        <span className="text-[#6C63FF] font-semibold">$600</span>.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-3xl font-extrabold text-[#6C63FF] mb-4">
              {plan.price}
            </p>
            <p className="text-gray-300 mb-6">{plan.description}</p>
            <ul className="space-y-3 flex-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-gray-200">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <a
              href={"/#contact"}
              className="mt-8 bg-[#6C63FF] hover:bg-[#574BEB] text-white py-3 px-6 rounded-xl font-semibold transition"
            >
              Contact Us
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
