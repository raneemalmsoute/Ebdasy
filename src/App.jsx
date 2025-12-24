import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import AppointmentBooking from "@/components/AppointmentBooking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";

function SEO() {
  const { language } = useLanguage();

  const seo = {
    en: {
      title:
        "EBDA Marketing Agency | Branding, SEO & Digital Marketing in Syria & Gulf",
      description:
        "EBDA is a premium marketing agency in Damascus, Syria offering SEO, branding, social media marketing, web & software development, printing and event management. Founded by Saleh Sukkar & Ammar Alkurdi.",
      keywords:
        "EBDA, marketing agency Syria, digital marketing Damascus, SEO Syria, branding agency, marketing Gulf, Saleh Sukkar, Ammar Alkurdi",
    },
    ar: {
      title: "وكالة ابدأ للتسويق | تسويق رقمي وهوية بصرية في سوريا والخليج",
      description:
        "وكالة ابدأ للتسويق في دمشق تقدم خدمات تحسين محركات البحث، التسويق الرقمي، الهوية البصرية، تطوير البرمجيات، الطباعة وتنظيم الفعاليات. تأسيس صالح سكر وعمار الكردي.",
      keywords:
        "ابدأ, وكالة تسويق سوريا, تسويق رقمي دمشق, سيو سوريا, هوية بصرية, صالح سكر, عمار الكردي",
    },
  };

  return (
    <Helmet>
      <title>{seo[language].title}</title>
      <meta name="description" content={seo[language].description} />
      <meta name="keywords" content={seo[language].keywords} />

      <link rel="canonical" href="https://ebda-sy.com/" />

      {/* Open Graph */}
      <meta property="og:title" content={seo[language].title} />
      <meta property="og:description" content={seo[language].description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ebda-sy.com/" />
      <meta
        property="og:image"
        content="https://ebda-sy.com/assets/seo/ebda-og.jpeg"
      />

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .font-arabic {
          font-family: 'Cairo', sans-serif !important;
        }
      `}</style>
    </Helmet>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <SEO />

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-[#0A1A3A] text-white overflow-x-hidden transition-all duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Clients />
          <AppointmentBooking />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;
