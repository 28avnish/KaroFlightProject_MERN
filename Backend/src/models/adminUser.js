// models/AdminUser.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const MODULES = ["General","SEO", "Blog", "Offer", "Newsletter"];

const adminUserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, unique: true, required: true, lowercase: true, index: true },
    password: { type: String, required: true }, // store hashed
    // Role + embedded permissions
    roleType: { type: String, enum: ["superadmin", "admin"], required: true, default: "admin" },
    modules: {
      type: [String],
      enum: MODULES,
      default: [],
    },

    status: { type: String, enum: ["active", "suspended"], default: "active" },

  // Audit helpers (which super admin created/updated this admin user)
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "AdminUser" },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "AdminUser" },
  },
  { timestamps: true }
);

// Hash password before save
adminUserSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Custom method to check password
adminUserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("AdminUser", adminUserSchema);
export { MODULES };
