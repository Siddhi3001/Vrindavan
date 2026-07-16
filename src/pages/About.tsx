/*
Module Name: About.tsx
Purpose: Hall history, vision, and owner message
Editable Sections: Text content and history dates
Dependencies: React, motion, LanguageContext, icons
*/

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Compass, Heart, Star } from 'lucide-react';
import hall4 from '../assets/images/hall4.jpeg';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-cream pt-24">
      {/* Hero Header */}
      <section className="py-24 bg-maroon text-center relative">
        <div className="container mx-auto px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-serif text-4xl md:text-6xl mb-4"
          >
            {t('nav.about')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold font-bold tracking-widest uppercase text-sm"
          >
            {t('about.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* History & Message */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-maroon font-serif text-3xl md:text-5xl mb-8">{t('about.title')}</h2>
              <p className="text-gray-700 leading-relaxed mb-6 font-light">
                {t('about.history')}
              </p>
              
              <div className="bg-white p-8 border-l-4 border-gold shadow-xl italic text-gray-600">
                "{t('about.ownerMessage')}"
                <div className="mt-4 font-bold text-maroon uppercase tracking-widest text-xs non-italic">
                  - {t('about.ownerLabel')}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-maroon/10 rounded-sm absolute -top-10 -left-10 w-full h-full -z-10"></div>
              <img 
                src={hall4} 
                alt="Palace Interior"
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-cream border border-maroon/5 rounded-sm"
            >
              <Compass className="text-gold size-12 mb-6" />
              <h3 className="text-2xl font-serif text-maroon mb-4">{t('about.vision')}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {t('about.visionText')}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-maroon text-white rounded-sm"
            >
              <Heart className="text-gold size-12 mb-6" />
              <h3 className="text-2xl font-serif mb-4">{t('about.mission')}</h3>
              <p className="text-white/70 font-light leading-relaxed">
                {t('about.missionText')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Premium Facilities */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-maroon font-serif text-4xl md:text-5xl mb-16"
          >
            {t('about.facilitiesTitle')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Facility 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 border-t-4 border-gold"
            >

              <h3 className="text-3xl font-serif text-maroon mb-6">
                {t('about.facilities.facility1.title')}
              </h3>

              <p className="text-gray-600 leading-8 text-justify">
                {t('about.facilities.facility1.desc')}
              </p>

            </motion.div>

            {/* Facility 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 border-t-4 border-gold"
            >

              <h3 className="text-3xl font-serif text-maroon mb-6">
                {t('about.facilities.facility2.title')}
              </h3>

              <p className="text-gray-600 leading-8 text-justify">
                {t('about.facilities.facility2.desc')}
              </p>

            </motion.div>

            {/* Facility 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 border-t-4 border-gold"
            >

              <h3 className="text-3xl font-serif text-maroon mb-6">
                {t('about.facilities.facility3.title')}
              </h3>

              <p className="text-gray-600 leading-8 text-justify">
                {t('about.facilities.facility3.desc')}
              </p>

            </motion.div>

            {/* Facility 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 border-t-4 border-gold"
            >

              <h3 className="text-3xl font-serif text-maroon mb-6">
                {t('about.facilities.facility4.title')}
              </h3>

              <p className="text-gray-600 leading-8 text-justify">
                {t('about.facilities.facility4.desc')}
              </p>

            </motion.div>

            {/* Facility 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 border-t-4 border-gold"
            >

              <h3 className="text-3xl font-serif text-maroon mb-6">
                {t('about.facilities.facility5.title')}
              </h3>

              <p className="text-gray-600 leading-8 text-justify">
                {t('about.facilities.facility5.desc')}
              </p>

            </motion.div>

            {/* Facility 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 border-t-4 border-gold"
            >

              <h3 className="text-3xl font-serif text-maroon mb-6">
                {t('about.facilities.facility6.title')}
              </h3>

              <p className="text-gray-600 leading-8 text-justify">
                {t('about.facilities.facility6.desc')}
              </p>

            </motion.div>

          </div>

        </div>
      </section>
      
    </div>
  );
};

export default About;
