"use client";

import { useState } from "react";

interface SafeLogoProps {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
}

export function SafeLogo({ src, alt, className, fallbackClassName }: SafeLogoProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return <div className={fallbackClassName ?? "size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none"} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className ?? "size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none"}
      onError={() => setError(true)}
    />
  );
}
