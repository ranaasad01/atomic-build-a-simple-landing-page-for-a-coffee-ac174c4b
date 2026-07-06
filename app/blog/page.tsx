"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, Tag, ArrowRight, BookOpen, Coffee, Leaf } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: "Brewing Guides" | "Origin Stories" | "Barista Tips" | "Coffee Science" | "Community";
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Perfect Pour Over: A Step-by-Step Guide",
    excerpt:
      "Master the art of the pour over with our head barista's definitive guide. From grind size to water temperature, every variable explained.",
    category: "Brewing Guides",
    author: "Sofia Reyes",
    date: "June 12, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
    featured: true,
  },
  {
    id: 2,
    title: "Ethiopia Yirgacheffe: The Birthplace of Coffee",
    excerpt:
      "We traveled to the Gedeo Zone to meet the farmers behind our most beloved single-origin. Here's what we found.",
    category: "Origin Stories",
    author: "James Okafor",
    date: "May 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800",
    featured: false,
  },
  {
    id: 3,
    title: "Dialing In Your Espresso at Home",
    excerpt:
      "Ratio, pressure, temperature — the three variables that separate a great shot from a mediocre one. Our barista champion breaks it down.",
    category: "Barista Tips",
    author: "Sofia Reyes",
    date: "May 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800",
    featured: false,
  },
  {
    id: 4,
    title: "Why We Switched to Oat Milk (And Never Looked Back)",
    excerpt:
      "The chemistry of plant-based milks and why oat milk's fat composition makes it the best steaming option for latte art.",
    category: "Coffee Science",
    author: "Maya Chen",
    date: "May 3, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    featured: false,
  },
  {
    id: 5,
    title: "Colombia Huila: A Farmer's Perspective",
    excerpt:
      "Don Carlos has been growing coffee on his 3-hectare farm for 40 years. We spent a week with him during harvest season.",
    category: "Origin Stories",
    author: "James Okafor",
    date: "April 20, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800",
    featured: false,
  },
  {
    id: 6,
    title: "Cold Brew vs. Iced Coffee: The Definitive Answer",
    excerpt:
      "They look the same in the glass, but the science behind them couldn't be more different. We explain extraction, acidity, and why it matters.",
    category: "Coffee Science",
    author: "Daniel Park",
    date: "April 8, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800",
    featured: false,
  },
  {
    id: 7,
    title: "How to Taste Coffee Like a Q-Grader",
    excerpt:
      "The Specialty Coffee Association's cupping protocol, simplified for home brewers. Train your palate in 30 days.",
    category: "Barista Tips",
    author: "Maya Chen",
    date: "March 25, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800",
    featured: false,
  },
  {
    id: 8,
    title: "Brewed & Co. Turns 5: A Community Retrospective",
    excerpt:
      "Five years of regulars, late nights, and really good coffee. We asked our community what Brewed & Co. means to them.",
    category: "Community",
    author: "Daniel Park",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800",
    featured: false,
  },
  {
    id: 9,
    title: "The Maillard Reaction: Why Roasting is a Science",
    excerpt:
      "The chemistry that transforms a green bean into a complex, aromatic roasted coffee. A deep dive for the curious.",
    category: "Coffee Science",
    author: "Maya Chen",
    date: "February 22, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800",
    featured: false,
  },
];

const allCategories = [
  "All",
  "Brewing Guides",
  "Origin Stories",
  "Barista Tips",
  "Coffee Science",
  "Community",
] as const;

type CategoryFilter = (typeof allCategories)[number];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const featuredPost = blogPosts.find((p) => p.featured)!;

  const filteredPosts = blogPosts.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  }

  return (
    <div className="bg-[#FAF6F1] min-h-screen">
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
            className="text-[#C8860A] text-sm font-semibold uppercase tracking-widest mb-4"
          >
            The Brewed &amp; Co. Blog
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight"
          >
            Stories from the Cup
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-[#F5E6D3]/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Brewing guides, origin stories, barista tips, and the culture of
            coffee — written by the people who live it.
          </motion.p>
        </motion.div>
      </section>

      {/* ── FEATURED POST ── */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-10 items-center"
          >
            {/* Image */}
            <div className="md:w-1/2 w-full shrink-0">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-80 object-cover rounded-2xl"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800";
                }}
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block bg-[#C8860A] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="text-xs text-[#C8860A] uppercase tracking-wide font-semibold">
                  {featuredPost.category}
                </span>
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#2C1A0E] mb-4 leading-snug">
                {featuredPost.title}
              </h2>
              <p className="text-[#2C1A0E]/60 text-base leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-[#2C1A0E]/50 mb-8">
                <span className="font-medium text-[#2C1A0E]/70">
                  {featuredPost.author}
                </span>
                <span>·</span>
                <span>{featuredPost.date}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock size={13} />
                  {featuredPost.readTime}
                </span>
              </div>
              <Link
                href={`/blog/${featuredPost.id}`}
                className="inline-flex items-center gap-2 bg-[#C8860A] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#A86E08] transition-all duration-200 shadow-[0_2px_8px_rgba(200,134,10,0.35)] hover:shadow-[0_4px_16px_rgba(200,134,10,0.45)] hover:-translate-y-0.5"
              >
                Read Article
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="bg-[#FAF6F1] py-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto px-6"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#C8860A] text-white shadow-[0_2px_8px_rgba(200,134,10,0.3)]"
                    : "bg-white border border-[#2C1A0E]/10 text-[#2C1A0E]/60 hover:text-[#C8860A] hover:border-[#C8860A]/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── ARTICLES GRID ── */}
      <section className="bg-[#FAF6F1] pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-center text-[#2C1A0E]/50 py-16 text-lg"
            >
              No articles in this category yet. Check back soon!
            </motion.p>
          ) : (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={scaleIn}
                  className="bg-white rounded-2xl overflow-hidden border border-[#2C1A0E]/5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-48 w-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800";
                      }}
                    />
                    {post.featured && (
                      <span className="absolute top-3 left-3 bg-[#C8860A] text-white text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs text-[#C8860A] uppercase tracking-wide font-semibold mb-2">
                      {post.category}
                    </p>
                    <h3 className="font-serif text-xl font-bold text-[#2C1A0E] mb-2 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#2C1A0E]/60 line-clamp-3 mb-4 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#2C1A0E]/5">
                      <div className="flex items-center gap-2 text-xs text-[#2C1A0E]/50">
                        <span className="font-medium text-[#2C1A0E]/70">
                          {post.author}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock size={11} />
                          {post.readTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#C8860A] hover:text-[#A86E08] transition-colors duration-200"
                      >
                        Read More
                        <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="bg-[#F5E6D3]/40 py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto px-6 text-center"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#C8860A]/10 flex items-center justify-center">
              <BookOpen size={32} className="text-[#C8860A]" />
            </div>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="font-serif text-3xl font-bold text-[#2C1A0E] mb-3"
          >
            Get Coffee Stories in Your Inbox
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[#2C1A0E]/60 mb-8 leading-relaxed"
          >
            New articles every week. No spam, just good coffee content.
          </motion.p>

          {subscribed ? (
            <motion.div
              variants={scaleIn}
              className="inline-flex items-center gap-2 bg-[#C8860A]/10 text-[#C8860A] font-semibold px-6 py-4 rounded-2xl"
            >
              <Coffee size={18} />
              You&apos;re in! Check your inbox.
            </motion.div>
          ) : (
            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="bg-white border border-[#2C1A0E]/10 rounded-full px-5 py-3 flex-1 text-sm text-[#2C1A0E] placeholder-[#2C1A0E]/30 focus:outline-none focus:border-[#C8860A]/50 focus:ring-2 focus:ring-[#C8860A]/10 transition-all duration-200"
              />
              <button
                type="submit"
                className="bg-[#C8860A] text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#A86E08] transition-all duration-200 shadow-[0_2px_8px_rgba(200,134,10,0.35)] hover:shadow-[0_4px_16px_rgba(200,134,10,0.45)] whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
          )}

          <motion.p
            variants={fadeInUp}
            className="mt-6 text-xs text-[#2C1A0E]/40 flex items-center justify-center gap-1"
          >
            <Leaf size={12} />
            Join 2,400+ coffee lovers already subscribed
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
