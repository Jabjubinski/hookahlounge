import { motion } from "motion/react";
import { ImageWithFallback } from "./ImageWithFallback";
import type { Variants } from "motion/react";

export function About() {
  // Image coming from the left
  const imageVariants: Variants = {
    hidden: { opacity: 0, x: -60, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  // Content container (staggers the children coming from the right)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, x: 60, filter: "blur(2px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  return (
    <section
      id="about"
      className="py-20 bg-[#132d32] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Slide from Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants}
            className="relative h-[500px] overflow-hidden rounded-2xl shadow-2xl"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1662468527222-e4edb1cda938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob29rYWglMjBzbW9rZSUyMGRhcmt8ZW58MXx8fHwxNzcwMjA0NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Hookah smoke"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#132e34]/40 to-transparent" />
          </motion.div>

          {/* Slide from Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2
              variants={textItemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Welcome to{" "}
              <span className="text-[#7a000a]">HP Kandelaki Lounge</span>
            </motion.h2>

            <motion.p
              variants={textItemVariants}
              className="text-lg mb-4 text-white/90"
            >
              Step into a world where tradition meets sophistication. HP
              Kandelaki Lounge offers an unparalleled hookah experience in an
              atmosphere of refined elegance.
            </motion.p>

            <motion.p
              variants={textItemVariants}
              className="text-lg mb-6 text-white/90"
            >
              Our expert staff curates premium flavors from around the world,
              paired with craft cocktails and an ambiance that transforms every
              visit.
            </motion.p>

            <motion.div
              variants={textItemVariants}
              className="grid grid-cols-3 gap-6 mt-8"
            >
              {[
                { label: "Premium Flavors", val: "50+" },
                { label: "Years Experience", val: "10+" },
                { label: "VIP Lounge Areas", val: "VIP" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-[#7a000a]">
                    {stat.val}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
