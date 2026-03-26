/*
 * Apply / Contact CTA Section — Rooted by Gunjan Vermani
 * Coastal Organic: Teal-to-dark gradient, compelling CTA,
 * simple contact form or application prompt.
 */
import SectionReveal from "@/components/SectionReveal";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function ApplySection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — in production this would connect to a backend
    setSubmitted(true);
    toast.success("Application received! We'll be in touch soon.");
  };

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Copy */}
          <SectionReveal>
            <div>
              <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Take the First Step
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Ready to Build Something{" "}
                <span className="text-gold italic">Rooted?</span>
              </h2>
              <p className="text-lg text-white/75 leading-relaxed mb-8">
                Apply for your founding member spot today. We'll review your application
                and schedule a quick chat to make sure Rooted is the right fit for you.
                No pressure, no hard sell — just an honest conversation about your goals.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-gold text-xs font-bold">1</span>
                  </div>
                  <p className="text-white/70 text-[15px]">
                    <strong className="text-white">Fill out the application</strong> — takes less than 2 minutes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-gold text-xs font-bold">2</span>
                  </div>
                  <p className="text-white/70 text-[15px]">
                    <strong className="text-white">We'll reach out</strong> within 24 hours to schedule a chat
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-gold text-xs font-bold">3</span>
                  </div>
                  <p className="text-white/70 text-[15px]">
                    <strong className="text-white">Secure your spot</strong> and start your journey on April 15
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Right: Form */}
          <SectionReveal delay={200}>
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={48} className="text-teal mx-auto mb-4" />
                  <h3
                    className="text-2xl font-bold text-charcoal mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Application Received!
                  </h3>
                  <p className="text-charcoal/60 leading-relaxed">
                    Thank you for your interest in Rooted. We'll review your application
                    and be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="text-xl font-bold text-charcoal mb-6"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Apply for Founding Membership
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-charcoal/70 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[oklch(0.9_0.02_80)] bg-cream/50 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/50 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal/70 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[oklch(0.9_0.02_80)] bg-cream/50 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/50 transition-all"
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal/70 mb-1.5">
                        Your Business / Clinic
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.business}
                        onChange={(e) =>
                          setFormData({ ...formData, business: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[oklch(0.9_0.02_80)] bg-cream/50 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/50 transition-all"
                        placeholder="Clinic name or description"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal/70 mb-1.5">
                        What's your biggest challenge right now?
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-[oklch(0.9_0.02_80)] bg-cream/50 text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal/50 transition-all resize-none"
                        placeholder="Tell us briefly..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-teal text-white font-semibold rounded-full text-base transition-all duration-300 hover:bg-teal-dark hover:shadow-xl hover:shadow-teal/20 hover:-translate-y-0.5"
                    >
                      <Send size={16} />
                      Submit Application
                    </button>
                  </form>
                </>
              )}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
