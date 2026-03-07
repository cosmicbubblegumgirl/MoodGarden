import express from "express";
import { generateSessionPlan } from "./sessionPlan.js";

export const router = express.Router();

router.get("/health", (_req, res) => {
  res.json({ ok: true });
});

router.post("/plan", (req, res) => {
  const { seedKey, minutes } = req.body ?? {};
  const plan = generateSessionPlan(seedKey, { minutes });
  res.json(plan);
});
