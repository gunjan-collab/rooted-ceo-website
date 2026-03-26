/*
 * Navbar — Rooted by Gunjan Vermani
 * Design: Coastal Organic — transparent on hero, solid on scroll
 * Teal + gold palette, Playfair Display headings, DM Sans body
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663296082498/aM8ZgGf6JiNZR9Y6FwrVXy/logo_rooted_v1_30d1abff.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Program", href: "#pillars" },
  { label: "What You Get", href: "#what-you-get" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[oklch(0.9_0.02_80)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <img
            src={LOGO_URL}
            alt="Rooted by Gunjan Vermani"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-teal ${
                scrolled ? "text-charcoal" : "text-charcoal/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-teal text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-teal-dark hover:shadow-lg hover:shadow-teal/20 hover:-translate-y-0.5"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/98 backdrop-blur-md border-t border-[oklch(0.9_0.02_80)] px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-charcoal hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-6 py-3 bg-teal text-white font-semibold rounded-full"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
