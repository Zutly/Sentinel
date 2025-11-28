import {
  Activity,
  BellDot,
  FileBarChart2,
  Lock,
  PlugZap,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Activity,
    title: "Comprehensive monitoring",
    description:
      "Track performance, uptime, and system health across every server and workstation in real time.",
  },
  {
    icon: BellDot,
    title: "Customizable alerts",
    description:
      "Send the right alerts to the right people with flexible, noise-free policies.",
  },
  {
    icon: Lock,
    title: "Security management",
    description:
      "Built-in threat detection, patch status, and policy enforcement keep endpoints hardened.",
  },
  {
    icon: FileBarChart2,
    title: "Reporting & analytics",
    description:
      "Generate board-ready reports covering SLAs, compliance, and device posture in a few clicks.",
  },
  {
    icon: Users,
    title: "Granular user roles",
    description:
      "Role-based access control (RBAC) designed for multi-tenant MSP and internal IT teams.",
  },
  {
    icon: PlugZap,
    title: "Integrations that fit",
    description:
      "Connect ticketing, AV, backup, and more to keep your existing workflows intact.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-[#BFBDC1] px-4 py-16 text-[#37323E] md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6D6A75]">
            Waarom teams Sentinel kiezen
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Alles wat je van RMM verwacht — zonder de ballast.
          </h2>
          <div className="mt-1 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#DEB841] via-[#DE9E36] to-transparent animate-glow-pulse" />
          <p className="text-sm text-[#4B4853] md:text-base">
            Sentinel brengt monitoring, patching, security en remote access
            samen in één dashboard, zodat je team stopt met brandjes blussen en
            proactief kan gaan sturen.
          </p>
        </header>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group flex h-full flex-col gap-3 border-[#6D6A75]/20 bg-white/80 p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#37323E]/20"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#DEB841]/15 text-[#DE9E36] transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#DEB841]/25">
                <feature.icon className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold text-[#37323E]">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#4B4853]">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;