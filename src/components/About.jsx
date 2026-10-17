import { Award, HeartHandshake, Sparkles } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Timeless style",
    description:
      "Classic designs for everyday wear, Jumu'ah, and memorable occasions.",
  },
  {
    icon: Award,
    title: "Quality first",
    description:
      "A carefully selected collection with attention to fabric, comfort, and detail.",
  },
  {
    icon: HeartHandshake,
    title: "Personal service",
    description:
      "Friendly assistance to help you choose the right style and size.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-[#f5f1e9] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <img
              src="https://al-aniq.com/wp-content/uploads/2025/05/16-1536x1024.jpeg"
              alt="Fashion editorial image representing the store's style"
              loading="lazy"
              className="h-90 w-full object-cover sm:h-120"
            />

            <div className="absolute right-4 -bottom-5 bg-white px-5 py-4 shadow-lg sm:right-8 sm:px-7">
              <p className="font-serif text-2xl text-stone-900">
                Style with purpose.
              </p>
              <p className="mt-1 text-xs text-stone-500">
                Inspired by timeless tradition
              </p>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <p className="text-xs font-medium tracking-[0.25em] text-amber-800 uppercase">
              A little about us
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-900 sm:text-5xl">
              Tradition, worn with confidence.
            </h2>

            <p className="mt-6 text-sm leading-7 text-stone-600">
              We believe a kanzu is more than a garment. It is an expression of
              heritage, elegance, and personal style. Our collection is designed
              to make finding your next favourite piece simple and enjoyable.
            </p>

            <p className="mt-4 text-sm leading-7 text-stone-600">
              Whether you are preparing for Jumu'ah, a wedding, Eid, or everyday
              wear, we're here to help you find a style that feels right.
            </p>

            <div className="mt-8 space-y-5">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-amber-800">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-stone-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-stone-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
