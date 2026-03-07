const KEY = "moodgarden_clients_v1";

export function loadClients() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveClients(clients) {
  localStorage.setItem(KEY, JSON.stringify(clients));
  return clients;
}

export function addClient(client) {
  const current = loadClients();
  const next = [client, ...current].slice(0, 50);
  return saveClients(next);
}

export function removeClient(id) {
  const current = loadClients();
  const next = current.filter((c) => c.id !== id);
  return saveClients(next);
}

export function clearClients() {
  localStorage.removeItem(KEY);
}
