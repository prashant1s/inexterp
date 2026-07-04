"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Products", hasDropdown: true },
  { name: "Industries", hasDropdown: true },
  { name: "Modules", hasDropdown: false },
  { name: "Resources", hasDropdown: true },
  { name: "Pricing", hasDropdown: false },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/80 dark:bg-surface-950/80 backdrop-blur-lg border-border/50 shadow-sm py-3" 
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold text-xl group-hover:bg-primary-500 transition-colors">
            i
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Next<span className="text-primary-600">ERP</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="relative group cursor-pointer flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
              
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-500 transition-all group-hover:w-full" />
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button aria-label="Search" className="text-muted-foreground hover:text-foreground transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <div className="text-sm font-medium text-muted-foreground border-l border-border pl-4">
            Sales: +91 98765 43210
          </div>
          <Button className="shadow-md shadow-primary-500/20 hover:scale-105 transition-transform">
            Book Free Demo
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu (simplified for brevity) */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-surface-950 border-b border-border shadow-lg p-4 flex flex-col gap-4 lg:hidden">
           {/* Mobile links and buttons would go here */}
        </div>
      )}
    </motion.header>
  );
}