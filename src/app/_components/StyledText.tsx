import React, { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

const StyledText = ({ children }: TextProps) => {
  return <span className="text-[#582F03] font-bold text-3xl">{children}</span>;
};
export default StyledText;
