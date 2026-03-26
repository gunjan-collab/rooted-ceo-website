/*
 * Pricing / Founding Member Section — Rooted by Gunjan Vermani
 * Coastal Organic: Premium card with gold accents,
 * founding member badge, urgency elements.
 */
import SectionReveal from "@/components/SectionReveal";
import { Check, Sparkles, Clock } from "lucide-react";

const included = [
  "12 weeks of live group coaching calls with Gunjan",
  "Complete Rooted Framework (Marketing, Sales, Models, Systems)",
  "Personalised action plans after every session",
  "Proven templates, scripts, and playbooks",
  "Private community access for ongoing support",
  "Bonus: 1-on-1 onboarding call with Gunjan",
  "Bonus: Work-Family Harmony Audit & Roadmap",
  "Lifetime access to all program materials and updates",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-cream">
      <div className="container">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Founding Member Offer
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
              Invest in Your{" "}
              <span className="text-teal italic">Growth</span>
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              As a founding member, you'll get exclusive pricing and direct access to Gunjan
              that won't be available once the program scales. This is your chance to get in early.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={150}>
          <div className="max-w-2xl mx-auto">
            {/* Pricing card */}
            <div className="relative bg-white rounded-3xl shadow-xl border border-gold/20 overflow-hidden">
              {/* Founding member badge */}
              <div className="bg-gradient-to-r from-gold to-gold-dark px-6 py-3 flex items-center justify-center gap-2">
                <Sparkles size={16} className="text-white" />
                <span className="text-white font-semibold text-sm tracking-wide uppercase">
                  Founding Member — Limited Spots
                </span>
                <Sparkles size={16} className="text-white" />
              </div>

              <div className="p-8 md:p-12">
                {/* Price */}
                <div className="text-center mb-10">
                  <p className="text-charcoal/50 text-sm mb-2">Founding member pricing</p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl md:text-6xl font-bold text-charcoal" style={{ fontFamily: "'Playfair Display', serif" }}>
                      $2,497
                    </span>
                  </div>
                  <p className="text-charcoal/50 text-sm mt-2">
                    or 3 payments of $897
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/5 border border-teal/15">
                    <span className="text-sm text-teal font-medium">
                      Save $1,000+ off future pricing
                    </span>
                  </div>
                </div>

                {/* What's included */}
                <div className="space-y-4 mb-10">
                  <p className="font-semibold text-charcoal text-sm uppercase tracking-wide">
                    Everything included:
                  </p>
                  {included.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-teal" />
                      </div>
                      <span className="text-charcoal/75 text-[15px] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#apply"
                  className="block w-full text-center px-8 py-4 bg-teal text-white font-semibold rounded-full text-lg transition-all duration-300 hover:bg-teal-dark hover:shadow-xl hover:shadow-teal/20 hover:-translate-y-0.5"
                >
                  Apply for Your Founding Spot
                </a>

                {/* Urgency */}
                <div className="mt-6 flex items-center justify-center gap-2 text-charcoal/50">
                  <Clock size={14} />
                  <span className="text-sm">
                    Program starts April 15, 2026 — Only a few founding spots remain
                  </span>
                </div>

                {/* Guarantee */}
                <div className="mt-8 pt-6 border-t border-[oklch(0.9_0.02_80)] text-center">
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    <strong className="text-charcoal/80">100% Satisfaction Guarantee.</strong>{" "}
                    If you attend the first 4 weeks and don't feel the program is right for you,
                    we'll refund your investment in full. No questions asked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
