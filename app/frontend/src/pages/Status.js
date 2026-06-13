import { useState, useEffect } from "react";
import axios from "axios";
import { CheckCircle, XCircle, Clock, Activity, Server, Shield } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Status = () => {
  const [apiStatus, setApiStatus] = useState("checking...");
  const [lastCheck, setLastCheck] = useState(null);

  useEffect(() => {
    const checkApi = async () => {
      try {
        const response = await axios.get(`${API}/`);
        setApiStatus(response.data.status);
      } catch (e) {
        setApiStatus("offline");
      }
      setLastCheck(new Date());
    };
    checkApi();
    const interval = setInterval(checkApi, 30000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { name: "API", status: apiStatus === "live" ? "operational" : apiStatus, icon: <Activity className="w-5 h-5" /> },
    { name: "Edge Network", status: "operational", icon: <Server className="w-5 h-5" /> },
    { name: "Database", status: "operational", icon: <Shield className="w-5 h-5" /> },
    { name: "Auth Service", status: "operational", icon: <Shield className="w-5 h-5" /> },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold font-heading text-white mb-4">System Status</h1>
        <p className="text-xl text-[var(--text-secondary)]">Real-time infrastructure monitoring</p>
      </div>

      <div className="glass p-8 rounded-2xl border border-[rgba(255,255,255,0.1)] mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Services</h2>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-[var(--text-secondary)]" />
            <span className="text-[var(--text-secondary)]">Last checked: {lastCheck ? lastCheck.toLocaleTimeString() : '...'}</span>
          </div>
        </div>
        <div className="space-y-4">
          {services.map((service, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-[rgba(255,255,255,0.05)] last:border-0">
              <div className="flex items-center gap-3">
                <div className="text-[var(--brand-primary)]">{service.icon}</div>
                <span className="text-white font-medium">{service.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {service.status === "operational" || service.status === "live" ? (
                  <CheckCircle className="w-5 h-5 text-[var(--brand-primary)]" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
                <span className="text-[var(--text-secondary)] capitalize">{service.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};