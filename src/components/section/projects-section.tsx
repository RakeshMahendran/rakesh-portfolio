"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

type Category = "all" | "professional" | "personal" | "freelance";

const FILTERS: { id: Category; label: string; dot: string }[] = [
  { id: "all",          label: "All",          dot: "bg-foreground/40" },
  { id: "professional", label: "Professional",  dot: "bg-blue-500" },
  { id: "personal",     label: "Personal",      dot: "bg-violet-500" },
  { id: "freelance",    label: "Freelance",     dot: "bg-amber-500" },
];

type Project = (typeof DATA.projects)[number];

function getField<K extends string>(p: Project, key: K): string | undefined {
  return key in p ? (p as Record<string, unknown>)[key] as string : undefined;
}

export default function ProjectsSection() {
  const [active, setActive] = useState<Category>("all");

  const visible = active === "all"
    ? DATA.projects
    : DATA.projects.filter((p) => getField(p, "category") === active);

  return (
    <section id="projects">
      <div className="flex min-h-0 flex-col gap-y-8">

        {/* ── Header ── */}
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                <span className="text-background text-sm font-medium">Projects</span>
              </div>
              <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="flex flex-col gap-y-2 items-center justify-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Things I&apos;ve shipped
              </h2>
              <p className="text-muted-foreground text-base text-balance text-center max-w-lg">
                Full-stack products and AI systems — built, deployed, and used by real people.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* ── Filter tabs ── */}
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="flex items-center justify-center gap-1.5 flex-wrap">
            {FILTERS.map((f) => {
              const count = f.id === "all"
                ? DATA.projects.length
                : DATA.projects.filter((p) => getField(p, "category") === f.id).length;
              const isActive = active === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={cn(
                    "relative inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "bg-foreground text-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {/* Dot indicator */}
                  <span className={cn("size-2 rounded-full shrink-0", f.dot,
                    isActive ? "opacity-100" : "opacity-60"
                  )} />
                  {f.label}
                  {/* Count badge */}
                  <span className={cn(
                    "text-[10px] font-semibold tabular-nums rounded-full px-1.5 py-0.5 min-w-[20px] text-center leading-none",
                    isActive
                      ? "bg-background/20 text-background"
                      : "bg-muted text-muted-foreground"
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </BlurFade>

        {/* ── Grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto auto-rows-fr w-full"
          >
            {visible.map((project, id) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.18, delay: id * 0.04 }}
                className="h-full"
              >
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  summary={project.summary}
                  ownership={project.ownership}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  loom={getField(project, "loom")}
                  links={project.links}
                  confidential={project.confidential}
                  confidentialLabel={getField(project, "confidentialLabel")}
                  accentColor={getField(project, "accentColor")}
                  category={getField(project, "category") as Category | undefined}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
