import { Activity, ArrowRight, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { showSuccess } from "@/utils/toast";

const Hero = () => {
  const handleDemoClick = () => {
    showSuccess(
      "Demo request received — check your inbox within 1 business day.",
    );
  };

  const handleDocsClick = () => {
    showSuccess("Scroll down to learn how Sentinel works.");
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F3FA] to-[#BFBDC1]/40 px-4 py-16 text-[#37323E] md:px-6 md:py-24"
    >
      <div className="pointer-events-none absolute inset-x-0 top-[-10rem] mx-auto h-64 max-w-4xl rounded-full bg-gradient-to-b from-[#DEB841]/20 via-transparent to-transparent blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
        {/* Left column: text */}
        <div className="flex-1 space-y-6">
          <Badge className="border border-[#E0DEE8] bg-white/70 text-[10px] font-medium uppercase tracking-[0.25em] text-[#6D6A75]">
            Remote Monitoring &amp; Management
          </Badge>

          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[#171321] md:text-5xl lg:text-6xl">
              Sentinel houdt elke endpoint gezond, veilig én stil.
            </h1>
            <p className="max-w-xl text-balance text-sm text-[#4B4853] md:text-base">
              Een moderne RMM-oplossing voor MSP&apos;s en IT-teams die minder
              tickets, voorspelbare patching en volledige zichtbaarheid willen —
              zonder verouderde tools te babysitten.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="gap-2 rounded-full bg-[#37323E] px-6 text-sm font-semibold text-[#BFBDC1] shadow-lg shadow-black/10 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#2A2631]"
              onClick={handleDemoClick}
            >
              Boek een live demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-[#E0DEE8] bg-white/70 px-6 text-sm font-semibold text-[#37323E] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white"
              onClick={handleDocsClick}
            >
              Bekijk hoe het werkt
            </Button>
            <div className="flex items-center gap-2 text-xs text-[#6D6A75]">
              <Activity className="h-4 w-4 text-[#DEB841]" />
              <span>
                Proactieve alerts • Automatische patching • .NET / ASP.NET
              </span>
            </div>
          </div>

          <dl className="mt-4 grid w-full grid-cols-2 gap-4 text-xs text-[#6D6A75] md:max-w-md">
            <div>
              <dt className="font-semibold text-[#171321]">
                Endpoints onder toezicht
              </dt>
              <dd>Van 50 tot 50.000+ devices over meerdere sites.</dd>
            </div>
            <div>
              <dt className="font-semibold text-[#171321]">Ticketvolume</dt>
              <dd>Partners rapporteren tot 40% minder reactieve tickets.</dd>
            </div>
          </dl>
        </div>

        {/* Right column: product card */}
        <div className="flex-1 w-full max-w-md">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 scale-110 rounded-[32px] bg-gradient-to-b from-[#DEB841]/25 via-transparent to-[#37323E]/30 blur-2xl" />
            <Card className="overflow-hidden rounded-3xl border border-[#E0DEE8] bg-white/95 p-5 text-left shadow-[0_18px_60px_rgba(12,10,29,0.25)]">
              <div className="mb-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#DEB841]/15 text-[#DEB841]">
                    <MonitorSmartphone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-[#37323E]">
                      Sentinel Command
                    </p>
                    <p className="text-[11px] text-[#6D6A75]">
                      Multi-tenant RMM dashboard
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-[#F5F3FA] px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[#6D6A75]">
                  Live overzicht
                </span>
              </div>

              <div className="mb-4 rounded-2xl border border-dashed border-[#E0DEE8] bg-[#F9F8FD] p-3">
                <div className="flex items-center gap-2 text-[11px] text-[#6D6A75]">
                  <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
                  <span>Agents connected</span>
                  <span className="ml-auto rounded-full bg-white px-2 py-[2px] text-[10px] font-medium text-[#37323E]">
                    4.218 endpoints
                  </span>
                </div>
                <div className="mt-2 grid gap-3 text-xs md:grid-cols-3">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-[#6D6A75]">
                      Health
                    </p>
                    <p className="mt-1 text-xl font-semibold text-[#171321]">
                      98,7%
                    </p>
                    <p className="text-[11px] text-[#8B8994]">
                      Realtime health &amp; uptime.
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-[#6D6A75]">
                      Patch compliance
                    </p>
                    <p className="mt-1 text-xl font-semibold text-[#171321]">
                      99,1%
                    </p>
                    <p className="text-[11px] text-[#8B8994]">
                      Automatische maintenance windows.
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wide text-[#6D6A75]">
                      Kritieke alerts
                    </p>
                    <p className="mt-1 text-xl font-semibold text-[#171321]">
                      3
                    </p>
                    <p className="text-[11px] text-[#8B8994]">
                      Gefilterd op impact — geen ruis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[#E0DEE8] bg-[#FDFCF7] p-3 text-[11px] text-[#4B4853]">
                <p className="font-medium text-[#171321]">
                  Gebouwd op .NET &amp; ASP.NET
                </p>
                <p className="mt-1">
                  Moderne, battle-tested stack voor security‑gerichte MSP&apos;s
                  en IT-teams die betrouwbaarheid belangrijker vinden dan
                  buzzwords.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;