import { Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="border-t border-[#6D6A75]/30 bg-[#37323E] px-4 py-8 text-[#BFBDC1] md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#DEB841]">
            <ShieldCheck className="h-4 w-4" />
            <span>Ready to see Sentinel in your environment?</span>
          </div>
          <p className="max-w-md text-xs text-[#E6E3EB]/80">
            Share a bit about your stack and we&apos;ll tailor a live demo to
            your endpoints, policies, and existing tools.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:items-end">
          <Button
            size="sm"
            className="inline-flex items-center gap-2 rounded-full bg-[#DEB841] px-4 text-xs font-semibold text-[#37323E] hover:bg-[#DE9E36]"
            asChild
          >
            <a href="#pricing">
              <Mail className="h-4 w-4" />
              Contact sales
            </a>
          </Button>
          <MadeWithDyad />
        </div>
      </div>
    </footer>
  );
};

export default Footer;