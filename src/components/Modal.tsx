"use client";

import * as React from "react";
import { Icon } from "./icons";

export function Modal({
  open,
  onClose,
  title,
  children,
  header,
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  header?: React.ReactNode;
  children: React.ReactNode;
}) {
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button, a, input, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[55] flex items-center justify-center bg-black/50 p-4 animate-fade-in"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl animate-zoom-in"
      >
        <div className="relative flex items-center px-6 py-4">
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close"
            className="focus-ring flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-hover"
          >
            <Icon name="close" size={18} stroke={2.2} />
          </button>
        </div>
        <div className="overflow-y-auto px-8 pb-10">
          {title && <h2 className="mb-6 text-2xl font-semibold">{title}</h2>}
          {header}
          {children}
        </div>
      </div>
    </div>
  );
}
