'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
  type?: 'fade' | 'slide' | 'scale' | 'reveal';
  once?: boolean;
}

const StaggeredContainer: React.FC<StaggeredContainerProps> = ({
  children,
  className = '',
  delay = 0,
  staggerChildren = 0.1,
  type = 'fade',
  once = true,
}) => {
  // Container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerChildren,
      },
    },
  };

  // Child variants based on animation type
  const getChildVariants = () => {
    switch (type) {
      case 'fade':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { 
              type: 'tween',
              ease: [0.22, 0.03, 0.26, 1.0],
              duration: 0.7,
            }
          },
        };
      case 'slide':
        return {
          hidden: { opacity: 0, x: -20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { 
              type: 'tween',
              ease: [0.22, 0.03, 0.26, 1.0],
              duration: 0.7,
            }
          },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { 
              type: 'tween',
              ease: [0.22, 0.03, 0.26, 1.0],
              duration: 0.7,
            }
          },
        };
      case 'reveal':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { 
              type: 'tween',
              ease: [0.22, 0.03, 0.26, 1.0],
              duration: 0.7,
            }
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { 
              type: 'tween',
              ease: [0.22, 0.03, 0.26, 1.0],
              duration: 0.7,
            }
          },
        };
    }
  };

  // Create React Context to provide animation variants to child components
  const StaggerContext = React.createContext(getChildVariants());

  return (
    <StaggerContext.Provider value={getChildVariants()}>
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-10%" }}
      >
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement, {
              variants: getChildVariants(),
              key: index,
            });
          }
          return child;
        })}
      </motion.div>
    </StaggerContext.Provider>
  );
};

export default StaggeredContainer; 