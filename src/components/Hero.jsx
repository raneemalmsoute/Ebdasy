import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// ---------------------------
//  TEXT CONTENT (Outside Component)
// ---------------------------
const content = {
  en: {
    badge: "Premium Marketing Agency",
    titlePre: "We Build",
    titleHighlight: "Brands",
    titlePost: "That",
    titleEnd: "Lead",
    description:
      "Elevate your brand with our premium marketing solutions in Damascus, Syria. We create experiences that captivate and convert.",
    cta: "Get Started",
  },
  ar: {
    badge: "وكالة تسويق متميزة",
    titlePre: "نحن نبني",
    titleHighlight: "علامات تجارية",
    titlePost: "تقود",
    titleEnd: "المستقبل",
    description:
      "ارتقِ بعلامتك التجارية مع حلولنا التسويقية المتميزة في دمشق، سوريا. نحن نبتكر تجارب تأسر العملاء وتحقق نتائج حقيقية.",
    cta: "ابدأ الآن",
  },
};

const Hero = () => {
  const { language } = useLanguage();
  const t = content[language];
  const isRTL = language === "ar";

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background lights */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A34E] rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A34E] rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Pattern background */}
      <div className="absolute inset-0 bg-hero-pattern opacity-[0.07]" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-[#C9A34E]/20 border border-[#C9A34E] rounded-full text-[#C9A34E] text-sm font-semibold">
              {t.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">{t.titlePre}</span>{" "}
            <span className="text-[#C9A34E] inline-block">
              <motion.span
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t.titleHighlight}
              </motion.span>
            </span>{" "}
            <span className="text-white">{t.titlePost}</span>{" "}
            <span className="relative inline-block">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[#C9A34E]"
              >
                {t.titleEnd}
              </motion.span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1 }}
                className={`absolute bottom-2 ${
                  isRTL ? "right-0" : "left-0"
                } h-1 bg-[#C9A34E]`}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-[#D5D5D5] mb-12 max-w-2xl mx-auto"
          >
            {t.description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("appointment")}
              className="group bg-[#C9A34E] text-[#0A1A3A] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b89340] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,163,78,0.6)] flex items-center justify-center gap-2"
            >
              {t.cta}
              {isRTL ? (
                <ArrowLeft
                  className="group-hover:-translate-x-1 transition-transform duration-300"
                  size={20}
                />
              ) : (
                <ArrowRight
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  size={20}
                />
              )}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-[#C9A34E] rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-[#C9A34E] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
