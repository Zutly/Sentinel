import { Activity, ArrowRight, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { showSuccess } from "@/utils/toast";

const Hero = () => {
  const handleDemoClick = () => {
    showSuccess("Demo request received — check your inbox within 1 business day.");
  };

  const handleDocsClick = () => {
    showSuccess("Scroll down to learn how Sentinel works.");
  };

  return (
    <section
      id="top"
      className="bg-gradient-to-br from-[#37323E] via-[#6D6A75] to-[#DE9E36] px-4 py-16 text-[#BFBDC1] md:px-6 md:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:gap-16">
        <div className="flex-1 space-y-6">
          <Badge className="border border-[#BFBDC1]/30 bg-[#37323E]/60 text-xs font-normal uppercase tracking-[0.2em] text-[#BFBDC1]">
            Remote Monitoring &amp; Management
          </Badge>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              Sentinel keeps every endpoint healthy, secure, and silent.
            </h1>
            <p className="max-w-xl text-balance text-base text-[#E6E3EB] md:text-lg">
              A modern RMM platform for MSPs and IT teams that want fewer
              tickets, predictable patching, and complete visibility — without
              babysitting legacy tools.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="gap-2 rounded-full bg-[#DEB841] px-6 text-sm font-semibold text-[#37323E] shadow-lg shadow-black/20 hover:bg-[#DE9E36]"
              onClick={handleDemoClick}
            >
              Book a live demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#BFBDC1]/40 bg-[#37323E]/40 px-6 text-sm font-semibold text-[#BFBDC1] hover:bg-[#6D6A75]"
              onClick={handleDocsClick}
            >
              Explore the docs
            </Button>
            <div className="flex items-center gap-2 text-xs text-[#E6E3EB]/80">
              <Activity className="h-4 w-4 text-[#DEB841]" />
              <span>Proactive alerts • Automated patching • .NET / ASP.NET core</span>
            </div>
          </div>

          <dl className="mt-4 grid w-full grid-cols-2 gap-4 text-xs text-[#E6E3EB]/80 md:max-w-md">
            <div>
              <dt className="font-semibold text-white">Endpoints under watch</dt>
              <dd>From 50 to 50,000+ devices across sites.</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Ticket volume</dt>
              <dd>Partners report up to 40% fewer reactive tickets.</dd>
            </div>
          </dl>
        </div>

        <div className="flex-1 w-full max-w-md">
          <Card className="relative overflow-hidden rounded-3xl border-[#BFBDC1]/40 bg-[#37323E]/95 p-5 text-left shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#DEB841]/10 text-[#DEB841]">
                  <MonitorSmartphone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-[#BFBDC1]">
                    Sentinel Command
                  </p>
                  <p className="text-[11px] text-[#E6E3EB]/70">
                    Multi-tenant RMM dashboard
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-[#DEB841]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#DEB841]">
                Live overview
              </span>
            </div>

            <div className="grid gap-3 text-xs md:grid-cols-3">
              <div className="rounded-xl bg-[#6D6A75] p-3 text-[#F7F4FB]">
                <p className="text-[11px] font-medium uppercase tracking-wide">
                  Endpoints healthy
                </p>
                <p className="mt-2 text-2xl font-semibold">98.7%</p>
                <p className="mt-1 text-[11px] text-[#E6E3EB]/80">
                  Real-time health &amp; uptime.
                </p>
              </div>
              <div className="rounded-xl bg-[#37323E] p-3 text-[#F7F4FB]">
                <p className="text-[11px] font-medium uppercase tracking-wide">
                  Patch compliance
                </p>
                <p className="mt-2 text-2xl font-semibold">99.1%</p>
                <p className="mt-1 text-[11px] text-[#E6E3EB]/80">
                  Automated maintenance windows.
                </p>
              </div>
              <div className="rounded-xl bg-[#DEB841] p-3 text-[#37323E]">
                <p className="text-[11px] font-semibold uppercase tracking-wide">
                  Critical alerts
                </p>
                <p className="mt-2 text-2xl font-semibold">3</p>
                <p className="mt-1 text-[11px] text-[#37323E]/80">
                  Prioritized for your team — not noise.
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-dashed border-[#BFBDC1]/30 bg-[#6D6A75]/40 p-3 text-[11px] text-[#E6E3EB]/85">
              <p className="font-medium text-[#F7F4FB]">
                Built on .NET &amp; ASP.NET
              </p>
              <p>
                Modern, battle-tested stack for security-focused MSPs and IT
                teams that need reliability more than buzzwords.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;