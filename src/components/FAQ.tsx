export default function FAQ() {
  const faqs = [
    {
      q: "هل يدعم سكرتير اللهجة السعودية؟",
      a: "نعم، سكرتير مصمم خصيصاً ليفهم ويتحدث باللهجة السعودية بمختلف مناطقها، بالإضافة إلى اللغة العربية الفصحى والإنجليزية والعديد من اللغات الأخرى."
    },
    {
      q: "كيف يمكنني تدريب البوت على بيانات شركتي؟",
      a: "ببساطة يمكنك رفع ملفات (PDF, Word, Excel) أو ربط رابط موقعك الإلكتروني، وسيقوم سكرتير بتحليل البيانات والتعلم منها تلقائياً في دقائق."
    },
    {
      q: "هل يمكن ربط سكرتير مع تطبيق واتساب؟",
      a: "بالتأكيد! سكرتير يدعم التكامل المباشر مع WhatsApp Business API بالإضافة إلى تويتر، إنستقرام، والعديد من منصات التواصل الاجتماعي."
    },
    {
      q: "هل بياناتي آمنة مع سكرتير؟",
      a: "نحن نأخذ الخصوصية على محمل الجد. جميع البيانات مشفرة بالكامل وتخضع لأعلى معايير الأمان العالمية لضمان حماية معلوماتك ومعلومات عملائك."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold mb-4 uppercase tracking-widest text-sm">الأسئلة الشائعة</h2>
          <h3 className="text-display-xl font-extrabold mb-6 text-white">الأسئلة الشائعة</h3>
          <p className="text-on-surface-variant">كل ما تحتاج معرفته عن منصة سكرتير في مكان واحد.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="glass-card rounded-2xl group transition-all duration-300 border border-white/5 open:border-primary/30 open:shadow-[0_0_30px_rgba(192,193,255,0.05)]">
              <summary className="p-6 cursor-pointer list-none flex justify-between items-center font-bold text-lg text-white">
                <span>{f.q}</span>
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="p-6 pt-0 text-on-surface-variant leading-relaxed border-t border-white/5 mt-4">
                {f.a}
              </div>
            </details>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <a href="#" className="text-primary font-bold hover:underline inline-flex items-center gap-2">
              عرض كافة الأسئلة <span className="text-xl">←</span>
           </a>
        </div>
      </div>
    </section>
  );
}
