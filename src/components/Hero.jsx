import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// If you have shadcn/ui Button as a default export:
import { Button } from "./ui/button";

const slides = [
  {
    image: require('../assets/images/sertranave.center.png'),
    alt: 'Sertranave Center',
  },
  {
    image: require('../assets/images/sertranave.png'),
    alt: 'Sertranave Logo',
  },
  {
    image: require('../assets/images/giphy.gif'),
    alt: 'Sertranave Animation',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
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
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide drop-shadow-lg mb-4">SERTRANAVE</h1>
        <p className="text-lg md:text-2xl mb-8 font-medium drop-shadow">Serviços Transitários e Navegação Lda</p>
        <Button className="bg-primary text-white px-8 py-3 text-lg rounded shadow-lg hover:bg-primary/90 transition-colors">
          Saiba Mais
        </Button>
      </div>
    </section>
  );
}
