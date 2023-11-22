"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRegister } from "../../services/auth";
import { Icons } from "../../utils/Icons";

type Inputs = {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const { mutate, isLoading, error, isError } = useRegister();

  const err: any = (error as any)?.response?.data!;
  const errMessage = err?.message;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => mutate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col">
      <div className="w-full flex flex-col mb-2">
        <h3 className="text-2xl font-semibold mb-2">Sign up</h3>
        <p className="text-sm mb-2 font-medium">
          Welcome! Please create an account.
        </p>
      </div>

      <div className="w-full flex flex-col">
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: "Please enter a name",
          })}
          className="w-full text-black border-b my-2 border-black outline-none focus:outline-none py-4 bg-transparent"
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

      {/* <div className="w-full flex items-center justify-between mt-4">
        <div className="w-full flex">
          <input type="checkbox" className="w-4 h-4 mr-2" />
          <p className="text-sm font-medium">Remember Me</p>
        </div>
      </div> */}

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
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
