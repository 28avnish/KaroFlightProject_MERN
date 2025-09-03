import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

// Route to initiate google login
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Route to initiate facebook login
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["public_profile", "email"] })
);

// Callback route that google will redirect to after successful login
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  (req, res) => {
    if (req.user) {
      const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      // Set token in cookie
      res.cookie("CUSTOMER_TOKEN_KAROFLIGHT", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      // Redirect user back to frontend
      return res.redirect(process.env.FRONTEND_URL);
    } else {
      return res.redirect(`${process.env.FRONTEND_URL}/failedAuth`);
    }
  }
);

// Callback route that google will redirect to after successful login
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/failed" }),
  (req, res) => {
    console.log(req?.user);
    if (req.user) {
      const token = jwt.sign(
        { id: req.user._id },
        process.env.JWT_SECRET, // Use a strong secret key
        { expiresIn: "7d" } // Set token expiration
      );

      // Set token in cookie
      res.cookie("CUSTOMER_TOKEN_KAROFLIGHT", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      res.redirect(`${process.env.FRONTEND_URL}?token=${token}`);
    } else {
      res.redirect(`${process.env.FRONTEND_URL}/failedAuth`);
    }
  }
);

export default router;
