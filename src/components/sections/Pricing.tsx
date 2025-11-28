import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { showSuccess } from "@/utils/toast";

const included = [
  "Unlimited sites and tenants",
  "Per-endpoint pricing that scales down as you grow",
  "Full RMM feature set: monitoring, patching, remote access, scripting",
  "Role-based access control (RBAC) for teams and MSPs",
  "API and integrations for ticketing, AV, backup, and more",
];

const Pricing = () => {
  const handleTalkSalesClick = () => {
    showSuccess("Sales will follow up with tailored Sentinel pricing for your environment.");
  };

  return (
    <section
      id="pricing"
      className="bg-[#DEB841] px-4 py-16 text-[#37323E] md:px-6 md:py-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-start">
        <div className="flex-1 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6D6A75]">
            Pricing built for MSPs &amp; IT
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Pay only for endpoints that actually need protecting.
          </h2>
          <p className="text-sm text-[#4B4853] md:text-base">
            Sentinel uses straightforward, per-endpoint pricing with volume
            discounts. No surprise modules, no mandatory “suites”, and no
            multi-year lock-ins.
          </p>
        </div>

        <Card className="flex-1 border-[#37323E]/15 bg-[#FFF7DD] p-6 shadow-lg">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[#37323E]">
                Sentinel for Teams &amp; MSPs
              </h3>
              <p className="mt-1 text-xs text-[#4B4853]">
                Everything you need to monitor, manage, and secure endpoints at scale.
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-semibold leading-tight text-[#37323E]">
                Let&apos;s talk
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
              className="w-full rounded-full bg-[#37323E] text-sm font-semibold text-[#BFBDC1] shadow-md hover:bg-[#2A2631] sm:w-auto"
              onClick={handleTalkSalesClick}
            >
              Talk to sales
            </Button>
            <p className="text-[11px] text-[#6D6A75]">
              Typical partners see ROI within the first 90 days.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;