import { ListChecks, Network, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    icon: Network,
    title: "Connect every site & endpoint",
    body: "Install lightweight agents on Windows and server endpoints, group devices by client or site, and pull them into a single pane of glass.",
  },
  {
    icon: ListChecks,
    title: "Automate maintenance & security",
    body: "Define patch policies, maintenance windows, and security baselines once — Sentinel enforces them continuously across your fleet.",
  },
  {
    icon: Zap,
    title: "Respond in minutes, not hours",
    body: "Use secure remote desktop, scripted tasks, and prebuilt runbooks to resolve incidents without leaving the console.",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="docs"
      className="bg-[#37323E] px-4 py-16 text-[#BFBDC1] md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <header className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DEB841]">
            How Sentinel works
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Built on .NET &amp; ASP.NET for serious reliability.
          </h2>
          <p className="text-sm text-[#E6E3EB]/85 md:text-base">
            Under the hood, Sentinel uses a modern .NET and ASP.NET stack to
            deliver secure, multi-tenant performance without sacrificing
            observability or control.
          </p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="flex h-full flex-col gap-3 border-[#BFBDC1]/20 bg-[#6D6A75]/40 p-5"
            >
              <div className="flex items-center justify-between text-xs text-[#E6E3EB]/80">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#DEB841]/15 text-[#DEB841]">
                  <step.icon className="h-4 w-4" />
                </span>
                <span className="rounded-full bg-[#37323E] px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-[#BFBDC1]">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-white">{step.title}</h3>
              <p className="text-xs leading-relaxed text-[#E6E3EB]/80">
                {step.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;