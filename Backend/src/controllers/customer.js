import Customer from "../models/customer.js";
import OtpModel from "../models/otp.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";
import jwt from "jsonwebtoken";
import { sendMail } from "../utils/sendMail.js";

export const signUp = asyncHandler(async (req, res, next) => {
  try {
    const { email, name } = req.body;

    // check if user already exists
    const isUserExist = await Customer.findOne({ email });
    if (isUserExist) {
      return next(new ErrorResponse("Email already exists.", 409));
    }

    // generate otp
    const otp = Math.floor(100000 + Math.random() * 900000);

    // send email first
    await sendMail(email, name, otp);

    // upsert OTP doc
    await OtpModel.findOneAndUpdate(
      { email, type: "SIGNUP" },
      {
        otp,
        expiresAt: new Date(Date.now() + 600000), // 10 min expiry
      },
      { new: true, upsert: true }
    );

    return res
      .status(200)
      .json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Something went wrong",
    });
  }
});

export const verifySignupOtp = asyncHandler(async (req, res) => {
  const { email, password, otp, fullName, mobileNumber } = req?.body;

  // --finding otp in otp model
  const isOtpValid = await OtpModel.findOne({ email, otp });
  if (!isOtpValid) {
    return next(new ErrorResponse("OTP is incorrect or expiry.", 400));
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newData = new auth({
    fullName,
    email,
    password: hashedPassword,
    mobileNumber,
  });
  await newData.save();

  res.status(200).json({
    status: true,
    message: "Otp verified",
  });
});

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await Customer.findOne({ email });

  if (!user || !(await user.matchPassword(password))) {
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
