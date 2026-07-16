/*
Module Name: Services.tsx
Purpose: Showcase venue facilities with animated cards
Editable Sections: Facilities list and icons
Dependencies: React, motion, LanguageContext, icons
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Flower2, Layout, Home, Coffee, Wind, Car, 
  ArrowUp, Video, Volume2, Lightbulb, Shield, Zap,
  Briefcase, UserCheck, type LucideIcon
} from 'lucide-react';

type ServiceIcon = LucideIcon;

const Services = () => {
  const { t } = useLanguage();

  const services: { id: string; icon: ServiceIcon }[] = [
    { id: 'floral', icon: Flower2 },
    { id: 'theme', icon: Layout },
    { id: 'bridal', icon: Home },
    { id: 'dining', icon: Coffee },
    { id: 'ac', icon: Wind },
    { id: 'parking', icon: Car },
    { id: 'lift', icon: ArrowUp },
    { id: 'cctv', icon: Shield },
    { id: 'sound', icon: Volume2 },
    { id: 'lighting', icon: Lightbulb },
    { id: 'generator', icon: Zap },
    { id: 'coordination', icon: Briefcase },
    { id: 'valet', icon: UserCheck },
    { id: 'photo', icon: Video }
  ];

  return (
    <div className="bg-cream pt-24 min-h-screen">
      <section className="py-24 relative overflow-hidden maroon-gradient text-center px-6">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-20"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="container mx-auto relative z-10"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Our Facilities</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-8 drop-shadow-lg">{t('services.title')}</h1>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-200 text-lg md:text-xl font-light italic max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-cream">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px -12px rgba(128, 0, 0, 0.25)" 
                }}
                className="bg-white p-8 rounded-xl border border-gold/10 transition-all flex flex-col items-center group relative overflow-hidden shadow-sm"
              >
                {/* Decorative background circle on hover */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/5 rounded-full group-hover:scale-[3] transition-transform duration-700 pointer-events-none"></div>
                
                <div className="size-20 bg-cream text-maroon rounded-2xl flex items-center justify-center mb-8 group-hover:bg-maroon group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-xl rotate-3 group-hover:rotate-0">
                  <service.icon size={40} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-maroon font-serif text-xl mb-4 text-center group-hover:text-gold transition-colors">
                  {t(`services.list.${service.id}`)}
                </h3>
                
                <div className="w-10 h-0.5 bg-gold/30 mb-4 group-hover:w-20 transition-all duration-500"></div>
                
                <p className="text-gray-600 text-sm leading-relaxed text-center opacity-80 group-hover:opacity-100 transition-opacity">
                  {t(`services.descriptions.${service.id}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Comparison Section */}
      <section className="py-32 bg-white relative">
        <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block">Quality & Standards</span>
              <h2 className="text-maroon font-serif text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight">
                {t('services.unmatched')}
              </h2>
              <div className="space-y-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex gap-6 items-start"
                >
                  <div className="text-gold font-serif text-4xl opacity-40 italic">01</div>
                  <div>
                    <h4 className="font-bold text-maroon uppercase tracking-widest text-sm mb-3">{t('services.capacity')}</h4>
                    <p className="text-gray-500 text-base leading-relaxed border-l-2 border-gold/20 pl-6">{t('services.capacityDesc')}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="text-gold font-serif text-4xl opacity-40 italic">02</div>
                  <div>
                    <h4 className="font-bold text-maroon uppercase tracking-widest text-sm mb-3">{t('services.diningArea')}</h4>
                    <p className="text-gray-500 text-base leading-relaxed border-l-2 border-gold/20 pl-6">{t('services.diningAreaDesc')}</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-6 items-start"
                >
                  <div className="text-gold font-serif text-4xl opacity-40 italic">03</div>
                  <div>
                    <h4 className="font-bold text-maroon uppercase tracking-widest text-sm mb-3">{t('services.support')}</h4>
                    <p className="text-gray-500 text-base leading-relaxed border-l-2 border-gold/20 pl-6">{t('services.supportDesc')}</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-6">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-64 object-cover rounded-2xl shadow-xl z-10" 
                  alt="Hall" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-64 object-cover rounded-2xl shadow-xl mt-12 z-0" 
                  alt="Decor" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-64 object-cover rounded-2xl shadow-xl -mt-12 z-0" 
                  alt="Stage" 
                />
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-64 object-cover rounded-2xl shadow-xl mt-4 z-10" 
                  alt="Service" 
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -z-10 bg-cream w-full h-full -top-10 -right-10 rounded-3xl border border-gold/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-cream">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-5xl bg-maroon rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border-b-8 border-gold"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Ready to Plan Your Perfect Event?</h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Our team is dedicated to making your celebration truly unforgettable. Contact us today for a personal tour and booking inquiries.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-gold text-maroon font-bold uppercase tracking-widest px-10 py-5 rounded-sm hover:bg-white transition-colors duration-300 shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"></div>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
