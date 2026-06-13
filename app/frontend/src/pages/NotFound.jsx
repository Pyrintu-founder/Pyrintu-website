import { Link } from "react-router-dom";
import { Home as HomeIcon } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--brand-primary)] mb-4">404 · Not Found</p>
        <h1 className="font-heading text-6xl md:text-8xl font-black mb-6 text-gradient">Not Found</h1>
        <p className="text-[var(--text-secondary)] font-body mb-8">
          The page you're looking for doesn't exist. Let's get you back to the main site.
        </p>
        <Link to="/" className="btn-primary">
          <HomeIcon size={16} /> Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;