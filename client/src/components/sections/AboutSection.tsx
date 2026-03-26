/*
 * About Gunjan Section — Rooted by Gunjan Vermani
 * Coastal Organic: Asymmetric layout with portrait image,
 * warm storytelling tone, gold accent details.
 */
import SectionReveal from "@/components/SectionReveal";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663296082498/aM8ZgGf6JiNZR9Y6FwrVXy/about-gunjan-DyfLfAJrC6PWdFcWt243hD.webp";

const stats = [
  { value: "10+", label: "Years in Healthcare" },
  { value: "Multiple", label: "Clinics Scaled" },
  { value: "100+", label: "Professionals Mentored" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Image side */}
          <SectionReveal>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={ABOUT_IMG}
                  alt="Gunjan Vermani — Founder of Rooted"
                  className="w-full h-auto object-cover aspect-[3/4]"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl border-2 border-gold/25 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-teal/15 -z-10" />
            </div>
          </SectionReveal>

          {/* Content side */}
          <SectionReveal delay={150}>
            <div>
              <p className="text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Meet Your Coach
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
                Hi, I'm{" "}
                <span className="text-teal">Gunjan</span>
              </h2>

              <div className="space-y-5 text-charcoal/75 leading-relaxed text-[16px]">
                <p>
                  I'm a healthcare professional who built and scaled multiple physiotherapy
                  clinics from the ground up. I know what it's like to pour everything into
                  your business — the late nights, the missed dinners, the constant feeling
                  that you're falling behind somewhere.
                </p>
                <p>
                  After years of grinding, I discovered that the key to sustainable success
                  isn't working harder — it's building smarter. I developed systems for
                  marketing, sales, business models, and operations that allowed my clinics
                  to grow while I reclaimed my time and my relationships.
                </p>
                <p>
                  Now, through <strong className="text-charcoal">Rooted</strong>, I help other
                  healthcare professionals do the same. Because I believe you shouldn't have
                  to choose between building something incredible and being there for the
                  people who matter most.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-[oklch(0.9_0.02_80)]">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-teal" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-charcoal/50 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
