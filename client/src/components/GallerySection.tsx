/*
 * DESIGN: Velocity Noir — Photo gallery with hover effects
 * Dark background, images with red accent overlays on hover
 * Masonry-inspired grid layout
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const GALLERY_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/gallery-cycling-1-TMStZWT2ENinyCKL9AFzLb.webp";
const GALLERY_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/gallery-cycling-2-afzuhQjTHij6L8oYH6zNgV.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/hero-banner-BDTymoM9crACR9RNWH9Kzp.webp";
const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/about-section-Wy528oT5NVbEnNXuvhTkzQ.webp";
const EVENTS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/events-section-A4VmqmsXqCNAyLjTRTagMw.webp";

const galleryImages = [
  { src: GALLERY_1, alt: "Mountain biking through cedar forest", caption: "MTB Trail Ride — Cedar Forest", span: "col-span-1 row-span-2" },
  { src: HERO_IMG, alt: "Road cycling in Lebanese mountains", caption: "Mountain Road Training", span: "col-span-1 row-span-1" },
  { src: GALLERY_2, alt: "Sunset coastal ride", caption: "Sunset Coastal Ride", span: "col-span-1 row-span-1" },
  { src: ABOUT_IMG, alt: "Team peloton ride", caption: "Team Peloton Formation", span: "col-span-2 row-span-1" },
  { src: EVENTS_IMG, alt: "Race start line", caption: "Race Day — Start Line", span: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800&q=80", alt: "Cycling gear close-up", caption: "Gear & Equipment", span: "col-span-1 row-span-1" },
];

export default function GallerySection() {
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
            Moments
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
            FROM THE <span className="text-racing-red">ROAD</span>
          </h2>
          <p className="font-body text-silver/60 mt-4 max-w-lg mx-auto">
            Capturing the spirit of cycling across Lebanon's most breathtaking landscapes.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
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
