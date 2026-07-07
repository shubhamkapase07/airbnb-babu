"use client";

import Image from "next/image";
import { listing, photos } from "@/data/listing";
import { Icon } from "./icons";
import { useUI } from "./ui-context";

function TextButton({
  icon,
  label,
  onClick,
}: {
  icon: "share" | "heart";
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="focus-ring flex items-center gap-2 rounded-md px-2.5 py-2 text-sm font-medium transition-colors hover:bg-hover"
    >
      <Icon name={icon} size={16} stroke={2} />
      <span className="underline underline-offset-2">{label}</span>
    </button>
  );
}

export default function Gallery() {
  const { openTour } = useUI();
  const five = photos.slice(0, 5);

  return (
    <section className="pt-5">
      {/* Title row */}
      <div className="flex items-end justify-between gap-4">
        <h1 className="text-[26px] font-semibold leading-tight tracking-[-0.01em]">
          {listing.title}
        </h1>
        <div className="flex shrink-0 items-center gap-1">
          <TextButton icon="share" label="Share" />
          <TextButton icon="heart" label="Save" />
        </div>
      </div>

      {/* Photo grid */}
      <div className="relative mt-4">
        <div className="grid h-[320px] grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl md:h-[480px] lg:h-[520px]">
          <GalleryImage photo={five[0]} onClick={() => openTour()} className="col-span-2 row-span-2" priority sizes="(max-width:1128px) 50vw, 560px" />
          <GalleryImage photo={five[1]} onClick={() => openTour()} className="col-span-1 row-span-1" sizes="280px" />
          <GalleryImage photo={five[2]} onClick={() => openTour()} className="col-span-1 row-span-1" sizes="280px" />
          <GalleryImage photo={five[3]} onClick={() => openTour()} className="col-span-1 row-span-1" sizes="280px" />
          <GalleryImage photo={five[4]} onClick={() => openTour()} className="col-span-1 row-span-1" sizes="280px" />
        </div>

        <button
          onClick={() => openTour()}
          className="focus-ring absolute bottom-5 right-5 flex items-center gap-2 rounded-lg border border-fg bg-white px-3.5 py-1.5 text-sm font-semibold shadow-sm transition-transform hover:scale-[1.03] active:scale-95"
        >
          <Icon name="grid" size={15} stroke={2} />
          Show all photos
        </button>
      </div>
    </section>
  );
}

function GalleryImage({
  photo,
  onClick,
  className,
  priority,
  sizes,
}: {
  photo: { src: string; alt: string };
  onClick: () => void;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`img-hover group relative block h-full w-full cursor-pointer overflow-hidden bg-hover focus-ring ${className ?? ""}`}
      aria-label={`View photo: ${photo.alt}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </button>
  );
}
