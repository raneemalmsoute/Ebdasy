import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// ---------------------------
// TEXT CONTENT (FINAL)
// ---------------------------
const content = {
  en: {
    badge: "Premium Marketing Agency",
    titlePre: "We Create",
    titleHighlight: "Brands",
    titlePost: "That",
    titleEnd: "Command Attention",
    description:
      "From strategy to execution, we craft experiences that move markets forward.",
    cta: "Build Your Brand",
    micro: "Strategy • Design • Growth",
  },
  ar: {
    badge: "وكالة تسويق متميزة",
    titlePre: "نصنع",
    titleHighlight: "علامات تجارية",
    titleEnd: "تفرض حضورها",
    description:
      "من الاستراتيجية إلى التنفيذ، نبتكر تجارب تدفع السوق إلى الأمام.",
    cta: "لنصنع علامتك",
    micro: "استراتيجية • تصميم • نمو",
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
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A34E] rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A34E] rounded-full blur-[140px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
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
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">{t.titlePre}</span>{" "}
            <span className="text-[#C9A34E]">{t.titleHighlight}</span>{" "}
            {!isRTL && <span className="text-white">That</span>}

            {/* Highlighted Ending */}
            <span className="relative inline-block text-[#C9A34E] mt-2">
              <span className="relative z-10 block leading-tight">
                {t.titleEnd}
              </span>
              <span
                className={`absolute ${
                  isRTL ? "right-0" : "left-0"
                } bottom-[0.15em] w-full h-[0.18em] bg-[#C9A34E]/30 rounded-sm`}
              />
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-[#D5D5D5] mb-12 max-w-2xl mx-auto"
          >
            {t.description}
          </motion.p>

          {/* CTA + Micro-copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-3"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("appointment")}
              className="group bg-[#C9A34E] text-[#0A1A3A] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b89340] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,163,78,0.6)] flex items-center gap-2"
            >
              {t.cta}
              {isRTL ? (
                <ArrowLeft
                  size={20}
                  className="group-hover:-translate-x-1 transition-transform duration-300"
                />
              ) : (
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              )}
            </motion.button>

            <span className="text-sm text-[#D5D5D5]/70 tracking-wide">
              {t.micro}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
