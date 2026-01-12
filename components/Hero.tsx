"use client";

import { useEffect, useRef } from "react";
import HeroParticles from "@/components/HeroParticles";
import Image from "next/image";


export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.remove("opacity-0");
      return;
    }

    el.animate(
      [
        { opacity: 0, transform: "translateY(32px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      {
        duration: 1100,
        easing: "cubic-bezier(0.22, 1, 0.36, 1)",
        fill: "forwards",
      }
    );
  }, []);

  return (
   <section className="relative min-h-screen pb-24 md:pb-32 bg-background px-6 overflow-hidden">

  {/* BACKGROUND */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <HeroParticles />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />
  </div>

  {/* CONTENT */}
 <div
  ref={heroRef}
  className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-x-24 gap-y-16 items-start pt-36 md:pt-44 opacity-0"
>

    {/* TEXT */}
    <div className="max-w-[56ch]">
  <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight">
    I design and build
    <br />
    digital growth systems
    <br />
    that actually convert.
  </h1>

  <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
    Strategy, engineering, and marketing — integrated into one execution
    layer.
  </p>

  <p className="mt-3 text-sm text-foreground/50">
    From websites and funnels to paid distribution and automation,
    every decision is intentional.
  </p>

  <div className="mt-8 flex gap-5">
    <a
      href="#work"
      className="px-7 py-3 rounded-xl bg-accent/85 hover:bg-accent transition font-semibold"
    >
      See How I Work
    </a>
    <a
      href="#contact"
      className="px-7 py-3 rounded-xl border border-white/15 text-foreground/70 hover:text-foreground transition"
    >
      Start a Conversation
    </a>
  </div>
</div>

    {/* VISUAL */}
    <div className="relative h-[460px] w-[380px] md:w-[420px] rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
  <Image
    src="/clients/my-photo-3.jpg"
    alt="B Revanth Kumar working at his desk"
    fill
    priority
    className="object-cover object-center saturate-[0.95] contrast-[0.95]"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
  <div className="absolute -inset-6 bg-accent/10 blur-3xl -z-10" />
</div>


  </div>
</section>

  );
}
