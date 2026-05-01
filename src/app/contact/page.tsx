import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-background text-on-background selection:bg-primary-container/30" dir="rtl">
      <Navbar />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
