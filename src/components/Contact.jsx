import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const content = {
    en: {
      subtitle: "Get In Touch",
      titleMain: "Let's Work",
      titleHighlight: "Together",
      description: "Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      labels: { name: "Name", email: "Email", subject: "Subject", message: "Message" },
      placeholders: { name: "Your name", email: "your@email.com", subject: "How can we help?", message: "Tell us about your project..." },
      btn: "Send Message",
      successTitle: "Message Ready to Send! 📧",
      successDesc: "Your email client will open shortly.",
      contactInfo: { location: 'Location', locationVal: 'Damascus, Syria', phoneDubai: 'Phone (Dubai)', phoneSyria1: 'Phone (Syria 1)', phoneSyria2: 'Phone (Syria 2)', email: 'Email' }
    },
    ar: {
      subtitle: "تواصل معنا",
      titleMain: "لنعمل",
      titleHighlight: "معاً",
      description: "هل لديك مشروع في ذهنك؟ نود أن نسمع منك. أرسل لنا رسالة وسنقوم بالرد في أقرب وقت ممكن.",
      labels: { name: "الاسم", email: "البريد الإلكتروني", subject: "الموضوع", message: "الرسالة" },
      placeholders: { name: "اسمك الكريم", email: "example@domain.com", subject: "كيف يمكننا مساعدتك؟", message: "أخبرنا عن مشروعك..." },
      btn: "إرسال الرسالة",
      successTitle: "الرسالة جاهزة للإرسال! 📧",
      successDesc: "سيتم فتح البريد الافتراضي لإرسال رسالتك.",
      contactInfo: { location: 'الموقع', locationVal: 'دمشق، سوريا', phoneDubai: 'هاتف (دبي)', phoneSyria1: 'هاتف (سوريا 1)', phoneSyria2: 'هاتف (سوريا 2)', email: 'البريد الإلكتروني' }
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  const contactInfoList = [
    { icon: MapPin, title: t.contactInfo.location, info: t.contactInfo.locationVal },
    { icon: Phone, title: t.contactInfo.phoneDubai, info: '971582553162' },
    { icon: Phone, title: t.contactInfo.phoneSyria1, info: '963942223337' },
    { icon: Phone, title: t.contactInfo.phoneSyria2, info: '963993346262' },
    { icon: Mail, title: t.contactInfo.email, info: 'info@ebda-sy.com' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:info@ebda-sy.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;

    toast({
      title: t.successTitle,
      description: t.successDesc,
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#0A1A3A] relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A34E] rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C9A34E] rounded-full filter blur-[150px] animate-pulse delay-1000"></div>
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A34E] font-semibold text-sm tracking-wider uppercase mb-4 block">{t.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.titleMain} <span className="text-[#C9A34E]">{t.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-[#C9A34E] mx-auto mb-6"></div>
          <p className="text-[#D5D5D5] text-lg max-w-2xl mx-auto">{t.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-[#0d2347] to-[#0A1A3A] border border-[#C9A34E]/20 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[#D5D5D5] font-semibold">{t.labels.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A1A3A] border border-[#C9A34E]/30 rounded-lg text-white focus:border-[#C9A34E] focus:outline-none transition-colors duration-300"
                    placeholder={t.placeholders.name}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[#D5D5D5] font-semibold">{t.labels.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A1A3A] border border-[#C9A34E]/30 rounded-lg text-white focus:border-[#C9A34E] focus:outline-none transition-colors duration-300"
                    placeholder={t.placeholders.email}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[#D5D5D5] font-semibold">{t.labels.subject}</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A1A3A] border border-[#C9A34E]/30 rounded-lg text-white focus:border-[#C9A34E] focus:outline-none transition-colors duration-300"
                    placeholder={t.placeholders.subject}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[#D5D5D5] font-semibold">{t.labels.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#0A1A3A] border border-[#C9A34E]/30 rounded-lg text-white focus:border-[#C9A34E] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder={t.placeholders.message}
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-[#C9A34E] text-[#0A1A3A] py-6 rounded-lg font-bold text-lg hover:bg-[#b89340] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,163,78,0.6)] flex items-center justify-center gap-2"
                  >
                    {t.btn}
                    {isRTL ? <Send size={20} className="rotate-180" /> : <Send size={20} />}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfoList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ x: isRTL ? -10 : 10 }}
                  className="flex items-center gap-4 bg-gradient-to-br from-[#0d2347] to-[#0A1A3A] border border-[#C9A34E]/20 rounded-2xl p-6 hover:border-[#C9A34E]/50 transition-all duration-300"
                >
                  <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="w-14 h-14 bg-gradient-to-br from-[#C9A34E] to-[#b89340] rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon size={28} className="text-[#0A1A3A]" />
                  </motion.div>
                  <div>
                    <h4 className="text-[#C9A34E] font-semibold mb-1">{item.title}</h4>
                    <p className="text-[#D5D5D5]">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#C9A34E]/20 h-[400px]">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.2765%2C33.5102%2C36.3165%2C33.5402&layer=mapnik&marker=33.5252%2C36.2965"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Damascus Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
