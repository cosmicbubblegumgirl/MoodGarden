import { useState } from "react";
import ClientCard from "./ClientCard.jsx";
import { addClient, clearClients, loadClients, removeClient } from "../lib/clientsStorage.js";

export default function Clients() {
  const [clients, setClients] = useState(() => loadClients());
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    status: "active",
    note: ""
  });

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onAdd() {
    if (!form.name.trim()) return;

    const client = {
      id: crypto.randomUUID(),
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      status: form.status,
      note: form.note.trim(),
      createdAt: new Date().toISOString()
    };

    const next = addClient(client);
    setClients(next);
    setForm({ name: "", email: "", phone: "", status: "active", note: "" });
  }

  function onDelete(id) {
    const next = removeClient(id);
    setClients(next);
  }

  function onClear() {
    clearClients();
    setClients([]);
  }

  return (
    <section className="card">
      <div className="row">
        <h2 className="cardTitle">Clients</h2>
        <button className="btnGhost" type="button" onClick={onClear}>
          Clear
        </button>
      </div>

      <div className="clientForm">
        <label className="label">
          Name
          <input className="inputWide" value={form.name} onChange={(e) => update("name", e.target.value)} />
        </label>

        <label className="label">
          Email
          <input className="inputWide" value={form.email} onChange={(e) => update("email", e.target.value)} />
        </label>

        <label className="label">
          Phone
          <input className="inputWide" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
        </label>

        <label className="label">
          Status
          <select className="inputWide" value={form.status} onChange={(e) => update("status", e.target.value)}>
            <option value="active">active</option>
            <option value="pending">pending</option>
            <option value="inactive">inactive</option>
          </select>
        </label>

        <label className="label">
          Note
          <input className="inputWide" value={form.note} onChange={(e) => update("note", e.target.value)} />
        </label>

        <button className="btn" type="button" onClick={onAdd}>
          Add client
        </button>
      </div>

      {clients.length === 0 ? (
        <p className="muted">No clients yet. Add one above.</p>
      ) : (
        <div className="clientList">
          {clients.map((c) => (
            <ClientCard key={c.id} client={c} onDelete={onDelete} />
          ))}
        </div>
      )}
    </section>
  );
}
