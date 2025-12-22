import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookAppointment = () => {
    const phoneNumber = "963942223337";
    const message =
      language === 'en'
        ? `Hello, I would like to book an appointment.`
        : `مرحبا، أرغب بحجز موعد.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const content = {
    en: {
      nav: [
        { name: 'Home', id: 'hero' },
        { name: 'About', id: 'about' },
        { name: 'Service', id: 'services' },
        { name: 'Contacts', id: 'contact' },
        { name: 'Clients', id: 'clients' }, // Added Clients
      ],
      bookBtn: 'Book Appointment'
    },
    ar: {
      nav: [
        { name: 'الرئيسية', id: 'hero' },
        { name: 'من نحن', id: 'about' },
        { name: 'خدماتنا', id: 'services' },
        { name: 'اتصل بنا', id: 'contact' },
        { name: 'عملاؤنا', id: 'clients' }, // Added عملاؤنا
      ],
      bookBtn: 'حجز موعد'
    }
  };

  const t = content[language];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A1A3A]/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 relative flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 z-20 cursor-pointer" onClick={() => scrollToSection('hero')}>
<img
  src="/assets/loading_screen/EBDA Logo-01.png"
  alt="EBDA Logo"
  className="h-10 w-auto"
/>

          <span className="text-[#C9A34E] text-2xl font-bold tracking-wider">EBDA</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {t.nav.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white text-base font-medium hover:text-[#C9A34E] transition-colors duration-200"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-4 z-20">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-white hover:text-[#C9A34E] transition-colors font-medium px-2 py-1"
          >
            <Globe size={18} />
            {language === 'en' ? 'AR' : 'EN'}
          </button>

          <Button
            onClick={handleBookAppointment}
            className="bg-[#C9A34E] text-[#0A1A3A] hover:bg-[#b89340] font-bold rounded-full px-6 transition-all shadow-[0_0_15px_rgba(201,163,78,0.3)] hover:shadow-[0_0_25px_rgba(201,163,78,0.5)]"
          >
            {t.bookBtn}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4 z-20">
           <button 
            onClick={toggleLanguage}
            className="text-white hover:text-[#C9A34E] transition-colors font-medium"
          >
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          <button
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-[#0A1A3A] z-10 pt-24 px-6 flex flex-col items-center gap-8 lg:hidden"
            >
              <nav className="flex flex-col items-center gap-6 w-full">
                {t.nav.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-white text-xl font-medium hover:text-[#C9A34E] w-full text-center py-2 border-b border-white/10"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
              <Button
                onClick={() => {
                  handleBookAppointment();
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#C9A34E] text-[#0A1A3A] hover:bg-[#b89340] font-bold rounded-full px-8 w-full max-w-xs mt-4"
              >
                {t.bookBtn}
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
