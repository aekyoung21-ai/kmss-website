"use client";

import Link from "next/link";

const navItems = [
  { href: "/about", label: "설립취지" },
  { href: "/about/executives", label: "임원진" },
  { href: "/about/charter", label: "정관" },
  { href: "/about/rules", label: "운영규정" },
];

export default function AboutSubNav({ current }: { current: string }) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex gap-0 overflow-x-auto">
          {navItems.map((item) => {
            const isActive = current === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? "border-kmss-berry text-kmss-berry"
                    : "border-transparent text-gray-500 hover:text-kmss-navy hover:border-gray-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
