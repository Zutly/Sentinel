import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Sentinel cut our noisy alerts in half and gave us confidence that patching is actually done.",
    name: "Jordan K.",
    role: "Director of Managed Services, Regional MSP",
  },
  {
    quote:
      "We migrated from a legacy RMM in weeks. Our engineers now spend time improving posture instead of babysitting tools.",
    name: "Priya D.",
    role: "Head of Infrastructure, SaaS company with 2,000+ endpoints",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#BFBDC1] px-4 py-16 text-[#37323E] md:px-6 md:py-20"
    >
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6D6A75]">
            Proven in the field
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Teams who run Sentinel sleep better.
          </h2>
          <p className="text-sm text-[#4B4853] md:text-base">
            Sentinel was designed with MSP and enterprise IT leaders who were
            tired of fragile, noisy tools. The result: a focused platform that
            keeps your environment quiet and secure.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <Card
              key={t.name}
              className="flex h-full flex-col gap-4 border-[#6D6A75]/20 bg-white/90 p-6"
            >
              <Quote className="h-6 w-6 text-[#DEB841]" />
              <p className="text-sm leading-relaxed text-[#37323E]">
                “{t.quote}”
              </p>
              <div className="mt-2 text-xs text-[#4B4853]">
                <p className="font-semibold text-[#37323E]">{t.name}</p>
                <p>{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;