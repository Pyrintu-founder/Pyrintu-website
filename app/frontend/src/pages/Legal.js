export const Legal = ({ title }) => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold font-heading text-white mb-8">{title}</h1>
      <div className="prose prose-invert max-w-none text-[var(--text-secondary)]">
        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
        <p className="mb-6">This is a placeholder for the official {title} of Pyrintu Inc. In a production environment, this page would contain the full legal text required for compliance.</p>
        <h2 className="text-2xl font-bold text-white mb-4 mt-8">1. Information Collection</h2>
        <p className="mb-6">We collect information to provide better services to our users. This includes basic information like your email address and complex data like your usage patterns within our infrastructure.</p>
        <h2 className="text-2xl font-bold text-white mb-4 mt-8">2. Data Security</h2>
        <p className="mb-6">We prioritize the security of your data. All data is encrypted at rest and in transit using bank-grade encryption protocols.</p>
      </div>
    </div>
  );
};
