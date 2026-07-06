"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { 
    name: "Products", 
    href: "/products",
    dropdown: [
      { name: "Inventory Management", href: "/products/inventory-management" },
      { name: "Points of Sale", href: "/products/points-of-sale" },
      { name: "Accounts", href: "/products/accounts" },
      { name: "Manufacturing", href: "/products/manufacturing" },
      { name: "CRM", href: "/products/crm" },
      { name: "HRM", href: "/products/hrm" },
      { name: "Integrations", href: "/products/integrations" },
    ]
  },
  { 
    name: "Services", 
    href: "/services",
    dropdown: [
      { name: "IT Hardware", href: "/services/it-hardware" },
      { name: "Consumables Items", href: "/services/consumables-items" },
      { name: "Cloud Service", href: "/services/cloud-service" },
      { name: "Software / ERP", href: "/services/software-erp" },
    ]
  },
  { name: "Industries", href: "/industries", dropdown: [] }, // Empty array acts as placeholder for future dropdowns
  { name: "Modules", href: "/modules" },
  { name: "Resources", href: "/resources", dropdown: [] },
  { name: "Pricing", href: "/pricing" },
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
            <div key={link.name} className="relative group cursor-pointer flex items-center gap-1 py-4">
              <Link 
                href={link.href || "#"} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
              </Link>
              
              {/* Animated Underline */}
              <span className="absolute bottom-3 left-0 w-0 h-[2px] bg-primary-500 transition-all group-hover:w-full" />

              {/* Desktop Dropdown Menu */}
              {link.dropdown && link.dropdown.length > 0 && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white dark:bg-surface-950 border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2 z-50">
                  {link.dropdown.map((subLink) => (
                    <Link 
                      key={subLink.name} 
                      href={subLink.href}
                      className="px-4 py-2 text-sm text-muted-foreground hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950 transition-colors"
                    >
                      {subLink.name}
                    </Link>
                  ))}
                </div>
              )}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-surface-950 border-b border-border shadow-lg lg:hidden overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <Link 
                    href={link.href || "#"} 
                    className="text-base font-semibold text-foreground flex justify-between items-center"
                    onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  
                  {/* Mobile Sub-links */}
                  {link.dropdown && link.dropdown.length > 0 && (
                    <div className="flex flex-col gap-2 pl-4 border-l-2 border-border mt-1">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm text-muted-foreground hover:text-primary-600 py-1"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="border-t border-border mt-4 pt-4 flex flex-col gap-4">
                <div className="text-sm font-medium text-muted-foreground flex items-center justify-between">
                  <span>Sales Contact:</span>
                  <span className="text-foreground">+91 98765 43210</span>
                </div>
                <Button className="w-full">
                  Book Free Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}