"use client";

import React from "react";

interface Props {
  phone: string;
  whatsapp?: string;
}

export default function ContactButtons({ phone, whatsapp }: Props) {
  const num = whatsapp ? whatsapp.replace(/[^0-9]/g, "") : null;

  const handleWhatsAppCall = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!num) return;

    const whatsappCallUrl = `whatsapp://call?number=${num}`;
    const waMeUrl = `https://wa.me/${num}`;

    // Try opening the native WhatsApp call first (works on mobile).
    // Fallback to web chat if the scheme isn't handled.
    try {
      window.open(whatsappCallUrl, "_self");
    } catch (err) {
      window.open(waMeUrl, "_blank");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <a
        href={`tel:${phone}`}
        className="rounded-lg bg-crimson px-5 py-2.5 text-sm font-semibold text-accent-foreground text-center hover:bg-crimson-dark transition-colors"
      >
        Phone Call
      </a>

      <a
        href={num ? `https://wa.me/${num}` : "#"}
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border border-navy px-5 py-2.5 text-sm font-medium text-navy text-center hover:bg-muted transition-colors"
      >
        WhatsApp Message
      </a>

      <button
        onClick={handleWhatsAppCall}
        className="rounded-lg border border-navy px-5 py-2.5 text-sm font-medium text-navy text-center hover:bg-muted transition-colors"
      >
        WhatsApp Call
      </button>
    </div>
  );
}
