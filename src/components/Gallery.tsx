import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import type { Variants } from "motion/react";

export function Gallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1704383014662-b6b1799d1bb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzAyMDQ0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Luxury bar interior",
    },
    {
      src: "https://images.unsplash.com/photo-1635547821500-77542481940c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29rYWglMjBzaGlzaGElMjBzbW9rZXxlbnwxfHx8fDE3NzAyMDQ0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Hookah shisha smoke",
    },
    {
      src: "https://images.unsplash.com/photo-1720750165999-5161fff95267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb3VuZ2UlMjBzZWF0aW5nfGVufDF8fHx8MTc3MDIwNDQ5OXww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Modern lounge seating",
    },
    {
      src: "https://images.unsplash.com/photo-1650691960684-c15e3e2d5c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NrdGFpbCUyMGJhciUyMGRyaW5rc3xlbnwxfHx8fDE3NzAxODA4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Cocktail bar drinks",
    },
  ];

  // Simple, lag-free variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Simple Fade */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#132e34] mb-4">
            Gallery
          </h2>
          <p className="text-xl text-gray-600">
            A glimpse into the{" "}
            <span className="text-[#7a000a]">HP Kandelaki experience</span>
          </p>
        </motion.div>

        {/* Staggered Grid - Simple Fade */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative h-80 overflow-hidden rounded-xl bg-gray-100 group cursor-pointer"
            >
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#132e34]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
