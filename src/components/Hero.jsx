import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Helmet } from "react-helmet-async";
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
    <>
      {/* ========================= */}
      {/* SEO (NO VISUAL CHANGE) */}
      {/* ========================= */}
      <Helmet>
        <title>
          {language === "ar"
            ? "وكالة ابدأ للتسويق | تسويق رقمي وهوية بصرية في سوريا والخليج"
            : "EBDA Marketing Agency | Digital Marketing & Branding in Syria & Gulf"}
        </title>

        <meta
          name="description"
          content={
            language === "ar"
              ? "وكالة ابدأ للتسويق في دمشق تقدم خدمات السيو، التسويق الرقمي، الهوية البصرية، تطوير البرمجيات، الطباعة وتنظيم الفعاليات في سوريا والخليج. بإدارة صالح سكر وعمار الكردي."
              : "EBDA is a leading marketing agency in Damascus offering SEO, digital marketing, branding, software development, printing, and event management across Syria and the Gulf. Founded by Saleh Sukkar & Ammar Alkurdi."
          }
        />

        <meta
          name="keywords"
          content={
            language === "ar"
              ? "ابدأ, وكالة تسويق سوريا, تسويق رقمي دمشق, سيو سوريا, هوية بصرية, تسويق الخليج, السعودية, الإمارات, صالح سكر, عمار الكردي"
              : "EBDA, marketing agency Syria, digital marketing Damascus, SEO Syria, branding agency, marketing Gulf, Saudi Arabia marketing, UAE marketing, Saleh Sukkar, Ammar Alkurdi"
          }
        />

        <link rel="canonical" href="https://ebda-sy.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="EBDA Marketing Agency" />
        <meta
          property="og:description"
          content="Building brands that command attention through strategy, creativity, and technology."
        />
        <meta property="og:url" content="https://ebda-sy.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ebda-sy.com/assets/seo/ebda-og.jpg"
        />

        {/* Social Profiles */}
        <meta property="og:site_name" content="EBDA Marketing Agency" />
        <meta property="article:author" content="https://www.facebook.com/ebda.sy" />
      </Helmet>

      {/* ========================= */}
      {/* ORIGINAL HERO – UNTOUCHED */}
      {/* ========================= */}
      <section
        id="hero"
        dir={isRTL ? "rtl" : "ltr"}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* SEO H1 (Hidden for Google) */}
        <h1 className="sr-only">
          EBDA Marketing Agency in Damascus Syria – Branding, Digital Marketing,
          Software Development, Printing & Event Management Company serving Syria
          and the Gulf. Founded by Saleh Sukkar and Ammar Alkurdi. وكالة ابدأ
          للتسويق في دمشق سوريا – هوية بصرية، تسويق رقمي، تطوير برمجيات، طباعة
          وتنظيم فعاليات. تأسيس صالح سكر وعمار الكردي
        </h1>

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

            {/* Visual Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="text-white">{t.titlePre}</span>{" "}
              <span className="text-[#C9A34E]">{t.titleHighlight}</span>{" "}
              {!isRTL && <span className="text-white">That</span>}
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
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-[#D5D5D5] mb-12 max-w-2xl mx-auto"
            >
              {t.description}
            </motion.p>

            {/* CTA */}
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
                  <ArrowLeft size={20} />
                ) : (
                  <ArrowRight size={20} />
                )}
              </motion.button>

              <span className="text-sm text-[#D5D5D5]/70 tracking-wide">
                {t.micro}
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
