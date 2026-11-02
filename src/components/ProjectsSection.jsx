"use client";

import { useState } from "react";
import siteConfig from "@/config/siteConfig";
import { GithubIcon } from "@/components/Icons";
import {
  ExternalLink,
  Check,
  Copy,
  Activity,
  Layers,
  Sparkles,
  Info,
  Clock,
  ShieldCheck,
  ChevronDown,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [toastMessage, setToastMessage] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [panelTabs, setPanelTabs] = useState({});
  const [copiedSnippetId, setCopiedSnippetId] = useState(null);
  const [openAccordions, setOpenAccordions] = useState({});

  const getTab = (id) => panelTabs[id] || "telemetry";
  const setTab = (id, tab) => setPanelTabs((prev) => ({ ...prev, [id]: tab }));

  const toggleAccordion = (id) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleCopySnippet = (projId, tabKey, text) => {
    const key = `${projId}-${tabKey}`;
    setCopiedSnippetId(key);
    showToast("Code copied to clipboard");
    navigator.clipboard?.writeText(text);
    setTimeout(() => setCopiedSnippetId(null), 2500);
  };

  // Filter logic
  const filteredProjects = siteConfig.projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "healthcare") return project.category === "ai-healthcare";
    if (activeFilter === "recommendation") return project.category === "recommendation";
    return true;
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleCopyGithub = (projId) => {
    setCopiedId(projId);
    showToast("GitHub repository link copied to clipboard");
    navigator.clipboard?.writeText("https://github.com/suryanshrathore964");
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleLiveClick = (project) => {
    if (!project.isLive || project.liveUrl === "#") {
      showToast(`Deployment in progress: ${project.title.split(":")[0]} is currently building on cluster.`);
    }
  };

  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-28 border-b border-slate-200 bg-[#F9FAFB]/70">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-6 left-1/2 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-slate-900 text-white font-mono text-xs shadow-2xl border border-slate-700 max-w-[90vw] text-center"
          >
            <Info className="w-4 h-4 text-blue-400 flex-shrink-0" />
            <span className="truncate">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Tab Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 pb-6 sm:pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1.5">
              <span className="w-2 h-2 rounded-sm bg-blue-600" />
              // 02. Systems & Projects
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Production Systems & Clinical AI
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl font-sans">
              Architected for high throughput, sub-second inference, and clinical accuracy. Filter systems by architectural domain:
            </p>
          </div>

          {/* Filters/Tabs (Clean touch wrapping) */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-white p-1 sm:p-1.5 rounded-lg border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-2.5 sm:px-3 py-1.5 rounded font-mono text-xs font-medium transition-all active:scale-95 ${
                activeFilter === "all"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              [ All Systems ]
            </button>
            <button
              onClick={() => setActiveFilter("healthcare")}
              className={`px-2.5 sm:px-3 py-1.5 rounded font-mono text-xs font-medium transition-all active:scale-95 ${
                activeFilter === "healthcare"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              [ AI & Healthcare SaaS ]
            </button>
            <button
              onClick={() => setActiveFilter("recommendation")}
              className={`px-2.5 sm:px-3 py-1.5 rounded font-mono text-xs font-medium transition-all active:scale-95 ${
                activeFilter === "recommendation"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              [ Recommendation Platforms ]
            </button>
          </div>
        </div>

        {/* Projects Cards List */}
        <div className="mt-8 sm:mt-12 space-y-8 sm:space-y-12">
          {filteredProjects.map((project, index) => {
            const isTechMax = project.id === "techmax-fall-risk";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative rounded-lg bg-white border border-slate-200 shadow-md hover:border-blue-400 transition-all duration-300 overflow-hidden"
              >
                {/* Corner crosshairs */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-slate-300">+</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-slate-300">+</div>
                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-300">+</div>
                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-slate-300">+</div>

                {/* Dual-Panel Layout (Stacks cleanly on phone/tablet, side-by-side on lg) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                  
                  {/* Left Panel: Specifications, Achievements, Architecture Flow */}
                  <div className="lg:col-span-7 p-4 sm:p-6 lg:p-8 flex flex-col justify-between space-y-5 sm:space-y-6">
                    <div>
                      {/* Badge & Status Strip */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] sm:text-xs font-mono font-medium ${
                            project.badgeType === "featured"
                              ? "bg-blue-50 text-blue-700 border border-blue-200"
                              : project.badgeType === "engineering"
                              ? "bg-amber-50 text-amber-700 border border-amber-200"
                              : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="truncate">{project.badge}</span>
                        </span>

                        <span
                          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono font-medium ${
                            project.isLive
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : "bg-slate-50 text-slate-500 border border-slate-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              project.isLive ? "bg-emerald-500 animate-ping" : "bg-slate-400"
                            }`}
                          />
                          {project.status}
                        </span>
                      </div>

                      {/* Title & Summary */}
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 font-sans tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {project.summary}
                      </p>

                      {/* Architecture Flow Box */}
                      <div className="mt-4 sm:mt-5 p-3 sm:p-3.5 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                          <Layers className="w-3 h-3 text-blue-600" />
                          <span>ARCHITECTURE PIPELINE FLOW</span>
                        </div>
                        <div className="text-slate-800 font-medium leading-relaxed text-[11px] sm:text-xs">
                          {project.architectureFlow}
                        </div>
                      </div>

                      {/* Technical Achievements Bullet points */}
                      <div className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2">
                        <div className="font-mono text-[11px] sm:text-xs font-semibold text-slate-700 uppercase tracking-wider">
                          Key Technical Accomplishments:
                        </div>
                        <ul className="space-y-1.5">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-slate-600 font-sans leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tech Stack Chips & Action CTAs */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 sm:gap-4">
                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-white text-slate-700 font-mono text-[10px] sm:text-[11px] border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions (Full width on phones, inline on sm/desktop) */}
                      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                        {project.isLive ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white font-mono text-xs font-semibold hover:bg-blue-700 shadow-sm transition-all duration-150 active:scale-95"
                          >
                            <span>Launch Live Demo ↗</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <button
                            onClick={() => handleLiveClick(project)}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 text-slate-600 font-mono text-xs font-medium hover:bg-slate-200 border border-slate-300 transition-all duration-150 active:scale-95"
                          >
                            <span>Deployment in Progress</span>
                            <Clock className="w-3.5 h-3.5" />
                          </button>
                        )}

                        <button
                          onClick={() => handleCopyGithub(project.id)}
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 font-mono text-xs hover:border-slate-400 hover:bg-slate-50 transition-colors active:scale-95"
                          title="Copy GitHub Repository Link"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>{copiedId === project.id ? "Link Copied!" : "Repo Preview"}</span>
                          {copiedId === project.id ? (
                            <Check className="w-3 h-3 text-emerald-600" />
                          ) : (
                            <Copy className="w-3 h-3 text-slate-400" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>                  {/* Right Panel: Interactive System Blueprint & Telemetry Display with cURL / JSON switcher */}
                  <div className="lg:col-span-5 p-4 sm:p-6 lg:p-8 bg-slate-50/70 flex flex-col justify-between space-y-4 sm:space-y-5">
                    <div className="space-y-3.5 sm:space-y-4">
                      {/* Telemetry Header with Persistent Mini-Tab Switcher */}
                      <div className="flex flex-col gap-2.5 pb-3 border-b border-slate-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Activity className="w-4 h-4 text-blue-600 flex-shrink-0" />
                            <span className="font-mono text-xs font-bold text-slate-900">
                              BLUEPRINT TELEMETRY
                            </span>
                          </div>
                          <span className="font-mono text-[10px] text-slate-500 uppercase">
                            ID: {project.id}
                          </span>
                        </div>

                        {/* 3-View Switcher: [ UI Telemetry ] | [ cURL Request ] | [ JSON Schema Response ] */}
                        <div className="flex items-center p-0.5 rounded-lg bg-white border border-slate-200 shadow-xs overflow-x-auto">
                          <button
                            type="button"
                            onClick={() => setTab(project.id, "telemetry")}
                            className={`flex-1 min-w-[85px] py-1 px-2 rounded font-mono text-[10px] font-semibold transition-all text-center truncate ${
                              getTab(project.id) === "telemetry"
                                ? "bg-blue-600 text-white shadow-xs"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            }`}
                          >
                            UI Telemetry
                          </button>
                          <button
                            type="button"
                            onClick={() => setTab(project.id, "curl")}
                            className={`flex-1 min-w-[85px] py-1 px-2 rounded font-mono text-[10px] font-semibold transition-all text-center truncate ${
                              getTab(project.id) === "curl"
                                ? "bg-blue-600 text-white shadow-xs"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            }`}
                          >
                            cURL Request
                          </button>
                          <button
                            type="button"
                            onClick={() => setTab(project.id, "json")}
                            className={`flex-1 min-w-[110px] py-1 px-2 rounded font-mono text-[10px] font-semibold transition-all text-center truncate ${
                              getTab(project.id) === "json"
                                ? "bg-blue-600 text-white shadow-xs"
                                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                            }`}
                          >
                            JSON Schema
                          </button>
                        </div>
                      </div>

                      {/* Tab 1: UI Telemetry View */}
                      {getTab(project.id) === "telemetry" && (
                        <div className="space-y-4">
                          {/* Metric Telemetry Cards */}
                          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                            {project.metrics.map((m, idx) => (
                              <div
                                key={idx}
                                className="p-2 sm:p-2.5 rounded-lg bg-white border border-slate-200 text-center"
                              >
                                <div className="font-mono text-[9px] sm:text-[10px] text-slate-400 uppercase truncate">
                                  {m.label}
                                </div>
                                <div className="font-mono text-[11px] sm:text-xs font-bold text-slate-900 mt-0.5 truncate">
                                  {m.value}
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Architecture Step Sequencer */}
                          <div className="space-y-1.5 sm:space-y-2">
                            <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">
                              PIPELINE EXECUTION NODES:
                            </div>
                            <div className="space-y-1.5">
                              {project.architectureSteps.map((node) => (
                                <div
                                  key={node.step}
                                  className="p-2 sm:p-2.5 rounded bg-white border border-slate-200/80 flex items-start gap-2"
                                >
                                  <span className="font-mono text-[10px] font-bold text-blue-600 px-1 py-0.5 rounded bg-blue-50 border border-blue-200 flex-shrink-0">
                                    {node.step}
                                  </span>
                                  <div className="min-w-0">
                                    <div className="font-mono text-xs font-bold text-slate-800 truncate">
                                      {node.name}
                                    </div>
                                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-sans">
                                      {node.desc}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Tab 2: cURL Request View */}
                      {getTab(project.id) === "curl" && (
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between pb-1 border-b border-slate-200/70">
                            <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-blue-600 uppercase">
                              <Terminal className="w-3.5 h-3.5" />
                              <span>HTTP/2 PRODUCTION INGESTION</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleCopySnippet(project.id, "curl", project.curlSnippet)}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-mono text-[10px] font-semibold transition-colors active:scale-95"
                            >
                              {copiedSnippetId === `${project.id}-curl` ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span className="text-emerald-700">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3 text-slate-400" />
                                  <span>Copy Code</span>
                                </>
                              )}
                            </button>
                          </div>

                          <div className="p-3 sm:p-3.5 rounded-lg bg-slate-900 text-slate-100 font-mono text-[11px] leading-relaxed border border-slate-800 shadow-inner overflow-x-auto">
                            <pre className="whitespace-pre font-mono selection:bg-blue-500 selection:text-white">
                              <code>{project.curlSnippet}</code>
                            </pre>
                          </div>

                          <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 pt-1">
                            <span>TLS 1.3 SECURE ENDPOINT</span>
                            <span>ZERO-TRUST SANITIZED</span>
                          </div>
                        </div>
                      )}

                      {/* Tab 3: JSON Schema Response View */}
                      {getTab(project.id) === "json" && (
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between pb-1 border-b border-slate-200/70">
                            <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-emerald-600 uppercase">
                              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                              <span>STATUS: 200 OK (APPLICATION/JSON)</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => handleCopySnippet(project.id, "json", project.jsonResponse)}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-mono text-[10px] font-semibold transition-colors active:scale-95"
                            >
                              {copiedSnippetId === `${project.id}-json` ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-600" />
                                  <span className="text-emerald-700">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3 text-slate-400" />
                                  <span>Copy Code</span>
                                </>
                              )}
                            </button>
                          </div>

                          <div className="p-3 sm:p-3.5 rounded-lg bg-slate-900 text-emerald-400 font-mono text-[11px] leading-relaxed border border-slate-800 shadow-inner overflow-x-auto">
                            <pre className="whitespace-pre font-mono selection:bg-emerald-600 selection:text-white">
                              <code>{project.jsonResponse}</code>
                            </pre>
                          </div>

                          <div className="flex items-center justify-between font-mono text-[9px] text-slate-500 pt-1">
                            <span>LATENCY &lt; 200MS</span>
                            <span>VALIDATED SCHEMA</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom Status / Callout */}
                    <div className="p-3 rounded-lg bg-white border border-blue-200/70 text-slate-700 text-xs font-sans mt-3">
                      <div className="flex items-center gap-1.5 font-mono text-[10px] text-blue-600 font-bold mb-0.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>RUNTIME INTEGRITY</span>
                      </div>
                      {isTechMax ? (
                        <span className="text-[11px] sm:text-xs">
                          Live instance monitored on Render with SSL certification & simulated health probes.
                        </span>
                      ) : (
                        <span className="text-[11px] sm:text-xs">
                          Decoupled microservice architecture designed for seamless horizontal containerization.
                        </span>
                      )}
                    </div>
                  </div>

                </div>

                {/* Task 3: Architectural Deep-Dive / "Engineering Decisions" Accordion */}
                <div className="border-t border-slate-200 bg-white">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(project.id)}
                    className="w-full px-4 sm:px-6 lg:px-8 py-3.5 bg-slate-50/70 hover:bg-slate-100/80 transition-colors flex items-center justify-between text-left group"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-800 tracking-wider group-hover:text-blue-600 transition-colors">
                        // INSPECT SYSTEM TRADE-OFFS &amp; POST-MORTEM {openAccordions[project.id] ? "▴" : "▾"}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                        DEEP-DIVE
                      </span>
                    </div>
                    <div className="font-mono text-xs text-slate-500 flex items-center gap-1.5 group-hover:text-blue-600">
                      <span className="text-[11px] font-semibold">{openAccordions[project.id] ? "COLLAPSE" : "EXPAND"}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openAccordions[project.id] ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openAccordions[project.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden border-t border-slate-200 bg-[#F9FAFB]/90 p-4 sm:p-6 lg:p-8"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.tradeOffs?.map((tradeOff, idx) => (
                            <div
                              key={idx}
                              className="p-4 rounded-lg bg-white border border-slate-200 shadow-xs relative hover:border-blue-300 transition-all"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-xs bg-blue-600 flex-shrink-0" />
                                <h4 className="font-mono text-xs font-bold text-slate-900 tracking-tight">
                                  {tradeOff.title}
                                </h4>
                              </div>
                              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                                {tradeOff.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
