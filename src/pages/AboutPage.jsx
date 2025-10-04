import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-3xl font-bold text-primary mb-6">{t('about_us_title')}</h1>
      <p className="text-lg text-gray-700 mb-6">{t('about_us_content')}</p>
      <h2 className="text-2xl font-semibold text-primary mb-2">{t('our_history_title')}</h2>
      <p className="text-base text-gray-700">{t('our_history_content')}</p>
    </motion.div>
  );
}
