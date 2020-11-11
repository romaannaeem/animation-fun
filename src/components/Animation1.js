import React from 'react';
import { motion } from 'framer-motion';

export default function Animation1() {
  return (
    <motion.div
      className="anim1"
      animate={{
        x: [0, 600, 0],
        scale: [1, 2, 1],
        rotate: [0, 270, 270],
        borderRadius: ['0%', '50%', '0%'],
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
        loop: Infinity,
        repeatDelay: 1,
      }}
    />
  );
}
