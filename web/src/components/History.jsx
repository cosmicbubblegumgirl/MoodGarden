export default function History({ history, onClear }) {
  return (
    <section className="card">
      <div className="row">
        <h2 className="cardTitle">Session history</h2>
        <button className="btnGhost" type="button" onClick={onClear}>
          Clear
        </button>
      </div>

      {history.length === 0 ? (
        <p className="muted">No saved sessions yet. Complete a timer to plant your first record.</p>
      ) : (
        <ul className="list">
          {history.map((h) => (
            <li key={h.id}>
              <strong>{h.seedLabel}</strong> — {h.totalMinutes} min —{" "}
              <span className="muted">{new Date(h.completedAt).toLocaleString()}</span>
              <div className="tiny">{h.note}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
