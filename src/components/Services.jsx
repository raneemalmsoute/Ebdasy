import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Search,
  Share2,
  FileText,
  Palette,
  Globe,
  DollarSign,
  PenTool,
  Printer,
  Calendar
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const isRTL = language === "ar";

  /* ================= SEO CONTENT ================= */
  const seo = {
    en: {
      title: "Marketing Services in Syria & Gulf | EBDA Agency",
      description:
        "EBDA Marketing Agency provides professional marketing services in Syria and the Gulf including SEO, branding, social media marketing, software development, printing, and event management. Founded by Saleh Sukkar & Ammar Alkurdi.",
      keywords:
        "EBDA, marketing agency Syria, digital marketing Damascus, SEO Syria, branding agency, marketing Gulf, Saudi Arabia marketing, UAE marketing, Saleh Sukkar, Ammar Alkurdi"
    },
    ar: {
      title: "خدمات التسويق في سوريا والخليج | وكالة ابدأ",
      description:
        "تقدم وكالة ابدأ خدمات تسويق احترافية في سوريا والخليج تشمل تحسين محركات البحث، التسويق الرقمي، الهوية البصرية، البرمجة، الطباعة وتنظيم الفعاليات. بإدارة صالح سكر وعمار الكردي.",
      keywords:
        "ابدأ, وكالة تسويق سوريا, تسويق رقمي دمشق, سيو سوريا, هوية بصرية, تسويق الخليج, السعودية, الإمارات, صالح سكر, عمار الكردي"
    }
  };

  /* ================= PAGE CONTENT ================= */
  const content = {
    en: {
      subtitle: "Our Services",
      titleMain: "Premium Marketing",
      titleHighlight: "Solutions",
      description:
        "We offer comprehensive marketing services designed to elevate your brand and drive measurable results.",
      list: [
        { icon: Search, title: "SEO Optimization", description: "Boost your visibility and rank higher on search engines.", color: "from-blue-500 to-blue-600" },
        { icon: Share2, title: "Social Media Marketing", description: "Build a strong social presence across all platforms.", color: "from-pink-500 to-pink-600" },
        { icon: FileText, title: "Content Creation", description: "Compelling content that tells your story.", color: "from-purple-500 to-purple-600" },
        { icon: PenTool, title: "Motion & Graphic Design", description: "Creative visuals that bring brands to life.", color: "from-indigo-500 to-indigo-600" },
        { icon: Palette, title: "Branding", description: "Memorable brand identity.", color: "from-orange-500 to-orange-600" },
        { icon: Globe, title: "Software Development", description: "Websites & applications with great UX.", color: "from-green-500 to-green-600" },
        { icon: DollarSign, title: "Paid Advertising", description: "Targeted ads with high ROI.", color: "from-yellow-500 to-yellow-600" },
        { icon: Printer, title: "Printing & Production", description: "High-quality printing services.", color: "from-orange-500 to-orange-600" },
        { icon: Calendar, title: "Event Management", description: "End-to-end event planning.", color: "from-red-500 to-red-600" }
      ]
    },
    ar: {
      subtitle: "خدماتنا",
      titleMain: "حلول تسويقية",
      titleHighlight: "متكاملة",
      description:
        "نقدم خدمات تسويقية شاملة مصممة للارتقاء بعلامتك التجارية وتحقيق نتائج ملموسة.",
      list: [
        { icon: Search, title: "تحسين محركات البحث", description: "تصدر نتائج البحث.", color: "from-blue-500 to-blue-600" },
        { icon: Share2, title: "التسويق عبر وسائل التواصل", description: "بناء حضور قوي.", color: "from-pink-500 to-pink-600" },
        { icon: FileText, title: "صناعة المحتوى", description: "محتوى احترافي.", color: "from-purple-500 to-purple-600" },
        { icon: PenTool, title: "التصميم والموشن", description: "تصاميم إبداعية.", color: "from-indigo-500 to-indigo-600" },
        { icon: Palette, title: "الهوية البصرية", description: "هوية لا تُنسى.", color: "from-orange-500 to-orange-600" },
        { icon: Globe, title: "تطوير البرمجيات", description: "مواقع وتطبيقات عالية الجودة.", color: "from-green-500 to-green-600" },
        { icon: DollarSign, title: "الإعلانات الممولة", description: "حملات فعالة.", color: "from-yellow-500 to-yellow-600" },
        { icon: Printer, title: "الطباعة والإنتاج", description: "طباعة احترافية.", color: "from-orange-500 to-orange-600" },
        { icon: Calendar, title: "تنظيم الفعاليات", description: "فعاليات مميزة.", color: "from-red-500 to-red-600" }
      ]
    }
  };

  const t = content[language];

  return (
    <>
      {/* ================= SEO ONLY ================= */}
      <Helmet>
        <title>{seo[language].title}</title>
        <meta name="description" content={seo[language].description} />
        <meta name="keywords" content={seo[language].keywords} />
        <link rel="canonical" href="https://ebda-sy.com/" />

        <meta property="og:title" content={seo[language].title} />
        <meta property="og:description" content={seo[language].description} />
        <meta property="og:url" content="https://ebda-sy.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ebda-sy.com/assets/seo/ebda-og.jpg" />

        {/* ===== Schema.org ===== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MarketingAgency",
            name: "EBDA Marketing Agency | وكالة ابدأ",
            url: "https://ebda-sy.com",
            sameAs: [
              "https://www.instagram.com/ebda.sy",
              "https://www.facebook.com/ebda.sy"
            ],
            founder: [
              { "@type": "Person", name: "Saleh Sukkar" },
              { "@type": "Person", name: "Ammar Alkurdi" },
              { "@type": "Person", name: "صالح سكر" },
              { "@type": "Person", name: "عمار الكردي" }
            ],
            areaServed: ["Syria", "Saudi Arabia", "United Arab Emirates", "Qatar", "Kuwait"]
          })}
        </script>
      </Helmet>

      {/* ================= DESIGN (UNCHANGED) ================= */}
      <section
        id="services"
        className="py-24 bg-[#0A1A3A] relative overflow-hidden"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div ref={ref} className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#C9A34E] font-semibold text-sm block mb-4">
              {t.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.titleMain}{" "}
              <span className="text-[#C9A34E]">{t.titleHighlight}</span>
            </h2>
            <p className="text-[#D5D5D5] text-lg max-w-2xl mx-auto">
              {t.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.list.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0d2347] border border-[#C9A34E]/20 rounded-2xl p-8"
              >
                <service.icon size={32} className="text-[#C9A34E] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-[#D5D5D5]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
