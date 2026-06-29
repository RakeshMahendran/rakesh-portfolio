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
      summary: "Book flights, hotels, car rentals, and cruises — with AI-generated day-by-day itineraries — across web and mobile.",
      ownership: "Built the React web app and React Native (Expo) mobile app, the Node.js/Express backend, JWT auth and onboarding, and wired up the GPT API for itinerary generation.",
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
      summary: "Anonymous deal marketplace — startups pitch by metrics, investors discover by sector and revenue. Pitch decks, financials, and valuations all in one place.",
      ownership: "Built the full Next.js frontend and Node.js backend; deployed on AWS.",
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
      summary: "Five-agent investment research board where every decision is a git commit — agents debate, Risk Officer has hard veto power, governance enforced at the pre-commit hook layer.",
      ownership: "Built the multi-agent architecture on Lyzr's GitAgent runtime, the FastAPI backend, and the Next.js debate UI. Designed the governance model: a pre-commit hook that blocks commits without a `Verdict: APPROVE` marker.",
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
      summary: "Point it at a website or WordPress site — it fetches, chunks, embeds, and deploys a production-ready chatbot with per-tenant governance baked in.",
      ownership: "Built multi-tenant Qdrant vector isolation (each client's data fully separated), server-side intent filtering, source attribution, confidence thresholds, and audit logging on every retrieval and generation call.",
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
      summary: "B2B platform connecting enterprises to the right startups across 10,000+ profiles using AI-powered search and intelligent matching.",
      ownership: "Owned the entire product — Next.js + Redux frontend, Django backend, and the RAG pipeline. Made streaming LLM responses and retrieval latency feel instantaneous via partial responses, optimistic UI state, and clean error recovery across the full stack.",
      description: "AI-powered co-innovation marketplace with semantic search and real-time LLM-driven matching.",
      technologies: ["Django", "Next.js", "TypeScript", "LangChain", "Qdrant", "OpenAI", "GPT-4o-mini", "PostgreSQL", "Azure", "Redux"],
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
      summary: "Drop in a CSV, PDF, or paste text — Saramsa extracts sentiment, surfaces themes, and auto-files tickets in Jira, Azure DevOps, or Slack.",
      ownership: "Built the full product — Next.js/TypeScript frontend, Django backend, JWT + RBAC auth, and all three integration connectors.",
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
      summary: "Public-facing support chatbot that answers visitor questions and routes qualified leads into HubSpot — zero servers, fully serverless.",
      ownership: "Solo end-to-end. Hybrid BM25 + semantic retrieval fused with RRF (k=60), a two-model setup (fast classifier → capable generator), and a 150-query RAGAS eval suite to measure and tune answer quality.",
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
      summary: "Internal Teams assistant for 100+ staff — routes questions across SharePoint, Azure DevOps, code repos, Snowflake (NL-to-SQL), and more through a two-layer routing architecture.",
      ownership: "Owned the RFI automation feature end-to-end and built it into the LLM intent classifier and function router. Architecture: IntelligentRouter → FunctionRouter → tool dispatch, with Microsoft Graph permission filtering.",
      description: "Enterprise multi-agent assistant routing across 8+ tools with permission-aware retrieval and NL-to-SQL.",
      technologies: ["Python", "Flask", "AWS Bedrock", "Elasticsearch 8.17", "Sentence Transformers", "RRF", "Cross-encoder Reranking", "Redis", "PostgreSQL", "Docker", "Microsoft Graph", "SigNoz"],
      links: [],
      image: "",
      video: "",
      loom: "",
    },
  ],

  hackathons: [],
} as const;
