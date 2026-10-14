import {
  ArrowRight,
  Bot,
  Compass,
  LineChart,
  Sparkles,
  Github,
  ExternalLink,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

/**
 * Project imagery below is mockup-only. All visuals are sourced from
 * Dribbble and credit belongs to the original creators on dribbble.com.
 * Replace these with your own work before shipping.
 */

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
};

const PROJECTS: Project[] = [
  {
    id: "kickskraze",
    icon: Sparkles,
    iconLabel: "Kickskraze",
    title:
      "A high-concurrency sneaker marketplace with atomic stock reservation and deep module architecture.",
    description:
      "Built with Next.js 16, Supabase, PostgreSQL, and Stripe. Features transactional stock locking to prevent overselling during high-demand drops, RBAC admin console, and AI shopping assistant powered by Nexus bot.",
    meta: "Personal Project, 2026",
    imageRatio: 16 / 9,
    image:
      "/projects/kickskraze.png",
    imageAlt: "Kickskraze sneaker marketplace",
    githubUrl: "https://github.com/tom2811/kickskraze",
    liveUrl: "https://kickskraze-lemon.vercel.app",
  },
  {
    id: "nexus-bot",
    icon: Bot,
    iconLabel: "Nexus Bot",
    title: "Hybrid AI assistant combining RAG + database tools for intelligent query routing.",
    description:
      "A reusable FastAPI backend that automatically detects query intent and routes between document knowledge (ChromaDB) and structured data (PostgreSQL). Multi-tenant architecture with 131 tests. Powers e-commerce AI assistants.",
    meta: "Personal Project, 2026",
    imageRatio: 16 / 9,
    image:
      "/projects/nexus-bot-placeholder.svg",
    imageAlt: "Nexus Bot AI assistant",
    githubUrl: "https://github.com/tom2811/nexus-bot",
  },
  {
    id: "dota-glicko",
    icon: LineChart,
    iconLabel: "Dota Glicko Model",
    title: "Match prediction system using Glicko-1 ratings and gradient boosting.",
    description:
      "Predicts professional Dota 2 outcomes by tracking 2,081 player ratings and team fatigue. Trained on 7,607 pro matches with ~70% AUC. Features live match interface with win probabilities.",
    meta: "Personal Project, 2026",
    imageRatio: 16 / 9,
    image:
      "/projects/dota-glicko-placeholder.svg",
    imageAlt: "Dota Glicko rating model",
    githubUrl: "https://github.com/tom2811/dota-glicko-model",
    liveUrl: "https://dota-glicko-model.vercel.app",
  },
  {
    id: "donatio",
    icon: Compass,
    iconLabel: "Donatio",
    title: "Full-stack charitable giving and donation platform.",
    description:
      "Built with Next.js, TypeScript, and Tailwind CSS. Features TanStack Query and Zustand for state management, with ShadCN UI components for a polished user experience.",
    meta: "Personal Project, 2025",
    imageRatio: 16 / 9,
    image:
      "/projects/donatio.png",
    imageAlt: "Donatio charitable giving platform",
    githubUrl: "https://github.com/tom2811/donatio-nextJS",
  },
  {
    id: "notespace",
    icon: Sparkles,
    iconLabel: "NoteSpace",
    title:
      "AI-powered note-taking app with PDF conversion, knowledge graphs, and intelligent summarization.",
    description:
      "Built with React and Django using LangChain/LangGraph. Features Quill.js rich text editor, AI chatbot assistant, real-time autosave, and social sharing with public note exploration.",
    meta: "Hackathon Project, Apr 2025",
    imageRatio: 16 / 9,
    image:
      "/projects/notespace.png",
    imageAlt: "NoteSpace AI-powered note-taking platform",
    githubUrl: "https://github.com/tom2811/NoteSpace-Frontend",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 2) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              Selected Projects
            </h2>
            <p className="max-w-[38ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              Showcasing expertise in modern web development, system design, and AI integration.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
        <header className="flex items-center gap-2.5 px-1 pt-2">
          <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
            <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-sm font-medium tracking-tight text-foreground">
            {project.iconLabel}
          </span>
        </header>

        <div
          className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
          style={{ aspectRatio: project.imageRatio }}
        >
          <div className="project-card__image-inner">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2.5 px-1 pb-1">
          <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
            {project.title}
          </h3>
          <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between px-1 pb-2">
          <p className="text-[12px] tracking-tight text-foreground/50">
            {project.meta}
          </p>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-lg border border-foreground/8 bg-background text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
                aria-label="View on GitHub"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex h-8 w-8 items-center justify-center rounded-lg border border-foreground/8 bg-background text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
                aria-label="View live site"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}
