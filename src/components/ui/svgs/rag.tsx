import type { SVGProps } from "react";
// RAG — document going into a model (search + generate)
const RAG = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>RAG</title>
    <path d="M3 3h8v2H5v14h14v-6h2v8H3V3zm10 0h8v8h-2V6.414l-6.293 6.293-1.414-1.414L17.586 5H13V3z"/>
  </svg>
);
export { RAG };
