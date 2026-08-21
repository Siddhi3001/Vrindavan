/*
Module Name: Gallery.tsx
Purpose: Vrindavan Garden Image Gallery with Lightbox
Dependencies: React, motion, LanguageContext, icons
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { X, ZoomIn } from 'lucide-react';

// Import gallery images
import HB5 from '../assets/images/HB5.jpeg';
import hall3 from '../assets/images/hall3.jpeg';
import hall4 from '../assets/images/hall4.jpeg';
import hall8 from '../assets/images/hall8.jpeg';
import hall12 from '../assets/images/hall12.jpeg';
import hall19 from '../assets/images/hall19.jpeg';
import hall13 from '../assets/images/Hall13.jpeg';
import hall14 from '../assets/images/Hall14.jpeg';


type GalleryImage = {
id: number;
url: string;
title: string;
};

const Gallery = () => {
const { t } = useLanguage();

// Gallery images
// HB5 is the first image
const images: GalleryImage[] = [
{
id: 1,
url: HB5,
title: 'Wedding Decoration',
},
{
id: 2,
url: hall3,
title: 'Vrindavan Hall',
},
{
id: 3,
url: hall4,
title: 'Vrindavan Hall',
},
{
id: 4,
url: hall8,
title: 'Event Celebration',
},
{
id: 5,
url: hall12,
title: 'Open Area',
},
{
id: 6,
url: hall19,
title: 'Grand Hall',
},
{
id: 7,
url: hall13,
title: 'Hall 13',
},
{
id: 8,
url: hall14,
title: 'Hall 14',
}
];

const [selectedImg, setSelectedImg] =
useState<GalleryImage | null>(null);

return ( <div className="bg-cream pt-24 pb-24 min-h-screen">


  {/* Gallery Header */}
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

  {/* Gallery Images */}
  <section className="container mx-auto px-6">

    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

      {images.map((img) => (

        <motion.div
          key={img.id}
          layoutId={`img-${img.id}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onClick={() => setSelectedImg(img)}
          className="
            relative
            group
            cursor-zoom-in
            overflow-hidden
            rounded-lg
            break-inside-avoid
            shadow-lg
          "
        >

          <img
            src={img.url}
            alt={img.title}
            className="
              w-full
              h-auto
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />

          {/* Hover Effect */}
          <div
            className="
              absolute
              inset-0
              bg-maroon/40
              opacity-0
              group-hover:opacity-100
              transition-opacity
              flex
              flex-col
              items-center
              justify-center
              text-white
            "
          >

            <ZoomIn
              size={32}
              className="mb-2"
            />

            <span
              className="
                text-xs
                uppercase
                tracking-widest
                font-bold
                text-center
                px-4
              "
            >
              {img.title}
            </span>

          </div>

        </motion.div>

      ))}

    </div>

  </section>

  {/* Image Lightbox */}
  <AnimatePresence>

    {selectedImg && (

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="
          fixed
          inset-0
          z-[200]
          bg-black/95
          flex
          items-center
          justify-center
          p-6
        "
        onClick={() => setSelectedImg(null)}
      >

        {/* Close Button */}
        <button
          type="button"
          className="
            absolute
            top-6
            right-6
            md:top-10
            md:right-10
            text-white
            hover:text-gold
            transition-colors
            z-10
          "
          onClick={() => setSelectedImg(null)}
          aria-label="Close image"
        >

          <X size={40} />

        </button>

        {/* Selected Image */}
        <motion.div
          layoutId={`img-${selectedImg.id}`}
          className="
            max-w-6xl
            max-h-[80vh]
            w-full
            relative
          "
          onClick={(e) => e.stopPropagation()}
        >

          <img
            src={selectedImg.url}
            alt={selectedImg.title}
            className="
              w-full
              max-h-[80vh]
              object-contain
              shadow-2xl
            "
          />

          {/* Image Title */}
          <div
            className="
              absolute
              -bottom-16
              left-0
              text-white
              w-full
              text-center
            "
          >

            <h3
              className="
                text-2xl
                font-serif
                text-gold
              "
            >
              {selectedImg.title}
            </h3>

            <p
              className="
                text-xs
                tracking-widest
                uppercase
                mt-2
                opacity-60
              "
            >
              Vrindavan Garden Events
            </p>

          </div>

        </motion.div>

      </motion.div>

    )}

  </AnimatePresence>

</div>

);
};

export default Gallery;
