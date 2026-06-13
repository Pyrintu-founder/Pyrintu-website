import { useState } from "react";
import axios from "axios";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await axios.post(`${API}/contact`, formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">Let's talk about the future</h1>
          <p className="text-xl text-[var(--text-secondary)]">Whether you want to join our waitlist or explore enterprise solutions, we're here to help.</p>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl border border-[rgba(255,255,255,0.1)] relative overflow-hidden">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-up">
              <CheckCircle2 className="w-16 h-16 text-[var(--brand-primary)] mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Message Received</h3>
              <p className="text-[var(--text-secondary)]">We'll be in touch with you shortly.</p>
              <button onClick={() => setStatus("idle")} className="mt-8 btn-ghost">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white">Full Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--brand-primary)] transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-white">Email Address</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--brand-primary)] transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Message</label>
                <textarea required rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--brand-primary)] transition-colors resize-none" placeholder="Tell us about what you're building..."></textarea>
              </div>
              {status === "error" && <p className="text-red-400 text-sm">Failed to send message. Please try again.</p>}
              <button disabled={status === "submitting"} type="submit" className="btn-primary w-full justify-center mt-2 group disabled:opacity-70">
                {status === "submitting" ? "Sending..." : "Send Message"}
                {!status && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};