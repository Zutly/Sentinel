import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const handleBookDemoClick = () => {
    const { showSuccess } = require("@/utils/toast") as {
      showSuccess: (message: string) => void;
    };
    showSuccess("Thanks! A Sentinel expert will reach out shortly.");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-[#6D6A75]/30 bg-[#37323E]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#DEB841]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DEB841]/10 text-[#DEB841]">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="text-base uppercase tracking-[0.2em] text-[#BFBDC1]">
            sentinel
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[#BFBDC1] md:flex">
          <a href="#features" className="hover:text-[#DEB841]">
            Features
          </a>
          <a href="#docs" className="hover:text-[#DEB841]">
            How it works
          </a>
          <a href="#pricing" className="hover:text-[#DEB841]">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-[#DEB841]">
            Proof
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="hidden border border-[#BFBDC1]/30 text-xs font-medium text-[#BFBDC1] hover:bg-[#6D6A75] md:inline-flex"
            asChild
          >
            <a href="#docs">Explore the docs</a>
          </Button>
          <Button
            className="bg-[#DEB841] px-4 text-xs font-semibold text-[#37323E] hover:bg-[#DE9E36]"
            onClick={handleBookDemoClick}
          >
            Book a demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;