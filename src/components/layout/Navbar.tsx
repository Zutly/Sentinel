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
    <header className="sticky top-0 z-30 border-b border-[#E0DEE8] bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#37323E]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DEB841]/15 text-[#DEB841]">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <span className="text-base uppercase tracking-[0.2em] text-[#6D6A75]">
            sentinel
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-xs font-medium text-[#6D6A75] md:flex">
          <a href="#features" className="hover:text-[#37323E]">
            Features
          </a>
          <a href="#docs" className="hover:text-[#37323E]">
            Hoe het werkt
          </a>
          <a href="#pricing" className="hover:text-[#37323E]">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-[#37323E]">
            Proof
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="hidden rounded-full border border-[#E0DEE8] bg-white/40 px-4 text-xs font-medium text-[#37323E] hover:bg-white md:inline-flex"
            asChild
          >
            <a href="#docs">Bekijk de docs</a>
          </Button>
          <Button
            className="rounded-full bg-[#37323E] px-4 text-xs font-semibold text-[#BFBDC1] hover:bg-[#2A2631]"
            onClick={handleBookDemoClick}
          >
            Boek een demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;