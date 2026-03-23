const TOKEN_KEY = 'moodgarden_token';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

async function apiFetch(path, options = {}) {
  const token = getToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers ?? {})
  };
  const res = await fetch(`/api${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

export async function authRegister(username, password, displayName) {
  const data = await apiFetch('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ username, password, displayName })
  });
  setToken(data.token);
  return data;
}

export async function authLogin(username, password) {
  const data = await apiFetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password })
  });
  setToken(data.token);
  return data;
}

export async function authMe() {
  return apiFetch('/auth/me');
}

export async function fetchHistory() {
  const rows = await apiFetch('/history');
  return rows.map(r => ({
    id: r.session_id,
    seedKey: r.seed_key,
    seedLabel: r.seed_label,
    totalMinutes: r.total_minutes,
    completedAt: r.completed_at,
    note: r.note || ''
  }));
}

export async function saveHistory(entry) {
  return apiFetch('/history', {
    method: 'POST',
    body: JSON.stringify({
      session_id: entry.id,
      seed_key: entry.seedKey,
      seed_label: entry.seedLabel,
      total_minutes: entry.totalMinutes,
      completed_at: entry.completedAt,
      note: entry.note
    })
  });
}

export async function clearHistoryApi() {
  return apiFetch('/history', { method: 'DELETE' });
}
