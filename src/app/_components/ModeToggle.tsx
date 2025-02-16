"use client";
import { usePathname } from "next/navigation";
import * as React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isSignInPage = pathname === "/Signup";
  const shouldHideSettings = isHomePage || isSignInPage;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {!shouldHideSettings ? (
          <DropdownMenuItem>
            <Settings />
            <Link href={"/Settings"}>Settings</Link>
          </DropdownMenuItem>
        ) : (
          <DropdownMenuItem disabled>
            <Settings />
            Settings (Disabled)
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun /> Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon /> Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
