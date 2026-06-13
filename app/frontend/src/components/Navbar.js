import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <Logo size={32} />
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-secondary)]">
          <Link to="/products" className="hover:text-[var(--brand-primary)] transition-colors">Products</Link>
          <Link to="/pricing" className="hover:text-[var(--brand-primary)] transition-colors">Pricing</Link>
          <Link to="/docs" className="hover:text-[var(--brand-primary)] transition-colors">Docs</Link>
          <Link to="/status" className="hover:text-[var(--brand-primary)] transition-colors">Status</Link>
          <Link to="/partners" className="hover:text-[var(--brand-primary)] transition-colors">Partners</Link>
          <Link to="/careers" className="hover:text-[var(--brand-primary)] transition-colors">Careers</Link>
          <Link to="/about" className="hover:text-[var(--brand-primary)] transition-colors">About Us</Link>
          <Link to="/blog" className="hover:text-[var(--brand-primary)] transition-colors">Insights</Link>
          <Link to="/contact" className="hover:text-[var(--brand-primary)] transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
};