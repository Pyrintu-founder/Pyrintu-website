import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      desc: "Perfect for prototyping and small projects",
      features: [
        "Up to 10K requests/month",
        "Basic monitoring",
        "Community support",
        "Single model deployment",
      ],
      notIncluded: [
        "Custom domains",
        "SLA guarantees",
        "Priority support",
      ]
    },
    {
      name: "Pro",
      price: "$99",
      desc: "For growing teams and production workloads",
      features: [
        "Up to 1M requests/month",
        "Advanced monitoring",
        "Email support",
        "Up to 10 models",
        "Custom domains",
        "A/B testing",
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "For large-scale deployments",
      features: [
        "Unlimited requests",
        "Dedicated infrastructure",
        "24/7 phone support",
        "Unlimited models",
        "Custom SLA",
        "Compliance suite",
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold font-heading text-white mb-6">Pricing</h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
          Simple, transparent pricing. Start free, scale as you grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div key={plan.name} className={`glass p-8 rounded-2xl border transition-all duration-300 flex flex-col h-full ${plan.popular ? 'border-[rgba(99,102,241,0.4)] shadow-2xl' : 'border-[rgba(255,255,255,0.1)]'}`}>
            {plan.popular && (
              <span className="text-xs font-semibold bg-[var(--brand-primary)] text-white px-3 py-1 rounded-full w-fit mb-4">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-[var(--text-secondary)] mb-6">{plan.desc}</p>
            <div className="text-4xl font-bold text-white mb-6">
              {plan.price}<span className="text-lg text-[var(--text-secondary)]">/month</span>
            </div>
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-[var(--brand-primary)]" />
                  <span className="text-[var(--text-secondary)]">{f}</span>
                </li>
              ))}
              {plan.notIncluded && plan.notIncluded.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="text-[var(--text-secondary)]">{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className={`btn-${plan.popular ? 'primary' : 'ghost'} w-full justify-center`}>
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};