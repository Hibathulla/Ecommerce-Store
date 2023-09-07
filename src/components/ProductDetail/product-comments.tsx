"use client";
import React from "react";
import Comment from "../common/comment";
import Button from "../ui/Button";
import usePreviewModal from "../../hooks/use-preview-modal";
import { useGetProductReview } from "../../services/review";
import { useParams } from "next/navigation";

const ProductComments = () => {
  const previewModal = usePreviewModal();
  const { productId } = useParams();
  const { data } = useGetProductReview(productId as string);
  console.log(data, "data");

  return (
    <div className="mt-10">
      <div className="flex items-center gap-x-6">
        <h2 className="text-2xl text-slate-700 font-semibold">Reviews</h2>
        <Button
          onClick={previewModal?.onOpen}
          className="text-sm !rounded-2xl text-white font-semibold"
        >
          Add Review
        </Button>
      </div>
      <div className="space-y-4 mt-8">
        {data?.data?.review?.length === 0 && (
          <p className="text-gray-400 font-medium text-lg">No reviews.</p>
        )}
        {data?.data?.review?.map((el) => {
          return <Comment review={el} key={el?._id} />;
        })}

        {/* <Comment /> */}
      </div>
    </div>
  );
};

export default ProductComments;
