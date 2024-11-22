"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Advanced AI Features That{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Real-time Analytics",
                  description: "Get instant insights with our real-time data processing capabilities"
                },
                {
                  title: "Predictive Modeling",
                  description: "Make data-driven decisions with our advanced predictive models"
                },
                {
                  title: "Automated Workflows",
                  description: "Streamline your operations with intelligent automation"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-4 rounded-lg bg-gray-800/30 border border-gray-700/50"
                >
                  <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80"
              alt="AI Technology"
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}