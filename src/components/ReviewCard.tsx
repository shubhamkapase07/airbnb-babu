"use client";

import * as React from "react";
import Image from "next/image";
import { Star } from "./icons";
import type { Review } from "@/data/listing";

export function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = React.useState(false);
  const long = review.text.length > 160;

  return (
    <div>
      <div className="flex items-center gap-3">
        {review.avatar ? (
          <div className="relative h-11 w-11 overflow-hidden rounded-full">
            <Image src={review.avatar} alt={review.name} fill sizes="44px" className="object-cover" />
          </div>
        ) : (
          <div
            className="flex h-11 w-11 items-center justify-center rounded-full text-base font-semibold text-fg"
            style={{ background: review.avatarBg ?? "#ddd" }}
          >
            {review.initial ?? review.name[0]}
          </div>
        )}
        <div>
          <div className="text-[15px] font-semibold leading-tight">{review.name}</div>
          <div className="text-sm text-muted-2">{review.tenure}</div>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-xs">
        <span className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} />
          ))}
        </span>
        <span className="text-fg">·</span>
        <span className="font-medium text-fg">{review.when}</span>
      </div>
      <p className={`mt-2 text-[15px] leading-relaxed text-fg ${expanded || !long ? "" : "line-clamp-4"}`}>
        {review.text}
      </p>
      {long && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 text-[15px] font-semibold underline underline-offset-2"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}
