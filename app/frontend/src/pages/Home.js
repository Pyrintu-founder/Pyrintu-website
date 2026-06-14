import { ArrowRight, Cpu, Shield, BarChart, Globe, Zap, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Home = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await axios.post(`${API}/waitlist`, { email });
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  const features = [
    { icon: "🚀", title: "Blazing Fast", desc: "Deploy models in seconds with auto-scaling infrastructure." },
    { icon: "🛡️", title: "Enterprise Security", desc: "SOC2, HIPAA, GDPR compliant from day one." },
    { icon: "📊", title: "Real-time Monitoring", desc: "Track performance, drift, and accuracy live in production." },
    { icon: "🌐", title: "Global Edge Network", desc: "200+ edge locations for <10ms inference globally." },
    { icon: "⚡", title: "Instant Scaling", desc: "Zero to millions of requests without configuration." },
    { icon: "🔧", title: "Developer First", desc: "Beautiful APIs, SDKs, and docs for rapid integration." },
  ];

  const stats = [
    { value: "200+", label: "Edge Locations" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "<10ms", label: "Avg Latency" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-primary)] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight mb-8 animate-fade-up">
            Production-Ready<br />
            <span className="text-gradient">AI Infrastructure</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-4 animate-fade-up">
            Founded by <a href="https://linkedin.com/in/johandhaneja" target="_blank" rel="noopener noreferrer" className="text-[var(--brand-primary)] hover:underline">Johan D.</a>
          </p>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 animate-fade-up">
            Based in Hyderabad, India. Building ML infrastructure for the next generation of intelligent products.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <Link to="/contact" className="btn-primary w-full sm:w-auto group">
              Get Early Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/products" className="btn-ghost w-full sm:w-auto">
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-y border-[rgba(255,255,255,0.05)]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">{stat.value}</div>
              <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 relative" id="products">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">Everything you need to scale</h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">Our platform provides a complete ecosystem for modern AI engineering teams.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="glass glass-hover p-8 rounded-2xl transition-all duration-300">
                <div className="h-12 w-12 rounded-xl bg-[rgba(255,255,255,0.05)] flex items-center justify-center mb-6 border border-[rgba(255,255,255,0.1)] text-2xl">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">Join the Waitlist</h2>
          <p className="text-[var(--text-secondary)] mb-8">Be among the first to access our platform when we launch.</p>
          
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4">
              <CheckCircle2 className="w-12 h-12 text-[var(--brand-primary)]" />
              <p className="text-white">You're on the list! We'll notify you when we launch.</p>
            </div>
          ) : (
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                required 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="your@email.com" 
                className="flex-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-full px-6 py-4 text-white focus:outline-none focus:border-[var(--brand-primary)]"
              />
              <button disabled={status === "submitting"} type="submit" className="btn-primary whitespace-nowrap">
                {status === "submitting" ? "Joining..." : "Join Waitlist"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
};