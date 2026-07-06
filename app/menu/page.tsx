"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, Star, Flame, Snowflake, Coffee } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Tag {
  label: string;
  type: "vegan" | "gf";
}

interface MenuItemData {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tags: Tag[];
}

interface Category {
  id: string;
  label: string;
  items: MenuItemData[];
}

// ─── Data ────────────────────────────────────────────────────────────────────
const categories: Category[] = [
  {
    id: "espresso",
    label: "Espresso Drinks",
    items: [
      {
        id: "e1",
        name: "Single Origin Espresso",
        description: "A clean, bright shot from our rotating single-origin selection.",
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }, { label: "Vegan", type: "vegan" }],
      },
      {
        id: "e2",
        name: "Oat Milk Cortado",
        description: "Silky espresso balanced with steamed oat milk.",
        price: "$5.75",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80",
        tags: [{ label: "Vegan", type: "vegan" }],
      },
      {
        id: "e3",
        name: "Cardamom Latte",
        description: "House cardamom syrup, espresso, steamed milk.",
        price: "$6.25",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
        tags: [],
      },
      {
        id: "e4",
        name: "Honey Lavender Latte",
        description: "Local wildflower honey, lavender, and our espresso blend.",
        price: "$6.50",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
        tags: [],
      },
      {
        id: "e5",
        name: "Flat White",
        description: "Double ristretto with velvety microfoam.",
        price: "$5.25",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }],
      },
      {
        id: "e6",
        name: "Dirty Chai",
        description: "Masala chai with a double shot of espresso.",
        price: "$6.00",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
        tags: [{ label: "Vegan", type: "vegan" }],
      },
    ],
  },
  {
    id: "pourover",
    label: "Pour Overs",
    items: [
      {
        id: "p1",
        name: "Ethiopian Yirgacheffe",
        description: "Bright floral and blueberry notes, light roast.",
        price: "$6.50",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }, { label: "Vegan", type: "vegan" }],
      },
      {
        id: "p2",
        name: "Colombian Huila",
        description: "Caramel sweetness with a clean finish.",
        price: "$6.00",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }, { label: "Vegan", type: "vegan" }],
      },
      {
        id: "p3",
        name: "Guatemala Antigua",
        description: "Dark chocolate and brown sugar, medium roast.",
        price: "$6.25",
        image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }, { label: "Vegan", type: "vegan" }],
      },
      {
        id: "p4",
        name: "Kenya AA",
        description: "Bold blackcurrant and citrus, complex and bright.",
        price: "$7.00",
        image: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }, { label: "Vegan", type: "vegan" }],
      },
    ],
  },
  {
    id: "coldbrew",
    label: "Cold Brew",
    items: [
      {
        id: "c1",
        name: "Classic Cold Brew",
        description: "18-hour steep, smooth and low-acid.",
        price: "$5.00",
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }, { label: "Vegan", type: "vegan" }],
      },
      {
        id: "c2",
        name: "Cold Brew Float",
        description: "Cold brew with vanilla bean ice cream.",
        price: "$7.00",
        image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }],
      },
      {
        id: "c3",
        name: "Nitro Cold Brew",
        description: "Nitrogen-infused for a creamy, cascading pour.",
        price: "$5.75",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }, { label: "Vegan", type: "vegan" }],
      },
      {
        id: "c4",
        name: "Salted Caramel Cold Brew",
        description: "House caramel, sea salt, cold brew over ice.",
        price: "$6.50",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }],
      },
    ],
  },
  {
    id: "teas",
    label: "Teas",
    items: [
      {
        id: "t1",
        name: "Matcha Latte",
        description: "Ceremonial grade matcha whisked with steamed oat milk.",
        price: "$5.75",
        image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=600&q=80",
        tags: [{ label: "Vegan", type: "vegan" }, { label: "GF", type: "gf" }],
      },
      {
        id: "t2",
        name: "Masala Chai",
        description: "House-spiced black tea with steamed whole milk.",
        price: "$5.25",
        image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }],
      },
      {
        id: "t3",
        name: "Hibiscus Iced Tea",
        description: "Tart hibiscus flowers steeped cold with a hint of honey.",
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80",
        tags: [{ label: "Vegan", type: "vegan" }, { label: "GF", type: "gf" }],
      },
      {
        id: "t4",
        name: "Earl Grey Latte",
        description: "Bergamot-forward Earl Grey with lavender and steamed milk.",
        price: "$5.50",
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }],
      },
    ],
  },
  {
    id: "pastries",
    label: "Pastries",
    items: [
      {
        id: "pa1",
        name: "Almond Croissant",
        description: "Frangipane-filled, twice-baked, golden.",
        price: "$4.50",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
        tags: [],
      },
      {
        id: "pa2",
        name: "Cardamom Morning Bun",
        description: "Flaky, sugar-dusted, warmly spiced.",
        price: "$4.00",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&q=80",
        tags: [{ label: "Vegan", type: "vegan" }],
      },
      {
        id: "pa3",
        name: "Blueberry Scone",
        description: "Buttermilk scone with fresh blueberries and lemon glaze.",
        price: "$3.75",
        image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
        tags: [],
      },
      {
        id: "pa4",
        name: "Chocolate Babka",
        description: "Rich swirled loaf with dark chocolate and cinnamon.",
        price: "$5.00",
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=80",
        tags: [{ label: "Vegan", type: "vegan" }],
      },
    ],
  },
  {
    id: "food",
    label: "Food",
    items: [
      {
        id: "f1",
        name: "Avocado Toast",
        description: "Sourdough, smashed avocado, chili flakes, poached egg.",
        price: "$11.00",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=600&q=80",
        tags: [{ label: "Vegan", type: "vegan" }],
      },
      {
        id: "f2",
        name: "Grain Bowl",
        description: "Farro, roasted veg, tahini dressing, soft-boiled egg.",
        price: "$13.00",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
        tags: [{ label: "Vegan", type: "vegan" }],
      },
      {
        id: "f3",
        name: "Smoked Salmon Bagel",
        description: "House-cured salmon, cream cheese, capers, red onion.",
        price: "$14.00",
        image: "https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?w=600&q=80",
        tags: [],
      },
      {
        id: "f4",
        name: "Granola Parfait",
        description: "House granola, seasonal fruit, coconut yogurt.",
        price: "$8.00",
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80",
        tags: [{ label: "GF", type: "gf" }, { label: "Vegan", type: "vegan" }],
      },
    ],
  },
];

const seasonalSpecials = [
  {
    id: "s1",
    icon: Flame,
    name: "Pumpkin Spice Cortado",
    description: "Warm spiced pumpkin meets our signature double shot. Available through October.",
    price: "$6.75",
  },
  {
    id: "s2",
    icon: Snowflake,
    name: "Iced Hibiscus Lemonade",
    description: "Tart hibiscus cold brew blended with fresh lemonade and mint.",
    price: "$5.50",
  },
  {
    id: "s3",
    icon: Star,
    name: "Brown Butter Latte",
    description: "Nutty brown butter syrup with oat milk and a dusting of sea salt.",
    price: "$6.50",
  },
];

const filterLabels = ["All", "Espresso Drinks", "Pour Overs", "Cold Brew", "Teas", "Pastries", "Food"];

// ─── Sub-components ───────────────────────────────────────────────────────────
function TagBadge({ tag }: { tag: Tag }) {
  if (tag.type === "vegan") {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-0.5">
        <Leaf size={10} />
        Vegan
      </span>
    );
  }
  return (
    <span className="inline-flex items-center text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
      GF
    </span>
  );
}

function MenuCard({ item }: { item: MenuItemData }) {
  return (
    <motion.div
      variants={scaleIn}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#2C1A0E]/5 flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80";
          }}
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h4 className="font-serif text-lg font-semibold text-[#2C1A0E] leading-snug">
            {item.name}
          </h4>
          <span className="text-[#C8860A] font-semibold text-sm whitespace-nowrap">
            {item.price}
          </span>
        </div>
        <p className="text-sm text-[#2C1A0E]/60 leading-relaxed flex-1 mb-3">
          {item.description}
        </p>
        {item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <TagBadge key={tag.label} tag={tag} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleCategories =
    activeFilter === "All"
      ? categories
      : categories.filter((c) => c.label === activeFilter);

  return (
    <div className="bg-[#FAF6F1] min-h-screen">
      {/* ── 1. HERO ── */}
      <section className="bg-[#2C1A0E] py-24 relative overflow-hidden">
        {/* subtle texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=40')] bg-cover bg-center" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-4"
            >
              Brewed &amp; Co.
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="font-serif text-4xl md:text-6xl text-white mb-6 leading-tight"
            >
              The Full Menu
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-[#F5E6D3]/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Every item crafted with seasonal ingredients and sourced with intention.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. CATEGORY FILTER BAR ── */}
      <div className="sticky top-16 z-30 bg-[#FAF6F1]/95 backdrop-blur border-b border-[#2C1A0E]/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {filterLabels.map((label) => (
            <button
              key={label}
              onClick={() => setActiveFilter(label)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === label
                  ? "bg-[#C8860A] text-white shadow-sm"
                  : "text-[#2C1A0E]/60 hover:text-[#C8860A]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* ── 3. SEASONAL SPECIALS ── */}
      {(activeFilter === "All" || activeFilter === "Espresso Drinks") && (
        <section className="bg-[#F5E6D3]/40 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeInUp} className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#C8860A] mb-2">
                  Limited Time
                </p>
                <h2 className="font-serif text-3xl text-[#2C1A0E]">
                  Seasonal Specials
                </h2>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {seasonalSpecials.map((special) => {
                  const Icon = special.icon;
                  return (
                    <motion.div
                      key={special.id}
                      variants={scaleIn}
                      className="bg-white rounded-2xl shadow-sm p-6 border border-[#2C1A0E]/5 relative"
                    >
                      <span className="absolute top-4 right-4 text-xs font-semibold bg-[#C8860A] text-white rounded-full px-3 py-1">
                        Limited
                      </span>
                      <div className="w-10 h-10 rounded-full bg-[#F5E6D3] flex items-center justify-center mb-4">
                        <Icon size={20} className="text-[#C8860A]" />
                      </div>
                      <h3 className="font-serif text-xl text-[#2C1A0E] mb-2">
                        {special.name}
                      </h3>
                      <p className="text-sm text-[#2C1A0E]/60 leading-relaxed mb-4">
                        {special.description}
                      </p>
                      <span className="text-[#C8860A] font-semibold">
                        {special.price}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── 4. FULL MENU GRID ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {visibleCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Section header */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 mb-8"
              >
                <h3 className="font-serif text-2xl text-[#2C1A0E] whitespace-nowrap">
                  {category.label}
                </h3>
                <div className="flex-1 h-px bg-[#2C1A0E]/10" />
                <Coffee size={18} className="text-[#C8860A] shrink-0" />
              </motion.div>

              {/* Items grid */}
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {category.items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 5. DIETARY LEGEND ── */}
      <section className="py-8 border-t border-[#2C1A0E]/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#2C1A0E]/50"
          >
            <span className="font-medium text-[#2C1A0E]/70 uppercase tracking-widest text-xs">
              Dietary Key
            </span>
            <span className="flex items-center gap-1.5">
              <Leaf size={14} className="text-emerald-600" />
              <span>Vegan — contains no animal products</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-full px-2 py-0.5">
                GF
              </span>
              <span>Gluten-Free — prepared without gluten-containing ingredients</span>
            </span>
            <span className="text-[#2C1A0E]/40 text-xs">
              * Please inform your barista of any allergies.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── 6. CTA SECTION ── */}
      <section className="bg-[#2C1A0E] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl md:text-4xl text-white mb-4"
            >
              Ready to Order?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-[#F5E6D3]/70 text-lg mb-8 max-w-xl mx-auto"
            >
              Skip the line — order ahead for pickup or come visit us in Brooklyn.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                href="/order"
                className="inline-flex items-center bg-[#C8860A] text-white rounded-full px-8 py-3 font-semibold text-sm hover:bg-[#A86E08] transition-all duration-200 shadow-[0_2px_12px_rgba(200,134,10,0.4)] hover:-translate-y-0.5"
              >
                Order Online
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center border border-[#F5E6D3]/30 text-[#F5E6D3] rounded-full px-8 py-3 font-semibold text-sm hover:border-[#F5E6D3]/60 hover:text-white transition-all duration-200"
              >
                Visit Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
