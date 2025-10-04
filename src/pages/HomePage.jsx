import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import PortsSection from '../components/PortsSection';
import servicesData from '../data/servicesData';
import portsData from '../data/portsData';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">Nossos Serviços</h2>
        <ServicesSection services={servicesData} />
        <h2 className="text-2xl font-bold mt-12 mb-4 text-primary">Portos que Servimos</h2>
        <PortsSection ports={portsData} />
      </motion.div>
    </div>
  );
}
