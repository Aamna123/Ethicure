import React from "react";

interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="rounded-lg border border-border bg-background p-4 text-sm">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-muted" />
          <div>
            <div className="text-sm font-semibold text-navy">{review.name}</div>
            <div className="text-xs text-muted-foreground">{review.date}</div>
          </div>
        </div>
        <div className="text-sm font-semibold text-crimson">
          {review.rating} ★
        </div>
      </div>

      <p className="text-sm text-muted-foreground">{review.text}</p>
    </article>
  );
}
