import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.08)] bg-[var(--bg-secondary)] pt-16 pb-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2 flex flex-col items-start gap-6">
          <Logo size={32} />
          <p className="text-[var(--text-secondary)] text-sm max-w-sm">
            We build production-grade AI/ML products that solve real problems. Scale your infrastructure and deploy with confidence.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://twitter.com/pyrintu" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com/company/pyrintu" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/pyrintu" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors">
              GitHub
            </a>
            <a href="https://instagram.com/pyrintuai" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition-colors">
              Instagram
            </a>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold">Product</h4>
          <Link to="/products" className="text-[var(--text-secondary)] text-sm hover:text-[var(--brand-primary)] transition-colors">Products</Link>
          <Link to="/pricing" className="text-[var(--text-secondary)] text-sm hover:text-[var(--brand-primary)] transition-colors">Pricing</Link>
          <Link to="/docs" className="text-[var(--text-secondary)] text-sm hover:text-[var(--brand-primary)] transition-colors">Documentation</Link>
          <Link to="/status" className="text-[var(--text-secondary)] text-sm hover:text-[var(--brand-primary)] transition-colors">System Status</Link>
          <Link to="/blog" className="text-[var(--text-secondary)] text-sm hover:text-[var(--brand-primary)] transition-colors">Insights & Blog</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold">Company</h4>
          <Link to="/about" className="text-[var(--text-secondary)] text-sm hover:text-[var(--brand-primary)] transition-colors">About Us</Link>
          <Link to="/careers" className="text-[var(--text-secondary)] text-sm hover:text-[var(--brand-primary)] transition-colors">Careers</Link>
          <Link to="/partners" className="text-[var(--text-secondary)] text-sm hover:text-[var(--brand-primary)] transition-colors">Partners</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold">Legal</h4>
          <Link to="/privacy" className="text-[var(--text-secondary)] text-sm hover:text-[var(--brand-primary)] transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-[var(--text-secondary)] text-sm hover:text-[var(--brand-primary)] transition-colors">Terms of Service</Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[rgba(255,255,255,0.08)]">
        <p className="text-[var(--text-secondary)] text-sm">© {new Date().getFullYear()} Pyrintu Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};