import Customer from "../models/customer.js";
import OtpModel from "../models/otp.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../utils/sendMail.js";

export const signUp = asyncHandler(async (req, res, next) => {
  try {
    const { email, name, password, mobileNumber } = req.body;

    // check if verified user already exists
    const existingUser = await Customer.findOne({ email, isVerified: true });
    if (existingUser) {
      return next(new ErrorResponse("Email already exists.", 409));
    }

    // generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // send OTP mail
    await sendMail(email, name, otp);

    // check if unverified user exists
    let user = await Customer.findOne({ email });

    if (!user) {
      // create new unverified user
      user = await Customer.create({
        name,
        email,
        mobileNumber,
        password, // will be hashed by pre-save middleware
        isVerified: false,
        provider: "local",
      });
    }

    // upsert OTP doc (linked to email)
    await OtpModel.findOneAndUpdate(
      { email, type: "SIGNUP" },
      {
        otp,
        expiresAt: new Date(Date.now() + 600000), // 10 min expiry
      },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
});

export const verifySignupOtp = asyncHandler(async (req, res, next) => {
  const { email, otp } = req.body;

  // check if user already verified
  const existingUser = await Customer.findOne({ email });
  if (existingUser && existingUser.isVerified) {
    return next(
      new ErrorResponse("User is already verified. Please log in.", 400)
    );
  }

  // find OTP record
  const otpDoc = await OtpModel.findOne({ email, otp, type: "SIGNUP" });

  if (!otpDoc) {
    return next(new ErrorResponse("Invalid or expired OTP.", 400));
  }

  // double-check expiry (since TTL may delay deletion)
  if (otpDoc.expiresAt < Date.now()) {
    return next(new ErrorResponse("OTP has expired.", 400));
  }

  // mark user as verified (safe fallback if user doc doesn't exist)
  const user = await Customer.findOneAndUpdate(
    { email },
    {
      isVerified: true,
      expireAt: null, // 👈 prevents TTL deletion
    },

    { new: true }
  );

  if (!user) {
    // instead of exposing "user not found", just show a generic error
    return next(
      new ErrorResponse("Something went wrong. Please try again.", 400)
    );
  }

  res.status(200).json({
    success: true,
    message: "OTP verified successfully. Account activated.",
    data: {
      id: user._id,
      email: user.email,
      name: user.name,
    },
  });
});

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Customer.findOne({ email });

  if (!user || !(await user.matchPassword(password, next))) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  // Generate token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // Send token in httpOnly cookie
  res
    .cookie("CUSTOMER_TOKEN_KAROFLIGHT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // use HTTPS only in prod
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    .status(200)
    .json({ status: true, message: "Login successful", user });
};

export const logout = async (req, res, next) => {
  res.clearCookie("CUSTOMER_TOKEN_KAROFLIGHT", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({
    status: true,
    message: "Logged out successfully",
  });
};

export const updateProfile = asyncHandler(async (req, res, next) => {
  const { mobileNumber } = req.body;
  const userId = req.user.id; // assuming you set req.user from JWT middleware

  // find user
  const user = await Customer.findById(userId);
  if (!user) {
    return next(new ErrorResponse("User not found.", 404));
  }

  // update mobileNumber if provided
  if (mobileNumber) {
    // optional: validate format
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
      return next(new ErrorResponse("Invalid mobile number format.", 400));
    }
    user.mobileNumber = mobileNumber;
  }

  await user.save();

  res.status(200).json({
    success: true,
    message: "Profile updated successfully.",
  });
});

export const forgotPassword = asyncHandler(async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await Customer.findOne({ email, isVerified: true });
    if (!user) {
      return next(new ErrorResponse("No account found with this email.", 404));
    }

    // generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // send mail
    await sendMail(email, user.name, otp);

    // save otp in DB
    await OtpModel.findOneAndUpdate(
      { email, type: "FORGOTPASSWORD" },
      {
        otp,
        expiresAt: new Date(Date.now() + 600000), // 10 min expiry
      },
      { new: true, upsert: true }
    );

    return res.status(200).json({
      success: true,
      message: "OTP sent to your email",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
});

export const resetPassword = asyncHandler(async (req, res, next) => {
  try {
    const { email, otp, newPassword } = req.body;

    const otpRecord = await OtpModel.findOne({
      email,
      type: "FORGOTPASSWORD",
    });

    if (!otpRecord || otpRecord.otp !== otp) {
      return next(new ErrorResponse("Invalid or expired OTP.", 400));
    }

    if (otpRecord.expiresAt < Date.now()) {
      return next(new ErrorResponse("OTP expired.", 400));
    }

    // update password (will be hashed by pre-save hook)
    const user = await Customer.findOne({ email, isVerified: true });
    if (!user) {
      return next(new ErrorResponse("User not found.", 404));
    }

    user.password = newPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password reset successful. Please login with new password.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
});
