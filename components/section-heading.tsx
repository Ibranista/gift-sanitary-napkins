import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Reveal from "@/components/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  id?: string;
  align?: "center" | "left";
  className?: string;
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-rose-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-rose-soft-foreground">
      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
      {children}
    </span>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        id={id}
        className="mt-5 text-3xl font-semibold text-foreground sm:text-4xl md:text-[2.75rem]"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
