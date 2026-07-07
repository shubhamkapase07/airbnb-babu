"use client";

import * as React from "react";
import { listing } from "@/data/listing";
import { formatPrice } from "@/lib/format";
import { Icon } from "./icons";

function mdy(dt: Date | null) {
  if (!dt) return "Add date";
  return `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`;
}

type Props = {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  setGuests: (n: number) => void;
  onEditDates: () => void;
};

export default function BookingCard({
  checkIn,
  checkOut,
  guests,
  setGuests,
  onEditDates,
}: Props) {
  const [guestsOpen, setGuestsOpen] = React.useState(false);
  const nights =
    checkIn && checkOut
      ? Math.round((checkOut.getTime() - checkIn.getTime()) / 86400000)
      : listing.nights;
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setGuestsOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* Promo */}
      <div className="flex items-center gap-3 rounded-2xl border border-line-2 px-5 py-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
        <svg viewBox="0 0 24 24" className="h-8 w-8 shrink-0" aria-hidden>
          <path d="M12 3H5a2 2 0 0 0-2 2v7l9 9 9-9-9-8z" fill="#4a8f4a" transform="rotate(0)" />
          <path d="M20 4h-8L3 13l8 8 9-9V4z" fill="#3f8f4f" />
          <circle cx="15.5" cy="8.5" r="1.4" fill="#fff" />
        </svg>
        <div className="flex-1">
          <div className="text-sm font-semibold leading-tight">Get 10% off your next stay.</div>
          <button className="text-sm underline underline-offset-2">Terms apply</button>
        </div>
        <button className="focus-ring rounded-lg border border-fg px-4 py-1.5 text-sm font-semibold transition-colors hover:bg-hover">
          Claim
        </button>
      </div>

      {/* Price card */}
      <div className="rounded-2xl border border-line-2 p-6 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
        <div className="mb-5 text-[22px]">
          <span className="font-semibold underline underline-offset-2">
            {formatPrice(listing.price)}
          </span>{" "}
          <span className="text-fg">for {nights} nights</span>
        </div>

        {/* Selector */}
        <div ref={ref} className="relative rounded-xl border border-[#b0b0b0]">
          <div className="grid grid-cols-2">
            <button
              onClick={onEditDates}
              className="focus-ring rounded-tl-xl border-r border-[#b0b0b0] px-3 py-2.5 text-left transition-colors hover:bg-hover"
            >
              <div className="text-[10px] font-bold tracking-wide">CHECK-IN</div>
              <div className="text-sm">{mdy(checkIn)}</div>
            </button>
            <button
              onClick={onEditDates}
              className="focus-ring rounded-tr-xl px-3 py-2.5 text-left transition-colors hover:bg-hover"
            >
              <div className="text-[10px] font-bold tracking-wide">CHECKOUT</div>
              <div className="text-sm">{mdy(checkOut)}</div>
            </button>
          </div>
          <button
            onClick={() => setGuestsOpen((v) => !v)}
            className="focus-ring flex w-full items-center justify-between rounded-b-xl border-t border-[#b0b0b0] px-3 py-2.5 text-left transition-colors hover:bg-hover"
            aria-expanded={guestsOpen}
          >
            <span>
              <span className="block text-[10px] font-bold tracking-wide">GUESTS</span>
              <span className="text-sm">
                {guests} guest{guests > 1 ? "s" : ""}
              </span>
            </span>
            <Icon name="chevronDown" size={18} stroke={2} className={`transition-transform ${guestsOpen ? "rotate-180" : ""}`} />
          </button>

          {guestsOpen && (
            <div className="absolute left-0 right-0 top-full z-10 mt-2 rounded-2xl border border-line-2 bg-white p-5 shadow-[0_6px_20px_rgba(0,0,0,0.18)]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-base font-semibold">Adults</div>
                  <div className="text-sm text-muted-2">Age 13+</div>
                </div>
                <div className="flex items-center gap-3">
                  <Stepper
                    ariaLabel="decrease guests"
                    disabled={guests <= 1}
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    sign="minus"
                  />
                  <span className="w-5 text-center tabular-nums">{guests}</span>
                  <Stepper
                    ariaLabel="increase guests"
                    disabled={guests >= 3}
                    onClick={() => setGuests(Math.min(3, guests + 1))}
                    sign="plus"
                  />
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-2">This place has a maximum of 3 guests.</p>
            </div>
          )}
        </div>

        <div className="my-4 rounded-lg bg-hover py-2.5 text-center text-[13px] text-muted-2">
          Free cancellation before{" "}
          <span className="font-semibold text-fg">{listing.freeCancellationDate}</span>
        </div>

        <button className="btn-gradient focus-ring w-full rounded-xl py-3.5 text-base font-semibold text-white transition-transform active:scale-[0.99]">
          Reserve
        </button>
        <p className="mt-3 text-center text-sm text-muted-2">You won&apos;t be charged yet</p>
      </div>

      {/* Report */}
      <button className="focus-ring mx-auto flex items-center gap-2 rounded-md py-1 text-sm text-muted-2 underline underline-offset-2 hover:text-fg">
        <Icon name="flag" size={15} stroke={1.8} />
        Report this listing
      </button>
    </div>
  );
}

function Stepper({
  sign,
  onClick,
  disabled,
  ariaLabel,
}: {
  sign: "plus" | "minus";
  onClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className="focus-ring flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted-2 transition-colors enabled:hover:border-fg enabled:hover:text-fg disabled:opacity-40"
    >
      <Icon name={sign} size={14} stroke={2.2} />
    </button>
  );
}
