import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <div className="absolute top-5 left-5">
        <Link href={"/"}>
          <h1 className="font-bold text-xl border-double border-gray-400 border-4 p-2 rounded hover:border-solid transform transition-transform duration-300 hover:translate-y-[-4px]">
            TrailTales
          </h1>
        </Link>
        {/* Left Corner Logo */}
      </div>
      <div className="absolute top-5 right-5">
        <ModeToggle />
        {/* Severe: The button broke and it is not clickable, 11/23/24 */}
      </div>
    </>
  );
};

export default Logo;
