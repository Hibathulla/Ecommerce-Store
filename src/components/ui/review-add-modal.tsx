"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Rating } from "react-custom-rating-component";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import usePreviewModal from "../../hooks/use-preview-modal";
import { usePostReview } from "../../services/review";
import { Icons } from "../../utils/Icons";
import Button from "./Button";
import Modal from "./modal";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";

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
  const params = useParams();

  const { mutate, isLoading, error, isError } = usePostReview();
  const err: any = (error as any)?.response?.data!;
  const errMessage = err?.message;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      rating: 3,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data, "val");
    mutate(
      { ...data, productId: params?.productId as string },
      {
        onSuccess: (res) => {
          toast.success(res?.data?.message);
          previewModal?.onClose();
        },
      }
    );
  };

  return (
    <Modal open={previewModal?.isOpen} onClose={previewModal?.onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <h2 className="text-2xl font-semibold text-slate-600">Add a comment</h2>

        <div className="p-4 mt-2 rounded-xl flex justify-center flex-col items-center gap-5">
          <Controller
            control={control}
            name="rating"
            render={({ field }) => {
              return (
                <Rating
                  defaultValue={3}
                  size="30px"
                  spacing="10px"
                  activeColor="black"
                  onChange={field.onChange}
                  onHover={(hoveredRating) =>
                    console.log("hoveredRating", hoveredRating)
                  }
                />
              );
            }}
          />

          <textarea
            {...register("review")}
            className="bg-gray-200 outline-none rounded-lg shadow-md px-4 py-6 text-lg text-medium text-slate-800"
            cols={44}
            placeholder="Describe your experience"
            rows={4}
          />
          {errors.review && (
            <span className="text-red-400 mt-1 text-left w-full font-medium">
              {errors?.review?.message}
            </span>
          )}
          <Button
            disabled={isLoading}
            type="submit"
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
      </form>
    </Modal>
  );
};

export default ReviewAddModal;
