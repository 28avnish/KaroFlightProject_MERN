import jwt from "jsonwebtoken";
import ErrorResponse from "../utils/errorResponse.js";

export const verifyCustomerToken = async (req, res, next) => {
  try {
    // Read token from cookies
    const token = req.cookies.ADMIN_TOKEN_KAROFLIGHT;
    if (!token) {
      return next(new ErrorResponse("Not authorized, no token", 401));
    }

    // Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user.id = decoded.id;

    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorized, invalid token", 401));
  }
};
