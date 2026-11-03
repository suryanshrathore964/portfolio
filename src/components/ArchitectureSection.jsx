"use client";

import { useState } from "react";
import siteConfig from "@/config/siteConfig";
import {
  ArrowRight,
  Terminal,
  Check,
  RefreshCw,
} from "lucide-react";

export default function ArchitectureSection() {
  const [activePipeline, setActivePipeline] = useState("clinical");
  const [simulating, setSimulating] = useState(false);
  const [simLogs, setSimLogs] = useState([
    "[SYS_INIT] Ingestion conduits synchronized at 1,000Hz",
    "[HEALTHCHECK] All 4 microservices operational (200 OK)",
  ]);

  const pipelines = {
    clinical: {
      id: "clinical",
      title: "Clinical Patient Telemetry & Fall Prediction Pipeline",
      system: "TECHMechs Fall Risk AI",
      steps: [
        { code: "STAGE.01", name: "Clinical Ingestion", desc: "Age, blood pressure, mobility markers streamed via REST" },
        { code: "STAGE.02", name: "Pydantic Sanitizer", desc: "Strict type coercion, missing vital interpolation" },
        { code: "STAGE.03", name: "Scikit-learn Classifier", desc: "Pre-trained logistic model outputs fall probability" },
        { code: "STAGE.04", name: "Alerting & Telemetry", desc: "Sub-50ms push to Chart.js inpatient monitoring view" },
      ],
      payloadSample: {
        patient_id: "PX-8902",
        systolic_bp: 138,
        gait_speed_mps: 0.62,
        fall_risk_score: "HIGH (0.87)",
        intervention: "Bedside Sensor Active",
      },
    },
    recommendation: {
      id: "recommendation",
      title: "Multidimensional Hardware Similarity Matching Pipeline",
      system: "FINDtech Recommendation Engine",
      steps: [
        { code: "STAGE.01", name: "Constraint Vector", desc: "Budget cap, GPU workload, battery life preferences" },
        { code: "STAGE.02", name: "FastAPI Gateway", desc: "Asynchronous endpoint with Redis query caching" },
        { code: "STAGE.03", name: "Vector Similarity Engine", desc: "Cosine proximity across 8 dimensional hardware attributes" },
        { code: "STAGE.04", name: "MongoDB Atlas Retrieval", desc: "Sub-second ranked SKU return with price alerts" },
      ],
      payloadSample: {
        session_id: "FIND-9031",
        budget_inr: 85000,
        workload: "AI_TRAINING_LIGHT",
        top_match_sku: "Asus ROG Zephyrus G14",
        similarity_index: 0.964,
      },
    },
    prescription: {
      id: "prescription",
      title: "Prescription OCR & Low-Cost Generic Substitution Pipeline",
      system: "SERVE Healthcare Access Platform",
      steps: [
        { code: "STAGE.01", name: "Prescription OCR Scan", desc: "Digitization of doctor handwriting and branded dosages" },
        { code: "STAGE.02", name: "Medical Entity Extractor", desc: "Identification of active pharmaceutical salts and strengths" },
        { code: "STAGE.03", name: "Jan Aushadhi Matcher", desc: "Relational cross-check against verified generic registries" },
        { code: "STAGE.04", name: "Cost Optimization UI", desc: "Calculates 60%—80% direct patient savings delta" },
      ],
      payloadSample: {
        rx_id: "MED-4122",
        brand_prescribed: "Augmentin 625 Duo",
        active_salt: "Amoxicillin + Clavulanic Acid (500mg+125mg)",
        generic_equivalent: "Jan Aushadhi Amoxy-Clav 625",
        patient_savings: "74.8% (₹142 saved/strip)",
      },
    },
  };

  const handleSimulate = () => {
    setSimulating(true);
    const target = pipelines[activePipeline];
    const timestamp = new Date().toLocaleTimeString();
    setSimLogs((prev) => [
      `[${timestamp}] Initiating live simulation for ${target.system}...`,
      ...prev.slice(0, 4),
    ]);

    setTimeout(() => {
      setSimLogs((prev) => [
        `[${timestamp}] ➔ Stage 01: Ingestion verified (Payload OK)`,
        `[${timestamp}] ➔ Stage 02: Model inference computed in 23.4ms`,
        `[${timestamp}] ➔ Stage 03: Telemetry dispatched to client layer (200 OK)`,
        ...prev.slice(0, 3),
      ]);
      setSimulating(false);
    }, 650);
  };

  const selectedData = pipelines[activePipeline];

  return (
    <section id="architecture" className="relative py-16 sm:py-20 lg:py-28 border-b border-slate-200 bg-white">
      {/* Background technical grid accent */}
      <div className="absolute inset-0 technical-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1.5">
              <span className="w-2 h-2 rounded-sm bg-blue-600" />
              // 01. Architecture
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              High-Throughput Distributed Architecture
            </h2>
          </div>
          <div className="font-mono text-[11px] sm:text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded border border-slate-200 max-w-xs">
            PATTERN: Decoupled REST Microservices + Scikit-learn AI Inference Core
          </div>
        </div>

        {/* 4 Architectural Principles Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {siteConfig.architecturePrinciples.map((pillar) => (
            <div
              key={pillar.code}
              className="p-4 sm:p-5 rounded-lg bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200 relative group"
            >
              <div className="absolute top-2.5 right-2.5 text-[10px] font-mono text-blue-600 font-bold">
                {pillar.code}
              </div>
              <h3 className="text-sm font-bold text-slate-900 font-mono mb-2 pr-10">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans mb-3">
                {pillar.desc}
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] font-mono text-blue-600 font-medium">
                <Check className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                <span>{pillar.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Data Flow Visualizer */}
        <div className="mt-10 sm:mt-12 rounded-lg bg-slate-50 border border-slate-200 p-4 sm:p-6 lg:p-8 relative">
          
          {/* Pipeline Switcher Tabs (Responsive touch-friendly buttons) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs text-slate-400 mr-1 w-full sm:w-auto">// SELECT PIPELINE:</span>
              <button
                onClick={() => setActivePipeline("clinical")}
                className={`px-3 py-2 sm:py-1.5 rounded-lg font-mono text-xs transition-all active:scale-95 ${
                  activePipeline === "clinical"
                    ? "bg-blue-600 text-white shadow-sm font-medium"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                [01] Clinical Telemetry
              </button>
              <button
                onClick={() => setActivePipeline("recommendation")}
                className={`px-3 py-2 sm:py-1.5 rounded-lg font-mono text-xs transition-all active:scale-95 ${
                  activePipeline === "recommendation"
                    ? "bg-blue-600 text-white shadow-sm font-medium"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                [02] Hardware Vector Matcher
              </button>
              <button
                onClick={() => setActivePipeline("prescription")}
                className={`px-3 py-2 sm:py-1.5 rounded-lg font-mono text-xs transition-all active:scale-95 ${
                  activePipeline === "prescription"
                    ? "bg-blue-600 text-white shadow-sm font-medium"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                [03] Medicine OCR Pipeline
              </button>
            </div>

            {/* Run Pipeline Simulation Button */}
            <button
              onClick={handleSimulate}
              disabled={simulating}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-3.5 py-2 sm:py-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 font-mono text-xs hover:border-blue-500 hover:text-blue-600 transition-colors shadow-sm disabled:opacity-50 active:scale-95"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${simulating ? "animate-spin text-blue-600" : ""}`} />
              <span>{simulating ? "Dispatching Packets..." : "Test Pipeline Latency"}</span>
            </button>
          </div>

          {/* Active Pipeline Flow */}
          <div className="mt-6 sm:mt-8">
            <div className="mb-5 sm:mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                  {selectedData.title}
                </h4>
                <div className="font-mono text-xs text-blue-600 font-medium">
                  SYSTEM CORE: {selectedData.system}
                </div>
              </div>
              <span className="font-mono text-[11px] sm:text-xs text-slate-500 px-2.5 py-1 rounded bg-white border border-slate-200 w-fit">
                END-TO-END LATENCY: ~42ms
              </span>
            </div>

            {/* Stage Steps Grid (1 col on phone, 2 cols on tablet, 4 cols on desktop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 relative">
              {selectedData.steps.map((step, idx) => (
                <div
                  key={step.code}
                  className="p-3.5 sm:p-4 rounded-lg bg-white border border-slate-200 shadow-sm relative group hover:border-blue-400 transition-all"
                >
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className="font-mono text-[10px] font-bold text-blue-600">
                      {step.code}
                    </span>
                    {idx < 3 && (
                      <ArrowRight className="hidden lg:block w-3.5 h-3.5 text-slate-300 group-hover:text-blue-500 transition-colors" />
                    )}
                  </div>
                  <div className="font-mono text-xs font-bold text-slate-900 mb-1">
                    {step.name}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-sans leading-relaxed">
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Live Data Payload & Terminal Output Box */}
            <div className="mt-5 sm:mt-6 grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
              
              {/* Sample Ingestion Payload */}
              <div className="lg:col-span-5 p-3.5 sm:p-4 rounded-lg bg-slate-900 text-slate-200 font-mono text-xs shadow-inner overflow-hidden">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
                  <span>PAYLOAD INGESTION SPECIFICATION (JSON)</span>
                  <span className="text-emerald-400">SCHEMA VERIFIED</span>
                </div>
                <pre className="text-[10px] sm:text-[11px] leading-relaxed overflow-x-auto text-blue-300 py-1">
                  {JSON.stringify(selectedData.payloadSample, null, 2)}
                </pre>
              </div>

              {/* Real-time telemetry log console */}
              <div className="lg:col-span-7 p-3.5 sm:p-4 rounded-lg bg-white border border-slate-200 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[10px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-600" />
                    <span>SYSTEM EXECUTION TELEMETRY LOG</span>
                  </div>
                  <span className="text-emerald-600 font-bold">STREAM ACTIVE</span>
                </div>
                <div className="space-y-1.5 text-slate-700 text-[10px] sm:text-[11px]">
                  {simLogs.map((log, index) => (
                    <div key={index} className="flex items-start gap-1.5 sm:gap-2">
                      <span className="text-blue-500 select-none flex-shrink-0">›</span>
                      <span className="break-words">{log}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
