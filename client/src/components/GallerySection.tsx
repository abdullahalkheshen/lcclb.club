/*
 * DESIGN: Velocity Noir — Photo gallery with real LCC race photos
 * Dark background, images with red accent overlays on hover
 * Masonry-inspired grid layout
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const galleryImages = [
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/lizeik_42758a09.jpg", alt: "Hussein Lizeik racing", caption: "Lizeik — Race Day", span: "col-span-1 row-span-2" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/hareb_991a0a8b.jpg", alt: "Hussien Hareb in action", caption: "Hareb — Full Speed", span: "col-span-1 row-span-1" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/atwi_1_5f2b490b.jpg", alt: "Atwi racing", caption: "Atwi — Breaking Away", span: "col-span-2 row-span-1" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/ramona_0d6d5a75.jpg", alt: "Ramona Khalife racing", caption: "Khalife — Women's Champion", span: "col-span-1 row-span-1" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/moussa_5214407b.jpg", alt: "Mahdi Moussa competing", caption: "Moussa — Race Pace", span: "col-span-1 row-span-1" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/atwi_b618f6e0.jpg", alt: "Atwi on the course", caption: "Atwi — Sprint Finish", span: "col-span-1 row-span-1" },
  { src: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/ramona_1_4cf41c9b.jpg", alt: "Ramona Khalife training", caption: "Khalife — Training Ride", span: "col-span-1 row-span-1" },
];

export default function GallerySection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" ref={ref} className="bg-charcoal py-24 md:py-32">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs tracking-[0.4em] uppercase text-racing-red">
            {t('gallery.label')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
            {t('gallery.title')} <span className="text-racing-red">{t('gallery.titleAccent')}</span>
          </h2>
          <p className="font-body text-silver/60 mt-4 max-w-lg mx-auto">
            {t('gallery.description')}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className={`relative overflow-hidden cursor-pointer group ${image.span}`}
              onClick={() => setSelectedImage(i)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover min-h-[200px] md:min-h-[250px] transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end">
                <div className="p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-8 h-[2px] bg-racing-red mb-2" />
                  <p className="font-display text-sm tracking-[0.1em] uppercase text-white">
                    {image.caption}
                  </p>
                </div>
              </div>
              {/* Red corner accent on hover */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-racing-red border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white z-10"
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-center">
              <p className="font-display text-sm tracking-[0.15em] uppercase text-white">
                {galleryImages[selectedImage].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
