"use client";
import React, { useState, useEffect } from "react";
import TrailDrawer from "./TrailDrawer";
import Link from "next/link";
import {
  Search,
  Lightbulb,
  Settings,
  User,
  House,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const Searchbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <Link href={"/Search"} onClick={handleLinkClick}>
              <CommandItem>
                <Search className="mr-2" />
                <span>Search</span>
              </CommandItem>
            </Link>
            <CommandItem>
              <TrailDrawer />
            </CommandItem>
            <Link href={"https://cap4104.vercel.app"} onClick={handleLinkClick}>
              <CommandItem>
                <Lightbulb />
                <span>Prototype Website</span>
              </CommandItem>
            </Link>
            <Link href={"/DesignEvaluation"} onClick={handleLinkClick}>
              <CommandItem>
                <ChartNoAxesColumnIncreasing />
                <span>Design Evaluation</span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <Link href={"/Profile"} onClick={handleLinkClick}>
              <CommandItem>
                <User />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
            </Link>
            <Link href={"/Home"} onClick={handleLinkClick}>
              <CommandItem>
                <House />
                <span>Home</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
            </Link>
            <Link href={"/Settings"} onClick={handleLinkClick}>
              <CommandItem>
                <Settings />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </Link>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default Searchbar;
