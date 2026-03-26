/*
 * Testimonials Section — Rooted by Gunjan Vermani
 * Coastal Organic: Teal background, white cards, organic feel,
 * placeholder testimonials ready to be replaced.
 */
import SectionReveal from "@/components/SectionReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah M.",
    role: "Physiotherapy Clinic Owner",
    quote:
      "Before Rooted, I was working 60-hour weeks and barely seeing my kids. Gunjan's frameworks helped me build systems that grew my revenue by 40% while cutting my hours in half. I finally feel like I have my life back.",
    initials: "SM",
  },
  {
    name: "James K.",
    role: "Multi-Location Clinic Director",
    quote:
      "The Four Pillars approach changed everything for me. I went from being the bottleneck in my business to having a team that runs things beautifully. The sales framework alone paid for the program ten times over.",
    initials: "JK",
  },
  {
    name: "Dr. Priya R.",
    role: "Solo Practitioner turned Clinic Owner",
    quote:
      "I was terrified of scaling because I thought it meant sacrificing my family time. Gunjan showed me it doesn't have to be that way. I opened my second location last month and I've never been more present at home.",
    initials: "PR",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-teal relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container relative">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Success Stories
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Hear From Those Who've{" "}
              <span className="text-gold italic">Grown</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Real results from healthcare professionals who chose to invest in themselves
              and their businesses through Rooted.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 120}>
              <div className="bg-white rounded-2xl p-7 md:p-8 shadow-lg h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="text-gold fill-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative flex-1 mb-6">
                  <Quote size={32} className="text-teal/10 absolute -top-1 -left-1" />
                  <p className="text-charcoal/75 leading-relaxed text-[15px] relative z-10 pl-2">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-[oklch(0.9_0.02_80)]">
                  <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                    <span className="text-teal font-semibold text-sm">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{t.name}</p>
                    <p className="text-charcoal/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Note about placeholder */}
        <SectionReveal delay={400}>
          <p className="text-center text-white/40 text-sm mt-10 italic">
            * Testimonials shown are representative examples. Real testimonials will be added as the program launches.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
