"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-deep/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Scolaris" className="h-9" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-ink-mute">
          <a href="#problem"   className="hover:text-white transition">Problème</a>
          <a href="#solution"  className="hover:text-white transition">Solution</a>
          <a href="#modules"   className="hover:text-white transition">Modules</a>
          <a href="#pilots"    className="hover:text-white transition">Écoles pilotes</a>
          <a href="#contact"   className="hover:text-white transition">Contact</a>
        </div>

        <a
          href="#contact"
          className="px-5 py-2 rounded-lg bg-brand hover:bg-brand-light text-white text-sm font-semibold transition shadow-lg shadow-brand/20"
        >
          Demander une démo
        </a>
      </div>
    </nav>
  );
}
