"use client";

import { Brain, Code, Database, LineChart, Shield, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Custom AI Development",
    description: "Tailored AI solutions designed specifically for your business needs",
    icon: Brain,
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics",
    icon: LineChart,
  },
  {
    title: "Process Automation",
    description: "Streamline operations with intelligent automation solutions",
    icon: Workflow,
  },
  {
    title: "Machine Learning",
    description: "Implement cutting-edge ML models for predictive analytics",
    icon: Code,
  },
  {
    title: "Data Security",
    description: "Enterprise-grade security for your AI implementations",
    icon: Shield,
  },
  {
    title: "Big Data Solutions",
    description: "Handle and analyze large-scale data efficiently",
    icon: Database,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI solutions tailored to transform your business operations
            and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/80 transition-colors">
              <CardHeader>
                <service.icon className="h-12 w-12 mb-4 text-blue-500" />
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}