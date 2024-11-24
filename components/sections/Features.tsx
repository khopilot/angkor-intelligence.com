"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mic, 
  Video,
  Brain,
  Network,
  Bot,
  ArrowRight,
  FileText,
  Layers,
  Server
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Voice & Speech AI",
    icon: Mic,
    description: "Transform voice interactions with natural speech synthesis and recognition",
    color: "blue",
    showcase: [
      { title: "Multi-Language Support", value: "40+ Languages" },
      { title: "Speech Recognition", value: "99% Accuracy" },
      { title: "Voice Cloning", value: "Instant Generation" },
      { title: "Real-time Processing", value: "<100ms Latency" }
    ]
  },
  {
    title: "Avatar Engine",
    icon: Bot,
    description: "Create and customize photorealistic digital avatars for any use case",
    color: "purple",
    showcase: [
      { title: "Facial Expressions", value: "150+ Mappings" },
      { title: "Video Generation", value: "4K Resolution" },
      { title: "Animation Speed", value: "60 FPS Render" },
      { title: "Style Options", value: "200+ Presets" }
    ]
  },
  {
    title: "RAG System",
    icon: Layers,
    description: "Enhance AI responses with powerful knowledge retrieval and context",
    color: "emerald",
    showcase: [
      { title: "Document Processing", value: "All Formats" },
      { title: "Context Window", value: "100K+ Tokens" },
      { title: "Query Speed", value: "Sub-second" },
      { title: "Integration", value: "API-Ready" }
    ]
  }
];

const FeatureShowcase = ({ feature }) => {
  const gradients = {
    blue: "from-blue-500 to-indigo-500",
    purple: "from-purple-500 to-pink-500",
    emerald: "from-emerald-500 to-teal-500"
  };

  return (
    <div className="relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-transparent" />
      
      <div className="relative">
        <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${gradients[feature.color]}`}>
          <feature.icon className="h-6 w-6 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold mt-6 mb-3">{feature.title}</h3>
        <p className="text-gray-400 mb-8">{feature.description}</p>
        
        <div className="grid grid-cols-2 gap-4">
          {feature.showcase.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-sm text-gray-400">{item.title}</div>
              <div className={`text-lg font-semibold bg-gradient-to-r ${gradients[feature.color]} bg-clip-text text-transparent`}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InteractiveDemo = ({ selectedFeature }) => {
  const screens = {
    "Voice & Speech AI": (
      <div className="relative h-full w-full bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
            <Mic className="h-16 w-16 text-blue-500 animate-bounce" />
          </div>
        </div>
      </div>
    ),
    "Avatar Engine": (
      <div className="relative h-full w-full bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
            <Bot className="h-16 w-16 text-purple-500 animate-bounce" />
          </div>
        </div>
      </div>
    ),
    "RAG System": (
      <div className="relative h-full w-full bg-gray-900/50 rounded-2xl p-6 border border-gray-800">
        <div className="flex items-center justify-center h-full">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
            <Layers className="h-16 w-16 text-emerald-500 animate-bounce" />
          </div>
        </div>
      </div>
    )
  };

  return screens[selectedFeature.title];
};

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);
  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff06_0,transparent_100%)]" />
      </div>
      
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Powerful AI Features for{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                Modern Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Experience the next generation of AI capabilities with our cutting-edge features
              designed for enterprise-scale applications.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={() => setSelectedFeature(feature)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300
                  ${selectedFeature.title === feature.title 
                    ? 'bg-gray-800/80 shadow-lg shadow-blue-500/10' 
                    : 'bg-transparent hover:bg-gray-800/50'}`}
              >
                <div className="flex items-center gap-4">
                  <feature.icon 
                    className={`h-6 w-6 ${
                      selectedFeature.title === feature.title 
                        ? 'text-blue-400' 
                        : 'text-gray-400'
                    }`} 
                  />
                  <h3 className="font-semibold">{feature.title}</h3>
                  <ArrowRight 
                    className={`h-4 w-4 ml-auto transition-transform ${
                      selectedFeature.title === feature.title 
                        ? 'text-blue-400 translate-x-1' 
                        : 'text-gray-400'
                    }`}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-[600px]"
          >
            <InteractiveDemo selectedFeature={selectedFeature} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <FeatureShowcase feature={selectedFeature} />
        </motion.div>
      </div>
    </section>
  );
}
