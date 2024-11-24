"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Users2, 
  Brain, 
  BarChart3, 
  Award, 
  Building2, 
  Globe2,
  Server,
  Cpu
} from "lucide-react";

const stats = [
  {
    name: "Global Clients",
    value: "500+",
    description: "Trusted by companies worldwide",
    icon: Globe2,
    gradient: "from-blue-500 to-cyan-500",
    details: ["Fortune 500 Companies", "Tech Startups", "Research Institutions"]
  },
  {
    name: "AI Models Deployed",
    value: "1000+",
    description: "Custom AI solutions in production",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    details: ["Voice Processing", "Computer Vision", "NLP Models"]
  },
  {
    name: "Data Processed",
    value: "1B+",
    description: "Data points analyzed monthly",
    icon: Server,
    gradient: "from-emerald-500 to-teal-500",
    details: ["Text Documents", "Voice Recordings", "Image Data"]
  },
  {
    name: "Computing Power",
    value: "100K+",
    description: "GPU hours monthly",
    icon: Cpu,
    gradient: "from-orange-500 to-red-500",
    details: ["Training", "Inference", "Optimization"]
  }
];

const CountingNumber = ({ value, duration = 2000 }: { value: string, duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [isAnimated, setIsAnimated] = useState(false);
  
  // Parse the number from the string (e.g., "500+" -> 500)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  
  // Animation variants for the counting effect
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (isInView && !isAnimated) {
    setIsAnimated(true);
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className="font-bold text-4xl sm:text-5xl bg-clip-text text-transparent relative"
    >
      {isAnimated ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {numericValue.toString()}{suffix}
        </motion.span>
      ) : (
        "0"
      )}
    </motion.div>
  );
};

const StatCard = ({ stat, index }: { stat: typeof stats[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Background Card */}
      <div className={`relative p-8 rounded-xl border transition-all duration-300
        ${isHovered 
          ? 'bg-gray-800/90 border-gray-700 shadow-lg' 
          : 'bg-gray-900/50 border-gray-800'}`}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icon with gradient background */}
          <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} 
            transform transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <stat.icon className="h-6 w-6 text-white" />
          </div>

          {/* Counter */}
          <div className={`mt-4 bg-gradient-to-r ${stat.gradient}`}>
            <CountingNumber value={stat.value} />
          </div>

          {/* Stat name and description */}
          <h3 className="text-lg font-semibold mt-2 text-white">{stat.name}</h3>
          <p className="text-sm text-gray-400 mt-1">{stat.description}</p>

          {/* Details list */}
          <div className={`mt-4 space-y-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
          }`}>
            {stat.details.map((detail: string, idx: number) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${stat.gradient}`} />
                {detail}
              </div>
            ))}
          </div>
        </div>

        {/* Gradient overlay */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.gradient} 
          opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      </div>
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Driving innovation and delivering results through advanced AI solutions
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.name} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
