import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../appwrite/auth";
import { login as loginStore } from "../store/authSlice";
import { Input, Button, Logo } from "./index";

const Signup = () => {
  const [error, updateError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    updateError("");
    try {
      const user = await auth.signup(data);
      if (user) {
        const userdata = await auth.currentUser();
        if (userdata) dispatch(loginStore(userdata));
        navigate("/");
      }
    } catch (error) {
      console.log("signup service error: ", error);
      updateError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="FullName: "
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />
            <Input
              label="Email: "
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            <Button
              type="submit"
              children={"Create Account"}
              className="w-full cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
