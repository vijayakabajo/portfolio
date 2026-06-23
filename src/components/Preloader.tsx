import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useProgress } from '@react-three/drei';

export const Preloader: React.FC = () => {
  const { progress, total, loaded } = useProgress();
  const [show, setShow] = useState(true);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    // Ensure progress never jumps backwards visually
    setDisplayProgress((p) => Math.max(p, progress));
  }, [progress]);

  useEffect(() => {
    // Enforce a minimum display time so it doesn't flicker on and off
    // while React Three Fiber sequentially registers assets.
    const timer = setTimeout(() => {
      setMinTimePassed(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // If progress reaches 100, and the minimum time has passed, fade out
    if (displayProgress === 100 && minTimePassed) {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [displayProgress, minTimePassed]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#EBEAE9] dark:bg-[#141517]"
        >
          <div className="flex flex-col items-center justify-center w-full max-w-sm px-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-light tracking-tighter mb-4 text-black dark:text-white flex items-baseline gap-1"
            >
              <span>{Math.floor(displayProgress)}</span>
              <span className="text-xl md:text-2xl opacity-50">%</span>
            </motion.div>
            
            <div className="w-full h-[2px] bg-black/10 dark:bg-white/10 overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-black dark:bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${displayProgress}%` }}
                transition={{ ease: "circOut", duration: 0.2 }}
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-[10px] md:text-xs font-medium uppercase tracking-widest text-black/50 dark:text-white/50"
            >
              Initializing Experience
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
