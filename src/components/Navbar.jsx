import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ cartCount, onOpenCart }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function navigateTo(href) {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-[#faf9f6]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigateTo("#home")}
          className="text-left"
          aria-label="Go to homepage"
        >
          <span className="block text-2xl font-semibold tracking-[0.16em] text-stone-900">
            KANZU<span className="text-amber-700">É</span>
          </span>
          <span className="block text-[9px] tracking-[0.25em] text-stone-500">
            MODEST. TIMELESS. REFINED.
          </span>
        </button>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => navigateTo(link.href)}
              className="text-sm text-stone-600 transition hover:text-amber-800"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCart}
            aria-label={`Open shopping cart, ${cartCount} items`}
            className="relative rounded-full p-3 text-stone-800 transition hover:bg-stone-100"
          >
            <ShoppingBag size={21} strokeWidth={1.6} />
            <span className="absolute top-0 right-0 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#795438] px-1 text-[10px] font-semibold text-white">
              {cartCount}
            </span>
          </button>

          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-full p-2 text-stone-800 hover:bg-stone-100 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-stone-200 bg-[#faf9f6] px-4 py-4 md:hidden">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => navigateTo(link.href)}
              className="block w-full rounded-lg px-3 py-3 text-left text-sm text-stone-700 hover:bg-stone-100"
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenCart();
            }}
            className="mt-2 flex w-full items-center gap-2 rounded-lg bg-stone-900 px-3 py-3 text-sm text-white"
          >
            <ShoppingBag size={17} />
            View shopping bag ({cartCount})
          </button>
        </nav>
      )}
    </header>
  );
}
