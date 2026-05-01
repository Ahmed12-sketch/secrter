"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Loader2, X, Globe, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add FormSubmit configuration
    formData.append("_captcha", "false"); // Disable captcha for smoother experience
    formData.append("_subject", "رسالة جديدة من موقع سكرتير AI");
    formData.append("_template", "table"); // Clean table layout in email

    try {
      // Using FormSubmit.co - No registration needed, just one-time activation
      const response = await fetch("https://formsubmit.co/ajax/sales@ai-secretary.io", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (result.success === "true" || response.ok) {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      alert("عذراً، حدث خطأ أثناء الإرسال. تأكد من تفعيل الإيميل من الرسالة التي وصلتك من FormSubmit أول مرة.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (field: string) => `
    w-full bg-transparent border-b border-white/10 p-4 text-white transition-all duration-300 outline-none text-right placeholder:text-white/20
    ${focusedField === field ? "border-primary" : "hover:border-white/30"}
  `;

  return (
    <section id="contact" className="pt-32 md:pt-40 pb-16 md:pb-32 px-6 md:px-12 max-w-4xl mx-auto">
      {/* Success Notification */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full shadow-2xl font-bold"
          >
            <CheckCircle2 size={20} />
            تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section - Minimalist */}
      <header className="text-center space-y-4 mb-24 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-black text-primary/60 uppercase tracking-[0.4em] mb-4"
        >
          04 // Contact
        </motion.div>

        <div className="relative inline-block px-12">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-full shadow-[0_0_15px_rgba(0,102,255,0.5)]" />
          <motion.h1 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-tight"
          >
            لنصنع <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent italic">المستقبل</span> معاً
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "40%" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/40 max-w-lg mx-auto font-medium"
        >
          نحن هنا للإجابة على استفساراتكم وبدء رحلة التحول الرقمي معكم.
        </motion.p>
      </header>

      {/* Form Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <form className="space-y-12" onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] block text-right">الاسم</label>
              <input 
                name="name"
                required
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("name")} 
                placeholder="اسمك الكريم" 
                type="text"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] block text-right">البريد الإلكتروني</label>
              <input 
                name="email"
                required
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={inputClasses("email")} 
                placeholder="example@mail.com" 
                type="email"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] block text-right">الموضوع</label>
            <input 
              name="subject"
              required
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              className={inputClasses("subject")} 
              placeholder="كيف يمكننا مساعدتك؟" 
              type="text"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] block text-right">الرسالة</label>
            <textarea 
              name="message"
              required
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              className={`${inputClasses("message")} min-h-[120px] resize-none`} 
              placeholder="أكتب رسالتك هنا..." 
              rows={4}
            ></textarea>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 pt-8">
            <div className="flex items-center gap-4 text-right">
              <div>
                <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.2em] mb-1">البريد المباشر</p>
                <a href="mailto:sales@ai-secretary.io" className="text-white/60 hover:text-primary transition-colors font-bold tracking-tight">
                  sales@ai-secretary.io
                </a>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/20">
                <Mail size={16} />
              </div>
            </div>

            <motion.button 
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className={`w-full md:w-auto px-12 py-4 font-black rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl ${
                isSubmitting ? "bg-white/10 text-white/40 cursor-wait" : "bg-white text-black hover:bg-primary hover:text-white"
              }`} 
              type="submit"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>جاري الإرسال...</span>
                </>
              ) : (
                <>
                  <span>إرسال الرسالة</span>
                  <Send size={16} className="rotate-180" />
                </>
              )}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
