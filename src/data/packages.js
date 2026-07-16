/*
Module Name: packages.js
Purpose: Holds venue package details
Editable Sections: Update pricing and features here
Dependencies: None
*/

export const packagesData = [
  {
    id: "silver",
    name: {
      mr: "सिल्व्हर पॅकेज",
      en: "Silver Package",
      hi: "सिल्वर पैकेज"
    },
    price: "₹2,50,000",
    features: {
      mr: ["बेसिक डेकोरेशन", "बैठक व्यवस्था", "लाइटिंग", "पार्किंग"],
      en: ["Basic Decoration", "Seating Arrangement", "Basic Lighting", "Parking Space"],
      hi: ["बेसिक डेकोरेशन", "बैठक व्यवस्था", "लाइटिंग", "पार्किंग"]
    },
    color: "bg-gray-100",
    border: "border-gray-300"
  },
  {
    id: "gold",
    name: {
      mr: "गोल्ड पॅकेज",
      en: "Gold Package",
      hi: "गोल्ड पैकेज"
    },
    price: "₹4,50,000",
    features: {
      mr: ["फ्लॉरल डेकोरेशन", "साउंड सिस्टम", "केटरिंग सपोर्ट", "स्टेज डेकोर"],
      en: ["Floral Decoration", "Advanced Sound System", "Catering Support", "Premium Stage Decor"],
      hi: ["फ्लॉरल डेकोरेशन", "साउंड सिस्टम", "केटरिंग सपोर्ट", "स्टेज डेकोर"]
    },
    color: "bg-yellow-50",
    border: "border-gold",
    featured: true
  },
  {
    id: "platinum",
    name: {
      mr: "प्लॅटिनम पॅकेज",
      en: "Platinum Package",
      hi: "प्लेटिनम पैकेज"
    },
    price: "₹7,50,000",
    features: {
      mr: ["लक्झरी डेकोरेशन", "ब्राइडल सूट", "फोटोग्राफी मदत", "VIP व्यवस्था", "इव्हेंट को-ऑर्डिनेटर"],
      en: ["Luxury Decoration", "Bridal Suite Access", "Photography Support", "VIP Arrangement", "Event Coordinator"],
      hi: ["लक्जरी डेकोरेशन", "ब्राइडल सूट", "फोटोग्राफी सहायता", "VIP व्यवस्था", "इवेंट समन्वयक"]
    },
    color: "bg-maroon/5",
    border: "border-maroon"
  }
];
