import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
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
    </div>
  );
};

export default Login;
