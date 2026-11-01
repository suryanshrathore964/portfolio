"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import siteConfig from "@/config/siteConfig";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { ExternalLink, Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("architecture");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["architecture", "projects", "skills", "roadmap", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] py-2.5 sm:py-3"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Minimal technical logo/monogram */}
            <Link
              href="#"
              className="group flex items-center gap-2 sm:gap-2.5 transition-transform duration-200 hover:scale-[1.01]"
            >
              <div className="w-8 h-8 rounded border border-blue-600/30 bg-blue-50 flex items-center justify-center font-mono text-xs font-bold text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 flex-shrink-0">
                SR
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs font-bold tracking-wider text-slate-900 flex items-center gap-1.5">
                  <span className="truncate max-w-[130px] sm:max-w-none">SURYANSH RATHORE</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-slate-500 tracking-tight">
                  SYS.AI // FULL-STACK
                </span>
              </div>
            </Link>

            {/* Center Links (Desktop only >= lg) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {siteConfig.navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-xs font-mono transition-all duration-150 rounded ${
                      isActive
                        ? "text-blue-600 font-medium bg-blue-50/80 border border-blue-200/60"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-blue-600 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Desktop Social Icons (>= lg) */}
              <div className="hidden lg:flex items-center gap-2">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50 transition-all duration-150"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition-all duration-150"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Working "View Resume" Button */}
              <a
                href={siteConfig.developer.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-600 text-white font-mono text-xs font-medium hover:bg-blue-700 transition-all duration-150 shadow-sm shadow-blue-500/20 active:scale-95"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Resume</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              {/* Mobile quick resume button */}
              <a
                href={siteConfig.developer.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex sm:hidden items-center gap-1 px-2.5 py-1.5 rounded bg-blue-600 text-white font-mono text-[11px] font-medium"
              >
                <span>Resume</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              {/* Hamburger Button for Phone AND Tablet (< lg) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex lg:hidden p-2 rounded border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Full-Screen Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-down Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-0 top-[57px] sm:top-[61px] z-50 bg-white border-b border-slate-200 p-5 sm:p-6 shadow-2xl lg:hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-mono text-[11px] text-slate-400 font-semibold tracking-wider">
                    SYSTEM ARCHITECTURE INDEX
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    ACTIVE CLUSTER
                  </span>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col gap-1.5 py-1">
                  {siteConfig.navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-lg font-mono text-xs sm:text-sm transition-colors ${
                        activeSection === link.id
                          ? "bg-blue-50 text-blue-600 font-bold border border-blue-200"
                          : "text-slate-700 hover:bg-slate-50 active:bg-slate-100"
                      }`}
                    >
                      <span>{link.label}</span>
                      <span className="text-[10px] text-slate-400 font-normal">NAV // GOTO ➔</span>
                    </a>
                  ))}
                </div>

                {/* Actions & Socials */}
                <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                  <a
                    href={siteConfig.developer.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 text-white font-mono text-xs font-semibold hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20 active:scale-[0.99]"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Resume Document (Google Drive)</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>

                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-mono hover:bg-slate-50 active:bg-slate-100"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-xs font-mono hover:bg-slate-50 active:bg-slate-100"
                    >
                      <LinkedinIcon className="w-4 h-4 text-blue-600" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
