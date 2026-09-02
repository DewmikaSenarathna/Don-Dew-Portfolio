import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import contactRouter from "./routes/contact.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

const allowedOrigins = (process.env.CLIENT_URL || "http://localhost:5173")
  .split(",")
  .map((s) => s.trim());

app.use(helmet());
app.use(express.json({ limit: "20kb" }));
app.use(
  cors({
    origin: allowedOrigins,
  })
);

// A modest limiter on the contact endpoint only — this API holds no data,
// so the only thing worth protecting is outbound email volume.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "Too many requests. Please try again later." },
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "don-dew-portfolio-server", time: new Date().toISOString() });
});

app.use("/api/contact", contactLimiter, contactRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Don Dew portfolio API listening on port ${PORT}`);
});
