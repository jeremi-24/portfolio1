import type { SVGProps } from "react";

export const NextjsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z"/>
  </svg>
);

export const PostgresqlIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5h-2v-7H7v-2h4v9.5zm6-5.5c0 1.93-1.57 3.5-3.5 3.5S10 12.93 10 11s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5z"/>
  </svg>
);

export const DrizzleNeonIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2l7 7-7 7-7-7 7-7z"/>
        <path d="M2.5 13.5l7 7 7-7"/>
    </svg>
);
