export const About = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold font-heading text-white mb-8">About Pyrintu</h1>
      <div className="prose prose-invert lg:prose-xl max-w-none text-[var(--text-secondary)]">
        <p className="mb-6">
          Pyrintu was founded with a singular vision: to bridge the gap between experimental AI research and production-grade software engineering. We believe that AI models look great in notebooks, but true value is unlocked when they are robustly deployed in the real world.
        </p>
        <p className="mb-6">
          Our team is composed of veteran infrastructure engineers, ML researchers, and product designers. We build tools that empower developers to deploy, scale, and monitor their ML workloads with the same confidence they have in traditional web services.
        </p>
        <div className="glass p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] my-12">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="m-0 text-[var(--text-secondary)]">To democratize production-grade AI infrastructure, making it accessible to startups and enterprises alike without the need for massive DevOps teams.</p>
        </div>
      </div>
    </div>
  );
};