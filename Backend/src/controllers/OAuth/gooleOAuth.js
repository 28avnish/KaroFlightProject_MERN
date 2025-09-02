// import passport from "passport";
// import GoogleStrategy from "passport-google-oauth20";
// import auth from "../../models/auth/auth.js";
// import { asyncErrorHandler } from "../../utils/errors/asyncErrorHandler.js";
// import { CustomError } from "../../utils/errors/customError.js"

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: process.env.GOOGLE_CLIENT_ID,
//             clientSecret:process.env.GOOGLE_CLIENT_SECRET,
//             callbackURL: `${process.env.BACKEND_URL}/api/v1/oAuth/google/callback`
//         },
//         async function (accessToken, refreshToken, profile, cb) {
// console.log(profile)

//             const user = await auth.findOne({
//               email: profile._json.email
//             });

//             if (!user) {
//               console.log("Adding new Google user to database.. || User Logged In");
//               const user = await auth.create({
//                 accountId: profile.id,
//                 provider: profile.provider,
//                 firstName: profile.name.givenName,
//                 lastName:profile.name.familyName,
//                 email:profile._json.email
//               });

//               return cb(null, user);
//             } else {
//               console.log("Google User already exist in Database || User Logged In");

//               return cb(null, user);
//             }
//           }
//     )
// )

// passport.serializeUser(function (user, done) {
//     done(null, user);
//   });

//   passport.deserializeUser(function (user, done) {
//     done(null, user);
//   });

//   export const socialOAuth = passport;

// export const getUserData= asyncErrorHandler( async(req,res,next)=>{
//   const {id} = req?.user
//   const data = await auth.findById(id)
// if(!data){
//   return  next(
//     new CustomError(`Can't find the user ID`, 404)
//   );
// }

// res.status(200).json({
//   status:true,
//   message:"User Data Found Successfully",
//   data
// })

// })
