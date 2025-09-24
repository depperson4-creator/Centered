"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const LOGO_SVG = (
  <svg viewBox="0 0 100 100" className="h-10 w-10" aria-hidden="true">
    <circle cx="50" cy="50" r="40" stroke="#184A3A" strokeWidth="6" fill="none" />
    <path d="M50 26 v48" stroke="#BE8A2F" strokeWidth="6" strokeLinecap="round" />
    <path d="M35 46 h30" stroke="#BE8A2F" strokeWidth="6" strokeLinecap="round" />
  </svg>
);

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Page() {
  const calendly = "https://calendly.com/centered-relationships/discovery-call"; // TODO: replace with your actual Calendly link

  return (
    <div className="min-h-screen w-full scroll-smooth bg-[#F6F3EC] text-[#132A24]">
      {/* Promo Banner (clickable) */}
      <a href="#contact" className="block cursor-pointer bg-[#BE8A2F] py-2 px-4 text-center text-sm font-semibold text-white hover:opacity-95">
        🎉 Limited Time Offer: One-on-one coaching sessions 50% off! $100/hr → $50/hr • Six one-hour weekly sessions for $275 — Tap to inquire
      </a>

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[#F6F3EC]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            {LOGO_SVG}
            <div className="leading-tight">
              <p className="font-serif text-xl tracking-wide">CENTERED</p>
              <p className="text-xs uppercase tracking-widest text-[#184A3A]">
                Relationship Coaching & Ministries
              </p>
            </div>
          </div>
          <nav className="hidden gap-6 md:flex">
            <a href="#mission" className="hover:opacity-80">Mission</a>
            <a href="#services" className="hover:opacity-80">Services</a>
            <a href="#programs" className="hover:opacity-80">Programs</a>
            <a href="#testimony" className="hover:opacity-80">Stories</a>
            <a href="#contact" className="hover:opacity-80">Contact</a>
          </nav>
          <div className="hidden md:block">
            <Button className="rounded-2xl bg-[#184A3A] px-5 text-[#F6F3EC] hover:bg-[#133a2d]" asChild>
              <a href={calendly} target="_blank" rel="noreferrer noopener">Book a Call</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">
              Helping to Build <span className="text-[#184A3A]">Christ‑Centered</span> Relationships that Last
            </h1>
            <p className="max-w-prose text-lg text-[#2B4B43]">
              Biblically Grounded coaching for individuals and couples—whether you’re preparing for a Godly marriage,
              strengthening a new relationship, or repairing what’s been broken.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-2xl bg-[#184A3A] px-5 text-[#F6F3EC] hover:bg-[#133a2d]" asChild>
                <a href={calendly} target="_blank" rel="noreferrer noopener">Book a Call</a>
              </Button>
              <Button variant="outline" className="rounded-2xl border-[#184A3A] text-[#184A3A] hover:bg-[#184A3A]/5" asChild>
                <a href="#services">Explore Services</a>
              </Button>
            </div>
            <p className="text-sm text-[#6B6B6B]">Serving online + in person (by appointment)</p>
          </motion.div>
          <div className="flex items-center justify-center md:justify-end">
            <Card className="w-full max-w-md rounded-2xl border-none bg-[#184A3A]/5 p-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  {LOGO_SVG}
                  <div>
                    <p className="font-semibold">Centered Relationship Coaching & Ministries</p>
                    <p className="text-sm text-[#2B4B43]">Christ at the Center • Scripture as our Guide</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-[#2B4B43]">
                  <li>• 1:1 Coaching • Pre‑Marital Coaching</li>
                  <li>• 1:1 Relationship Coaching • Couples Mediation</li>
                  <li>• Small‑Group Workshops • Retreats • Church Partnerships</li>
                  <li>• Printable resources + study guides</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="border-y border-black/5 bg-white/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl">Our Mission</h2>
            <p className="mt-4 text-lg text-[#2B4B43]">
              At <span className="font-semibold">Centered Relationship Coaching and Ministries</span>, our mission is to help individuals and couples build—or rebuild—relationships that are <span className="font-semibold">Centered in Christ</span>.
              We guide you in unlearning the world’s teachings on love and embracing God’s design for it, providing the foundation, tools, and support to cultivate Christ‑Centered relationships that last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-serif text-3xl">Services</h2>
          <p className="mt-2 text-lg text-[#B45309] font-semibold">🎉 Now offering services at 50% off!</p>
          <p className="mt-1 text-[#2B4B43]">One‑on‑one coaching sessions: <span className="font-semibold">$100/hr</span> → <span className="font-semibold">$50/hr</span>.</p>
          <p className="mt-1 text-[#2B4B43]">Six one‑hour sessions (one per week): <span className="font-semibold">$275 total</span>.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { title: "Pre‑Marital Coaching", desc: "A structured, Biblical path to prepare for a Godly marriage." },
              { title: "1:1 Coaching", desc: "Personalized guidance to grow healthier patterns Centered in Christ." },
              { title: "1:1 Relationship Coaching", desc: "Helping you strengthen communication, trust, and Christ‑Centered connection." },
              { title: "Couples Mediation", desc: "Faith‑based conflict resolution to restore harmony and rebuild understanding." },
            ].map((s, i) => (
              <Card key={i} className="rounded-2xl border-[#184A3A]/20 bg-white/70 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl">{s.title}</h3>
                  <p className="mt-2 text-[#2B4B43]">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs / Study Guide */}
      <section id="programs" className="border-y border-black/5 bg-[#184A3A]/5">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-serif text-3xl">Programs & Resources</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl border-[#184A3A]/20 bg-white/80">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl">4–6 Week Small-Group Study</h3>
                <p className="mt-2 text-[#2B4B43]">
                  A guided study to prepare for a Godly marriage—complete with weekly handouts, Scripture breakdowns,
                  and discussion prompts. Perfect for small groups, Pre-Marital classes, or retreats.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-[#184A3A]/20 bg-white/80">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl">Church & Ministry Partnerships</h3>
                <p className="mt-2 text-[#2B4B43]">
                  Workshops, sermons, and coaching tailored for your congregation. Let’s equip couples to put Christ at the
                  Center of their covenant.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stories of Renewal */}
      <section id="testimony" className="">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-serif text-3xl">Stories of Renewal</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl border-[#184A3A]/20 bg-white/90 shadow-md">
              <CardContent className="p-6">
                <div className="mb-3 text-[#BE8A2F]">⭐⭐⭐⭐⭐</div>
                <p className="italic text-lg text-[#2B4B43]">“Denise gave really thoughtful advice. I appreciated how she stayed non‑biased, explained things clearly, and helped me see both perspectives instead of just one side. The conversation felt fair and balanced, and I would highly recommend Denise's services to anyone seeking honest and supportive advice.”</p>
                <p className="mt-3 text-sm font-semibold text-[#184A3A]">— J. Spooner, Texas</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-[#184A3A]/20 bg-white/90 shadow-md">
              <CardContent className="p-6">
                <div className="mb-3 text-[#BE8A2F]">⭐⭐⭐⭐⭐</div>
                <p className="italic text-lg text-[#2B4B43]">“Patience, kindness, and a truly good listener, all in one person. Denise is very intelligent, thoughtful, and not swayed by what social media has to say. She loves God and always encourages seeking Him first. It has been honorable to speak with her, and I value the fact that whenever I reach out, she responds with care. Thank you very much, Denise. I can't say it enough. I deeply appreciate your kindness.”</p>
                <p className="mt-3 text-sm font-semibold text-[#184A3A]">— C.C. Ndibe, Nigeria</p>
              </CardContent>
            </Card>
            {/* Add more reviews here; they will wrap to rows of three on md+ screens */}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-10">
          <div className="rounded-2xl bg-[#184A3A] p-8 text-[#F6F3EC] shadow-md">
            <div className="grid items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-serif text-2xl">Ready to take the next step?</h3>
                <p className="mt-2 opacity-90">Schedule a free discovery call to see how we can serve you.</p>
              </div>
              <div className="flex gap-3 md:justify-end">
                <Button className="rounded-2xl bg-white px-5 text-[#184A3A] hover:bg-white/90" asChild>
                  <a href={calendly} target="_blank" rel="noreferrer noopener">Book a Call</a>
                </Button>
                <Button variant="outline" className="rounded-2xl border-white text-white hover:bg-white/10" asChild>
                  <a href="#contact">Ask a Question</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-black/5 bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-serif text-3xl">Contact</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input placeholder="Full name" />
                <Input type="email" placeholder="Email address" />
              </div>
              <Textarea placeholder="How can we serve you?" className="min-h-[140px]" />
              <Button className="rounded-2xl bg-[#184A3A] px-5 text-[#F6F3EC] hover:bg-[#133a2d]" asChild>
                <a href="mailto:lady-nise@hotmail.com">Send Message</a>
              </Button>
              <p className="text-xs text-[#6B6B6B]">By submitting, you agree to be contacted about coaching and ministry services.</p>
            </form>
            <div className="space-y-4">
              <Card className="rounded-2xl border-[#184A3A]/20 bg-white/80">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl">Connect</h3>
                  <ul className="mt-3 space-y-2 text-[#2B4B43]">
                    <li><span className="font-semibold">Email:</span> lady-nise@hotmail.com</li>
                    <li><span className="font-semibold">Instagram:</span> @centered.relationships</li>
                  </ul>
                </CardContent>
              </Card>
              <p className="text-sm text-[#6B6B6B]">© {new Date().getFullYear()} Centered Relationship Coaching & Ministries. All rights reserved.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
