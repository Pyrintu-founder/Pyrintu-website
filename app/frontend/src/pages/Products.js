import { ArrowRight, Cpu, Shield, BarChart, Globe, Zap, ChevronRight, Database, Lock, Layers, Activity } from "lucide-react";
import { Link } from "react-router-dom";

export const Products = () => {
  const products = [
    { 
      icon: <Cpu className="w-8 h-8" />, 
      title: "Model Deployment Pipeline", 
      desc: "One-click deployment for any ML framework. From PyTorch to TensorFlow, deploy with zero configuration.",
      features: ["Auto-scaling", "GPU acceleration", "A/B testing"]
    },
    { 
      icon: <BarChart className="w-8 h-8" />, 
      title: "Model Observability", 
      desc: "Monitor drift, accuracy, and performance in real-time. Get alerts before issues impact production.",
      features: ["Drift detection", "Performance metrics", "Custom alerts"]
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "Security & Compliance", 
      desc: "Enterprise-grade security with built-in SOC2, HIPAA, and GDPR compliance frameworks.",
      features: ["Encryption at rest", "Audit logs", "Compliance reports"]
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold font-heading text-white mb-6">
          Our Solutions
        </h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
          Production-grade tools designed for modern AI engineering teams.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <div key={i} className="glass glass-hover p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] flex flex-col h-full">
            <div className="h-16 w-16 rounded-2xl bg-[rgba(99,102,241,0.1)] flex items-center justify-center mb-6">
              <div className="text-[var(--brand-primary)]">{product.icon}</div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">{product.title}</h2>
            <p className="text-[var(--text-secondary)] mb-6 flex-grow">{product.desc}</p>
<ul className="space-y-2 mb-6">
               {product.features.map((f, j) => (
                 <li key={j} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                   <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)]"></span>
                   {f}
                 </li>
               ))}
             </ul>
             <Link to="/contact" className="btn-primary mt-auto justify-center">
               Get Early Access <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <div className="glass p-12 rounded-3xl border border-[rgba(255,255,255,0.1)] text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to get started?</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Get early access to Pyrintu and start building with production-grade AI infrastructure.
          </p>
          <Link to="/contact" className="btn-primary group">
            Join Waitlist <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};