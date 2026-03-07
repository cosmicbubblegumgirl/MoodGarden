const KEY = "moodgarden_history_v1";

export function loadHistory() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveToHistory(entry) {
  const current = loadHistory();
  const next = [entry, ...current].slice(0, 25);
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function clearHistory() {
  localStorage.removeItem(KEY);
}
