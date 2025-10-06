import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { useTranslation } from 'react-i18next';
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
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <VisionMissionValues />
      </motion.div>

      {/* Seção de Serviços */}
      <motion.div
        id="services"
        className="max-w-7xl mx-auto px-4 scroll-mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mt-16 mb-6 text-primary">
          {t('our_services')}
        </h2>
        <ServicesSectionV2 services={servicesData} />
      </motion.div>

      {/* Seção de Portos */}
      <motion.div
        id="ports"
        className="max-w-7xl mx-auto px-4 scroll-mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-4 text-primary">
          {t('ports_we_serve')}
        </h2>
        <PortsSection ports={portsData} />
      </motion.div>

      {/* Seção de Clientes */}
      <motion.div
        className="max-w-7xl mx-auto px-4 mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <ClientsSection />
      </motion.div>
    </div>
  );
}