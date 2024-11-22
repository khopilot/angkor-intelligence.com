"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to transform your business with AI? Contact us today for a consultation
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
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
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group"
            >
              Send Message
              <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-blue-500" />
              <span>contact@aisolutions.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-purple-500" />
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}