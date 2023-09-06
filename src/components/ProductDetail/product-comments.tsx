"use client";
import React from "react";
import Comment from "../common/comment";
import Button from "../ui/Button";
import usePreviewModal from "../../hooks/use-preview-modal";

const ProductComments = () => {
  const previewModal = usePreviewModal();
  return (
    <div className="mt-10">
      <div className="flex items-center gap-x-6">
        <h2 className="text-2xl text-slate-700 font-semibold">Comments</h2>
        <Button
          onClick={previewModal?.onOpen}
          className="text-sm !rounded-2xl text-white font-semibold"
        >
          Add Review
        </Button>
      </div>
      <div className="space-y-4 mt-8">
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default ProductComments;
