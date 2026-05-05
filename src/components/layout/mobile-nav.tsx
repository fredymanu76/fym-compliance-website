"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";

interface MobileNavProps {
  items: NavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button
            className="p-2 text-text-muted hover:text-text-primary transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        }
      />
      <SheetContent side="right" className="w-80 bg-bg-elevated border-border" showCloseButton={false}>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex flex-col gap-6 pt-8">
          <div className="flex items-center px-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg diamond-gradient opacity-90" />
              <span className="text-base font-semibold text-text-primary">
                FYM Compliance
              </span>
            </div>
          </div>

          <nav className="flex flex-col gap-1 px-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-lg transition-colors",
                  pathname === item.href
                    ? "text-facet-amber bg-bg-subtle"
                    : "text-text-muted hover:text-text-primary hover:bg-bg-subtle/50"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="px-2 pt-4">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-full px-5 py-3 text-sm font-semibold rounded-lg bg-facet-amber text-bg-primary hover:bg-facet-amber/90 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
