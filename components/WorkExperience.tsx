"use client";

import Image from "next/image";

export default function WorkExperience() {
  return (
    <section
  id="work"
  className="pt-24 md:pt-28 pb-16 md:pb-20"
>



      <div className="max-w-7xl mx-auto px-6 space-y-40">

        {/* TOP — HOW I WORK */}
        <div className="grid md:grid-cols-2 gap-24 items-start">
          {/* LEFT — NARRATIVE */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-bold tracking-tight">
              How I Work
            </h2>

            <p className="mt-8 text-lg text-foreground/70 leading-relaxed">
              I don’t execute random tactics. I design and build digital systems
              where strategy, technology, and distribution work together to
              create sustainable growth.
            </p>

            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Every decision is intentional — what to build, what to ignore,
              and where to focus effort for maximum leverage.
            </p>
          </div>

          {/* RIGHT — CAPABILITIES (CARDS) */}
          <div className="space-y-10">
            <CapabilityCard
              title="Strategy Before Execution"
              text="I identify leverage points — positioning, audience intent, and conversion friction — before touching design or ads."
            />
            <CapabilityCard
              title="Systems, Not Campaigns"
              text="I connect websites, SEO, paid ads, and automation into repeatable systems instead of one-off efforts."
            />
            <CapabilityCard
              title="Engineering-Level Thinking"
              text="With hands-on development experience, I design marketing systems that are fast, measurable, and technically sound."
            />
          </div>
        </div>

        {/* MIDDLE — CLIENT PROOF */}
        <div className="space-y-20">
          <h3 className="text-3xl font-bold tracking-tight">
            Who I’ve Worked With
          </h3>

          <div className="grid md:grid-cols-2 gap-16">
            <ClientImage
              name=""
              category=""
              image="/clients/paddlewave.jpg"
            />
            <ClientImage
              name=""
              category=""
              image="/clients/holistic-physio.jpg"
            />
            <ClientImage
              name=""
              category=""
              image="/clients/obey-fitness.jpg"
            />
            <ClientImage
              name=""
              category=""
              image="/clients/avinash-salon.jpg"
            />
          </div>
        </div>

        {/* BOTTOM — WHY ME */}
        <div className="max-w-4xl">
  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
    Why Work With Me
  </h3>

  <div className="mt-8 grid md:grid-cols-2 gap-x-12 gap-y-10">
    <Reason
      title="I Don’t Sell Tactics"
      text="Most marketers sell channels. I focus on decision-making, system design, and execution quality."
    />
    <Reason
      title="I Bridge Strategy and Execution"
      text="I work across marketing, design, and development — reducing friction and misalignment."
    />
    <Reason
      title="Restraint Over Noise"
      text="I deliberately avoid unnecessary tools, trends, and complexity that dilute outcomes."
    />
    <Reason
      title="Built for Compounding Growth"
      text="What I build is meant to improve over time, not spike briefly and collapse."
    />
  </div>
</div>

      </div>
    </section>
  );
}

/* COMPONENTS */

function CapabilityCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
      <h4 className="text-xl font-semibold">
        {title}
      </h4>
      <p className="mt-4 text-foreground/70 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function ClientImage({
  name,
  category,
  image,
}: {
  name: string;
  category: string;
  image: string;
}) {
  return (
    <div className="relative h-[420px] rounded-[32px] overflow-hidden bg-black">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <div className="absolute bottom-8 left-8">
        <p className="text-sm uppercase tracking-widest text-foreground/60">
          {category}
        </p>
        <h4 className="mt-2 text-3xl font-bold">
          {name}
        </h4>
      </div>
    </div>
  );
}

function Reason({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div>
      <h4 className="text-lg font-semibold">
        {title}
      </h4>
      <p className="mt-3 text-foreground/70 leading-relaxed">
        {text}
      </p>
    </div>
  );
}
