/*
Module Name: Footer.tsx
Purpose: Main footer with links and branding
Editable Sections: Social links and copyright
Dependencies: React, Router, LanguageContext
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-maroon text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold font-serif leading-tight">{t('common.brandPart1')}</span>
              <span className="text-sm tracking-[0.2em] font-medium uppercase text-gold">{t('common.brandPart2')}</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 italic">
              {t('hero.tagline')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-gold transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-gold transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-gold transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">{t('footer.navigation')}</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/" className="hover:text-gold transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">{t('nav.gallery')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">{t('footer.contactInfo')}</h4>
            <ul className="space-y-4 text-sm font-medium text-white/80">
              <li>{t('common.fullAddress')}</li>
              <li>{t('common.phoneValue')}</li>
              <li>{t('common.emailValue')}</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">{t('footer.mailingList')}</h4>
            <div className="flex flex-col gap-4">
              <input type="email" placeholder={t('footer.emailPlace')} className="bg-white/5 border border-white/10 p-3 text-sm focus:outline-none focus:border-gold" />
              <button className="bg-gold text-white font-bold py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-maroon transition-colors">{t('footer.subscribe')}</button>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-sm text-white/80">
          <span className="block mb-2">Developed by <a href="https://github.com/Siddhi3001" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Developer</a></span>
          <div className="flex items-center justify-center gap-3 text-xs">
            <a href="https://github.com/Siddhi3001" target="_blank" rel="noopener noreferrer" className="hover:text-gold">GitHub</a>
            <span className="text-white/30">•</span>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold">LinkedIn</a>
            <span className="text-white/30">•</span>
            <a href="https://siddhi-demo.example.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">Live demo</a>
            <span className="text-white/30">•</span>
            <a href="mailto:hello@example.com" className="hover:text-gold">hello@example.com</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-[10px] text-white/40 uppercase tracking-[0.3em]">
          &copy; {year} Vrindavan Garden. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
