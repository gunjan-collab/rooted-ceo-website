/*
 * FAQ Section — Rooted by Gunjan Vermani
 * Coastal Organic: Clean white background, accordion style,
 * warm and approachable tone.
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
    a: "Rooted is specifically designed for healthcare professionals — particularly physiotherapists and clinic owners — who want to grow their business without sacrificing their personal relationships or quality of life. Whether you're a solo practitioner looking to scale or a multi-location owner wanting better systems, this program is for you.",
  },
  {
    q: "I'm already busy. How much time does this require?",
    a: "We designed Rooted for busy professionals. The weekly coaching call is about 90 minutes, and we recommend setting aside 2-3 hours per week for implementation. The whole point of the program is to help you work smarter, not harder — so the time you invest here will save you many more hours in the long run.",
  },
  {
    q: "What makes this different from other business coaching programs?",
    a: "Three things: First, it's built by a healthcare professional who has actually scaled clinics — not a generic business coach. Second, work-family harmony isn't an afterthought; it's at the centre of everything we teach. Third, you get personalised guidance, not just pre-recorded content. Every session is live and interactive.",
  },
  {
    q: "What if I can't make every live call?",
    a: "All coaching calls are recorded and shared within 24 hours. While we strongly encourage live attendance for the interactive coaching and hot-seat opportunities, we understand that life happens. You'll have lifetime access to all recordings and materials.",
  },
  {
    q: "Is there a payment plan available?",
    a: "Yes! You can pay in full at $2,497 or choose our 3-payment plan of $897/month. Both options give you full access to everything in the program from day one.",
  },
  {
    q: "What results can I realistically expect?",
    a: "Results vary based on your starting point and how consistently you implement. However, our framework is designed to help you build predictable marketing and sales systems, create operational efficiency, and establish work-family harmony. Most members see meaningful progress within the first 4-6 weeks.",
  },
  {
    q: "What does 'founding member' mean?",
    a: "As a founding member, you're joining the very first cohort of Rooted. This means you get the lowest price the program will ever be offered at, the most direct access to Gunjan, and the opportunity to shape the program as it evolves. Future cohorts will be priced significantly higher.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Absolutely. If you attend the first 4 weeks of coaching, implement the action plans, and don't feel the program is delivering value, we'll refund your investment in full. We're confident in what we deliver, and we want you to feel confident too.",
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
