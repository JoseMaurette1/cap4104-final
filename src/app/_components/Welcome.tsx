import React from "react";
import Link from "next/link";
import StyledText from "./StyledText";
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";

const Welcome = () => {
  return (
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
            variant="default"
            className="transition-transform duration-300 hover:translate-y-[-4px]"
          >
            Sign up <CircleArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
