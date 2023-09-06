"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Rating } from "react-custom-rating-component";
import { useForm } from "react-hook-form";
import * as z from "zod";
import usePreviewModal from "../../hooks/use-preview-modal";
import { usePostReview } from "../../services/review";
import { Icons } from "../../utils/Icons";
import Button from "./Button";
import Modal from "./modal";

type Inputs = {
  rating: number;
  review: string;
};

const profileFormSchema = z.object({
  rating: z.coerce.number(),
  review: z.string().min(1, "Review cannot be empty"),
});

const ReviewAddModal = () => {
  const previewModal = usePreviewModal();
  const { mutate, isLoading, error, isError } = usePostReview();
  const err: any = (error as any)?.response?.data!;
  const errMessage = err?.message;
  const ratingChanged = (newRating: any) => {
    console.log(newRating, "any");
  };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(profileFormSchema),
  });
  return (
    <Modal open={previewModal?.isOpen} onClose={previewModal?.onClose}>
      <div className="w-full">
        <h2 className="text-2xl font-semibold text-slate-600">Add a comment</h2>

        <div className="p-4 mt-2 rounded-xl flex justify-center flex-col items-center gap-5">
          <Rating
            defaultValue={3}
            size="30px"
            spacing="10px"
            activeColor="black"
            onChange={(newRating) => console.log("newRating", newRating)}
            onHover={(hoveredRating) =>
              console.log("hoveredRating", hoveredRating)
            }
          />
          <textarea
            name=""
            className="bg-gray-200 outline-none rounded-lg shadow-md px-4 py-6 text-lg text-medium text-slate-800"
            cols={44}
            placeholder="Describe your experience"
            rows={4}
          />
          {errors.review && (
            <span className="text-red-400 mt-1 font-medium">
              {errors?.review?.message}
            </span>
          )}
          <Button
            disabled={isLoading}
            className="flex items-center gap-1 disabled:opacity-80 disabled:cursor-not-allowed justify-center !rounded-lg ml-auto w-full"
          >
            {" "}
            {isLoading ? (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              ""
            )}
            Post
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewAddModal;
