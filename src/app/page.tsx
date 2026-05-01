import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080B13] text-white selection:bg-[#5C66FF]/30 font-sans" dir="rtl">
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
