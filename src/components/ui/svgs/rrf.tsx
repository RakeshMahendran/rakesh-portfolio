import type { SVGProps } from "react";
// RRF — two ranked lists merging into one
const RRF = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Reciprocal Rank Fusion</title>
    <path d="M2 4h7v2H2V4zm0 4h7v2H2V8zm0 4h7v2H2v-2zm0 4h7v2H2v-2zM15 4h7v2h-7V4zm0 4h7v2h-7V8zm0 4h7v2h-7v-2zm0 4h7v2h-7v-2zM11 8l2 4-2 4V8z"/>
  </svg>
);
export { RRF };
