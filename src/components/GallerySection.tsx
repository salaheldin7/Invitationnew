import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PHOTOS = [
  {
    url: 'https://images.pexels.com/photos/1405528/pexels-photo-1405528.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Couple portrait',
  },
  {
    url: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Wedding rings',
  },
  {
    url: 'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Wedding flowers',
  },
  {
    url: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Wedding ceremony',
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #ede3d4 0%, #faf8f3 100%)' }}
    >
      <div className="max-w-lg mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-5xl text-stone-700 mb-2">Our Story</h2>
          <p className="font-arabic text-sm text-stone-500" dir="rtl">
            قصتنا
          </p>
          <div className="golden-divider w-40 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {PHOTOS.map((photo, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-sm"
              style={{
                aspectRatio: i === 0 || i === 3 ? '3/4' : '4/3',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover"
                style={{ filter: 'sepia(15%) saturate(0.9) brightness(1.02)' }}
              />
              {/* Elegant overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, transparent 60%, rgba(201,169,110,0.15) 100%)',
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
