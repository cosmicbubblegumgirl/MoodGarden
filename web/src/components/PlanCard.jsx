export default function PlanCard({ plan, minutes, setMinutes, onGenerate }) {
  return (
    <section className="card">
      <div className="row">
        <h2 className="cardTitle">Your session plan</h2>
        <div className="row">
          <label className="label">
            Minutes
            <input
              className="input"
              type="number"
              min={3}
              max={60}
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
          </label>
          <button className="btn" onClick={onGenerate} type="button">
            Generate plan
          </button>
        </div>
      </div>

      {!plan ? (
        <p className="muted">
          Choose a seed, then generate a plan. Your garden will suggest a vibe, a BPM range,
          and a tiny, doable routine.
        </p>
      ) : (
        <>
          <div className="pillRow">
            <span className="pill">Seed: {plan.seedLabel}</span>
            <span className="pill">Vibe: {plan.vibe}</span>
            <span className="pill">Music hint: {plan.bpmHint}</span>
            <span className="pill">Total: {plan.totalMinutes} min</span>
          </div>

          <h3 className="h3">Phases</h3>
          <ul className="list">
            {plan.phases.map((p) => (
              <li key={p.name}>
                <strong>{p.name}</strong> — {p.minutes} min. <span className="muted">{p.prompt}</span>
              </li>
            ))}
          </ul>

          <h3 className="h3">Steps</h3>
          <ol className="list">
            {plan.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>

          <p className="disclaimer">{plan.disclaimer}</p>
        </>
      )}
    </section>
  );
}
