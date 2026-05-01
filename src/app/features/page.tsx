import Navbar from "@/components/Navbar";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen bg-background text-on-background selection:bg-primary-container/30" dir="rtl">
      <Navbar />
      <main>
        <Features />
      </main>
      <Footer />
    </div>
  );
}
