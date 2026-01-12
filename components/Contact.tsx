"use client";

import { useEffect, useRef } from "react";

export default function Contact() {
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
    <div
      ref={sectionRef}
      className="opacity-0 max-w-5xl mx-auto px-6 text-center"
    >
      {/* HEADLINE */}
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        Let’s build something that actually converts.
      </h2>

      <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto">
        If you’re serious about growth — not vanity metrics, not experiments —
        I’ll help you design and execute a system that delivers results.
      </p>

      {/* CTA */}
      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:your@email.com"
          className="px-8 py-4 bg-accent text-white font-semibold rounded-2xl transition hover:-translate-y-0.5"
        >
          Start a Conversation
        </a>

        <a
          href="#work"
          className="px-8 py-4 border border-foreground/20 rounded-2xl transition hover:bg-foreground/5"
        >
          View My Work First
        </a>
      </div>

      {/* QUALIFIER */}
      <p className="mt-8 text-sm text-foreground/50">
        I work with a limited number of clients to maintain quality and focus.
      </p>
    </div>
  );
}
