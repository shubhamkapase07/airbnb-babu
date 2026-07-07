"use client";

import * as React from "react";
import { listing } from "@/data/listing";
import { Icon } from "./icons";

export default function LocationMap() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <section id="location" className="scroll-mt-28 border-b border-line-2 py-12">
      <h2 className="text-[22px] font-semibold">Where you&apos;ll be</h2>
      <p className="mt-4 text-base text-fg">{listing.location}</p>

      {/* Stylised map */}
      <div className="relative mt-6 h-[480px] w-full overflow-hidden rounded-xl border border-line-2">
        <svg viewBox="0 0 1000 480" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
          <rect width="1000" height="480" fill="#e8ece3" />
          {/* water */}
          <polygon points="0,0 430,0 250,480 0,480" fill="#aecbeb" />
          {/* grid */}
          <g stroke="#00000010" strokeWidth="1">
            {Array.from({ length: 10 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 110} y1="0" x2={i * 110} y2="480" />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 96} x2="1000" y2={i * 96} />
            ))}
          </g>
          {/* parks */}
          <circle cx="360" cy="210" r="55" fill="#c7dcae" opacity="0.7" />
          <circle cx="720" cy="290" r="80" fill="#c7dcae" opacity="0.7" />
        </svg>

        {/* pin */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-fg text-white shadow-[0_6px_16px_rgba(0,0,0,0.35)]">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M4 11 12 5l8 6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 10v8h12v-8" strokeLinejoin="round" />
              <path d="M10 18v-4h4v4" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* search */}
        <button
          aria-label="Search map"
          className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition-transform hover:scale-105"
        >
          <Icon name="map-search" size={18} stroke={2} />
        </button>

        {/* zoom */}
        <div className="absolute right-5 top-5 flex flex-col overflow-hidden rounded-xl bg-white shadow-md">
          <button aria-label="Zoom in" className="flex h-11 w-11 items-center justify-center border-b border-line-2 transition-colors hover:bg-hover">
            <Icon name="plus" size={18} stroke={2.2} />
          </button>
          <button aria-label="Zoom out" className="flex h-11 w-11 items-center justify-center transition-colors hover:bg-hover">
            <Icon name="minus" size={18} stroke={2.2} />
          </button>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-2">Exact location will be provided after booking.</p>

      <div className="mt-8">
        <h3 className="text-lg font-semibold">Neighbourhood highlights</h3>
        <p className={`mt-3 max-w-3xl text-base leading-relaxed text-fg ${expanded ? "" : "line-clamp-2"}`}>
          {listing.neighbourhood} Whether you crave a quiet morning coffee by the beach or a lively
          evening out, everything is just a short stroll or scooter ride away. The area is well
          connected, safe, and full of local charm.
        </p>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 flex items-center gap-1.5 text-base font-semibold underline underline-offset-2"
        >
          {expanded ? "Show less" : "Show more"}
          <Icon name={expanded ? "chevronLeft" : "chevronRight"} size={14} stroke={2.5} />
        </button>
      </div>
    </section>
  );
}
