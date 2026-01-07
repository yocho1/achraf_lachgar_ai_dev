export type Project = {
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  metrics: string[];
  links: {
    demo: string;
    source: string;
  };
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  achievements: string[];
  tech: string[];
};

export type StackItem = {
  name: string;
  usage: string;
};

export const profile = {
  name: "Achraf Lachgar",
  title: "Junior AI Engineer | Generative AI & RAG Systems",
  location: "Morocco",
  headline: "Building AI-powered applications with RAG, fine-tuning, and full-stack integration.",
  bio: "I design and develop AI systems that solve real-world problems—from retrieval-augmented generation to LLM fine-tuning and full-stack AI application development. My work spans generative AI, prompt engineering, and building production-ready AI solutions with modern frameworks.",
  contact: {
    email: "achraf.lachgar.contact@gmail.com",
    phone: "+212674147995",
    linkedin: "https://linkedin.com/in/achraf-lachgar",
    github: "https://github.com/achraflachgar",
    resume: "https://achraflachgar.me/resume-achraf-lachgar.pdf",
  },
  specialties: [
    "Retrieval-augmented generation architectures",
    "LLM fine-tuning with LoRA and QLoRA",
    "AI-powered application development",
    "Full-stack AI integration with React and FastAPI",
  ],
  metrics: [
    {
      label: "Fine-tuning accuracy",
      value: "+20%",
      description: "Domain-specific accuracy with QLoRA fine-tuned Mistral 7B",
    },
    {
      label: "Retrieval latency",
      value: "-15%",
      description: "Hybrid search optimization with Pinecone and ChromaDB",
    },
    {
      label: "AI projects",
      value: "3",
      description: "Production-ready AI applications deployed",
    },
    {
      label: "Full-stack experience",
      value: "4+ years",
      description: "MERN stack and AI-powered web applications",
    },
  ],
  projects: [
    {
      title: "SheetBrain-AI",
      problem:
        "Enterprise teams needed automated spreadsheet error detection and formula auditing with policy compliance checks.",
      solution:
        "Engineered an AI-powered formula auditing tool using TypeScript and Google Apps Script. Designed real-time recommendation engines with policy compliance checks and intelligent formula insights. Created seamless integration between cloud spreadsheets and LLM APIs.",
      tech: ["TypeScript", "Google Apps Script", "LLM APIs", "GSuite Integration"],
      impact: "Automated error detection and formula auditing for enterprise spreadsheets with real-time recommendations.",
      metrics: ["Enterprise automation", "Real-time auditing"],
      links: {
        demo: "https://github.com/achraflachgar/sheetbrain-ai",
        source: "https://github.com/achraflachgar/sheetbrain-ai",
      },
    },
    {
      title: "Legal-FAQ-Assistant",
      problem:
        "Legal Q&A systems lacked domain-specific accuracy and data privacy compliance for sensitive legal queries.",
      solution:
        "Fine-tuned Mistral 7B using QLoRA, achieving 20% increase in domain-specific accuracy. Architected a secure pipeline with AES-256 encryption and containerized deployment via Kubernetes. Optimized model inference for accurate legal responses.",
      tech: ["Mistral 7B", "QLoRA", "PEFT", "Kubernetes", "AES-256", "Python"],
      impact: "+20% domain accuracy with production-ready legal Q&A and privacy compliance.",
      metrics: ["+20% domain accuracy", "Privacy compliant"],
      links: {
        demo: "https://github.com/achraflachgar/legal-faq-assistant",
        source: "https://github.com/achraflachgar/legal-faq-assistant",
      },
    },
    {
      title: "Multimodal-AI RAG App",
      problem:
        "Organizations needed to query multi-format documents with fast retrieval and contextual reasoning across different file types.",
      solution:
        "Developed full-stack RAG application with FastAPI and React.js. Implemented hybrid search pipeline using Pinecone and ChromaDB, reducing retrieval latency by 15% through optimized metadata filtering. Integrated Google Gemini API for contextual reasoning.",
      tech: ["FastAPI", "React.js", "Pinecone", "ChromaDB", "Google Gemini", "Python", "TypeScript"],
      impact: "-15% retrieval latency for multi-format document queries with hybrid search.",
      metrics: ["-15% retrieval latency", "Multi-format support"],
      links: {
        demo: "https://github.com/achraflachgar/multimodal-rag-app",
        source: "https://github.com/achraflachgar/multimodal-rag-app",
      },
    },

  ],
  stack: [
    { name: "Large Language Models", usage: "Gemini, LLaMA, Mistral - fine-tuning and inference" },
    { name: "LLM Fine-Tuning", usage: "LoRA, QLoRA, PEFT for domain optimization" },
    { name: "RAG Architectures", usage: "Hybrid search and semantic retrieval" },
    { name: "Vector Databases", usage: "Pinecone, ChromaDB, FAISS for embeddings" },
    { name: "FastAPI", usage: "Asynchronous AI inference pipelines" },
    { name: "React.js & Next.js", usage: "AI-powered full-stack applications" },
    { name: "Python", usage: "AI systems and backend development" },
    { name: "Docker & Kubernetes", usage: "Containerization and AI deployments" },
    { name: "Prompt Engineering", usage: "Structured outputs and agentic workflows" },
    { name: "PostgreSQL", usage: "Database architecture and SQLAlchemy ORM" },
  ],
  experience: [
    {
      role: "Full Stack Developer",
      org: "Freelance",
      period: "01/2021 — Present",
      achievements: [
        "Designed and developed dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Integrated AI-powered features using LLM APIs (chatbots, document analysis, automation tools).",
        "Developed and integrated secure REST APIs and managed authentication solutions like JWT and OAuth.",
        "Deployed and maintained production applications on cloud platforms including Vercel, Netlify, and Heroku.",
      ],
      tech: ["MERN Stack", "LLM APIs", "FastAPI", "React.js", "Tailwind CSS", "JWT/OAuth"],
    },
    {
      role: "AI Developer Professional Certificate",
      org: "IBM",
      period: "01/2025 — 01/2026",
      achievements: [
        "Completed intensive 10-course program focusing on Full Stack AI Development lifecycle.",
        "Developed core competencies in Generative AI, Prompt Engineering, and building AI-powered applications.",
        "Gained hands-on experience in Python for Data Science, FastAPI/Flask, and creating specialized AI chatbots.",
      ],
      tech: ["Python", "FastAPI", "Flask", "Generative AI", "Prompt Engineering"],
    },
    {
      role: "Full Stack Developer Training",
      org: "YouCode School",
      period: "01/2019 — 01/2021",
      achievements: [
        "Completed rigorous project-based training in modern web technologies and software architecture.",
        "Specialized in the MERN stack and professional agile development methodologies.",
      ],
      tech: ["MERN Stack", "Agile", "Software Architecture"],
    },
  ],
};

export type Profile = typeof profile;