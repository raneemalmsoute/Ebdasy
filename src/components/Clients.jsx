import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  /* =========================
     TEXT CONTENT
  ========================= */
  const content = {
    en: {
      subtitle: "Trusted Partners",
      titleMain: "Our Clients",
      titleHighlight: "& Success Partners",
      description:
        "We are proud to serve a distinguished portfolio of companies and organizations across diverse sectors, and we remain committed to delivering excellence.",
      localTitle: "Local Clients",
      internationalTitle: "International Clients",
    },
    ar: {
      subtitle: "شركاء موثوقون",
      titleMain: "عملاؤنا",
      titleHighlight: "وشركاء النجاح",
      description:
        "نفتخر بخدمة نخبة من الشركات والمؤسسات في مختلف القطاعات، ونسعى دائماً لتقديم الأفضل.",
      localTitle: "العملاء المحليون",
      internationalTitle: "العملاء الدوليون",
    },
  };

  const t = content[language];

  /* =========================
     CLIENTS DATA (FIXED)
     ✅ padStart حل مشكلة أول 9 صور
  ========================= */
const localClients = Array.from({ length: 24 }, (_, i) => ({
  name: `Local Client ${i + 1}`,
  url: `/assets/LocalClients/Client1-${i}.png`,
}));


const internationalClients = Array.from({ length: 22 }, (_, i) => ({
  name: `International Client ${i + 1}`,
  url: `/assets/InternationalClients/Client 2-${i}.png`,
}));


  /* =========================
     GRID RENDER
  ========================= */
  const renderClientGrid = (clients) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
      {clients.map((client, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.04 }}
          className="bg-white rounded-xl p-4 flex items-center justify-center h-32 sm:h-36 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          title={client.name}
        >
          <img
            src={client.url}
            alt={`${client.name} Logo`}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = "/assets/placeholder-logo.png";
            }}
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );

  return (
    <section
      id="clients"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="py-16 md:py-24 bg-[#0A1A3A] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23C9A34E'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM36 4V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A34E] font-semibold text-sm tracking-wider uppercase mb-4 block">
            {t.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t.titleMain}{' '}
            <span className="text-[#C9A34E]">{t.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-[#C9A34E] mx-auto mb-6" />
          <p className="text-[#D5D5D5] max-w-2xl mx-auto text-lg">
            {t.description}
          </p>
        </motion.div>

        {/* Local Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            {t.localTitle}
          </h3>
          {renderClientGrid(localClients)}
        </motion.div>

        {/* International Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            {t.internationalTitle}
          </h3>
          {renderClientGrid(internationalClients)}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
