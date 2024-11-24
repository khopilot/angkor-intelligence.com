"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Send, 
  Phone, 
  MapPin,
  Globe,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  LucideIcon
} from "lucide-react";

const ContactCard = ({ icon: Icon, title, children, delay = 0 }: {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative group"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl transform group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-100" />
    <div className="relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-700 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <Icon className="h-5 w-5 text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
      </div>
      <div className="space-y-2 text-gray-400">{children}</div>
    </div>
  </motion.div>
);

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transform your business with our cutting-edge AI solutions. 
              Reach out to discuss your project.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <ContactCard icon={Mail} title="Email" delay={0.1}>
            <a href="mailto:nicolas@angkor-intelligence.com" 
               className="block hover:text-blue-400 transition-colors">
              nicolas@angkor-intelligence.com
            </a>
            <a href="mailto:stephane@angkor-intelligence.com"
               className="block hover:text-blue-400 transition-colors">
              stephane@angkor-intelligence.com
            </a>
          </ContactCard>

          <ContactCard icon={Phone} title="Phone" delay={0.2}>
            <p>Cambodia Office:</p>
            <a href="tel:+85592332554" 
               className="block hover:text-blue-400 transition-colors">
              +855 92 332 554
            </a>
          </ContactCard>

          <ContactCard icon={Globe} title="Working Hours" delay={0.3}>
            <p>Monday - Friday</p>
            <p>9:00 AM - 6:00 PM (ICT)</p>
            <p className="mt-2 text-blue-400">24/7 Support Available</p>
          </ContactCard>
        </div>

        <div className="max-w-2xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Elements */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-10 blur"></div>
            
            <form onSubmit={handleSubmit} className="relative bg-gray-900/50 p-8 rounded-xl border border-gray-800 backdrop-blur-sm space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="bg-gray-800/50 border-gray-700 focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-gray-800/50 border-gray-700 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-400">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500 min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group relative overflow-hidden"
                disabled={isSubmitted}
              >
                <span className="relative flex items-center justify-center">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}