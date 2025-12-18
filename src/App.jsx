
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Clients from '@/components/Clients';
import AppointmentBooking from '@/components/AppointmentBooking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <Helmet>
        <title>EBDA - We Build Brands That Lead | Premium Marketing Agency Damascus</title>
        <meta name="description" content="EBDA is a luxury marketing agency in Damascus, Syria specializing in SEO, Social Media, Branding, Web Design, and Motion Graphics. We build brands that lead." />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet" />
        <style>{`
          .font-arabic {
            font-family: 'Cairo', sans-serif !important;
          }
        `}</style>
      </Helmet>
      
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
