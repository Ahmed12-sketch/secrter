"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "الرئيسية", href: "/" },
  { name: "المميزات", href: "/features" },
  { name: "الأسعار", href: "/pricing" },
  { name: "اتصل بنا", href: "/contact" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#02040a]/80 backdrop-blur-md h-20 border-b border-white/5 shadow-2xl shadow-black/50" 
          : "bg-transparent h-24"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex items-center justify-between" dir="rtl">
          {/* Logo Section */}
          <Link href="/" className="flex items-center group relative h-full">
            <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 relative transition-transform duration-300 group-hover:scale-110">
              <Image 
                src="/Logo.png" 
                alt="Sekerteer Logo" 
                fill 
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-sm font-medium text-on-surface-variant hover:text-white transition-all relative group py-2 font-[family-name:var(--font-readex)]"
              >
                {link.name}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="flex lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center z-0 pointer-events-none">
            <div className="flex items-center gap-1.5 sm:gap-2.5 px-3 sm:px-5 py-1.5 sm:py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 pointer-events-auto shadow-lg shadow-black/20">
              <div className="w-7 h-5 sm:w-10 sm:h-6 relative">
                <Image 
                  src="/vision_2030_logo.png" 
                  alt="Saudi Vision 2030" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-[8px] sm:text-[10px] font-bold text-white/50 tracking-widest uppercase">2030</span>
            </div>
          </div>

          {/* Action Button Section */}
          <div className="flex items-center gap-3 lg:gap-4 relative z-10">
            {/* Vision 2030 badge - Desktop only (next to CTA) */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <div className="w-8 h-5 relative">
                <Image 
                  src="/vision_2030_logo.png" 
                  alt="Saudi Vision 2030" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-[9px] font-bold text-white/50 tracking-widest uppercase">2030</span>
            </div>

            <Link 
              href="/contact" 
              className="hidden sm:flex text-on-primary px-4 lg:px-7 py-2 lg:py-2.5 glow-button shadow-lg shadow-primary/25 text-[10px] lg:text-sm whitespace-nowrap"
            >
              ابدأ الآن
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm md:hidden"
            />
            
            {/* Side Drawer - Sliding from left (consistent with menu icon position) */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 z-[100] w-[280px] sm:w-[320px] bg-[#02040a] border-r border-white/10 flex flex-col p-6 shadow-2xl lg:hidden"
              dir="rtl"
            >
              <div className="flex justify-between items-center mb-10">
                <div className="w-24 h-10 relative">
                  <Image src="/Logo.png" alt="Sekerteer Logo" fill className="object-contain object-right" />
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/50 hover:text-white p-2 bg-white/5 rounded-xl transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6 text-right">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-xl font-bold text-white/80 hover:text-primary transition-colors flex items-center justify-between group"
                    >
                      {link.name}
                      <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8 mt-4 border-t border-white/5 space-y-8"
                >
                  <Link 
                    href="/contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center py-4 bg-primary text-white rounded-xl font-bold text-lg glow-button shadow-lg shadow-primary/20"
                  >
                    ابدأ الآن
                  </Link>
                  
                  <div className="flex flex-col items-center gap-4 pt-4">
                    <div className="w-20 h-10 relative grayscale opacity-50">
                      <Image src="/vision_2030_logo.png" alt="Vision 2030" fill className="object-contain" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">VISION 2030</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
