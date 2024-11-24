"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Brain, LineChart, Users, Mail, SparkleIcon, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationItem {
  name: string;
  href: string;
  icon: LucideIcon;
  description: string;
}

const navigationItems = [
  {
    name: "Solutions",
    href: "#solutions",
    icon: Brain,
    description: "AI Models & Integration",
  },
  {
    name: "Features",
    href: "#features",
    icon: SparkleIcon,
    description: "Voice, Avatar & RAG",
  },
  {
    name: "Services",
    href: "#services",
    icon: LineChart,
    description: "Custom Development",
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
    description: "Get in Touch",
  },
];

const NavItem = ({ 
  item,
  isMobile = false, 
  onClick = () => {} 
}: {
  item: NavigationItem;
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={item.href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group ${
        isMobile 
          ? "flex items-center gap-3 px-4 py-3 hover:bg-gray-800/50 rounded-lg" 
          : "px-4 py-2"
      }`}
    >
      <div className="flex items-center gap-2">
        <item.icon className={`h-4 w-4 ${
          isMobile ? "text-blue-400" : "group-hover:text-blue-400"
        }`} />
        <span className="text-gray-300 group-hover:text-white transition-colors">
          {item.name}
        </span>
      </div>

      {!isMobile && isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 mt-2 px-4 py-2 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-gray-700 w-48"
        >
          <p className="text-sm text-gray-400">{item.description}</p>
        </motion.div>
      )}
    </a>
  );
};

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 md:hidden"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween" }}
          className="absolute right-0 top-0 h-full w-64 bg-gray-900/95 backdrop-blur-md border-l border-gray-800"
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4">
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Menu
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-2 px-3">
                {navigationItems.map((item) => (
                  <NavItem key={item.name} item={item} isMobile onClick={onClose} />
                ))}
              </div>
            </div>

            <div className="p-4 border-t border-gray-800">
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group"
                onClick={onClose}
              >
                Contact Us
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-gray-900/90 backdrop-blur-md border-b border-gray-800" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                Angkor Intelligence
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex items-center space-x-1"
            >
              {navigationItems.map((item) => (
                <NavItem key={item.name} item={item} />
              ))}
              
              <div className="ml-6">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 group"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(true)}
                className="text-gray-400 hover:text-white"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
