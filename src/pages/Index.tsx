import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#37323E] text-[#37323E]">
      <Navbar />

      <main className="flex justify-center px-4 py-10 md:px-6 md:py-16">
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-[#6D6A75]/40 bg-[#BFBDC1] shadow-xl shadow-black/40">
          <Hero />
          <Features />
          <HowItWorks />
          <Pricing />
          <Testimonials />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;