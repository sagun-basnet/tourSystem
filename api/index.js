import express from "express";
import "dotenv/config";
import cors from "cors";
import authRoute from "./routes/authRoute.js";

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
const host = process.env.HOST;
const port = 5050;

app.use("/api", authRoute);

app.listen(port, host, () => {
  console.log(`Server is running on port ${host}:${port}`);
});
