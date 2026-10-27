"use client";

import type React from "react";
import { useState } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import { site } from "@/lib/site";

const contactItems = [
  {
    icon: Mail,
    label: "Email us",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "We typically reply within 2 hours",
  },
  {
    icon: Phone,
    label: "Call us",
    value: site.phone,
    href: site.phoneHref,
    note: "Mon–Fri, 24/7",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Addis Ababa, Ethiopia",
    note: "Bole City",
  },
];

const hours = [
  { day: "Monday – Friday", time: "24/7" },
  { day: "Saturday", time: "12:00 AM – 6:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  // There is no backend, so the message is handed to the visitor's email
  // client, pre-filled and addressed to the team.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Website enquiry from ${formData.name}`;
    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSent(false);
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact-heading"
          eyebrow="Get in touch"
          title="We'd love to hear from you"
          description="Have questions about our products? We're here to listen and help you find your perfect comfort match."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="space-y-6">
            <ul className="divide-y divide-border rounded-3xl border border-border bg-card">
              {contactItems.map((item) => (
                <li key={item.label} className="flex items-start gap-4 p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-rose-soft text-rose-soft-foreground">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-0.5 block break-all font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-0.5 font-semibold text-foreground">
                        {item.value}
                      </p>
                    )}
                    <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-3xl border border-border bg-card p-6">
              <h3 className="flex items-center gap-2 font-sans text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                <Clock className="size-4 text-primary" aria-hidden="true" />
                Opening hours
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                {hours.map((row) => (
                  <div key={row.day} className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">{row.day}</dt>
                    <dd className="font-medium text-foreground">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              aria-label="Contact form"
              className="h-full rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                Send us a message
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We&apos;ll get back to you as soon as possible.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className={`${fieldClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto"
              >
                Send message
                <Send className="size-4" aria-hidden="true" />
              </button>

              <p
                role="status"
                className="mt-4 flex min-h-5 items-center gap-2 text-sm text-muted-foreground"
              >
                {sent && (
                  <>
                    <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
                    Your email app should open with the message ready to send.
                  </>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
