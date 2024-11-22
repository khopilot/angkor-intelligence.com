"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    content: "The AI solutions provided have transformed our business operations, leading to a 40% increase in efficiency.",
  },
  {
    name: "Michael Chen",
    role: "Director of Innovation",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    content: "Exceptional service and cutting-edge AI technology that delivered beyond our expectations.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Data Science",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    content: "The team's expertise in AI implementation has helped us achieve remarkable results in record time.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Client Success Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how our AI solutions have helped businesses achieve their goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}