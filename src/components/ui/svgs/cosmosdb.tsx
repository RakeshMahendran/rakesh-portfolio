import type { SVGProps } from "react";
// Azure Cosmos DB — Saturn-like globe with orbital ring
const CosmosDB = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Azure Cosmos DB</title>
    <ellipse cx="12" cy="12" rx="4.5" ry="4.5"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 5.5C7.5 5.5 2.5 7.8 2.5 12S7.5 18.5 12 18.5 21.5 16.2 21.5 12 16.5 5.5 12 5.5zm0 1.5c3.6 0 7.5 1.8 7.5 5s-3.9 5-7.5 5S4.5 15.2 4.5 12s3.9-5 7.5-5z"/>
  </svg>
);
export { CosmosDB };
