"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Cpu, Network } from "lucide-react";

// Client Components
const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden -z-10">
    <div className="absolute w-full h-full">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
    </div>
  </div>
);

const FloatingIcon = ({ icon: Icon, delay }) => {
  return (
    <div className={`absolute hidden lg:block animate-float opacity-20 ${delay}`}>
      <Icon size={24} className="text-blue-500" />
    </div>
  );
};

const GradientButton = ({ children, className, ...props }) => {
  return (
    <Button
      size="lg"
      className={`relative overflow-hidden px-8 py-6 ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </Button>
  );
};

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      <AnimatedBackground />
      
      {/* Floating Icons - Positioned absolutely */}
      <FloatingIcon icon={Brain} delay="delay-0" />
      <FloatingIcon icon={Cpu} delay="delay-150" />
      <FloatingIcon icon={Network} delay="delay-300" />

      <div className={`text-center max-w-5xl mx-auto space-y-8 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="relative">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Custom AI Solutions
            </span>
            <br />
            <span className="text-white">
              For Your Future
            </span>
          </h1>
          
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
        </div>
        
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Unlock the power of <span className="text-blue-400">voice processing</span>,{' '}
          <span className="text-purple-400">custom avatars</span>, and{' '}
          <span className="text-blue-400">intelligent data integration</span> with
          tailored AI solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <GradientButton className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg group">
            Start Your AI Journey
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </GradientButton>
          
          <Button
            variant="outline"
            size="lg"
            className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 text-lg px-8 py-6 group"
          >
            Explore Solutions
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
        </div>

        <div className="pt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400">
          <div className="flex items-center gap-3 group cursor-pointer hover:text-gray-200 transition-colors">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-green-400 to-green-500 group-hover:animate-pulse"></div>
            <span className="text-lg">Enterprise-Grade Models</span>
          </div>
          <div className="flex items-center gap-3 group cursor-pointer hover:text-gray-200 transition-colors">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 group-hover:animate-pulse"></div>
            <span className="text-lg">Secure & Scalable</span>
          </div>
          <div className="flex items-center gap-3 group cursor-pointer hover:text-gray-200 transition-colors">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 group-hover:animate-pulse"></div>
            <span className="text-lg">24/7 Expert Support</span>
          </div>
        </div>
      </div>

      {/* Add custom styles to the head */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s linear infinite;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>
    </section>
  );
}
