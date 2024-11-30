"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight, Mountain } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const data = [
  // render some info here
];

const TrailDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger>
        <span className="flex items-center">
          <Mountain className="mr-2" /> Choose Trail
        </span>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Choose Trail</DrawerTitle>
            <DrawerDescription>Get Ready to Explore!</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
              >
                <ArrowLeft />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  Trail Name
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Difficulty:
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                // make it so that when they reach the end of the array its disabled
              >
                <ArrowRight />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              {/* render picture of each trail here */}
              Trail Picture
            </div>
          </div>
          <DrawerFooter>
            <Button>Start</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default TrailDrawer;
