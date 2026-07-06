"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { navLinks, navCTA, brandName } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  }

  function getLinkHref(href: string) {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF6F1]/95 backdrop-blur-md shadow-[0_1px_2px_rgba(44,26,14,0.06),0_8px_24px_-8px_rgba(44,26,14,0.12)] border-b border-[#2C1A0E]/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl font-bold text-[#2C1A0E] tracking-tight hover:text-[#C8860A] transition-colors duration-200"
        >
          {brandName}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getLinkHref(link.href)}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-sm font-medium text-[#2C1A0E]/70 hover:text-[#C8860A] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C8860A] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href={getLinkHref(navCTA.href)}
            onClick={(e) => handleAnchorClick(e, navCTA.href)}
            className="inline-flex items-center px-5 py-2 rounded-full bg-[#C8860A] text-white text-sm font-semibold hover:bg-[#A86E08] transition-all duration-200 shadow-[0_2px_8px_rgba(200,134,10,0.35)] hover:shadow-[0_4px_16px_rgba(200,134,10,0.45)] hover:-translate-y-0.5"
          >
            {navCTA.label}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-[#2C1A0E] hover:bg-[#2C1A0E]/5 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-[#FAF6F1]/98 backdrop-blur-md border-t border-[#2C1A0E]/5"
          >
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={getLinkHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="py-2.5 text-sm font-medium text-[#2C1A0E]/70 hover:text-[#C8860A] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <Link
                  href={getLinkHref(navCTA.href)}
                  onClick={(e) => handleAnchorClick(e, navCTA.href)}
                  className="inline-flex items-center px-5 py-2 rounded-full bg-[#C8860A] text-white text-sm font-semibold hover:bg-[#A86E08] transition-all duration-200"
                >
                  {navCTA.label}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
