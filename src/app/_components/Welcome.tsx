import React from "react";
import Link from "next/link";
import StyledText from "./StyledText";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8">
      <div className="flex justify-center -mt-16 sm:mt-0 mb-6">
        <Image
          src={"/TT.png"}
          alt="Logo"
          width={250}
          height={250}
          className="mb-4 border-4 border-gray rounded-full"
        />
      </div>

      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Welcome to <StyledText>TrailTales</StyledText>
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Share and Document your Camping and Hiking Experiences with Family and
          Friends
        </h2>
        <p className="text-gray-500 font-medium mb-6">
          Upload Images, detailed descriptions, and comments without the need
          for Social Media
        </p>

        <div>
          <Link href={"/Signup"}>
            <Button
              size="lg"
              variant="default"
              className="text-xl transition-transform duration-300 hover:translate-y-[-4px] w-full sm:w-auto"
            >
              Sign up <CircleArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
