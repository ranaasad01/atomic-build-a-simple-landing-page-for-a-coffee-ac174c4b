"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Plus, Minus, X, Check, Coffee, Clock, MapPin } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motion";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Customization {
  milk?: string;
  size?: string;
  extras?: string[];
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  customizations: Customization;
}

interface MenuItemDef {
  id: string;
  name: string;
  description: string;
  price: number;
  isDrink: boolean;
}

// ─── Menu Data ───────────────────────────────────────────────────────────────

const menuData: Record<string, MenuItemDef[]> = {
  "Espresso Drinks": [
    {
      id: "esp-1",
      name: "Classic Espresso",
      description: "A rich, concentrated shot of our signature blend.",
      price: 3.5,
      isDrink: true,
    },
    {
      id: "esp-2",
      name: "Oat Milk Cortado",
      description: "Silky espresso balanced with steamed oat milk.",
      price: 5.75,
      isDrink: true,
    },
    {
      id: "esp-3",
      name: "Cardamom Latte",
      description: "House-made cardamom syrup meets our espresso blend.",
      price: 6.25,
      isDrink: true,
    },
    {
      id: "esp-4",
      name: "Honey Flat White",
      description: "Velvety microfoam espresso with a touch of raw honey.",
      price: 5.5,
      isDrink: true,
    },
    {
      id: "esp-5",
      name: "Vanilla Cappuccino",
      description: "Espresso, steamed milk, and a hint of vanilla.",
      price: 5.25,
      isDrink: true,
    },
  ],
  "Pour Overs": [
    {
      id: "po-1",
      name: "Ethiopian Yirgacheffe",
      description: "Bright, floral notes slow-brewed to perfection.",
      price: 6.5,
      isDrink: true,
    },
    {
      id: "po-2",
      name: "Colombian Huila",
      description: "Caramel sweetness with a clean, crisp finish.",
      price: 6.5,
      isDrink: true,
    },
    {
      id: "po-3",
      name: "Guatemalan Antigua",
      description: "Dark chocolate and brown sugar with a smoky finish.",
      price: 6.75,
      isDrink: true,
    },
    {
      id: "po-4",
      name: "Kenyan AA",
      description: "Bold berry and citrus notes with a wine-like complexity.",
      price: 7.0,
      isDrink: true,
    },
  ],
  "Cold Brew": [
    {
      id: "cb-1",
      name: "Classic Cold Brew",
      description: "18-hour steeped cold brew, smooth and low-acid.",
      price: 5.5,
      isDrink: true,
    },
    {
      id: "cb-2",
      name: "Cold Brew Float",
      description: "Cold brew topped with vanilla bean ice cream.",
      price: 7.0,
      isDrink: true,
    },
    {
      id: "cb-3",
      name: "Nitro Cold Brew",
      description: "Nitrogen-infused for a creamy, cascading pour.",
      price: 6.25,
      isDrink: true,
    },
    {
      id: "cb-4",
      name: "Salted Caramel Cold Brew",
      description: "Cold brew with house-made salted caramel syrup.",
      price: 6.5,
      isDrink: true,
    },
  ],
  Pastries: [
    {
      id: "pas-1",
      name: "Almond Croissant",
      description: "Buttery layers filled with house-made frangipane.",
      price: 4.5,
      isDrink: false,
    },
    {
      id: "pas-2",
      name: "Morning Bun",
      description: "Orange zest and cinnamon sugar in a flaky spiral.",
      price: 4.0,
      isDrink: false,
    },
    {
      id: "pas-3",
      name: "Blueberry Scone",
      description: "Tender scone bursting with fresh blueberries.",
      price: 3.75,
      isDrink: false,
    },
    {
      id: "pas-4",
      name: "Chocolate Babka",
      description: "Rich chocolate swirled through pillowy brioche dough.",
      price: 5.0,
      isDrink: false,
    },
    {
      id: "pas-5",
      name: "Cardamom Knot",
      description: "Scandinavian-style bun with cardamom and pearl sugar.",
      price: 4.25,
      isDrink: false,
    },
  ],
  Food: [
    {
      id: "food-1",
      name: "Avocado Toast",
      description: "Sourdough, smashed avocado, chili flakes, poached egg.",
      price: 11.0,
      isDrink: false,
    },
    {
      id: "food-2",
      name: "Granola Bowl",
      description: "House granola, Greek yogurt, seasonal fruit, honey.",
      price: 9.5,
      isDrink: false,
    },
    {
      id: "food-3",
      name: "Egg & Cheese Sandwich",
      description: "Scrambled eggs and aged cheddar on a toasted brioche bun.",
      price: 8.5,
      isDrink: false,
    },
    {
      id: "food-4",
      name: "Smoked Salmon Bagel",
      description: "Cream cheese, capers, red onion, and dill on an everything bagel.",
      price: 13.0,
      isDrink: false,
    },
  ],
};

const CATEGORIES = Object.keys(menuData);

const MILK_OPTIONS = ["Whole", "Oat", "Almond", "Soy"];
const SIZE_OPTIONS = ["Small", "Medium", "Large"];
const EXTRAS = [
  { label: "Extra Shot", price: 1.0 },
  { label: "Vanilla Syrup", price: 0.75 },
  { label: "Caramel Drizzle", price: 0.5 },
];

const PICKUP_TIMES = [
  "ASAP (10–15 min)",
  "+15 min",
  "+30 min",
  "+45 min",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatPrice(n: number) {
  return `$${n.toFixed(2)}`;
}

function customizationLabel(c: Customization): string {
  const parts: string[] = [];
  if (c.size) parts.push(c.size);
  if (c.milk) parts.push(c.milk + " milk");
  if (c.extras && c.extras.length > 0) parts.push(...c.extras);
  return parts.join(" · ");
}

function extrasPrice(extras: string[]): number {
  return extras.reduce((sum, label) => {
    const found = EXTRAS.find((e) => e.label === label);
    return sum + (found ? found.price : 0);
  }, 0);
}

function itemTotalPrice(item: CartItem): number {
  const extras = item.customizations.extras ?? [];
  return (item.price + extrasPrice(extras)) * item.quantity;
}

// ─── Customize Panel ─────────────────────────────────────────────────────────

interface CustomizePanelProps {
  customization: Customization;
  onChange: (c: Customization) => void;
}

function CustomizePanel({ customization, onChange }: CustomizePanelProps) {
  function setMilk(milk: string) {
    onChange({ ...customization, milk });
  }
  function setSize(size: string) {
    onChange({ ...customization, size });
  }
  function toggleExtra(label: string) {
    const current = customization.extras ?? [];
    const next = current.includes(label)
      ? current.filter((e) => e !== label)
      : [...current, label];
    onChange({ ...customization, extras: next });
  }

  return (
    <div className="mt-3 pt-3 border-t border-[#2C1A0E]/10 space-y-3">
      {/* Milk */}
      <div>
        <p className="text-xs font-semibold text-[#2C1A0E]/50 uppercase tracking-wider mb-1.5">
          Milk
        </p>
        <div className="flex flex-wrap gap-1.5">
          {MILK_OPTIONS.map((m) => (
            <button
              key={m}
              onClick={() => setMilk(m)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-150 ${
                customization.milk === m
                  ? "bg-[#C8860A] text-white border-[#C8860A]"
                  : "bg-white text-[#2C1A0E]/70 border-[#2C1A0E]/20 hover:border-[#C8860A]/50"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
      {/* Size */}
      <div>
        <p className="text-xs font-semibold text-[#2C1A0E]/50 uppercase tracking-wider mb-1.5">
          Size
        </p>
        <div className="flex flex-wrap gap-1.5">
          {SIZE_OPTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-150 ${
                customization.size === s
                  ? "bg-[#C8860A] text-white border-[#C8860A]"
                  : "bg-white text-[#2C1A0E]/70 border-[#2C1A0E]/20 hover:border-[#C8860A]/50"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      {/* Extras */}
      <div>
        <p className="text-xs font-semibold text-[#2C1A0E]/50 uppercase tracking-wider mb-1.5">
          Extras
        </p>
        <div className="flex flex-wrap gap-1.5">
          {EXTRAS.map((ex) => {
            const checked = (customization.extras ?? []).includes(ex.label);
            return (
              <button
                key={ex.label}
                onClick={() => toggleExtra(ex.label)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-150 ${
                  checked
                    ? "bg-[#C8860A] text-white border-[#C8860A]"
                    : "bg-white text-[#2C1A0E]/70 border-[#2C1A0E]/20 hover:border-[#C8860A]/50"
                }`}
              >
                {ex.label} +${ex.price.toFixed(2)}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Menu Item Card ───────────────────────────────────────────────────────────

interface MenuItemCardProps {
  item: MenuItemDef;
  onAdd: (item: MenuItemDef, customization: Customization) => void;
}

function MenuItemCard({ item, onAdd }: MenuItemCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [customization, setCustomization] = useState<Customization>({
    milk: "Whole",
    size: "Medium",
    extras: [],
  });

  function handleAdd() {
    onAdd(item, item.isDrink ? customization : { extras: [] });
  }

  return (
    <div className="bg-white rounded-2xl p-5 border border-[#2C1A0E]/5 shadow-sm flex flex-col gap-2">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-[#2C1A0E] leading-snug">{item.name}</p>
          <p className="text-sm text-[#2C1A0E]/60 mt-0.5 leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <span className="text-[#C8860A] font-bold text-sm">
            {formatPrice(item.price)}
          </span>
          <button
            onClick={handleAdd}
            aria-label={`Add ${item.name} to cart`}
            className="w-8 h-8 rounded-full bg-[#C8860A] text-white flex items-center justify-center hover:bg-[#A86E08] transition-colors duration-200 shadow-sm"
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {item.isDrink && (
        <>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-xs text-[#C8860A] font-medium hover:underline self-start"
          >
            {expanded ? "Hide options" : "Customize"}
          </button>
          {expanded && (
            <CustomizePanel
              customization={customization}
              onChange={setCustomization}
            />
          )}
        </>
      )}
    </div>
  );
}

// ─── Cart Panel ───────────────────────────────────────────────────────────────

interface CartPanelProps {
  cart: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onPlaceOrder: () => void;
  pickupTime: string;
  onPickupTimeChange: (t: string) => void;
  specialInstructions: string;
  onSpecialInstructionsChange: (v: string) => void;
}

function CartPanel({
  cart,
  onUpdateQty,
  onRemove,
  onPlaceOrder,
  pickupTime,
  onPickupTimeChange,
  specialInstructions,
  onSpecialInstructionsChange,
}: CartPanelProps) {
  const subtotal = cart.reduce((sum, item) => sum + itemTotalPrice(item), 0);
  const tax = subtotal * 0.08875;
  const total = subtotal + tax;

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#2C1A0E]/5 shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <ShoppingCart size={20} className="text-[#C8860A]" />
        <h2 className="font-serif text-xl text-[#2C1A0E]">Your Order</h2>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 gap-3">
          <Coffee size={48} className="text-[#2C1A0E]/20" />
          <p className="text-[#2C1A0E]/40 text-sm">Your cart is empty</p>
          <p className="text-[#2C1A0E]/30 text-xs text-center">
            Add items from the menu to get started
          </p>
        </div>
      ) : (
        <>
          {/* Items */}
          <ul className="space-y-3 mb-5">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-start gap-3 pb-3 border-b border-[#2C1A0E]/5 last:border-0"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#2C1A0E] leading-snug">
                    {item.name}
                  </p>
                  {customizationLabel(item.customizations) && (
                    <p className="text-xs text-[#2C1A0E]/50 mt-0.5">
                      {customizationLabel(item.customizations)}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="w-6 h-6 rounded-full border border-[#2C1A0E]/20 flex items-center justify-center text-[#2C1A0E]/60 hover:border-[#C8860A] hover:text-[#C8860A] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-medium text-[#2C1A0E] w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="w-6 h-6 rounded-full border border-[#2C1A0E]/20 flex items-center justify-center text-[#2C1A0E]/60 hover:border-[#C8860A] hover:text-[#C8860A] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-[#2C1A0E]/30 hover:text-red-400 transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <X size={14} />
                  </button>
                  <span className="text-sm font-semibold text-[#2C1A0E]">
                    {formatPrice(itemTotalPrice(item))}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          {/* Totals */}
          <div className="space-y-1.5 mb-5 text-sm">
            <div className="flex justify-between text-[#2C1A0E]/60">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-[#2C1A0E]/60">
              <span>Tax (8.875%)</span>
              <span>{formatPrice(tax)}</span>
            </div>
            <div className="flex justify-between font-bold text-[#2C1A0E] pt-1.5 border-t border-[#2C1A0E]/10">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>

          {/* Pickup time */}
          <div className="mb-4">
            <label
              htmlFor="pickup-time"
              className="block text-xs font-semibold text-[#2C1A0E]/60 uppercase tracking-wider mb-1.5"
            >
              Select Pickup Time
            </label>
            <select
              id="pickup-time"
              value={pickupTime}
              onChange={(e) => onPickupTimeChange(e.target.value)}
              className="w-full rounded-xl border border-[#2C1A0E]/15 bg-[#FAF6F1] text-[#2C1A0E] text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#C8860A]/30"
            >
              {PICKUP_TIMES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Special instructions */}
          <div className="mb-5">
            <label
              htmlFor="special-instructions"
              className="block text-xs font-semibold text-[#2C1A0E]/60 uppercase tracking-wider mb-1.5"
            >
              Special Instructions
            </label>
            <textarea
              id="special-instructions"
              value={specialInstructions}
              onChange={(e) => onSpecialInstructionsChange(e.target.value)}
              placeholder="Any allergies or special requests?"
              rows={3}
              className="w-full rounded-xl border border-[#2C1A0E]/15 bg-[#FAF6F1] text-[#2C1A0E] text-sm px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#C8860A]/30 placeholder:text-[#2C1A0E]/30"
            />
          </div>

          {/* Place order */}
          <button
            onClick={onPlaceOrder}
            className="w-full bg-[#C8860A] text-white rounded-full py-3 font-semibold text-sm hover:bg-[#A86E08] transition-all duration-200 shadow-[0_2px_8px_rgba(200,134,10,0.35)] hover:shadow-[0_4px_16px_rgba(200,134,10,0.45)] hover:-translate-y-0.5"
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
}

// ─── Order Success ────────────────────────────────────────────────────────────

interface OrderSuccessProps {
  orderNumber: string;
  onReset: () => void;
}

function OrderSuccess({ orderNumber, onReset }: OrderSuccessProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-[#2C1A0E]/5 shadow-sm flex flex-col items-center text-center gap-4">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
        <Check size={32} className="text-green-600" />
      </div>
      <h2 className="font-serif text-2xl text-[#2C1A0E]">Order Placed!</h2>
      <p className="text-[#2C1A0E]/60 text-sm leading-relaxed">
        Your order will be ready in 10–15 minutes at{" "}
        <span className="font-semibold text-[#2C1A0E]">42 Maple Street</span>.
      </p>
      <div className="bg-[#FAF6F1] rounded-xl px-5 py-3 w-full">
        <p className="text-xs text-[#2C1A0E]/50 uppercase tracking-wider mb-0.5">
          Order Number
        </p>
        <p className="font-serif text-2xl font-bold text-[#C8860A]">
          #{orderNumber}
        </p>
      </div>
      <button
        onClick={onReset}
        className="mt-2 w-full border-2 border-[#C8860A] text-[#C8860A] rounded-full py-3 font-semibold text-sm hover:bg-[#C8860A] hover:text-white transition-all duration-200"
      >
        Start New Order
      </button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("Espresso Drinks");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [pickupTime, setPickupTime] = useState(PICKUP_TIMES[0]);
  const [specialInstructions, setSpecialInstructions] = useState("");

  function addToCart(item: MenuItemDef, customization: Customization) {
    setCart((prev) => {
      // Build a unique key based on item + customization
      const key = `${item.id}-${JSON.stringify(customization)}`;
      const existing = prev.find((c) => c.id === key);
      if (existing) {
        return prev.map((c) =>
          c.id === key ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [
        ...prev,
        {
          id: key,
          name: item.name,
          price: item.price,
          quantity: 1,
          customizations: customization,
        },
      ];
    });
  }

  function updateQty(id: string, delta: number) {
    setCart((prev) =>
      prev
        .map((c) => (c.id === id ? { ...c, quantity: c.quantity + delta } : c))
        .filter((c) => c.quantity > 0)
    );
  }

  function removeItem(id: string) {
    setCart((prev) => prev.filter((c) => c.id !== id));
  }

  function placeOrder() {
    // Generate a stable order number from cart length + timestamp mod
    const num = String(1000 + (cart.length * 37 + Date.now() % 9000) % 9000);
    setOrderNumber(num);
    setOrderPlaced(true);
  }

  function resetOrder() {
    setCart([]);
    setOrderPlaced(false);
    setOrderNumber("");
    setPickupTime(PICKUP_TIMES[0]);
    setSpecialInstructions("");
  }

  const items = menuData[activeCategory] ?? [];

  return (
    <div className="bg-[#FAF6F1] min-h-screen">
      {/* ── HERO ── */}
      <section className="bg-[#2C1A0E] py-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto px-6 text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[#C8860A] text-xs font-semibold uppercase tracking-widest mb-3"
          >
            Order Ahead
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4"
          >
            Skip the Line, Not the Quality
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-[#F5E6D3]/70 text-lg max-w-xl mx-auto mb-8"
          >
            Order online for pickup in 10–15 minutes. Ready when you are.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: Clock, label: "10–15 min pickup" },
              { icon: MapPin, label: "42 Maple Street" },
              { icon: Check, label: "Pay in store or online" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-sm text-[#F5E6D3]/80"
              >
                <Icon size={15} className="text-[#C8860A]" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── MAIN ORDERING AREA ── */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="lg:grid lg:grid-cols-3 gap-8 flex flex-col">
          {/* LEFT — MENU PANEL */}
          <div className="lg:col-span-2">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#2C1A0E] text-white shadow-sm"
                      : "bg-white text-[#2C1A0E]/70 border border-[#2C1A0E]/10 hover:border-[#2C1A0E]/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Items grid */}
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {items.map((item) => (
                <motion.div key={item.id} variants={scaleIn}>
                  <MenuItemCard item={item} onAdd={addToCart} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — CART PANEL */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {orderPlaced ? (
              <OrderSuccess orderNumber={orderNumber} onReset={resetOrder} />
            ) : (
              <CartPanel
                cart={cart}
                onUpdateQty={updateQty}
                onRemove={removeItem}
                onPlaceOrder={placeOrder}
                pickupTime={pickupTime}
                onPickupTimeChange={setPickupTime}
                specialInstructions={specialInstructions}
                onSpecialInstructionsChange={setSpecialInstructions}
              />
            )}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-[#F5E6D3]/40 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <motion.h2
              variants={fadeInUp}
              className="font-serif text-3xl text-[#2C1A0E]"
            >
              How It Works
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                step: "1",
                icon: ShoppingCart,
                title: "Build Your Order",
                body: "Browse our full menu and add your favourite drinks and bites to your cart. Customize each drink exactly how you like it.",
              },
              {
                step: "2",
                icon: Clock,
                title: "Choose Pickup Time",
                body: "Select when you'd like to pick up — ASAP or schedule ahead. We'll have everything ready and waiting for you.",
              },
              {
                step: "3",
                icon: Coffee,
                title: "Grab & Go",
                body: "Walk in, skip the queue, and grab your order from the pickup counter. Your coffee is fresh, hot, and made just for you.",
              },
            ].map(({ step, icon: Icon, title, body }) => (
              <motion.div
                key={step}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 border border-[#2C1A0E]/5 shadow-sm text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#C8860A] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step}
                </div>
                <Icon size={28} className="text-[#C8860A] mx-auto mb-3" />
                <h3 className="font-serif text-lg text-[#2C1A0E] mb-2">{title}</h3>
                <p className="text-sm text-[#2C1A0E]/60 leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="bg-[#2C1A0E] py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl text-white mb-2">
            Prefer to visit us in person?
          </p>
          <p className="text-[#F5E6D3]/60 text-sm mb-6">
            We're open Mon–Fri 7am–7pm and Sat–Sun 8am–6pm at 42 Maple Street,
            Brooklyn.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#F5E6D3]/30 text-[#F5E6D3] text-sm font-semibold hover:bg-white/10 transition-all duration-200"
          >
            <MapPin size={15} />
            Get Directions
          </Link>
        </div>
      </section>
    </div>
  );
}
