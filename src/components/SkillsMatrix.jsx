"use client";

import { useState } from "react";
import siteConfig from "@/config/siteConfig";
import {
  GitBranch,
  Cpu,
  Layers,
  Server,
  Database,
  Code,
  Terminal,
  Activity,
} from "lucide-react";

export default function SkillsMatrix() {
  const [selectedBranch, setSelectedBranch] = useState("languages");
  const [activeSkill, setActiveSkill] = useState("Python");

  const skillContexts = {
    Python: "Primary language for ML inference (TechMax), Flask/FastAPI microservices, and clinical data pipelines.",
    "C++": "Engineered autonomous obstacle-avoidance firmware and neural navigation at World Robot Olympiad (WRO).",
    C: "Foundational systems programming, memory safety principles, and algorithmic data structures.",
    Java: "Object-oriented software design, enterprise algorithmic architectures, and academic computer science.",
    JavaScript: "Client-side reactivity, interactive data visualizations with Chart.js, and browser state management.",
    TypeScript: "Strict type safety for FINDtech recommendation frontends and end-to-end data contracts.",
    "React.js": "Component-driven reactive UIs, reusable design systems, and client-side performance tuning.",
    Vite: "Ultra-fast HMR bundler tooling for modern single-page applications.",
    "Tailwind CSS": "Utility-first design tokens, responsive layouts, and architectural CSS grids.",
    "Framer Motion": "Micro-animations, layout transitions, and high-framerate interactive physics.",
    "Next.js": "App Router architecture, server components, SEO optimization, and static/SSR hydration.",
    FastAPI: "Asynchronous backend microservices, automatic OpenAPI documentation, and Pydantic validation.",
    Flask: "High-throughput lightweight inference microservice powering TechMax on Render cloud.",
    "REST APIs": "Stateless endpoint design, JSON envelope standards, and HTTP error semantics.",
    "JWT Authentication": "Secure token generation, stateless session handling, and role-based route guards.",
    AsyncIO: "Concurrent request multiplexing and non-blocking I/O for high-QPS telemetry.",
    "Scikit-learn": "Trained predictive classifiers for patient fall risk and hardware cosine similarity matching.",
    "Logistic Regression": "Clinical risk probability scoring with interpretable feature weight coefficients.",
    "Recommendation Systems": "Multi-parameter weighted similarity engine powering FINDtech computer selection.",
    "Data Preprocessing": "Missing value imputation, MinMax feature scaling, and synthetic data augmentation.",
    "Feature Engineering": "Correlating clinical vitals and mobility metrics into composite risk indices.",
    "MongoDB Atlas": "Document database clustering, index optimization, and high-availability hardware catalogs.",
    Git: "Branch hygiene, atomic commit conventions, and distributed version control.",
    GitHub: "Repository hosting, issue tracking, CI/CD pipelines, and open-source collaboration.",
    Postman: "API endpoint contract testing, automated test suites, and mock server environments.",
    "VS Code": "Primary IDE configured with linting, debugging, and terminal automation.",
    Render: "Production cloud deployment with zero-downtime builds and live health probe endpoints.",
  };

  const branchIcons = {
    languages: Code,
    frontend: Layers,
    backend: Server,
    ml: Cpu,
    "data-tools": Database,
  };

  return (
    <section id="skills" className="relative py-16 sm:py-20 lg:py-28 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1.5">
              <span className="w-2 h-2 rounded-sm bg-blue-600" />
              // 03. Skills Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Technical Pipelines & Proficiency Matrix
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl font-sans">
              Interconnected engineering branches instead of generic bars. Click any skill chip to inspect production implementations.
            </p>
          </div>

          <div className="font-mono text-[11px] sm:text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded border border-slate-200 w-fit">
            TOTAL NODES: 26 VERIFIED CAPABILITIES
          </div>
        </div>

        {/* Top Split: Interactive Pipelines (Left) & Distribution Metric (Right) */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: 5 Pipeline Branches */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="font-mono text-xs font-bold text-slate-700 tracking-wider">
                ENGINEERING PIPELINE BRANCHES
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-blue-600 font-semibold">
                ACTIVE: {selectedBranch.toUpperCase()}
              </span>
            </div>

            {siteConfig.skills.branches.map((branch) => {
              const isSelected = selectedBranch === branch.id;
              const Icon = branchIcons[branch.id] || GitBranch;

              return (
                <div
                  key={branch.id}
                  onClick={() => {
                    setSelectedBranch(branch.id);
                    setActiveSkill(branch.skills[0]);
                  }}
                  className={`p-4 sm:p-5 rounded-lg border transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-slate-50/90 border-blue-600 shadow-sm"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-2.5 sm:mb-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded border flex items-center justify-center flex-shrink-0 ${
                          isSelected
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-slate-100 text-slate-600 border-slate-200"
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-900">
                        {branch.category}
                      </span>
                    </div>

                    <span className="font-mono text-[9px] sm:text-[10px] text-blue-600 px-2 py-0.5 rounded bg-blue-50 border border-blue-200 w-fit">
                      {branch.badge}
                    </span>
                  </div>

                  {/* Skills Chips (Comfortable tap sizes on mobile) */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {branch.skills.map((skill) => {
                      const isCurrent = activeSkill === skill;
                      return (
                        <button
                          key={skill}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedBranch(branch.id);
                            setActiveSkill(skill);
                          }}
                          className={`px-2.5 py-1.5 sm:py-1 rounded-md text-[11px] sm:text-xs font-mono transition-all active:scale-95 ${
                            isCurrent
                              ? "bg-blue-600 text-white shadow-sm font-semibold"
                              : "bg-white text-slate-700 border border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                          }`}
                        >
                          {skill}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-2.5 text-[10px] sm:text-[11px] text-slate-500 font-sans italic">
                    Pipeline Focus: {branch.focus}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Technical Distribution (Radar + Split-Grid Metric) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            {/* Visual Technical Distribution Card */}
            <div className="p-4 sm:p-6 rounded-lg bg-white border border-slate-200 shadow-sm relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4 sm:mb-5">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="font-mono text-xs font-bold text-slate-900 truncate">
                    TECHNICAL DISTRIBUTION RADAR
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-400">NORMALIZED</span>
              </div>

              {/* Scalable SVG Radar Chart */}
              <div className="flex justify-center py-1 sm:py-2">
                <div className="w-full max-w-[240px] sm:max-w-[260px] aspect-square flex items-center justify-center">
                  <svg viewBox="0 0 260 260" className="w-full h-full overflow-visible">
                    {/* Concentric Grid Circles */}
                    <circle cx="130" cy="130" r="100" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="130" cy="130" r="70" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="130" cy="130" r="40" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Axes */}
                    <line x1="130" y1="30" x2="130" y2="230" stroke="#CBD5E1" strokeWidth="1" />
                    <line x1="30" y1="130" x2="230" y2="130" stroke="#CBD5E1" strokeWidth="1" />

                    {/* Polygon Shape */}
                    <polygon
                      points={`130,${130 - 35 * 2.3} ${130 + 30 * 2.3},130 130,${130 + 20 * 2.3} ${130 - 15 * 2.3},130`}
                      fill="rgba(37, 99, 235, 0.18)"
                      stroke="#2563EB"
                      strokeWidth="2"
                    />

                    {/* Vertices */}
                    <circle cx="130" cy={130 - 35 * 2.3} r="4" fill="#2563EB" />
                    <circle cx={130 + 30 * 2.3} cy="130" r="4" fill="#0F172A" />
                    <circle cx="130" cy={130 + 20 * 2.3} r="4" fill="#3B82F6" />
                    <circle cx={130 - 15 * 2.3} cy="130" r="4" fill="#64748B" />

                    {/* Labels */}
                    <text x="130" y="16" textAnchor="middle" className="text-[10px] font-mono fill-slate-700 font-bold">
                      Full Stack (35%)
                    </text>
                    <text x="238" y="134" textAnchor="start" className="text-[10px] font-mono fill-slate-700 font-bold">
                      Applied ML (30%)
                    </text>
                    <text x="130" y="248" textAnchor="middle" className="text-[10px] font-mono fill-slate-700 font-bold">
                      Architecture (20%)
                    </text>
                    <text x="22" y="134" textAnchor="end" className="text-[10px] font-mono fill-slate-700 font-bold">
                      UI/UX (15%)
                    </text>
                  </svg>
                </div>
              </div>

              {/* Split-grid Telemetry Bars */}
              <div className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3 pt-3 sm:pt-4 border-t border-slate-100">
                {siteConfig.skills.distribution.map((item) => (
                  <div key={item.area} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-semibold text-slate-800">{item.area}</span>
                      <span className="font-bold text-blue-600">{item.percentage}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${item.percentage}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-slate-400">
                      SCOPE: {item.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Skill Context Box */}
            <div className="p-4 sm:p-5 rounded-lg bg-slate-900 text-white font-mono text-xs shadow-md border border-slate-800">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                  <Terminal className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">SPEC: {activeSkill.toUpperCase()}</span>
                </div>
                <span className="text-emerald-400 text-[10px] flex-shrink-0">VERIFIED</span>
              </div>
              <p className="text-slate-300 font-sans text-xs leading-relaxed">
                {skillContexts[activeSkill] ||
                  "Core technical proficiency utilized across distributed architectures and system delivery."}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
