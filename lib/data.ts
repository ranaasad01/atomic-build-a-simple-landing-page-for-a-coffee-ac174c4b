export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Order", href: "/order" },
  { label: "Catering", href: "/catering" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Loyalty", href: "/loyalty" },
];

export const navCTA = {
  label: "Order Now",
  href: "/order",
};

export const brandName = "Brewed & Co.";
export const brandTagline = "Crafted with care, served with warmth.";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: "drinks" | "food";
  badge?: string;
}
