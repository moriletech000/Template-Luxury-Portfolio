import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if loading screen has been shown in this session
    const hasLoaded = sessionStorage.getItem('loaded');
    return !hasLoaded; // Only show loading if not already loaded
  });

  useEffect(() => {
    if (!isLoading) return; // Already determined not to show loading

    // Show loading screen for first visit
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem('loaded', 'true');
    }, 2200);

    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-bg flex flex-col items-center justify-center"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          <motion.div
            className="font-display text-[8rem] text-accent font-light tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            E.M.
          </motion.div>

          <div className="w-64 h-[1px] bg-text-muted mt-12 overflow-hidden">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{
                duration: 2.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
