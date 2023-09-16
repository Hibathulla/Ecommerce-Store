"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit, Trash2, User2 } from "lucide-react";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import { useDeleteImage, useUploadImage } from "../../services/image";
import { useUpdateLoggedUser } from "../../services/user";
import { userType } from "../../types/user";
import { Icons } from "../../utils/Icons";
import { useAuth } from "../../hooks/use-auth";

type Inputs = {
  name: string;
  email: string;
  password: string;
  photo?: string;
};

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  photo: z.string().optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const ProfileForm = ({ initialData }: { initialData: userType }) => {
  const { mutate, isLoading, error, isError } = useUpdateLoggedUser();
  const err: any = (error as any)?.response?.data!;
  const errMessage = err?.message;
  //images
  const { mutate: uploadImage, isLoading: uploadLoader } = useUploadImage();
  const { mutate: deleteImage, isLoading: deleteLoader } = useDeleteImage();
  const [image, setImage] = useState("");

  //store
  const { setUser } = useAuth();

  const imageLoader = uploadLoader || deleteLoader;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: initialData || { email: "", name: "", photo: "" },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    mutate(data, {
      onSuccess: (res) => {
        console.log(res?.data?.user, "res");
        setUser(res?.data?.user);
        toast.success(res?.message);
      },
    });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const file = (e.target as HTMLInputElement).files?.[0];

    const formData = new FormData();
    formData.append("image", file!);
    formData.set("type", "users");

    uploadImage(formData, {
      onSuccess: (res) => {
        toast.success(res.data?.message);
        console.log(res, "res");
        setImage(URL.createObjectURL(file!));
        setValue("photo", res?.data?.data);
        // field.onChange(res?.data?.data);
      },
    });
  };

  const onRemove = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const val = {
      type: "users",
      image: getValues("photo")!,
    };
    deleteImage(val, {
      onSuccess: (res) => {
        console.log(res, "res");
        if (res.status === 204) {
          setImage("");
          setValue("photo", "");
        }
      },
    });
  };

  useEffect(() => {
    if (initialData?.photo) {
      setImage(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/img/users/${initialData?.photo}`
      );
      setValue("photo", initialData?.photo!);
    } else {
      setImage("");
    }
  }, [initialData?.photo, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
      {/* <div className="w-full flex flex-col mb-2">
        <h3 className="text-2xl font-semibold mb-2">Sign up</h3>
        <p className="text-sm mb-2 font-medium">
          Welcome! Please create an account.
        </p>
      </div> */}

      <div className="w-full flex flex-col">
        <div className="relative mt-5 flex flex-col items-start">
          {image?.length != 0 ? (
            <div className="relative">
              {imageLoader ? (
                <div className="flex items-center justify-center">
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                </div>
              ) : (
                <Fragment>
                  <Image
                    width={150}
                    height={150}
                    className="rounded-full object-cover"
                    objectFit="cover"
                    src={image}
                    alt="profile img"
                  />
                  <button
                    onClick={onRemove}
                    className="bg-red-500 p-3 absolute -top-1 rounded-full left-[6.3rem] z-10"
                  >
                    <Trash2 className="w-4 h-4 text-white" />
                  </button>
                </Fragment>
              )}
            </div>
          ) : imageLoader ? (
            <div className="flex items-center justify-center">
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            </div>
          ) : (
            <div className="w-20 h-20 bg-gray-200 border-[5px] border-black rounded-full">
              <User2 className="w-full h-full" />
            </div>
          )}
          <input
            {...register("photo")}
            onChange={onChangeHandler}
            type="file"
            value=""
            accept="image/*"
            className="hidden"
            id="profile"
          />
          <label
            htmlFor="profile"
            className="cursor-pointer hover:bg-zinc-800 hover:text-white flex items-center mt-3 font-semibold text-sm gap-2 rounded-2xl bg-zinc-200 py-2 px-4"
          >
            <Edit className="w-4 h-4" />
            Edit profile picture
          </label>
        </div>

        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Please enter a name",
          })}
          className="w-full font-semibold text-black border-b my-2 border-black outline-none focus:outline-none py-4 bg-transparent"
        />
        {errors.name && (
          <span className="text-red-400 font-medium">
            {errors?.name?.message}
          </span>
        )}
        <input
          {...register("email", {
            required: "Please enter a email",
          })}
          type="email"
          placeholder="Email"
          className="w-full font-semibold text-black border-b my-2 border-black outline-none focus:outline-none py-4 bg-transparent"
        />
        {errors.email && (
          <span className="text-red-400 font-medium">
            {errors.email?.message}
          </span>
        )}
        {/* <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Please enter a password",
          })}
          className="w-full text-black border-b my-2 border-black outline-none focus:outline-none py-4 bg-transparent"
        /> */}
        {errors.password && (
          <span className="text-red-400 font-medium">
            {errors?.password?.message}
          </span>
        )}
      </div>

      {isError && (
        <div className="py-2 px-2 mt-5 bg-red-500 text-white font-medium text-lg rounded-lg">
          {errMessage}
        </div>
      )}

      <div className="w-full flex flex-col my-4">
        <button className="w-full hover:bg-black hover:text-white disabled:opacity-80 font-medium text-lg bg-white my-2 text-[#060606] border-2 border-black rounded-md p-4 text-center flex items-center justify-center">
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            ""
          )}{" "}
          Update profile
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
