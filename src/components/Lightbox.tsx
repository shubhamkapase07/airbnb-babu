"use client";

import * as React from "react";
import Image from "next/image";
import { photos } from "@/data/listing";
import { Icon } from "./icons";
import { useUI } from "./ui-context";

export default function Lightbox() {
  const { overlay, closeLightbox, lightboxIndex, setLightboxIndex } = useUI();
  const open = overlay === "lightbox";
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const total = photos.length;

  const prev = React.useCallback(
    () => setLightboxIndex((lightboxIndex - 1 + total) % total),
    [lightboxIndex, total, setLightboxIndex]
  );
  const next = React.useCallback(
    () => setLightboxIndex((lightboxIndex + 1) % total),
    [lightboxIndex, total, setLightboxIndex]
  );

  React.useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeLightbox, prev, next]);

  if (!open) return null;
  const photo = photos[lightboxIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${lightboxIndex + 1} of ${total}`}
      className="fixed inset-0 z-[60] flex flex-col bg-black animate-fade-in"
    >
      {/* top bar */}
      <div className="flex items-center justify-between px-5 py-4 text-white">
        <button
          ref={closeRef}
          onClick={closeLightbox}
          aria-label="Close photo viewer"
          className="focus-ring flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-white/10"
        >
          <Icon name="close" size={20} stroke={2.2} />
        </button>
        <div className="text-sm font-medium tabular-nums" aria-live="polite">
          {lightboxIndex + 1} / {total}
        </div>
        <div className="flex items-center gap-1">
          <button className="focus-ring flex items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium hover:bg-white/10">
            <Icon name="share" size={16} stroke={2} />
            <span className="underline underline-offset-2">Share</span>
          </button>
          <button className="focus-ring flex items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium hover:bg-white/10">
            <Icon name="heart" size={16} stroke={2} />
            <span className="underline underline-offset-2">Save</span>
          </button>
        </div>
      </div>

      {/* image stage */}
      <div className="relative flex flex-1 items-center justify-center px-4 pb-10 sm:px-16">
        <button
          onClick={prev}
          aria-label="Previous photo"
          className="focus-ring absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/40 text-white transition-transform hover:scale-105 sm:left-6"
        >
          <Icon name="chevronLeft" size={18} stroke={2.4} />
        </button>

        <div key={lightboxIndex} className="relative h-full w-full max-w-5xl animate-zoom-in">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="90vw"
            className="object-contain"
            priority
          />
        </div>

        <button
          onClick={next}
          aria-label="Next photo"
          className="focus-ring absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/40 text-white transition-transform hover:scale-105 sm:right-6"
        >
          <Icon name="chevronRight" size={18} stroke={2.4} />
        </button>
      </div>

      {/* caption */}
      {photo.caption && (
        <div className="pb-6 text-center text-sm text-white/70">{photo.caption}</div>
      )}
    </div>
  );
}
