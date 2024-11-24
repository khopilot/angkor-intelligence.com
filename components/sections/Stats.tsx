"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Database, 
  Bot,
  Cpu,
  LucideIcon
} from "lucide-react";

interface Stat {
  name: string;
  value: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  iconBg: string;
}

const stats = [
  {
    name: "Active Projects",
    value: "20+",
    description: "Custom AI solutions in development",
    icon: Brain,
    gradient: "from-blue-400 to-blue-600",
    iconBg: "bg-blue-500"
  },
  {
    name: "Data Processed",
    value: "100M+",
    description: "Documents and audio files processed",
    icon: Database,
    gradient: "from-purple-400 to-pink-600",
    iconBg: "bg-purple-500"
  },
  {
    name: "AI Models",
    value: "15+",
    description: "Specialized models deployed",
    icon: Bot,
    gradient: "from-emerald-400 to-emerald-600",
    iconBg: "bg-emerald-500"
  },
  {
    name: "Computing Power",
    value: "10K+",
    description: "GPU hours monthly",
    icon: Cpu,
    gradient: "from-orange-400 to-orange-600",
    iconBg: "bg-orange-500"
  }
];

const StatCard = ({ stat }: { stat: Stat }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-2xl bg-gray-900/40 border border-gray-800"
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl ${stat.iconBg} flex items-center justify-center mb-6`}>
        <stat.icon className="h-6 w-6 text-white" />
      </div>

      {/* Bar below icon */}
      <div className={`h-2 w-24 rounded-full bg-gradient-to-r ${stat.gradient} mb-6`} />

      {/* Content */}
      <h3 className="text-xl font-semibold text-white mb-2">
        {stat.name}
      </h3>
      <p className="text-gray-400 text-sm">
        {stat.description}
      </p>

      {/* Number overlay */}
      <div className="absolute top-6 right-6">
        <span className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
          {stat.value}
        </span>
      </div>
    </motion.div>
  );
};

export default function Stats() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.name} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
