import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Importar os logos dos clientes
import dsvLogo from '../assets/clientes/dsv-logo.png';
import kikoloLogo from '../assets/clientes/kikolo-logo.png';
import octomarLogo from '../assets/clientes/octomar-logo.png';
import prometinLogo from '../assets/clientes/prometin-logo.png';

const ClientsSection = () => {
  const { t } = useTranslation();

  const clients = [
    { name: 'DSV', logo: dsvLogo },
    { name: 'Kikolo', logo: kikoloLogo },
    { name: 'Octomar', logo: octomarLogo },
    { name: 'Prometin', logo: prometinLogo }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-white shadow rounded">
      <div className="max-w-7xl mx-auto px-4">
        {/* Título da seção */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            {t('clients_trust_us')}
          </h2>
          <div className="w-64 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid de logos dos clientes */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="flex items-center justify-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <motion.img
                src={client.logo}
                alt={`${client.name} logo`}
                className="h-16 md:h-18 lg:h-20 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ 
                  filter: "brightness(1.1)",
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Linha decorativa inferior */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
