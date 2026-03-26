/*
 * Hero Section — Rooted by Gunjan Vermani
 * Coastal Organic: Full-viewport hero with beach aerial background,
 * dark overlay for text contrast, asymmetric left-aligned content.
 */
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663296082498/aM8ZgGf6JiNZR9Y6FwrVXy/hero-bg-SXRkTx5x2Q5FK94Kq96JYC.webp";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.15_0.02_195/0.85)] via-[oklch(0.15_0.02_195/0.6)] to-[oklch(0.15_0.02_195/0.3)]" />
      </div>

      {/* Content */}
      <div className="relative container pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-2xl">
          {/* Pre-heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gold-light text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-6"
          >
            Group Coaching for Healthcare Professionals
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6"
          >
            Build a Successful Business{" "}
            <span className="text-gold italic font-medium">Without</span>{" "}
            Sacrificing Your Relationships or Your Life
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl"
          >
            Where ambition and relationships grow together. A proven coaching program
            for physiotherapists and clinic owners who refuse to choose between
            success and what matters most.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-charcoal font-semibold rounded-full text-base transition-all duration-300 hover:bg-gold-dark hover:shadow-xl hover:shadow-gold/20 hover:-translate-y-0.5"
            >
              Apply for Founding Membership
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full text-base transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              Learn More
            </a>
          </motion.div>

          {/* Program start date badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-10 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/15"
          >
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-white/90 font-medium">
              Program starts April 15, 2026 — Limited founding spots available
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#who-is-this-for"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={18} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
