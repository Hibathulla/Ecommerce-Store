import { Banner2 } from "@/assets/banners";
import { cn } from "@/lib/cn";
import Image from "next/image";
import React from "react";
import { SettingsType } from "../../types/settings";

interface billboardProps {
  className?: string;
  details: SettingsType;
}

const Billboard: React.FC<billboardProps> = ({ className, details }) => {
  // console.log(details, "Details");

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_API_BASE_URL}/img/settings/${details?.billboard})`,
        }}
        className={cn(
          "rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover",
          className
        )}
      >
        {/* <Image src={Banner2} alt="" width={500} height={500} /> */}
        <div className="h-full w-full flex flex-col justify-center items-center bg-black/10 text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            {details?.billboardLabel}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
