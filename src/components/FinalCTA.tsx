export default function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-green/5 -z-10"></div>
      <div className="max-w-4xl mx-auto text-center glass p-16 rounded-[50px] border border-brand-green/20 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-brand-green rounded-3xl rotate-12 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.3)]">
           <span className="text-black text-4xl font-black">🚀</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black mb-6 mt-4">
           Start building your <br />
           <span className="gradient-text">AI assistant today</span>
        </h2>
        <p className="text-[#b0c0b8] text-lg mb-12 max-w-xl mx-auto">
          انضم إلى ثورة الذكاء الاصطناعي واجعل عملك يعمل بذكاء أكبر، لا بجهد أكبر.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="btn-primary py-5 px-12 text-xl shadow-[0_0_50px_rgba(0,255,136,0.2)]">
            Get Started Now — Free
          </button>
        </div>
        
        <p className="mt-8 text-white/30 text-sm">No credit card required • 14-day free trial</p>
      </div>
    </section>
  );
}
