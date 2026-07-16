/*
Module Name: Packages.tsx
Purpose: Compare and display pricing packages
Editable Sections: pricing data from packages.js
Dependencies: React, motion, LanguageContext, packages.js data
*/

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { packagesData } from '../data/packages';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-cream pt-24 pb-24">
      <section className="py-24 text-center px-6">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-maroon mb-6"
          >
            {t('nav.packages')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold text-lg md:text-xl font-light italic max-w-2xl mx-auto"
          >
            {t('packages.subtitle')}
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packagesData.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-10 rounded-sm border-2 ${pkg.border} ${pkg.color} flex flex-col shadow-xl transition-transform hover:scale-[1.02] duration-500`}
            >
              {pkg.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-white px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                  <Star size={12} fill="currentColor" /> {t('packages.mostPopular')}
                </div>
              )}

              <h3 className="text-maroon text-2xl font-serif mb-2">{pkg.name[language]}</h3>
              <div className="text-4xl font-bold text-maroon mb-8">
                {pkg.price}
                <span className="text-sm font-normal text-gray-400 block mt-1 uppercase tracking-widest">{t('packages.startingPrice')}</span>
              </div>

              <div className="flex-1 space-y-4 mb-10 border-t border-gray-100 pt-8">
                {pkg.features[language].map((feature, i) => (
                  <div key={i} className="flex gap-3 items-center text-gray-700">
                    <div className="size-5 bg-gold/10 text-gold rounded-full flex items-center justify-center">
                      <Check size={12} />
                    </div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className={`w-full py-4 text-center font-bold uppercase tracking-widest text-xs transition-all ${
                pkg.featured ? 'bg-gold text-white hover:bg-maroon' : 'bg-transparent border border-maroon text-maroon hover:bg-maroon hover:text-white'
              }`}>
                {t('common.bookNow')}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Section */}
      <section className="container mx-auto px-6 mt-20">
        <div className="bg-maroon p-12 text-center text-white rounded-sm shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/absurdity.png')] opacity-10"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
            <h2 className="text-3xl font-serif text-gold mb-6">{t('packages.customTitle')}</h2>
            <p className="mb-10 text-white/70 max-w-2xl mx-auto font-light">
              {t('packages.customText')}
            </p>
            <Link to="/contact" className="inline-block px-12 py-3 bg-white text-maroon font-serif text-lg hover:bg-gold hover:text-white transition-all shadow-lg italic">
              {t('packages.discuss')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
