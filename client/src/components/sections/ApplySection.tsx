/*
 * Apply / Contact CTA Section — Rooted by Gunjan Vermani
 * Coastal Organic: Teal-to-dark gradient, compelling CTA,
 * mailto link to info@rooted-ceo.com
 */
import SectionReveal from "@/components/SectionReveal";
import { Mail, ArrowRight } from "lucide-react";

export default function ApplySection() {
  return (
    <section
      id="apply"
      className="py-20 md:py-28 bg-gradient-to-br from-teal-dark via-teal to-[oklch(0.42_0.1_195)] relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full border border-white/5" />
      <div className="absolute bottom-10 left-20 w-40 h-40 rounded-full border border-white/5" />
      <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-white/[0.02]" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <SectionReveal>
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Take the First Step
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Build Something{" "}
              <span className="text-gold italic">Rooted?</span>
            </h2>
            <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-2xl mx-auto">
              Reach out to start a conversation about joining Rooted. We'll chat about
              your goals, answer your questions, and make sure the program is the right
              fit for you. No pressure, no hard sell — just an honest conversation.
            </p>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="mailto:info@rooted-ceo.com?subject=Rooted%20Coaching%20—%20I'm%20Interested"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-charcoal font-semibold rounded-full text-lg transition-all duration-300 hover:bg-gold-dark hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
              >
                <Mail size={20} />
                Apply Now
                <ArrowRight size={18} />
              </a>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="space-y-6">
              {/* Steps */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <span className="text-gold text-sm font-bold">1</span>
                  </div>
                  <p className="text-white/80 text-[15px]">
                    <strong className="text-white">Send us an email</strong>
                  </p>
                </div>
                <div className="hidden sm:block w-8 h-px bg-white/20" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <span className="text-gold text-sm font-bold">2</span>
                  </div>
                  <p className="text-white/80 text-[15px]">
                    <strong className="text-white">We'll schedule a chat</strong>
                  </p>
                </div>
                <div className="hidden sm:block w-8 h-px bg-white/20" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <span className="text-gold text-sm font-bold">3</span>
                  </div>
                  <p className="text-white/80 text-[15px]">
                    <strong className="text-white">Start your journey</strong>
                  </p>
                </div>
              </div>

              {/* Direct email display */}
              <p className="text-white/50 text-sm">
                Or email directly:{" "}
                <a
                  href="mailto:info@rooted-ceo.com"
                  className="text-gold underline underline-offset-2 hover:text-gold-dark transition-colors"
                >
                  info@rooted-ceo.com
                </a>
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
