import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: ReactNode;
};

const MaxWidthWrapper = ({ className, children }: Props) => {
  return (
    <>
      <div className={cn("mx-auto w-full max-w-6xl py-2 px-1", className)}>
        {children}
      </div>
    </>
  );
};

export default MaxWidthWrapper;
