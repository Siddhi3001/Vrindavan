/*
Module Name: FloatingActions.tsx
Purpose: Quick contact buttons on all pages
Editable Sections: Phone number and WhatsApp link
Dependencies: React, motion, icons
*/

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 left-6 z-[90] flex flex-col gap-4">
      {/* Call Now */}
      <motion.a
        href="tel:+919876543210"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        className="size-12 bg-maroon text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-maroon/20 transition-all"
      >
        <Phone size={24} />
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.9 }}
        className="size-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/20 transition-all"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
};

export default FloatingActions;
