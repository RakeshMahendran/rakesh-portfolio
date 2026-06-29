/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Lock, ExternalLink, Play, Briefcase, User, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/* ── Category pill ───────────────────────────────────────────── */
const CATEGORY_STYLES: Record<string, { label: string; icon: React.ElementType; classes: string }> = {
  professional: { label: "Professional", icon: Briefcase, classes: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20" },
  personal:     { label: "Personal",     icon: User,      classes: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20" },
  freelance:    { label: "Freelance",    icon: Star,      classes: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20" },
};

/* ── Card banner (when no image/video) ───────────────────────── */
function ProjectBanner({
  title,
  accentColor = "#6366F1",
  confidential,
}: {
  title: string;
  accentColor?: string;
  confidential?: boolean;
}) {
  // Convert hex to RGB for subtle use
  const r = parseInt(accentColor.slice(1, 3), 16);
  const g = parseInt(accentColor.slice(3, 5), 16);
  const b = parseInt(accentColor.slice(5, 7), 16);

  // Short title for the large background text
  const short = title.split("—")[0].trim().split(" ").slice(0, 2).join(" ").toUpperCase();

  return (
    <div
      className="w-full h-40 relative overflow-hidden select-none"
      style={{
        background: `linear-gradient(145deg, rgba(${r},${g},${b},0.15) 0%, rgba(${r},${g},${b},0.04) 60%, transparent 100%)`,
      }}
    >
      {/* Mesh grid lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${title.replace(/\s/g,"").slice(0,10)}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke={`rgba(${r},${g},${b},0.12)`} strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${title.replace(/\s/g,"").slice(0,10)})`} />
      </svg>

      {/* Large ghost text backdrop */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <span
          className="font-black tracking-tighter leading-none whitespace-nowrap pointer-events-none"
          style={{
            fontSize: "4.5rem",
            color: `rgba(${r},${g},${b},0.07)`,
            letterSpacing: "-0.04em",
          }}
        >
          {short}
        </span>
      </div>

      {/* Radial glow — bottom right */}
      <div
        className="absolute -bottom-8 -right-8 w-36 h-36 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(${r},${g},${b},0.25) 0%, transparent 70%)`,
        }}
      />

      {/* Top-left accent bar */}
      <div
        className="absolute top-0 left-0 h-0.5 w-16 rounded-full"
        style={{ background: `rgba(${r},${g},${b},0.7)` }}
      />

      {confidential && (
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
          <div
            className="size-5 rounded-md flex items-center justify-center"
            style={{ background: `rgba(${r},${g},${b},0.15)` }}
          >
            <Lock className="size-3" style={{ color: `rgba(${r},${g},${b},0.8)` }} />
          </div>
          <span className="text-[11px] font-medium text-muted-foreground/60 tracking-wide">
            NDA — details on request
          </span>
        </div>
      )}
    </div>
  );
}

/* ── Safe image ──────────────────────────────────────────────── */
function ProjectImage({ src, alt, accentColor, confidential }: {
  src: string; alt: string; accentColor?: string; confidential?: boolean;
}) {
  const [error, setError] = useState(false);
  if (error) return <ProjectBanner title={alt} accentColor={accentColor} confidential={confidential} />;
  return <img src={src} alt={alt} className="w-full h-40 object-cover" onError={() => setError(true)} />;
}

/* ── Props ───────────────────────────────────────────────────── */
interface Props {
  title: string;
  href?: string;
  summary: string;
  ownership: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  loom?: string;
  links?: readonly { icon: React.ReactNode; type: string; href: string }[];
  confidential?: boolean;
  confidentialLabel?: string;
  accentColor?: string;
  category?: string;
  className?: string;
}

/* ── Card ────────────────────────────────────────────────────── */
export function ProjectCard({
  title,
  href,
  summary,
  ownership,
  dates,
  tags,
  image,
  video,
  loom,
  links,
  confidential,
  confidentialLabel,
  accentColor = "#6366F1",
  category,
  className,
}: Props) {
  const hasLink = !!href;
  const catStyle = category ? CATEGORY_STYLES[category] : undefined;
  const CatIcon = catStyle?.icon;

  return (
    <div
      className={cn(
        "group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300",
        "border border-border/60",
        "hover:border-border hover:shadow-xl hover:shadow-black/8 dark:hover:shadow-black/30",
        "hover:-translate-y-0.5",
        className
      )}
    >
      {/* ── Banner / media ── */}
      <div className="relative shrink-0">
        {video ? (
          <video src={video} autoPlay loop muted playsInline className="w-full h-40 object-cover" />
        ) : loom ? (
          <div className="w-full h-40 bg-muted/40">
            <iframe
              src={`https://www.loom.com/embed/${loom.split("/").pop()}`}
              className="w-full h-full border-0"
              allowFullScreen
              title={`${title} demo`}
            />
          </div>
        ) : image ? (
          <ProjectImage src={image} alt={title} accentColor={accentColor} confidential={confidential} />
        ) : (
          <ProjectBanner title={title} accentColor={accentColor} confidential={confidential} />
        )}

        {/* Link pills — float top right */}
        {links && links.length > 0 && !loom && (
          <div className="absolute top-3 right-3 flex flex-wrap gap-1.5 items-center">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium backdrop-blur-md bg-background/80 border border-border/60 text-foreground shadow-sm hover:bg-background transition-colors"
              >
                {link.icon}
                {link.type}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* ── Body ── */}
      <div className="p-5 flex flex-col gap-3 flex-1 bg-card">
        {/* Row: category pill + date */}
        <div className="flex items-center justify-between gap-2">
          {catStyle && CatIcon ? (
            <span className={cn(
              "inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border",
              catStyle.classes
            )}>
              <CatIcon className="size-2.5" />
              {catStyle.label}
            </span>
          ) : <span />}
          <time className="text-[11px] text-muted-foreground/60 tabular-nums shrink-0">{dates}</time>
        </div>

        {/* Title */}
        {hasLink ? (
          <Link
            href={href!}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[15px] leading-snug hover:underline underline-offset-2 inline-flex items-center gap-1 group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
          >
            {title}
            <ExternalLink className="size-3 text-muted-foreground opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-150 shrink-0" />
          </Link>
        ) : (
          <h3 className="font-semibold text-[15px] leading-snug">{title}</h3>
        )}

        {/* Summary */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{summary}</p>

        {/* What I built — left-bordered callout */}
        {ownership && (
          <div
            className="text-xs leading-relaxed text-muted-foreground/70 pl-3 border-l-[2px]"
            style={{ borderColor: `${accentColor}50` }}
          >
            <span className="font-semibold" style={{ color: `${accentColor}cc` }}>Built by me: </span>
            {ownership}
          </div>
        )}

        {/* Loom CTA (when loom shown above, no need; for non-loom cards with a loom link) */}
        {loom && !video && image && (
          <Link
            href={loom}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors w-fit"
          >
            <Play className="size-3" />
            Watch demo
          </Link>
        )}

        {/* Confidential label — clean inline note, not a badge */}
        {confidential && confidentialLabel && (
          <p className="text-[11px] text-muted-foreground/50 italic mt-auto">
            {confidentialLabel}
          </p>
        )}

        {/* Tech stack */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1 mt-auto">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded-md bg-muted/60 text-muted-foreground border border-border/40"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
