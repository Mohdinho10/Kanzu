import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import products from "../data/products";
import ProductCard from "./ProductCard";

const categories = ["All", "Classic", "Premium", "Embroidered"];

export default function ProductGrid({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="shop" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-amber-800 uppercase">
              Thoughtfully selected
            </p>

            <h2 className="mt-3 font-serif text-4xl text-stone-900 sm:text-5xl">
              The collection
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-stone-500">
              Find a style that feels like you, from everyday essentials to
              pieces for special occasions.
            </p>
          </div>

          <p className="text-xs text-stone-500">
            {filteredProducts.length} styles
          </p>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`shrink-0 border px-5 py-3 text-xs transition ${
                  isActive
                    ? "border-stone-900 bg-stone-900 text-white"
                    : "border-stone-200 bg-white text-stone-600 hover:border-stone-500"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-12">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="mt-14 border-t border-stone-200 pt-6">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-stone-700 transition hover:text-amber-800"
          >
            Need help choosing a style?
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
