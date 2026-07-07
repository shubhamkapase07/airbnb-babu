import * as React from "react";

type P = React.SVGProps<SVGSVGElement>;

// Airbnb "Bélo" logo
export function AirbnbLogo(props: P) {
  return (
    <svg viewBox="0 0 32 32" role="img" aria-label="Airbnb" fill="currentColor" {...props}>
      <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.35.96 3.234l.01.386.001.353c0 3.457-2.402 5.876-5.63 5.876-2.099 0-4.315-1.328-6.335-3.762L16 30.53l-.005.006c-2.02 2.434-4.236 3.762-6.335 3.762l-.267-.006C6.302 34.101 4 31.732 4 28.416l.001-.353.01-.386c.05-.884.293-1.643.96-3.234l.145-.353c.986-2.297 5.146-11.006 7.1-14.836l.533-1.025C14.037 1.963 15.992 1 16 1zm0 2.104c-.762 0-1.482.4-2.318 1.767l-.483.912-.53 1.023c-1.936 3.79-6.093 12.494-7.026 14.68l-.14.343-.15.383c-.35.923-.492 1.443-.53 1.99l-.01.293v.238c0 2.35 1.485 3.772 3.526 3.772 1.34 0 2.936-.882 4.518-2.545l-.16-.187c-1.617-1.98-2.516-3.913-2.516-5.762 0-2.53 1.928-4.294 4.293-4.294s4.293 1.764 4.293 4.294c0 1.849-.899 3.782-2.516 5.762l-.16.187c1.582 1.663 3.178 2.545 4.518 2.545 2.041 0 3.526-1.421 3.526-3.772v-.238l-.01-.293c-.038-.547-.18-1.067-.53-1.99l-.15-.383-.14-.343c-.933-2.186-5.09-10.89-7.026-14.68l-.53-1.023-.483-.912C17.482 3.504 16.762 3.104 16 3.104zm0 14.207c-1.238 0-2.19.87-2.19 2.19 0 1.245.638 2.688 1.902 4.253l.288.345.288-.345c1.264-1.565 1.902-3.008 1.902-4.253 0-1.32-.952-2.19-2.19-2.19z" />
    </svg>
  );
}

const paths: Record<string, React.ReactNode> = {
  search: <path d="M13 13l5.5 5.5M8.5 15a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M2.5 12h19M12 2.5c2.5 2.6 3.8 6 3.8 9.5s-1.3 6.9-3.8 9.5c-2.5-2.6-3.8-6-3.8-9.5S9.5 5.1 12 2.5z" />
    </>
  ),
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  share: (
    <path d="M17 6l-5-4-5 4M12 2v14M4 11v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9" strokeLinecap="round" strokeLinejoin="round" />
  ),
  heart: (
    <path d="M12 21C-3 12 4-2 12 5.5 20-2 27 12 12 21z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  // highlights
  outdoor: (
    <path d="M3 20h18M6 20V10l6-5 6 5v10M9 20v-5h6v5M12 2v1.5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  cool: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 2v6M12 16v6M4.2 7l4.9 3M14.9 14l4.9 3M4.2 17l4.9-3M14.9 10l4.9-3" strokeLinecap="round" />
    </>
  ),
  key: (
    <path d="M15 8a4 4 0 1 1-3.9 5H8v3H5v-3H2.5l6.6-2A4 4 0 0 1 15 8z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  // amenities & categories
  kitchen: (
    <path d="M6 2v7a2 2 0 0 0 2 2v11M6 2v5M9 2v5M18 2c-2 0-3 2-3 5s1 5 3 5v9" strokeLinecap="round" strokeLinejoin="round" />
  ),
  wifi: (
    <path d="M2 8.5C7.5 3.5 16.5 3.5 22 8.5M5 12c4-3.5 10-3.5 14 0M8.5 15.5c2.1-1.8 4.9-1.8 7 0M12 19h.01" strokeLinecap="round" strokeLinejoin="round" />
  ),
  workspace: (
    <path d="M4 4h16v11H4zM4 11h16M9 20h6M12 15v5" strokeLinecap="round" strokeLinejoin="round" />
  ),
  parking: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  pool: (
    <path d="M2 18c2 0 2 1.5 4 1.5S10 18 12 18s2 1.5 4 1.5 2-1.5 4-1.5M2 13c2 0 2 1.5 4 1.5S10 13 12 13s2 1.5 4 1.5 2-1.5 4-1.5M8 15V5a2 2 0 0 1 4 0M8 9h4" strokeLinecap="round" strokeLinejoin="round" />
  ),
  hottub: (
    <path d="M3 11h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-3zM7 11V6a2 2 0 0 1 4 0M13 6.5c1 1 1 2 0 3" strokeLinecap="round" strokeLinejoin="round" />
  ),
  pets: (
    <path d="M5.5 13.5c-1.5 0-2.5-1.5-2.5-3M18.5 13.5c1.5 0 2.5-1.5 2.5-3M8 8C7 8 6.5 6.5 6.5 5S7 2.5 8 2.5 9.5 4 9.5 5.5 9 8 8 8zm8 0c-1 0-1.5-1.5-1.5-3S15 2.5 16 2.5 17.5 4 17.5 5.5 17 8 16 8zM12 12c-2.5 0-4.5 2.2-4.5 4.5C7.5 18.5 9 20 12 20s4.5-1.5 4.5-3.5C16.5 14.2 14.5 12 12 12z" strokeLinecap="round" strokeLinejoin="round" />
  ),
  camera: (
    <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM3 3l18 18" strokeLinecap="round" strokeLinejoin="round" />
  ),
  co: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9 12h6M4 4l16 16" strokeLinecap="round" />
    </>
  ),
  smoke: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 9v.01M4 4l16 16" strokeLinecap="round" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" />
    </>
  ),
  sound: <path d="M4 9v6h4l5 4V5L8 9H4zM17 8a5 5 0 0 1 0 8" strokeLinecap="round" strokeLinejoin="round" />,
  fan: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10c0-4 1-6 3-6s3 3 1 6M12 14c0 4-1 6-3 6s-3-3-1-6M10 12c-4 0-6-1-6-3s3-3 6-1M14 12c4 0 6 1 6 3s-3 3-6 1" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  fridge: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M6 9h12M10 5v2M10 12v3" strokeLinecap="round" /></>,
  microwave: <><rect x="2" y="5" width="20" height="14" rx="2" /><rect x="5" y="8" width="9" height="8" /><path d="M17.5 9v6" strokeLinecap="round" /></>,
  cooking: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></>,
  dishes: <path d="M7 2v20M5 2v6a2 2 0 0 0 4 0V2M17 2c-1.5 0-2.5 3-2.5 6s1 4 2.5 4v10" strokeLinecap="round" strokeLinejoin="round" />,
  stove: <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="2" /><circle cx="15.5" cy="8.5" r="2" /><circle cx="8.5" cy="15.5" r="2" /><circle cx="15.5" cy="15.5" r="2" /></>,
  coffee: <path d="M4 8h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8zM17 9h2a2 2 0 0 1 0 4h-2M7 3v2M11 3v2" strokeLinecap="round" strokeLinejoin="round" />,
  view: <><circle cx="12" cy="12" r="3.5" /><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" strokeLinecap="round" strokeLinejoin="round" /></>,
  hairdryer: <path d="M3 6a5 5 0 0 1 10 0v3H3V6zM13 7.5h5M13 8.5l7 3M9 9v6a2 2 0 0 1-4 0" strokeLinecap="round" strokeLinejoin="round" />,
  shampoo: <><rect x="7" y="8" width="10" height="13" rx="2" /><path d="M10 8V5h4v3M11 3h2" strokeLinecap="round" /></>,
  hotwater: <path d="M12 3s5 5 5 9a5 5 0 0 1-10 0c0-4 5-9 5-9z" strokeLinecap="round" strokeLinejoin="round" />,
  washer: <><rect x="4" y="2" width="16" height="20" rx="2" /><circle cx="12" cy="13" r="5" /><path d="M8 6h.01M11 6h.01" strokeLinecap="round" /></>,
  essentials: <path d="M6 22V11a6 6 0 0 1 12 0v11M4 22h16M9 11V6a3 3 0 0 1 6 0" strokeLinecap="round" strokeLinejoin="round" />,
  hangers: <path d="M12 6a2 2 0 1 1 2 2c-1 0-2 1-2 2v1l8 5H4l8-5" strokeLinecap="round" strokeLinejoin="round" />,
  linens: <path d="M3 8l9-5 9 5v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8zM3 12h18" strokeLinecap="round" strokeLinejoin="round" />,
  iron: <path d="M3 15v-3a5 5 0 0 1 5-5h13l-2 8H3zM3 15h15" strokeLinecap="round" strokeLinejoin="round" />,
  entrance: <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8M18 8l4 4-4 4M22 12H10" strokeLinecap="round" strokeLinejoin="round" />,
  balcony: <path d="M3 21h18M4 21V10h16v11M4 14h16M8 21v-7M12 21v-7M16 21v-7M8 10V6l4-3 4 3v4" strokeLinecap="round" strokeLinejoin="round" />,
  furniture: <path d="M4 11V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2M3 11a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2M5 19v-3M19 19v-3" strokeLinecap="round" strokeLinejoin="round" />,
  dining: <path d="M6 3v7a2 2 0 0 0 2 2v9M6 3v5M9 3v5M18 3c-1.5 0-2.5 2-2.5 5s1 4 2.5 4v9" strokeLinecap="round" strokeLinejoin="round" />,
  staff: <><circle cx="12" cy="7" r="4" /><path d="M4 21a8 8 0 0 1 16 0" strokeLinecap="round" /></>,
  // rating categories
  cleanliness: <path d="M9 4h5l2 5H9V4zM9 9v3M12 9v3M8 12h5v9a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-9zM16 5l2-1M17 7l2 0" strokeLinecap="round" strokeLinejoin="round" />,
  accuracy: <><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" /></>,
  checkin: <path d="M15 8a4 4 0 1 1-3.9 5H8v3H5v-3H2.5l6.6-2A4 4 0 0 1 15 8z" strokeLinecap="round" strokeLinejoin="round" />,
  communication: <path d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9l-5 4V5a1 1 0 0 1 1-1z" strokeLinecap="round" strokeLinejoin="round" />,
  location: <path d="M9 3L3 6v15l6-3 6 3 6-3V3l-6 3-6-3zM9 3v15M15 6v15" strokeLinecap="round" strokeLinejoin="round" />,
  value: <path d="M20 4h-7L3 14l7 7 10-10V4zM16.5 7.5h.01" strokeLinecap="round" strokeLinejoin="round" />,
  // things to know
  "cal-x": <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4M9 14l6 4M15 14l-6 4" strokeLinecap="round" strokeLinejoin="round" /></>,
  shield: <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" strokeLinecap="round" strokeLinejoin="round" />,
  // map
  plus: <path d="M12 5v14M5 12h14" strokeLinecap="round" />,
  minus: <path d="M5 12h14" strokeLinecap="round" />,
  "map-search": <path d="M11 11l4 4M7 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9z" strokeLinecap="round" strokeLinejoin="round" />,
  chevronRight: <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />,
  chevronLeft: <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />,
  chevronDown: <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />,
  close: <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  flag: <path d="M5 21V4M5 4c3-2 7 2 10 0v9c-3 2-7-2-10 0" strokeLinecap="round" strokeLinejoin="round" />,
  tag: <path d="M20 4h-7L3 14l7 7 10-10V4zM16.5 7.5h.01" strokeLinecap="round" strokeLinejoin="round" />,
  laurel: (
    <path d="M11 3C6 5 3 9 3 15c0 3 1.5 5 4 6-1.5-2-2-4-2-6M6 6c-1 2-1 4 0 6M4 10c0 2 .5 3.5 2 4.5M5.5 14c.5 1.5 1.5 2.5 3 3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  ),
};

export function Icon({
  name,
  size = 24,
  stroke = 1.8,
  className,
  ...rest
}: { name: keyof typeof paths | string; size?: number; stroke?: number } & Omit<
  P,
  "stroke" | "name"
>) {
  const node = paths[name as string];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {node}
    </svg>
  );
}

export function Star({ size = 12, className }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 1.5l3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.27l-6.18 3.25L7 13.63l-5-4.87 6.91-1L12 1.5z" />
    </svg>
  );
}
