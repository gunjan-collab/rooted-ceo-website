/*
 * What You Get Section — Rooted by Gunjan Vermani
 * Coastal Organic: Sage-tinted background, staggered cards,
 * community photo, warm and inviting.
 */
import SectionReveal from "@/components/SectionReveal";
import { Video, BookOpen, ClipboardCheck, Users } from "lucide-react";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663296082498/aM8ZgGf6JiNZR9Y6FwrVXy/community-photo-L6Vikay5Rtx9VSoUHuBQ3U.webp";

const features = [
  {
    icon: Video,
    title: "Weekly Group Coaching Calls",
    description:
      "Live sessions with Gunjan where you get personalised guidance, hot-seat coaching, and real-time problem-solving for your business challenges.",
    highlight: "Every week, same time — consistency breeds results.",
  },
  {
    icon: BookOpen,
    title: "Proven Frameworks & Templates",
    description:
      "Battle-tested marketing scripts, sales frameworks, financial models, and operational playbooks that Gunjan used to scale multiple clinics.",
    highlight: "No theory — only what's actually worked.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalised Action Plans",
    description:
      "Walk away from every session with clear, specific next steps tailored to your stage of business. No overwhelm — just focused progress.",
    highlight: "Know exactly what to do next, every single week.",
  },
  {
    icon: Users,
    title: "Private Community of Peers",
    description:
      "Connect with a curated group of ambitious healthcare professionals who understand your world. Share wins, get support, and grow together.",
    highlight: "You're not alone on this journey anymore.",
  },
];

export default function WhatYouGetSection() {
  return (
    <section id="what-you-get" className="py-20 md:py-28 bg-sage/40">
      <div className="container">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Inside the Program
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
              Everything You Need to{" "}
              <span className="text-teal italic">Grow</span>
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Rooted isn't just another course. It's a hands-on coaching experience
              designed to give you the clarity, tools, and support to transform your business.
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Features list */}
          <div className="space-y-6">
            {features.map((feature, i) => (
              <SectionReveal key={feature.title} delay={i * 100}>
                <div className="group bg-white rounded-2xl p-6 md:p-7 shadow-sm border border-[oklch(0.9_0.02_80)] transition-all duration-500 hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                      <feature.icon size={22} className="text-teal" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-charcoal mb-2"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-charcoal/65 leading-relaxed text-[15px] mb-2">
                        {feature.description}
                      </p>
                      <p className="text-teal text-sm font-medium italic">
                        {feature.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Community image */}
          <SectionReveal delay={200}>
            <div className="relative lg:sticky lg:top-28">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={COMMUNITY_IMG}
                  alt="Rooted coaching community collaborating"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-teal text-white rounded-2xl p-5 shadow-lg shadow-teal/20">
                <p className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>12+</p>
                <p className="text-sm text-white/80">Weeks of<br />Coaching</p>
              </div>
              {/* Decorative gold accent */}
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border-2 border-gold/30" />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
