import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
BsFillGlobeCentralSouthAsiaFill
} from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { Magnetic } from './Magnetic';
import { SceneWrapper } from './SceneWrapper';
import { SignatureBrandObject } from './SignatureBrandObject';

const ScrambleText = () => {
  const phrases = ['Full Stack Development', 'Backend Development', 'Frontend Development', 'Web Scraping', 'Automation', 'Database Design', 'API Development', 'Performance Optimization', 'Security Best Practices', 'System Architecture', 'DevOps', 'Testing & Debugging', 'Version Control'];
  const chars = '!<>-_\\/[]{}—=+*^?#';
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    const triggerScramble = () => {
      currentIndex = (currentIndex + 1) % phrases.length;
      const targetText = phrases[currentIndex];
      let frame = 0;
      const maxFrames = 20;
      
      const interval = setInterval(() => {
        frame++;
        const currentScramble = targetText.split('').map((char, index) => {
          if (char === ' ') return ' ';
          const revealPoint = (index / targetText.length) * maxFrames;
          if (frame > revealPoint) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        
        setText(currentScramble);
        
        if (frame >= maxFrames) {
          clearInterval(interval);
          timeoutId = setTimeout(triggerScramble, 2000);
        }
      }, 50);
    };

    timeoutId = setTimeout(triggerScramble, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return <span className="inline-block min-w-70">{text}</span>;
};

const ComingSoonCard = () => (
  <Magnetic strength={0.1}>
    <div className="relative group cursor-not-allowed">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative flex flex-col items-center justify-center gap-1.5 px-6 py-3 md:px-8 md:py-4 rounded-full bg-[#EBEAE9] dark:bg-[#141517] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 dark:from-pink-500/20 dark:via-purple-500/20 dark:to-indigo-500/20"></div>
        <span className="relative text-sm md:text-base min-[2000px]:text-[1vw] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 tracking-wide">
          bajo.farm
        </span>
        <div className="relative flex items-center justify-center gap-2 text-[10px] md:text-xs min-[2000px]:text-[0.8vw] text-gray-600 dark:text-gray-300 uppercase tracking-wider font-medium">
          <span className="relative flex h-2 w-2 min-[2000px]:h-[0.5vw] min-[2000px]:w-[0.5vw]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-full w-full bg-purple-500"></span>
          </span>
          <span>Coming Soon</span>
        </div>
      </div>
    </div>
  </Magnetic>
);

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center px-4 md:px-8 overflow-hidden bg-[#EBEAE9] dark:bg-[#141517]">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <SceneWrapper cameraPosition={[0, 0, 8]} fov={45}>
          <SignatureBrandObject />
        </SceneWrapper>
      </div>

      <div className="w-full">
        <div className="absolute top-24 left-4 right-4 md:left-0 md:right-0 md:static flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-8 min-[2000px]:mb-[4vh] z-20">
          <div className="flex flex-col gap-3 min-[2000px]:gap-[1.5vh]">
            <h2 className="text-xl md:text-2xl min-[2000px]:text-[2vw] font-light leading-tight max-w-sm min-[2000px]:max-w-[20vw] text-gray-400">
              <ScrambleText />
            </h2>
          </div>

          <div className="hidden md:flex flex-col items-end text-right z-20">
            <ComingSoonCard />
          </div>
        </div>
      </div>

      {/* <div className="relative flex overflow-hidden whitespace-nowrap mt-20 min-[2000px]:mt-[10vh] h-40 min-[2000px]:h-[15vh] w-full z-20 pointer-events-none">
        <motion.div 
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <h1 className="text-[14vw] md:text-[12vw] lg:text-[10vw] min-[2000px]:text-[8vw] font-semibold leading-[0.8] tracking-tighter uppercase pr-8 flex items-center">
            <span className="inline-block ">vijayakabajo</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block italic text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">vijayakabajo</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block">vijayakabajo</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block italic text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">vijayakabajo</span><span className="mx-4 font-light opacity-50">—</span>
          </h1>
          <h1 className="text-[14vw] md:text-[12vw] lg:text-[10vw] min-[2000px]:text-[8vw] font-semibold leading-[0.8] tracking-tighter uppercase pr-8 flex items-center">
            <span className="inline-block">vijayakabajo</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block italic text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">vijayakabajo</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block">vijayakabajo</span><span className="mx-4 font-light opacity-50">—</span>
            <span className="inline-block italic text-transparent [-webkit-text-stroke:2px_black] dark:[-webkit-text-stroke:2px_white]">vijayakabajo</span><span className="mx-4 font-light opacity-50">—</span>
          </h1>
        </motion.div>
      </div> */}
      <div className="absolute bottom-8 md:bottom-12 min-[2000px]:bottom-[5vh] left-4 md:left-8 min-[2000px]:left-[4vw] flex items-center gap-2 md:gap-3 min-[2000px]:gap-[1vw] bg-black/5 dark:bg-white/10 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 min-[2000px]:px-[2vw] min-[2000px]:py-[1vh] rounded-full w-fit transition-colors duration-500 z-20">
        <BsFillGlobeCentralSouthAsiaFill className="w-4 h-4 md:w-5 md:h-5 min-[2000px]:w-[1.5vw] min-[2000px]:h-[1.5vw] animate-spin-slow" />
        <span className="text-sm md:text-base min-[2000px]:text-[1vw] font-light">Located in India</span>
      </div>

      {/* Mobile-only Coming Soon Card */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex md:hidden flex-col items-center z-20 w-max">
        <ComingSoonCard />
      </div>

      <div className="absolute bottom-8 md:bottom-12 min-[2000px]:bottom-[5vh] left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 min-[2000px]:gap-[1vw] z-20">
        <motion.div 
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs md:text-sm min-[2000px]:text-[0.8vw] opacity-50 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-10 md:h-12 min-[2000px]:h-[4vh] bg-black/20 dark:bg-white/20 transition-colors duration-500" />
        </motion.div>
      </div>

      <div className="absolute bottom-8 md:bottom-12 min-[2000px]:bottom-[5vh] right-4 md:right-7 min-[2000px]:right-[4vw] z-20 pointer-events-auto">
        <Magnetic strength={0.2}>
          <a 
            href="/Vijay_Singh_Resume.pdf"
            download
            className="flex items-center gap-1.5 md:gap-2 min-[2000px]:gap-[1vw] px-4 py-2 md:px-6 md:py-3 min-[2000px]:px-[2vw] min-[2000px]:py-[1vh] rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-500 group/btn"
          >
            <span className="text-xs md:text-sm min-[2000px]:text-[1vw] font-medium">Resume</span>
            <HiDownload className="w-3.5 h-3.5 md:w-4 md:h-4 min-[2000px]:w-[1.2vw] min-[2000px]:h-[1.2vw] transition-transform group-hover/btn:translate-y-1" />
          </a>
        </Magnetic>
      </div>
    </section>
  );
};
