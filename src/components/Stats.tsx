export default function Stats() {
  const stats = [
    { label: "Active Users", value: "50,000+" },
    { label: "Messages Daily", value: "1.2M" },
    { label: "Uptime", value: "99.99%" },
    { label: "Response Time", value: "< 0.5s" },
  ];

  return (
    <section className="py-20 px-6 border-y border-white/5 bg-brand-green/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-3xl md:text-5xl font-black gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-white/40 text-sm font-medium tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
