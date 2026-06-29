import type { SVGProps } from "react";
// SigNoz — observability / signal waveform mark
const SigNoz = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>SigNoz</title>
    <path d="M2 14h2.5l2-4 2.5 8 2.5-12 2.5 10 2-4H22v-2H14.5l-1.5 3-2.5-10-2.5 12-2.5-8-1.5 3H2v2z"/>
  </svg>
);
export { SigNoz };
