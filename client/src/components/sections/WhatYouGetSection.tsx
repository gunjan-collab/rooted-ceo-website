/*
 * What You Get Section — Rooted by Gunjan Vermani
 * Coastal Organic: Sage-tinted background, staggered cards,
 * community photo, enriched with frameworks content.
 */
import SectionReveal from "@/components/SectionReveal";
import { Video, BookOpen, ClipboardCheck, Users, Calendar } from "lucide-react";

const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663296082498/aM8ZgGf6JiNZR9Y6FwrVXy/community-photo-L6Vikay5Rtx9VSoUHuBQ3U.webp";

const features = [
  {
    icon: Video,
    title: "Weekly Group Coaching Calls",
    description:
      "Live sessions with Gunjan where you get personalised guidance, hot-seat coaching, and real-time problem-solving — from team dynamics and delegation to operational systems and leadership development.",
    highlight: "Every week, same time — consistency breeds results.",
  },
  {
    icon: BookOpen,
    title: "Proven Frameworks & Playbooks",
    description:
      "Battle-tested delegation systems, team assessment tools, leadership frameworks, SOPs, and operational playbooks that Gunjan used to scale 9 clinics — adapted specifically for healthcare professionals.",
    highlight: "No theory — only what's actually worked in clinics.",
  },
  {
    icon: ClipboardCheck,
    title: "Personalised Action Plans",
    description:
      "Walk away from every session with clear, specific next steps tailored to your stage — whether you're building your first team, systematising operations, or scaling to multiple locations.",
    highlight: "Know exactly what to do next, every single week.",
  },
  {
    icon: Users,
    title: "Private Community of Peers",
    description:
      "Connect with a curated group of ambitious healthcare professionals who understand your world. Share wins, get support, and grow together in a space built for clinic owners.",
    highlight: "You're not alone on this journey anymore.",
  },
];

const journey = [
  { phase: "Months 1-3", title: "Foundation", items: ["Assess your identity and mindset shift from clinician to CEO", "Audit your time and begin strategic delegation", "Establish daily compound habits that build momentum", "Gain clarity on your biggest obstacles and goals"] },
  { phase: "Months 4-6", title: "Systems", items: ["Clarify your offer and eliminate low-margin services", "Build predictable growth systems for your clinic", "Assess team strengths and put the right people in the right seats", "Create SOPs and playbooks for consistent delivery"] },
  { phase: "Months 7-9", title: "Leadership", items: ["Install decision frameworks so your team leads without you", "Develop empowered leadership across your organisation", "Deepen your service to team and patients", "Clarify your unique positioning in your market"] },
  { phase: "Months 10-12", title: "Scale & Culture", items: ["Build culture systems that outlast your daily involvement", "Achieve operational independence — your business runs without you", "Create harmony across all areas of your life", "Become the exception in your market"] },
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
              Rooted isn't just another course. It's a hands-on, 12-month coaching experience
              designed to give you the clarity, tools, and support to transform your healthcare
              business — and your life.
            </p>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-20">
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
                <p className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>12</p>
                <p className="text-sm text-white/80">Months of<br />Coaching</p>
              </div>
              {/* Decorative gold accent */}
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full border-2 border-gold/30" />
            </div>
          </SectionReveal>
        </div>

        {/* 12-Month Journey */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar size={18} className="text-gold-dark" />
              <p className="text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase">
                Your 12-Month Journey
              </p>
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold text-charcoal"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Structured Path from Overwhelm to{" "}
              <span className="text-teal italic">Freedom</span>
            </h3>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {journey.map((phase, i) => (
            <SectionReveal key={phase.phase} delay={i * 100}>
              <div className="bg-white rounded-2xl p-6 border border-[oklch(0.9_0.02_80)] shadow-sm h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-teal text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-xs font-semibold text-teal tracking-wider uppercase">
                    {phase.phase}
                  </span>
                </div>
                <h4
                  className="text-lg font-bold text-charcoal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {phase.title}
                </h4>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[13px] text-charcoal/60 leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
