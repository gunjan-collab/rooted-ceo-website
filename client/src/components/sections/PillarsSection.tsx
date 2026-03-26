/*
 * Four Pillars Section — Rooted by Gunjan Vermani
 * Coastal Organic: Teal background with organic layout,
 * Four pillars (Marketing, Sales, Models, Systems) with
 * Work-Family Harmony at the centre.
 */
import SectionReveal from "@/components/SectionReveal";
import { TrendingUp, Target, LayoutGrid, Settings, Heart } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Marketing",
    description:
      "Attract the right patients and clients consistently with strategies that build trust and authority in your local market — without burning out on social media.",
    color: "teal",
  },
  {
    icon: Target,
    title: "Sales",
    description:
      "Convert enquiries into committed clients with ethical, relationship-first sales processes that feel natural — not pushy or salesy.",
    color: "gold",
  },
  {
    icon: LayoutGrid,
    title: "Models",
    description:
      "Design a business model that generates predictable revenue and scales beyond your personal capacity. Build offers that serve more people with less of your time.",
    color: "teal",
  },
  {
    icon: Settings,
    title: "Systems",
    description:
      "Create operational systems that let your clinic run smoothly — even when you step away. Automate, delegate, and systematise for freedom.",
    color: "gold",
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
              Every successful healthcare business needs these four pillars working in harmony.
              At the centre of it all? The thing most programs ignore — your relationships and your life.
            </p>
          </div>
        </SectionReveal>

        {/* Center circle — Work-Family Harmony */}
        <SectionReveal delay={100}>
          <div className="flex justify-center my-10">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-teal to-teal-dark flex flex-col items-center justify-center text-center shadow-xl shadow-teal/20 border-4 border-white">
              <Heart className="text-gold mb-2" size={26} fill="currentColor" />
              <span className="text-white font-bold text-base md:text-lg leading-tight px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Work-Family
                <br />
                Harmony
              </span>
              <span className="text-white/70 text-xs mt-1">at the centre</span>
            </div>
          </div>
        </SectionReveal>

        {/* Pillar cards in 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={150 + i * 100}>
              <div className="group bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-[oklch(0.9_0.02_80)] transition-all duration-500 hover:shadow-lg hover:shadow-teal/5 hover:-translate-y-1 h-full">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                    pillar.color === "teal"
                      ? "bg-teal/10 group-hover:bg-teal/15"
                      : "bg-gold/15 group-hover:bg-gold/20"
                  }`}
                >
                  <pillar.icon
                    size={24}
                    className={
                      pillar.color === "teal" ? "text-teal" : "text-gold-dark"
                    }
                  />
                </div>
                <h3
                  className="text-xl font-bold text-charcoal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-charcoal/65 leading-relaxed text-[15px]">
                  {pillar.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
