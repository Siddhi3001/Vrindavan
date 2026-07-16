/*
Module Name: HeroSlider.tsx
Purpose: Autoplay luxury slider for home page
Editable Sections: Slider images and overlay content
Dependencies: React, motion, LanguageContext
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import hall1 from '../assets/images/hall8.jpeg';
import hall2 from '../assets/images/hall4.jpeg';
import hall3 from '../assets/images/hall9.jpeg';
const slides = [
  {
    image: hall1,
    title: "Vrindavan Garden",
  },
  {
    image: hall2,
    title: "Dream Weddings",
  },
  {
    image: hall3,
    title: "Grand Celebrations",
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center px-6">
            <div className="max-w-4xl">
              <motion.h4
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-lg mb-4"
              >
                {t('hero.subtitle')}
              </motion.h4>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-6"
              >
                {t('hero.title')}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-white/90 text-lg md:text-2xl font-light italic mb-10"
              >
                {t('hero.tagline')}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="flex flex-wrap justify-center gap-4 md:gap-6"
              >
                <Link to="/gallery" className="px-8 py-3 bg-gold text-white font-bold rounded-sm uppercase tracking-widest hover:bg-white hover:text-gold transition-all duration-300">
                  {t('hero.explore')}
                </Link>
                <Link to="/contact" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-sm uppercase tracking-widest hover:bg-white hover:text-maroon transition-all duration-300">
                  {t('hero.contact')}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Progress Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              current === i ? 'w-10 bg-gold' : 'w-4 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
