"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Features() {
  const [query, setQuery] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [response, setResponse] = useState<null | { text: string; stats: { label: string; value: string; icon: string }[] }>(null);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsAnalyzing(true);
    setResponse(null);
    setTimeout(() => {
      setIsAnalyzing(false);
      setResponse({
        text: "بناءً على تحليل سكرتير اللحظي، تم استنتاج النتائج التالية لاستفسارك:",
        stats: [
          { label: "دقة التحليل", value: "99.98%", icon: "check_circle" },
          { label: "زمن الاستجابة", value: "3.2ms", icon: "bolt" },
          { label: "خطر البنية التحتية", value: "منخفض (0.02%)", icon: "warning" }
        ]
      });
    }, 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#030a07] overflow-hidden">
      {/* Absolute Background Effects */}
      <div className="absolute inset-0 bg-grid-slate pointer-events-none opacity-20"></div>
      <div className="absolute inset-0 bg-mesh pointer-events-none"></div>

      <div className="relative z-10 pt-8 pb-12 md:pt-12 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto space-y-16 md:space-y-24">
        {/* Section 1: What is Sekerteer? (Redesigned Hero Style) */}
        <section id="what-is-sekerteer" className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Text Column */}
            <div className="space-y-6 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-right">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 tracking-wider">
                  الجيل القادم من الأتمتة • إصدار 2.0
                </span>
                <div className="relative inline-block w-full">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] text-white font-bold leading-[1.2] tracking-tight">
                    سكرتير <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary via-blue-400 to-purple-500 inline-block">ذكاءٌ يتخطى</span> الحدود
                  </h1>
                  {/* Decorative Element Under Title */}
                  <div className="mt-4 flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-l from-primary to-transparent"></div>
                    <div className="w-2 h-2 rounded-full border border-primary/40 flex items-center justify-center">
                      <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary to-transparent"></div>
                  </div>
                </div>
                <p className="text-base sm:text-xl text-on-surface-variant max-w-xl leading-relaxed opacity-80">
                  رفيقك الرقمي الذي يفهم اللهجة السعودية بعمق، ويدير عملياتك التجارية بدقة متناهية تفوق التوقعات البشرية.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <button className="px-8 sm:px-10 py-3.5 sm:py-4 text-white font-bold rounded-full flex items-center gap-3 group transition-all hover:scale-105 active:scale-95 glow-button">
                  <span className="material-symbols-outlined group-hover:translate-x-1 group-data-[inview=true]:translate-x-1 transition-transform">arrow_back</span>
                  ابدأ رحلة الأتمتة الآن
                </button>
                <button className="px-8 sm:px-10 py-3.5 sm:py-4 text-white font-bold rounded-full border border-white/10 glass-card hover:bg-white/5 transition-all hover:scale-105 active:scale-95 text-sm sm:text-base">
                  استكشف القدرات
                </button>
              </motion.div>
            </div>

            {/* Image Column - Holographic Visual */}
            <div className="relative order-1 lg:order-2 flex justify-center mt-24 sm:mt-20 lg:mt-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-square"
              >
                {/* Complex Glowing Rings */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute inset-[-10%] border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute inset-[-5%] border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                <div className="relative h-full w-full rounded-[60px] overflow-hidden glass-card border-white/10 group shadow-[0_0_50px_rgba(0,102,255,0.2)]">
                  <Image
                    src="/saudi_tech_management.png"
                    alt="Sekerteer Saudi AI Assistant"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-70 group-hover:opacity-100 group-data-[inview=true]:opacity-100 group-hover:scale-110 group-data-[inview=true]:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030a07] via-transparent to-transparent"></div>

                  {/* Floating HUD elements */}
                  <div className="absolute top-6 right-6 sm:top-10 sm:right-10 glass-card p-3 sm:p-4 rounded-xl sm:rounded-2xl border-primary/30 animate-bounce">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-ping"></div>
                      <span className="text-[8px] sm:text-[10px] font-mono text-emerald-400 uppercase tracking-tighter">System Active</span>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 sm:-top-10 sm:-left-10 glass-card p-2.5 sm:p-5 rounded-xl sm:rounded-3xl border-primary/30 shadow-2xl backdrop-blur-3xl"
                >
                  <span className="material-symbols-outlined text-primary text-xl sm:text-4xl">psychology</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -right-4 sm:-bottom-10 sm:-right-10 glass-card p-2.5 sm:p-5 rounded-xl sm:rounded-3xl border-purple-500/30 shadow-2xl backdrop-blur-3xl"
                >
                  <span className="material-symbols-outlined text-purple-400 text-xl sm:text-4xl">auto_graph</span>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Mini Feature Cards with Staggered Entrance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-32">
            {[
              { title: "موظف مبيعات", desc: "اقتراح منتجات ذكي وبناء سلة شراء متطورة ترفع معدل التحويل.", icon: "shopping_cart", color: "from-primary/20 to-blue-400/10" },
              { title: "خدمة عملاء", desc: "ردود فورية وتحليل مشاعر وحل آلي للتذاكر على مدار الساعة.", icon: "support_agent", color: "from-blue-600/20 to-cyan-400/10" },
              { title: "افتار تفاعلي", desc: "صوت وصورة سعودية بملامح طبيعية تفهم اللهجة والبيئة المحلية.", icon: "face", color: "from-cyan-500/20 to-primary/10" },
              { title: "موظف استقبال", desc: "ترحيب ذكي وتسجيل زوار رقمي وربط مباشر مع موظفي المنشأة.", icon: "badge", color: "from-blue-400/20 to-primary/10" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                
                className="group relative p-5 sm:p-8 rounded-[2rem] overflow-hidden glass-card border-white/5 hover:border-primary/30 transition-all duration-500 cursor-pointer "
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 group-data-[inview=true]:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-data-[inview=true]:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl text-white font-bold">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed opacity-70 group-hover:opacity-100 group-data-[inview=true]:opacity-100">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 2: Why choose Sekerteer? - Redesigned for Premium Look */}
        <section id="why-choose-us" className="relative space-y-8 md:space-y-12 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]"></div>
          </div>

          <div className="relative z-10 space-y-16">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20 tracking-[0.2em] uppercase"
              >
                القيمة الأساسية
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight tracking-tight flex flex-col md:flex-row items-center justify-center gap-3 text-center"
              >
                <div className="w-8 h-px bg-primary/30 hidden md:block"></div>
                <span className="leading-normal">لماذا يختار العمالقة <br className="md:hidden" /><span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-blue-400">منصة سكرتير؟</span></span>
                <div className="w-8 h-px bg-primary/30 hidden md:block"></div>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-70"
              >
                نحن لا نقدم مجرد ردود آلية، بل نبني عقولاً رقمية تفهم أعمالك وتنمو معها لتجعل تجربة عملائك استثنائية.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "تحسين الكفاءة التشغيلية",
                  desc: "أتمتة المهام المتكررة بنسبة تصل إلى 70%، مما يتيح لفريقك التركيز على الابتكار والنمو الاستراتيجي.",
                  icon: "trending_up",
                  accent: "from-blue-500 to-cyan-400"
                },
                {
                  title: "استجابة فورية ذكية",
                  desc: "زمن استجابة فائق يقل عن 2 ثانية، مما يضمن تجربة عميل سلسة واحترافية على مدار الساعة.",
                  icon: "bolt",
                  accent: "from-amber-400 to-orange-500"
                },
                {
                  title: "تحسين معدلات التحويل",
                  desc: "استخدام خوارزميات التوصية الذكية لتحليل سلوك العميل ورفع المبيعات بشكل تلقائي ومدروس.",
                  icon: "payments",
                  accent: "from-emerald-400 to-teal-500"
                },
                {
                  title: "تجربة مستخدم محلية",
                  desc: "فهم عميق للهجات المحلية (السعودية والخليجية) لتقديم دعم فني يشعر العميل بآدميته وخصوصيته.",
                  icon: "verified",
                  accent: "from-purple-500 to-pink-500"
                },
                {
                  title: "أمان البيانات والخصوصية",
                  desc: "معايير تشفير متقدمة وبروتوكولات أمان عالمية تضمن حماية تامة لبيانات منشأتك وعملائك.",
                  icon: "shield_lock",
                  accent: "from-rose-500 to-red-600"
                },
                {
                  title: "تكامل الأنظمة المؤسسية",
                  desc: "ربط تقني متقدم مع أنظمة CRM والـ ERP لضمان تدفق البيانات وتنفيذ العمليات بسلاسة تامة.",
                  icon: "hub",
                  accent: "from-cyan-400 to-blue-600"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.5 }}
                  
                  className="group relative  cursor-pointer"
                >
                  {/* External Glowing Border Beam (Animated on Hover) */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-[32px] opacity-0 group-hover:opacity-100 group-data-[inview=true]:opacity-100 transition-opacity duration-1000 blur-sm"></div>

                  <div className="relative h-full glass-card rounded-[32px] overflow-hidden border border-white/5 transition-all duration-700 group-hover:bg-white/[0 group-data-[inview=true]:bg-white/[0.03] group-hover:-translate-y-2 group-data-[inview=true]:-translate-y-2">
                    {/* Subtle Grid Pattern Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] opacity-20 group-hover:opacity-40 group-data-[inview=true]:opacity-40 transition-opacity"></div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 group-data-[inview=true]:opacity-100 transition-opacity duration-1000"></div>

                    <div className="relative z-10 p-7 flex flex-col h-full gap-5">
                      {/* Top Section with Icon & Number */}
                      <div className="flex items-start justify-between">
                        <div className="relative w-12 h-12">
                          {/* Orbiting Ring */}
                          <div className={`absolute inset-0 bg-gradient-to-tr ${item.accent} rounded-xl opacity-20 blur-lg group-hover:animate-pulse group-data-[inview=true]:animate-pulse`}></div>
                          <div className={`absolute inset-0 border border-white/10 rounded-xl group-hover:rotate-[30deg] group-data-[inview=true]:rotate-[30deg] transition-transform duration-700`}></div>
                          <div className="relative h-full w-full bg-surface border border-white/10 rounded-xl flex items-center justify-center group-hover:border-primary/50 group-data-[inview=true]:border-primary/50 transition-all duration-500 shadow-2xl">
                            <span className={`material-symbols-outlined text-2xl text-white/40 group-hover:text-primary group-data-[inview=true]:text-primary transition-colors`}>
                              {item.icon}
                            </span>
                          </div>
                        </div>
                        <span className="text-[28px] font-black text-white/5 font-mono select-none">0{idx + 1}</span>
                      </div>

                      {/* Middle Section with Content */}
                      <div className="space-y-3 flex-1">
                        <h3 className="text-lg text-white font-bold tracking-tight leading-none">
                          {item.title}
                        </h3>
                        <p className="text-[13px] text-on-surface-variant leading-relaxed opacity-60 group-hover:opacity-90 group-data-[inview=true]:opacity-90 transition-all duration-500 line-clamp-2">
                          {item.desc}
                        </p>
                      </div>

                      {/* Bottom Section with Action & Divider */}
                      <div className="space-y-4">
                        <div className="h-px w-full bg-gradient-to-l from-transparent via-white/10 to-transparent group-hover:via-primary/30 group-data-[inview=true]:via-primary/30 transition-all duration-700"></div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${item.accent} group-hover:animate-ping group-data-[inview=true]:animate-ping`}></div>
                            <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.2em]">Enterprise_Core</span>
                          </div>
                          <div className="flex items-center gap-2 text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 group-data-[inview=true]:opacity-100 -translate-x-4 group-hover:translate-x-0 group-data-[inview=true]:translate-x-0 transition-all duration-500">
                            <span>استعراض المزايا</span>
                            <span className="material-symbols-outlined text-xs">arrow_back</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Why choose Sekerteer? - Redesigned for Premium Look */}
        <section id="sector-solutions" className="relative space-y-12 md:space-y-20">
          <div className="text-center space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20 tracking-[0.2em] uppercase"
            >
              حلول متخصصة
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl text-white font-extrabold tracking-tight"
            >
              حلول القطاعات الكبرى
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 md:-mx-4 lg:mx-0">
            {[
              {
                title: "خدمة العملاء المؤتمتة",
                desc: "ردود ذكية فورية على مدار الساعة تفهم احتياجات العميل بدقة.",
                image: "/saudi_customer_service.png",
                icon: "support_agent"
              },
              {
                title: "إدارة البلاغات الذكية",
                desc: "أتمتة كاملة لدورة حياة التذاكر والبلاغات التقنية.",
                image: "/saudi_tech_management.png",
                icon: "confirmation_number"
              },
              {
                title: "التكامل الرقمي الشامل",
                desc: "ربط تقني متقدم مع أنظمة الفوترة والـ ERP المؤسسية.",
                image: "/saudi_business_team.png",
                icon: "rebase_edit"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                
                className="group relative h-[280px] md:h-[250px] lg:h-[320px] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl cursor-pointer "
              >
                {/* Background Image with Overlay */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 group-data-[inview=true]:scale-110 opacity-30 group-hover:opacity-50 group-data-[inview=true]:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030a07] via-[#030a07]/60 to-transparent"></div>

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end gap-4 z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-data-[inview=true]:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl text-white font-bold leading-tight group-hover:text-primary group-data-[inview=true]:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed opacity-60 group-hover:opacity-100 group-data-[inview=true]:opacity-100 transition-opacity">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button className="flex items-center gap-2 text-xs font-bold text-primary group/btn">
                      <span>اكتشف الحل</span>
                      <span className="material-symbols-outlined text-sm group-hover/btn:-translate-x-1 transition-transform">arrow_back</span>
                    </button>
                  </div>
                </div>

                {/* Decorative Corner Shimmer */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] opacity-0 group-hover:opacity-100 group-data-[inview=true]:opacity-100 transition-opacity duration-1000"></div>
              </motion.div>
            ))}
          </div>

        </section>
      </div>
    </div>
  );
}
