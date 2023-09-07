import Image from "next/image";
import React from "react";
import { reviewType } from "../../types/review";
import { Star, User2 } from "lucide-react";

const Comment: React.FC<{ review: reviewType["data"]["review"][0] }> = ({
  review,
}) => {
  const image = `${process.env.NEXT_PUBLIC_API_BASE_URL}/img/users/${review?.user?.photo}`;
  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-gray-300 p-3 rounded-lg">
      {review?.user?.photo?.length != 0 ? (
        <Image
          src={image}
          alt="user profile"
          width={40}
          height={40}
          className="w-12 h-12 object-cover rounded-full"
        />
      ) : (
        <div className="w-8 h-8 rounded-full">
          <User2 className="w-full h-full" />
        </div>
      )}
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-slate-800 text-xl">
          {review?.user?.name}
        </h5>
        <span className="text-sm font-medium text-slate-400">
          {new Date(review?.createdAt).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
        <p className="mt-[10px] text-slate-500 text-lg font-semibold flex items-center gap-1">
          <span className="w-6 h-5 flex items-center justify-center rounded-md text-white text-[12px] bg-slate-800">
            {review?.rating}{" "}
            <Star className="fill-white ml-[2.5px]" size={10} />
          </span>{" "}
          {review?.review}
        </p>
      </div>
    </div>
  );
};

export default Comment;
