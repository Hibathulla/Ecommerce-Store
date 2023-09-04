import { Banner2 } from "@/assets/banners";
import { cn } from "@/lib/cn";
import Image from "next/image";
import React from "react";

interface billboardProps {
  className: string;
}

const Billboard: React.FC<billboardProps> = ({ className }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(/banner3.jpg)` }}
        className={cn(
          "rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover",
          className
        )}
      >
        {/* <Image src={Banner2} alt="" width={500} height={500} /> */}
        <div className="h-full w-full flex flex-col justify-center items-center bg-black/50 text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            help me
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
