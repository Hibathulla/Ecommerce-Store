import Image from "next/image";
import React from "react";
import RegisterForm from "./RegisterForm";
import Link from "next/link";

interface Props {
  details: {
    _id: string;
    createdAt: Date;
    storeName: string;
    billboard: string;
    billboardLabel: string;
    id: string;
  };
}

const Register: React.FC<Props> = ({ details }) => {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-start">
      <div className="hidden lg:flex relative w-1/2 h-full flex-col">
        <div className="absolute top-[25%] z-20 left-[10%] flex flex-col">
          <h1 className="text-4xl text-[#E0E0E0] font-bold my-4">
            Turn your ideas into reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offers from the community
          </p>
        </div>
        <Image
          src={"/login3.jpg"}
          className="h-full w-full object-cover"
          fill
          alt="login"
        />
      </div>

      <div className="w-[90%] lg:w-1/2 h-full mx-auto bg-[#f5f5f5] flex flex-col p-14 justify-between items-center lg:max-w-[500px]">
        <h1 className="text-2xl text-[#060606] font-semibold self-start">
          {details?.storeName}
        </h1>

        <RegisterForm />
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Have an account?{" "}
            <Link
              href="/login"
              className="font-semibold underline underline-offset-2 cursor-pointer"
            >
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
