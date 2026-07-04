import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const FOOTER_LINKS = {
  products: [
    { name: "Features", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Modules", href: "#" },
    { name: "Changelog", href: "#" },
  ],
  industries: [
    { name: "Retail Stores", href: "#" },
    { name: "FMCG", href: "#" },
    { name: "Manufacturing", href: "#" },
    { name: "Wholesale & Distribution", href: "#" },
    { name: "Fashion & Garments", href: "#" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Guides & Tutorials", href: "#" },
    { name: "API Documentation", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-surface-950 text-surface-300 border-t border-surface-800">
      <div className="container mx-auto px-4 md:px-8 py-16 lg:py-20">
        {/* Top Section: Links & Brand */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          {/* Brand & Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-105">
                i
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Next<span className="text-primary-500">ERP</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-surface-400 max-w-sm">
              Complete ERP solution for Retail, Wholesale, Distribution &
              Manufacturing Businesses. Built to run your business smarter,
              faster, and better.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-center gap-3 text-sm hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-primary-500" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-3 text-sm hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-primary-500" />
                hello@nexterp.com
              </div>
              <div className="flex items-start gap-3 text-sm hover:text-white transition-colors cursor-pointer">
                <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                <span>
                  Tech Park, Sector 62,
                  <br />
                  Noida, UP, India 201309
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Products</h4>
            {FOOTER_LINKS.products.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm hover:text-primary-400 transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Industries</h4>
            {FOOTER_LINKS.industries.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm hover:text-primary-400 transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Resources</h4>
            {FOOTER_LINKS.resources.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm hover:text-primary-400 transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Company</h4>
            {FOOTER_LINKS.company.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm hover:text-primary-400 transition-colors w-fit"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="border-t border-surface-800 bg-surface-950/50">
        <div className="container mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-surface-500">
            © {new Date().getFullYear()} NextERP Solutions Pvt. Ltd. All rights
            reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-surface-500 hover:text-primary-500 transition-colors"
            >
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="text-surface-500 hover:text-primary-500 transition-colors"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-surface-500 hover:text-primary-500 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-surface-500 hover:text-primary-500 transition-colors"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
