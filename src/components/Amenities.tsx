"use client";

import { amenities } from "@/data/listing";
import { Icon } from "./icons";
import { useUI } from "./ui-context";

export default function Amenities() {
  const { openAmenities } = useUI();

  return (
    <div id="amenities" className="scroll-mt-28 border-b border-line-2 py-10">
      <h2 className="mb-6 text-[22px] font-semibold">What this place offers</h2>
      <div className="grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-2">
        {amenities.map((a) => (
          <div key={a.label} className="flex items-center gap-4 py-1">
            <Icon
              name={a.icon}
              size={24}
              stroke={1.5}
              className={`shrink-0 ${a.unavailable ? "text-muted-2" : "text-fg"}`}
            />
            <span
              className={`text-base ${
                a.unavailable ? "text-muted-2 line-through" : "text-fg"
              }`}
            >
              {a.label}
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={openAmenities}
        className="focus-ring mt-8 rounded-lg border border-fg px-5 py-3 text-base font-semibold transition-colors hover:bg-hover active:scale-[0.98]"
      >
        Show all 50 amenities
      </button>
    </div>
  );
}
