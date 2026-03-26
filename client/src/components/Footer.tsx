/*
 * Footer — Rooted by Gunjan Vermani
 * Coastal Organic: Dark teal background, warm gold accents,
 * logo, navigation, and social links.
 */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663296082498/aM8ZgGf6JiNZR9Y6FwrVXy/logo_rooted_v1_30d1abff.png";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Program", href: "#pillars" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Apply Now", href: "#apply" },
];

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.2_0.04_195)] text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Logo & tagline */}
          <div className="md:col-span-1">
            <img
              src={LOGO_URL}
              alt="Rooted by Gunjan Vermani"
              className="h-14 w-auto mb-4 brightness-0 invert opacity-90"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Helping ambitious entrepreneurs build successful businesses without
              sacrificing their relationships or their life.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 text-sm hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3 text-white/50 text-sm">
              <p>
                Have questions? Reach out at{" "}
                <a
                  href="mailto:gunjanvermanicoach@gmail.com"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  gunjanvermanicoach@gmail.com
                </a>
              </p>
              <p>
                Program starts{" "}
                <span className="text-white/70 font-medium">April 15, 2026</span>
              </p>
            </div>

            {/* CTA */}
            <a
              href="#apply"
              className="inline-flex items-center justify-center mt-6 px-6 py-2.5 border border-gold/40 text-gold text-sm font-medium rounded-full transition-all duration-300 hover:bg-gold/10 hover:border-gold/60"
            >
              Apply Now
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Rooted by Gunjan Vermani. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 text-xs hover:text-white/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
