import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const AppointmentBooking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sendOption, setSendOption] = useState('whatsapp');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  const content = {
    en: {
      subtitle: "Book Appointment",
      titleMain: "Let’s Start Your",
      titleHighlight: "Journey",
      description:
        "Schedule a FREE 20-minute consultation with our experts to discuss your marketing goals.",
      micro:
        "Free 20-minute consultation · No commitment",
      labels: {
        name: "Full Name",
        phone: "Phone Number",
        email: "Email Address",
        service: "Service Interested In",
        date: "Preferred Date",
        time: "Preferred Time",
      },
      placeholders: {
        name: "John Doe",
        phone: "+963 XXX XXX XXX",
        email: "john@example.com",
        service: "Select a service",
      },
      btn: "Book Free 20-Min Call",
      btnLoading: "Processing...",
      footer:
        "No payment required · Online meeting · Limited availability",
      services: [
  "SEO Optimization",
  "Social Media Marketing",
  "Content Creation",
  "Motion & Graphic Design",
  "Branding",
  "Software Development",
  "Paid Advertising",
  "Printing & Production",
  "Event Management & Organization",
],

    },
    ar: {
      subtitle: "حجز موعد",
      titleMain: "لنبدأ",
      titleHighlight: "رحلتك",
      description:
        "احجز استشارة مجانية لمدة 20 دقيقة مع خبرائنا لمناقشة أهدافك التسويقية.",
      micro:
        "استشارة مجانية 20 دقيقة · بدون أي التزام",
      labels: {
        name: "الاسم الكامل",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        service: "الخدمة المطلوبة",
        date: "التاريخ المفضل",
        time: "الوقت المفضل",
      },
      placeholders: {
        name: "الاسم الكريم",
        phone: "+963 XXX XXX XXX",
        email: "example@domain.com",
        service: "اختر خدمة",
      },
      btn: "احجز استشارة مجانية",
      btnLoading: "جارٍ المعالجة...",
      footer:
        "لا يوجد أي دفع · اجتماع أونلاين · عدد محدود يومياً",
      services: [
  "تحسين محركات البحث",
  "التسويق عبر وسائل التواصل",
  "صناعة المحتوى",
  "التصميم الجرافيكي والموشن",
  "الهوية البصرية",
  "تطوير البرمجيات",
  "الإعلانات الممولة",
  "الطباعة والإنتاج",
  "إدارة وتنظيم الفعاليات",
],

    },
  };

  const t = content[language];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, phone, email, service, date, time } = formData;

    try {
      const message = `
📅 New Consultation Booking (FREE 20 MIN)

👤 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}
🛠 Service: ${service}
📆 Date: ${date}
⏰ Time: ${time}
      `;

      if (sendOption === 'email') {
        const subject = `Free 20-Min Consultation – ${name}`;
        window.location.href = `mailto:info@ebda-sy.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(message)}`;
      }

      if (sendOption === 'whatsapp') {
        window.open(
          `https://wa.me/963942223337?text=${encodeURIComponent(message)}`,
          '_blank'
        );
      }

      toast({
        title: language === 'en' ? "Success 🎉" : "تم الإرسال بنجاح 🎉",
        description:
          language === 'en'
            ? "Your free consultation request is ready to be sent."
            : "تم تجهيز طلب الاستشارة المجانية.",
      });

      setSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="appointment"
      className="py-24 bg-[#0A1A3A]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div ref={ref} className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-[#C9A34E] font-semibold">
            {t.subtitle}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            {t.titleMain}{' '}
            <span className="text-[#C9A34E]">
              {t.titleHighlight}
            </span>
          </h2>

          <p className="text-[#D5D5D5] mt-4 max-w-2xl mx-auto">
            {t.description}
          </p>

          <p className="text-sm text-[#C9A34E] mt-3 font-medium">
            ⏱️ {t.micro}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto bg-[#0d2347] p-8 rounded-2xl">
          <span className="inline-block bg-[#C9A34E]/10 text-[#C9A34E] text-xs font-semibold px-4 py-1 rounded-full mb-6">
            FREE · 20 MIN
          </span>

          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                required
                placeholder={t.placeholders.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#0A1A3A] text-white"
              />

              <input
                name="phone"
                required
                placeholder={t.placeholders.phone}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#0A1A3A] text-white"
              />

              <input
                name="email"
                required
                placeholder={t.placeholders.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#0A1A3A] text-white"
              />

              <select
                name="service"
                required
                onChange={handleChange}
                className="w-full p-3 rounded bg-[#0A1A3A] text-white"
              >
                <option value="">
                  {t.placeholders.service}
                </option>
                {t.services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>

              <div className="flex gap-4">
                <input
                  type="date"
                  name="date"
                  required
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-[#0A1A3A] text-white"
                />
                <input
                  type="time"
                  name="time"
                  required
                  onChange={handleChange}
                  className="w-full p-3 rounded bg-[#0A1A3A] text-white"
                />
              </div>

              <div className="flex gap-6 text-white text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={sendOption === 'whatsapp'}
                    onChange={() => setSendOption('whatsapp')}
                  />
                  WhatsApp (Fast)
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    checked={sendOption === 'email'}
                    onChange={() => setSendOption('email')}
                  />
                  Email
                </label>
              </div>

              <Button
                disabled={isSubmitting}
                className="w-full bg-[#C9A34E] text-[#0A1A3A] py-4 font-bold"
              >
                {isSubmitting ? t.btnLoading : t.btn}
              </Button>

              <p className="text-center text-xs text-gray-400 mt-3">
                {t.footer}
              </p>
            </form>
          ) : (
            <div className="text-center py-16">
              <CheckCircle2
                size={80}
                className="mx-auto text-green-500 mb-4"
              />
              <h3 className="text-2xl font-bold text-white">
                {language === 'en'
                  ? 'Request Sent Successfully'
                  : 'تم إرسال الطلب بنجاح'}
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AppointmentBooking;
