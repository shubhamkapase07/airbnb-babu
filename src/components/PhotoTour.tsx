"use client";

import * as React from "react";
import Image from "next/image";
import { photos } from "@/data/listing";
import { Icon } from "./icons";
import { useUI } from "./ui-context";

export default function PhotoTour() {
  const { overlay, close, openLightbox } = useUI();
  const open = overlay === "tour";
  const closeRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-50 overflow-y-auto bg-white animate-fade-in"
    >
      {/* top bar */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1040px] items-center justify-between px-6">
          <button
            ref={closeRef}
            onClick={close}
            aria-label="Close photo tour"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-hover"
          >
            <Icon name="chevronLeft" size={20} stroke={2.2} />
          </button>
          <div className="flex items-center gap-1">
            <button className="focus-ring flex items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium hover:bg-hover">
              <Icon name="share" size={16} stroke={2} />
              <span className="underline underline-offset-2">Share</span>
            </button>
            <button className="focus-ring flex items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium hover:bg-hover">
              <Icon name="heart" size={16} stroke={2} />
              <span className="underline underline-offset-2">Save</span>
            </button>
          </div>
        </div>
      </div>

      {/* mosaic */}
      <div className="mx-auto max-w-[960px] px-6 pb-24 pt-4">
        <div className="grid grid-cols-2 gap-2">
          {photos.map((p, i) => {
            const full = i % 3 === 0;
            return (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className={`img-hover relative overflow-hidden rounded-xl bg-hover focus-ring ${
                  full ? "col-span-2 aspect-[3/2]" : "aspect-square"
                }`}
                aria-label={`Open photo ${i + 1}: ${p.alt}`}
              >
                <Image src={p.src} alt={p.alt} fill sizes="(max-width:960px) 100vw, 960px" className="object-cover" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
