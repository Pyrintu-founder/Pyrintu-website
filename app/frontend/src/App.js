import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "@/index.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Blog } from "@/pages/Blog";
import { Products } from "@/pages/Products";
import { Pricing } from "@/pages/Pricing";
import { Careers } from "@/pages/Careers";
import { Docs } from "@/pages/Docs";
import { Status } from "@/pages/Status";
import { Partners } from "@/pages/Partners";
import { Legal } from "@/pages/Legal";
import NotFound from "@/pages/NotFound.jsx";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL?.replace(//$/, '') || ''; const API = ${BACKEND_URL}/api;

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }) => {
  const [apiStatus, setApiStatus] = useState("checking...");

  useEffect(() => {
    const checkApi = async () => {
      try {
        const response = await axios.get(`${API}/`);
        setApiStatus(response.data.status);
      } catch (e) {
        setApiStatus("offline");
      }
    };
    checkApi();
  }, []);

  return (
    <div className="min-h-screen flex flex-col grid-bg relative selection:bg-[var(--brand-primary)] selection:text-white">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
<div className="fixed bottom-4 left-4 glass px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 border border-[rgba(255,255,255,0.1)] z-50">
          <span className={`w-2 h-2 rounded-full ${apiStatus === 'live' ? 'bg-[var(--brand-primary)] shadow-[0_0_8px_rgba(99,102,241,0.5)]' : 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]'}`}></span>
          <span className="text-[var(--text-secondary)] capitalize">API {apiStatus}</span>
        </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/status" element={<Status />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/privacy" element={<Legal title="Privacy Policy" />} />
          <Route path="/terms" element={<Legal title="Terms of Service" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
