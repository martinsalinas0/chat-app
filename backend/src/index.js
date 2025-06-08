import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import { connect } from "mongoose";
import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
//console.log(PORT)




app.use(express.json())

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
  connectDB(); 
});


/////////TIME STOPPED AT VIDEO 30:12