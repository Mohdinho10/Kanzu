import { ArrowDownRight, ArrowRight } from "lucide-react";

export default function Hero() {
  function scrollToShop() {
    document.querySelector("#shop")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section id="home" className="scroll-mt-20 bg-[#f5f1e9]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-xs font-medium tracking-[0.28em] text-amber-800 uppercase">
            A timeless expression of style
          </p>

          <h1 className="max-w-xl font-serif text-5xl leading-[1.12] tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
            Elegance in
            <br />
            every <span className="text-amber-800 italic">thread.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-stone-600 sm:text-lg">
            Discover timeless kanzu styles, thoughtfully chosen for everyday
            elegance, Jumu'ah, and life's special occasions.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToShop}
              className="inline-flex items-center gap-3 bg-stone-900 px-6 py-4 text-sm font-medium text-white transition hover:bg-amber-900"
            >
              Explore collection
              <ArrowRight size={17} />
            </button>

            <button
              onClick={() =>
                document.querySelector("#about")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="inline-flex items-center gap-2 px-2 py-3 text-sm text-stone-700 hover:text-amber-800"
            >
              Our story
              <ArrowDownRight size={17} />
            </button>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-stone-300 pt-6">
            <div>
              <p className="text-sm font-semibold text-stone-900">Timeless</p>
              <p className="mt-1 text-xs text-stone-500">Classic styles</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-900">Personal</p>
              <p className="mt-1 text-xs text-stone-500">Direct service</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-900">Simple</p>
              <p className="mt-1 text-xs text-stone-500">WhatsApp orders</p>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute -top-3 -right-3 h-28 w-28 border border-amber-800/30 sm:-top-5 sm:-right-5 sm:h-40 sm:w-40" />

          <img
            src="https://al-aniq.com/wp-content/uploads/2025/05/0R5A9456-1536x1081.jpeg"
            alt="Men wearing traditional white kanzu"
            className="relative z-10 h-90 w-full object-cover object-center sm:h-125 lg:h-147.5"
          />

          <div className="absolute -bottom-4 left-4 z-20 max-w-57.5 bg-white p-4 shadow-lg sm:bottom-6 sm:left-0 sm:p-5">
            <p className="text-[10px] tracking-[0.22em] text-amber-800 uppercase">
              The collection
            </p>
            <p className="mt-2 font-serif text-xl text-stone-900">
              Tradition, redefined.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
