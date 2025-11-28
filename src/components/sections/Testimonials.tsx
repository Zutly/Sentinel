import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import SectionReveal from "@/components/animation/SectionReveal";

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
        <SectionReveal direction="up">
          <header className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#6D6A75]">
              Bewezen in het veld
            </p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Teams die Sentinel draaien, slapen beter.
            </h2>
            <div className="mt-1 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#DEB841] via-[#DE9E36] to-transparent animate-glow-pulse" />
            <p className="text-sm text-[#4B4853] md:text-base">
              Sentinel is samen met MSP- en enterprise IT-leiders ontworpen die
              genoeg hadden van fragiele, luidruchtige tools. Resultaat: een
              gefocuste platform dat jouw omgeving stil én veilig houdt.
            </p>
          </header>
        </SectionReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <SectionReveal
              key={t.name}
              direction="up"
              delay={100 + index * 120}
            >
              <Card className="group flex h-full flex-col gap-4 border-[#6D6A75]/20 bg-white/90 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#37323E]/20">
                <Quote className="h-6 w-6 text-[#DEB841] transition-transform duration-300 group-hover:scale-110" />
                <p className="text-sm leading-relaxed text-[#37323E]">
                  “{t.quote}”
                </p>
                <div className="mt-2 text-xs text-[#4B4853]">
                  <p className="font-semibold text-[#37323E]">{t.name}</p>
                  <p>{t.role}</p>
                </div>
              </Card>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;