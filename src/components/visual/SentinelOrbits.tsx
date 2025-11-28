import { FC } from "react";

const SentinelOrbits: FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Pulsing nodes */}
      <div className="absolute left-[8%] top-[25%] h-10 w-10 rounded-full border border-[#DEB841]/40 bg-[#DEB841]/10">
        <div className="absolute inset-0 rounded-full bg-[#DEB841]/40 animate-ping" />
      </div>

      <div className="absolute right-[12%] top-[15%] h-8 w-8 rounded-full border border-[#BFBDC1]/40 bg-[#BFBDC1]/10">
        <div className="absolute inset-0 rounded-full bg-[#BFBDC1]/30 animate-ping" />
      </div>

      <div className="absolute left-[15%] bottom-[18%] h-6 w-6 rounded-full border border-[#DE9E36]/40 bg-[#DE9E36]/10">
        <div className="absolute inset-0 rounded-full bg-[#DE9E36]/40 animate-ping" />
      </div>

      {/* Soft gradient beams */}
      <div className="absolute left-1/3 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#DEB841]/40 via-transparent to-transparent blur-3xl animate-glow-pulse" />
      <div className="absolute right-1/4 bottom-[-3rem] h-48 w-48 translate-x-1/3 rounded-full bg-gradient-to-tr from-[#37323E]/60 via-transparent to-[#DE9E36]/40 blur-3xl animate-glow-pulse" />
    </div>
  );
};

export default SentinelOrbits;