"use client";

import * as React from "react";

type Overlay = "tour" | "lightbox" | "amenities" | "reviews" | null;

type UIState = {
  overlay: Overlay;
  lightboxIndex: number;
  openTour: () => void;
  openLightbox: (index: number) => void;
  openAmenities: () => void;
  openReviews: () => void;
  close: () => void;
  closeLightbox: () => void;
  setLightboxIndex: (i: number) => void;
};

const Ctx = React.createContext<UIState | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [overlay, setOverlay] = React.useState<Overlay>(null);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const openTour = React.useCallback(() => setOverlay("tour"), []);
  const openAmenities = React.useCallback(() => setOverlay("amenities"), []);
  const openReviews = React.useCallback(() => setOverlay("reviews"), []);
  const close = React.useCallback(() => setOverlay(null), []);
  const openLightbox = React.useCallback((index: number) => {
    setLightboxIndex(index);
    setOverlay("lightbox");
  }, []);
  // The lightbox is always opened from the Photo Tour, so closing it returns there.
  const closeLightbox = React.useCallback(() => setOverlay("tour"), []);

  // Lock body scroll while any overlay is open
  React.useEffect(() => {
    if (overlay) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [overlay]);

  const value = React.useMemo(
    () => ({
      overlay,
      lightboxIndex,
      openTour,
      openLightbox,
      openAmenities,
      openReviews,
      close,
      closeLightbox,
      setLightboxIndex,
    }),
    [overlay, lightboxIndex, openTour, openLightbox, openAmenities, openReviews, close, closeLightbox]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useUI() {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
