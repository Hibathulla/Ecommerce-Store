"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import { useDeleteImage, useUploadImage } from "../../services/image";
import { useUpdateLoggedUser } from "../../services/user";
import { userType } from "../../types/user";
import { Icons } from "../../utils/Icons";
import { useUpdatePassword } from "../../services/auth";

type Inputs = {
  currentPassword: string;
  password: string;
  confirmPassword: string;
};

const passwordFormSchema = z
  .object({
    currentPassword: z.string().min(4, "Please enter your current password"),
    password: z.string().min(4, "Please enter your new password"),
    confirmPassword: z.string().min(4, "Please confirm your new password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const UpdatePasswordForm = () => {
  const { mutate, isLoading, error, isError } = useUpdatePassword();
  const err: any = (error as any)?.response?.data!;
  const errMessage = err?.message;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(passwordFormSchema),
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
      {/* <div className="w-full flex flex-col mb-2">
        <h3 className="text-2xl font-semibold mb-2">Sign up</h3>
        <p className="text-sm mb-2 font-medium">
          Welcome! Please create an account.
        </p>
      </div> */}

      <div className="w-full flex flex-col">
        <input
          type="password"
          placeholder="Current password"
          {...register("currentPassword", {
            required: "Please enter your current password",
          })}
          className="w-full font-semibold text-black border-b my-2 border-black outline-none focus:outline-none py-4 bg-transparent"
        />
        {errors.currentPassword && (
          <span className="text-red-400 font-medium">
            {errors?.currentPassword?.message}
          </span>
        )}
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: "Please enter your new password",
          })}
          className="w-full font-semibold text-black border-b my-2 border-black outline-none focus:outline-none py-4 bg-transparent"
        />
        {errors.password && (
          <span className="text-red-400 font-medium">
            {errors?.password?.message}
          </span>
        )}
        <input
          {...register("confirmPassword", {
            required: "Please enter new password again",
          })}
          type="password"
          placeholder="Confirm password"
          className="w-full font-semibold text-black border-b my-2 border-black outline-none focus:outline-none py-4 bg-transparent"
        />
        {errors.confirmPassword && (
          <span className="text-red-400 font-medium">
            {errors.confirmPassword?.message}
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
      </div>

      {isError && (
        <div className="py-2 px-2 mt-5 bg-red-500 text-white font-medium text-lg rounded-lg">
          {errMessage}
        </div>
      )}

      <div className="w-full flex flex-col my-4">
        <button
          disabled={isLoading}
          className="w-full hover:bg-black hover:text-white disabled:opacity-80 font-medium text-lg bg-white my-2 text-[#060606] border-2 border-black rounded-md p-4 text-center flex items-center justify-center"
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            ""
          )}{" "}
          Update
        </button>
      </div>
    </form>
  );
};

export default UpdatePasswordForm;
