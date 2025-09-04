import { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { forgotPassword, localSignUp, logIn } from "../../features/actions/auth";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  validateEmail
} from "../../components/Validation/Validation";
import { Link, Navigate } from "react-router-dom";
import { clearAllStates, setForgotPasswordEmail, setSignupData } from "../../features/slices/auth";
import { useEffect } from "react";
import ButtonLoader from "../../components/Loader/ButtonLoader";

export default function Login() {
  const dispatch = useDispatch();
  const { isUserLoggedIn,isResetLoading,isLoading,forgotPassMailSentResponse } = useSelector(
    (state) => state.auth
  );
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();

  const emailValue = watch("email");

  const [showPassword, setShowPassword] = useState(false);


  const onSubmit = (data) => {
    dispatch(logIn(data));
  };

  const handleForgotPassword = () => {
  if (!emailValue) {
    // manually trigger error on email field
    setError("email", { type: "manual", message: "Email is required for password reset" });
    return;
  }
    // use your existing validateEmail function
  const validationResult = validateEmail(emailValue);
  if (validationResult !== true) {
    setError("email", {
      type: "manual",
      message: validationResult, // validateEmail should return a string if invalid
    });
    return;
  }
  dispatch(setForgotPasswordEmail(emailValue))
  dispatch(forgotPassword({ email: emailValue }));
};


  useEffect(()=>{
    dispatch(clearAllStates())
  },[])

   if (isUserLoggedIn) {
    return <Navigate to="/" replace />;
  }

   if (forgotPassMailSentResponse) {
    return <Navigate to="/forgot-password-otp" replace />;
  }

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center pt-10 px-6 lg:px-20">
        <div className="w-full max-w-md">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your details to log in!
          </p>

          {/* Social buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 w-1/2 border rounded-lg py-2 text-gray-700 hover:bg-gray-50">
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
              Login with Google
            </button>
            <button className="flex items-center justify-center gap-2 w-1/2 border rounded-lg py-2 text-gray-700 hover:bg-gray-50">
              <img src="/x-icon.svg" alt="X" className="w-4 h-4" />
              Login with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-sm">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
              {...register("email", {
                required: "Email is required",
                validate: validateEmail,
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
                {...register("password", {
                  required: "Password is required"
                })}
              />
              <span
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            <div  className="flex  justify-end"> 
                <button onClick={handleForgotPassword} disabled={isResetLoading}  type="button"  to={"/forgot-password"} className="cursor-pointer text-indigo-600 font-semibold text-sm hover:underline">
              Forgot Password
            </button>
            </div>
            {isResetLoading && <div className="flex justify-center item-center gap-3"><div ><ButtonLoader/></div>
            <div className="text-sm">Wait for the password reset otp ...</div></div>}
            


            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
             {isLoading ? <ButtonLoader/> : "Login"}
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-indigo-600 font-semibold hover:underline">
              Create here
            </Link>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex md:w-1/2 bg-[#202c59] text-white items-center justify-center"></div>
    </div>
  );
}
