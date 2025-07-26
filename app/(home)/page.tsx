"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TravelHero from "@/components/home/TravelHero";
import { AnimatedListDemo } from "@/components/animated-list";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Home() {
  const [showSecond, setShowSecond] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Show the second section after a delay
  useEffect(() => {
    const timer = setTimeout(() => setShowSecond(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className={`flex flex-col md:flex-row w-full h-screen gap-5 md:gap-1 transition-all duration-700 ${showSecond ? 'md:justify-between' : 'md:justify-center'
        }`}
      layout
    >
      <motion.article
        layout
        className={cn(`relative flex flex-col items-center justify-center bg-gradient-to-br
          dark:from-[#181A20] dark:via-[#101114] dark:to-[#181A20] overflow-hidden`, {
          'md:w-[100vw]': !showSecond,
          'md:w-[75vw]': showSecond,
        })}
        style={{
          transition: "width 0.7s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Main Content */}
        <motion.div
          className="h-2/3 md:w-2/3 w-full relative z-10 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-h-[70vh] max-w-[70vw] w-full h-full flex items-center justify-center mx-auto">
            <TravelHero />
          </div>
        </motion.div>
        
      </motion.article>
      
      <AnimatePresence>
        {showSecond && (
          <motion.article
            layout
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center items-center md:w-[25vw] w-full h-full flex-col"
          >
            <h2 className="text-2xl font-bold">What's new in Travel Planner AI?</h2>
            <AnimatedListDemo />
          </motion.article>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
