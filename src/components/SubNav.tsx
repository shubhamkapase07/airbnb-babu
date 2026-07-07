"use client";

import * as React from "react";
import { listing } from "@/data/listing";
import { Star } from "./icons";
import { formatPrice } from "@/lib/format";

const TABS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

export default function SubNav() {
  const [visible, setVisible] = React.useState(false);
  const [active, setActive] = React.useState("photos");

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    const ids = TABS.map((t) => t.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleEntries[0]) setActive(visibleEntries[0].target.id);
      },
      { rootMargin: "-140px 0px -60% 0px", threshold: [0, 0.25, 0.5] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed inset-x-0 top-0 z-30 border-b border-line-2 bg-white transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1128px] items-center justify-between px-6">
        <nav className="flex h-full items-center gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => scrollTo(t.id)}
              className={`focus-ring relative flex h-full items-center px-1 text-sm font-medium transition-colors hover:text-fg ${
                active === t.id ? "text-fg" : "text-muted-2"
              }`}
            >
              {t.label}
              <span
                className={`absolute inset-x-0 bottom-0 h-0.5 bg-fg transition-opacity ${
                  active === t.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden text-right sm:block">
            <div className="text-sm font-semibold">
              {formatPrice(listing.price)}{" "}
              <span className="font-normal">for {listing.nights} nights</span>
            </div>
            <div className="flex items-center justify-end gap-1 text-xs">
              <Star size={11} />
              <span className="font-medium">{listing.rating}</span>
              <span className="text-muted-2">· {listing.reviewsCount} reviews</span>
            </div>
          </div>
          <button className="btn-gradient focus-ring rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-transform active:scale-95">
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
