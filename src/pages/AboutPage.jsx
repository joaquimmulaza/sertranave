import React from 'react';
import { motion } from 'framer-motion';
import textContent from '../data/textContent';

export default function AboutPage() {
  return (
    <motion.div
      className="max-w-3xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-3xl font-bold text-primary mb-6">Quem Somos</h1>
      <p className="text-lg text-gray-700 mb-6">{textContent.about}</p>
      <h2 className="text-2xl font-semibold text-primary mb-2">Nossa História</h2>
      <p className="text-base text-gray-700">{textContent.history}</p>
    </motion.div>
  );
}
