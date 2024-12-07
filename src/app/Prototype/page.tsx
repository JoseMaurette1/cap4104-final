import React from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import StyledText from "../_components/StyledText";

const page = () => {
  return (
    <div className="text-center">
      <StyledText>Prototype</StyledText>
      <ScrollArea className="h-96 max-w-5xl rounded-md border">
        <Image src={"/Prototype.png"} height={1200} width={800} alt="pic" />
      </ScrollArea>
    </div>
  );
};

export default page;
