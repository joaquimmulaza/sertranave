import React from 'react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/ServicesSection';
import servicesData from '../data/servicesData';
import { useTranslation } from 'react-i18next';

export default function ServicesPage() {
  const { t } = useTranslation();
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-3xl font-bold text-primary mb-8">{t('our_services')}</h1>
      <ServicesSection services={servicesData} />
    </motion.div>
  );
}
