import React from "react";

export default function SignUp() {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center pt-20 px-6 lg:px-20">
        <div className="w-full max-w-md">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter your email and password to sign up!
          </p>

          {/* Social buttons */}
          <div className="flex gap-3 mb-6">
            <button className="flex items-center justify-center gap-2 w-1/2 border rounded-lg py-2 text-gray-700 hover:bg-gray-50">
              <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
              Sign up with Google
            </button>
            <button className="flex items-center justify-center gap-2 w-1/2 border rounded-lg py-2 text-gray-700 hover:bg-gray-50">
              <img src="/x-icon.svg" alt="X" className="w-4 h-4" />
              Sign up with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <hr className="flex-1 border-gray-300" />
            <span className="text-gray-400 text-sm">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
                required
              />
            </div>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
              required
            />
            <input
              type="number"
              placeholder="Enter your mobile number"
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
              required
            />

            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
                required
              />
              <span className="absolute right-3 top-2.5 text-gray-500 cursor-pointer">
                👁
              </span>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-600">
                By creating an account means you agree to the{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Terms and Conditions
                </a>
                , and our{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex md:w-1/2 bg-[#202c59] text-white items-center justify-center"></div>
    </div>
  );
}
