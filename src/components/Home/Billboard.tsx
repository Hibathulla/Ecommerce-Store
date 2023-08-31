import { Banner2 } from "@/assets/banners";
import Image from "next/image";
import React from "react";

const Billboard = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(/banner3.jpg)` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        {/* <Image src={Banner2} alt="" width={500} height={500} /> */}
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
            help me
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
