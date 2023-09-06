import Image from "next/image";
import React from "react";

const Comment = () => {
  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-gray-300 p-3 rounded-lg">
      <Image
        src={"/banner1.jpg"}
        alt="user profile"
        width={40}
        height={40}
        className="w-12 h-12 object-cover rounded-full"
      />
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-slate-800 text-xl">{"John Doe"}</h5>
        <span className="text-xl font-medium text-slate-400">
          {new Date("22-10-2023").toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        <p className="mt-[10px] text-slate-500 text-lg">
          fijasgfuwegbweufgbgusiuegsgiusgboig
        </p>
      </div>
    </div>
  );
};

export default Comment;
