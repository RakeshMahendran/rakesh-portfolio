import type { SVGProps } from "react";
// RAGAS — evaluation bars / metric chart
const RAGAS = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>RAGAS</title>
    <path d="M5 20H3V10h2v10zm4 0H7V4h2v16zm4 0h-2v-7h2v7zm4 0h-2V8h2v12zm4 0h-2v-5h2v5z"/>
  </svg>
);
export { RAGAS };
