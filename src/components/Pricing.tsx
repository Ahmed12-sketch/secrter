"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

function PricingCard({ plan, idx, isYearly }: { plan: any, idx: number, isYearly: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ 
        type: "spring",
        stiffness: 150,
        damping: 20,
        delay: idx * 0.1 
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] transition-shadow duration-500 cursor-pointer ${
        plan.popular 
          ? "bg-surface-container-low border-2 border-primary shadow-[0_30px_100px_-15px_rgba(0,102,255,0.4)] scale-100 z-20" 
          : "glass-card border-white/10 hover:border-primary/40 z-10"
      }`}
    >
      {/* Internal Grid Background */}
      <div className="absolute inset-0 overflow-hidden rounded-[3rem] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      {plan.popular && (
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute inset-0 rounded-[3rem] border-4 border-primary/20 pointer-events-none blur-sm"
        />
      )}

      {plan.popular && (
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-gradient text-white px-5 sm:px-8 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-[12px] font-black tracking-widest uppercase shadow-xl shadow-primary/30 z-30 whitespace-nowrap"
        >
          الخيار الشائع
        </div>
      )}

      <div className="mb-4 sm:mb-6 space-y-1 sm:space-y-2" style={{ transform: "translateZ(40px)" }}>
        <h3 className={`text-lg sm:text-2xl font-black ${plan.popular ? "text-white" : "text-white/90"}`}>{plan.name}</h3>
        <p className="text-on-surface-variant text-[10px] sm:text-xs leading-relaxed font-medium">{plan.desc}</p>
      </div>

      <div className="mb-8 sm:mb-10" style={{ transform: "translateZ(60px)" }}>
        <div className="flex items-baseline gap-2">
          <AnimatePresence mode="wait">
              <span className="text-3xl sm:text-6xl font-black text-white tracking-tighter">
                {plan.price !== "مخصص" ? `${plan.price}$` : plan.price}
              </span>
          </AnimatePresence>
          {plan.price !== "مخصص" && <span className="text-on-surface-variant font-bold text-sm sm:text-lg">/شهر</span>}
        </div>
      </div>

      <ul className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 flex-grow" style={{ transform: "translateZ(30px)" }}>
        {plan.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-2 sm:gap-3 justify-end text-right group/item">
            <span className={`text-[11px] sm:text-[13px] transition-all duration-300 ${plan.popular ? "text-white font-medium" : "text-on-surface-variant group-hover/item:text-white"}`}>
              {feature}
            </span>
            <div className={`mt-0.5 shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-md sm:rounded-lg flex items-center justify-center shadow-lg ${plan.popular ? "bg-primary text-white" : "bg-white/10 text-primary"}`}>
              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </li>
        ))}
      </ul>

      <Link href="/contact" className="w-full">
        <motion.button 
          whileHover={{ scale: 1.05, translateZ: "80px" }}
          whileTap={{ scale: 0.95 }}
          style={{ transform: "translateZ(50px)" }}
          className={`w-full py-4 rounded-xl sm:rounded-[1.5rem] font-black text-sm sm:text-lg transition-all duration-300 relative overflow-hidden group ${
            plan.popular 
              ? "bg-primary text-white shadow-[0_15px_35px_-10px_rgba(0,102,255,0.5)] glow-button" 
              : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
          }`}
        >
          <span className="relative z-10">{plan.cta}</span>
        </motion.button>
      </Link>
    </motion.div>
  );
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "هل يمكنني تغيير خطتي لاحقاً؟",
      a: "نعم، يمكنك ترقية أو خفض خطتك في أي وقت. إذا قمت بالترقية، سيتم تطبيق التغيير فوراً. إذا قمت بالخفض، سيتم تطبيق التغيير في نهاية دورة الفوترة الحالية."
    },
    {
      q: "ما هي \"المعالجة فائقة السرعة\"؟",
      a: "تخصص المعالجة الفائقة (Turbo Processing) مجموعات معالجات رسومية (GPU) عالية الأداء لطلباتك، مما يضمن معالجة الأوامر بسرعة تصل إلى 5 أضعاف مقارنة بالخطة الأساسية."
    },
    {
      q: "هل هناك فترة تجريبية للخطة الاحترافية؟",
      a: "نقدم فترة تجريبية مجانية لمدة 14 يوماً للمشتركين الجدد في الخطة الاحترافية. لا يلزم وجود بطاقة ائتمان لبدء استكشاف الميزات المتميزة."
    },
    {
      q: "ما مدى أمان بياناتي؟",
      a: "يستخدم سكرتير تشفيراً على مستوى بنكي (AES-256) لجميع البيانات. بالنسبة لعملاء الشركات، نقدم خيارات نشر سحابية خاصة (VPC) وتنفيذ النماذج محلياً."
    }
  ];

  const plans = [
    {
      name: "باقة الأعمال والشركات",
      desc: "حلول ذكاء اصطناعي مخصصة تلبي احتياجات منشأتك وتدعم رؤيتك.",
      price: "مخصص",
      features: [
        "تخصيص كامل لنماذج الذكاء الاصطناعي",
        "خوادم مخصصة (Dedicated) للأداء العالي",
        "مدير حساب مخصص ودعم فني 24/7",
        "تكامل شامل مع أنظمة الشركة (ERP/CRM)",
        "تدريب مخصص للموظفين على المنصة",
        "أعلى معايير الأمان وخصوصية البيانات"
      ],
      cta: "تواصل معنا للحصول على عرض",
      popular: true
    }
  ];



  return (
    <div id="pricing" className="pt-32 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16 md:space-y-32 relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* Hero Section */}
      <section className="text-center space-y-12 relative z-10">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary/80">حلول مخصصة لمنشأتك</span>
          </motion.div>

          <div className="relative inline-block">
            <motion.h1 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]"
            >
              {"استثمر في".split(" ").map((word, i) => (
                <motion.span 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                  className="inline-block mr-4 last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
              <br className="md:hidden" />
              <motion.span 
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
                className="relative inline-block ml-4"
              >
                <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent italic">
                  مستقبل عملك
                </span>
                <motion.div 
                  className="absolute -inset-x-6 -inset-y-2 bg-primary/10 blur-2xl rounded-full -z-10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-medium md:text-xl"
          >
            نحن نؤمن أن كل شركة فريدة من نوعها. تواصل معنا لتصميم خطة ذكاء اصطناعي <span className="text-white underline decoration-primary/30 underline-offset-8">تتناسب تماماً مع حجم وأهداف أعمالك</span>.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="flex justify-center relative z-10 perspective-2000">
        <div className="w-full max-w-lg">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} idx={idx} isYearly={false} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-h1 text-white">الأسئلة الشائعة</h2>
          <p className="text-body-md text-on-surface-variant">كل ما تحتاج لمعرفته حول خططنا وميزاتنا.</p>
        </div>

        <div className="space-y-2.5 sm:space-y-4 px-2 sm:px-0">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card rounded-xl overflow-hidden">
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-3 sm:p-4 md:p-4 flex justify-between items-center text-right group"
              >
                <span className="text-sm md:text-base font-bold text-white group-hover:text-primary group-data-[inview=true]:text-primary transition-colors">{faq.q}</span>
                <span className={`material-symbols-outlined text-on-surface-variant transition-transform text-xl md:text-2xl ${activeFaq === idx ? "rotate-180" : ""}`}>
                  expand_more
                </span>
              </button>
              <div className={`px-3 sm:px-4 pb-2 sm:pb-4 text-on-surface-variant text-[10px] md:text-base leading-relaxed transition-all border-t border-white/5 pt-1 sm:pt-3 ${activeFaq === idx ? "block" : "hidden"}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
