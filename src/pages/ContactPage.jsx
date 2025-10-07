import React from 'react';
import imgLuanda from '../assets/images/porto-de-luanda.jpg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
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
            {t('contact_hero_title')}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeIn}
          >
            {t('contact_hero_subtitle')}
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Cards */}
      <section className="py-20 md:py-28 ">
        <div className="container mx-auto px-4 max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactCard icon={<Phone size={40} className="text-primary" />} title={t('contact_card1_title')} text={t('contact_card1_text')} />
            <ContactCard icon={<Mail size={40} className="text-primary" />} title={t('contact_card2_title')} text={t('contact_card2_text')} />
            <ContactCard icon={<MapPin size={40} className="text-primary" />} title={t('contact_card3_title')} text={t('contact_card3_text')} />
          </motion.div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="py-20 md:py-28 bg-gray-50 ">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-primary mb-6">{t('contact_form_title')}</h2>
              <form className="space-y-4">
                <Input placeholder={t('form_name')} />
                <Input type="email" placeholder={t('form_email')} />
                <Input placeholder={t('contact_form_subject')} />
                <Textarea placeholder={t('form_message')} rows={5} />
                <Button type="submit" size="lg" className="w-full">
                  {t('form_submit')} <Send size={18} className="ml-2" />
                </Button>
              </form>
            </motion.div>
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
               <img src={imgLuanda} alt="Mapa" className="rounded-lg shadow-lg w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-primary mb-4">{t('contact_cta_title')}</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">{t('contact_cta_text')}</p>
            <Button
              size="lg"
              onClick={() => {
                window.dispatchEvent(new Event('open-quote'));
              }}
            >
              {t('contact_us')}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ContactCard = ({ icon, title, text }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-md text-center glassmorphism"
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

export default ContactPage;
