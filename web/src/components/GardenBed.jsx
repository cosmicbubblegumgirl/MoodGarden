import GardenPlant from "./GardenPlant.jsx";

const MOOD_EMOJI = {
  racing_thoughts: "🌿",
  overwhelm: "🪴",
  low_focus: "🌻",
  anxiety: "💜",
  burnout: "🌱",
  creative_block: "🌸",
  restless_energy: "🌵"
};

export default function GardenBed({ plan, timerState, history }) {
  const totalSec = timerState?.totalSeconds ?? 0;
  const leftSec = timerState?.secondsLeft ?? 0;
  const growth = totalSec > 0 ? Math.max(0, Math.min(1, (totalSec - leftSec) / totalSec)) : 0;
  const isBloom = totalSec > 0 && leftSec === 0;

  const hasHistory = Array.isArray(history) && history.length > 0;

  return (
    <section className="card gardenCard">
      <div className="row">
        <h2 className="cardTitle">Your Garden</h2>
        {hasHistory && (
          <span className="pill">{history.length} bloom{history.length !== 1 ? "s" : ""} planted</span>
        )}
      </div>

      <div className="gardenFocus">
        {plan ? (
          <>
            <GardenPlant
              moodKey={plan.seedKey}
              growth={growth}
              isBloom={isBloom}
              size="large"
              title={plan.seedLabel}
            />
            {isBloom && (
              <p className="gardenBloomMsg">In full bloom! Session complete.</p>
            )}
            {!isBloom && growth > 0 && (
              <p className="gardenGrowMsg">Growing... {Math.round(growth * 100)}% through your session.</p>
            )}
            {!isBloom && growth === 0 && (
              <p className="gardenSeedMsg">Your {plan.seedLabel} seed is planted. Start the timer to grow.</p>
            )}
          </>
        ) : (
          <div className="gardenEmptyState">
            <div className="gardenEmptySeed">
              <div className="seedPulse" />
            </div>
            <p className="muted tiny">Generate a plan to plant your seed</p>
          </div>
        )}
      </div>

      {hasHistory && (
        <>
          <p className="gardenHistLabel tiny">Past blooms</p>
          <div className="gardenRow">
            {history.slice(0, 10).map((h, i) => (
              <div key={h.id || i} className="gardenHistItem" title={`${h.seedLabel} · ${h.totalMinutes} min · ${new Date(h.completedAt).toLocaleDateString()}`}>
                <GardenPlant
                  moodKey={h.seedKey}
                  growth={1}
                  isBloom={false}
                  size="small"
                />
                <span className="gardenHistEmoji">{MOOD_EMOJI[h.seedKey] || "🌱"}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {!hasHistory && !plan && (
        <p className="muted tiny" style={{ marginTop: "8px" }}>Complete sessions to grow your garden collection.</p>
      )}
    </section>
  );
}
