import { useState, useEffect } from "react";
import axios from "axios";
import { ArrowRight } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await axios.get(`${API}/insights`);
        if (response.data && response.data.posts) {
          setPosts(response.data.posts);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchInsights();
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] max-w-6xl mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl font-bold font-heading text-white mb-6">Insights & Engineering</h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl">Thoughts, updates, and deep dives from the Pyrintu engineering team on building scalable AI infrastructure.</p>
      </div>

      {loading ? (
        <div className="text-white text-center py-20">Loading insights...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="glass p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] hover:border-[rgba(16,185,129,0.4)] transition-colors group cursor-pointer flex flex-col h-full">
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className={`text-xs font-medium px-3 py-1 rounded-full bg-[rgba(16,185,129,0.15)] text-[var(--brand-primary)]`}>
                  {post.tag}
                </span>
                <span className="text-[var(--text-secondary)]">{post.date}</span>
                <span className="text-[var(--text-secondary)]">• {post.read_time} read</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[var(--brand-primary-hover)] transition-colors">{post.title}</h2>
              <p className="text-[var(--text-secondary)] mb-8 flex-grow">{post.excerpt}</p>
              <div className="flex items-center text-[var(--brand-primary)] font-medium text-sm gap-2">
                Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};