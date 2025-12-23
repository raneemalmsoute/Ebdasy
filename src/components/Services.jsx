import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Search,
  Share2,
  FileText,
  Palette,
  Globe,
  DollarSign,
  Video,
  PenTool,
  Printer,
  Calendar
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();

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
          title: 'SEO Optimization',
          description:
            'Boost your visibility and rank higher on search engines with our advanced SEO strategies.',
          color: 'from-blue-500 to-blue-600'
        },
        {
          icon: Share2,
          title: 'Social Media Marketing',
          description:
            'Engage your audience and build a strong social presence across all platforms.',
          color: 'from-pink-500 to-pink-600'
        },
        {
          icon: FileText,
          title: 'Content Creation',
          description:
            'Compelling content that tells your story and resonates with your target audience.',
          color: 'from-purple-500 to-purple-600'
        },
        {
          icon: PenTool,
          title: 'Motion & Graphic Design',
          description:
            'Creative visual designs and motion content that bring your brand to life across all platforms',
          color: 'from-indigo-500 to-indigo-600'
        },
        {
          icon: Palette,
          title: 'Branding',
          description:
            'Create a memorable brand identity that stands out and connects with customers.',
          color: 'from-orange-500 to-orange-600'
        },
        {
          icon: Globe,
          title: 'Software Development',
          description:
            'We design and develop beautiful, responsive websites and mobile applications that deliver exceptional user experiences.',
          color: 'from-green-500 to-green-600'
        },
        {
          icon: DollarSign,
          title: 'Paid Advertising',
          description:
            'Maximize ROI with targeted ad campaigns across Google, Facebook, and Instagram.',
          color: 'from-yellow-500 to-yellow-600'
        },
        
        
        {
          icon: Printer,
          title: 'Printing & Production',
          description:
            'High-quality printing and production services for all marketing and branding materials.',
          color: 'from-orange-500 to-orange-600'
        },
        {
          icon: Calendar,
          title: 'Event Management & Organization',
          description:
            'End-to-end event planning and execution that creates memorable brand experiences.',
          color: 'from-red-500 to-red-600'
        }
      ]
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
          title: 'تحسين محركات البحث',
          description:
            'عزز ظهورك وتصدر نتائج البحث مع استراتيجياتنا المتقدمة في الـ SEO.',
          color: 'from-blue-500 to-blue-600'
        },
        {
          icon: Share2,
          title: 'التسويق عبر وسائل التواصل',
          description:
            'تفاعل مع جمهورك وابنِ حضوراً قوياً على كافة منصات التواصل الاجتماعي.',
          color: 'from-pink-500 to-pink-600'
        },
        {
          icon: FileText,
          title: 'صناعة المحتوى',
          description:
            'محتوى جذاب يروي قصتك ويؤثر في جمهورك المستهدف.',
          color: 'from-purple-500 to-purple-600'
        },
        {
          icon: PenTool,
          title: 'التصميم الجرافيكي والرسوم المتحركة',
          description:
            'تصاميم بصرية ومحتوى موشن إبداعي يحيي علامتك التجارية ويعزز حضورها عبر جميع المنصات.',
          color: 'from-indigo-500 to-indigo-600'
        },
        {
          icon: Palette,
          title: 'الهوية البصرية',
          description:
            'ابتكار هوية تجارية لا تُنسى تتميز وتتواصل بفعالية مع العملاء.',
          color: 'from-orange-500 to-orange-600'
        },
        {
          icon: Globe,
          title: 'تطوير البرمجيات',
          description:
            'نقوم بتصميم وتطوير مواقع إلكترونية وتطبيقات موبايل جميلة ومتجاوبة تقدم تجربة مستخدم استثنائية',
          color: 'from-green-500 to-green-600'
        },
        {
          icon: DollarSign,
          title: 'الإعلانات الممولة',
          description:
            'ضاعف عائد استثمارك مع حملات إعلانية مستهدفة عبر جوجل وفيسبوك وإنستغرام.',
          color: 'from-yellow-500 to-yellow-600'
        },
        {
  icon: Printer,
  title: 'الطباعة والإنتاج',
  description:
    'خدمات طباعة وإنتاج عالية الجودة لكافة المواد التسويقية والعلامات التجارية.',
  color: 'from-orange-500 to-orange-600'
},
{
  icon: Calendar,
  title: 'إدارة وتنظيم الفعاليات',
  description:
    'تخطيط وتنفيذ الفعاليات من البداية حتى النهاية لصناعة تجارب علامة تجارية لا تُنسى.',
  color: 'from-red-500 to-red-600'
}

       
      ]
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <section
      id="services"
      className="py-24 bg-[#0A1A3A] relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#C9A34E] rounded-full blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#C9A34E] rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#C9A34E] font-semibold text-sm tracking-wider uppercase block mb-4">
            {t.subtitle}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.titleMain}{' '}
            <span className="text-[#C9A34E]">{t.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1 bg-[#C9A34E] mx-auto mb-6" />
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
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-[#0d2347] to-[#0A1A3A] border border-[#C9A34E]/20 rounded-2xl p-8 hover:border-[#C9A34E] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A34E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 relative z-10 group-hover:shadow-[0_0_30px_rgba(201,163,78,0.4)]`}
              >
                <service.icon size={32} className="text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#C9A34E] transition-colors">
                {service.title}
              </h3>

              <p className="text-[#D5D5D5] leading-relaxed">
                {service.description}
              </p>

              <motion.div
                initial={{ x: isRTL ? 100 : -100 }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute bottom-0 ${
                  isRTL ? 'right-0' : 'left-0'
                } w-full h-1 bg-gradient-to-r from-[#C9A34E] to-transparent`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;