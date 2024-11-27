import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <div className="absolute top-4 left-4 sm:left-5 z-10">
        <Link href={"/"}>
          <h1 className="font-bold text-xl sm:text-xl border-double border-gray-400 border-4 p-2 rounded hover:border-solid transform transition-transform duration-300 hover:translate-y-[-4px]">
            TrailTales
          </h1>
        </Link>
      </div>
      <div className="absolute top-4 right-4 sm:right-5 p-2 z-10">
        <ModeToggle />
      </div>
    </>
  );
};

export default Logo;
