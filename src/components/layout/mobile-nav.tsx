"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
            className="p-2 text-text-primary hover:text-corp-navy transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        }
      />
      <SheetContent side="right" className="w-80 bg-white border-border" showCloseButton={false}>
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <div className="flex flex-col gap-6 pt-8">
          <div className="flex items-center px-2">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="FYM Compliance" width={32} height={32} className="h-8 w-8" />
              <span className="text-base font-bold text-corp-navy">
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
                  "px-4 py-3 text-base font-semibold rounded-lg transition-all",
                  pathname === item.href
                    ? "text-corp-navy bg-corp-blue-pale border-l-[3px] border-corp-blue"
                    : "text-text-muted hover:text-corp-navy hover:bg-bg-secondary"
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
              className="flex items-center justify-center w-full px-5 py-3 text-sm font-bold rounded-lg bg-corp-navy text-white hover:bg-corp-navy/90 transition-colors shadow-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
