import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/movie.route.js";
import tvRoutes from "./routes/tv.route.js";
import searchRoutes from "./routes/search.route.js";

import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();
const PORT = ENV_VARS.PORT;

// ✅ CORS setup for both local & production frontend
app.use(cors({
  origin: ["http://localhost:5173", "https://netflix-clone-ivory-eight.vercel.app"],
  credentials: true
}));


// ✅ Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/movie", protectRoute, movieRoutes);
app.use("/api/v1/tv", protectRoute, tvRoutes);
app.use("/api/v1/search", protectRoute, searchRoutes);

// ✅ Optional: serve frontend in production
// import path from "path";
// const __dirname = path.resolve();
// if (ENV_VARS.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   });
// }

// ✅ Start server and connect DB
app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
  connectDB();
});
