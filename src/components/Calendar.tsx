"use client";

import * as React from "react";
import { Icon } from "./icons";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

// Unavailable dates (year-month-day). Mirrors greyed-out days in the reference.
const UNAVAILABLE = new Set([
  "2026-11-18", "2026-11-19", "2026-11-20", "2026-11-21",
  "2026-11-22", "2026-11-23", "2026-11-24", "2026-11-29", "2026-11-30",
]);

const key = (y: number, m: number, d: number) =>
  `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
const iso = (dt: Date) => key(dt.getFullYear(), dt.getMonth(), dt.getDate());

function fmt(dt: Date | null) {
  if (!dt) return "";
  return `${dt.getDate()} ${MONTHS[dt.getMonth()].slice(0, 3)} ${dt.getFullYear()}`;
}

type Props = {
  checkIn: Date | null;
  checkOut: Date | null;
  onChange: (checkIn: Date | null, checkOut: Date | null) => void;
};

export default function Calendar({ checkIn, checkOut, onChange }: Props) {
  // left-most visible month
  const [view, setView] = React.useState({ year: 2026, month: 9 }); // October 2026

  const nights =
    checkIn && checkOut
      ? Math.round((checkOut.getTime() - checkIn.getTime()) / 86400000)
      : 0;

  const shift = (delta: number) => {
    setView((v) => {
      const m = v.month + delta;
      return { year: v.year + Math.floor(m / 12), month: ((m % 12) + 12) % 12 };
    });
  };

  const pick = (dt: Date) => {
    if (!checkIn || (checkIn && checkOut)) {
      onChange(dt, null);
    } else if (dt.getTime() <= checkIn.getTime()) {
      onChange(dt, null);
    } else {
      onChange(checkIn, dt);
    }
  };

  const second = { year: view.year + (view.month === 11 ? 1 : 0), month: (view.month + 1) % 12 };

  return (
    <div id="calendar" className="scroll-mt-28 border-b border-line-2 py-10">
      <h2 className="text-[22px] font-semibold">
        {nights > 0 ? `${nights} nights in Candolim` : "Select dates"}
      </h2>
      <p className="mt-1 text-sm text-muted-2">
        {checkIn && checkOut
          ? `${fmt(checkIn)} - ${fmt(checkOut)}`
          : "Add your travel dates for exact pricing"}
      </p>

      <div className="relative mt-8">
        {/* nav arrows */}
        <button
          onClick={() => shift(-1)}
          aria-label="Previous month"
          className="focus-ring absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-hover"
        >
          <Icon name="chevronLeft" size={16} stroke={2.4} />
        </button>
        <button
          onClick={() => shift(1)}
          aria-label="Next month"
          className="focus-ring absolute right-0 top-0 flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-hover"
        >
          <Icon name="chevronRight" size={16} stroke={2.4} />
        </button>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <Month {...view} checkIn={checkIn} checkOut={checkOut} onPick={pick} />
          <Month {...second} checkIn={checkIn} checkOut={checkOut} onPick={pick} />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="flex h-8 w-10 items-center justify-center rounded-md border border-line text-muted-2">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
            <rect x="1" y="1" width="18" height="12" rx="2" />
            <path d="M4 5h.01M7 5h.01M10 5h.01M13 5h.01M16 5h.01M4 8h.01M16 8h.01M7 9h6" strokeLinecap="round" />
          </svg>
        </span>
        <button
          onClick={() => onChange(null, null)}
          className="focus-ring rounded-md px-2 py-1 text-base font-semibold underline underline-offset-2 hover:bg-hover"
        >
          Clear dates
        </button>
      </div>
    </div>
  );
}

function Month({
  year,
  month,
  checkIn,
  checkOut,
  onPick,
}: {
  year: number;
  month: number;
  checkIn: Date | null;
  checkOut: Date | null;
  onPick: (d: Date) => void;
}) {
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [
    ...Array(startDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const inRange = (d: number) => {
    if (!checkIn || !checkOut) return false;
    const t = new Date(year, month, d).getTime();
    return t > checkIn.getTime() && t < checkOut.getTime();
  };
  const isEnd = (d: number) => {
    const t = new Date(year, month, d).getTime();
    return t === checkIn?.getTime() || t === checkOut?.getTime();
  };

  return (
    <div>
      <div className="mb-4 text-center text-base font-semibold">
        {MONTHS[month]} {year}
      </div>
      <div className="mb-2 grid grid-cols-7 text-center text-xs font-medium text-muted-2">
        {WEEKDAYS.map((w, i) => (
          <div key={i} className="py-1">
            {w}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />;
          const k = key(year, month, d);
          const unavailable = UNAVAILABLE.has(k);
          const range = inRange(d);
          const end = isEnd(d);
          return (
            <div
              key={i}
              className={`relative flex aspect-square items-center justify-center ${
                range ? "bg-hover" : ""
              } ${end && checkIn && checkOut ? (checkIn && iso(checkIn) === k ? "rounded-l-full bg-hover" : "rounded-r-full bg-hover") : ""}`}
            >
              <button
                disabled={unavailable}
                onClick={() => onPick(new Date(year, month, d))}
                className={`focus-ring flex h-full w-full items-center justify-center rounded-full text-sm transition-colors ${
                  end
                    ? "bg-fg font-semibold text-white"
                    : unavailable
                      ? "cursor-not-allowed text-muted-2 line-through"
                      : "font-medium hover:border hover:border-fg"
                }`}
              >
                {d}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
