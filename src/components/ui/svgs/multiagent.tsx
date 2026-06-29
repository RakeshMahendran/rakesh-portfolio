import type { SVGProps } from "react";
// Multi-Agent — three nodes connected in a network
const MultiAgent = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Multi-Agent Orchestration</title>
    <circle cx="12" cy="5" r="2.5"/>
    <circle cx="4" cy="18" r="2.5"/>
    <circle cx="20" cy="18" r="2.5"/>
    <path d="M10.3 7.1 5.4 15.8M13.7 7.1l4.9 8.7M6.5 18h11" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);
export { MultiAgent };
