import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen bg-background text-on-background selection:bg-primary-container/30" dir="rtl">
      <Navbar />
      <main>
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
