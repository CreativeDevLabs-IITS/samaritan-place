import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };
const base = (size = 22): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: false,
});

export const Phone = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>
);
export const Mail = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Pin = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.800 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const Download = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14" /></svg>
);
export const Arrow = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><path d="M5 12h14m0 0-5-5m5 5-5 5" /></svg>
);
export const Chevron = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><path d="m6 9 6 6 6-6" /></svg>
);
export const Close = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Menu = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Left = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><path d="m15 5-7 7 7 7" /></svg>
);
export const Right = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><path d="m9 5 7 7-7 7" /></svg>
);
export const Cross = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><path d="M12 3v18M7 8h10" /></svg>
);
export const Search = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-4.200-4.200" /></svg>
);
export const External = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r}><path d="M14 4h6v6m0-6-9 9M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4" /></svg>
);
export const Facebook = ({ size, ...r }: P) => (
  <svg {...base(size)} {...r} fill="currentColor" stroke="none"><path d="M13.500 21v-7.500h2.500l.5-3h-3V8.700c0-.9.300-1.500 1.600-1.500H16.700V4.500c-.3 0-1.200-.1-2.300-.1-2.300 0-3.900 1.400-3.900 4V10.500H8v3h2.500V21h3Z" /></svg>
);
