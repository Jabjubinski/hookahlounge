import { motion } from "motion/react";
import { Sparkles, Wine, Users, Music } from "lucide-react";
import type { Variants } from "motion/react";

export function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Premium Hookah",
      description:
        "Hand-selected tobacco blends and exotic flavors from around the world, prepared by our expert staff.",
    },
    {
      icon: Wine,
      title: "Craft Cocktails",
      description:
        "Signature drinks and classic cocktails crafted by our talented mixologists using premium spirits.",
    },
    {
      icon: Users,
      title: "VIP Experience",
      description:
        "Private lounge areas with bottle service, perfect for intimate gatherings and celebrations.",
    },
    {
      icon: Music,
      title: "Live Entertainment",
      description:
        "Curated music selection and live DJ performances every weekend to enhance your experience.",
    },
  ];

  // 1. Container variant to handle the staggering of the 4 cards
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Each card starts 0.1s after the previous one
      },
    },
  };

  // 2. Individual card variants
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-[#132e34] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-white/80">
            Everything you need for an unforgettable evening
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(122, 0, 10, 0.25)",
                  transition: { duration: 0.2 },
                }}
                className="bg-white/5 backdrop-blur-sm p-8 transition-colors duration-300 border border-white/10 group cursor-default"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 10 }}
                  className="mb-4 inline-block"
                >
                  <Icon className="w-12 h-12 text-[#7a000a]" />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
