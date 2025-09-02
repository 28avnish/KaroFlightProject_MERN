import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    otp: {
      type: String,
      required: [true, "Enter the otp"],
    },
    type: {
      type: String,
      default: "SIGNUP",
      enum: ["FORGOTPASSWORD", "SIGNUP"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    expiresAt: {
      type: Date,
      default: Date.now,
      // ⬇️ TTL index: auto delete after 600s (10 min)
      expires: 600,
    },
  },
  {
    timestamps: true, // adds createdAt, updatedAt
  }
);

export default mongoose.model("Otp", otpSchema);
