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
  Calendar,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const isRTL = language === "ar";

  /* =========================
     SEO CONTENT (ONLY)
  ========================= */
  const seo = {
    en: {
      title: "Marketing Services in Syria & Gulf | EBDA Agency",
      description:
        "EBDA Marketing Agency provides premium marketing services in Syria and the Gulf including SEO, branding, social media marketing, software development, printing, and event management. Founded by Saleh Sukkar & Ammar Alkurdi.",
      keywords:
        "EBDA, marketing agency Syria, digital marketing Damascus, SEO Syria, branding agency, marketing Gulf, Saudi Arabia marketing, UAE marketing, Saleh Sukkar, Ammar Alkurdi",
    },
    ar: {
      title: "خدمات التسويق في سوريا والخليج | وكالة ابدأ",
      description:
        "تقدم وكالة ابدأ للتسويق خدمات احترافية في سوريا والخليج تشمل تحسين محركات البحث، التسويق الرقمي، الهوية البصرية، تطوير البرمجيات، الطباعة وتنظيم الفعاليات. بإدارة صالح سكر وعمار الكردي.",
      keywords:
        "ابدأ, وكالة تسويق سوريا, تسويق رقمي دمشق, سيو سوريا, هوية بصرية, تسويق الخليج, السعودية, الإمارات, صالح سكر, عمار الكردي",
    },
  };

  /* =========================
     UI CONTENT (UNCHANGED)
  ========================= */
  const content = {
    en: {
      subtitle: "Our Services",
      titleMain: "Premium Marketing",
      titleHighlight: "Solutions",
      description:
        "We offer comprehensive marketing services designed to elevate your brand and drive measurable results.",
      list: [
        {
          icon: Search,
          title: "SEO Optimization",
          description:
            "Boost your visibility and rank higher on search engines with our advanced SEO strategies.",
          color: "from-blue-500 to-blue-600",
        },
        {
          icon: Share2,
          title: "Social Media Marketing",
          description:
            "Engage your audience and build a strong social presence across all platforms.",
          color: "from-pink-500 to-pink-600",
        },
        {
          icon: FileText,
          title: "Content Creation",
          description:
            "Compelling content that tells your story and resonates with your target audience.",
          color: "from-purple-500 to-purple-600",
        },
        {
          icon: PenTool,
          title: "Motion & Graphic Design",
          description:
            "Creative visual designs and motion content that bring your brand to life across all platforms.",
          color: "from-indigo-500 to-indigo-600",
        },
        {
          icon: Palette,
          title: "Branding",
          description:
            "Create a memorable brand identity that stands out and connects with customers.",
          color: "from-orange-500 to-orange-600",
        },
        {
          icon: Globe,
          title: "Software Development",
          description:
            "We design and develop websites and applications that deliver exceptional user experiences.",
          color: "from-green-500 to-green-600",
        },
        {
          icon: DollarSign,
          title: "Paid Advertising",
          description:
            "Maximize ROI with targeted ad campaigns across Google and social platforms.",
          color: "from-yellow-500 to-yellow-600",
        },
        {
          icon: Printer,
          title: "Printing & Production",
          description:
            "High-quality printing and production services for all branding materials.",
          color: "from-orange-500 to-orange-600",
        },
        {
          icon: Calendar,
          title: "Event Management & Organization",
          description:
            "End-to-end event planning and execution that creates memorable brand experiences.",
          color: "from-red-500 to-red-600",
        },
      ],
    },

    ar: {
      subtitle: "خدماتنا",
      titleMain: "حلول تسويقية",
      titleHighlight: "متكاملة",
      description:
        "نقدم خدمات تسويقية شاملة مصممة للارتقاء بعلامتك التجارية وتحقيق نتائج ملموسة.",
      list: [
        {
          icon: Search,
          title: "تحسين محركات البحث",
          description:
            "عزز ظهورك وتصدر نتائج البحث مع استراتيجيات SEO متقدمة.",
          color: "from-blue-500 to-blue-600",
        },
        {
          icon: Share2,
          title: "التسويق عبر وسائل التواصل",
          description:
            "بناء حضور قوي وتفاعل حقيقي على منصات التواصل الاجتماعي.",
          color: "from-pink-500 to-pink-600",
        },
        {
          icon: FileText,
          title: "صناعة المحتوى",
          description: "محتوى احترافي يعكس هوية علامتك التجارية.",
          color: "from-purple-500 to-purple-600",
        },
        {
          icon: PenTool,
          title: "التصميم الجرافيكي والموشن",
          description:
            "تصاميم إبداعية ومحتوى موشن يعزز حضور علامتك التجارية.",
          color: "from-indigo-500 to-indigo-600",
        },
        {
          icon: Palette,
          title: "الهوية البصرية",
          description: "هوية قوية ولا تُنسى تميز علامتك التجارية.",
          color: "from-orange-500 to-orange-600",
        },
        {
          icon: Globe,
          title: "تطوير البرمجيات",
          description:
            "تصميم وتطوير مواقع وتطبيقات عالية الجودة وتجربة مستخدم ممتازة.",
          color: "from-green-500 to-green-600",
        },
        {
          icon: DollarSign,
          title: "الإعلانات الممولة",
          description:
            "حملات إعلانية مدروسة تحقق نتائج فعلية وعائد استثمار أعلى.",
          color: "from-yellow-500 to-yellow-600",
        },
        {
          icon: Printer,
          title: "الطباعة والإنتاج",
          description:
            "خدمات طباعة وإنتاج احترافية لجميع المواد التسويقية.",
          color: "from-orange-500 to-orange-600",
        },
        {
          icon: Calendar,
          title: "إدارة وتنظيم الفعاليات",
          description:
            "تنظيم فعاليات من البداية حتى النهاية لصناعة تجارب لا تُنسى.",
          color: "from-red-500 to-red-600",
        },
      ],
    },
  };

  const t = content[language];

  return (
    <>
      {/* =========================
          SEO META TAGS
      ========================= */}
      <Helmet>
        <title>{seo[language].title}</title>
        <meta name="description" content={seo[language].description} />
        <meta name="keywords" content={seo[language].keywords} />

        <link rel="canonical" href="https://ebda-sy.com/" />

        <meta property="og:title" content={seo[language].title} />
        <meta property="og:description" content={seo[language].description} />
        <meta property="og:url" content="https://ebda-sy.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://ebda-sy.com/assets/seo/ebda-og.jpg"
        />
      </Helmet>

      {/* =========================
          DESIGN (UNCHANGED)
      ========================= */}
      <section
        id="services"
        className="py-24 bg-[#0A1A3A] relative overflow-hidden"
        dir={isRTL ? "rtl" : "ltr"}
      >
      
      </section>
    </>
  );
};

export default Services;
