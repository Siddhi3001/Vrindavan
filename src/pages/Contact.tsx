/*
Module Name: Contact.tsx
Purpose: Premium contact page with form, info, and FAQ
Editable Sections: Contact details and FAQ questions
Dependencies: Components, motion, LanguageContext, lucide-react
*/

import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import MapSection from '../components/MapSection';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfos = [
    { icon: <Phone size={20} />, title: t('contact.info.phone'), content: t('common.phoneValue'), link: "tel:+919822149177" },
    { icon: <Mail size={20} />, title: t('common.email'), content: t('common.emailValue'), link: "mailto:vrindavangarden@gmail.com" },
    { icon: <MapPin size={20} />, title: t('contact.info.address'), content: t('common.fullAddress'), link: "#" },
    { icon: <Clock size={20} />, title: t('contact.info.hours'), content: t('common.hoursValue'), link: null }
  ];

  const faqs = [
    { q: t('contact.faq.q1'), a: t('contact.faq.a1') },
    { q: t('contact.faq.q2'), a: t('contact.faq.a2') },
    { q: t('contact.faq.q3'), a: t('contact.faq.a3') },
    { q: t('contact.faq.q4'), a: t('contact.faq.a4') }
  ];

  return (
    <div className="bg-cream min-h-screen pt-24 pb-20">
      <div className="maroon-gradient py-20 text-center text-white px-6">
        <h1 className="text-4xl md:text-5xl font-serif mb-2">{t('contact.title')}</h1>
        <p className="text-gold italic">{t('contact.subtitle')}</p>
      </div>

      <div className="container mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white p-8 shadow-xl border-t-4 border-gold">
              <h3 className="text-maroon text-xl font-serif mb-8">{t('contact.info.address')}</h3>
              <div className="space-y-8">
                {contactInfos.map((info, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="text-maroon p-2 bg-cream rounded">{info.icon}</div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase text-gold">{info.title}</h4>
                      <p className="text-sm font-medium">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white p-8 md:p-12 shadow-xl border-b-8 border-maroon">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-cream p-1 border-2 border-gold flex-shrink-0 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover rounded-full" alt="Owner" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-maroon font-serif text-3xl mb-1">{t('contact.owner.name')}</h2>
                  <p className="text-gold font-bold uppercase tracking-widest text-xs mb-6">{t('contact.owner.designation')}</p>
                  
                  <p className="text-gray-600 italic mb-8 leading-relaxed">
                    "{t('contact.owner.message')}"
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-cream rounded-sm border border-gold/10">
                      <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">{t('contact.owner.directCall')}</p>
                      <a href={`tel:${t('contact.owner.contact1')}`} className="text-maroon font-serif text-xl hover:text-gold transition-colors">{t('contact.owner.contact1')}</a>
                    </div>
                    <div className="p-4 bg-cream rounded-sm border border-gold/10">
                      <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">{t('contact.owner.directCall')}</p>
                      <a href={`tel:${t('contact.owner.contact2')}`} className="text-maroon font-serif text-xl hover:text-gold transition-colors">{t('contact.owner.contact2')}</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div id="map" className="mt-20"><MapSection /></div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 p-10 bg-white shadow-lg border-l-4 border-gold">
          {faqs.map((faq, i) => (
            <div key={i} className="space-y-2">
              <h4 className="text-maroon font-bold text-sm">Q. {faq.q}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
