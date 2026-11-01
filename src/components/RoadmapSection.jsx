"use client";

import { useState } from "react";
import siteConfig from "@/config/siteConfig";
import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RoadmapSection() {
  const [expandedMilestones, setExpandedMilestones] = useState({
    "milestone-4": true,
    "milestone-3": true,
    "milestone-2": false,
    "milestone-1": false,
  });

  const toggleMilestone = (id) => {
    setExpandedMilestones((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="roadmap" className="relative py-16 sm:py-20 lg:py-28 border-b border-slate-200 bg-[#F9FAFB]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1.5">
              <span className="w-2 h-2 rounded-sm bg-blue-600" />
              // 04. Engineering Roadmap
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Chronological Engineering Trajectory
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-xl font-sans">
              From embedded autonomous robotics to national hackathon-winning healthcare AI platforms.
            </p>
          </div>

          <div className="font-mono text-[11px] sm:text-xs text-slate-500 bg-white px-3 py-1.5 rounded border border-slate-200 shadow-sm w-fit">
            STATUS: ACTIVE DEPLOYMENTS & EXPANSION
          </div>
        </div>

        {/* Vertical Engineering Track */}
        <div className="mt-10 sm:mt-14 relative">
          
          {/* Vertical Central Line on Desktop (>= md) */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-[2px] bg-slate-200" />

          {/* Vertical Left Line on Phone & Tablet (< md) */}
          <div className="block md:hidden absolute left-3 sm:left-4 top-2 bottom-6 w-[2px] bg-slate-200" />

          <div className="space-y-6 sm:space-y-10 relative">
            {siteConfig.roadmap.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              const isExpanded = !!expandedMilestones[milestone.id];

              return (
                <div
                  key={milestone.id}
                  className="relative flex flex-col md:flex-row items-center pl-7 sm:pl-9 md:pl-0"
                >
                  {/* Central Node Marker on Desktop (>= md) */}
                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-white border-2 border-blue-600 items-center justify-center shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                  </div>

                  {/* Left Node Marker on Phone/Tablet (< md) */}
                  <div className="flex md:hidden absolute left-3 sm:left-4 top-5 -translate-x-1/2 z-10 w-6 h-6 rounded-full bg-white border-2 border-blue-600 items-center justify-center shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                  </div>

                  {/* Card Container (Alternating left and right on md+) */}
                  <div
                    className={`w-full md:w-[calc(50%-40px)] ${
                      isEven ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="rounded-lg bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden"
                    >
                      {/* Milestone Header */}
                      <div
                        onClick={() => toggleMilestone(milestone.id)}
                        className="p-4 sm:p-5 cursor-pointer flex items-start justify-between gap-2.5 sm:gap-3 bg-white hover:bg-slate-50/50 transition-colors"
                      >
                        <div className="space-y-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <span className="font-mono text-[10px] sm:text-xs font-bold text-blue-600 px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                              {milestone.period}
                            </span>
                            <span className="font-mono text-[9px] sm:text-[10px] text-slate-700 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                              {milestone.badge}
                            </span>
                          </div>

                          <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 font-sans pt-1">
                            {milestone.title}
                          </h3>

                          <div className="text-[11px] sm:text-xs text-slate-500 font-mono flex items-center gap-1.5 truncate">
                            <Briefcase className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                            <span className="truncate">{milestone.organization}</span>
                          </div>
                        </div>

                        <button
                          aria-label="Toggle Milestone Details"
                          className="p-1 rounded text-slate-400 hover:text-slate-700 flex-shrink-0"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
                          ) : (
                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                          )}
                        </button>
                      </div>

                      {/* Scope Preview */}
                      <div className="px-4 sm:px-5 pb-3 sm:pb-4 text-xs text-slate-600 font-sans leading-relaxed">
                        {milestone.scope}
                      </div>

                      {/* Expandable Detail Section */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 border-t border-slate-100 bg-slate-50/60 space-y-3 sm:space-y-4"
                          >
                            {/* Key Deliverables */}
                            <div className="space-y-1.5">
                              <span className="font-mono text-[10px] sm:text-[11px] font-semibold text-slate-700 tracking-wider">
                                VERIFIED DELIVERABLES & OUTCOMES:
                              </span>
                              <ul className="space-y-1">
                                {milestone.deliverables.map((d, dIdx) => (
                                  <li
                                    key={dIdx}
                                    className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-600 font-sans leading-relaxed"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span>{d}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Tech Chips */}
                            <div className="flex flex-wrap gap-1.5 pt-1.5">
                              {milestone.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2 py-0.5 rounded bg-white text-slate-700 font-mono text-[10px] border border-slate-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
