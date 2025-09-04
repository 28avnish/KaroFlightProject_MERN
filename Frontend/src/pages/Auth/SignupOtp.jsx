import { useDispatch, useSelector } from "react-redux";
import { OtpGrid } from "../../components/OtpGrid";
import { verifySignupEmail } from "../../features/actions/auth";

export default function SignupOtp() {
  const dispatch = useDispatch();
  const { signupEmail } = useSelector((state) => state.auth);
  const length = 6;

  const handleOtpSubmit = (otp) => {
    console.log("Sign Up OTP:", otp);
    // Dispatch your OTP verification action
    dispatch(
      verifySignupEmail({
        otp,
        email: signupEmail,
      })
    );
  };
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
        submitLabel="Verify Email"
        onSubmit={handleOtpSubmit}
      />

      <div className="text-sm text-slate-500 mt-4">
        Didn't receive code?{" "}
        <button className="font-medium text-indigo-500 hover:text-indigo-600">
          Resend
        </button>
      </div>

      <div className="text-sm text-slate-500 mt-4">
        Back to Signup
        <button className="font-medium text-indigo-500 hover:text-indigo-600">
          -
        </button>
      </div>
    </div>
  );
}
