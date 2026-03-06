import { Heart } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { label: "Specialties", href: "#specialties" },
  { label: "Reviews", href: "#reviews" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-8 md:py-18 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="#"
              className="mb-6 flex items-center gap-2"
              aria-label="ETHICURE Home"
            >
              <span className="text-xl font-bold tracking-tight text-primary-foreground">
                ETHICURE
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Your trusted partner in finding the right healthcare
              professionals. We connect patients with skilled doctors based on
              expertise, location, and budget.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-base font-bold text-primary-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-base font-bold text-primary-foreground">
              Contact Info
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <li>
                {"Email: "}
                <a
                  href="mailto:info@ethicure.com"
                  className="hover:text-primary-foreground transition-colors break-all"
                >
                  info@ethicure.com
                </a>
              </li>
              <li>
                {"Phone: "}
                <a
                  href="tel:+15551234567"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-primary-foreground/20" />

        {/* Copyright */}
        <p className="text-center text-xs text-primary-foreground/60 sm:text-sm">
          &copy; 2026 ETHICURE. All rights reserved. Your health, our priority.
        </p>
      </div>
    </footer>
  );
}
