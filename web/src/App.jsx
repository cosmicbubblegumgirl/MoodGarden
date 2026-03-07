import { useCallback, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import SeedPicker from "./components/SeedPicker.jsx";
import PlanCard from "./components/PlanCard.jsx";
import Timer from "./components/Timer.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import History from "./components/History.jsx";
import HelpPanel from "./components/HelpPanel.jsx";
import { fetchPlan } from "./lib/planClient.js";
import { clearHistory, loadHistory, saveToHistory } from "./lib/storage.js";
import { SEEDS } from "./lib/seeds.js";
export default function App() {
  const [seedKey, setSeedKey] = useState(SEEDS[0].key);
  const [minutes, setMinutes] = useState(12);
  const [plan, setPlan] = useState(null);
  const [history, setHistory] = useState(() => loadHistory());
  const [status, setStatus] = useState({ kind: "idle", message: "" });
  const [timerState, setTimerState] = useState({
    running: false,
    secondsLeft: 0,
    totalSeconds: 0
  });

  const seedLabel = useMemo(() => {
    const s = SEEDS.find((x) => x.key === seedKey);
    return s ? s.title : "Seed";
  }, [seedKey]);

  const generate = useCallback(async () => {
    setStatus({ kind: "loading", message: "Growing your plan..." });
    try {
      const newPlan = await fetchPlan({ seedKey, minutes });
      setPlan(newPlan);
      setStatus({ kind: "ok", message: `Plan ready: ${newPlan.seedLabel}.` });
    } catch (e) {
      setStatus({ kind: "error", message: String(e.message ?? e) });
    }
  }, [seedKey, minutes]);

  const onComplete = useCallback(() => {
    if (!plan) return;

    const entry = {
      id: plan.id,
      seedKey: plan.seedKey,
      seedLabel: plan.seedLabel,
      totalMinutes: plan.totalMinutes,
      completedAt: new Date().toISOString(),
      note: `Vibe: ${plan.vibe}. Music hint: ${plan.bpmHint}.`
    };
    const next = saveToHistory(entry);
    setHistory(next);
    setStatus({ kind: "ok", message: `Saved a ${seedLabel} session.` });
  }, [plan, seedLabel]);

  return (
    <div className="wrap">
      <Header />

      {status.kind !== "idle" && (
        <div className={`status status-${status.kind}`}>{status.message}</div>
      )}

      <div className="layout">
        <div className="col">
          <SeedPicker selectedKey={seedKey} onSelect={setSeedKey} />
          <PlanCard
            plan={plan}
            minutes={minutes}
            setMinutes={setMinutes}
            onGenerate={generate}
          />
        </div>

        <div className="col">
          <Timer plan={plan} onComplete={onComplete} onTimerUpdate={setTimerState} />
          <MusicPlayer plan={plan} selectedSeedKey={seedKey} timerState={timerState} />
          <History
            history={history}
            onClear={() => {
              clearHistory();
              setHistory([]);
              setStatus({ kind: "ok", message: "History cleared." });
            }}
          />
          <HelpPanel />
        </div>
      </div>
    </div>
  );
}
