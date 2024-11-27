import React from "react";
import { User, Search, Mountain, Camera } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const icons = [
    { href: "/Search", Icon: Search },
    { href: "/Trails", Icon: Mountain },
    { href: "/Camera", Icon: Camera },
    { href: "/Profile", Icon: User },
  ];
  return (
    <div className="absolute top-5 flex flex-col gap-6 sm:flex-row  justify-center items-center sm:gap-12 p-4 z-10">
      {icons.map(({ href, Icon }, index) => (
        <Link key={index} href={href}>
          <Icon className="text-xl sm:text-xl" />
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
