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
    className="relative w-32 h-32 mx-auto mb-8"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg transform rotate-45">
      <div className="absolute inset-1 bg-black rounded-lg"></div>
    </div>
    {/* Small diamond in the middle */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 transform rotate-45"></div>
    </div>
  </motion.div>
);

const BackgroundGrid = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px]"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent"></div>
  </div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-black">
      <BackgroundGrid />
      
      <div className="max-w-6xl mx-auto text-center space-y-16">
        <div className="space-y-8">
          <DiamondLogo />
          
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-white"
            >
              Angkor
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
            >
              Intelligence
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl sm:text-2xl text-gray-400 font-light max-w-3xl mx-auto"
          >
            Revolutionizing AI with LLMs, Voice, Avatars, and RAG
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-full group"
            >
              Experience AI
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-gray-800 hover:border-gray-700 text-gray-300 hover:text-white text-lg px-8 py-6 rounded-full"
            >
              <Play className="mr-2 h-5 w-5" />
              View Demo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
