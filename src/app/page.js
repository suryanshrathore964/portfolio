import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsMatrix from "@/components/SkillsMatrix";
import RoadmapSection from "@/components/RoadmapSection";
import ContactTerminal from "@/components/ContactTerminal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Fixed Frosted Glass Navbar */}
      <Navbar />

      {/* Main Architectural Sections */}
      <main className="flex-1">
        {/* Hero Section with Isometric Data Plane & Stats */}
        <HeroSection />

        {/* //01. Architecture: High-Throughput Distributed Architecture */}
        <ArchitectureSection />

        {/* //02. Systems & Projects: Multi-Tab Showcase with Live TechMax Integration */}
        <ProjectsSection />

        {/* //03. Skills Matrix: Interactive Pipelines & Technical Radar */}
        <SkillsMatrix />

        {/* //04. Roadmap: Chronological Engineering Trajectory */}
        <RoadmapSection />

        {/* //05. Contact: Dispatch Terminal & Direct Connect Hub */}
        <ContactTerminal />
      </main>

      {/* Architectural Production Footer */}
      <Footer />
    </div>
  );
}
