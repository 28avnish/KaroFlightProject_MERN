import mongoose from "mongoose";
import bcrypt from "bcrypt";
import ErrorResponse from "../utils/errorResponse.js";

const customerSchema = new mongoose.Schema(
  {
    // Common fields for all users
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    mobileNumber: { type: String },

    // Authentication
    password: { type: String }, // required only for email/password signups

    // OAuth support
    provider: {
      type: String,
      enum: ["local", "google", "facebook"],
      default: "local",
    },
    providerId: { type: String }, // stores Google/Facebook user ID

    isVerified: { type: Boolean, default: false },

    // Booking-related fields
    bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],

    // expiry field (only for unverified)
    expireAt: { type: Date, default: Date.now, index: { expires: "24h" } },
  },
  { timestamps: true }
);

// Hash password before save
customerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Add method to schema
customerSchema.methods.matchPassword = async function (enteredPassword, next) {
  if (!this.password) {
    return next(new ErrorResponse("You have to reset the password.", 401));
  }
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("Customer", customerSchema);
