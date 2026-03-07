import express from "express";
import cors from "cors";
import { router } from "./routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

const port = process.env.PORT || 5179;
app.listen(port, () => {
  console.log(`MoodGarden server running on http://localhost:${port}`);
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server error" });
});
