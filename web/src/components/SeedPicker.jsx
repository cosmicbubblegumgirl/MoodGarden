import { SEEDS } from "../lib/seeds.js";

export default function SeedPicker({ selectedKey, onSelect }) {
  return (
    <section className="card">
      <h2 className="cardTitle">Pick a mood seed</h2>
      <div className="seedGrid">
        {SEEDS.map((s) => (
          <button
            key={s.key}
            className={`seed ${selectedKey === s.key ? "seedActive" : ""}`}
            onClick={() => onSelect(s.key)}
            type="button"
          >
            <span className="seedEmoji" aria-hidden="true">{s.emoji}</span>
            <div className="seedTitle">{s.title}</div>
            <div className="seedTagline">{s.tagline}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
