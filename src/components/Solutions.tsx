"use client";
import { motion } from "framer-motion";
import { MessageSquare, Ticket, Layers } from "lucide-react";

const solutions = [
  {
    title: "خدمة العملاء",
    desc: "الرد على الاستفسارات الخاصة بالخدمات والفواتير والعقود والفروع وأوقات العمل بشكل فوري وآلي.",
    icon: <MessageSquare className="w-8 h-8 text-white" />,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "إدارة البلاغات والتذاكر",
    desc: "رفع ومتابعة التذاكر Freshdesk و Jira مع إشعار تلقائي بحالة البلاغ.",
    icon: <Ticket className="w-8 h-8 text-white" />,
    gradient: "from-indigo-600 to-purple-500",
  },
  {
    title: "التكامل مع الأنظمة",
    desc: "ربط مباشر مع CRM و ERP وأنظمة الفوترة مع إمكانية تحويل المحادثة لموظف بشري عند الحاجة.",
    icon: <Layers className="w-8 h-8 text-white" />,
    gradient: "from-blue-700 to-indigo-600",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-right mb-20">
          <span className="text-brand-blue font-bold text-sm tracking-wider uppercase bg-brand-blue/10 px-4 py-1 rounded-full">
            الشركات والمؤسسات
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-white leading-tight">
            سكرتير للشركات <br /> <span className="text-brand-blue">والمستشفيات</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="group relative rounded-3xl overflow-hidden glass border border-white/10 hover:border-brand-blue/50 transition-all p-1"
            >
              <div className={`h-48 bg-gradient-to-br ${solution.gradient} flex items-center justify-center relative overflow-hidden rounded-2xl mb-6`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                  {solution.icon}
                </div>
              </div>
              
              <div className="p-6 pt-0 text-right">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-blue transition-colors">
                  {solution.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {solution.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
