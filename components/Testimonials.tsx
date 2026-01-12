"use client";

import { useEffect, useRef } from "react";

const testimonials = [
  {
    quote:
      "Revanth didn’t just build us a website — he understood our business goals and designed everything around lead generation. The difference was obvious within weeks.",
    name: "Founder",
    company: "PaddleWave",
  },
  {
    quote:
      "What stood out was clarity. From SEO to ads to website structure, everything was intentional. No fluff, just execution that made sense.",
    name: "Clinic Owner",
    company: "Holistic Physio Clinic",
  },
  {
    quote:
      "The branding, ads, and site finally felt aligned. We started attracting the right kind of customers instead of just traffic.",
    name: "Manager",
    company: "Obey Fitness Club",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.remove("opacity-0");
      return;
    }

    el.animate(
      [
        { opacity: 0, transform: "translateY(24px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 700,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "forwards",
      }
    );
  }, []);

  return (
    <section className="py-24 md:py-28">
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 space-y-20 md:space-y-24">
        {/* HEADER */}
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What Clients Say
          </h2>
          <p className="mt-6 text-lg text-foreground/70">
            A few words from people who trusted me with their growth systems.
          </p>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <div
              key={t.company}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-7"
            >
              <p className="text-foreground/65 leading-relaxed max-w-[60ch]">
                “{t.quote}”
              </p>

              <div className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-foreground/50">
                  {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
