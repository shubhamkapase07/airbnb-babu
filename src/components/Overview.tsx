"use client";

import * as React from "react";
import Image from "next/image";
import { listing } from "@/data/listing";
import { Icon, Star } from "./icons";
import { Laurel } from "./Laurel";

export default function Overview() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      {/* Type + specs */}
      <div className="pb-6">
        <h2 className="text-[22px] font-semibold leading-snug">{listing.type}</h2>
        <p className="mt-1 text-base text-fg">{listing.specs.join(" · ")}</p>
      </div>

      {/* Guest favourite card */}
      <div className="mb-8 flex items-center justify-between rounded-2xl border border-line-2 px-6 py-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-1">
          <Laurel side="left" className="text-fg" />
          <div className="px-1">
            <div className="text-[15px] font-semibold leading-tight">Guest favourite</div>
            <div className="mt-0.5 max-w-[220px] text-[13px] leading-tight text-fg">
              One of the most loved homes on Airbnb, according to guests
            </div>
          </div>
          <Laurel side="right" className="text-fg" />
        </div>
        <div className="flex items-center gap-5">
          <div className="text-center">
            <div className="text-2xl font-semibold">{listing.rating}</div>
            <div className="mt-1 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} />
              ))}
            </div>
          </div>
          <div className="h-10 w-px bg-line" />
          <div className="text-center">
            <div className="text-2xl font-semibold">{listing.reviewsCount}</div>
            <div className="mt-0.5 text-xs font-medium underline">Reviews</div>
          </div>
        </div>
      </div>

      {/* Host row */}
      <div className="flex items-center gap-4 border-b border-line-2 pb-6">
        <div className="relative h-11 w-11 overflow-hidden rounded-full">
          <Image src={listing.host.avatar} alt={listing.host.name} fill className="object-cover" />
        </div>
        <div>
          <div className="text-[15px] font-semibold">Hosted by {listing.host.name}</div>
          <div className="text-sm text-muted-2">{listing.host.since}</div>
        </div>
      </div>

      {/* Highlights */}
      <div className="flex flex-col gap-6 border-b border-line-2 py-8">
        {listing.highlights.map((h) => (
          <div key={h.title} className="flex items-start gap-4">
            <Icon name={h.icon} size={30} stroke={1.4} className="mt-0.5 shrink-0 text-fg" />
            <div>
              <div className="text-base font-semibold leading-tight">{h.title}</div>
              <div className="text-sm text-muted-2">{h.body}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Description */}
      <div className="border-b border-line-2 py-8">
        <div className="mb-5 rounded-lg bg-hover px-4 py-3 text-sm">
          Some info has been automatically translated.{" "}
          <button className="font-semibold underline underline-offset-2">Show original</button>
        </div>
        <p
          className={`whitespace-pre-line text-base leading-relaxed text-fg ${
            expanded ? "" : "line-clamp-4"
          }`}
        >
          {listing.description}
        </p>
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 flex items-center gap-1.5 text-base font-semibold underline underline-offset-2"
        >
          {expanded ? "Show less" : "Show more"}
          <Icon name={expanded ? "chevronLeft" : "chevronRight"} size={14} stroke={2.5} />
        </button>
      </div>
    </div>
  );
}
