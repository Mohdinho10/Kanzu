import { useState } from "react";
import { ShoppingBag, Check, Plus } from "lucide-react";

const BROWN = "#795438";
// const BROWN_HOVER = "#62432D";

const money = (amount) => `TSh ${amount.toLocaleString("en-US")}`;

export default function ProductCard({ product, onAddToCart }) {
  const [size, setSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    onAddToCart(product, size);
    setAdded(true);

    window.setTimeout(() => {
      setAdded(false);
    }, 1500);
  }

  const buttonClass =
    "flex items-center justify-center gap-2 rounded-xl border-0 outline-none ring-0 bg-[#795438] px-4 py-3.5 text-sm font-semibold text-white shadow-none transition-colors duration-200 hover:bg-[#62432d] hover:text-white hover:shadow-none focus:bg-[#62432d] focus:text-white focus:outline-none focus:ring-0 active:bg-[#513624] active:scale-[0.99]";

  return (
    <article className="group min-w-0">
      {/* Product image */}
      <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-[#f0eee8]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/15 via-transparent to-transparent" />

        {/* Product badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1.5 text-[9px] font-semibold tracking-[0.14em] text-stone-800 shadow-sm backdrop-blur-sm sm:top-4 sm:left-4">
            {product.badge}
          </span>
        )}

        {/* Desktop add-to-bag button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className={`absolute right-3 bottom-3 left-3 hidden sm:flex ${buttonClass} sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:focus:translate-y-0 sm:focus:opacity-100`}
        >
          {added ? <Check size={17} /> : <ShoppingBag size={17} />}
          {added ? "Added to bag" : "Add to bag"}
        </button>
      </div>

      {/* Product information */}
      <div className="pt-4">
        <h3 className="text-sm leading-5 font-semibold text-stone-900 sm:text-base">
          {product.name}
        </h3>

        <p className="mt-1.5 line-clamp-2 min-h-10 text-xs leading-5 text-stone-500 sm:text-sm">
          {product.description}
        </p>

        <p className="mt-3 text-base font-semibold tracking-tight text-stone-900">
          {money(product.price)}
        </p>

        {/* Size selector */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <label
            htmlFor={`size-${product.id}`}
            className="text-xs font-medium text-stone-500"
          >
            Select size
          </label>

          <div className="relative">
            <select
              id={`size-${product.id}`}
              value={size}
              onChange={(event) => setSize(event.target.value)}
              className="cursor-pointer appearance-none rounded-lg border-0 bg-[#f5f0eb] py-2 pr-8 pl-3 text-xs font-semibold text-[#62432d] ring-0 transition-colors outline-none hover:bg-[#eee3d8] focus:border-0 focus:ring-0 focus:outline-none"
              style={{
                colorScheme: "light",
                accentColor: BROWN,
              }}
            >
              {product.sizes.map((itemSize) => (
                <option key={itemSize} value={itemSize}>
                  {itemSize}
                </option>
              ))}
            </select>

            <svg
              className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-[#795438]"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* Mobile and tablet add-to-bag button */}
        <button
          type="button"
          onClick={handleAddToCart}
          className={`mt-4 w-full sm:hidden ${buttonClass}`}
        >
          {added ? <Check size={17} /> : <Plus size={17} />}
          {added ? "Added to bag" : "Add to bag"}
        </button>
      </div>
    </article>
  );
}
