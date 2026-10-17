import { ArrowUpRight, MapPin, Truck } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "../components/Icons";
import store from "../data/store";

export default function Contact() {
  const phone = store.whatsapp.replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    `Assalamu alaikum ${store.name}, I would like to ask about your kanzu collection.`,
  )}`;

  return (
    <section id="contact" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact introduction */}
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-amber-800 uppercase">
              Get in touch
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
              Let's find your fit.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-stone-600">
              Have a question about sizing, a product, or delivery? Contact us
              directly and we'll help you with your order.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl border-0 bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-sm transition-colors duration-200 outline-none hover:bg-[#1FBA59] hover:text-white focus:ring-2 focus:ring-[#25D366]/40 focus:ring-offset-2 focus:outline-none active:bg-[#159447]"
            >
              <WhatsAppIcon
                width={21}
                height={21}
                className="shrink-0"
                aria-hidden="true"
              />
              Chat with us on WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Contact details */}
          <div className="space-y-0 border-y border-stone-200">
            <div className="flex gap-4 border-b border-stone-200 py-6">
              <MapPin
                className="shrink-0 text-amber-800"
                size={21}
                strokeWidth={1.5}
              />

              <div>
                <h3 className="text-sm font-semibold text-stone-900">
                  Find our store
                </h3>

                <p className="mt-2 text-sm text-stone-600">{store.location}</p>
              </div>
            </div>

            <div className="flex gap-4 border-b border-stone-200 py-6">
              <Truck
                className="shrink-0 text-amber-800"
                size={21}
                strokeWidth={1.5}
              />

              <div>
                <h3 className="text-sm font-semibold text-stone-900">
                  Delivery information
                </h3>

                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {store.deliveryMessage}
                </p>
              </div>
            </div>

            <div className="flex gap-4 py-6">
              <InstagramIcon
                width={21}
                height={21}
                className="mt-0.5 shrink-0 text-[#C13584]"
                aria-hidden="true"
              />

              <div>
                <h3 className="text-sm font-semibold text-stone-900">
                  Follow our collection
                </h3>

                <a
                  href={store.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-sm text-stone-600 transition-colors hover:text-[#C13584] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C13584]"
                >
                  Visit Instagram
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
