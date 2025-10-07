import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "./ui/button";
import sertranaveCenter from '../assets/images/slide-03.png';
import sertranaveLogo from '../assets/images/slide-02.jpeg';
import giphy from '../assets/images/slide-01.png';
import slide4 from '../assets/images/slide-04.jpg';

const slides = [
  {
    image: sertranaveCenter,
    alt: 'Sertranave Center',
  },
  {
    image: sertranaveLogo,
    alt: 'Sertranave Logo',
  },
  {
    image: giphy,
    alt: 'Sertranave Animation',
  },
  {
    image: slide4,
    alt: 'Sertranave Animation',
  },
];

export default function Hero() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.img
          key={slides[index].alt}
          src={slides[index].image}
          alt={slides[index].alt}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg mb-4 font-stardos-stencil">{t('hero_title')}</h1>
        <p className="text-lg md:text-2xl mb-8 font-medium drop-shadow">{t('hero_subtitle')}</p>
       
      </div>
    </section>
  );
}
