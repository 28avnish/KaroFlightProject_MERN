import express from "express";
import {
  adminLogin,
  adminLogout,
  deleteAdminUser,
  getAllAdminsExceptSuperAdmin,
  newAdminUser,
  updateAdminUser,
} from "../controllers/adminUser.js";
import { requireSuperAdmin } from "../middlewares/access.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.route("/register").post(verifyToken, requireSuperAdmin, newAdminUser);
router.route("/login").post(adminLogin);
router.route("/logout").post(adminLogout);
router.route("/update").patch(verifyToken, requireSuperAdmin, updateAdminUser);
router
  .route("/delete/:id")
  .delete(verifyToken, requireSuperAdmin, deleteAdminUser);
router
  .route("/getAdmins")
  .get(verifyToken, requireSuperAdmin, getAllAdminsExceptSuperAdmin);

export default router;
