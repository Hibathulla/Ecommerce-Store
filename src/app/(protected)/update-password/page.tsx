"use client";
import Image from "next/image";
import React from "react";
import ProfileForm from "../../../components/profile/profile-form";
import { useGetLoggedUser } from "../../../services/user";
import { Icons } from "../../../utils/Icons";
import UpdatePasswordForm from "../../../components/update-password/update-password-form";

const UpdatePasswordPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center py-10">
      <div className="w-[90%] lg:w-1/2 h-full mx-auto bg-[#f5f5f5] border-2 rounded-xl border-gray-300 flex flex-col p-14 justify-between items-center lg:max-w-[500px]">
        <h1 className="text-2xl text-[#060606] font-semibold self-start">
          Update password
        </h1>

        {/* <RegisterForm /> */}
        <UpdatePasswordForm />
      </div>
    </div>
  );
};

export default UpdatePasswordPage;
