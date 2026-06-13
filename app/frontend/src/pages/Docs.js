import { Book, Code, Terminal, Database, Shield, Zap, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const Docs = () => {
  const docSections = [
    { 
      icon: <Book className="w-6 h-6" />, 
      title: "Getting Started", 
      desc: "Quickstart guides and tutorials",
      links: ["Quickstart", "Installation", "First Model"]
    },
    { 
      icon: <Terminal className="w-6 h-6" />, 
      title: "API Reference", 
      desc: "Complete API documentation",
      links: ["REST API", "SDKs", "Authentication"]
    },
    { 
      icon: <Database className="w-6 h-6" />, 
      title: "Model Deployment", 
      desc: "Deploy models at scale",
      links: ["Model Registry", "Versioning", "Canary Deployments"]
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Security", 
      desc: "Enterprise-grade protection",
      links: ["Compliance", "Encryption", "Access Control"]
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Monitoring", 
      desc: "Track performance and health",
      links: ["Metrics", "Alerts", "Logs"]
    },
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: "Edge Network", 
      desc: "Global deployment infrastructure",
      links: ["Regions", "Latency", "Caching"]
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold font-heading text-white mb-6">Documentation</h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
          Everything you need to integrate and deploy with Pyrintu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docSections.map((section, i) => (
          <div key={i} className="glass glass-hover p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-[rgba(16,185,129,0.1)] flex items-center justify-center mb-6">
              <div className="text-[var(--brand-primary)]">{section.icon}</div>
            </div>
            <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
            <p className="text-[var(--text-secondary)] mb-6 flex-grow">{section.desc}</p>
            <ul className="space-y-2">
              {section.links.map((link, j) => (
                <li key={j}>
                  <Link to="/contact" className="text-sm text-[var(--brand-primary)] hover:underline">
                    {link} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};