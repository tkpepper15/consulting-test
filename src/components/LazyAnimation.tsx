'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface LazyAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  once?: boolean;
  type?: 'fade' | 'slide' | 'scale' | 'reveal';
}

const LazyAnimation: React.FC<LazyAnimationProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  yOffset = 30,
  once = true,
  type = 'fade',
}) => {
  // Initial and animate variants based on animation type
  const getVariants = () => {
    switch (type) {
      case 'fade':
        return {
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 },
        };
      case 'slide':
        return {
          hidden: { opacity: 0, x: -yOffset },
          visible: { opacity: 1, x: 0 },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'reveal':
        return {
          hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
          visible: { opacity: 1, clipPath: 'inset(0 0 0% 0)' },
        };
      default:
        return {
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10%" }}
      variants={variants}
      transition={{ 
        delay, 
        duration, 
        ease: [0.22, 0.03, 0.26, 1.0], // More natural cubic bezier curve
        type: "tween"
      }}
    >
      {children}
    </motion.div>
  );
};

export default LazyAnimation; 