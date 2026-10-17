import { useCallback, useMemo, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import store from "./data/store";

const money = (amount) => `TSh ${amount.toLocaleString("en-US")}`;

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );

  const openCart = useCallback(() => {
    setCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setCartOpen(false);
  }, []);

  const addToCart = useCallback((product, size) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (item) => item.id === product.id && item.size === size,
      );

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [
        ...currentCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size,
          quantity: 1,
        },
      ];
    });

    setCartOpen(true);
  }, []);

  // Receives the new quantity requested by CartDrawer.
  const changeQuantity = useCallback((productId, size, newQuantity) => {
    if (!Number.isInteger(newQuantity) || newQuantity < 1) {
      return;
    }

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item,
      ),
    );
  }, []);

  const removeFromCart = useCallback((productId, size) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => !(item.id === productId && item.size === size),
      ),
    );
  }, []);

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <div className="bg-stone-900 px-3 py-2 text-center text-[10px] tracking-[0.12em] text-stone-100 sm:text-xs">
        DISCOVER YOUR STYLE · PERSONAL WHATSAPP ORDERING
      </div>

      <Navbar cartCount={cartCount} onOpenCart={openCart} />

      <main>
        <Hero />

        <div className="border-y border-stone-200 bg-white py-4">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-[10px] tracking-[0.15em] text-stone-500 uppercase sm:gap-x-14 sm:text-xs">
            <span>Timeless styles</span>
            <span className="text-[#795438]">✳</span>
            <span>Easy ordering</span>
            <span className="text-[#795438]">✳</span>
            <span>Personal service</span>
          </div>
        </div>

        <ProductGrid onAddToCart={addToCart} />

        <About />

        <section className="bg-stone-900 px-4 py-14 text-center sm:px-6 sm:py-20">
          <p className="text-xs tracking-[0.25em] text-amber-400 uppercase">
            Your next favourite
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-5xl">
            A timeless piece for every occasion.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-stone-300">
            Explore the collection and contact us directly to confirm
            availability and arrange your order.
          </p>

          <button
            type="button"
            onClick={() =>
              document.querySelector("#shop")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }
            className="mt-7 border-0 bg-[#f5f1e9] px-7 py-4 text-sm font-medium text-stone-900 transition outline-none hover:bg-white focus-visible:ring-2 focus-visible:ring-[#795438] focus-visible:ring-offset-2"
          >
            Shop the collection
          </button>
        </section>

        <Contact />
      </main>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={closeCart}
        cart={cart}
        onChangeQuantity={changeQuantity}
        onRemoveItem={removeFromCart}
        total={subtotal}
        store={store}
      />

      <div className="sr-only" aria-live="polite">
        {cartCount} items in your shopping bag. Subtotal: {money(subtotal)}.
      </div>
    </div>
  );
}
