"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { listing } from "@/data/listing";
import { Icon, Star } from "./icons";

const COHOST_AVATARS: Record<string, string> = {
  Sharath: "/images/cohost-sharath.jpg",
  "Aman Dev Pahwa": "/images/cohost-aman.jpg",
  "Maria Karen Priyanka": "/images/cohost-maria.jpg",
  Simran: "/images/cohost-simran.jpg",
  Pallavi: "/images/cohost-pallavi.jpg",
  Sanyukta: "/images/cohost-sanyukta.jpg",
};
const COHOST_BG: Record<string, string> = {
  Shruti: "#f7d9e3",
  Amisha: "#d9e6f7",
};

export default function MeetHost() {
  const h = listing.host;
  return (
    <section className="border-b border-line-2 py-12">
      <h2 className="mb-8 text-[22px] font-semibold">Meet your host</h2>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr]">
        {/* Host card */}
        <div>
          <div className="flex items-center gap-6 rounded-3xl bg-white px-8 py-8 shadow-[0_6px_20px_rgba(0,0,0,0.12)] ring-1 ring-line-2">
            <div className="flex flex-1 flex-col items-center text-center">
              <div className="relative">
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image src={h.avatar} alt={h.name} fill sizes="96px" className="object-cover" />
                </div>
                {h.verified && (
                  <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-rausch text-white ring-2 ring-white">
                    <Icon name="accuracy" size={14} stroke={2.2} />
                  </span>
                )}
              </div>
              <div className="mt-3 text-2xl font-semibold leading-tight">{h.name}</div>
              <div className="text-sm font-medium">Host</div>
            </div>
            <div className="w-px self-stretch bg-line-2" />
            <div className="flex flex-col gap-4 pr-2">
              <Stat value={h.reviews.toLocaleString("en-IN")} label="Reviews" />
              <div className="h-px bg-line-2" />
              <Stat value={<span className="inline-flex items-center gap-1">{h.rating}<Star size={13} /></span>} label="Rating" />
              <div className="h-px bg-line-2" />
              <Stat value={h.yearsHosting} label="Years hosting" />
            </div>
          </div>
          <div className="mt-6 space-y-3 px-1">
            <div className="flex items-center gap-3 text-base">
              <Icon name="value" size={22} stroke={1.6} />
              {h.bornIn}
            </div>
            <div className="flex items-center gap-3 text-base">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M2 8l10-4 10 4-10 4L2 8z" strokeLinejoin="round" />
                <path d="M6 10v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4M22 8v5" strokeLinecap="round" />
              </svg>
              {h.school}
            </div>
          </div>
        </div>

        {/* Co-hosts + details */}
        <div>
          <h3 className="text-lg font-semibold">Co-Hosts</h3>
          <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
            {listing.coHosts.map((name) => (
              <div key={name} className="flex items-center gap-3">
                {COHOST_AVATARS[name] ? (
                  <div className="relative h-9 w-9 overflow-hidden rounded-full">
                    <Image src={COHOST_AVATARS[name]} alt={name} fill sizes="36px" className="object-cover" />
                  </div>
                ) : (
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold"
                    style={{ background: COHOST_BG[name] ?? "#eee" }}
                  >
                    {name[0]}
                  </div>
                )}
                <span className="text-[15px]">{name}</span>
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-lg font-semibold">Host details</h3>
          <p className="mt-3 text-base">Response rate: {h.responseRate}</p>
          <p className="text-base">{h.responseTime}</p>
          <button className="focus-ring mt-5 rounded-lg bg-hover px-6 py-3 text-base font-semibold transition-colors hover:bg-line-2">
            Message host
          </button>
          <div className="mt-8 flex items-start gap-3 text-sm text-muted-2">
            <Icon name="shield" size={22} stroke={1.4} className="shrink-0" />
            <p>To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: ReactNode; label: string }) {
  return (
    <div>
      <div className="text-xl font-semibold leading-none">{value}</div>
      <div className="mt-1 text-[11px] font-medium">{label}</div>
    </div>
  );
}
