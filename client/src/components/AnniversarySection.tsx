import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AnniversarySection() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    },
  };

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Diagonal divider top */}
      <div
        className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-card to-transparent"
        style={{
          clipPath: 'polygon(0 0, 100% 8%, 100% 0)',
        }}
      />

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: Red Logo with Accent */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-3xl blur-3xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/logo-red_96e08fa8.jpg"
                alt="10th Anniversary Logo"
                className="relative w-full h-auto drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right: Celebratory Copy */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Subtitle */}
            <motion.div
              variants={itemVariants}
              className="inline-block"
            >
              <span className="text-sm md:text-base font-bold tracking-widest text-red-500 uppercase">
                {t('anniversary.subtitle')}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              {t('anniversary.title')}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              {t('anniversary.description')}
            </motion.p>

            {/* Secondary description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground leading-relaxed italic"
            >
              {t('anniversary.closing')}
            </motion.p>

            {/* Light gray logo accent (bottom right) */}
            <motion.div
              variants={itemVariants}
              className="pt-8 opacity-40 hover:opacity-60 transition-opacity"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028315716/HR85Ae6ePSDFoQhDjfX2G6/logo-lightgray_c3ebd9c6.jpg"
                alt="10th Anniversary Logo Accent"
                className="w-32 h-auto"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Diagonal divider bottom */}
      <div
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-card to-transparent"
        style={{
          clipPath: 'polygon(0 100%, 100% 92%, 100% 100%)',
        }}
      />
    </section>
  );
}
