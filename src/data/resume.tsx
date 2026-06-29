import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Typescript } from "@/components/ui/svgs/typescript";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { Redis } from "@/components/ui/svgs/redis";
import { Django } from "@/components/ui/svgs/django";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { Flask } from "@/components/ui/svgs/flask";
import { Express } from "@/components/ui/svgs/express";
import { AWS } from "@/components/ui/svgs/aws";
import { Azure } from "@/components/ui/svgs/azure";
import { Vercel } from "@/components/ui/svgs/vercel";
import { GitHubActions } from "@/components/ui/svgs/githubactions";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";
import { FramerMotion } from "@/components/ui/svgs/framermotion";
import { Redux } from "@/components/ui/svgs/redux";
import { LangChain } from "@/components/ui/svgs/langchain";
import { OpenAI } from "@/components/ui/svgs/openai";
import { Elasticsearch } from "@/components/ui/svgs/elasticsearch";
import { Qdrant } from "@/components/ui/svgs/qdrant";
import { Pinecone } from "@/components/ui/svgs/pinecone";
import { CosmosDB } from "@/components/ui/svgs/cosmosdb";
import { SigNoz } from "@/components/ui/svgs/signoz";
import { RAG } from "@/components/ui/svgs/rag";
import { HybridSearch } from "@/components/ui/svgs/hybridsearch";
import { RRF } from "@/components/ui/svgs/rrf";
import { FunctionCalling } from "@/components/ui/svgs/functioncalling";
import { MultiAgent } from "@/components/ui/svgs/multiagent";
import { PromptEngineering } from "@/components/ui/svgs/promptengineering";
import { CICD } from "@/components/ui/svgs/cicd";
import { RAGAS } from "@/components/ui/svgs/ragas";
import { RetrievalEval } from "@/components/ui/svgs/retrievaleval";

export const DATA = {
  name: "Rakesh Mahendran",
  initials: "RM",
  url: "https://rakeshmahendran.dev",
  location: "Coimbatore, India",
  locationLink: "https://www.google.com/maps/place/Coimbatore",
  description:
    "I turn AI ideas into products people actually use — working directly with teams to go from zero to production.",
  summary:
    "Full-stack engineer and forward-deployed builder. I sit with teams, understand the problem first-hand, and ship — whether that's a RAG pipeline that actually works, a multi-agent system that handles real load, or the interface that makes it feel effortless. Three years doing this at enterprise scale, self-taught from a mechanical engineering background. I care about the whole thing: retrieval quality, latency, the frontend, and whether users come back.",
  avatarUrl: "/me.png",

  skillGroups: [
    {
      label: "Languages",
      skills: [
        { name: "Python", icon: Python },
        { name: "TypeScript", icon: Typescript },
        { name: "JavaScript", icon: JavaScript },
      ],
    },
    {
      label: "AI / LLM & RAG",
      skills: [
        { name: "LangChain", icon: LangChain },
        { name: "OpenAI", icon: OpenAI },
        { name: "Azure AI Foundry", icon: Azure },
        { name: "AWS Bedrock", icon: AWS },
        { name: "Qdrant", icon: Qdrant },
        { name: "Pinecone", icon: Pinecone },
        { name: "Elasticsearch", icon: Elasticsearch },
        { name: "RAG", icon: RAG },
        { name: "Hybrid Search", icon: HybridSearch },
        { name: "Reciprocal Rank Fusion", icon: RRF },
        { name: "Function Calling", icon: FunctionCalling },
        { name: "Multi-Agent Orchestration", icon: MultiAgent },
        { name: "Prompt Engineering", icon: PromptEngineering },
      ],
    },
    {
      label: "Evaluation & Observability",
      skills: [
        { name: "RAGAS", icon: RAGAS },
        { name: "Retrieval Eval Suites", icon: RetrievalEval },
        { name: "SigNoz", icon: SigNoz },
      ],
    },
    {
      label: "Backend",
      skills: [
        { name: "Django", icon: Django },
        { name: "FastAPI", icon: FastAPI },
        { name: "Flask", icon: Flask },
        { name: "Node.js", icon: Nodejs },
        { name: "Express", icon: Express },
      ],
    },
    {
      label: "Frontend",
      skills: [
        { name: "Next.js", icon: NextjsIconDark },
        { name: "React", icon: ReactLight },
        { name: "Redux Toolkit", icon: Redux },
        { name: "Tailwind CSS", icon: TailwindCSS },
        { name: "Framer Motion", icon: FramerMotion },
        { name: "React Native", icon: ReactLight },
      ],
    },
    {
      label: "Databases",
      skills: [
        { name: "PostgreSQL", icon: Postgresql },
        { name: "MongoDB", icon: MongoDB },
        { name: "CosmosDB", icon: CosmosDB },
        { name: "Redis", icon: Redis },
        { name: "Elasticsearch", icon: Elasticsearch },
      ],
    },
    {
      label: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: AWS },
        { name: "Azure", icon: Azure },
        { name: "Docker", icon: Docker },
        { name: "Vercel", icon: Vercel },
        { name: "GitHub Actions", icon: GitHubActions },
        { name: "CI/CD", icon: CICD },
      ],
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],

  contact: {
    email: "rakeshmahendran99@gmail.com",
    tel: "+918825817452",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RakeshMahendran",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rakesh-mahendran",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:rakeshmahendran99@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "The Yellow Network",
      href: "https://theyellow.network",
      badges: [],
      location: "Remote",
      title: "Software Developer",
      logoUrl: "/yellow-network.png",
      start: "Aug 2023",
      end: null,
      description:
        "Forward-deployed AI engineer — embedded with enterprise clients to understand real problems and ship GenAI solutions end-to-end. Built NIFO (B2B co-innovation platform), a serverless RAG support chatbot, and a multi-agent MS Teams assistant for a major supply-chain enterprise. Owned the full stack on each: retrieval pipelines, backends, and the interfaces.",
    },
    {
      company: "Travelfika",
      href: "https://travelfika.com",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "/travelfika.png",
      start: "May 2022",
      end: "Aug 2023",
      description:
        "Built the React web app, React Native (Expo) mobile app, and Node.js/Express backend from scratch. Owned auth, onboarding flow, and integrated GPT API for AI-generated travel itineraries.",
    },
  ],

  education: [
    {
      school: "Government College of Technology, Coimbatore",
      href: "https://gct.ac.in",
      degree: "B.E. Mechanical Engineering — CGPA 8.3",
      logoUrl: "/gct.png",
      start: "2020",
      end: "2024",
    },
  ],

  projects: [
    {
      title: "Travelfika — Travel Planner & Booking",
      href: "https://travelfika.com",
      dates: "May 2022 – Aug 2023",
      active: true,
      category: "professional" as const,
      confidential: false,
      accentColor: "#0EA5E9",
      summary: "A web and mobile app for booking flights, hotels, cars, and cruises — with AI-generated day-by-day trip itineraries.",
      ownership: "Sole developer during my internship. I built the React web app, the React Native (Expo) mobile app, and the Node/Express backend — JWT auth, onboarding, and the GPT API integration that writes the itineraries.",
      description: "Full-stack travel booking platform with a cross-platform mobile app and GPT-powered travel planning.",
      technologies: ["React", "React Native", "Expo", "Node.js", "Express", "MongoDB", "GPT API", "JWT", "Redux"],
      links: [
        { type: "Live", href: "https://travelfika.com", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
      loom: "",
    },
    {
      title: "Monter — Startup–Investor Platform",
      href: "https://monter.one",
      dates: "2023",
      active: true,
      category: "freelance" as const,
      confidential: false,
      accentColor: "#8B5CF6",
      summary: "An anonymous deal marketplace where startups pitch by metrics and investors discover them by sector and revenue — with pitch decks, financials, and valuations in one place.",
      ownership: "Sole developer. I designed and built the whole product — the Next.js frontend, the Node.js backend and integrations, and the AWS deployment.",
      description: "Startup–investor matchmaking platform with anonymous deal flow and structured due-diligence materials.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React Hook Form", "Node.js", "AWS"],
      links: [
        { type: "Live", href: "https://monter.one", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
      loom: "",
    },
    {
      title: "Portfolio Council — AI Investment Board",
      href: "https://github.com/RakeshMahendran/Portfolio-Council",
      dates: "2026",
      active: true,
      category: "personal" as const,
      confidential: false,
      accentColor: "#EC4899",
      summary: "A five-agent AI board that researches an investment and debates it to a decision — the Risk Officer holds a hard veto, and every verdict is recorded as a Git commit.",
      ownership: "I built the multi-agent system on Lyzr's GitAgent runtime, the FastAPI backend, and the Next.js debate UI — plus the governance layer: a pre-commit hook that blocks any decision that wasn't explicitly approved.",
      description: "Git-native multi-agent investment board. Four specialist agents debate, Risk Officer has hard veto power, every decision is an immutable commit.",
      technologies: ["Next.js", "FastAPI", "Lyzr GitAgent", "Docker", "AWS Bedrock", "OpenAI", "Anthropic", "Python"],
      links: [
        { type: "GitHub", href: "https://github.com/RakeshMahendran/Portfolio-Council", icon: <Icons.github className="size-3" /> },
        { type: "Demo", href: "https://www.loom.com/share/b97de3bcb41f4fe8b703f39251481ef7", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
      loom: "https://www.loom.com/share/b97de3bcb41f4fe8b703f39251481ef7",
    },
    {
      title: "Flakers Studio — Chatbot Builder",
      href: "https://github.com/RakeshMahendran/Flakers-studio",
      dates: "2026",
      active: true,
      category: "personal" as const,
      confidential: false,
      accentColor: "#6366F1",
      summary: "Point it at any website or WordPress site and it fetches, chunks, embeds, and deploys a production-ready chatbot — with per-tenant governance built in.",
      ownership: "I built the multi-tenant vector isolation (each client's data fully separated in Qdrant) and the server-side governance layer — intent filtering, source attribution, confidence thresholds, and audit logging on every retrieval and generation call.",
      description: "Self-serve chatbot builder: ingest any website, get a governed, embeddable AI assistant ready to deploy.",
      technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Qdrant", "Azure OpenAI", "LangChain"],
      links: [
        { type: "GitHub", href: "https://github.com/RakeshMahendran/Flakers-studio", icon: <Icons.github className="size-3" /> },
      ],
      image: "",
      video: "",
      loom: "",
    },
    {
      title: "NIFO — AI Co-Innovation Platform",
      href: "https://nifo.theyellow.network",
      dates: "Aug 2023 – Present",
      active: true,
      category: "professional" as const,
      confidential: false,
      accentColor: "#F59E0B",
      summary: "A B2B platform that helps enterprises find the right startups to co-innovate with, searching and matching across 10,000+ company profiles.",
      ownership: "I own the product end-to-end — Next.js + Redux frontend, Django backend, and the RAG pipeline. I made LLM responses stream and retrieval feel instant via partial responses, optimistic UI state, and clean error recovery across the stack.",
      description: "AI-powered co-innovation marketplace with semantic search and real-time LLM-driven matching.",
      technologies: ["Django", "Next.js", "LangChain", "Qdrant", "OpenAI", "PostgreSQL", "Azure"],
      links: [
        { type: "Live", href: "https://nifo.theyellow.network", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
      loom: "",
    },
    {
      title: "Saramsa AI — Feedback Intelligence",
      href: "https://saramsa.ai",
      dates: "2025 – 2026",
      active: true,
      category: "personal" as const,
      confidential: false,
      accentColor: "#10B981",
      summary: "Drop in a CSV or PDF, or paste text — Saramsa extracts sentiment, surfaces themes, and auto-files the resulting tickets into Jira, Azure DevOps, or Slack.",
      ownership: "I built the full product — the Next.js/TypeScript frontend, the Django backend, JWT + RBAC auth, and all three work-item integrations.",
      description: "Multi-modal feedback analysis that turns raw input into actionable work items across your existing tools.",
      technologies: ["Next.js", "TypeScript", "Django", "CosmosDB", "Azure AI Foundry", "Jira", "Azure DevOps", "Slack", "JWT", "RBAC"],
      links: [
        { type: "Live App", href: "https://agent.saramsa.ai", icon: <Icons.globe className="size-3" /> },
        { type: "Site", href: "https://saramsa.ai", icon: <Icons.globe className="size-3" /> },
      ],
      image: "",
      video: "",
      loom: "",
    },
    {
      title: "Serverless RAG Chatbot",
      href: "",
      dates: "2025",
      active: true,
      category: "professional" as const,
      confidential: true,
      confidentialLabel: "Confidential Client (Supply Chain & Logistics)",
      accentColor: "#EF4444",
      summary: "A public-facing support chatbot on a client's website that answers visitor questions and routes qualified leads into HubSpot — fully serverless, no servers to manage.",
      ownership: "Built it solo, end-to-end: hybrid BM25 + semantic retrieval fused with RRF (k=60), a two-model setup (a fast classifier feeding a capable generator), and a 150-query RAGAS eval suite to measure and tune answer quality.",
      description: "Production serverless chatbot with hybrid retrieval, two-model cost optimization, and a rigorous evaluation suite.",
      technologies: ["Python", "AWS Lambda", "Pinecone", "AWS Bedrock", "Titan Embeddings", "Claude", "HubSpot CRM"],
      links: [],
      image: "",
      video: "",
      loom: "",
    },
    {
      title: "Multi-Agent MS Teams Assistant",
      href: "",
      dates: "2025 – 2026",
      active: true,
      category: "professional" as const,
      confidential: true,
      confidentialLabel: "Confidential Client (Supply Chain & Logistics)",
      accentColor: "#F97316",
      summary: "An internal Microsoft Teams assistant for 100+ staff that answers questions by routing across SharePoint, Azure DevOps, code repos, and Snowflake (NL-to-SQL) through a two-layer routing system.",
      ownership: "I owned the RFI automation feature end-to-end and built it into the LLM intent classifier and function router (IntelligentRouter → FunctionRouter → tool dispatch), with Microsoft Graph permission filtering so users only see what they're allowed to.",
      description: "Enterprise multi-agent assistant routing across 8+ tools with permission-aware retrieval and NL-to-SQL.",
      technologies: ["Python", "AWS Bedrock", "Elasticsearch", "Sentence Transformers", "RRF", "Cross-encoder Reranking", "Microsoft Graph"],
      links: [],
      image: "",
      video: "",
      loom: "",
    },
  ],

  hackathons: [],
} as const;
