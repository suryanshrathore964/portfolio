"use client";

import siteConfig from "@/config/siteConfig";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-100 items-start">
          
          {/* Left Column: Monogram & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded border border-blue-600 bg-blue-50 flex items-center justify-center font-mono text-xs font-bold text-blue-600">
                SR
              </div>
              <span className="font-mono text-xs font-bold text-slate-900 tracking-wider">
                {siteConfig.developer.name} // SYS.PORTFOLIO
              </span>
            </div>

            <p className="text-xs text-slate-500 font-sans leading-relaxed max-w-sm">
              Architecting high-throughput distributed systems, intelligent recommendation engines, and clinical healthcare AI classifiers.
            </p>

            <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>CLUSTER: AP-SOUTH-1 (MUMBAI/JAIPUR)</span>
            </div>
          </div>

          {/* Center Column: Quick Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="font-mono text-[11px] font-bold text-slate-900 tracking-wider uppercase mb-2">
              System Architecture Index
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-xs font-mono">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Actions & Scroll to Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-slate-200 text-slate-700 font-mono text-xs hover:border-slate-400 hover:bg-slate-50 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <div className="text-left md:text-right font-mono text-[10px] text-slate-400">
              <div>Next.js 16 • Tailwind CSS • Framer Motion</div>
              <div>Designed with Architectural White Precision</div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © 2026 Suryansh Rathore. All systems operational.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.developer.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Resume PDF ↗
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
