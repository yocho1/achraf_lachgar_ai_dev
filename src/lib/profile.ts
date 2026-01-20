export type Project = {
  title: string;
  period?: string;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  metrics: string[];
  links: {
    demo: string;
    source: string;
  };
  videoId?: string;
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  achievements: string[];
  tech: string[];
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  achievements: string[];
  skills: string[];
  link?: string;
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
    linkedin: "https://www.linkedin.com/in/achraf-lachgar/?locale=en_US",
    github: "https://github.com/yocho1",
    resume: "/resume-achraf-lachgar.pdf",
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
      value: "6",
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
        demo: "https://github.com/yocho1/SheetBrain-AI",
        source: "https://github.com/yocho1/SheetBrain-AI",
      },
      videoId: "shOBf2iYR_M",
    },
    {
      title: "Legal-FAQ-Assistant",
      period: "10/2025 — 11/2025",
      problem:
        "Legal Q&A systems lacked domain-specific accuracy and data privacy compliance for sensitive legal queries.",
      solution:
        "Fine-tuned Mistral 7B using QLoRA, achieving 20% increase in domain-specific accuracy. Architected a secure pipeline with AES-256 encryption and containerized deployment via Kubernetes. Optimized model inference for accurate legal responses.",
      tech: ["Mistral 7B", "QLoRA", "PEFT", "Kubernetes", "AES-256", "Python"],
      impact: "+20% domain accuracy with production-ready legal Q&A and privacy compliance.",
      metrics: ["+20% domain accuracy", "Privacy compliant"],
      links: {
        demo: "https://github.com/yocho1/legal-FAQ-assistant",
        source: "https://github.com/yocho1/legal-FAQ-assistant",
      },
      videoId: "p6OxBBaOl-o",
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
        demo: "https://github.com/yocho1/Multimodal-AI",
        source: "https://github.com/yocho1/Multimodal-AI",
      },
      videoId: "dhrlYs_mpko",
    },
    {
      title: "Babel-Fish-Assistant",
      problem:
        "Real-time voice translation systems lacked seamless integration of speech recognition, translation, and natural voice synthesis for cross-language communication.",
      solution:
        "Developed a production-ready real-time voice translator integrating Deepgram STT and ElevenLabs TTS with GPT-4o-mini for high-accuracy cross-language processing. Built full-stack application with Next.js 14 and Flask backend for low-latency audio streaming.",
      tech: ["Deepgram STT", "GPT-4o-mini", "ElevenLabs TTS", "Next.js 14", "Flask", "Python", "TypeScript"],
      impact: "Production-ready voice AI system enabling real-time multilingual communication with natural speech synthesis.",
      metrics: ["Real-time translation", "Voice AI"],
      links: {
        demo: "https://github.com/yocho1/babel-fish-assistant",
        source: "https://github.com/yocho1/babel-fish-assistant",
      },
      videoId: "v239erBAwY8",
    },
    {
      title: "Multi-Agent-AI-System",
      problem:
        "Complex AI tasks required autonomous orchestration of multiple specialized agents with tool-based workflows and collaborative decision-making.",
      solution:
        "Engineered a Multi-Agent AI System capable of autonomous task decomposition and execution using tool-based workflows and collaborative agent architectures. Implemented agent coordination patterns with TypeScript for reliable multi-step task completion.",
      tech: ["TypeScript", "Multi-Agent Systems", "Tool-Based Workflows", "AI Orchestration", "LangChain"],
      impact: "Advanced agentic AI system for autonomous task execution with intelligent agent collaboration.",
      metrics: ["Autonomous agents", "Task orchestration"],
      links: {
        demo: "https://github.com/yocho1/Multi-Agent-AI-System",
        source: "https://github.com/yocho1/Multi-Agent-AI-System",
      },
    },
    {
      title: "AI-Powered-Meeting-Assistant",
      problem:
        "Manual meeting note-taking consumed significant time while missing key action items and decisions requiring follow-up.",
      solution:
        "Built a modern meeting intelligence platform that transcribes live audio and generates actionable summaries using state-of-the-art NLP models. Implemented real-time speech-to-text processing with Python and Flask, reducing manual note-taking time.",
      tech: ["Python", "Flask", "Speech-to-Text", "NLP", "Whisper API", "OpenAI"],
      impact: "Intelligent meeting transcription and summarization reducing manual documentation overhead.",
      metrics: ["Meeting intelligence", "Actionable summaries"],
      links: {
        demo: "https://github.com/yocho1/AI-Powered-Meeting-Assistant",
        source: "https://github.com/yocho1/AI-Powered-Meeting-Assistant",
      },
      videoId: "pdizEkwePwY",
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
        "Created modern, responsive user interfaces utilizing Tailwind CSS, Bootstrap, and Sass.",
        "Developed and integrated secure REST APIs and managed authentication solutions like JWT and OAuth.",
        "Managed database architectures and optimized query performance using Mongoose and PostgreSQL.",
        "Deployed and maintained production applications on cloud platforms including Vercel, Netlify, and Heroku.",
        "Optimized website performance and SEO (Core Web Vitals) to improve search rankings and user retention.",
        "Conceived and maintained custom WordPress sites, including theme and plugin development.",
        "Developed interactive frontend functionality with JavaScript and backend logic in PHP.",
        "Integrated AI-powered features using LLM APIs (chatbots, document analysis, automation tools).",
        "Designed backend services for AI inference and data processing.",
      ],
      tech: ["React.js", "React Native", "MongoDB", "Express.js", "Node.js", "HTML5/CSS3", "JavaScript ES6+", "Redux", "Tailwind CSS", "Bootstrap", "Sass", "JWT/OAuth", "Mongoose", "PostgreSQL", "Git/GitHub", "Docker", "Jest", "Postman", "Heroku", "AWS", "Netlify", "WordPress", "PHP", "LLM APIs", "FastAPI"],
    },
  ],
  education: [
    {
      degree: "Professional Certificate, AI Developer",
      institution: "IBM",
      period: "01/2025 — 01/2026",
      achievements: [
        "Completed an intensive 10-course program focusing on the Full Stack AI Development lifecycle.",
        "Developed core competencies in Generative AI, Prompt Engineering, and building AI-powered applications.",
        "Gained hands-on experience in Python for Data Science, FastAPI/Flask, and creating specialized AI chatbots.",
      ],
      skills: ["FastAPI", "Model Fine-Tuning", "Prompt Engineering", "Large Language Models (LLM)", "Python", "QLoRA", "Retrieval-Augmented Generation (RAG)", "PEFT", "Generative AI"],
    },
    {
      degree: "Certification by Simplon in France and UM6P, Full Stack Developer",
      institution: "YouCode School",
      period: "10/2019 — 06/2021",
      achievements: [
        "Completed rigorous project-based training in modern web technologies and software architecture.",
        "Specialized in the MERN stack and professional agile development methodologies.",
      ],
      skills: ["React.js", "React Native", "MongoDB", "Express.js", "Node.js", "Agile Methodologies", "HTML5/CSS3", "JavaScript ES6+", "Redux", "CSS Frameworks", "Responsive Design", "Authentication & Authorization", "API Design", "Mongoose", "Data Modeling", "GitHub/GitLab", "Git", "NPM/Yarn", "Docker", "Jest", "Postman", "Debugging Tools", "Heroku", "AWS", "Netlify"],
      link: "https://youcode.ma/",
    },
    {
      degree: "Bachelor of Science, Physics & Chemistry",
      institution: "Faculté Polydisciplinaire, Safi - UM6P",
      period: "10/2015 — 08/2018",
      achievements: [
        "Completed foundational coursework in physical sciences and mathematical analysis.",
      ],
      skills: ["Physics", "Chemistry", "Mechanics", "Mathematics", "French"],
    },
    {
      degree: "High School Diploma, Physics & Chemistry",
      institution: "Lycée Kachkat",
      period: "09/2014 — 06/2015",
      achievements: [
        "Focused on advanced mathematics, physical sciences, and chemical engineering foundations.",
      ],
      skills: ["Mathematics", "Physics", "Chemistry"],
    },
  ],
  languages: [
    {
      language: "Arabic",
      proficiency: "Full Professional Proficiency",
    },
    {
      language: "French",
      proficiency: "Limited Working Proficiency",
    },
    {
      language: "English",
      proficiency: "Full Professional Proficiency",
    },
  ],
};

export type Profile = typeof profile;