"use client";

import { useState } from 'react';
import { Brain, Code, Database, LineChart, Shield, Workflow, ArrowRight, Bot, Cog, Mic2, LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Add interface for service type
interface Service {
  title: string;
  description: string;
  icon: LucideIcon;  // Import this type from 'lucide-react'
  features: string[];
  gradient: string;
}

// Add interface for ServiceCard props
interface ServiceCardProps {
  service: Service;
  index: number;
}

const services = [
  {
    title: "Custom AI Models",
    description: "Tailored AI solutions engineered for your specific business challenges. From NLP to computer vision, we build models that deliver results.",
    icon: Brain,
    features: ["Custom Model Training", "Model Optimization", "Performance Monitoring"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Voice & Speech AI",
    description: "Advanced speech recognition and synthesis solutions. Transform voice interactions with cutting-edge STT and TTS technologies.",
    icon: Mic2,
    features: ["Speech Recognition", "Text-to-Speech", "Voice Cloning"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "AI-Powered Avatars",
    description: "Create lifelike digital avatars powered by advanced AI. Perfect for virtual assistants, customer service, and digital presence.",
    icon: Bot,
    features: ["Custom Avatar Design", "Real-time Animation", "Emotion Recognition"],
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    title: "RAG Implementation",
    description: "Enhance your AI systems with Retrieval-Augmented Generation. Combine the power of LLMs with your proprietary data.",
    icon: Database,
    features: ["Document Processing", "Knowledge Integration", "Semantic Search"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems and workflows with our expert integration services.",
    icon: Cog,
    features: ["API Development", "System Integration", "Workflow Automation"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Data Processing",
    description: "Transform raw data into AI-ready formats with our advanced data processing and preparation services.",
    icon: LineChart,
    features: ["Data Cleaning", "Feature Engineering", "Pipeline Development"],
    gradient: "from-fuchsia-500 to-purple-500",
  },
];

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card 
        className="relative bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden group h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${service.gradient}`}></div>
        
        <CardHeader className="relative space-y-4">
          <div className="flex items-center justify-between">
            <service.icon className={`h-8 w-8 transition-transform duration-300 ${isHovered ? 'scale-110' : ''} bg-gradient-to-br ${service.gradient} text-white p-1 rounded-lg`} />
            <ArrowRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors duration-300" />
          </div>
          <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {service.title}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <CardDescription className="text-gray-400 text-base leading-relaxed min-h-[80px]">
            {service.description}
          </CardDescription>
          
          <div className={`space-y-2 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                {feature}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            AI Solutions & Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transforming businesses with cutting-edge artificial intelligence solutions.
            From custom models to full-scale deployments, we bring your AI vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
