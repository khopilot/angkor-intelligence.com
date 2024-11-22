"use client";

import { motion } from "framer-motion";
import { Users2, Brain, BarChart3, Award } from "lucide-react";

const stats = [
  { name: "Clients Served", value: "500+", icon: Users2 },
  { name: "AI Models Deployed", value: "1000+", icon: Brain },
  { name: "Data Points Processed", value: "1B+", icon: BarChart3 },
  { name: "Industry Awards", value: "50+", icon: Award },
];

export default function Stats() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center p-6 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:bg-gray-800/50 transition-colors"
            >
              <stat.icon className="h-8 w-8 mb-3 text-blue-500" />
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}