import { Code2, Cloud, Shield, Zap, Database, Brain } from "lucide-react";

export const Partners = () => {
  const partners = [
    { name: "Vercel", icon: <Zap className="w-8 h-8" />, desc: "Edge deployment partner" },
    { name: "MongoDB", icon: <Database className="w-8 h-8" />, desc: "Database infrastructure" },
    { name: "Cloudflare", icon: <Cloud className="w-8 h-8" />, desc: "CDN & security" },
    { name: "GitHub", icon: <Code2 className="w-8 h-8" />, desc: "Source control integration" },
    { name: "Docker", icon: <Shield className="w-8 h-8" />, desc: "Container ecosystem" },
    { name: "TensorFlow", icon: <Brain className="w-8 h-8" />, desc: "ML framework support" },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold font-heading text-white mb-6">Partners & Integrations</h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
          We integrate with the best tools in the ecosystem to provide a seamless experience.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {partners.map((partner, i) => (
          <div key={i} className="glass p-6 rounded-2xl border border-[rgba(255,255,255,0.1)] flex flex-col items-center justify-center text-center hover:border-[rgba(16,185,129,0.3)] transition-colors">
            <div className="text-[var(--brand-primary)] mb-3">{partner.icon}</div>
            <h3 className="text-white font-semibold mb-1">{partner.name}</h3>
            <p className="text-[var(--text-secondary)] text-xs">{partner.desc}</p>
          </div>
        ))}
      </div>

      <div className="glass p-12 rounded-3xl border border-[rgba(255,255,255,0.1)] mt-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Become a Partner</h2>
        <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
          Interested in integrating with Pyrintu or becoming a technology partner? We're always looking for ways to expand our ecosystem.
        </p>
        <a href="mailto:partners@pyrintu.com" className="btn-primary">
          Contact Partnerships
        </a>
      </div>
    </div>
  );
};