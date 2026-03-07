import test from "node:test";
import assert from "node:assert/strict";
import { generateSessionPlan } from "../src/sessionPlan.js";

test("generateSessionPlan returns phases summing to total minutes", () => {
  const plan = generateSessionPlan("low_focus", { minutes: 15 });
  const sum = plan.phases.reduce((a, p) => a + p.minutes, 0);
  assert.equal(sum, 15);
  assert.equal(plan.totalMinutes, 15);
});

test("minutes are clamped to safe bounds", () => {
  const tooSmall = generateSessionPlan("overwhelm", { minutes: 1 });
  assert.equal(tooSmall.totalMinutes, 3);

  const tooLarge = generateSessionPlan("overwhelm", { minutes: 999 });
  assert.equal(tooLarge.totalMinutes, 60);
});

test("unknown seed falls back safely", () => {
  const plan = generateSessionPlan("mystery_seed", { minutes: 10 });
  assert.ok(plan.seedLabel);
  assert.equal(plan.totalMinutes, 10);
});
