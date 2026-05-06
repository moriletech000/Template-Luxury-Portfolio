import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

export const Cursor = () => {
  const mousePosition = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mousePosition.x, springConfig);
  const cursorY = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      // Add/remove class to body for cursor styling
      if (!mobile) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Add hover listeners to interactive elements
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const addListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [data-cursor-hover], .project-item'
      );

      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return interactiveElements;
    };

    const elements = addListeners();

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(() => {
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      addListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.body.classList.remove('custom-cursor-active');
      observer.disconnect();
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        className="relative flex items-center justify-center rounded-full"
        animate={{
          width: isHovering ? 80 : 12,
          height: isHovering ? 80 : 12,
          backgroundColor: isHovering
            ? 'rgba(200, 169, 110, 0.3)'
            : 'rgba(200, 169, 110, 0.8)',
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 100,
        }}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        {isHovering && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="text-accent text-xs font-sans font-light tracking-widest"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
};
