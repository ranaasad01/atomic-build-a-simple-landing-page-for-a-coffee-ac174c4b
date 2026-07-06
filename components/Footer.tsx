"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Camera as Instagram, MessageCircle as Twitter, Globe as Facebook } from 'lucide-react';
import { brandName, brandTagline, navLinks } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  const pathname = usePathname();

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (pathname === "/" && href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  function getLinkHref(href: string) {
    if (href.startsWith("#")) {
      return pathname === "/" ? href : "/" + href;
    }
    return href;
  }

  return (
    <footer className="bg-[#2C1A0E] text-[#F5E6D3]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {/* Brand */}
        <motion.div variants={fadeInUp} className="md:col-span-1">
          <p className="font-serif text-2xl font-bold text-white mb-3">
            {brandName}
          </p>
          <p className="text-[#F5E6D3]/60 text-sm leading-relaxed mb-6">
            {brandTagline}
          </p>
          <div className="flex gap-3">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Facebook, label: "Facebook" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-[#F5E6D3]/20 flex items-center justify-center text-[#F5E6D3]/60 hover:text-[#C8860A] hover:border-[#C8860A]/50 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Nav links */}
        <motion.div variants={fadeInUp}>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-5">
            {t("footer.navigate")}
          </p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={getLinkHref(link.href)}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="text-sm text-[#F5E6D3]/60 hover:text-[#F5E6D3] transition-colors duration-200"
                >
                  {t(`nav.${link.label.toLowerCase()}`)}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeInUp}>
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-5">
            {t("footer.findUs")}
          </p>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3 text-sm text-[#F5E6D3]/60">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#C8860A]" />
              <span>42 Maple Street, Brooklyn, NY 11201</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-[#F5E6D3]/60">
              <Clock size={15} className="shrink-0 text-[#C8860A]" />
              <span>Mon–Fri 7am–7pm, Sat–Sun 8am–6pm</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-[#F5E6D3]/60">
              <Mail size={15} className="shrink-0 text-[#C8860A]" />
              <a
                href="mailto:hello@brewedandco.com"
                className="hover:text-[#F5E6D3] transition-colors duration-200"
              >
                hello@brewedandco.com
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="border-t border-[#F5E6D3]/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#F5E6D3]/40">
            {t("footer.copyright", { year: "2024", brand: brandName })}
          </p>
          <p className="text-xs text-[#F5E6D3]/30">{t("footer.madeWith")}</p>
        </div>
      </div>
    </footer>
  );
}