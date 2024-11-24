"use client";

import { useState } from 'react';
import { 
  Cpu, 
  Building2, 
  Lightbulb,
  Brain,
  Network,
  MessageSquare,
  Camera,
  Bot,
  Factory,
  LineChart,
  Shield,
  Database
} from "lucide-react";

interface Skill {
  name: string;
  description: string;
  icon: any;
  proficiency: number;
}

const expertiseAreas = [
  {
    category: "Core AI Technologies",
    icon: Cpu,
    description: "Cutting-edge artificial intelligence technologies powering next-generation solutions",
    skills: [
      {
        name: "Deep Learning",
        description: "Neural network architectures for complex pattern recognition",
        icon: Brain,
        proficiency: 95
      },
      {
        name: "Natural Language Processing",
        description: "Advanced text and speech processing capabilities",
        icon: MessageSquare,
        proficiency: 90
      },
      {
        name: "Computer Vision",
        description: "Image and video analysis with state-of-the-art accuracy",
        icon: Camera,
        proficiency: 88
      },
      {
        name: "Reinforcement Learning",
        description: "Adaptive systems that learn from environment interactions",
        icon: Bot,
        proficiency: 85
      }
    ]
  },
  {
    category: "Industry Solutions",
    icon: Building2,
    description: "Tailored AI implementations across diverse business sectors",
    skills: [
      {
        name: "Manufacturing & IoT",
        description: "Smart manufacturing and IoT data processing",
        icon: Factory,
        proficiency: 92
      },
      {
        name: "Financial Services",
        description: "Risk assessment and fraud detection systems",
        icon: LineChart,
        proficiency: 90
      },
      {
        name: "Healthcare & Biotech",
        description: "Medical imaging and diagnostic assistance",
        icon: Shield,
        proficiency: 88
      },
      {
        name: "Enterprise Data",
        description: "Large-scale data processing and analytics",
        icon: Database,
        proficiency: 94
      }
    ]
  },
  {
    category: "Implementation Expertise",
    icon: Lightbulb,
    description: "End-to-end AI solution development and deployment capabilities",
    skills: [
      {
        name: "Model Architecture",
        description: "Custom AI model design and optimization",
        icon: Network,
        proficiency: 96
      },
      {
        name: "Data Pipeline Design",
        description: "Efficient data processing and transformation",
        icon: Database,
        proficiency: 93
      },
      {
        name: "System Integration",
        description: "Seamless integration with existing infrastructure",
        icon: Cpu,
        proficiency: 91
      },
      {
        name: "Performance Optimization",
        description: "Model efficiency and scalability improvements",
        icon: LineChart,
        proficiency: 89
      }
    ]
  }
];

const ExpertiseCard = ({ area, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl border transition-all duration-300 cursor-pointer
        ${isSelected 
          ? 'bg-gray-800/80 border-blue-500/50 shadow-lg shadow-blue-500/10' 
          : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'}`}
    >
      <div className="relative p-6 z-10">
        <div className="flex items-center gap-4 mb-4">
          <area.icon className={`h-8 w-8 ${isSelected ? 'text-blue-400' : 'text-gray-400'}`} />
          <h3 className={`text-xl font-bold ${isSelected ? 'text-white' : 'text-gray-200'}`}>
            {area.category}
          </h3>
        </div>
        
        <p className="text-gray-400 mb-6 line-clamp-2">
          {area.description}
        </p>

        <div className="space-y-4">
          {area.skills.map((skill: Skill, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-lg p-4
                ${isSelected ? 'bg-gray-800/50' : 'bg-gray-900/50'}`}
            >
              <div className="flex items-start gap-3">
                <skill.icon className="h-5 w-5 text-blue-400 mt-1" />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-200 mb-1">
                    {skill.name}
                  </h4>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {skill.description}
                  </p>
                  
                  {/* Proficiency Bar */}
                  <div className="mt-2 h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000"
                      style={{ 
                        width: isSelected ? `${skill.proficiency}%` : '0%',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Gradient */}
      <div 
        className={`absolute inset-0 opacity-20 transition-opacity duration-300
          bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10
          ${isSelected ? 'opacity-30' : 'opacity-0'}`}
      />
    </div>
  );
};

export default function Expertise() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our AI Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Combining deep technical knowledge with industry expertise to deliver
            cutting-edge AI solutions that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard
              key={index}
              area={area}
              isSelected={selectedCategory === index}
              onClick={() => setSelectedCategory(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}