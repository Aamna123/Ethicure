import React from "react";

interface Props {
  items: string[];
}

export default function QualificationsList({ items }: Props) {
  return (
    <ul className="space-y-2 text-sm text-muted-foreground">
      {items.map((q) => (
        <li key={q} className="flex items-start gap-2">
          <span className="text-crimson">•</span>
          <span>{q}</span>
        </li>
      ))}
    </ul>
  );
}
