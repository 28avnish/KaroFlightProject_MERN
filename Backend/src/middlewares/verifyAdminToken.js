import jwt from "jsonwebtoken";
import AdminUser from "../models/adminUser.js";
import ErrorResponse from "../utils/errorResponse.js";

export const verifyAdminToken = async (req, res, next) => {
  try {
    // Read token from cookies
    const token = req.cookies.ADMIN_TOKEN_KAROFLIGHT;
    if (!token) {
      return next(new ErrorResponse("Not authorized, no token", 401));
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user to request
    req.user = await AdminUser.findById(decoded.id).select("-password");

    if (!req.user) {
      return next(new ErrorResponse("User not found", 404));
    }

    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized, invalid token", 401));
  }
};
