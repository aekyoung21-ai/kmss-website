"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about", label: "협회소개" },
  { href: "/news", label: "소식" },
  { href: "/archive", label: "아카이브" },
  { href: "/join", label: "참여하기" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: "4.5rem" }}>
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/kmss-logo-header.png"
            alt="한국엄마학자협회 KMSS"
            width={1123}
            height={583}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 text-base font-semibold transition-colors rounded-lg ${
                  active
                    ? "text-kmss-berry"
                    : "text-kmss-navy hover:text-kmss-berry hover:bg-kmss-berry-light"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-kmss-berry rounded-full" />
                )}
              </Link>
            );
          })}
          <Link
            href="/en"
            className={`ml-2 text-base font-semibold border-2 rounded-full px-5 py-1.5 transition-colors ${
              pathname.startsWith("/en")
                ? "bg-kmss-navy text-white border-kmss-navy"
                : "border-kmss-navy text-kmss-navy hover:bg-kmss-navy hover:text-white"
            }`}
          >
            EN
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-kmss-navy hover:text-kmss-berry"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Berry accent line */}
      <div className="h-1 bg-kmss-berry" />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-6 py-4 text-base font-semibold border-l-4 transition-colors ${
                  active
                    ? "border-kmss-berry text-kmss-berry bg-kmss-berry-light"
                    : "border-transparent text-kmss-navy hover:border-kmss-berry hover:text-kmss-berry"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/en"
            className="block px-6 py-4 text-base font-semibold text-kmss-navy border-l-4 border-transparent hover:border-kmss-navy"
            onClick={() => setMenuOpen(false)}
          >
            EN
          </Link>
        </div>
      )}
    </header>
  );
}
