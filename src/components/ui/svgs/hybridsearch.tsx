import type { SVGProps } from "react";
// Hybrid Search — magnifier with two overlapping circles (BM25 + semantic)
const HybridSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Hybrid Search</title>
    <circle cx="8" cy="9" r="5"/>
    <circle cx="14" cy="9" r="5"/>
    <line x1="17.5" y1="14" x2="22" y2="19"/>
  </svg>
);
export { HybridSearch };
