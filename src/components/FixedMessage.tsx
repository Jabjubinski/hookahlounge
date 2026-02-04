import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const FixedMessage = () => {
  const buttonVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { delay: 1, type: "spring" },
    },
    wiggle: {
      rotate: [0, -10, 10, -10, 10, 0],
      scale: [1, 1.1, 1],
      transition: {
        delay: 2,
        duration: 0.5,
        repeat: 3,
        repeatDelay: 5,
      },
    },
  };

  return (
    <div className="fixed right-6 bottom-6 z-100 flex flex-col items-end gap-2">
      <motion.div
        variants={buttonVariants}
        initial="initial"
        animate={["animate", "wiggle"]}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.open("https://wa.me/995596844884", "_blank")}
        className="w-14 h-14 bg-white rounded-full shadow-2xl flex justify-center items-center cursor-pointer border border-gray-50 shadow-[#7a000a]/20"
      >
        <MessageCircle className="text-[#7a000a] w-7 h-7" />
      </motion.div>
    </div>
  );
};

export default FixedMessage;
