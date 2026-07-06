"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Clock, Mail, Phone, Send, Check, Camera as Instagram, MessageCircle as Twitter, Globe as Facebook, ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/motion";

const faqs = [
  {
    q: "Do you have WiFi?",
    a: "Yes! We have fast, free WiFi. Password is on the chalkboard at the counter.",
  },
  {
    q: "Is there outdoor seating?",
    a: "We have 8 outdoor seats on our patio, available spring through fall.",
  },
  {
    q: "Do you accept reservations?",
    a: "We're walk-in only for regular service. For private events, please contact us.",
  },
  {
    q: "Are you dog-friendly?",
    a: "Dogs are welcome on our patio! We keep a water bowl out front.",
  },
  {
    q: "Do you offer gift cards?",
    a: "Yes, physical and digital gift cards are available in-store and online.",
  },
  {
    q: "Can I work from the café?",
    a: "Absolutely. We love remote workers. We ask that you purchase something every 2 hours during busy periods.",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessageSent(true);
  }

  function handleSendAnother() {
    setName("");
    setEmail("");
    setSubject("General Inquiry");
    setMessage("");
    setMessageSent(false);
  }

  const inputClass =
    "bg-[#FAF6F1] border border-[#2C1A0E]/10 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#C8860A]/30 text-[#2C1A0E] placeholder-[#2C1A0E]/40 text-sm";

  return (
    <div className="bg-[#FAF6F1] text-[#2C1A0E]">
      {/* ── HERO ── */}
      <section className="bg-[#2C1A0E] py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-5xl font-bold text-white mb-6 leading-tight"
          >
            Come Say Hello
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-[#F5E6D3]/70 text-lg leading-relaxed"
          >
            We&apos;d love to hear from you. Stop by the shop, send us a message,
            or just say hi on social.
          </motion.p>
        </motion.div>
      </section>

      {/* ── CONTACT INFO + FORM ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* LEFT — Contact detail cards */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              {/* Location */}
              <div className="bg-white rounded-2xl p-6 border border-[#2C1A0E]/5 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={20} className="text-[#C8860A] shrink-0" />
                  <h3 className="font-serif text-xl font-semibold text-[#2C1A0E]">
                    Find Us
                  </h3>
                </div>
                <p className="text-[#2C1A0E]/70 text-sm mb-3">
                  42 Maple Street, Brooklyn, NY 11201
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8860A] underline text-sm font-medium hover:text-[#A86E08] transition-colors"
                >
                  Get Directions
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 border border-[#2C1A0E]/5 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-[#C8860A] shrink-0" />
                  <h3 className="font-serif text-xl font-semibold text-[#2C1A0E]">
                    Opening Hours
                  </h3>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between items-center py-1.5 px-3 bg-[#C8860A]/10 rounded-lg">
                    <span className="font-medium text-[#2C1A0E]">
                      Mon–Fri
                      <span className="ml-2 text-xs bg-[#C8860A] text-white px-2 py-0.5 rounded-full">
                        Today
                      </span>
                    </span>
                    <span className="text-[#2C1A0E]/70">7:00 am – 7:00 pm</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 px-3">
                    <span className="text-[#2C1A0E]/80">Saturday</span>
                    <span className="text-[#2C1A0E]/70">8:00 am – 6:00 pm</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 px-3">
                    <span className="text-[#2C1A0E]/80">Sunday</span>
                    <span className="text-[#2C1A0E]/70">8:00 am – 5:00 pm</span>
                  </div>
                </div>
              </div>

              {/* Contact details */}
              <div className="bg-white rounded-2xl p-6 border border-[#2C1A0E]/5 shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-[#2C1A0E] mb-4">
                  Contact Details
                </h3>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:hello@brewedandco.com"
                    className="flex items-center gap-3 text-sm text-[#2C1A0E]/70 hover:text-[#C8860A] transition-colors"
                  >
                    <Mail size={16} className="text-[#C8860A] shrink-0" />
                    hello@brewedandco.com
                  </a>
                  <a
                    href="tel:+17185550192"
                    className="flex items-center gap-3 text-sm text-[#2C1A0E]/70 hover:text-[#C8860A] transition-colors"
                  >
                    <Phone size={16} className="text-[#C8860A] shrink-0" />
                    +1 (718) 555-0192
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="bg-white rounded-2xl p-6 border border-[#2C1A0E]/5 shadow-sm">
                <h3 className="font-serif text-xl font-semibold text-[#2C1A0E] mb-4">
                  Follow Us
                </h3>
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
                      className="w-10 h-10 rounded-full border border-[#2C1A0E]/10 flex items-center justify-center text-[#2C1A0E]/50 hover:text-[#C8860A] hover:border-[#C8860A]/40 transition-all duration-200"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Contact form */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 border border-[#2C1A0E]/5 shadow-sm">
                {messageSent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[#2C1A0E] mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-[#2C1A0E]/60 text-sm mb-8">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={handleSendAnother}
                      className="px-6 py-2.5 rounded-full border border-[#C8860A] text-[#C8860A] text-sm font-semibold hover:bg-[#C8860A] hover:text-white transition-all duration-200"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-2xl font-semibold text-[#2C1A0E] mb-6">
                      Send a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#2C1A0E]/60 uppercase tracking-wider mb-1.5">
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#2C1A0E]/60 uppercase tracking-wider mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#2C1A0E]/60 uppercase tracking-wider mb-1.5">
                          Subject
                        </label>
                        <select
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          className={inputClass}
                        >
                          <option>General Inquiry</option>
                          <option>Catering</option>
                          <option>Wholesale</option>
                          <option>Press</option>
                          <option>Feedback</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#2C1A0E]/60 uppercase tracking-wider mb-1.5">
                          Message
                        </label>
                        <textarea
                          rows={5}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us what's on your mind…"
                          className={inputClass + " resize-none"}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#C8860A] text-white rounded-full py-3 font-semibold flex items-center justify-center gap-2 hover:bg-[#A86E08] transition-all duration-200 shadow-[0_2px_8px_rgba(200,134,10,0.35)] hover:shadow-[0_4px_16px_rgba(200,134,10,0.45)] hover:-translate-y-0.5 mt-2"
                      >
                        <Send size={16} />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="bg-[#F5E6D3]/40 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-serif text-2xl font-semibold text-[#2C1A0E] text-center mb-8"
          >
            How to Find Us
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#2C1A0E]/5 rounded-2xl h-80 flex flex-col items-center justify-center gap-4 border border-[#2C1A0E]/10"
          >
            <MapPin size={40} className="text-[#C8860A]" />
            <p className="text-[#2C1A0E]/50 text-sm">Interactive map coming soon</p>
            <p className="font-medium text-[#2C1A0E]">42 Maple Street, Brooklyn, NY 11201</p>
            <a
              href="https://maps.google.com/?q=42+Maple+Street+Brooklyn+NY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#C8860A] text-white text-sm font-semibold hover:bg-[#A86E08] transition-all duration-200 shadow-[0_2px_8px_rgba(200,134,10,0.35)]"
            >
              <MapPin size={14} />
              Open in Google Maps
            </a>
          </motion.div>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-sm text-[#2C1A0E]/50 mt-5"
          >
            Near Bedford Ave L train station · 5 min walk from Prospect Park
          </motion.p>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6">
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
              FAQ
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl font-bold text-[#2C1A0E]"
            >
              Common Questions
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="border-b border-[#2C1A0E]/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-4 text-left cursor-pointer"
                >
                  <span className="font-medium text-[#2C1A0E] pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-[#C8860A] shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === i ? "auto" : 0,
                    opacity: openIndex === i ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-sm text-[#2C1A0E]/60 leading-relaxed pb-4">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
