import React from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";
import { Camera } from "lucide-react";

const Navbar = () => {
  return (
    <div className="fixed top-5 w-full flex justify-center items-center gap-12 shadow-md p-4 z-10">
      <Search />
      <Mountain />
      <Camera />
      {/* Todo: Add href for each icon */}
    </div>
  );
};

export default Navbar;
