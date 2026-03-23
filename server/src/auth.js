import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { query } from './db.js';

const JWT_SECRET = process.env.JWT_SECRET || '611418a8f06ba79b7d0ca88f4e907ba43875af25e5ba8f33312902f6e8b90b94';
const JWT_EXPIRY = '7d';

export function verifyToken(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = auth.slice(7);
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}

export async function registerUser(username, password, displayName) {
  if (!username || username.length < 3) throw new Error('Username must be at least 3 characters');
  if (!password || password.length < 6) throw new Error('Password must be at least 6 characters');

  const hash = await bcrypt.hash(password, 10);
  let result;
  try {
    result = await query(
      'INSERT INTO users (username, password_hash, display_name) VALUES ($1, $2, $3) RETURNING id, username, display_name',
      [username.toLowerCase().trim(), hash, displayName || username]
    );
  } catch (err) {
    if (err.code === '23505') throw new Error('Username already taken');
    throw err;
  }
  const user = result.rows[0];
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
  return { user: { id: user.id, username: user.username, display_name: user.display_name }, token };
}

export async function loginUser(username, password) {
  const result = await query('SELECT * FROM users WHERE username = $1', [username.toLowerCase().trim()]);
  const user = result.rows[0];
  if (!user) throw new Error('Username not found');
  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) throw new Error('Incorrect password');
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
  return { user: { id: user.id, username: user.username, display_name: user.display_name }, token };
}

export async function getUserById(id) {
  const result = await query('SELECT id, username, display_name, created_at FROM users WHERE id = $1', [id]);
  return result.rows[0] || null;
}
