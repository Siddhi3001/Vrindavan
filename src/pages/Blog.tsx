/*
Module Name: Blog.tsx
Purpose: Hall Video Blog showcase
Dependencies: React, motion, LanguageContext, icons
*/

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { Upload, Play, Trash2 } from 'lucide-react';
import hall3 from '../assets/images/hall3.jpeg';
import hall8 from '../assets/images/hall8.jpeg';
import hall19 from '../assets/images/hall19.jpeg';
import video1 from '../assets/images/video1.mp4'; 
import video2 from '../assets/images/video2.mp4'; 
import video3 from '../assets/images/video3.mp4'; 
import video4 from '../assets/images/video4.mp4';
import logo from '../assets/images/logo.png';
import video7 from '../assets/images/video7.mp4';
import hall4 from '../assets/images/hall4.jpeg';
import video6 from '../assets/images/video6.mp4';
import hall12 from '../assets/images/hall12.jpeg';
import video9 from '../assets/images/video9.mp4';
import video8 from '../assets/images/video8.mp4';
import rudra from '../assets/images/rudra puja.jpeg';

// Using placeholders for missing assets to avoid build errors

const Blog = () => {
  const { t } = useLanguage();
  const playerRef = useRef<HTMLDivElement>(null);

  const [videos, setVideos] = useState([
    {id: 1 , title : 'Hall Walkthrough' , url:video9, thumbnail : hall4},
    {id: 1, title: 'Hall Walkthrough', url:video7 , thumbnail: hall4},
    {id: 2, title: 'Hall Walkthrough', url:video3 , thumbnail: hall3},
    {id: 3, title: 'Hall Walkthrough', url:video4 , thumbnail: logo},
    {id: 4, title : 'Hall Walkthrough', url:video6, thumbnail:hall12},
    { id: 5, title: 'Hall Walkthrough', url: video1 ,thumbnail: hall19},
    { id: 6, title: 'Hall Walkthrough', url:video2 , thumbnail: hall8 },
    {id:7 ,title: 'Hall Walkthrough',url:video8,thumbnail:rudra}
    
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [activeVideo, setActiveVideo] = useState<any>(videos[0]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setIsUploading(true);
    setTimeout(() => {
      const newVideo = {
        id: Date.now(),
        title: `Vrindavan Highlight ${videos.length + 1}`,
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600'
      };
      setVideos([...videos, newVideo]);
      setIsUploading(false);
    }, 2000);
  };

  const removeVideo = (id: number) => {
    setVideos(videos.filter(v => v.id !== id));
    if (activeVideo?.id === id) setActiveVideo(null);
  };

  const handleVideoSelect = (video: any) => {
    setActiveVideo(video);
    // Smooth scroll to the main player when a video is selected
    playerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="pt-24 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-maroon mb-4"
          >
           {t('vrindavan.blogTitle')}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-1 bg-gold mx-auto mb-6"
          />
          <p className="text-gray-600 max-w-2xl mx-auto italic text-lg uppercase tracking-widest font-bold">
  {t('vrindavan.exploreVideoText')}
</p>
        </div>

        <div className="w-full">
          <div className="space-y-10">
           <div 
             ref={playerRef}
             className="aspect-video max-w-6xl mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl relative border-4 border-gold/20"
           >
              {activeVideo ? (
                <video
                  key={activeVideo.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  <source src={activeVideo.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white p-10 text-center">
                  <Play size={64} className="text-gold mb-4 animate-pulse" />
                  <p className="text-2xl font-serif">Select a Video to Start the Tour</p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {videos.map((video) => (
                <motion.div 
                  layout
                  key={video.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md group border border-gold/10"
                >
                  <div className="relative aspect-video cursor-pointer" onClick={() => handleVideoSelect(video)}>
                    <img src={video.thumbnail} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={video.title} />
                    <div className="absolute inset-0 bg-maroon/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <div className="p-3 bg-white rounded-full text-maroon shadow-lg">
                        <Play size={20} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 flex justify-between items-center bg-white">
                    <p className="font-bold text-maroon uppercase tracking-wider text-[10px]">{video.title}</p>
                    <button onClick={() => removeVideo(video.id)} className="text-red-400 hover:text-red-600">
                        <Trash2 size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}

              <div className="bg-white/50 border-2 border-dashed border-gold/30 rounded-lg flex flex-col items-center justify-center p-8 text-center hover:bg-white/80 transition-all cursor-pointer relative overflow-hidden h-full min-h-[150px]">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 border-4 border-gold border-t-maroon rounded-full animate-spin mb-3" />
                    <p className="text-xs font-bold text-maroon uppercase tracking-widest">Uploading Video...</p>
                  </div>
                ) : (
                  <>
                    <Upload size={32} className="text-gold mb-3" />
                    <p className="text-xs font-bold text-maroon uppercase tracking-widest mb-1">Add New Hall Video</p>
                    <input 
                      type="file" 
                      accept="video/*"
                      onChange={handleUpload}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
