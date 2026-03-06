"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Heart } from "lucide-react";
import logo from "../assets/logoEthicure.png";
const navLinks = [
  { label: "Home", href: "#" },
  { label: "Specialties", href: "#specialties" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-6 py-2 md:py-2 md:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="#"
          className="flex items-center "
          aria-label="ETHICURE Home"
        >
          <span className="flex px-2 items-center justify-center rounded-lg ">
            <Image
              src={logo}
              alt="ETHICURE Logo"
              className="h-15 w-15"
              width={24}
              height={24}
            />
          </span>
          <span className="text-xl md:text-xl font-extrabold tracking-tight text-navy leading-none">
            ETHICURE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-navy hover:text-crimson transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            className="rounded-lg bg-crimson px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-crimson-dark transition-colors"
          >
            My Portal
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-navy"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav
          className="flex flex-col gap-2 border-t border-border bg-background px-6 pb-6 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-muted transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={() => setMobileOpen(false)}
            className="mt-2 w-full rounded-lg bg-crimson px-5 py-2.5 text-center text-sm font-semibold text-accent-foreground hover:bg-crimson-dark transition-colors"
          >
            My Portal
          </Link>
        </nav>
      )}
    </header>
  );
}
