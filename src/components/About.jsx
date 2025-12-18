import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { language } = useLanguage();

  const content = {
    en: {
      subtitle: "About EBDA",
      titleMain: "Crafting Excellence in",
      titleHighlight: "Marketing",
      whoTitle: "Who We Are",
      p1: "EBDA is a full-service creative and marketing agency based in Damascus, Syria dedicated to transforming ideas into powerful business realities.",
      p2: "We help companies build strong brands, establish a competitive digital presence, and achieve sustainable growth through strategic thinking, innovative design, and professional execution.",
      p3: "With a multidisciplinary team of experts in marketing, design, development, media production, and business consulting, we deliver tailored solutions that meet the evolving needs of modern businesses.",
      p4: "At EBDA, we believe that every brand has a story worth telling and we are here to bring that story to life with clarity, creativity, and impact.",
      values: [
        {
          icon: Target,
          title: 'Our Mission',
          description: 'To empower businesses with innovative marketing strategies that drive growth and establish market leadership.'
        },
        {
          icon: Eye,
          title: 'Our Vision',
          description: 'To be the most trusted marketing partner in the region, known for creativity, results, and excellence.'
        },
        {
          icon: Award,
          title: 'Our Values',
          description: 'Innovation, integrity, excellence, and client success are at the core of everything we do.'
        }
      ]
    },
    ar: {
      subtitle: "عن ابدأ",
      titleMain: "صناعة التميز في",
      titleHighlight: "التسويق",
      whoTitle: "من نحن",
      p1: " ابدأ هي وكالة إبداعية وتسويقية متكاملة مقرها دمشق، سوريا، مكرسة لتحويل الأفكار إلى حقائق تجارية قوية.",
      p2: "نساعد الشركات على بناء علامات تجارية قوية، وتأسيس حضور رقمي منافس، وتحقيق نمو مستدام من خلال التفكير الاستراتيجي، التصميم المبتكر، والتنفيذ الاحترافي.",
      p3: "مع فريق متعدد التخصصات من الخبراء في التسويق، التصميم، البرمجة، الإنتاج الإعلامي، والاستشارات التجارية، نقدم حلولاً مخصصة تلبي الاحتياجات المتطورة للأعمال الحديثة.",
      p4: "في ابدأ، نؤمن بأن كل علامة تجارية لديها قصة تستحق أن تُروى، ونحن هنا لنحيي تلك القصة بوضوح وإبداع وتأثير.",
      values: [
        {
          icon: Target,
          title: 'رسالتنا',
          description: 'تمكين الشركات باستراتيجيات تسويقية مبتكرة تدفع عجلة النمو وترسخ ريادة السوق.'
        },
        {
          icon: Eye,
          title: 'رؤيتنا',
          description: 'أن نكون الشريك التسويقي الأكثر ثقة في المنطقة، والمشهود له بالإبداع والنتائج والتميز.'
        },
        {
          icon: Award,
          title: 'قيمنا',
          description: 'الابتكار، النزاهة، التميز، ونجاح العملاء هي جوهر كل ما نقوم به.'
        }
      ]
    }
  };

  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0A1A3A] to-[#0d2347] relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23C9A34E' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}></div>
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
          <div className="w-24 h-1 bg-[#C9A34E] mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">{t.whoTitle}</h3>
            <p className="text-[#D5D5D5] text-lg mb-4 leading-relaxed">
              {t.p1}
            </p>

            <p className="text-[#D5D5D5] text-lg mb-4 leading-relaxed">
              {t.p2}
            </p>
            <p className="text-[#D5D5D5] text-lg leading-relaxed">
              {t.p3}
            </p>
            

            <hr className="border-t border-[#C9A34E] my-6 w-24 mx-auto md:mx-0" />

            <p className="text-[#D5D5D5] text-lg mb-4 leading-relaxed ">
              {t.p4}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img className="w-full h-[400px] object-cover" alt="Modern marketing agency office" src="https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A3A]/80 to-transparent"></div>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className={`absolute -bottom-6 ${isRTL ? '-left-6' : '-right-6'} w-32 h-32 bg-[#C9A34E] rounded-full opacity-20 blur-2xl`}
            />
          </motion.div> 
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#0d2347]/50 backdrop-blur-sm border border-[#C9A34E]/20 rounded-2xl p-8 hover:border-[#C9A34E]/50 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-[#C9A34E] to-[#b89340] rounded-xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(201,163,78,0.5)] transition-shadow duration-300"
              >
                <item.icon size={32} className="text-[#0A1A3A]" />
              </motion.div>
              <h4 className="text-2xl font-bold mb-4 text-[#C9A34E]">{item.title}</h4>
              <p className="text-[#D5D5D5] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;