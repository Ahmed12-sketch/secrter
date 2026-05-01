export default function HowItWorks() {
  const steps = [
    {
      title: "Create chatbot",
      desc: "أنشئ حسابك وقم بإعداد البوت الخاص بك في ثوانٍ معدودة.",
      step: "01"
    },
    {
      title: "Train it on your data",
      desc: "ارفع مستنداتك أو اربط موقعك ليتعلم البوت كل تفاصيل عملك.",
      step: "02"
    },
    {
      title: "Deploy anywhere",
      desc: "انطلق! ابدأ خدمة عملائك على الواتساب، الويب، أو أي منصة أخرى.",
      step: "03"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-brand-green font-bold mb-4 uppercase tracking-widest text-sm">آلية العمل</h2>
        <h3 className="text-4xl font-extrabold mb-20">💡 How it Works</h3>
        
        <div className="grid md:grid-cols-3 gap-16">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <div className="text-9xl font-black text-white/[0.03] absolute -top-16 left-1/2 -translate-x-1/2 z-0 group-hover:text-brand-green/[0.05] transition-colors duration-500">
                {s.step}
              </div>
              <div className="z-10 relative">
                <div className="w-16 h-16 bg-brand-green/10 border border-brand-green/20 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                   <span className="text-brand-green font-bold text-xl">{s.step}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">{s.title}</h4>
                <p className="text-[#b0c0b8] leading-relaxed">{s.desc}</p>
              </div>
              {i < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-8 text-brand-green opacity-20 text-4xl transform -translate-y-full">
                   →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
