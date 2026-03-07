export default function ClientCard({ client, onDelete }) {
  const initials = (client.name || "Client")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  return (
    <div className="clientItem">
      <div className="row" style={{ alignItems: "center" }}>
        <div className="clientAvatar" aria-hidden="true">{initials}</div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="row" style={{ justifyContent: "space-between" }}>
            <strong className="clientName" title={client.name}>{client.name}</strong>
            <span className="pill">{client.status ?? "active"}</span>
          </div>

          <div className="tiny">
            <span className="muted">{client.email || "no email"}</span>
            {client.phone ? <span className="muted"> • {client.phone}</span> : null}
          </div>

          {client.note ? <div className="tiny muted">{client.note}</div> : null}
        </div>

        <button className="btnGhost" type="button" onClick={() => onDelete(client.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
