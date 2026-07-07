"use client";

import { listing } from "@/data/listing";
import { Icon } from "./icons";

export default function ThingsToKnow() {
  const cols = [
    { icon: "cal-x", title: "Cancellation policy", body: [listing.things.cancellation] },
    { icon: "key", title: "House rules", body: listing.things.houseRules },
    { icon: "shield", title: "Safety & property", body: listing.things.safety },
  ];
  return (
    <section className="py-12">
      <h2 className="mb-8 text-[22px] font-semibold">Things to know</h2>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {cols.map((c) => (
          <div key={c.title}>
            <Icon name={c.icon} size={24} stroke={1.5} className="mb-4" />
            <h3 className="mb-3 text-base font-semibold">{c.title}</h3>
            <div className="space-y-2">
              {c.body.map((line, i) => (
                <p key={i} className="text-sm leading-relaxed text-fg">
                  {line}
                </p>
              ))}
            </div>
            <button className="mt-3 text-sm font-semibold underline underline-offset-2">
              Show more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
