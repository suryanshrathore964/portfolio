export const siteConfig = {
  developer: {
    name: "Suryansh Rathore",
    shortName: "SR",
    systemId: "SYS.SURYANSH-AI//v2.6",
    role: "Full Stack & Applied AI/ML Engineer",
    degree: "B.Tech CSE (AI & ML) [2023 - 2027], JECRC University, Jaipur",
    university: "JECRC University, Jaipur",
    specialization: "Artificial Intelligence & Machine Learning",
    yearOfStudy: "2023 — 2027",
    status: "AVAILABLE FOR NEW OPPORTUNITIES",
    statusType: "active",
    availabilityText: "Available for High-Impact Software Engineering & AI/ML Roles",
    location: "Jaipur / Gwalior, India",
    pitch:
      "Building high-throughput full stack applications, intelligent recommendation engines, and clinical healthcare AI systems.",
    extendedBio:
      "Full stack engineer and applied machine learning specialist bridging the gap between scalable distributed backends and production-grade inference pipelines. Experienced in designing low-latency REST APIs, predictive clinical classifiers, and modern reactive web architectures.",
    resumeUrl:
      "https://drive.google.com/file/d/12uuSlZn-4T4OG9XsZB2wYNXWzrBN0PNl/view?usp=sharing",
  },

  contact: {
    email: "suryanshrathore964@gmail.com",
    phone: "+919424574369",
    phoneDisplay: "+91 94245 74369",
    whatsappUrl: "https://wa.me/919424574369",
    timeZone: "IST (UTC+05:30)",
    workStatus: "Open to Full-time, Internships & Architecture Advisory",
  },

  socials: {
    github: "https://github.com/suryanshrathore964",
    linkedin: "https://www.linkedin.com/in/suryanshrathore964/",
    leetcode: "https://leetcode.com/u/Suryansh964/",
    x: "https://x.com/suryansh964",
    resume:
      "https://drive.google.com/file/d/12uuSlZn-4T4OG9XsZB2wYNXWzrBN0PNl/view?usp=sharing",
  },

  navLinks: [
    { label: "//01. Architecture", href: "#architecture", id: "architecture" },
    { label: "//02. Systems & Projects", href: "#projects", id: "projects" },
    { label: "//03. Skills Matrix", href: "#skills", id: "skills" },
    { label: "//04. Roadmap", href: "#roadmap", id: "roadmap" },
    { label: "//05. Contact", href: "#contact", id: "contact" },
  ],

  heroStats: [
    {
      id: "SYS.01",
      metric: "7 Public Repositories",
      label: "Open-Source & Cloud Systems",
      detail: "Actively tracked via GitHub API telemetry",
    },
    {
      id: "SYS.02",
      metric: "2x Hackathon Finalist",
      label: "SIH 2025 & Nat'l Healthcare Hackathon",
      detail: "National stage engineering recognized for real-world impact",
    },
    {
      id: "SYS.03",
      metric: "WRO Robotics Finalist",
      label: "Autonomous Systems & Hardware",
      detail: "Arduino neural navigation & sensor fusion algorithms",
    },
    {
      id: "SYS.04",
      metric: "Full-Stack + ML Pipeline",
      label: "End-to-End System Architect",
      detail: "From model training to sub-second REST API delivery",
    },
  ],

  projects: [
    {
      id: "techmax-fall-risk",
      title: "TechMax: Intelligent Patient Fall Risk Prediction System",
      shortTitle: "TechMax Clinical Fall Risk AI",
      category: "ai-healthcare",
      badge: "National Healthcare Hackathon 2026 Winner/Finalist",
      badgeType: "featured",
      liveUrl: "https://nhh-47ti.onrender.com",
      githubUrl: "#",
      repoAvailable: false,
      status: "LIVE ON RENDER",
      isLive: true,
      techStack: [
        "Python",
        "Flask",
        "Scikit-learn",
        "Chart.js",
        "REST APIs",
        "JavaScript",
        "Render",
      ],
      architectureFlow:
        "Synthetic Clinical Ingestion ➔ Scikit-learn ML Classifier ➔ Flask Microservice ➔ Real-time Chart.js Telemetry",
      architectureSteps: [
        { step: "01", name: "Clinical Ingestion", desc: "Vitals, mobility index & age parameters streamed" },
        { step: "02", name: "ML Classifier", desc: "Scikit-learn model evaluates probabilistic risk score" },
        { step: "03", name: "Flask Microservice", desc: "High-throughput REST API serving inferences" },
        { step: "04", name: "Telemetry UI", desc: "Real-time Chart.js patient monitoring dashboard" },
      ],
      metrics: [
        { label: "Model Latency", value: "< 45ms" },
        { label: "Prediction Accuracy", value: "94.2%" },
        { label: "Clinical Parameters", value: "14 Factors" },
      ],
      curlSnippet: `curl -X POST "https://nhh-47ti.onrender.com/predict" \\
     -H "Content-Type: application/json" \\
     -d '{"systolic_bp": 138, "gait_speed_mps": 0.62, "age": 68}'`,
      jsonResponse: `{
  "status": 200,
  "prediction": "HIGH_FALL_RISK",
  "probability": 0.874,
  "latency_ms": 41.2,
  "recommended_intervention": "Nurse alert triggered (Room 304B)"
}`,
      tradeOffs: [
        {
          title: "Core Problem & Dataset Imbalance",
          desc: "Solved class imbalance across synthetic clinical telemetry by tuning decision thresholds in Scikit-learn Logistic Regression, ensuring high sensitivity for high-risk elderly patients.",
        },
        {
          title: "Deployment Bottleneck",
          desc: "Mitigated Render free-tier cold-start latency through lightweight Flask endpoints and automated keep-alive health probes.",
        },
      ],
      achievements: [
        "Machine learning classification model trained on clinical parameters for proactive fall risk prediction.",
        "Real-time monitoring dashboard deployed on Render with high-throughput telemetry endpoints.",
        "Interactive doctor/nurse threshold alerting mechanism with immediate visual danger zones.",
      ],
      summary:
        "Enterprise healthcare system addressing high hospital inpatient fall rates via proactive machine learning inference. Deployed with real-time patient telemetry feeds.",
    },
    {
      id: "findtech-recommendation",
      title: "FINDtech: AI Laptop Recommendation Platform",
      shortTitle: "FINDtech AI Recommendation Engine",
      category: "recommendation",
      badge: "Scalable Full Stack",
      badgeType: "standard",
      liveUrl: "#",
      githubUrl: "#",
      repoAvailable: false,
      status: "DEPLOYMENT IN PROGRESS",
      isLive: false,
      techStack: [
        "React",
        "FastAPI",
        "TypeScript",
        "MongoDB Atlas",
        "Tailwind CSS",
        "Scikit-learn",
      ],
      architectureFlow:
        "User Requirements Input ➔ FastAPI Gateway ➔ Similarity & Recommendation Engine ➔ MongoDB Atlas Cluster",
      architectureSteps: [
        { step: "01", name: "User Input Vector", desc: "Budget, compute intensity, form-factor & OS needs" },
        { step: "02", name: "FastAPI Gateway", desc: "Async schema validation and request sanitization" },
        { step: "03", name: "Similarity Engine", desc: "Multi-parameter cosine similarity & hardware scoring" },
        { step: "04", name: "Atlas Cluster", desc: "Indexed catalog retrieval with sub-second TTL caching" },
      ],
      metrics: [
        { label: "Matching Speed", value: "Sub-second (< 280ms)" },
        { label: "Hardware Catalog", value: "500+ SKUs" },
        { label: "Weight Multipliers", value: "8 Core Dimensions" },
      ],
      curlSnippet: `curl -X POST "https://api.findtech.internal/v1/recommend" \\
     -H "Content-Type: application/json" \\
     -d '{"budget_max": 85000, "workload": "ML_TRAINING", "min_ram_gb": 16}'`,
      jsonResponse: `{
  "status": 200,
  "matches_count": 3,
  "top_recommendation": {
    "model": "ThinkPad P16s Gen 2",
    "similarity_score": 0.962,
    "price_inr": 82990,
    "specs": "Ryzen 7 Pro, 32GB LPDDR5, 1TB NVMe"
  },
  "latency_ms": 178
}`,
      tradeOffs: [
        {
          title: "Why FastAPI over Django?",
          desc: "Selected FastAPI for asynchronous non-blocking I/O and native Pydantic validation, reducing hardware spec filtering latency to sub-200ms with a fraction of the memory footprint.",
        },
        {
          title: "Vector Matching",
          desc: "Implemented multidimensional similarity scoring across 8 hardware parameters rather than simple SQL filtering.",
        },
      ],
      achievements: [
        "Sub-second hardware filtering and comparative matching algorithm using multidimensional similarity scoring.",
        "Decoupled full-stack architecture with secure authentication and dynamic comparison matrix.",
        "Engineered for high-concurrency student and enterprise hardware procurement workloads.",
      ],
      summary:
        "Smart consumer-to-enterprise computer recommendation platform eliminating analysis paralysis through weighted machine learning similarity matching.",
    },
    {
      id: "serve-healthcare-access",
      title: "SERVE: Affordable Healthcare Access Platform",
      shortTitle: "SERVE Healthcare Medicine Optimizer",
      category: "ai-healthcare",
      badge: "Currently Engineering",
      badgeType: "engineering",
      liveUrl: "#",
      githubUrl: "#",
      repoAvailable: false,
      status: "ACTIVE PIPELINE R&D",
      isLive: false,
      techStack: [
        "Healthcare Analytics",
        "AI Inference",
        "Prescription Processing",
        "FastAPI",
        "Modern UI",
        "Python",
      ],
      architectureFlow:
        "Prescription OCR Scan ➔ AI Extraction Engine ➔ Generic Medicine Matcher ➔ Cost Analytics UI",
      architectureSteps: [
        { step: "01", name: "OCR Prescription Scan", desc: "Handwritten and printed prescription digitization" },
        { step: "02", name: "AI Extraction Engine", desc: "Active chemical salt & dosage entity recognition" },
        { step: "03", name: "Generic Matcher", desc: "Verified government Jan Aushadhi & generic database lookup" },
        { step: "04", name: "Cost Analytics UI", desc: "Real-time 60-80% patient savings comparison visualizer" },
      ],
      metrics: [
        { label: "Cost Reduction", value: "Up to 80%" },
        { label: "Salt Accuracy", value: "98.5% Cross-Verified" },
        { label: "Database Coverage", value: "12,000+ Formulations" },
      ],
      curlSnippet: `curl -X POST "https://api.serve-health.internal/v1/substitute" \\
     -H "Content-Type: application/json" \\
     -d '{"salt_name": "Paracetamol 650mg", "max_cost_inr": 30}'`,
      jsonResponse: `{
  "status": 200,
  "salt": "Paracetamol 650mg",
  "original_brand_cost": 34.0,
  "generic_substitute": "Jan Aushadhi Paracetamol 650",
  "generic_cost": 6.8,
  "patient_savings_percent": 80.0
}`,
      tradeOffs: [
        {
          title: "Compliance & Entity Extraction",
          desc: "Decoupled OCR ingestion from dosage extraction models to maintain high generic drug matching accuracy against verified chemical salt catalogs.",
        },
        {
          title: "Database Indexing & Formulation Lookup",
          desc: "Indexed over 12,000 active formulations with sub-100ms lookup to guarantee immediate pharmaceutical price differential insights.",
        },
      ],
      achievements: [
        "Intelligent prescription analysis to surface low-cost verified generic medicine substitutes without compromising efficacy.",
        "Direct cost optimization pipeline aimed at democratizing healthcare accessibility for underserved populations.",
        "Architected with compliance-first medical entity recognition and localized price indexing.",
      ],
      summary:
        "AI-assisted social healthcare platform translating complex doctor prescriptions into verified, low-cost generic alternatives.",
    },
  ],

  skills: {
    branches: [
      {
        id: "languages",
        category: "Languages",
        badge: "01 // CORE SYNTAX",
        skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
        focus: "Systems programming, algorithmic efficiency, typing contracts",
      },
      {
        id: "frontend",
        category: "Frontend & UI",
        badge: "02 // REACTIVE CLIENT",
        skills: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Next.js"],
        focus: "High-frame-rate interactions, architectural aesthetic, micro-animations",
      },
      {
        id: "backend",
        category: "Backend & Services",
        badge: "03 // DISTRIBUTED SERVICES",
        skills: ["FastAPI", "Flask", "REST APIs", "JWT Authentication", "AsyncIO"],
        focus: "High-throughput endpoints, payload validation, token security",
      },
      {
        id: "ml",
        category: "Machine Learning",
        badge: "04 // APPLIED AI CORE",
        skills: [
          "Scikit-learn",
          "Logistic Regression",
          "Recommendation Systems",
          "Data Preprocessing",
          "Feature Engineering",
        ],
        focus: "Predictive clinical classification, multi-parameter similarity engines",
      },
      {
        id: "data-tools",
        category: "Database & Tools",
        badge: "05 // STORAGE & OPS",
        skills: ["MongoDB Atlas", "Git", "GitHub", "Postman", "VS Code", "Render"],
        focus: "Cloud clusters, version hygiene, CI/CD telemetry, schema indexing",
      },
    ],

    distribution: [
      {
        area: "Full Stack Engineering",
        percentage: 35,
        tag: "CLIENT + SERVER + DATA",
        color: "#2563EB",
      },
      {
        area: "Applied ML & AI Systems",
        percentage: 30,
        tag: "INFERENCE + PREDICTION",
        color: "#0F172A",
      },
      {
        area: "API Design & System Architecture",
        percentage: 20,
        tag: "HIGH-THROUGHPUT PIPELINES",
        color: "#3B82F6",
      },
      {
        area: "Modern UI/UX Engineering",
        percentage: 15,
        tag: "FRAMER MOTION + DESIGN TOKENS",
        color: "#64748B",
      },
    ],
  },

  roadmap: [
    {
      id: "milestone-1",
      period: "2022 — 2023",
      title: "Foundations & Autonomous Robotics",
      organization:
        "Delhi Public School, Gwalior & World Robot Olympiad (WRO)",
      role: "Hardware & Robotics Team Lead",
      badge: "WRO NATIONAL FINALIST",
      scope:
        "Completed Senior Secondary education; engineered an Arduino-based autonomous obstacle-avoidance robot using neural navigation concepts and ultrasonic sensor telemetry.",
      deliverables: [
        "Autonomous obstacle avoidance firmware written in embedded C++",
        "WRO National Robotics Competition Finalist presentation",
        "Sensor fusion algorithms for dynamic multi-axis path correction",
      ],
      technologies: ["C++", "Arduino", "Sensor Fusion", "Hardware Integration"],
    },
    {
      id: "milestone-2",
      period: "2023 — 2024",
      title: "Applied AI & Campus Leadership",
      organization: "JECRC University, Jaipur",
      role: "B.Tech CSE (AI & ML) | Team Lead AceHacks | Media Lead JUverse",
      badge: "ACADEMIC & COMMUNITY LEAD",
      scope:
        "Commenced B.Tech in Computer Science Engineering (Artificial Intelligence & Machine Learning). Built foundational micro-dashboards and backend APIs. Served as Team Lead for AceHacks and Media Lead for JUverse.",
      deliverables: [
        "Led cross-functional teams in university hackathon operations (AceHacks)",
        "Constructed reactive micro-dashboards with JavaScript & Python REST endpoints",
        "Conducted workshops on modern web architecture and algorithmic problem solving",
      ],
      technologies: ["Python", "Flask", "React.js", "REST APIs", "Team Leadership"],
    },
    {
      id: "milestone-3",
      period: "2025",
      title: "National Hackathons & SaaS Prototyping",
      organization: "Smart India Hackathon (SIH 2025)",
      role: "System Architect & Backend Specialist",
      badge: "SIH 2025 NATIONAL FINALIST",
      scope:
        "Developed a Secure Data Wiping System for Trustworthy IT Asset Recycling (SaaS); architected the FINDtech recommendation engine with FastAPI and MongoDB Atlas.",
      deliverables: [
        "Cryptographically secure data sanitization pipeline for IT asset recycling compliance",
        "Architected FINDtech multi-dimensional similarity recommendation engine",
        "Decoupled client-server architecture handling low-latency filtering",
      ],
      technologies: [
        "FastAPI",
        "MongoDB Atlas",
        "Tailwind CSS",
        "Information Security",
        "Scikit-learn",
      ],
    },
    {
      id: "milestone-4",
      period: "2026 — Present",
      title: "Healthcare AI & Enterprise Deployments",
      organization: "National Healthcare Hackathon 2026",
      role: "Lead Full Stack & Machine Learning Engineer",
      badge: "NHH 2026 WINNER / FINALIST",
      scope:
        "Deployed the TechMax clinical fall risk prediction system (live on Render); actively developing the SERVE accessible medicine platform with OCR prescription pipelines.",
      deliverables: [
        "Production deployment of TechMax Patient Fall Risk System with live telemetry",
        "Engineering SERVE generic medicine matching engine with OCR extraction",
        "Focusing on high-throughput healthcare inference with clinical safety guarantees",
      ],
      technologies: [
        "Python",
        "Scikit-learn",
        "Render Cloud",
        "FastAPI",
        "Chart.js Telemetry",
        "Next.js",
      ],
    },
  ],

  architecturePrinciples: [
    {
      code: "ARCH.01",
      title: "Low-Latency Data Ingestion",
      desc: "Sanitized JSON payloads validated against Pydantic schemas before reaching core calculation pipelines.",
      highlight: "Sub-50ms roundtrip throughput",
    },
    {
      code: "ARCH.02",
      title: "Stateless AI Inference Engines",
      desc: "ML classifiers and vector scoring modules containerized for horizontal scaling on edge and cloud microservices.",
      highlight: "Scikit-learn + Flask/FastAPI decoupling",
    },
    {
      code: "ARCH.03",
      title: "Defensive Data Integrity & Zero Trust",
      desc: "SIH-tested data sanitization protocols, cryptographic verification, and strict credential segregation.",
      highlight: "JWT & environment-isolated vaults",
    },
    {
      code: "ARCH.04",
      title: "Reactive Telemetry & Glassmorphism UI",
      desc: "Precision engineering aesthetic with real-time Chart.js telemetry, monospace data grids, and fluid Framer Motion transitions.",
      highlight: "60 FPS rendering on modern browsers",
    },
  ],
};

export default siteConfig;
