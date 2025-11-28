import * as React from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

type Direction = "up" | "down" | "left" | "right";

interface SectionRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  direction = "up",
  delay,
  className,
}) => {
  const { ref, inView } = useInView<HTMLDivElement>();

  let hiddenTransform = "";
  switch (direction) {
    case "down":
      hiddenTransform = "-translate-y-8";
      break;
    case "left":
      hiddenTransform = "translate-x-8";
      break;
    case "right":
      hiddenTransform = "-translate-x-8";
      break;
    case "up":
    default:
      hiddenTransform = "translate-y-8";
      break;
  }

  const style = delay
    ? ({
        transitionDelay: `${delay}ms`,
      } as React.CSSProperties)
    : undefined;

  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "transform-gpu transition-all duration-700 ease-out will-change-transform",
        inView
          ? "opacity-100 translate-x-0 translate-y-0"
          : cn("opacity-0", hiddenTransform),
        className,
      )}
    >
      {children}
    </div>
  );
};

export default SectionReveal;