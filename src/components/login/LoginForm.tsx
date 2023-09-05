"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLogin } from "../../services/auth";
import { Icons } from "../../utils/Icons";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { mutate, isLoading, error, isError } = useLogin();

  const err: any = (error as any)?.response?.data!;
  const errMessage = err?.message;
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
      <div className="w-full flex flex-col mb-2">
        <h3 className="text-2xl font-semibold mb-2">Login</h3>
        <p className="text-sm mb-2 font-medium">
          Welcome back! Please Enter your details.
        </p>
      </div>

      <div className="w-full flex flex-col">
        <input
          {...register("email", {
            required: "Please enter a email",
          })}
          type="email"
          placeholder="Email"
          className="w-full text-black border-b my-2 border-black outline-none focus:outline-none py-4 bg-transparent"
        />
        {errors.email && (
          <span className="text-red-400 font-medium">
            {errors.email?.message}
          </span>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Please enter a password",
          })}
          className="w-full text-black border-b my-2 border-black outline-none focus:outline-none py-4 bg-transparent"
        />
        {errors.password && (
          <span className="text-red-400 font-medium">
            {errors?.password?.message}
          </span>
        )}
      </div>

      <div className="w-full flex items-center justify-between mt-4">
        <div className="w-full flex">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <p className="text-sm font-medium">Remember Me</p>
        </div>
      </div>

      {isError && (
        <div className="py-2 px-2 mt-5 bg-red-500 text-white font-medium text-lg rounded-lg">
          {errMessage}
        </div>
      )}

      <div className="w-full flex flex-col my-4">
        <button
          disabled={isLoading}
          className="w-full disabled:opacity-80 text-white my-2 bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"
        >
          {isLoading ? (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            ""
          )}{" "}
          Log in
        </button>
        {/* <button className="w-full bg-white my-2 text-[#060606] border-2 border-black rounded-md p-4 text-center flex items-center justify-center">
          Register
        </button> */}
      </div>
    </form>
  );
};

export default LoginForm;
