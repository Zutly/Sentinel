import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { showSuccess } from "@/utils/toast";
import SectionReveal from "@/components/animation/SectionReveal";

const included = [
  "Unlimited sites and tenants",
  "Per-endpoint pricing that scales down as you grow",
  "Full RMM feature set: monitoring, patching, remote access, scripting",
  "Role-based access control (RBAC) for teams and MSPs",
  "API and integrations for ticketing, AV, backup, and more",
];

const Pricing = () => {
  const handleTalkSalesClick = () => {
    showSuccess(
      "Sales will follow up with tailored Sentinel pricing for your environment.",
    );
  };

  return (
    <section
      id="pricing"
      className="bg-[#DEB841] px-4 py-16 text-[#37323E] md:px-6 md:py-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-start">
        <SectionReveal direction="up">
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6D6A75]">
              Pricing voor MSP&apos;s &amp; IT-teams
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Betaal alleen voor endpoints die écht beschermd moeten worden.
            </h2>
            <div className="mt-1 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#37323E] via-[#6D6A75] to-transparent animate-glow-pulse" />
            <p className="text-sm text-[#4B4853] md:text-base">
              Sentinel werkt met transparante per-endpoint pricing met
              volumekortingen. Geen verplichte bundels, geen verborgen modules
              en geen meerjarige lock-ins.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal direction="up" delay={150}>
          <Card className="flex-1 border-[#37323E]/15 bg-[#FFF7DD] p-6 shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#37323E]/25">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-[#37323E]">
                  Sentinel voor Teams &amp; MSP&apos;s
                </h3>
                <p className="mt-1 text-xs text-[#4B4853]">
                  Alles wat je nodig hebt om endpoints op schaal te monitoren,
                  beheren en beveiligen.
                </p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-semibold leading-tight text-[#37323E]">
                  Laten we praten
                </p>
                <p className="text-[11px] text-[#6D6A75]">
                  Volume-based per-endpoint pricing
                </p>
              </div>
            </div>

            <ul className="mt-4 space-y-2 text-xs text-[#4B4853]">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-[2px] h-4 w-4 flex-none text-[#DE9E36]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Button
                size="lg"
                className="w-full rounded-full bg-[#37323E] text-sm font-semibold text-[#BFBDC1] shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#2A2631] sm:w-auto"
                onClick={handleTalkSalesClick}
              >
                Plan een gesprek met sales
              </Button>
              <p className="text-[11px] text-[#6D6A75]">
                De meeste partners zien ROI binnen de eerste 90 dagen.
              </p>
            </div>
          </Card>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Pricing;