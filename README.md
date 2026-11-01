# Suryansh Rathore // Enterprise Developer Portfolio

> **Lead Systems & Frontend Engineer Portfolio**  
> Architected with a clean white/off-white technical aesthetic, precision engineer crosshairs, and real-time telemetry flows.

---

## 🛠 Technology Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Client Reactivity**: React 19 + [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom architectural grid tokens & crosshairs
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) (Body) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Technical telemetry & pipelines)
- **Icons**: Custom pixel-perfect technical SVG iconography + [Lucide React](https://lucide.dev/)
- **Deployment Target**: Vercel Serverless Edge Cloud

---

## 📐 Design System & Palette

- **Canvas Background**: `#FFFFFF` / `#F9FAFB`
- **Subtle Grid & Borders**: `#E5E7EB` / `#E2E8F0` with engineer-style crosshairs `+`
- **Accent**: Technical Cobalt Blue (`#2563EB`) and Slate (`#0F172A`)
- **Telemetry Indicators**: High-visibility Emerald (`#10B981`) and Amber (`#F59E0B`)

---

## 📂 Core Project Architecture

```
├── config/
│   └── siteConfig.js          # Master developer configuration, projects, roadmap, socials
├── src/
│   ├── app/
│   │   ├── globals.css        # Architectural CSS, grid patterns, crosshair rules
│   │   ├── layout.js          # Google Fonts (Inter + JetBrains Mono), OpenGraph meta tags
│   │   └── page.js            # Main orchestrated architectural view
│   ├── components/
│   │   ├── Navbar.jsx         # Frosted glass fixed header with monogram, links, resume & mobile drawer
│   │   ├── HeroSection.jsx    # Split layout: Pitch, status, social pills, 3D/Isometric blueprint node diagram
│   │   ├── ArchitectureSection.jsx # //01. Distributed systems architecture & pipeline latency simulator
│   │   ├── ProjectsSection.jsx # //02. Multi-tab showcase featuring live TechMax integration
│   │   ├── SkillsMatrix.jsx   # //03. 5 Interconnected pipeline branches + SVG Radar distribution
│   │   ├── RoadmapSection.jsx # //04. Chronological engineering track with expandable deliverables
│   │   ├── ContactTerminal.jsx# //05. Dispatch Terminal with one-click email copy & secure submission
│   │   ├── Icons.jsx          # Dedicated SVG icons (GitHub, LinkedIn, LeetCode, X)
│   │   └── Footer.jsx         # Architectural footer with system health status & quick anchors
│   └── config/
│       └── siteConfig.js      # Centralized source of truth
└── public/
    └── favicon.svg            # Precision technical monospace favicon
```

---

## 🚀 Systems Showcase Highlights

### 1. TechMax: Patient Fall Risk Prediction System
- **Status**: Live on Render (`https://nhh-47ti.onrender.com`)
- **Recognition**: National Healthcare Hackathon 2026 Winner/Finalist
- **Pipeline**: Synthetic Clinical Ingestion ➔ Scikit-learn Classifier ➔ Flask Microservice ➔ Real-time Chart.js Telemetry

### 2. FINDtech: AI Laptop Recommendation Platform
- **Status**: Deployment in Progress
- **Architecture**: User Requirements Vector ➔ FastAPI Gateway ➔ Cosine Similarity Engine ➔ MongoDB Atlas Cluster

### 3. SERVE: Accessible Medicine Platform
- **Status**: Active Pipeline R&D
- **Architecture**: Prescription OCR Scan ➔ AI Entity Extraction ➔ Jan Aushadhi Salt Matcher ➔ Cost Analytics UI

---

## 💻 Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the live dashboard.

3. **Validate Production Build**:
   ```bash
   npm run build
   ```

---

## 🌐 Production Deployment (Vercel CLI)

To deploy directly to Vercel production edge infrastructure:

1. **Install Vercel CLI (if not already installed)**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

All static assets, route segment configurations, and OpenGraph social meta tags will automatically configure and optimize on the Vercel Edge Network.
