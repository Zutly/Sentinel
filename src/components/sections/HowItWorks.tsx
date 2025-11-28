import { ListChecks, Network, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import SectionReveal from "@/components/animation/SectionReveal";

const steps = [
  {
    icon: Network,
    title: "Koppel elke site & endpoint",
    body: "Installeer lichte agents op Windows- en serverendpoints, groepeer devices per klant of site en breng ze samen in één overzicht.",
  },
  {
    icon: ListChecks,
    title: "Automatiseer onderhoud & security",
    body: "Definieer patch policies, maintenance windows en security baselines één keer — Sentinel handhaaft ze continu over je volledige fleet.",
  },
  {
    icon: Zap,
    title: "Reageer in minuten, niet uren",
    body: "Gebruik veilige remote desktop, scripts en runbooks om incidenten op te lossen zonder het console te verlaten.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="docs"
      className="bg-[#37323E] px-4 py-20 text-[#BFBDC1] md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-5xl space-y-12">
        <SectionReveal direction="up">
          <header className="mx-auto max-w-2xl space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DEB841]">
              Hoe Sentinel werkt
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Gebouwd op .NET &amp; ASP.NET voor serieuze betrouwbaarheid.
            </h2>
            <div className="mx-auto mt-2 h-0.5 w-20 rounded-full bg-gradient-to-r from-[#DEB841] via-[#DE9E36] to-transparent animate-glow-pulse" />
            <p className="text-sm text-[#E6E3EB]/85 md:text-base">
              Onder de motorkap draait Sentinel op een moderne .NET- en
              ASP.NET-stack voor veilige, multi-tenant performance zonder
              verlies van controle of inzicht.
            </p>
          </header>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <SectionReveal
              key={step.title}
              direction="up"
              delay={120 + index * 100}
            >
              <Card className="group flex h-full flex-col gap-3 border-[#BFBDC1]/25 bg-[#2E2936]/90 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:border-[#DEB841]/40 hover:shadow-xl hover:shadow-black/30">
                <div className="flex items-center justify-between text-xs text-[#E6E3EB]/80">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DEB841]/15 text-[#DEB841] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#DEB841]/25">
                    <step.icon className="h-4 w-4" />
                  </span>
                  <span className="rounded-full bg-[#37323E] px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-[#BFBDC1]">
                    Stap {index + 1}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#E6E3EB]/80">
                  {step.body}
                </p>
              </Card>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal direction="up" delay={320}>
          <Tabs
            defaultValue="overview"
            className="mt-2 rounded-3xl border border-[#BFBDC1]/25 bg-[#2C2833]/90 p-5 shadow-lg"
          >
            <TabsList className="mb-4 grid w-full grid-cols-3 bg-[#37323E]">
              <TabsTrigger value="overview" className="text-xs">
                Overzicht
              </TabsTrigger>
              <TabsTrigger value="dotnet" className="text-xs">
                .NET laag
              </TabsTrigger>
              <TabsTrigger value="aspnet" className="text-xs">
                ASP.NET API
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="overview"
              className="space-y-2 text-xs text-[#E6E3EB]/85"
            >
              <p>
                Sentinel verzamelt metrics, events en health-data van agents,
                normaliseert alles en toont wat er écht toe doet in één
                console.
              </p>
              <ul className="list-disc space-y-1 pl-4">
                <li>Realtime status per klant, site en device.</li>
                <li>Gecorrereleerde alerts in plaats van losse ruis.</li>
                <li>
                  Acties (scripts, remote desktop) direct vanuit dezelfde view.
                </li>
              </ul>
            </TabsContent>

            <TabsContent
              value="dotnet"
              className="space-y-2 text-xs text-[#E6E3EB]/85"
            >
              <p>
                De .NET‑laag verzorgt veilige, efficiënte communicatie tussen
                agents en de cloud‑backend.
              </p>
              <ul className="list-disc space-y-1 pl-4">
                <li>Async processing van agenttelemetrie en alerts.</li>
                <li>Queues voor schaalbare, betrouwbare jobafhandeling.</li>
                <li>Policy‑engine voor patching en onderhoudsvensters.</li>
              </ul>
            </TabsContent>

            <TabsContent
              value="aspnet"
              className="space-y-2 text-xs text-[#E6E3EB]/85"
            >
              <p>
                ASP.NET exposeert een moderne API voor het webdashboard en
                integraties met bestaande tools.
              </p>
              <ul className="list-disc space-y-1 pl-4">
                <li>REST/JSON‑endpoints voor rapportage en integraties.</li>
                <li>Beveiligd met RBAC, tokens en tenant‑isolatie.</li>
                <li>Geoptimaliseerd voor snelle laadtijden en lage latency.</li>
              </ul>
            </TabsContent>
          </Tabs>
        </SectionReveal>
      </div>
    </section>
  );
};

export default HowItWorks;