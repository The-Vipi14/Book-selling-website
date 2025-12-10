import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

import userRouter from "./src/routes/userRoutes.js";

import productRoutes from './src/routes/productRute.js'



dotenv.config();

const app = express();

// Middlewares
// app.use(cors({
//   origin: '*', // or 'http://localhost:5500' etc.
//   credentials: true
// }));

app.use(cors())
app.use(express.json());

// Database connection
connectDB();

// Routes 
app.use('/api/user',userRouter);
app.use('/api',productRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Book selling website backend is working");
});

// Server PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
