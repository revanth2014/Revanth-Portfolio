"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let’s Build the Right System
          </h2>

          <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
            If you’re looking for quick hacks, I’m probably not a fit.
            If you want clarity, structure, and execution that compounds —
            we should talk.
          </p>

          {/* CONTACT DETAILS */}
          <div className="mt-10 space-y-6">
            <ContactItem
              label="Email"
              value="rvnthkumar820@gmail.com"
              href="mailto:rvnthkumar820@gmail.com"
            />

            <ContactItem
              label="Phone / WhatsApp"
              value="+91 8523048707 "
              href="tel:+918523048707"
            />

            <ContactItem
              label="LinkedIn"
              value="linkedin.com/in/revanth-kumar-dm"
              href="www.linkedin.com/in/revanth-kumar-dm"
            />
          </div>

          <p className="mt-10 text-sm text-foreground/50">
            I typically respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.18em] text-foreground/50">
        {label}
      </p>
      <a
        href={href}
        className="mt-1 inline-block text-lg font-medium text-foreground hover:underline"
      >
        {value}
      </a>
    </div>
  );
}
