import chalk from "chalk";
import mongoose from "mongoose";

// -------------------------------------------------------------------------------------------------------

// connectMongo -- function to call in order to connect to the database
export const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(chalk.bgBlue("       CONNECTED TO MONGODB DATABASE       "))
  } catch (error) {
    console.log(error.message);
  }
};
