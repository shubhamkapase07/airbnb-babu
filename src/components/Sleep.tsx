"use client";

import Image from "next/image";
import { listing } from "@/data/listing";

export default function Sleep() {
  return (
    <div className="border-b border-line-2 py-10">
      <h2 className="mb-6 text-[22px] font-semibold">Where you&apos;ll sleep</h2>
      <div className="grid grid-cols-2 gap-4 md:max-w-[460px]">
        {listing.sleeping.map((room) => (
          <div key={room.title}>
            <div className="relative aspect-[1.15/1] overflow-hidden rounded-xl border border-line-2">
              <Image
                src={room.img}
                alt={room.title}
                fill
                sizes="230px"
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-[15px] font-semibold">{room.title}</div>
            <div className="text-sm text-muted-2">{room.detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
