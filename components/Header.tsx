"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/inventory", label: "Inventory" },
  { href: "/about", label: "About us" },
  { href: "/#faq", label: "FAQs" },
  { href: "/contact", label: "Contact us" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuVisibility = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          Kavaro <span className="text-emerald-600">Motors</span>
        </Link>

        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-white/8 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block w-7 h-0.5 bg-primary transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-primary transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-primary transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        <div
          className={`fixed top-18 left-0 right-0 z-40 md:hidden bg-background transition-all duration-300 ease-in-out overflow-hidden shadow-xl ${
            menuOpen
              ? "max-h-150 opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-start gap-1 px-6 py-4">
            <ul className="flex flex-col gap-5 mt-2">
              {links.map((link) => (
                <li key={link.href} className="text-primary">
                  <Link href={link.href} onClick={handleMenuVisibility}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
