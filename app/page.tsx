"use client";

import { motion } from "framer-motion";
import { Star, Coffee, Leaf, Clock, MapPin, ArrowRight, Quote } from 'lucide-react';
import Link from "next/link";
import { useTranslations } from "next-intl";
import { fadeInUp, fadeIn, staggerContainer, scaleIn, slideInLeft, slideInRight } from "@/lib/motion";

const menuItems = [
  {
    id: "1",
    name: "Single Origin Pour Over",
    description: "Bright, floral notes from our Ethiopian Yirgacheffe beans, slow-brewed to perfection.",
    price: "$6.50",
    category: "drinks",
    badge: "Staff Pick",
    image: "https://bkgcoffee.com/cdn/shop/articles/BKG_PO_II-_8_pulse_pour_2.jpg?v=1620246797&width=1920",
  },
  {
    id: "2",
    name: "Oat Milk Cortado",
    description: "A silky balance of espresso and steamed oat milk, smooth with a gentle sweetness.",
    price: "$5.75",
    category: "drinks",
    badge: "Popular",
    image: "https://cloudassets.starbucks.com/is/image/sbuxcorp/BrownSugarOatmilkCortado?impolicy=1by1_wide_topcrop_630&crop=180,360,1440,1440&wid=630&hei=630&qlt=85",
  },
  {
    id: "3",
    name: "Cold Brew Float",
    description: "18-hour cold brew topped with a scoop of vanilla bean ice cream. A summer staple.",
    price: "$7.00",
    category: "drinks",
    badge: "Seasonal",
    image: "http://www.pamperedchef.com/iceberg/com/recipe/2180249-lg.jpg",
  },
  {
    id: "4",
    name: "Cardamom Latte",
    description: "House-made cardamom syrup meets our signature espresso blend. Warm and aromatic.",
    price: "$6.25",
    category: "drinks",
    image: "https://oliviaadriance.com/wp-content/uploads/2021/04/Final_4_Iced_Honey_Cardamom_Latte.jpg",
  },
  {
    id: "5",
    name: "Almond Croissant",
    description: "Buttery, flaky layers filled with house-made frangipane and toasted almond slivers.",
    price: "$4.50",
    category: "food",
    badge: "Bestseller",
    image: "http://www.aceofspoons.com/wp-content/uploads/2022/09/almond-croissants-15-of-19-scaled.jpg",
  },
  {
    id: "6",
    name: "Avocado Toast",
    description: "Sourdough from our local bakery partner, smashed avocado, chili flakes, and a poached egg.",
    price: "$11.00",
    category: "food",
    image: "https://www.giallozafferano.com/images/273-27388/Avocado-toast_650x433_wm.jpg",
  },
];

const values = [
  {
    icon: Coffee,
    title: "Sourced with Intention",
    body: "Every bean we use is direct-trade, sourced from small farms we visit personally. We pay above fair-trade prices because quality starts at the root.",
  },
  {
    icon: Leaf,
    title: "Sustainably Operated",
    body: "Compostable cups, zero single-use plastic, and a partnership with a local composting collective. Doing right by the planet is non-negotiable.",
  },
  {
    icon: Clock,
    title: "Slow Coffee, Done Right",
    body: "We don't rush the process. Every drink is made to order by trained baristas who genuinely care about what ends up in your cup.",
  },
];

const testimonials = [
  {
    id: "t1",
    name: "Maya R.",
    location: "Brooklyn, NY",
    quote: "The pour over here changed how I think about coffee. I've tried shops across the city and nothing comes close to the care they put into every cup.",
    stars: 5,
  },
  {
    id: "t2",
    name: "James T.",
    location: "Manhattan, NY",
    quote: "I work remotely and Brewed and Co. is my office. The atmosphere is calm, the wifi is fast, and the cardamom latte keeps me going all morning.",
    stars: 5,
  },
  {
    id: "t3",
    name: "Sofia L.",
    location: "Williamsburg, NY",
    quote: "The almond croissant is genuinely the best pastry I've had in New York. Pair it with the cold brew float and you have a perfect Saturday.",
    stars: 5,
  },
];

export default function HomePage() {
  const t = useTranslations();

  return (
    <main className="bg-[#FAF6F1] overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/57ea802e6a496305a14aaba2/1562168953072-RVHL0EFN88FG71QJBGY4/Williams-Blackstock-Architects-Cahaba.jpg"
            alt="Brewed and Co. interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A0E]/85 via-[#2C1A0E]/60 to-[#2C1A0E]/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.span
              variants={fadeInUp}
              className="inline-flex items-center gap-2 text-[#C8860A] text-xs font-semibold uppercase tracking-widest"
            >
              <span className="w-8 h-px bg-[#C8860A]" />
              Brooklyn, New York
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight text-balance"
            >
              Coffee worth<br />
              <span className="text-[#C8860A]">slowing down</span><br />
              for.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-[#F5E6D3]/80 text-lg leading-relaxed max-w-md text-pretty"
            >
              Direct-trade beans, trained baristas, and a space designed for the kind of morning that sets the tone for everything after.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
              <Link
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C8860A] text-white font-semibold text-sm hover:bg-[#A86E08] transition-all duration-300 shadow-[0_4px_20px_rgba(200,134,10,0.45)] hover:shadow-[0_6px_28px_rgba(200,134,10,0.55)] hover:-translate-y-0.5"
              >
                {t("hero.cta")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300"
              >
                {t("hero.secondary")}
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-4 border-t border-white/10">
              <div>
                <p className="text-white font-bold text-2xl font-serif">4.9</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={12} className="fill-[#C8860A] text-[#C8860A]" />
                  ))}
                </div>
                <p className="text-[#F5E6D3]/50 text-xs mt-1">1,200+ reviews</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="text-white font-bold text-2xl font-serif">7+</p>
                <p className="text-[#F5E6D3]/50 text-xs mt-1">Years in Brooklyn</p>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div>
                <p className="text-white font-bold text-2xl font-serif">12</p>
                <p className="text-[#F5E6D3]/50 text-xs mt-1">Origin partners</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── MENU ── */}
      <section id="menu" className="py-24 md:py-32 bg-[#FAF6F1]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 text-[#C8860A] text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#C8860A]" />
              {t("menu.label")}
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-[#2C1A0E] tracking-tight text-balance mb-4">
              {t("menu.title")}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-[#2C1A0E]/60 text-lg max-w-xl leading-relaxed text-pretty">
              {t("menu.subtitle")}
            </motion.p>
          </motion.div>

          {/* Drinks */}
          <div className="mb-14">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#2C1A0E]/40 mb-8 flex items-center gap-3">
              <span>Drinks</span>
              <span className="flex-1 h-px bg-[#2C1A0E]/10" />
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {menuItems.filter((i) => i.category === "drinks").map((item) => (
                <motion.div
                  key={item.id}
                  variants={scaleIn}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="group flex gap-4 bg-white rounded-2xl p-4 border border-[#2C1A0E]/5 shadow-[0_1px_2px_rgba(44,26,14,0.04),0_8px_24px_-8px_rgba(44,26,14,0.08)] hover:shadow-[0_4px_32px_-8px_rgba(44,26,14,0.16)] transition-all duration-300"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-serif font-bold text-[#2C1A0E] text-base leading-snug">{item.name}</h4>
                        {item.badge && (
                          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide bg-[#C8860A]/10 text-[#C8860A] px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[#2C1A0E]/55 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                    </div>
                    <p className="font-semibold text-[#C8860A] text-base mt-2">{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Food */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#2C1A0E]/40 mb-8 flex items-center gap-3">
              <span>Food</span>
              <span className="flex-1 h-px bg-[#2C1A0E]/10" />
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {menuItems.filter((i) => i.category === "food").map((item) => (
                <motion.div
                  key={item.id}
                  variants={scaleIn}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="group flex gap-4 bg-white rounded-2xl p-4 border border-[#2C1A0E]/5 shadow-[0_1px_2px_rgba(44,26,14,0.04),0_8px_24px_-8px_rgba(44,26,14,0.08)] hover:shadow-[0_4px_32px_-8px_rgba(44,26,14,0.16)] transition-all duration-300"
                >
                  <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="font-serif font-bold text-[#2C1A0E] text-base leading-snug">{item.name}</h4>
                        {item.badge && (
                          <span className="shrink-0 text-[10px] font-semibold uppercase tracking-wide bg-[#C8860A]/10 text-[#C8860A] px-2 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[#2C1A0E]/55 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                    </div>
                    <p className="font-semibold text-[#C8860A] text-base mt-2">{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / VALUES ── */}
      <section id="about" className="py-24 md:py-32 bg-[#2C1A0E]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                <img
                  src="https://www.foodandwine.com/thmb/Tv1TVUdolecFsnlk_Ez1Z6x9sxk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Coffee-Pour-Over-Explainer-FT-BLOG0225-02-ba815561e80547bda14c4147610256c8.jpg"
                  alt="Our barista crafting a pour over"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#C8860A] rounded-2xl p-6 shadow-[0_8px_32px_rgba(200,134,10,0.4)]">
                <p className="font-serif text-white text-3xl font-bold">12</p>
                <p className="text-white/80 text-sm mt-1">Origin<br />Partners</p>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-8"
            >
              <div>
                <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 text-[#C8860A] text-xs font-semibold uppercase tracking-widest mb-4">
                  <span className="w-8 h-px bg-[#C8860A]" />
                  {t("about.label")}
                </motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight text-balance mb-4">
                  {t("about.title")}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-[#F5E6D3]/65 text-base leading-relaxed text-pretty">
                  {t("about.body")}
                </motion.p>
              </div>

              <motion.div variants={staggerContainer} className="flex flex-col gap-6">
                {values.map((v) => (
                  <motion.div
                    key={v.title}
                    variants={fadeInUp}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#C8860A]/15 flex items-center justify-center shrink-0">
                      <v.icon size={18} className="text-[#C8860A]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{v.title}</h4>
                      <p className="text-[#F5E6D3]/55 text-sm leading-relaxed">{v.body}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 md:py-32 bg-[#F5EDE0]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 text-[#C8860A] text-xs font-semibold uppercase tracking-widest mb-4">
              <span className="w-8 h-px bg-[#C8860A]" />
              {t("reviews.label")}
              <span className="w-8 h-px bg-[#C8860A]" />
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-[#2C1A0E] tracking-tight text-balance">
              {t("reviews.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((review, idx) => (
              <motion.div
                key={review.id}
                variants={scaleIn}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className={`bg-white rounded-2xl p-7 border border-[#2C1A0E]/5 shadow-[0_1px_2px_rgba(44,26,14,0.04),0_8px_24px_-8px_rgba(44,26,14,0.10)] flex flex-col gap-5 ${idx === 1 ? "md:-mt-4 md:mb-4" : ""}`}
              >
                <Quote size={28} className="text-[#C8860A]/30" />
                <p className="text-[#2C1A0E]/75 text-sm leading-relaxed flex-1 text-pretty">
                  {review.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#2C1A0E]/6">
                  <div className="w-9 h-9 rounded-full bg-[#C8860A]/15 flex items-center justify-center font-serif font-bold text-[#C8860A] text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#2C1A0E] text-sm">{review.name}</p>
                    <p className="text-[#2C1A0E]/45 text-xs flex items-center gap-1">
                      <MapPin size={10} />
                      {review.location}
                    </p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: review.stars }).map((_, s) => (
                      <Star key={s} size={11} className="fill-[#C8860A] text-[#C8860A]" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT / VISIT ── */}
      <section id="contact" className="py-24 md:py-32 bg-[#FAF6F1]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              <div>
                <motion.span variants={fadeInUp} className="inline-flex items-center gap-2 text-[#C8860A] text-xs font-semibold uppercase tracking-widest mb-4">
                  <span className="w-8 h-px bg-[#C8860A]" />
                  {t("contact.label")}
                </motion.span>
                <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-[#2C1A0E] tracking-tight text-balance mb-4">
                  {t("contact.title")}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-[#2C1A0E]/60 text-base leading-relaxed text-pretty">
                  {t("contact.body")}
                </motion.p>
              </div>

              <motion.div variants={staggerContainer} className="flex flex-col gap-5">
                {[
                  { icon: MapPin, label: t("contact.address"), value: "42 Maple Street, Brooklyn, NY 11201" },
                  { icon: Clock, label: t("contact.hours"), value: "Mon–Fri 7am–7pm · Sat–Sun 8am–6pm" },
                ].map((item) => (
                  <motion.div key={item.label} variants={fadeInUp} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#C8860A]/10 flex items-center justify-center shrink-0">
                      <item.icon size={18} className="text-[#C8860A]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#2C1A0E]/40 mb-0.5">{item.label}</p>
                      <p className="text-[#2C1A0E] text-sm font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#C8860A] text-white font-semibold text-sm hover:bg-[#A86E08] transition-all duration-300 shadow-[0_4px_20px_rgba(200,134,10,0.35)] hover:shadow-[0_6px_28px_rgba(200,134,10,0.45)] hover:-translate-y-0.5"
                >
                  {t("contact.cta")}
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>

            {/* Map / image */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="rounded-2xl overflow-hidden aspect-square border border-[#2C1A0E]/8 shadow-[0_8px_40px_-12px_rgba(44,26,14,0.20)]"
            >
              <img
                src="https://www.courier-journal.com/gcdn/presto/2021/01/22/PLOU/94791f78-bbf4-4f2c-8b12-a5441297e24b-maple_st.jpg"
                alt="Brewed and Co. exterior on Maple Street"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 bg-[#C8860A]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6"
        >
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-bold text-white tracking-tight text-balance">
            {t("cta.title")}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-white/75 text-lg leading-relaxed text-pretty">
            {t("cta.body")}
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link
              href="#menu"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#C8860A] font-bold text-sm hover:bg-[#FAF6F1] transition-all duration-300 shadow-[0_4px_20px_rgba(44,26,14,0.25)] hover:shadow-[0_6px_32px_rgba(44,26,14,0.35)] hover:-translate-y-0.5"
            >
              {t("cta.button")}
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}