/*
Module Name: Navbar.tsx
Purpose: Main navigation bar with responsive menu and language switcher
Editable Sections: Link paths and brand logo
Dependencies: React, React Router, LanguageContext, icons
*/

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, MapPin} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import hallLogo from '../assets/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.vrindavan'), path: '/blog' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.packages'), path: '/packages' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-4 backdrop-blur-md`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo with Brand */}
        <Link to="/" className="flex items-center gap-3 md:gap-5" onClick={closeMenu}>
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg transform hover:scale-110 transition-transform">
  <img
    src={hallLogo}
    alt="Hall Logo"
    className="w-full h-full object-cover"
  />
</div>
          <div className="flex flex-col">
            <span className={`text-2xl md:text-4xl font-bold font-serif leading-tight text-maroon`}>
              {t('common.brandPart1')}
            </span>
            <span className={`text-sm md:text-lg tracking-[0.2em] font-medium uppercase text-gold`}>
              {t('common.brandPart2')}
            </span>
          </div>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[15px] font-bold uppercase tracking-wider hover:text-gold transition-colors ${
                  location.pathname === link.path 
                    ? 'text-maroon underline underline-offset-8 decoration-gold decoration-4'
                    : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 border-l border-gray-200 pl-6 ml-1">
           <a 
  href="/contact#map"
  className="flex items-center gap-2 text-[15px] font-bold uppercase tracking-widest hover:text-gold transition-all text-maroon"
>
  <MapPin size={22} className="text-gold" />
  <span>{t('nav.location')}</span>
</a>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-maroon"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`text-lg font-bold uppercase ${
                    location.pathname === link.path ? 'text-gold' : 'text-maroon'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
