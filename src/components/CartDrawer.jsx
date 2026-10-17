import { useEffect } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { WhatsAppIcon } from "./Icons";

const WHATSAPP_NUMBER = "255693275058";

function formatPrice(price) {
  return new Intl.NumberFormat("en-TZ", {
    style: "currency",
    currency: "TZS",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onChangeQuantity,
  onRemoveItem,
  total,
  store,
}) {
  // Calculate locally as a fallback, while allowing App to supply its subtotal.
  const subtotal =
    typeof total === "number"
      ? total
      : cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  function handleWhatsAppCheckout() {
    if (cart.length === 0) return;

    const orderLines = cart.map(
      (item, index) =>
        `${index + 1}. ${item.name}\n` +
        `   Size: ${item.size}\n` +
        `   Quantity: ${item.quantity}\n` +
        `   Unit price: ${formatPrice(item.price)}\n` +
        `   Line total: ${formatPrice(item.price * item.quantity)}`,
    );

    const storeName = store?.name || "KANZÉ";

    const message = [
      `Assalamu Alaikum! I'd like to place an order from ${storeName}.`,
      "",
      ...orderLines,
      "",
      `Total items: ${itemCount}`,
      `Subtotal: ${formatPrice(subtotal)}`,
      "",
      "Please confirm availability and delivery or pickup details.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close shopping cart"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default border-0 bg-black/45 backdrop-blur-[2px] outline-none"
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        onMouseDown={(event) => event.stopPropagation()}
        className="relative z-10 flex h-full w-full max-w-md flex-col bg-[#faf9f6] shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-200 px-5 py-5 sm:px-7">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-stone-500 uppercase">
              Your selection
            </p>

            <h2 className="mt-1 text-xl font-semibold text-stone-900">
              Shopping Cart
              <span className="ml-2 text-sm font-normal text-stone-500">
                ({itemCount})
              </span>
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="rounded-full p-2 text-stone-600 transition outline-none hover:bg-stone-200 hover:text-stone-900 focus-visible:ring-2 focus-visible:ring-[#795438]"
          >
            <X size={21} />
          </button>
        </div>

        {/* Cart contents */}
        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
          {cart.length === 0 ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-100">
                <ShoppingBag size={28} className="text-stone-500" />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-stone-900">
                Your cart is empty
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-stone-500">
                Discover our collection of elegant Kanzu and find a style that
                suits you.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-6 border-0 bg-[#795438] px-6 py-3 text-sm font-semibold text-white transition outline-none hover:bg-[#62432D] focus-visible:ring-2 focus-visible:ring-[#795438] focus-visible:ring-offset-2"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 border-b border-stone-200 pb-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-32 w-24 shrink-0 rounded-md bg-stone-100 object-cover"
                  />

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm leading-5 font-semibold text-stone-900">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-sm text-stone-500">
                          Size: {item.size}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id, item.size)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="shrink-0 rounded-full p-1.5 text-stone-400 transition outline-none hover:bg-red-50 hover:text-red-600 focus-visible:ring-2 focus-visible:ring-red-500"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>

                    <p className="mt-3 text-sm font-semibold text-stone-900">
                      {formatPrice(item.price)} each
                    </p>

                    <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                      {/* Quantity controls */}
                      <div className="inline-flex items-center rounded-lg border border-stone-200 bg-white p-1">
                        <button
                          type="button"
                          onClick={() =>
                            onChangeQuantity(
                              item.id,
                              item.size,
                              item.quantity - 1,
                            )
                          }
                          aria-label={`Decrease quantity of ${item.name}`}
                          disabled={item.quantity <= 1}
                          className="flex h-8 w-8 items-center justify-center rounded-md border-0 bg-transparent text-[#795438] transition-colors outline-none hover:bg-[#F5EFE9] focus-visible:ring-2 focus-visible:ring-[#795438] active:bg-[#E9DCCE] disabled:cursor-not-allowed disabled:opacity-30"
                        >
                          <Minus size={15} strokeWidth={2} />
                        </button>

                        <span
                          aria-live="polite"
                          className="min-w-9 px-2 text-center text-sm font-semibold text-stone-900 tabular-nums"
                        >
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            onChangeQuantity(
                              item.id,
                              item.size,
                              item.quantity + 1,
                            )
                          }
                          aria-label={`Increase quantity of ${item.name}`}
                          className="flex h-8 w-8 items-center justify-center rounded-md border-0 bg-transparent text-[#795438] transition-colors outline-none hover:bg-[#F5EFE9] focus-visible:ring-2 focus-visible:ring-[#795438] active:bg-[#E9DCCE]"
                        >
                          <Plus size={15} strokeWidth={2} />
                        </button>
                      </div>

                      <p className="text-right text-sm font-semibold text-stone-900">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout footer */}
        {cart.length > 0 && (
          <div className="border-t border-stone-200 bg-white px-5 py-5 sm:px-7 sm:py-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-stone-500">
                Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})
              </span>

              <span className="text-xl font-semibold text-stone-900">
                {formatPrice(subtotal)}
              </span>
            </div>

            <p className="mt-2 text-xs leading-5 text-stone-500">
              Delivery charges, if applicable, will be confirmed on WhatsApp.
            </p>

            <button
              type="button"
              onClick={handleWhatsAppCheckout}
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl border-0 bg-[#25D366] px-5 py-4 text-sm font-semibold text-white shadow-sm transition-colors duration-200 outline-none hover:bg-[#1FBA59] hover:shadow-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 active:bg-[#159447]"
            >
              <WhatsAppIcon width={21} height={21} aria-hidden="true" />

              <span>Order via WhatsApp</span>
            </button>

            <p className="mt-3 text-center text-xs text-stone-400">
              You will confirm your order directly with us.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
