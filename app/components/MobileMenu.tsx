
"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-2xl text-[#071A33] transition hover:border-blue-300 hover:text-[#007AFF]"
      >
        {isOpen ? "×" : "☰"}
      </button>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-b border-slate-200 bg-white p-5 shadow-xl"
        >
          <div className="container flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#007AFF]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-full bg-[#007AFF] px-5 py-3 text-center font-bold text-white transition hover:bg-[#0066D6]"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      )}
    </div>
  );
}