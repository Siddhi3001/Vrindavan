/*
Module Name: Home.tsx
Purpose: Main landing page with full showcase
Editable Sections: All sections can be modified here
Dependencies: Components, motion, LanguageContext
*/

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import HeroSlider from '../components/HeroSlider';
import { CheckCircle, Award, Users, Calendar, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import hall8 from '../assets/images/hall8.jpeg';
import hall19 from '../assets/images/hall19.jpeg';
import hall4 from '../assets/images/hall4.jpeg';
import hall12 from '../assets/images/hall12.jpeg';

const Home = () => {
  const { t } = useLanguage();

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const whyChooseUs = [
    { icon: <Star className="text-gold" />, title: t('home.whyChooseList.interiors') },
    { icon: <Users className="text-gold" />, title: t('home.whyChooseList.hall') },
    { icon: <MapPin className="text-gold" />, title: t('home.whyChooseList.location') },
    { icon: <Award className="text-gold" />, title: t('home.whyChooseList.management') },
    { icon: <CheckCircle className="text-gold" />, title: t('home.whyChooseList.facilities') },
    { icon: <Calendar className="text-gold" />, title: t('home.whyChooseList.ambience') }
  ];

  const stats = [
    { label: t('home.stats.experience'), value: "1+", icon: <Calendar /> },
    { label: t('home.stats.events'), value: "50+", icon: <Award /> },
    { label: t('home.stats.guests'), value: "10k+", icon: <Users /> },
    { label: t('home.stats.corporate'), value: "5+", icon: <Star /> }
  ];

  return (
    <div className="bg-cream">
      <HeroSlider />

      {/* Welcome Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.div {...fadeIn}>
            <h2 className="text-gold font-serif text-3xl md:text-5xl mb-6">
              {t('home.welcomeTitle')}
            </h2>
            <div className="w-24 h-1 bg-maroon mx-auto mb-8"></div>
            <p className="text-lg md:text-2xl text-gray-700 font-light leading-relaxed mb-10">
              {t('home.welcomeText')}
            </p>
            <Link to="/about" className="inline-block px-10 py-3 border border-maroon text-maroon font-bold hover:bg-maroon hover:text-white transition-all uppercase tracking-widest text-sm">
              {t('common.learnMore')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-maroon overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2 
            {...fadeIn} 
            className="text-white font-serif text-3xl md:text-5xl text-center mb-16"
          >
            {t('home.whyChoose')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 border border-white/10 hover:border-gold transition-colors group cursor-default"
              >
                <div className="size-12 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-gold text-xl font-bold mb-2 uppercase tracking-wide">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
      {stats.map((stat, idx) => (
        <motion.div
        
          key={idx}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="flex justify-center mb-4 text-maroon">
            {stat.icon}
          </div>

          <div className="text-4xl font-bold text-gold mb-2">
            {stat.value}
          </div>

          <div className="text-gray-500 font-bold uppercase tracking-widest text-xs">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Featured Events Preview */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container mx-auto">
          <motion.h2 {...fadeIn} className="text-maroon font-serif text-3xl md:text-5xl text-center mb-16">
            {t('home.featuredEvents')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="md:col-span-2 relative group overflow-hidden"
            >
              <img src={hall8} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Wedding" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-8">
                <h3 className="text-white text-3xl font-serif">{t('home.eventTypes.weddings')}</h3>
              </div>
            </motion.div>
            <div className="grid grid-rows-2 gap-4">
              <motion.div whileHover={{ scale: 1.02 }} className="relative group overflow-hidden">
                <img
  src={hall4}
  className="w-full h-[200px] md:h-[340px] object-cover group-hover:scale-110 transition-transform duration-700"
  alt="Corporate"
/>
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-white text-xl font-serif">{t('home.eventTypes.corporate')}</h3>
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} className="relative group overflow-hidden">
                          <img
  src={hall19}
  className="w-full h-[200px] md:h-[340px] object-cover group-hover:scale-110 transition-transform duration-700"
  alt="Corporate"
/>
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <h3 className="text-white text-xl font-serif">{t('home.eventTypes.family')}</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

{/* Testimonials Preview */}
<section className="py-24 bg-gray-50">
  <div className="container mx-auto px-6 text-center">
    
    <h2 className="text-maroon font-serif text-3xl md:text-5xl mb-16">
      {t('home.testimonialsTitle')}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

      {t('home.testimonials').map((testimonial: any, i: number) => (
        <motion.div
          key={i}
          {...fadeIn}
          transition={{ delay: i * 0.1 }}
          className="bg-white p-8 border-t-4 border-gold shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="flex justify-center gap-1 text-gold mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={16} fill="currentColor" />
            ))}
          </div>

          <p className="text-gray-600 italic text-sm mb-6">
            "{testimonial.review}"
          </p>

          <div className="font-bold text-maroon uppercase tracking-wide text-xs">
            {testimonial.name}
          </div>
        </motion.div>
      ))}

    </div>
  </div>
</section>
  </div>
  );
};

export default Home;
