/*
Module Name: Gallery.tsx
Purpose: Masonry style image gallery with lightbox
Editable Sections: Images from galleryData.js
Dependencies: React, motion, LanguageContext, galleryData.js
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { galleryData } from '../data/galleryData';
import { X, ZoomIn } from 'lucide-react';

const Gallery = () => {
  const { t, language } = useLanguage();
  const [selectedImg, setSelectedImg] = useState<any>(null);

  return (
    <div className="bg-cream pt-24 pb-24">
      <section className="py-24 text-center px-6">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-maroon mb-6"
          >
            {t('nav.gallery')}
          </motion.h1>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto italic">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryData.map((img) => (
            <motion.div
              layoutId={`img-${img.id}`}
              key={img.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImg(img)}
              className="relative group cursor-zoom-in overflow-hidden rounded-sm break-inside-avoid shadow-lg"
            >
              <img 
                src={img.url} 
                alt={img.title[language]} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                <ZoomIn size={32} className="mb-2" />
                <span className="text-xs uppercase tracking-widest font-bold">{img.title[language]}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-gold transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </button>
            
            <motion.div
              layoutId={`img-${selectedImg.id}`}
              className="max-w-6xl max-h-[80vh] w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg.url} 
                alt={selectedImg.title[language]} 
                className="w-full h-full object-contain shadow-2xl"
              />
              <div className="absolute -bottom-16 left-0 text-white w-full text-center">
                <h3 className="text-2xl font-serif text-gold">{selectedImg.title[language]}</h3>
                <p className="text-xs tracking-widest uppercase mt-2 opacity-60">Vrindavan Garden Events</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
