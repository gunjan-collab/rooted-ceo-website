/*
 * FAQ Section — Rooted by Gunjan Vermani
 * Healthcare-focused pillars. Pricing removed from site.
 */
import SectionReveal from "@/components/SectionReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who is this program designed for?",
    a: "Rooted is specifically designed for healthcare professionals — particularly physiotherapists and clinic owners — who want to grow their business without sacrificing their personal relationships or quality of life. Whether you're a solo practitioner looking to scale, a multi-location owner wanting better systems, or a clinic director stepping into a leadership role, this program is for you.",
  },
  {
    q: "I'm already busy. How much time does this require?",
    a: "We designed Rooted for busy professionals. The weekly coaching call is about 90 minutes, and we recommend setting aside 2-3 hours per week for implementation. The whole point of the program is to help you work smarter, not harder — so the time you invest here will save you many more hours in the long run.",
  },
  {
    q: "What makes this different from other business coaching programs?",
    a: "Three things: First, it's built by a healthcare professional who has actually scaled 9 clinics — not a generic business coach. Second, work-family harmony isn't an afterthought; it's at the centre of everything we teach. Third, you get personalised guidance through our four healthcare-focused pillars — People & Team, Communication & Leadership, Systems & Operations, and Growth & Harmony — not just pre-recorded content.",
  },
  {
    q: "What if I can't make every live call?",
    a: "All coaching calls are recorded and shared within 24 hours. While we strongly encourage live attendance for the interactive coaching and hot-seat opportunities, we understand that life happens. You'll have access to all recordings and materials throughout your membership.",
  },
  {
    q: "What results can I realistically expect?",
    a: "Results vary based on your starting point and how consistently you implement. Our structured 12-month journey takes you from Foundation (mindset and delegation) through Systems and Leadership to Scale & Culture. Most members see meaningful progress within the first 4-6 weeks, and by month 6, you'll have systems running that free up significant time.",
  },
  {
    q: "What does the 12-month journey look like?",
    a: "Months 1-3 focus on Foundation — shifting your identity from clinician to CEO, auditing your time, and building daily habits. Months 4-6 focus on Systems — clarifying your offer, building growth systems, and creating SOPs. Months 7-9 focus on Leadership — installing decision frameworks and empowering your team. Months 10-12 focus on Scale & Culture — building a business that runs without you and achieving work-family harmony.",
  },
  {
    q: "How do I get started?",
    a: "Simply click the Apply Now button or email Gunjan directly at gunjanvermanicoach@gmail.com. She'll schedule a quick conversation to learn about your goals, answer your questions, and make sure Rooted is the right fit for you. No pressure, no hard sell.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gold-dark text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              Frequently Asked{" "}
              <span className="text-teal italic">Questions</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-cream/60 rounded-xl border border-[oklch(0.9_0.02_80)] px-6 data-[state=open]:shadow-sm transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left text-charcoal font-semibold text-[15px] md:text-base hover:text-teal transition-colors py-5 [&[data-state=open]]:text-teal">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-charcoal/65 leading-relaxed text-[15px] pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
