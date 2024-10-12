import Link from "next/link";
import { type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function NavItems({
  items,
  className,
}: {
  items: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
} & React.ComponentProps<"ul">) {
  return (
    <ul className={cn("grid gap-0.5", className)}>
      {items.map((item) => (
        <li
          key={item.name}
          className="text-primary rounded-md hover:bg-accent hover:text-primary"
        >
          <Link
            href={item.url}
            className="min-w-8 flex h-8 flex-1 items-center gap-2 overflow-hidden rounded-md px-1.5 text-sm  outline-none ring-ring transition-all hover:bg-accent hover:text-accent-foreground focus-visible:ring-2"
          >
            <item.icon className="h-4 w-4 shrink-0 text-[#0369a1]" />
            <div className="flex flex-1 overflow-hidden">
              <div className="line-clamp-1">{item.name}</div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
