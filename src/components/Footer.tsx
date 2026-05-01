"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Construct the mailto link for subscription
    const mailtoLink = `mailto:sales@ai-secretary.io?subject=${encodeURIComponent("طلب اشتراك في النشرة البريدية")}&body=${encodeURIComponent(
      `مرحباً،\n\nأود الاشتراك في النشرة البريدية الخاصة بسكرتير AI.\n\nبريدي الإلكتروني: ${email}`
    )}`;
    
    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail("");
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <footer className="bg-[#02040a] w-full border-t border-white/5 pt-12 md:pt-32 pb-8 md:pb-16 relative">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-8 md:gap-y-20 gap-x-12">
          {/* Brand & About */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col items-center text-center md:items-end md:text-right space-y-6 md:space-y-10 border-b border-white/5 pb-8 md:pb-0 md:border-b-0">
            <div className="w-48 h-12 md:w-56 md:h-14 relative">
              <Image 
                src="/Logo.png" 
                alt="Sekerteer Logo" 
                fill 
                className="object-contain object-right" 
                priority
              />
            </div>
            <p className="text-sm md:text-body-md text-white/40 leading-relaxed max-w-sm font-medium">
              تمكين المؤسسات السعودية بأدوات الذكاء الاصطناعي الأكثر تطوراً. نحن نبني جسوراً بين التكنولوجيا المتقدمة واحتياجات السوق المحلي.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Mail className="w-4 h-4" />, href: "mailto:sales@ai-secretary.io" },
                { 
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  ), 
                  href: "#" 
                },
                { 
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ), 
                  href: "#" 
                }
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  href={social.href}
                  whileHover={{ y: -4, borderColor: "#0066FF", color: "#0066FF" }}
                  className="w-11 h-11 rounded-xl border border-white/5 flex items-center justify-center text-white/20 transition-all duration-300 bg-white/[0.02]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-1 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="flex flex-col items-end space-y-6">
              <h4 className="text-white font-black text-[13px] uppercase tracking-[0.2em] opacity-80 text-right w-full">المنصة</h4>
              <ul className="space-y-5 text-right">
                {[
                  { name: "المميزات الذكية", href: "#why-choose-us" },
                  { name: "باقات الأسعار", href: "#pricing" },
                  { name: "مركز المساعدة", href: "#" },
                  { name: "حالة الأنظمة", href: "#" }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/40 hover:text-primary transition-all text-[14px] font-bold">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-end space-y-6">
              <h4 className="text-white font-black text-[13px] uppercase tracking-[0.2em] opacity-80 text-right w-full">الشركة</h4>
              <ul className="space-y-5 text-right">
                {[
                  { name: "قصتنا", href: "#what-is-sekerteer" },
                  { name: "المدونة التقنية", href: "#" },
                  { name: "انضم إلينا", href: "#" },
                  { name: "تواصل معنا", href: "#contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/40 hover:text-primary transition-all text-[14px] font-bold">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-1 lg:col-span-3 flex flex-col items-center text-center md:items-end md:text-right space-y-4 md:space-y-6">
            <h4 className="text-white font-black text-[13px] uppercase tracking-[0.2em] opacity-80 text-right w-full">تواصل مباشر</h4>
            <div className="space-y-6 w-full">
              <div className="flex items-center gap-4 justify-end group cursor-pointer">
                <span className="text-[15px] text-white/50 group-hover:text-white transition-colors font-bold">sales@ai-secretary.io</span>
                <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10 transition-colors group-hover:border-primary/40">
                  <span className="material-symbols-outlined text-[22px] text-primary">mail</span>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-end group">
                <span className="text-[15px] text-white/50 group-hover:text-white transition-colors font-bold">استجابة فورية 24/7</span>
                <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                  <span className="material-symbols-outlined text-[22px] text-primary">verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Credits */}
        <div className="mt-8 md:mt-24 pt-6 md:pt-10 border-t border-white/5 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-8">
          <p className="text-white/20 text-[11px] md:text-[12px] font-black tracking-widest uppercase text-center md:text-right">
            © 2024 سكرتير AI • منصة وطنية متطورة 🇸🇦
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] md:text-[12px] font-black uppercase tracking-widest">Privacy</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] md:text-[12px] font-black uppercase tracking-widest">Terms</a>
            <a href="#" className="text-white/20 hover:text-white transition-colors text-[10px] md:text-[12px] font-black uppercase tracking-widest">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
