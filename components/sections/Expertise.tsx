"use client";

import { CheckCircle } from "lucide-react";

const expertiseAreas = [
  {
    category: "Technologies",
    skills: ["Deep Learning", "Neural Networks", "Natural Language Processing", "Computer Vision"],
  },
  {
    category: "Industries",
    skills: ["Healthcare", "Finance", "Manufacturing", "Retail"],
  },
  {
    category: "Solutions",
    skills: ["Predictive Analytics", "Process Automation", "Decision Support", "Risk Management"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge AI technologies across multiple industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:bg-gray-800/80 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {area.category}
              </h3>
              <ul className="space-y-3">
                {area.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}