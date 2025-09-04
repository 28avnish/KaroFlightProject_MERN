import { useDispatch, useSelector } from "react-redux";
import { OtpGrid } from "../../components/OtpGrid";
import { localSignUp, verifySignupEmail } from "../../features/actions/auth";
import { FaArrowLeftLong } from "react-icons/fa6";
import { clearAllStates } from "../../features/slices/auth";
import { Navigate } from "react-router-dom";
import ButtonLoader from "../../components/Loader/ButtonLoader";

export default function SignupOtp() {
  const dispatch = useDispatch();
  const { signupData } = useSelector((state) => state.auth);
  const length = 6;
  
 const { signupMailSentResponse,signupOtpVerifyResponse, isVerifyLoading ,isLoading} = useSelector(
    (state) => state.auth
  );

  const handleOtpSubmit = (otp) => {
    dispatch(
      verifySignupEmail({
        otp,
        email: signupData?.email,
      })
    );
  };

    if (!signupMailSentResponse) {
      return <Navigate to="/signup" replace />;
    }
    if (signupOtpVerifyResponse?.success) {
      return <Navigate to="/login" replace />;
    }

  return (
    <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
      <header className="mb-8">
        <h1 className="text-2xl font-bold mb-1">Email Verification</h1>
        <p className="text-[15px] text-slate-500">
          Enter the {length}-digit verification code that was sent to your
          email.
        </p>
      </header>

      <OtpGrid
        length={length}
        disabled={isVerifyLoading}
        submitLabel={isVerifyLoading? <ButtonLoader/> : "Verify Email"}
        onSubmit={handleOtpSubmit}
      />

      <div className="text-sm text-slate-500 mt-4">
        Didn't receive code?{" "}
        <button disabled={isLoading} onClick={()=>dispatch(localSignUp(signupData))} className="font-medium text-indigo-500 hover:text-indigo-600">
          Resend
        </button>

        {isLoading && <div className="flex justify-center item-center gap-3"><div ><ButtonLoader/></div>
            <div className="text-sm">Wait for the otp ...</div></div>}

      </div>

      <div className="text-sm text-slate-500 mt-4">
        <button onClick={()=>dispatch(clearAllStates())} className="flex items-center gap-2  font-medium text-indigo-500 hover:text-indigo-600">
          <FaArrowLeftLong/>
          <span>  Back to Signup</span>
        </button>
      
      </div>
    </div>
  );
}
