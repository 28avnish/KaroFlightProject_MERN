import AdminUser from "../models/adminUser.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";
import jwt from "jsonwebtoken";

export const newAdminUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, roleType, modules } = req.body;

  // check if email already exists
  const isUserExist = await AdminUser.findOne({ email });
  if (isUserExist) {
    return next(new ErrorResponse("Email already exists.", 409)); 
  }

  // Create user (can be admin or superadmin)
  const user = await AdminUser.create({
    name,
    email,
    password,
    roleType, // "admin" | "superadmin"
    modules: roleType === "superadmin" ? [] : modules, // enforce rule
  });

  res.status(201).json({
    status: true,
    message: "User created successfully!!",
    data: user,
  });
});

export const adminLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await AdminUser.findOne({ email });

  if (!user || !(await user.matchPassword(password))) {
    return next(new ErrorResponse("Invalid credentials", 401));
  }

  if (user.status === "suspended") {
    return next(
      new ErrorResponse(
        "Your account has been suspended. Please contact the Super Admin.",
        403
      )
    );
  }

  // Generate token
  const token = jwt.sign(
    { id: user._id, roleType: user.roleType },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  // Send token in httpOnly cookie
  res
    .cookie("ADMIN_TOKEN_KAROFLIGHT", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // use HTTPS only in prod
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    .status(200)
    .json({ status: true, message: "Login successful", user });
};

export const adminLogout = async (req, res, next) => {
  res.clearCookie("ADMIN_TOKEN_KAROFLIGHT", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.status(200).json({
    status: true,
    message: "Logged out successfully",
  });
};

// UPDATE ADMIN USER (only superadmin)
export const updateAdminUser = asyncHandler(async (req, res, next) => {
  const { name, email, roleType, modules, password, status, id } = req.body;

  // ✅ find user to update
  const user = await AdminUser.findById(id);
  if (!user) {
    return next(new ErrorResponse("Admin user not found", 404));
  }

  // ✅ apply updates
  if (name) user.name = name;
  if (email) user.email = email;
  if (roleType) user.roleType = roleType;

  // ✅ modules only for admins (not superadmin)
  if (roleType === "admin" && Array.isArray(modules)) {
    user.modules = modules;
  }
  if (roleType === "superadmin") {
    user.modules = []; // force reset
  }
  if (status) {
    user.status = status;
  }
  if (password) {
    user.password = password; // will be hashed by pre-save hook
  }

  await user.save();

  res.status(200).json({
    status: true,
    message: "Admin user updated successfully",
    user,
  });
});

export const deleteAdminUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  // ✅ find user
  const user = await AdminUser.findById(id);
  if (!user) {
    return next(new ErrorResponse("Admin user not found", 404));
  }

  // ✅ block deleting superadmins
  if (user.roleType === "superadmin") {
    return next(new ErrorResponse("You cannot delete a Super Admin", 403));
  }

  // ✅ delete admin
  await user.deleteOne();

  res.status(200).json({
    status: true,
    message: "Admin user deleted successfully",
  });
});

export const getAllAdminsExceptSuperAdmin = asyncHandler(async (req, res) => {
  try {
    const currentUserId = req.user._id;

    // Fetch all users except current user
    const admins = await AdminUser.find({
      _id: { $ne: currentUserId }, // exclude current user
    })
      .select("-password")
      .sort({ roleType: -1 }); // exclude password field

    res.status(200).json({
      success: true,
      data: admins,
    });
  } catch (error) {
    res.status(500);
    throw new Error("Error fetching admins");
  }
});
