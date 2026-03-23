import express from 'express';
import { generateSessionPlan } from './sessionPlan.js';
import { registerUser, loginUser, getUserById, verifyToken } from './auth.js';
import { query } from './db.js';

export const router = express.Router();

router.get('/health', (_req, res) => {
  res.json({ ok: true });
});

router.post('/plan', (req, res) => {
  const { seedKey, minutes } = req.body ?? {};
  const plan = generateSessionPlan(seedKey, { minutes });
  res.json(plan);
});

router.post('/auth/register', async (req, res) => {
  try {
    const { username, password, displayName } = req.body ?? {};
    const result = await registerUser(username, password, displayName);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post('/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body ?? {};
    const result = await loginUser(username, password);
    res.json(result);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

router.get('/auth/me', verifyToken, async (req, res) => {
  try {
    const user = await getUserById(req.userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/history', verifyToken, async (req, res) => {
  try {
    const result = await query(
      'SELECT * FROM session_history WHERE user_id = $1 ORDER BY completed_at DESC LIMIT 50',
      [req.userId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/history', verifyToken, async (req, res) => {
  try {
    const { session_id, seed_key, seed_label, total_minutes, completed_at, note } = req.body ?? {};
    const result = await query(
      `INSERT INTO session_history (user_id, session_id, seed_key, seed_label, total_minutes, completed_at, note)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       ON CONFLICT DO NOTHING
       RETURNING *`,
      [req.userId, session_id, seed_key, seed_label, total_minutes, completed_at, note]
    );
    res.json(result.rows[0] || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete('/history', verifyToken, async (req, res) => {
  try {
    await query('DELETE FROM session_history WHERE user_id = $1', [req.userId]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
