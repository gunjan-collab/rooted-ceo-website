/*
 * Outcomes Section — Rooted by Gunjan Vermani
 * Coastal Organic: Watercolor background texture, warm outcomes,
 * organic feel with gold accents.
 */
import SectionReveal from "@/components/SectionReveal";
import { TrendingUp, Clock, Heart, Shield, Zap, Users } from "lucide-react";

const OUTCOMES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663296082498/aM8ZgGf6JiNZR9Y6FwrVXy/outcomes-bg-jSuaLDF9Gv3r5LEHNX4rkZ.webp";

const outcomes = [
  {
    icon: TrendingUp,
    title: "Predictable Revenue Growth",
    description: "Build a marketing and sales engine that consistently brings in new patients and revenue — so you stop riding the feast-or-famine rollercoaster.",
  },
  {
    icon: Clock,
    title: "Time Freedom",
    description: "Create systems that let your business run without you being there every minute. Take holidays. Be present for school pickups. Breathe.",
  },
  {
    icon: Heart,
    title: "Stronger Relationships",
    description: "Stop bringing work stress home. Learn to be fully present with your family while knowing your business is thriving in the background.",
  },
  {
    icon: Shield,
    title: "Unshakeable Confidence",
    description: "Know exactly what to do at every stage of growth. No more second-guessing, no more imposter syndrome — just clear, decisive action.",
  },
  {
    icon: Zap,
    title: "Scalable Operations",
    description: "Move from being the bottleneck to being the visionary. Build a team and systems that multiply your impact beyond your personal capacity.",
  },
  {
    icon: Users,
    title: "A Supportive Network",
    description: "Surround yourself with peers who get it — healthcare professionals building something meaningful while staying true to what matters.",
  },
];

export default function OutcomesSection() {
  return (
    <section
      id="outcomes"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Watercolor background */}
      <div className="absolute inset-0">
        <img
          src={OUTCOMES_BG}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-cream/80" />
      </div>

      <div className="container relative">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Your Transformation
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
              What Life Looks Like{" "}
              <span className="text-teal italic">After</span> Rooted
            </h2>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              Imagine running a thriving clinic while being fully present for the people
              you love. That's not a fantasy — it's the outcome our framework is designed to create.
            </p>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {outcomes.map((outcome, i) => (
            <SectionReveal key={outcome.title} delay={i * 80}>
              <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-7 border border-[oklch(0.9_0.02_80)] transition-all duration-500 hover:bg-white hover:shadow-lg hover:shadow-teal/5 hover:-translate-y-1 h-full">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-teal/15 to-gold/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <outcome.icon size={20} className="text-teal" />
                </div>
                <h3
                  className="text-lg font-bold text-charcoal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {outcome.title}
                </h3>
                <p className="text-charcoal/60 leading-relaxed text-[15px]">
                  {outcome.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
