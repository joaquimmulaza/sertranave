import React from 'react';
import imgLogistica from '../assets/images/service-logistica.jpg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from './../components/ui/button';
import { Award, Briefcase, Lightbulb, ShieldCheck, Target, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const { t } = useTranslation();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="py-24 md:py-32 text-center bg-gray-50"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-primary mb-4"
            variants={fadeIn}
          >
            {t('about_hero_title')}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            {t('about_hero_subtitle')}
          </motion.p>
        </div>
      </motion.section>

      {/* Nossa História & A Empresa */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-primary mb-4">{t('about_history_title')}</h2>
              <p className="mb-4">{t('about_history_text1')}</p>
              <p>{t('about_history_text2')}</p>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <img src={imgLogistica} alt="Nossa Empresa" className="rounded-lg shadow-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nosso Foco */}
      <section className="py-20 md:py-28 bg-gray-50 ">
        <div className="container mx-auto px-4 text-center ">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-primary mb-4">{t('about_focus_title')}</h2>
            <p className="text-lg max-w-3xl mx-auto">{t('about_focus_text')}</p>
          </motion.div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">{t('about_values_title')}</h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ValueCard icon={<ShieldCheck size={40} className="text-primary" />} title={t('about_value1_title')} text={t('about_value1_text')} />
            <ValueCard icon={<Award size={40} className="text-primary" />} title={t('about_value2_title')} text={t('about_value2_text')} />
            <ValueCard icon={<Lightbulb size={40} className="text-primary" />} title={t('about_value3_title')} text={t('about_value3_text')} />
          </motion.div>
        </div>
      </section>

      {/* Estratégia */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-4">{t('about_strategy_title')}</h2>
            <blockquote className="text-xl italic border-l-4 border-primary pl-4 my-8">
              {t('about_strategy_quote')}
            </blockquote>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge text={t('about_badge_innovation')} />
              <Badge text={t('about_badge_optimization')} />
              <Badge text={t('about_badge_consulting')} />
              <Badge text={t('about_badge_planning')} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-primary mb-4">{t('about_cta_title')}</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">{t('about_cta_text')}</p>
            <Button size="lg">{t('contact_us')}</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, text }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-md text-center"
    variants={{
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    }}
    whileHover={{ y: -10, shadow: 'lg' }}
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{text}</p>
  </motion.div>
);

const Badge = ({ text }) => (
  <span className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
    {text}
  </span>
);

export default AboutPage;
