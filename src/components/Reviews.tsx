"use client";

import * as React from "react";
import { listing, reviews } from "@/data/listing";
import { Icon, Star } from "./icons";
import { Laurel } from "./Laurel";
import { ReviewCard } from "./ReviewCard";
import { useUI } from "./ui-context";

export default function Reviews() {
  const { openReviews } = useUI();

  return (
    <section id="reviews" className="scroll-mt-28 border-b border-line-2 py-12">
      {/* Summary header */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center gap-2">
          <Laurel side="left" className="h-24 w-14 text-fg" />
          <span className="text-[86px] font-semibold leading-none tracking-tight">
            {listing.rating}
          </span>
          <Laurel side="right" className="h-24 w-14 text-fg" />
        </div>
        <h2 className="mt-3 text-2xl font-semibold">Guest favourite</h2>
        <p className="mt-2 max-w-md text-base text-fg">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button className="mt-3 text-sm font-semibold underline underline-offset-2">
          How reviews work
        </button>
      </div>

      {/* Rating breakdown */}
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-7 lg:gap-y-0 lg:divide-x lg:divide-line-2">
        <div className="px-4">
          <div className="mb-3 text-sm font-semibold">Overall rating</div>
          <div className="space-y-1">
            {listing.ratingBars.map((b) => (
              <div key={b.star} className="flex items-center gap-2">
                <span className="w-2 text-[11px] text-muted-2">{b.star}</span>
                <span className="h-1 flex-1 overflow-hidden rounded-full bg-line-2">
                  <span className="block h-full rounded-full bg-fg" style={{ width: `${b.pct}%` }} />
                </span>
              </div>
            ))}
          </div>
        </div>
        {listing.ratingCategories.map((c) => (
          <div key={c.label} className="px-4">
            <div className="text-sm font-semibold">{c.label}</div>
            <div className="mt-1 text-lg font-semibold">{c.value}</div>
            <Icon name={c.icon} size={28} stroke={1.4} className="mt-2 text-fg" />
          </div>
        ))}
      </div>

      {/* Tag pills */}
      <div className="no-scrollbar mt-10 flex gap-3 overflow-x-auto pb-1">
        {listing.reviewTags.map((t) => (
          <button
            key={t.label}
            className="focus-ring flex shrink-0 items-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm transition-colors hover:border-fg"
          >
            <span className="text-base">{t.emoji}</span>
            <span className="font-medium">{t.label}</span>
            <span className="text-muted-2">{t.count}</span>
          </button>
        ))}
      </div>

      {/* Review grid */}
      <div className="mt-10 grid grid-cols-1 gap-x-16 gap-y-9 md:grid-cols-2">
        {reviews.map((r) => (
          <ReviewCard key={r.name} review={r} />
        ))}
      </div>

      <button
        onClick={openReviews}
        className="focus-ring mt-10 rounded-lg border border-fg px-5 py-3 text-base font-semibold transition-colors hover:bg-hover active:scale-[0.98]"
      >
        Show all {listing.reviewsCount} reviews
      </button>
    </section>
  );
}
