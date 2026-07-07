"use client";

import { listing, reviews } from "@/data/listing";
import { Star } from "./icons";
import { ReviewCard } from "./ReviewCard";
import { Modal } from "./Modal";
import { useUI } from "./ui-context";

export default function ReviewsModal() {
  const { overlay, close } = useUI();
  return (
    <Modal
      open={overlay === "reviews"}
      onClose={close}
      header={
        <div className="mb-6 flex items-center gap-2 text-2xl font-semibold">
          <Star size={20} />
          <span>
            {listing.rating} · {listing.reviewsCount} reviews
          </span>
        </div>
      }
    >
      <div className="space-y-8">
        {reviews.map((r) => (
          <ReviewCard key={r.name} review={r} />
        ))}
      </div>
    </Modal>
  );
}
