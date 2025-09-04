import React, { useState } from 'react'
import { FaArrowLeftLong, FaRegEyeSlash } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import ButtonLoader from '../../components/Loader/ButtonLoader';
import { OtpGrid } from '../../components/OtpGrid';
import { forgotPassword, resetForgotPassword } from '../../features/actions/auth'; 
import { clearAllStates } from '../../features/slices/auth';
import { Navigate } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

const ForgotPasswordOtp = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { forgotPasswordEmail } = useSelector((state) => state.auth);
  const length = 6;
  
  const { forgotPassMailSentResponse, forgotPassOtpVerifyResponse, isVerifyLoading, isResetLoading } = useSelector(
    (state) => state.auth
  );

  const [newPassword, setNewPassword] = useState("");

  const handleOtpSubmit = (otp) => {
    if (!newPassword) return; // simple check, you can add more validation

    dispatch(
      resetForgotPassword({
        otp,
        email: forgotPasswordEmail,
        newPassword,
      })
    );
  };

  // ✅ navigate to login once OTP verified + password reset success OR no mail found
  if (forgotPassOtpVerifyResponse?.success || !forgotPassMailSentResponse) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Reset Password</h1>
        <p className="text-[15px] text-slate-500">
          Enter the {length}-digit verification code sent to your email and choose a new password.
        </p>
      </header>

           {/* ✅ New Password Field */}
      <div className="mb-4 text-left relative">
    <input
    type={showPassword ? "text" : "password"}
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-300 focus:outline-none"
    placeholder="Enter new password"
    minLength={9} // ✅ HTML5 validation
    required
  />
   <span
                  className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
                </span>
  {newPassword && newPassword.length < 9 && (
    <p className="text-sm text-red-500 mt-1">Password must be at least 9 characters long</p>
  )}
      </div>

      <label className="block text-sm text-left font-medium text-gray-700 mb-1">
          Enter the OTP here
        </label>
      <OtpGrid
        length={length}
        disabled={isVerifyLoading}
        submitLabel={isVerifyLoading ? <ButtonLoader /> : "Reset Password"}
        onSubmit={handleOtpSubmit}
      />

 

      <div className="text-sm text-slate-500 mt-4">
        Didn't receive code?{" "}
        <button
          disabled={isResetLoading}
          onClick={() => dispatch(forgotPassword({ email: forgotPasswordEmail }))}
          className="font-medium text-indigo-500 hover:text-indigo-600"
        >
          Resend
        </button>
        {isResetLoading && (
          <div className="flex justify-center items-center gap-3 mt-2">
            <div><ButtonLoader /></div>
            <div className="text-sm">Wait for the OTP ...</div>
          </div>
        )}
      </div>

      <div className="text-sm text-slate-500 mt-4">
        <button
          onClick={() => dispatch(clearAllStates())}
          className="flex items-center gap-2 font-medium text-indigo-500 hover:text-indigo-600"
        >
          <FaArrowLeftLong />
          <span>Back to Login</span>
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordOtp;
