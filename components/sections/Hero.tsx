"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Transforming Business
          </span>
          <br />
          with Tailored AI Solutions
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
          Empowering your business with custom AI solutions that drive innovation
          and excellence
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg group"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 text-lg"
          >
            Learn More
          </Button>
        </div>

        <div className="pt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span>99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-500"></div>
            <span>Enterprise Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
}