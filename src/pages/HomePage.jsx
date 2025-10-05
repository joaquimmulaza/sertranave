import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { useTranslation } from 'react-i18next';
import ServicesSection from '../components/ServicesSection';
import ServicesSectionV2 from '../components/ServicesSectionV2';
import VisionMissionValues from '../components/VisionMissionValues';
import PortsSection from '../components/PortsSection';
import ClientsSection from '../components/ClientsSection';
import servicesData from '../data/servicesData';
import portsData from '../data/portsData';

export default function HomePage() {
   const { t } = useTranslation();
  return (
    <div>
      <Hero />
      {/* Visão, Missão e Valores */}
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <VisionMissionValues />
      </motion.div>
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mt-16 mb-6 text-primary our_services">{t('our_services')}</h2>
        <ServicesSectionV2 services={servicesData} />
        <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">{t('ports_we_serve')}</h2>
        <PortsSection ports={portsData} />
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        {/* Seção de Clientes */}
      <ClientsSection />
      </motion.div>
      
      
    </div>
  );
}
