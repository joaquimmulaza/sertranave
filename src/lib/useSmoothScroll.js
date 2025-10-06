import { useEffect } from 'react';
import Lenis from 'lenis';

const useSmoothScroll = () => {
  useEffect(() => {
    // Inicializa o Lenis com configurações otimizadas
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Função de animação
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Expõe o Lenis globalmente para integração com react-scroll
    window.lenis = lenis;

    // Integração com react-scroll
    const handleScrollToSection = (to) => {
      const element = document.getElementById(to);
      if (element) {
        lenis.scrollTo(element, {
          offset: -80, // Compensa a altura da navbar
          duration: 1.2,
        });
      }
    };

    // Event listener customizado para react-scroll
    window.addEventListener('scrollToSection', (e) => {
      handleScrollToSection(e.detail);
    });

    // Cleanup
    return () => {
      lenis.destroy();
      window.removeEventListener('scrollToSection', handleScrollToSection);
      delete window.lenis;
    };
  }, []);
};

export default useSmoothScroll;