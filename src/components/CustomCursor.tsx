
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState([]);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      setIsVisible(true);
      
      // Add to trail
      setTrail(prev => [
        ...prev.slice(-8),
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    const hideCursor = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      {/* Trail Effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div 
            className="w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(59, 130, 246, ${0.8 - index * 0.1}), rgba(147, 51, 234, ${0.6 - index * 0.1}))`,
            }}
          />
        </motion.div>
      ))}
      
      {/* Main Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="w-8 h-8 rounded-full border-2 border-white" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
