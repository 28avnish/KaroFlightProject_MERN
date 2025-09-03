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
import { verifyAdminToken } from "../middlewares/verifyAdminToken.js";

const router = express.Router();

router
  .route("/register")
  .post(verifyAdminToken, requireSuperAdmin, newAdminUser);
router.route("/login").post(adminLogin);
router.route("/logout").post(adminLogout);
router
  .route("/update")
  .patch(verifyAdminToken, requireSuperAdmin, updateAdminUser);
router
  .route("/delete/:id")
  .delete(verifyAdminToken, requireSuperAdmin, deleteAdminUser);
router
  .route("/getAdmins")
  .get(verifyAdminToken, requireSuperAdmin, getAllAdminsExceptSuperAdmin);

export default router;
