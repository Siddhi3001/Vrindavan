/*
Module Name: MapSection.tsx
Purpose: Interactive Google Map embed with accessibility details
Editable Sections: Map iframe SRC
Dependencies: React, LanguageContext
*/

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Navigation, Share2, ExternalLink } from 'lucide-react';

const MapSection = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <div className="container mx-auto mb-10 text-center">
        <h2 className="text-3xl font-serif text-maroon mb-2">{t('location.title')}</h2>
        <p className="text-gold font-medium italic">{t('location.subtitle')}</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 shadow-2xl rounded-sm overflow-hidden border border-maroon/10">
        {/* Map Embed */}
        <div className="lg:col-span-3 h-[500px]">
          <iframe
            src="https://www.google.com/maps?q=Vrindavan%20Garden%20Karmala&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t('location.title')}
          ></iframe>
        </div>
        {/* Map Info */}
        <div className="lg:col-span-1 bg-maroon p-8 text-white flex flex-col justify-center gap-8">
          <div>
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-4">{t('location.actions')}</h4>
            <div className="flex flex-col gap-3">
              <a href="https://www.google.com/maps/place/Vrindavan+Garden+Karmala"
target="_blank"
rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
                <ExternalLink size={16} /> {t('location.openMaps')}
              </a>
              <a href="https://www.google.com/maps/place/Vrindavan+Garden+Karmala"
target="_blank"
rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
                <Navigation size={16} /> {t('location.getDirections')}
              </a>
              <a href="https://www.google.com/maps/place/Vrindavan+Garden+Karmala"
target="_blank"
rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-gold transition-colors">
                <Share2 size={16} /> {t('location.shareLocation')}
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-4">{t('location.accessibility')}</h4>
            <ul className="text-sm space-y-3 font-light text-white/70 italic">
              <li>• {t('location.roadAccess')}</li>
              <li>• {t('location.publicTransport')}</li>
              <li>• {t('location.railway')}</li>
              <li>• {t('location.parkingInfo')}</li>
            </ul>
          </div>

          <div className="bg-white/5 p-4 rounded border border-white/10">
            <p className="text-[10px] uppercase font-bold text-gold tracking-widest mb-1">{t('location.addressTitle')}</p>
            <p className="text-xs leading-relaxed">{t('common.fullAddress')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapSection;
