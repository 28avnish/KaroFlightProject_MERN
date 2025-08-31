import express from "express";
import { adminLogin, adminLogout, deleteAdminUser, newAdminUser, updateAdminUser } from "../controllers/adminUser.js";
import { requireSuperAdmin } from "../middlewares/access.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.route("/register").post(verifyToken, requireSuperAdmin,newAdminUser);
router.route("/login").post(adminLogin);
router.route("/logout").post(adminLogout);
router.route("/update/:id").patch(verifyToken, requireSuperAdmin,updateAdminUser);
router.route("/delete/:id").delete(verifyToken, requireSuperAdmin,deleteAdminUser);

export default router;
