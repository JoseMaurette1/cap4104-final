import React from "react";
import Link from "next/link";
import StyledText from "./StyledText";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";

const Welcome = () => {
  return (
    <>
      <div className="flex justify-center -mt-20 mb-10">
        <Image
          src={"/TT.png"}
          alt="Logo"
          width={300}
          height={300}
          className="mb-4 border-4 border-gray rounded"
        />
      </div>
      <div>
        <h1 className="text-2xl font-bold">
          Welcome to <StyledText>TrailTales</StyledText>
        </h1>
        <h2 className="text-xl font-bold">
          Share and Document your Camping and Hiking Experiences with Family and
          Friends
        </h2>
        <p className="text-gray-400 font-bold">
          Upload Images, detailed descriptions and comments without the need of
          Social Media
        </p>
        <div className="mt-5">
          <Link href={"/Login"}>
            <Button
              size="lg"
              variant="default"
              className="text-xl transition-transform duration-300 hover:translate-y-[-4px]"
            >
              Sign up <CircleArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Welcome;
