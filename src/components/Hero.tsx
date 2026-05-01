"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// ─── Flip Card with scroll-triggered animation ───────────────────────────────
function FlipCard({
  colSpan,
  minH,
  front,
  back,
}: {
  colSpan: string;
  minH: string;
  front: React.ReactNode;
  back: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const [flipped, setFlipped] = useState(false);

  // Flip when scrolled into view on mobile/tablet
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setFlipped(true), 400);
      return () => clearTimeout(timer);
    } else {
      setFlipped(false);
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      tabIndex={0}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onClick={() => setFlipped((p) => !p)}
      className={`${colSpan} [perspective:1000px] cursor-pointer focus:outline-none`}
    >
      <div
        className={`relative ${minH} h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 glass-card rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center [backface-visibility:hidden] overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,102,255,0.2)]">
          {front}
        </div>
        {/* Back */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-primary/10 backdrop-blur-xl [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-6 border border-primary/40 text-center">
          {back}
        </div>
      </div>
    </div>
  );
}

// ─── PitchVideo – self-contained ─────────────────────────────────────────────
function PitchVideo() {
  const [currentScene, setCurrentScene] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const videoScenes = [
    { text: "هل سئمت من ضياع الوقت واختلاط المواعيد المهمة؟", duration: 4500, image: "/saudi_business_team.png" },
    { text: "هل تعاني من تأخر التقارير والأخطاء البشرية الكارثية؟", duration: 4500, image: "/saudi_tech_management.png" },
    { text: "سكرتير AI هو الحل النهائي لمعاناتك الإدارية.", duration: 4000, image: "/saudi_customer_service.png" },
    { text: "تنظيم للمواعيد بدقة متناهية وبدون أي تدخل بشري.", duration: 4500, image: "/saudi_business_team.png" },
    { text: "تقارير وتحليلات جاهزة في ثوانٍ.. استعد وقتك وضاعف أرباحك الآن.", duration: 5000, image: "/saudi_tech_management.png" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % videoScenes.length);
    }, 4500);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalDuration = videoScenes.reduce((a, b) => a + b.duration, 0) / 1000;

  return (
    <section id="features-video" className="py-12 md:py-24 px-6 max-w-5xl mx-auto relative">
      <div className="text-center mb-10 md:mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-black text-white">شاهد قوة سكرتير AI</h2>
        <p className="text-white/40 max-w-xl mx-auto text-sm md:text-base">اضغط للتشغيل وشاهد كيف نحول معاناة الشركات إلى نجاح.</p>
      </div>

      <div className="relative aspect-[16/10] sm:aspect-square md:aspect-video rounded-[1.5rem] md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_-20px_rgba(0,102,255,0.3)] bg-[#02040a]">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={`bg-${currentScene}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.8, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <Image 
                src={videoScenes[currentScene].image} 
                alt="Scene Background" 
                fill
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 80vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        <audio ref={audioRef} src="https://assets.mixkit.co/music/preview/mixkit-software-engineer-132.mp3" autoPlay loop muted />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 md:p-12 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentScene}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 w-full"
            >
              <h2 className="text-base sm:text-xl md:text-3xl lg:text-5xl font-black text-white leading-tight tracking-tight drop-shadow-[0_10px_20px_rgba(0,0,0,1)] max-w-[95%] md:max-w-4xl bg-gradient-to-t from-black/80 to-black/20 p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm border border-white/5 mx-auto">
                {videoScenes[currentScene].text}
              </h2>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-0 left-0 h-1 bg-primary/20 w-full z-30">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: totalDuration, ease: "linear", repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── BentoGrid – scroll-triggered cards ──────────────────────────────────────
function BentoGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <section className="py-10 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 sm:space-y-12">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-h1 text-white">لماذا سكرتير؟</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">نحن نجمع بين السرعة الفائقة والأمان المطلق لتوفير أفضل تجربة ذكاء اصطناعي.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        {/* Main Card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          whileHover={{ y: -5, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.6 }}
          tabIndex={0}
          className="md:col-span-2 lg:col-span-8 glass-card p-4 sm:p-10 rounded-2xl flex flex-col justify-between group overflow-hidden relative min-h-[220px] md:min-h-[300px] lg:min-h-[400px] hover:border-primary/40 focus:outline-none transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,102,255,0.2)] cursor-pointer"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
          <div>
            <span className="material-symbols-outlined text-primary text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 block">bolt</span>
            <h3 className="text-xl sm:text-h1 text-white mb-2 sm:mb-4 text-right">سرعة معالجة لا تضاهى</h3>
            <p className="text-xs sm:text-body-md text-on-surface-variant max-w-md text-right mr-0 ml-auto leading-relaxed opacity-70">
              استفد من بنيتنا العصبية المملوكة لنا والتي تعالج البيانات أسرع بـ 3 مرات من نماذج اللغات التقليدية دون المساس بالدقة.
            </p>
          </div>
          <div className="mt-6 sm:mt-8 relative h-40 sm:h-48 w-full rounded-xl overflow-hidden border border-white/5">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
              alt=""
              fill
              className="object-cover opacity-40 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000"
            />
          </div>
        </motion.div>

        {/* Flip Cards */}
        <FlipCard
          colSpan="md:col-span-2 lg:col-span-4"
          minH="min-h-[200px] md:min-h-[240px] lg:min-h-[320px]"
          front={
            <div className="p-6">
              <span className="material-symbols-outlined text-primary text-3xl sm:text-4xl mb-3 block">shield_lock</span>
              <h3 className="text-base sm:text-2xl font-bold text-white mb-1">أمان مستوى البنوك</h3>
              <p className="text-xs sm:text-sm text-on-surface-variant opacity-70">معالجة بيانات مشفرة بالكامل بين الطرفين مع التوافق مع معيار SOC2 Type II.</p>
            </div>
          }
          back={
            <div className="space-y-4">
              <span className="material-symbols-outlined text-primary text-4xl">auto_awesome</span>
              <h4 className="text-white text-lg font-bold">جاهز للتجربة؟</h4>
              <button
                onClick={() => document.getElementById("features-video")?.scrollIntoView({ behavior: "smooth" })}
                className="glow-button px-6 py-2 text-xs font-bold text-white mt-2"
              >
                بدء التجربة المباشرة
              </button>
            </div>
          }
        />

        <FlipCard
          colSpan="md:col-span-1 lg:col-span-4"
          minH="min-h-[180px] md:min-h-[220px] lg:min-h-[320px]"
          front={
            <div className="p-4 sm:p-6">
              <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl mb-2 sm:mb-3">api</span>
              <h4 className="text-base sm:text-lg font-bold text-white mb-0.5 sm:mb-1">واجهة برمجية سلسة</h4>
              <p className="text-[10px] sm:text-xs text-on-surface-variant opacity-70">تكامل في أقل من 10 أسطر.</p>
            </div>
          }
          back={
            <button
              onClick={() => document.getElementById("features-video")?.scrollIntoView({ behavior: "smooth" })}
              className="glow-button px-5 py-2 text-xs font-bold text-white"
            >
              فتح لوحة التحكم
            </button>
          }
        />

        <FlipCard
          colSpan="md:col-span-1 lg:col-span-4"
          minH="min-h-[180px] md:min-h-[220px] lg:min-h-[320px]"
          front={
            <div className="p-4 sm:p-6">
              <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl mb-2 sm:mb-3">group</span>
              <h4 className="text-base sm:text-lg font-bold text-white mb-0.5 sm:mb-1">التعاون الفعال</h4>
              <p className="text-[10px] sm:text-xs text-on-surface-variant opacity-70">بيئة عمل مشتركة للفرق.</p>
            </div>
          }
          back={
            <button
              onClick={() => document.getElementById("features-video")?.scrollIntoView({ behavior: "smooth" })}
              className="glow-button px-5 py-2 text-xs font-bold text-white"
            >
              دعوة الفريق
            </button>
          }
        />

        <FlipCard
          colSpan="md:col-span-2 lg:col-span-4"
          minH="min-h-[180px] md:min-h-[220px] lg:min-h-[320px]"
          front={
            <div className="p-4 sm:p-6">
              <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl mb-2 sm:mb-3">query_stats</span>
              <h3 className="text-base sm:text-lg font-bold text-white mb-0.5 sm:mb-1">تحليلات لحظية</h3>
              <p className="text-[10px] sm:text-xs text-on-surface-variant opacity-70">تتبع الأداء في الوقت الفعلي.</p>
            </div>
          }
          back={
            <button
              onClick={() => document.getElementById("features-video")?.scrollIntoView({ behavior: "smooth" })}
              className="glow-button px-5 py-2 text-xs font-bold text-white"
            >
              فتح الإحصائيات
            </button>
          }
        />
      </div>
    </section>
  );
}

// ─── Hero (main export) ───────────────────────────────────────────────────────
export default function Hero() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("_subject", "طلب انضمام للنشرة البريدية - سكرتير AI");
    try {
      const response = await fetch("https://formsubmit.co/ajax/sales@ai-secretary.io", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setIsSuccess(true);
        setEmail("");
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Subscription error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl font-bold"
          >
            <CheckCircle2 size={20} />
            تم الاشتراك في النشرة البريدية بنجاح
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-32 md:pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/saudi_ai_avatar.png"
            alt="Sekerteer AI Avatar"
            fill
            sizes="100vw"
            className="object-cover opacity-60 scale-105"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,4,10,0.6)_100%)]"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary scale-90 sm:scale-100 origin-center">
            <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
            <span className="text-[10px] sm:text-label-sm uppercase tracking-wider font-bold">منصة الذكاء الاصطناعي للجيل القادم</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">إعادة تعريف الذكاء</h1>

          <p className="text-sm sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-medium leading-relaxed px-4">
            أطلق العنان لقوة الذكاء الاصطناعي عالي الأداء. سكرتير صُمم للتوسع، هُندس للدقة، ومصمم لمستقبل العمل.
          </p>
        </motion.div>
      </section>

      <PitchVideo />

      <BentoGrid />

      {/* CTA Banner */}
      <section className="relative w-full py-12 md:py-16 overflow-hidden mt-12 md:mt-20 border-y border-white/10 group">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
            alt="AI Connection"
            fill
            className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-right">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-2">كن أول من يختبر المستقبل</h2>
            <p className="text-white/40 text-sm md:text-lg font-medium">ابدأ رحلتك مع سكرتير AI اليوم واكتشف قوة التحول الرقمي الحقيقي.</p>
          </div>

          <Link href="/contact">
            <button className="relative group px-10 py-4 bg-primary rounded-full text-white font-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(0,102,255,0.5)] flex items-center gap-3 overflow-hidden whitespace-nowrap">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-gradient opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <span className="relative z-10 text-sm md:text-lg">تواصل معنا الآن</span>
              <span className="material-symbols-outlined relative z-10 transition-transform group-hover:-translate-x-1">arrow_back</span>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
