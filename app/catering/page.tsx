"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Coffee, Star, Check, Mail, Phone, Calendar, Package } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";

const eventTypes = [
  {
    id: "corporate",
    icon: Coffee,
    title: "Corporate Meetings",
    description:
      "Fuel your team with premium coffee service for meetings, workshops, and all-hands events.",
  },
  {
    id: "weddings",
    icon: Star,
    title: "Weddings & Celebrations",
    description:
      "A bespoke coffee bar for your special day, complete with a barista and custom menu.",
  },
  {
    id: "office",
    icon: Package,
    title: "Office Packages",
    description:
      "Weekly or monthly recurring coffee delivery and setup for your office.",
  },
  {
    id: "film",
    icon: Coffee,
    title: "Film & Production",
    description:
      "On-set coffee service for long shoot days. We keep your crew caffeinated.",
  },
  {
    id: "markets",
    icon: Users,
    title: "Farmers Markets",
    description:
      "Pop-up cart service for outdoor markets and community events.",
  },
  {
    id: "parties",
    icon: Star,
    title: "Private Parties",
    description:
      "Intimate gatherings with a curated coffee and pastry spread.",
  },
];

const essentialFeatures = [
  "1 barista",
  "2-hour service",
  "Drip coffee & tea",
  "Paper cups & supplies",
  "Setup & breakdown",
];

const signatureFeatures = [
  "2 baristas",
  "4-hour service",
  "Full espresso bar",
  "Oat / almond / whole milk",
  "Pastry selection (12 items)",
  "Ceramic cups available",
  "Setup & breakdown",
];

const premiumFeatures = [
  "Dedicated event manager",
  "Full-day service",
  "Custom branded cups",
  "Full menu (drinks + food)",
  "Live roasting demo available",
  "Post-event report",
];

const bulkOptions = [
  { size: "5lb Bag", price: "$65" },
  { size: "10lb Bag", price: "$120" },
  { size: "25lb Bag", price: "$275" },
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  details: string;
}

export default function CateringPage() {
  const [formSent, setFormSent] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    details: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormSent(true);
  }

  function scrollToForm() {
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToPackages() {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="bg-[#FAF6F1] text-[#2C1A0E] overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="bg-[#2C1A0E] py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-4"
          >
            Catering &amp; Events
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-5xl md:text-6xl text-white leading-tight mb-6"
          >
            Bring the Café to Your Event
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-[#F5E6D3]/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          >
            From intimate office meetings to large-scale corporate events, we bring the same craft
            and warmth that defines Brewed &amp; Co. to your venue.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={scrollToForm}
              className="bg-[#C8860A] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#A86E08] transition-colors duration-200 shadow-[0_2px_12px_rgba(200,134,10,0.4)]"
            >
              Get a Quote
            </button>
            <button
              onClick={scrollToPackages}
              className="border border-[#F5E6D3]/30 text-[#F5E6D3] rounded-full px-8 py-3 font-semibold hover:bg-[#F5E6D3]/10 transition-colors duration-200"
            >
              View Packages
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ── EVENT TYPES ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-3"
            >
              What We Cater
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-[#2C1A0E]"
            >
              Every Occasion, Perfectly Brewed
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {eventTypes.map((event) => (
              <motion.div
                key={event.id}
                variants={scaleIn}
                className="bg-[#FAF6F1] rounded-2xl p-8 border border-[#2C1A0E]/5 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C8860A]/10 flex items-center justify-center mb-5">
                  <event.icon size={22} className="text-[#C8860A]" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#2C1A0E] mb-3">
                  {event.title}
                </h3>
                <p className="text-[#2C1A0E]/60 text-sm leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PRICING TIERS ── */}
      <section id="packages" className="bg-[#F5E6D3]/40 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-3"
            >
              Packages
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-[#2C1A0E]"
            >
              Simple, Transparent Pricing
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {/* Essential */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-[#2C1A0E]/5 flex flex-col"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-2">
                Essential
              </p>
              <p className="font-serif text-3xl font-bold text-[#2C1A0E] mb-1">
                Starting at $250
              </p>
              <p className="text-[#2C1A0E]/50 text-sm mb-8">Up to 25 guests</p>
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {essentialFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#2C1A0E]/70">
                    <Check size={16} className="text-[#C8860A] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className="mt-auto w-full border border-[#2C1A0E]/20 text-[#2C1A0E] rounded-full py-3 font-semibold hover:bg-[#2C1A0E] hover:text-white transition-colors duration-200"
              >
                Inquire
              </button>
            </motion.div>

            {/* Signature */}
            <motion.div
              variants={fadeInUp}
              className="bg-[#2C1A0E] text-white rounded-2xl p-8 ring-2 ring-[#C8860A] flex flex-col relative"
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8860A] text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                Most Popular
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-2">
                Signature
              </p>
              <p className="font-serif text-3xl font-bold text-white mb-1">
                Starting at $550
              </p>
              <p className="text-[#F5E6D3]/50 text-sm mb-8">Up to 75 guests</p>
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {signatureFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#F5E6D3]/80">
                    <Check size={16} className="text-[#C8860A] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className="mt-auto w-full bg-[#C8860A] text-white rounded-full py-3 font-semibold hover:bg-[#A86E08] transition-colors duration-200"
              >
                Inquire
              </button>
            </motion.div>

            {/* Premium */}
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 border border-[#2C1A0E]/5 flex flex-col"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-2">
                Premium
              </p>
              <p className="font-serif text-3xl font-bold text-[#2C1A0E] mb-1">
                Custom Pricing
              </p>
              <p className="text-[#2C1A0E]/50 text-sm mb-8">Unlimited guests</p>
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {premiumFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#2C1A0E]/70">
                    <Check size={16} className="text-[#C8860A] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className="mt-auto w-full border border-[#2C1A0E]/20 text-[#2C1A0E] rounded-full py-3 font-semibold hover:bg-[#2C1A0E] hover:text-white transition-colors duration-200"
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── BULK ORDER ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-3">
                Bulk Orders
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C1A0E] mb-5">
                Stock Your Office or Gift Shop
              </h2>
              <p className="text-[#2C1A0E]/60 leading-relaxed mb-8">
                Order whole bean or ground coffee in bulk — 5lb, 10lb, or 25lb bags of any of our
                single-origin offerings. Perfect for offices, gift baskets, or retail.
              </p>
              <ul className="flex flex-col gap-4 mb-10">
                {bulkOptions.map((opt) => (
                  <li
                    key={opt.size}
                    className="flex items-center justify-between bg-[#FAF6F1] rounded-xl px-6 py-4 border border-[#2C1A0E]/5"
                  >
                    <span className="font-medium text-[#2C1A0E]">{opt.size}</span>
                    <span className="font-serif text-lg font-bold text-[#C8860A]">{opt.price}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/order"
                className="inline-flex items-center gap-2 bg-[#C8860A] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#A86E08] transition-colors duration-200 shadow-[0_2px_12px_rgba(200,134,10,0.35)]"
              >
                Order Bulk Coffee
              </Link>
            </motion.div>

            {/* Right */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="bg-[#2C1A0E] rounded-2xl p-12 flex flex-col items-center justify-center gap-6 w-full max-w-sm">
                <div className="w-20 h-20 rounded-full bg-[#C8860A]/20 flex items-center justify-center">
                  <Coffee size={40} className="text-[#C8860A]" />
                </div>
                <div className="text-center">
                  <p className="font-serif text-2xl font-bold text-white mb-2">
                    Whole Bean &amp; Ground
                  </p>
                  <p className="text-[#F5E6D3]/60 text-sm leading-relaxed">
                    Single-origin selections roasted fresh to order
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap justify-center">
                  {["Ethiopia", "Colombia", "Guatemala"].map((origin) => (
                    <span
                      key={origin}
                      className="text-xs bg-[#C8860A]/20 text-[#C8860A] rounded-full px-3 py-1 font-medium"
                    >
                      {origin}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM ── */}
      <section id="inquiry-form" className="bg-[#FAF6F1] py-20">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-3"
            >
              Get in Touch
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-[#2C1A0E]"
            >
              Tell Us About Your Event
            </motion.h2>
          </motion.div>

          {formSent ? (
            <motion.div
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-2xl p-12 text-center border border-[#2C1A0E]/5 shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-[#C8860A]/10 flex items-center justify-center mx-auto mb-6">
                <Check size={28} className="text-[#C8860A]" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2C1A0E] mb-3">
                Message Received!
              </h3>
              <p className="text-[#2C1A0E]/60">
                Thank you! We&apos;ll be in touch within 24 hours.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 md:p-10 border border-[#2C1A0E]/5 shadow-sm flex flex-col gap-5"
            >
              {/* Name */}
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-[#2C1A0E] mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-white border border-[#2C1A0E]/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#C8860A]/30 text-[#2C1A0E] placeholder:text-[#2C1A0E]/30"
                />
              </motion.div>

              {/* Email */}
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-[#2C1A0E] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-white border border-[#2C1A0E]/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#C8860A]/30 text-[#2C1A0E] placeholder:text-[#2C1A0E]/30"
                />
              </motion.div>

              {/* Phone */}
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-[#2C1A0E] mb-1.5">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  className="bg-white border border-[#2C1A0E]/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#C8860A]/30 text-[#2C1A0E] placeholder:text-[#2C1A0E]/30"
                />
              </motion.div>

              {/* Event Type */}
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-[#2C1A0E] mb-1.5">
                  Event Type
                </label>
                <select
                  name="eventType"
                  required
                  value={form.eventType}
                  onChange={handleChange}
                  className="bg-white border border-[#2C1A0E]/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#C8860A]/30 text-[#2C1A0E]"
                >
                  <option value="" disabled>
                    Select event type
                  </option>
                  <option value="corporate">Corporate</option>
                  <option value="wedding">Wedding</option>
                  <option value="office">Office Package</option>
                  <option value="film">Film / Production</option>
                  <option value="market">Farmers Market</option>
                  <option value="party">Private Party</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              {/* Event Date & Guest Count */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-[#2C1A0E] mb-1.5">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={form.eventDate}
                    onChange={handleChange}
                    className="bg-white border border-[#2C1A0E]/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#C8860A]/30 text-[#2C1A0E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#2C1A0E] mb-1.5">
                    Guest Count
                  </label>
                  <input
                    type="number"
                    name="guestCount"
                    min="1"
                    value={form.guestCount}
                    onChange={handleChange}
                    placeholder="e.g. 50"
                    className="bg-white border border-[#2C1A0E]/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#C8860A]/30 text-[#2C1A0E] placeholder:text-[#2C1A0E]/30"
                  />
                </div>
              </motion.div>

              {/* Additional Details */}
              <motion.div variants={fadeInUp}>
                <label className="block text-sm font-medium text-[#2C1A0E] mb-1.5">
                  Additional Details
                </label>
                <textarea
                  name="details"
                  rows={4}
                  value={form.details}
                  onChange={handleChange}
                  placeholder="Tell us more about your event, venue, or any special requests…"
                  className="bg-white border border-[#2C1A0E]/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#C8860A]/30 text-[#2C1A0E] placeholder:text-[#2C1A0E]/30 resize-none"
                />
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeInUp}>
                <button
                  type="submit"
                  className="bg-[#C8860A] text-white rounded-full px-10 py-3 font-semibold w-full hover:bg-[#A86E08] transition-colors duration-200 shadow-[0_2px_12px_rgba(200,134,10,0.35)] hover:shadow-[0_4px_20px_rgba(200,134,10,0.45)]"
                >
                  Send Inquiry
                </button>
              </motion.div>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
