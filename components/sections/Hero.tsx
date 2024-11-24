"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const DiamondLogo = () => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-6 sm:mb-8"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg transform rotate-45">
      <div className="absolute inset-1 bg-black rounded-lg"></div>
    </div>
    {/* Small diamond in the middle */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-500 to-purple-500 transform rotate-45"></div>
    </div>
  </motion.div>
);

const BackgroundGrid = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:36px_36px] lg:bg-[size:48px_48px]"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent"></div>
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-black">
      <BackgroundGrid />
      
      <div className="max-w-[90rem] mx-auto w-full text-center">
        <div className="space-y-6 sm:space-y-8">
          <DiamondLogo />
          
          <div className="space-y-0 sm:space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-white">
                Angkor
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Intelligence
              </h1>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base xs:text-lg sm:text-xl lg:text-2xl text-gray-400 font-light max-w-xs xs:max-w-sm sm:max-w-xl lg:max-w-3xl mx-auto px-4"
          >
            Revolutionizing AI with LLMs, Voice, Avatars, and RAG
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 rounded-full group whitespace-nowrap"
            >
              Experience AI
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 rounded-full whitespace-nowrap"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View Demo
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Optional: Add a media query style for very small screens */}
      <style jsx global>{`
        @media (max-width: 360px) {
          .text-4xl {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}
