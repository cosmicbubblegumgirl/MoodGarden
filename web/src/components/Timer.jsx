import { useEffect, useMemo, useRef, useState } from "react";

function format(seconds) {
  const s = Math.max(0, seconds);
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${mm}:${ss}`;
}

export default function Timer({ plan, onComplete, onTimerUpdate }) {
  const totalSeconds = useMemo(() => (plan ? plan.totalMinutes * 60 : 0), [plan]);
  const [running, setRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const tickRef = useRef(null);

  useEffect(() => {
    setRunning(false);
    setSecondsLeft(totalSeconds);
  }, [totalSeconds]);

  useEffect(() => {
    onTimerUpdate?.({ running, secondsLeft, totalSeconds });
  }, [running, secondsLeft, totalSeconds, onTimerUpdate]);

  useEffect(() => {
    if (!running) return;

    tickRef.current = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(tickRef.current);
  }, [running]);

  useEffect(() => {
    if (!running) return;
    if (secondsLeft <= 0) {
      setRunning(false);
      setSecondsLeft(0);
      onComplete?.();
    }
  }, [secondsLeft, running, onComplete]);

  if (!plan) {
    return (
      <section className="card">
        <h2 className="cardTitle">Timer</h2>
        <p className="muted">Generate a plan to unlock the timer.</p>
      </section>
    );
  }

  return (
    <section className="card">
      <div className="row">
        <h2 className="cardTitle">Timer</h2>
        <div className="row">
          <button className="btn" type="button" onClick={() => setRunning((r) => !r)}>
            {running ? "Pause" : "Start"}
          </button>
          <button
            className="btnGhost"
            type="button"
            onClick={() => {
              setRunning(false);
              setSecondsLeft(totalSeconds);
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="timerFace">{format(secondsLeft)}</div>
      <p className="muted">
        If you drift, don’t fight it—just return on the next beat like a friendly little boomerang.
      </p>
    </section>
  );
}
