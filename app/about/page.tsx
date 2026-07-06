"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Leaf, Coffee, Award, Users, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, scaleIn } from "@/lib/motion";

const stats = [
  { value: "6+", label: "Years in Brooklyn" },
  { value: "12", label: "Origin Farms" },
  { value: "300+", label: "Daily Regulars" },
  { value: "4", label: "Barista Champions" },
];

const sourcingPillars = [
  {
    icon: Heart,
    title: "Direct Trade",
    description:
      "We visit every farm we source from. No middlemen, no mystery. We pay 30–50% above fair-trade minimums because the farmers deserve it.",
  },
  {
    icon: Coffee,
    title: "Small Batch",
    description:
      "We roast in 10kg batches, twice a week. Small batches mean fresher coffee and more control over every roast profile.",
  },
  {
    icon: Leaf,
    title: "Seasonal Rotation",
    description:
      "Our menu rotates with the harvest seasons. When a crop is at its peak, we feature it. When it's done, we move on — no compromises.",
  },
];

const timelineSteps = [
  {
    number: 1,
    title: "Green Bean Arrival",
    description:
      "Beans arrive in burlap sacks, hand-sorted and inspected for defects. We cup every lot before it enters our inventory.",
  },
  {
    number: 2,
    title: "Sample Roasting",
    description:
      "Small sample roasts help us understand each bean's character — its density, moisture, and flavor potential.",
  },
  {
    number: 3,
    title: "Profile Development",
    description:
      "Our head roaster develops a custom profile for each origin, dialing in temperature curves over weeks of testing.",
  },
  {
    number: 4,
    title: "Production Roast",
    description:
      "Roasted in our 10kg Probat drum roaster. We monitor every degree, every second.",
  },
  {
    number: 5,
    title: "Rest & Degas",
    description:
      "Freshly roasted beans rest 24–72 hours to degas CO₂ before they're ground or bagged.",
  },
  {
    number: 6,
    title: "Your Cup",
    description:
      "Brewed to order by our baristas, using water filtered to 150ppm and dialed-in grind settings.",
  },
];

const teamMembers = [
  {
    initials: "MC",
    name: "Maya Chen",
    role: "Co-Founder & Head Roaster",
    bio: "Q-grader certified, obsessed with Ethiopian naturals",
  },
  {
    initials: "DP",
    name: "Daniel Park",
    role: "Co-Founder & Operations",
    bio: "Former architect, now designs the perfect customer experience",
  },
  {
    initials: "SR",
    name: "Sofia Reyes",
    role: "Head Barista",
    bio: "3x NYC Latte Art Champion, trains our whole team",
  },
  {
    initials: "JO",
    name: "James Okafor",
    role: "Sourcing & Partnerships",
    bio: "Travels to origin farms 4x a year, speaks 3 languages",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FAF6F1] overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="bg-[#2C1A0E] py-24 pt-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#C8860A] text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight"
          >
            More Than Coffee
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-[#F5E6D3]/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We started with a cart, a dream, and an obsession with the perfect cup. Six years later, we're still chasing it — together with our community.
          </motion.p>
        </motion.div>
      </section>

      {/* ── FOUNDERS JOURNEY ── */}
      <section className="py-20 bg-[#FAF6F1]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"
                alt="Brewed & Co. coffee shop interior"
                className="w-full h-[500px] object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-[#C8860A] text-xs font-semibold uppercase tracking-widest mb-3">
                The Beginning
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C1A0E] mb-6 leading-snug">
                From a Corner Cart to a Community Hub
              </h2>
              <div className="space-y-4 text-[#2C1A0E]/70 leading-relaxed">
                <p>
                  In 2018, Maya and Daniel set up a small espresso cart outside the Bedford Ave subway station with a hand-grinder, a secondhand machine, and a dream. They had no investors, no business plan — just a shared belief that great coffee could change the texture of someone's morning.
                </p>
                <p>
                  Word spread fast. Within six months, they had a loyal following of commuters, artists, and neighbors who became regulars, then friends. In 2020, they signed the lease on 42 Maple Street and Brewed & Co. was born.
                </p>
                <p>
                  Today, the cart lives in the corner of the shop as a reminder of where it all started. Maya leads sourcing and roasting; Daniel runs operations and community partnerships. Together, they've built something that feels less like a business and more like a living room.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#F5E6D3]/40 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center"
            >
              <p className="font-serif text-4xl font-bold text-[#C8860A] mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-[#2C1A0E]/60 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── SOURCING PHILOSOPHY ── */}
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
              className="text-[#C8860A] text-xs font-semibold uppercase tracking-widest mb-3"
            >
              How We Source
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-[#2C1A0E] mb-4"
            >
              Every Bean Has a Story
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[#2C1A0E]/60 max-w-2xl mx-auto leading-relaxed"
            >
              We believe transparency starts at the source. Every coffee on our menu is direct-trade, meaning we work directly with the farmers who grow it — no brokers, no guesswork. We know their names, their farms, and their families.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {sourcingPillars.map((pillar) => (
              <motion.div
                key={pillar.title}
                variants={scaleIn}
                className="bg-[#FAF6F1] rounded-2xl p-8 border border-[#2C1A0E]/5"
              >
                <div className="w-12 h-12 rounded-full bg-[#C8860A]/10 flex items-center justify-center mb-5">
                  <pillar.icon size={22} className="text-[#C8860A]" />
                </div>
                <h3 className="font-serif text-xl text-[#2C1A0E] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-[#2C1A0E]/60 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── ROASTING PROCESS TIMELINE ── */}
      <section className="bg-[#FAF6F1] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#C8860A] text-xs font-semibold uppercase tracking-widest mb-3"
            >
              The Roasting Process
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-[#2C1A0E]"
            >
              From Green Bean to Your Cup
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Center line — visible on md+ */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#2C1A0E]/10 -translate-x-1/2" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              {timelineSteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={step.number}
                    variants={isLeft ? slideInLeft : slideInRight}
                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Card */}
                    <div
                      className={`flex-1 bg-white rounded-2xl p-6 shadow-sm border border-[#2C1A0E]/5 ${
                        isLeft ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      <h3 className="font-serif text-lg text-[#2C1A0E] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#2C1A0E]/60 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Number circle */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C8860A] flex items-center justify-center z-10 shadow-md">
                      <span className="font-serif text-white font-bold text-lg">
                        {step.number}
                      </span>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION ── */}
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
              className="text-[#C8860A] text-xs font-semibold uppercase tracking-widest mb-3"
            >
              The Team
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-[#2C1A0E]"
            >
              The People Behind Your Cup
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={scaleIn}
                className="text-center"
              >
                <div className="bg-[#F5E6D3] w-32 h-32 rounded-full mx-auto flex items-center justify-center mb-5">
                  <span className="font-serif text-2xl text-[#C8860A] font-bold">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-serif text-xl text-[#2C1A0E] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#C8860A] text-xs font-semibold uppercase tracking-wide mb-2">
                  {member.role}
                </p>
                <p className="text-[#2C1A0E]/60 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="bg-[#2C1A0E] py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-3xl md:text-4xl text-white mb-4"
          >
            Come Meet Us
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[#F5E6D3]/70 mb-8 text-lg"
          >
            We'd love to make you a coffee and show you around. Stop by anytime — the door's always open.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#C8860A] text-white font-semibold hover:bg-[#A86E08] transition-all duration-200 shadow-[0_2px_8px_rgba(200,134,10,0.35)] hover:shadow-[0_4px_16px_rgba(200,134,10,0.45)] hover:-translate-y-0.5"
            >
              Visit the Shop
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-[#F5E6D3]/30 text-[#F5E6D3] font-semibold hover:bg-[#F5E6D3]/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              See Our Menu
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
