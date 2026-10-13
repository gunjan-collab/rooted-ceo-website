/*
 * Pricing Section — Rooted by Gunjan Vermani
 * $699/month (no commitment, cancel anytime) or $7,500/year (saves $888)
 * Payment via e-transfer to info@rooted-ceo.com
 */
import SectionReveal from "@/components/SectionReveal";
import { Check, Mail } from "lucide-react";

const included = [
  "Weekly live group coaching calls with Gunjan for 12 months",
  "Complete Rooted Framework (People, Leadership, Systems, Growth)",
  "Personalised action plans after every session",
  "Proven templates, playbooks, and SOPs",
  "Private community access for ongoing support",
  "1-on-1 onboarding call with Gunjan",
  "Work-Family Harmony Audit & Roadmap",
  "12-month structured implementation journey",
  "Access to all program materials and updates",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-cream">
      <div className="container">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Pricing
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
              Invest in Your{" "}
              <span className="text-teal italic">Growth</span>
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Rooted is a 12-month weekly coaching program with no lock-in contracts.
              Choose the plan that works best for you and start building the business
              — and life — you deserve.
            </p>
          </div>
        </SectionReveal>

        {/* Two pricing cards side by side */}
        <SectionReveal delay={150}>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Monthly plan */}
            <div className="relative bg-white rounded-3xl shadow-lg border border-[oklch(0.9_0.02_80)] overflow-hidden">
              <div className="bg-teal/5 px-6 py-3 text-center">
                <span className="text-teal font-semibold text-sm tracking-wide uppercase">
                  Monthly Plan
                </span>
              </div>
              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-charcoal" style={{ fontFamily: "'Playfair Display', serif" }}>
                      $699
                    </span>
                    <span className="text-charcoal/50 text-base">/month</span>
                  </div>
                  <p className="text-teal font-semibold text-sm mt-3">
                    No commitment — cancel anytime
                  </p>
                  <p className="text-charcoal/40 text-xs mt-1">
                    No lock-in contracts. Stay because it works.
                  </p>
                </div>

                <div className="space-y-3.5 mb-8">
                  {included.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-teal" />
                      </div>
                      <span className="text-charcoal/75 text-[14px] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:info@rooted-ceo.com?subject=Rooted%20Coaching%20—%20Monthly%20Plan%20($699/month)&body=Hi%20Gunjan,%0A%0AI'm%20interested%20in%20the%20Rooted%20monthly%20plan%20at%20$699/month.%0A%0APlease%20send%20me%20the%20e-transfer%20details%20to%20get%20started.%0A%0AThanks!"
                  className="block w-full text-center px-8 py-4 bg-white text-teal font-semibold rounded-full text-base border-2 border-teal transition-all duration-300 hover:bg-teal hover:text-white hover:shadow-lg hover:shadow-teal/15 hover:-translate-y-0.5"
                >
                  Get Started — Monthly
                </a>
              </div>
            </div>

            {/* Annual plan */}
            <div className="relative bg-white rounded-3xl shadow-xl border border-gold/25 overflow-hidden">
              <div className="bg-gradient-to-r from-gold to-gold-dark px-6 py-3 text-center">
                <span className="text-white font-semibold text-sm tracking-wide uppercase">
                  Annual Plan — Best Value
                </span>
              </div>
              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-bold text-charcoal" style={{ fontFamily: "'Playfair Display', serif" }}>
                      $7,500
                    </span>
                    <span className="text-charcoal/50 text-base">/year</span>
                  </div>
                  <p className="text-charcoal/50 text-sm mt-3">
                    One payment, 12 months of coaching
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20">
                    <span className="text-sm text-gold-dark font-medium">
                      Save $888 compared to monthly
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5 mb-8">
                  {included.map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-gold-dark" />
                      </div>
                      <span className="text-charcoal/75 text-[14px] leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="mailto:info@rooted-ceo.com?subject=Rooted%20Coaching%20—%20Annual%20Plan%20($7,500/year)&body=Hi%20Gunjan,%0A%0AI'm%20interested%20in%20the%20Rooted%20annual%20plan%20at%20$7,500/year.%0A%0APlease%20send%20me%20the%20e-transfer%20details%20to%20get%20started.%0A%0AThanks!"
                  className="block w-full text-center px-8 py-4 bg-teal text-white font-semibold rounded-full text-base transition-all duration-300 hover:bg-teal-dark hover:shadow-xl hover:shadow-teal/20 hover:-translate-y-0.5"
                >
                  Get Started — Annual
                </a>
              </div>
            </div>

          </div>
        </SectionReveal>

        {/* E-transfer payment info */}
        <SectionReveal delay={250}>
          <div className="max-w-2xl mx-auto mt-10">
            <div className="bg-white rounded-2xl p-6 border border-[oklch(0.9_0.02_80)] shadow-sm text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Mail size={18} className="text-teal" />
                <p className="text-charcoal font-semibold text-sm">How to Pay</p>
              </div>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-2">
                Payment is made via <strong className="text-charcoal">e-transfer</strong> to:
              </p>
              <p className="text-teal font-bold text-base">
                info@rooted-ceo.com
              </p>
              <p className="text-charcoal/40 text-xs mt-3 leading-relaxed">
                Click "Get Started" above to email Gunjan directly. She'll confirm your spot
                and provide any details you need to complete your e-transfer.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Note below */}
        <SectionReveal delay={300}>
          <div className="max-w-2xl mx-auto mt-6 text-center">
            <p className="text-charcoal/50 text-sm leading-relaxed">
              Have questions about which plan is right for you?{" "}
              <a
                href="mailto:info@rooted-ceo.com?subject=Rooted%20Coaching%20—%20Question"
                className="text-teal font-medium underline underline-offset-2 hover:text-teal-dark transition-colors"
              >
                Reach out to Gunjan directly
              </a>{" "}
              for a no-pressure conversation about your goals.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
