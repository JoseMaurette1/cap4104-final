import React from "react";
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isSignInPage = pathname === "/Signup";
  const noAccessLogo = isHomePage || isSignInPage;

  return (
    <>
      <div className="absolute top-4 left-4 sm:left-5 z-10">
        {!noAccessLogo ? (
          <Link href={"/Home"}>
            <h1 className="font-bold text-xl sm:text-xl border-double border-gray-400 border-4 p-2 rounded hover:border-solid transform transition-transform duration-300 hover:translate-y-[-4px]">
              TrailTales
            </h1>
          </Link>
        ) : (
          <h1 className="font-bold text-xl sm:text-xl border-double border-gray-400 border-4 p-2 rounded hover:border-solid transform transition-transform duration-300 hover:translate-y-[-4px]">
            TrailTales
          </h1>
        )}
      </div>
      <div className="absolute top-4 right-4 sm:right-5 p-2 z-10">
        <ModeToggle />
      </div>
    </>
  );
};

export default Logo;
