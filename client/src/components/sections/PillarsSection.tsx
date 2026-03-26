/*
 * Four Pillars Section — Rooted by Gunjan Vermani
 * Coastal Organic: Healthcare-focused pillars with Work-Family Harmony at centre.
 * Pillars: People & Team, Communication & Leadership, Systems & Operations, Growth & Harmony
 */
import SectionReveal from "@/components/SectionReveal";
import { Users, MessageCircle, Settings, TrendingUp, Heart } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "People & Team",
    description:
      "Build a high-performing team by understanding each person's natural strengths. Master delegation, hire strategically, and create a culture where your team thrives — so your business isn't capped by your personal capacity.",
    highlights: ["Team strengths assessment", "Strategic delegation", "Right people, right seats"],
  },
  {
    icon: MessageCircle,
    title: "Communication & Leadership",
    description:
      "Shift from clinician to confident CEO. Lead with clarity, empower your team to make decisions, and build authentic relationships that drive results — without micromanaging every detail.",
    highlights: ["Decision frameworks", "Empowered leadership", "Clinician-to-CEO identity shift"],
  },
  {
    icon: Settings,
    title: "Systems & Operations",
    description:
      "Build a business that runs without you being there every minute. Create documented playbooks, streamlined processes, and operational systems that deliver consistent results — even when you step away.",
    highlights: ["SOPs & playbooks", "Operational independence", "Consistent patient experience"],
  },
  {
    icon: TrendingUp,
    title: "Growth & Harmony",
    description:
      "Scale sustainably without sacrificing what matters most. Build predictable revenue, eliminate chaos, and create a business that supports your life — not one that consumes it.",
    highlights: ["Sustainable scaling", "Predictable revenue", "Work-family harmony"],
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="py-20 md:py-28 bg-sand relative overflow-hidden">
      <div className="container relative">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-6">
            <p className="text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              The Rooted Framework
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
              Four Pillars, One{" "}
              <span className="text-teal italic">Rooted</span> Life
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Every successful healthcare business needs these four pillars working in
              harmony. At the centre of it all? The thing most programs ignore — your
              relationships and your life.
            </p>
          </div>
        </SectionReveal>

        {/* Centre harmony badge */}
        <SectionReveal delay={50}>
          <div className="flex justify-center my-10">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-teal/10 via-gold/10 to-teal/10 border border-teal/20">
              <Heart size={18} className="text-gold" />
              <span
                className="text-teal font-bold text-sm tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Work-Family Harmony at the Centre
              </span>
              <Heart size={18} className="text-gold" />
            </div>
          </div>
        </SectionReveal>

        {/* Pillar cards in 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 100 + 100}>
              <div className="group bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-[oklch(0.9_0.02_80)] transition-all duration-500 hover:shadow-lg hover:shadow-teal/5 hover:-translate-y-1 h-full">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal/15 transition-colors">
                    <pillar.icon size={22} className="text-teal" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold text-charcoal mb-3"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-charcoal/65 leading-relaxed text-[15px] mb-4">
                      {pillar.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pillar.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-teal/8 text-teal border border-teal/10"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
