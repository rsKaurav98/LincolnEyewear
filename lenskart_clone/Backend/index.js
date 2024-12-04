import express, { json } from "express";
import { connection } from "./Configs/db";
import { userRouter } from "./routes/user.routes";
import { productRouter } from "./routes/product.routes";
import { cartRouter } from "./routes/cart.routes";
import cors from "cors";
require("dotenv").config();

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins

app.use(json());

// Routes
app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (err) {
    console.log("Trouble connecting to the DB");
    console.log(err);
  }
  console.log(`Running at ${PORT} Port`);
});
