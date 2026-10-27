import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// The "Gift" badge mirrors the packaging: script wordmark on royal blue with
// the magenta swoosh and ribbon.
export function LogoBadge({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.svg"
      alt="Gift"
      width={200}
      height={92}
      unoptimized
      priority
      className={cn("h-11 w-auto shrink-0", className)}
    />
  );
}

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Gift Sanitary Napkins — home"
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <LogoBadge className="transition-transform duration-300 group-hover:-rotate-2" />
      <span className="font-script text-[1.05rem] leading-[1.05] text-navy-soft-foreground dark:text-foreground">
        Sanitary
        <br />
        Napkins
      </span>
    </Link>
  );
}
