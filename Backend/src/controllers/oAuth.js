import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import Customer from "../models/customer.js";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${
        process.env.NODE_ENV === "development"
          ? process.env.BACKEND_LOCAL_URL
          : process.env.BACKEND_LIVE_URL
      }/api/v1/oAuth/google/callback`,
    },
    async function (accessToken, refreshToken, profile, cb) {
      try {
        const email = profile._json.email;

        // 🔹 If there’s an unverified user with same email → delete it
        await Customer.deleteOne({ email, isVerified: false });

        // 🔹 Check if a verified user already exists
        let user = await Customer.findOne({ email });

        if (!user) {
          console.log("Adding new Google user to database.. || User Logged In");
          user = await Customer.create({
            name: profile.displayName, // Google full name
            email,
            provider: "google",
            providerId: profile.id,
            isVerified: true, // trust Google verified emails
          });
        } else {
          console.log(
            "Google User already exists in Database || User Logged In"
          );
        }

        return cb(null, user);
      } catch (err) {
        return cb(err, null);
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `${
        process.env.NODE_ENV === "development"
          ? process.env.BACKEND_LOCAL_URL
          : process.env.BACKEND_LIVE_URL
      }/api/v1/oAuth/facebook/callback`,
      profileFields: ["id", "displayName", "email"],
    },
    async function (accessToken, refreshToken, profile, cb) {
      // 🔹 If there’s an unverified user with same email → delete it
      await Customer.deleteOne({ email, isVerified: false });

      let user = await Customer.findOne({ email: profile._json.email });

      if (!user) {
        console.log("Adding new Facebook user to database.. || User Logged In");
        user = await Customer.create({
          name: profile.displayName, // full name (Facebook provides full name here)
          email: profile._json.email,
          provider: "facebook",
          providerId: profile.id,
          isVerified: true, // trust facebook verified emails
        });

        return cb(null, user);
      } else {
        console.log("Facebok User already exist in Database || User Logged In");

        return cb(null, user);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

export const socialOAuth = passport;
