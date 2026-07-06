"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Gift, Coffee, Crown, Zap, Check, ArrowRight, Heart, Award } from 'lucide-react';
import {
  fadeInUp,
  staggerContainer,
  scaleIn,
  slideInLeft,
  slideInRight,
} from "@/lib/motion";

// ─── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    icon: Zap,
    title: "Sign Up Free",
    description:
      "Create your account in under 60 seconds. No credit card required. Just your name and email.",
  },
  {
    number: "02",
    icon: Coffee,
    title: "Earn Points",
    description:
      "Get 1 point for every $1 spent. Bonus points on your birthday, for referrals, and on featured items.",
  },
  {
    number: "03",
    icon: Gift,
    title: "Redeem Rewards",
    description:
      "Redeem points for free drinks, pastries, merch, and exclusive experiences.",
  },
];

const tiers = [
  {
    id: "bean",
    name: "Bean",
    range: "0 – 199 points",
    icon: Coffee,
    bg: "bg-white",
    border: "border border-[#2C1A0E]/5",
    nameColor: "text-[#2C1A0E]",
    rangeColor: "text-[#2C1A0E]/50",
    iconColor: "text-[#C8860A]",
    checkColor: "text-[#C8860A]",
    descColor: "text-[#2C1A0E]/70",
    perks: [
      "1 point per $1 spent",
      "Birthday drink reward",
      "Member-only offers",
      "Early access to seasonal menu",
    ],
  },
  {
    id: "roast",
    name: "Roast",
    range: "200 – 499 points",
    icon: Star,
    bg: "bg-[#2C1A0E]",
    border: "ring-2 ring-[#C8860A]",
    nameColor: "text-white",
    rangeColor: "text-[#F5E6D3]/50",
    iconColor: "text-[#C8860A]",
    checkColor: "text-[#C8860A]",
    descColor: "text-[#F5E6D3]/70",
    perks: [
      "All Bean perks",
      "1.25× points multiplier",
      "Free size upgrade once/month",
      "Exclusive Roast member events",
      "Priority catering inquiry",
    ],
  },
  {
    id: "master",
    name: "Master",
    range: "500+ points",
    icon: Crown,
    bg: "bg-[#C8860A]",
    border: "",
    nameColor: "text-white",
    rangeColor: "text-white/60",
    iconColor: "text-white",
    checkColor: "text-white",
    descColor: "text-white/80",
    perks: [
      "All Roast perks",
      "1.5× points multiplier",
      "Free drink every month",
      "Dedicated barista consultation",
      "Name on our 'Masters Wall'",
      "Annual farm trip entry",
    ],
  },
];

const perks = [
  {
    id: "birthday",
    icon: Gift,
    title: "Free Birthday Drink",
    description:
      "A free drink of your choice on your birthday, no minimum purchase.",
  },
  {
    id: "bonus",
    icon: Zap,
    title: "Bonus Point Days",
    description:
      "Double or triple points on select days announced via the app.",
  },
  {
    id: "referral",
    icon: Heart,
    title: "Referral Rewards",
    description:
      "Earn 50 bonus points for every friend you refer who makes their first purchase.",
  },
  {
    id: "merch",
    icon: Award,
    title: "Exclusive Merch",
    description:
      "Redeem points for branded tote bags, mugs, and apparel not sold in-store.",
  },
  {
    id: "early",
    icon: Star,
    title: "Early Menu Access",
    description:
      "Be the first to try seasonal specials before they go public.",
  },
  {
    id: "farm",
    icon: Coffee,
    title: "Farm Trip Raffle",
    description:
      "Master members are entered into our annual raffle for a trip to one of our origin farms.",
  },
];

// ─── Calculator helpers ───────────────────────────────────────────────────────

function getMultiplier(monthlyPoints: number): number {
  if (monthlyPoints >= 500) return 1.5;
  if (monthlyPoints >= 200) return 1.25;
  return 1;
}

function getTierName(pts: number): string {
  if (pts >= 500) return "Master";
  if (pts >= 200) return "Roast";
  return "Bean";
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function LoyaltyPage() {
  // Calculator state
  const [weeklyVisits, setWeeklyVisits] = useState(3);
  const [avgSpend, setAvgSpend] = useState(7);

  // Sign-up form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  // Calculator logic
  const baseMonthly = weeklyVisits * 4 * avgSpend;
  const multiplier = getMultiplier(baseMonthly);
  const monthlyPoints = Math.round(baseMonthly * multiplier);
  const currentTier = getTierName(monthlyPoints);
  const nextRewardAt =
    monthlyPoints < 200 ? 200 : monthlyPoints < 500 ? 500 : null;
  const monthsToNextTier =
    nextRewardAt !== null
      ? Math.ceil((nextRewardAt - monthlyPoints) / monthlyPoints)
      : 0;

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    if (name && email) setSignedUp(true);
  }

  return (
    <div className="bg-[#FAF6F1] overflow-x-hidden">
      {/* ── 1. HERO ── */}
      <section className="bg-[#2C1A0E] py-24">
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
            Brewed Rewards
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Every Sip Earns
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-[#F5E6D3]/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Join Brewed Rewards and earn points on every purchase. Redeem for
            free drinks, exclusive merch, and early access to seasonal specials.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a
              href="#signup"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#signup")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#C8860A] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#A86E08] transition-colors duration-200 shadow-[0_2px_12px_rgba(200,134,10,0.4)]"
            >
              Join Free
            </a>
            <button className="border border-[#F5E6D3]/30 text-[#F5E6D3] rounded-full px-8 py-3 font-semibold hover:border-[#F5E6D3]/60 hover:text-white transition-colors duration-200">
              Sign In
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {[
              { value: "12,000+", label: "Members" },
              { value: "1M+", label: "Points Earned" },
              { value: "4.9★", label: "Member Rating" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={scaleIn} className="text-center">
                <p className="font-serif text-2xl md:text-3xl text-white font-bold">
                  {stat.value}
                </p>
                <p className="text-[#F5E6D3]/50 text-xs mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. HOW IT WORKS ── */}
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
              className="text-[#C8860A] text-sm font-semibold uppercase tracking-widest mb-3"
            >
              How It Works
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-[#2C1A0E]"
            >
              Simple as Your Morning Coffee
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={scaleIn}
                  className="bg-[#FAF6F1] rounded-2xl p-8 border border-[#2C1A0E]/5 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[#C8860A] text-white font-bold text-lg flex items-center justify-center mx-auto mb-5">
                    {step.number}
                  </div>
                  <div className="flex justify-center mb-4">
                    <Icon size={28} className="text-[#C8860A]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#2C1A0E] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#2C1A0E]/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 3. POINT TIERS ── */}
      <section className="bg-[#F5E6D3]/40 py-20">
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
              className="text-[#C8860A] text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Member Tiers
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-[#2C1A0E]"
            >
              The More You Sip, the More You Get
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.id}
                  variants={scaleIn}
                  className={`rounded-2xl p-8 ${tier.bg} ${tier.border}`}
                >
                  <Icon size={32} className={`${tier.iconColor} mb-4`} />
                  <h3 className={`font-serif text-2xl font-bold mb-1 ${tier.nameColor}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-sm mb-6 ${tier.rangeColor}`}>
                    {tier.range}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {tier.perks.map((perk) => (
                      <li key={perk} className="flex items-start gap-3">
                        <Check
                          size={16}
                          className={`mt-0.5 shrink-0 ${tier.checkColor}`}
                        />
                        <span className={`text-sm ${tier.descColor}`}>
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 4. PERKS SHOWCASE ── */}
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
              className="text-[#C8860A] text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Member Perks
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-[#2C1A0E]"
            >
              What You Unlock
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.id}
                  variants={fadeInUp}
                  className="bg-[#FAF6F1] rounded-2xl p-6 border border-[#2C1A0E]/5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#C8860A]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#C8860A]" />
                  </div>
                  <h3 className="font-serif text-lg text-[#2C1A0E] mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-[#2C1A0E]/60 text-sm leading-relaxed">
                    {perk.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── 5. POINTS CALCULATOR ── */}
      <section className="bg-[#F5E6D3]/40 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#C8860A] text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Points Calculator
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-2xl md:text-3xl text-[#2C1A0E] mb-10"
            >
              How Fast Will You Earn?
            </motion.h2>

            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-8 border border-[#2C1A0E]/5 shadow-sm text-left"
            >
              {/* Weekly visits slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-[#2C1A0E]">
                    Weekly Visits
                  </label>
                  <span className="text-[#C8860A] font-bold text-lg">
                    {weeklyVisits}×
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={7}
                  value={weeklyVisits}
                  onChange={(e) => setWeeklyVisits(Number(e.target.value))}
                  className="w-full accent-[#C8860A] h-2 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[#2C1A0E]/40 mt-1">
                  <span>1×</span>
                  <span>7×</span>
                </div>
              </div>

              {/* Avg spend slider */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-[#2C1A0E]">
                    Average Spend per Visit
                  </label>
                  <span className="text-[#C8860A] font-bold text-lg">
                    ${avgSpend}
                  </span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={20}
                  value={avgSpend}
                  onChange={(e) => setAvgSpend(Number(e.target.value))}
                  className="w-full accent-[#C8860A] h-2 rounded-full cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[#2C1A0E]/40 mt-1">
                  <span>$3</span>
                  <span>$20</span>
                </div>
              </div>

              {/* Results */}
              <div className="bg-[#FAF6F1] rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-serif text-3xl font-bold text-[#C8860A]">
                    {monthlyPoints}
                  </p>
                  <p className="text-xs text-[#2C1A0E]/50 mt-1">
                    Est. Monthly Points
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-[#2C1A0E]">
                    {currentTier}
                  </p>
                  <p className="text-xs text-[#2C1A0E]/50 mt-1">Current Tier</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-bold text-[#2C1A0E]">
                    {nextRewardAt !== null
                      ? monthsToNextTier <= 1
                        ? "&lt;1 mo"
                        : `${monthsToNextTier} mo`
                      : "Max!"}
                  </p>
                  <p className="text-xs text-[#2C1A0E]/50 mt-1">
                    {nextRewardAt !== null
                      ? `To ${getTierName(nextRewardAt)} tier`
                      : "Top tier reached"}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#2C1A0E]/40 text-center mt-4">
                Estimates based on standard 1 pt/$1 rate. Multipliers apply once
                tier is reached.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── 6. SIGN-UP ── */}
      <section id="signup" className="bg-[#2C1A0E] py-20">
        <div className="max-w-lg mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {signedUp ? (
              <motion.div
                variants={scaleIn}
                className="flex flex-col items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#C8860A]/20 flex items-center justify-center">
                  <Star size={32} className="text-[#C8860A]" />
                </div>
                <h2 className="font-serif text-2xl text-white">
                  Welcome to Brewed Rewards!
                </h2>
                <p className="text-[#F5E6D3]/70 leading-relaxed">
                  Check your email for your welcome bonus — 50 free points to
                  get you started.
                </p>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 bg-[#C8860A] text-white rounded-full px-8 py-3 font-semibold hover:bg-[#A86E08] transition-colors duration-200"
                >
                  Explore the Menu
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ) : (
              <>
                <motion.p
                  variants={fadeInUp}
                  className="text-[#C8860A] text-sm font-semibold uppercase tracking-widest mb-3"
                >
                  Join Today
                </motion.p>
                <motion.h2
                  variants={fadeInUp}
                  className="font-serif text-3xl md:text-4xl text-white mb-4"
                >
                  Start Earning Today
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-[#F5E6D3]/70 mb-10 leading-relaxed"
                >
                  Join 12,000+ members who never pay full price for their
                  morning coffee.
                </motion.p>

                <motion.form
                  variants={fadeInUp}
                  onSubmit={handleSignUp}
                  className="flex flex-col gap-4"
                >
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full bg-white/10 border border-[#F5E6D3]/20 rounded-xl px-4 py-3 text-white placeholder-[#F5E6D3]/40 focus:outline-none focus:border-[#C8860A] transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/10 border border-[#F5E6D3]/20 rounded-xl px-4 py-3 text-white placeholder-[#F5E6D3]/40 focus:outline-none focus:border-[#C8860A] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white/10 border border-[#F5E6D3]/20 rounded-xl px-4 py-3 text-white placeholder-[#F5E6D3]/40 focus:outline-none focus:border-[#C8860A] transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#C8860A] text-white rounded-full px-10 py-3 font-semibold hover:bg-[#A86E08] transition-colors duration-200 shadow-[0_2px_12px_rgba(200,134,10,0.4)] mt-2"
                  >
                    Create Free Account
                  </button>
                  <p className="text-[#F5E6D3]/40 text-xs mt-1">
                    By signing up you agree to our Terms of Service and Privacy
                    Policy. No spam, ever.
                  </p>
                </motion.form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
