import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const currentYear = new Date().getFullYear();
  const foundingYear = 2017;

  const content = {
    en: {
      about: "Building brands that lead. We create exceptional marketing experiences that drive growth and success.",
      quickLinks: "Quick Links",
      servicesTitle: "Services",
      contactTitle: "Contact Info",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      navLinks: ['Home', 'About', 'Services', 'Contact', 'Clients'],
      services: ['SEO Optimization', 'Social Media', 'Web & App Design & Development', 'Branding', 'Graphic Design','Motion Graphics'],
      contactNumbers: [
        { label: 'DUBAI', number: '+971582553162' },
        { label: 'SYRIA', number: '+963942223337' },
        { label: 'SYRIA', number: '+963993346262' }
      ],
      location: 'Damascus, Syria',
      email: 'info@ebda-sy.com'
    },
    ar: {
      about: "نبني علامات تجارية رائدة. نبتكر تجارب تسويقية استثنائية تقود للنمو والنجاح.",
      quickLinks: "روابط سريعة",
      servicesTitle: "خدماتنا",
      contactTitle: "معلومات الاتصال",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      navLinks: ['الرئيسية', 'من نحن', 'خدماتنا', 'اتصل بنا', 'عملاؤنا'],
      services: ['تحسين محركات البحث', 'التسويق عبر وسائل التواصل', 'تصميم وتطوير المواقع والتطبيقات', 'الهوية البصرية','التصميم الجرافيكي', 'موشن جرافيك'],
      contactNumbers: [
        { label: 'دبي', number: '+971582553162' },
        { label: 'سوريا', number: '+963942223337' },
        { label: 'سوريا', number: '+963993346262' }
      ],
      location: 'دمشق، سوريا',
      email: 'info@ebda-sy.com'
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaFacebook, href: 'https://www.facebook.com/ebda.sy/', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://www.instagram.com/ebda.sy', label: 'Instagram' },
    { icon: FaWhatsapp, href: 'https://wa.me/971582553162', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0d2347] to-[#0A1A3A] border-t border-[#C9A34E]/20 relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* About */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-3xl font-bold text-[#C9A34E]">EBDA</span>
            </motion.div>
            <p className="text-[#D5D5D5] mb-6 leading-relaxed">{t.about}</p>

            {/* Social Media with Hover Animation */}
            <div className={`flex gap-4 ${isRTL ? 'justify-end' : ''}`}>
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-[#D5D5D5]"
                    whileHover={{ scale: 1.2, color: '#C9A34E' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-xl font-bold text-[#C9A34E] mb-6 block">{t.quickLinks}</span>
            <nav className="space-y-3">
              {t.navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className={`block text-[#D5D5D5] hover:text-[#C9A34E] transition-colors duration-300 transform ${isRTL ? 'hover:-translate-x-2' : 'hover:translate-x-2'}`}
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <span className="text-xl font-bold text-[#C9A34E] mb-6 block">{t.servicesTitle}</span>
            <nav className="space-y-3">
              {t.services.map((service) => (
                <p key={service} className="text-[#D5D5D5] hover:text-[#C9A34E] transition-colors duration-300 cursor-pointer">{service}</p>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <span className="text-xl font-bold text-[#C9A34E] mb-6 block">{t.contactTitle}</span>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#C9A34E] mt-1 flex-shrink-0" />
                <p className="text-[#D5D5D5]">{t.location}</p>
              </div>

              {t.contactNumbers.map((contact, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <Phone size={20} className="text-[#C9A34E] mt-1 flex-shrink-0" />
                  <p className="text-[#D5D5D5]">{contact.label}: {contact.number}</p>
                </div>
              ))}

              <div className="flex items-start gap-3">
                <Mail size={20} className="text-[#C9A34E] mt-1 flex-shrink-0" />
                <p className="text-[#D5D5D5]">{t.email}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#C9A34E]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#D5D5D5] text-center md:text-left">
              {language === 'en' 
                ? `© ${foundingYear}-${currentYear} EBDA Marketing Agency. All rights reserved.`
                : `© ${foundingYear}-${currentYear} وكالة ابدأ للتسويق. جميع الحقوق محفوظة.`}
            </p>
            <div className="flex gap-6">
              <button className="text-[#D5D5D5] hover:text-[#C9A34E] transition-colors duration-300 text-sm">{t.privacy}</button>
              <button className="text-[#D5D5D5] hover:text-[#C9A34E] transition-colors duration-300 text-sm">{t.terms}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;