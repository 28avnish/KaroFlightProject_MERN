import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import chalk from "chalk";
import { connectMongo } from "./src/config/db.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import { socialOAuth } from "./src/controllers/oAuth.js";
import session from "express-session";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

connectMongo();
// @@Desc:------MIDDLEWARES------
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
// Express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false, // Add this line to resolve the deprecation warning
    saveUninitialized: false, // Add this line to resolve the deprecation warning
    cookie: { secure: false },
  })
);
app.use(socialOAuth.initialize());
app.use(socialOAuth.session());

app.use(
  cors(
    process.env.NODE_ENV === "development"
      ? {
          origin: ["http://localhost:5173", "http://localhost:3000"],
          credentials: true,
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          exposedHeaders: ["*", "Authorization"],
        }
      : {
          origin: ["http://localhost:5173", "http://localhost:3000"],
          credentials: true,
          methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
          allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
          exposedHeaders: ["*", "Authorization"],
        }
  )
);

//@@Desc:-----------------importing routers---------------
import adminUserRoutes from "./src/routes/adminUser.js";
import customerRoutes from "./src/routes/customer.js";
import oAuthRoutes from "./src/routes/oAuth.js";

// @@Desc:-----------------route section-----------------
app.use("/api/v1/adminUser", adminUserRoutes);
app.use("/api/v1/customer", customerRoutes);
app.use("/api/v1/oAuth", oAuthRoutes);

app.use("/", (req, res) =>
  res.send("----------WELCOME TO KARO FLIGHT SERVER----------")
);

app.use(errorHandler); // custom error handler

app.listen(PORT, () =>
  console.log(
    chalk.bgMagentaBright(`
    SERVER STARTED AND RUNNING AT PORT ${PORT}`)
  )
);
