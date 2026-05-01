"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Headset, UserRound, Users } from "lucide-react";
import Image from "next/image";

const roles = [
  {
    title: "موظف مبيعات",
    desc: "اقتراح منتجات وبناء سلة شراء",
    icon: <ShoppingCart className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: "خدمة عملاء",
    desc: "ردود فورية وتذاكر آلية",
    icon: <Headset className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: "أفتار تفاعلي",
    desc: "صوت وصورة سعودية طبيعية",
    icon: <UserRound className="w-6 h-6 text-brand-blue" />,
  },
  {
    title: "موظف استقبال",
    desc: "ترحيب وتسجيل زوار",
    icon: <Users className="w-6 h-6 text-brand-blue" />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-right mb-16">
          <span className="text-brand-blue font-bold text-sm tracking-wider uppercase bg-brand-blue/10 px-4 py-1 rounded-full">
            عن المنصة
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-white">
            ما هو <span className="text-brand-blue">سكرتير؟</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Content */}
          <div className="text-right order-2 lg:order-1">
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              منصة ذكاء اصطناعي عربية تدعم اللهجة السعودية، 
              تعمل عبر الويب، الواتساب، الإيميل، المواقع، وشاشات الروبوت.
            </p>
            <div className="h-1 w-20 bg-brand-blue ml-auto mb-8"></div>
          </div>

          {/* Right: Image */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 bg-brand-blue/20 blur-3xl rounded-full opacity-50"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 glass shadow-2xl">
              <Image 
                src="/images/avatar.png" 
                alt="Sekerteer AI Avatar" 
                width={800} 
                height={600} 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass border border-white/10 hover:border-brand-blue/50 transition-all group text-right"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-4 ml-auto group-hover:scale-110 transition-transform">
                {role.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-white">{role.title}</h3>
              <p className="text-sm text-white/60">{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
