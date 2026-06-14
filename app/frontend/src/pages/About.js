export const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold font-heading text-white mb-8">About Pyrintu</h1>
      
      <div className="glass p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">Founded by Johan D.</h2>
        <p className="text-[var(--text-secondary)] m-0">
          Based in Hyderabad, India. Building production-grade AI infrastructure for the next generation of intelligent products.
        </p>
      </div>
      
      <div className="prose prose-invert lg:prose-xl max-w-none text-[var(--text-secondary)]">
        <p className="mb-6">
          Pyrintu exists to bridge the gap between experimental AI research and production-grade software engineering. 
          AI models look great in notebooks, but true value is unlocked when they are robustly deployed in the real world.
        </p>
        <p className="mb-6">
          The platform provides a complete ecosystem for modern AI engineering teams - from model deployment 
          to monitoring, scaling, and security compliance.
        </p>
        
        <div className="glass p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] my-12">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="m-0 text-[var(--text-secondary)]">
            To democratize production-grade AI infrastructure, making it accessible to startups and enterprises 
            alike without the need for massive DevOps teams.
          </p>
        </div>
      </div>
    </div>
  );
};