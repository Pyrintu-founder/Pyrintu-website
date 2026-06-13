import { Briefcase, Code, Users, Coffee, MapPin, Clock } from "lucide-react";

export const Careers = () => {
  const benefits = [
    { icon: <Briefcase className="w-6 h-6" />, title: "Equity Compensation", desc: "Share in the company's success with competitive equity packages." },
    { icon: <Code className="w-6 h-6" />, title: "Tech Stack", desc: "Work with cutting-edge AI/ML tools and modern infrastructure." },
    { icon: <Users className="w-6 h-6" />, title: "Remote First", desc: "Work from anywhere with our distributed team culture." },
    { icon: <Coffee className="w-6 h-6" />, title: "Unlimited PTO", desc: "Take time off when you need it. We trust you to manage it." },
    { icon: <MapPin className="w-6 h-6" />, title: "Hub Location", desc: "Hyderabad, India - but work from anywhere globally." },
    { icon: <Clock className="w-6 h-6" />, title: "Flexible Hours", desc: "Async work culture with flexible schedules." },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold font-heading text-white mb-6">
          Join our team
        </h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
          We're building the future of AI infrastructure. Come help us ship products that matter.
        </p>
      </div>

      <div className="glass p-12 rounded-3xl border border-[rgba(255,255,255,0.1)] mb-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">We're Hiring</h2>
        <p className="text-[var(--text-secondary)] mb-8">
          Interested in joining our early team? We're looking for exceptional engineers, researchers, and designers.
        </p>
        <a href="mailto:careers@pyrintu.com" className="btn-primary inline-flex items-center gap-2">
          Get in Touch <Briefcase className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => (
          <div key={i} className="glass p-6 rounded-2xl border border-[rgba(255,255,255,0.1)]">
            <div className="w-12 h-12 rounded-xl bg-[rgba(16,185,129,0.1)] flex items-center justify-center mb-4">
              <div className="text-[var(--brand-primary)]">{benefit.icon}</div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
            <p className="text-sm text-[var(--text-secondary)]">{benefit.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};