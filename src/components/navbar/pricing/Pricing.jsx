const plans = [
  {
    id: 1,
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: 0,
    period: "Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
    featured: false,
  },
  {
    id: 2,
    name: "Pro",
    subtitle: "Best for professionals",
    price: 29,
    period: "Month",
    badge: "Most Popular",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    featured: true,
  },
  {
    id: 3,
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: 99,
    period: "Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h2>

          <p className="text-gray-500 mt-3">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

          {plans.map((plan) => (

            <div
              key={plan.id}
              className={`rounded-2xl border p-8 relative transition duration-300 hover:shadow-xl
                ${
                  plan.featured
                    ? "bg-gradient-to-br from-violet-700 to-fuchsia-500 text-white border-transparent scale-105"
                    : "bg-white border-gray-200"
                }`}
            >

              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-300 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-3xl font-bold">
                {plan.name}
              </h3>

              <p
                className={`text-sm mt-2 ${
                  plan.featured ? "text-violet-100" : "text-gray-500"
                }`}
              >
                {plan.subtitle}
              </p>

              <div className="mt-6">

                <span className="text-5xl font-bold">
                  ${plan.price}
                </span>

                <span
                  className={`${
                    plan.featured ? "text-violet-100" : "text-gray-500"
                  }`}
                >
                  /{plan.period}
                </span>

              </div>

              <ul className="mt-8 space-y-3">

                {plan.features.map((feature, index) => (

                  <li
                    key={index}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-400">✓</span>

                    <span
                      className={
                        plan.featured
                          ? "text-violet-100"
                          : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>

                ))}

              </ul>

              <button
                className={`w-full mt-8 py-3 rounded-full font-semibold transition
                  ${
                    plan.featured
                      ? "bg-white text-violet-600 hover:bg-gray-100"
                      : "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white"
                  }`}
              >
                {plan.button}
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Pricing;