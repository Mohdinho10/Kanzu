import { ArrowUp } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "../components/Icons";
import store from "../data/store";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${store.whatsapp.replace(/\D/g, "")}`;

  function scrollToTop() {
    document.querySelector("#home")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <footer className="bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          {/* Brand */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="border-0 bg-transparent p-0 font-serif text-3xl tracking-[0.12em] transition-opacity outline-none hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500"
            >
              KANZU<span className="text-amber-500">É</span>
            </button>

            <p className="mt-3 text-xs tracking-[0.16em] text-stone-400">
              {store.tagline}
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-stone-400">
              Timeless styles, personal service, and a simpler way to discover
              your next favourite kanzu.
            </p>
          </div>

          {/* Social links */}
          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] text-stone-300 uppercase">
              Connect with us
            </h3>

            <div className="mt-4 flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#25D366]/40 bg-[#25D366] text-white transition-colors duration-200 outline-none hover:border-[#1FBA59] hover:bg-[#1FBA59] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
              >
                <WhatsAppIcon width={22} height={22} aria-hidden="true" />
              </a>

              {/* Instagram */}
              <a
                href={store.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C13584]/40 bg-linear-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white transition-transform duration-200 outline-none hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#E1306C] focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
              >
                <InstagramIcon width={22} height={22} aria-hidden="true" />
              </a>

              {/* Back to top */}
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-700 bg-transparent text-stone-300 transition-colors duration-200 outline-none hover:border-amber-500 hover:bg-amber-500 hover:text-stone-950 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
              >
                <ArrowUp size={19} strokeWidth={1.8} />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col gap-3 border-t border-stone-800 pt-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {store.name}. All rights reserved.
          </p>

          <p>Crafted with care in Tanzania.</p>
        </div>
      </div>
    </footer>
  );
}
