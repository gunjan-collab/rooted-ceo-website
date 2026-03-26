/*
 * "Who This Is For" Section — Rooted by Gunjan Vermani
 * Coastal Organic: Warm cream background, asymmetric layout,
 * gold accent lines, organic feel.
 */
import SectionReveal from "@/components/SectionReveal";
import { Check } from "lucide-react";

const forYouItems = [
  "You're a physiotherapist or clinic owner who wants to grow your business — but not at the cost of your family or wellbeing",
  "You've hit a ceiling and know there's a better way to scale, but you're not sure what the next step is",
  "You're tired of figuring everything out alone and want a proven roadmap from someone who's been there",
  "You want to build systems that let your business thrive even when you step away",
  "You believe in work-family harmony — not choosing one over the other",
];

const notForYouItems = [
  "You're looking for a quick-fix or overnight success scheme",
  "You're not willing to invest time in building real systems",
  "You want someone to do the work for you instead of learning the skills yourself",
];

export default function WhoSection() {
  return (
    <section id="who-is-this-for" className="py-20 md:py-28 bg-cream">
      <div className="container">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Is This You?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              This Program Was Built for{" "}
              <span className="text-teal italic">You</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* For You */}
          <SectionReveal delay={100}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[oklch(0.9_0.02_80)] h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <Check className="text-teal" size={20} />
                </div>
                <h3 className="text-xl font-bold text-charcoal font-display" style={{ fontFamily: "'Playfair Display', serif" }}>
                  This is for you if...
                </h3>
              </div>
              <ul className="space-y-5">
                {forYouItems.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-charcoal/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* Not For You */}
          <SectionReveal delay={200}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-[oklch(0.9_0.02_80)] h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center">
                  <span className="text-charcoal/40 text-lg font-bold">×</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal font-display" style={{ fontFamily: "'Playfair Display', serif" }}>
                  This is not for you if...
                </h3>
              </div>
              <ul className="space-y-5">
                {notForYouItems.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-charcoal/20 shrink-0" />
                    <span className="text-charcoal/60 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Extra encouragement */}
              <div className="mt-8 pt-6 border-t border-[oklch(0.9_0.02_80)]">
                <p className="text-charcoal/70 leading-relaxed italic">
                  "If you're reading this page, you're already the kind of person who
                  invests in growth. That's exactly who we're looking for."
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
