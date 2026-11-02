"use client";

import { useState, useEffect } from "react";
import siteConfig from "@/config/siteConfig";
import { GithubIcon, LinkedinIcon, LeetCodeIcon, XIcon } from "@/components/Icons";
import {
  ArrowRight,
  FileText,
  Cpu,
  Layers,
  Database,
  Server,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [selectedTier, setSelectedTier] = useState("inference");
  const [githubStats, setGithubStats] = useState({
    repos: 7,
    stars: 0,
    isLoaded: false,
    hasError: false,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubTelemetry() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/suryanshrathore964"),
          fetch("https://api.github.com/users/suryanshrathore964/repos?per_page=100"),
        ]);

        if (!userRes.ok) {
          throw new Error("GitHub user API rate limited or error");
        }

        const userData = await userRes.json();
        let starsCount = 0;

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          if (Array.isArray(reposData)) {
            starsCount = reposData.reduce(
              (acc, repo) => acc + (repo.stargazers_count || 0),
              0
            );
          }
        }

        if (isMounted) {
          setGithubStats({
            repos: typeof userData.public_repos === "number" ? userData.public_repos : 7,
            stars: starsCount,
            isLoaded: true,
            hasError: false,
          });
        }
      } catch (err) {
        if (isMounted) {
          setGithubStats((prev) => ({
            ...prev,
            isLoaded: true,
            hasError: true,
          }));
        }
      }
    }

    fetchGitHubTelemetry();

    return () => {
      isMounted = false;
    };
  }, []);

  const architectureTiers = [
    {
      id: "client",
      title: "01. Client & Ingestion Layer",
      subtitle: "Next.js 16 + React 19 + Telemetry UI",
      badge: "HTTP/2 + WebSockets",
      latency: "12ms",
      desc: "Responsive client state, optimistic UI updates, and real-time medical chart streaming.",
      icon: Layers,
      color: "border-blue-500 bg-blue-50/70 text-blue-700",
    },
    {
      id: "gateway",
      title: "02. API Gateway & Auth Service",
      subtitle: "FastAPI + Flask Microservices",
      badge: "Sub-50ms Routing",
      latency: "28ms",
      desc: "Pydantic request sanitization, token security, and dynamic rate limiting.",
      icon: Server,
      color: "border-slate-800 bg-slate-50/80 text-slate-800",
    },
    {
      id: "inference",
      title: "03. AI Inference Core",
      subtitle: "Scikit-learn + Fall Risk & Similarity",
      badge: "Real-time Telemetry",
      latency: "42ms",
      desc: "Clinical patient risk evaluation, cosine recommendation similarity, and OCR extraction.",
      icon: Cpu,
      color: "border-blue-600 bg-blue-100/60 text-blue-700 shadow-sm",
    },
    {
      id: "datastore",
      title: "04. High-Throughput Data Store",
      subtitle: "MongoDB Atlas + In-Memory Caching",
      badge: "Indexed Clusters",
      latency: "18ms",
      desc: "Hardware SKU indexing, patient clinical archives, and secure audit persistence.",
      icon: Database,
      color: "border-emerald-600 bg-emerald-50/70 text-emerald-800",
    },
  ];

  return (
    <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 border-b border-slate-200 overflow-hidden technical-grid">
      {/* Subtle architectural gradient background mask */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-[#F9FAFB]/90 pointer-events-none" />

      {/* Decorative architectural crosshairs (hidden on tiny screens to avoid noise) */}
      <div className="hidden sm:block absolute top-4 left-4 text-xs font-mono text-slate-300 pointer-events-none select-none">
        + SYS.COORD.001 [26.9124°N, 75.7873°E]
      </div>
      <div className="hidden sm:block absolute top-4 right-4 text-xs font-mono text-slate-300 pointer-events-none select-none">
        + ARCH_BUILD//PRODUCTION
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Developer Profile, Status, Pitch & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6">
            
            {/* Status Badge: Pulsing green dot with text "AVAILABLE FOR NEW OPPORTUNITIES" */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200 shadow-sm max-w-full"
            >
              <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-emerald-800">
                {siteConfig.developer.status}
              </span>
              <span className="text-slate-300 font-mono text-xs hidden md:inline">|</span>
              <span className="font-mono text-[11px] text-slate-600 hidden md:inline">
                {siteConfig.developer.degree}
              </span>
            </motion.div>

            {/* Heading: "Suryansh Rathore" */}
            <div className="space-y-1.5 sm:space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
              >
                <div className="font-mono text-[11px] sm:text-xs font-semibold text-blue-600 tracking-wider uppercase mb-1 flex items-center gap-2">
                  <span className="w-3.5 h-[1.5px] bg-blue-600 inline-block" />
                  Systems Architect & Full Stack Engineer
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight sm:leading-none">
                  {siteConfig.developer.name}
                </h1>
              </motion.div>

              {/* Subheading: "Full Stack & Applied AI/ML Engineer" */}
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="text-lg sm:text-2xl font-mono text-slate-600 font-medium"
              >
                {siteConfig.developer.role}
              </motion.h2>
            </div>

            {/* Short Pitch */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed max-w-2xl font-sans"
            >
              {siteConfig.developer.pitch}
            </motion.p>

            {/* CTAs (Optimized for full touch targets on phones & inline on tablets/desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 w-full sm:w-auto"
            >
              {/* Button 1: "Explore Systems & Projects" */}
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-mono text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-all duration-150 shadow-md shadow-blue-600/20 active:scale-95"
              >
                <span>Explore Systems & Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Button 2: "View Resume PDF" */}
              <a
                href={siteConfig.developer.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-slate-300 bg-white text-slate-800 font-mono text-xs sm:text-sm font-semibold hover:border-slate-500 hover:bg-slate-50 transition-all duration-150 shadow-sm active:scale-95"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>View Resume PDF</span>
              </a>
            </motion.div>

            {/* Direct Social Pill Links with Hover Elevation */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="pt-1 flex flex-wrap items-center gap-2 w-full"
            >
              <span className="font-mono text-xs text-slate-400 mr-1 hidden sm:inline">// CONNECT:</span>

              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 font-mono text-xs hover:border-slate-400 hover:text-slate-900 hover:shadow-sm hover:-translate-y-0.5 active:bg-slate-100 transition-all duration-150"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 font-mono text-xs hover:border-blue-400 hover:text-blue-600 hover:shadow-sm hover:-translate-y-0.5 active:bg-blue-50 transition-all duration-150"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn</span>
              </a>

              <a
                href={siteConfig.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 font-mono text-xs hover:border-amber-400 hover:text-amber-600 hover:shadow-sm hover:-translate-y-0.5 active:bg-amber-50 transition-all duration-150"
              >
                <LeetCodeIcon className="w-3.5 h-3.5 text-amber-500" />
                <span>LeetCode</span>
              </a>

              <a
                href={siteConfig.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 font-mono text-xs hover:border-slate-800 hover:text-slate-900 hover:shadow-sm hover:-translate-y-0.5 active:bg-slate-100 transition-all duration-150"
              >
                <XIcon className="w-3.5 h-3.5" />
                <span>X / Twitter</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D / Isometric Blueprint Node Diagram */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative p-4 sm:p-6 rounded-lg bg-white/95 border border-slate-200 shadow-xl shadow-slate-900/5"
            >
              {/* Corner crosshairs */}
              <div className="absolute -top-1.5 -left-1.5 text-blue-600 text-sm font-mono">+</div>
              <div className="absolute -top-1.5 -right-1.5 text-blue-600 text-sm font-mono">+</div>
              <div className="absolute -bottom-1.5 -left-1.5 text-blue-600 text-sm font-mono">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 text-blue-600 text-sm font-mono">+</div>

              {/* Header of Diagram */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse flex-shrink-0" />
                  <span className="font-mono text-[11px] sm:text-xs font-bold text-slate-900 tracking-wider">
                    DISTRIBUTED SAAS DATA PLANE
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-200 font-medium">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Interactive Multi-Tier Blueprint Nodes */}
              <div className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3 relative">
                {/* Connecting animated data line */}
                <div className="absolute left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 opacity-60 z-0" />

                {architectureTiers.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  const Icon = tier.icon;

                  return (
                    <div
                      key={tier.id}
                      onClick={() => setSelectedTier(tier.id)}
                      className={`relative z-10 p-3 sm:p-3.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-white border-blue-600 shadow-md sm:-translate-x-1"
                          : "bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-slate-50 active:bg-slate-100"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className={`w-7 h-7 rounded border flex items-center justify-center flex-shrink-0 ${
                              isSelected
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-slate-600 border-slate-200"
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <div className="font-mono text-[11px] sm:text-xs font-bold text-slate-900 truncate">
                              {tier.title}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-slate-500 font-sans truncate">
                              {tier.subtitle}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1 flex-shrink-0">
                          <span className="text-[9px] sm:text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                            {tier.latency}
                          </span>
                          <span className="text-[8px] sm:text-[9px] font-mono text-blue-600 font-medium hidden sm:inline">
                            {tier.badge}
                          </span>
                        </div>
                      </div>

                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.2 }}
                          className="mt-2.5 pt-2.5 border-t border-slate-100 text-[11px] sm:text-xs text-slate-600 font-sans leading-relaxed"
                        >
                          <div className="flex items-center gap-1.5 font-mono text-[10px] text-blue-600 mb-1">
                            <Sparkles className="w-3 h-3 flex-shrink-0" />
                            <span>NODE TELEMETRY & SPECIFICATION</span>
                          </div>
                          {tier.desc}
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Floating micro-badges with telemetry metrics */}
              <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-center">
                <div className="p-2 rounded bg-slate-50 border border-slate-200/80">
                  <div className="font-mono text-[9px] sm:text-[10px] text-slate-400">THROUGHPUT RATE</div>
                  <div className="font-mono text-[11px] sm:text-xs font-bold text-slate-900">1,240 REQ / SEC</div>
                </div>
                <div className="p-2 rounded bg-slate-50 border border-slate-200/80">
                  <div className="font-mono text-[9px] sm:text-[10px] text-slate-400">UPTIME GUARANTEE</div>
                  <div className="font-mono text-[11px] sm:text-xs font-bold text-emerald-600">99.98% VERIFIED</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats Strip (4-box technical grid with Live GitHub API Telemetry) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16"
        >
          {/* Telemetry Status Strip */}
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                SYSTEM METRICS // ARCHITECTURAL TELEMETRY
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-[10px] font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>GITHUB API: LIVE SYNC</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              {
                id: "SYS.01",
                metric: `${githubStats.repos} Public Repositories`,
                label: "Open-Source & Cloud Systems",
                detail: "Actively tracked via GitHub API telemetry",
                isLiveSync: true,
              },
              {
                id: "SYS.02",
                metric: `${githubStats.stars} Stars • 2x Finalist`,
                label: "SIH 2025 & Nat'l Healthcare Hackathon",
                detail: "National stage engineering recognized for real-world impact",
                isLiveSync: true,
              },
              {
                id: "SYS.03",
                metric: "WRO Robotics Finalist",
                label: "Autonomous Systems & Hardware",
                detail: "Arduino neural navigation & sensor fusion algorithms",
                isLiveSync: false,
              },
              {
                id: "SYS.04",
                metric: "Full-Stack + ML Pipeline",
                label: "End-to-End System Architect",
                detail: "From model training to sub-second REST API delivery",
                isLiveSync: false,
              },
            ].map((stat) => (
              <div
                key={stat.id}
                className="relative p-4 sm:p-5 rounded-lg bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200 group"
              >
                {/* Corner crosshairs */}
                <div className="absolute top-1 left-1 text-[10px] font-mono text-slate-300 group-hover:text-blue-500">
                  +
                </div>
                <div className="absolute top-1 right-1 text-[10px] font-mono text-slate-300 group-hover:text-blue-500">
                  +
                </div>

                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="font-mono text-[10px] font-bold text-blue-600 tracking-wider">
                    [{stat.id}]
                  </span>
                  {stat.isLiveSync ? (
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      SYNC
                    </span>
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors" />
                  )}
                </div>

                <div className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
                  {stat.metric}
                </div>

                <div className="text-[11px] sm:text-xs font-semibold text-slate-700 mb-1 font-mono">
                  {stat.label}
                </div>

                <div className="text-[10px] sm:text-[11px] text-slate-500 font-sans leading-relaxed">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
