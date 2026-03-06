import React from "react";

interface Props {
  tags: string[];
}

export default function ExpertiseTags({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-full border border-border px-3 py-1 text-xs text-navy"
        >
          {t}
        </span>
      ))}
    </div>
  );
}
