import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    bookingType: { type: String, enum: ["flight", "hotel"], required: true },
    details: { type: Object, required: true }, // store booking details (flexible)
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    amount: { type: Number, required: true },
    paymentStatus: {
      type: String,
      enum: ["paid", "refunded", "failed"],
      default: "paid",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
