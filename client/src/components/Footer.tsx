/*
 * Footer — Rooted by Gunjan Vermani
 * Coastal Organic: Dark teal background, warm gold accents,
 * logo, navigation, visible email, and e-transfer info.
 */
import { Mail } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663296082498/aM8ZgGf6JiNZR9Y6FwrVXy/logo_rooted_v1_30d1abff.png";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Program", href: "#pillars" },
  { label: "What You Get", href: "#what-you-get" },
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
              Helping ambitious healthcare entrepreneurs build successful businesses without
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

          {/* Contact — prominently visible email */}
          <div>
            <h4 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
              Get in Touch
            </h4>

            {/* Prominent email display */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                  <Mail size={14} className="text-gold" />
                </div>
                <span className="text-white/60 text-xs uppercase tracking-wider font-medium">
                  Email & E-Transfer
                </span>
              </div>
              <a
                href="mailto:gunjanvermanicoach@gmail.com"
                className="text-gold font-semibold text-base hover:text-gold-light transition-colors block"
              >
                gunjanvermanicoach@gmail.com
              </a>
              <p className="text-white/40 text-xs mt-1.5">
                Questions, applications, and e-transfer payments
              </p>
            </div>

            <p className="text-white/40 text-sm leading-relaxed">
              Program starts{" "}
              <span className="text-white/70 font-medium">April 15, 2026</span>
            </p>

            {/* CTA */}
            <a
              href="mailto:gunjanvermanicoach@gmail.com?subject=Rooted%20Coaching%20—%20Application"
              className="inline-flex items-center justify-center mt-5 px-6 py-2.5 border border-gold/40 text-gold text-sm font-medium rounded-full transition-all duration-300 hover:bg-gold/10 hover:border-gold/60"
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
