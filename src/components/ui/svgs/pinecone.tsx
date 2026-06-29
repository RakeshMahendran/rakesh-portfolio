import type { SVGProps } from "react";
// Pinecone's mark: a stylised pine cone / upward triangle stack
const Pinecone = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Pinecone</title>
    <path d="M12 2 7 8h3v1.5L6 14h3.5V16L5 21h14l-4.5-5V14H18L14 9.5V8h3z"/>
  </svg>
);
export { Pinecone };
