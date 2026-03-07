import { useEffect, useMemo, useRef, useState } from "react";
import { getPlaylistForMoodPhase, resolvePhase } from "../lib/musicPlaylists.js";

export default function MusicPlayer({ plan, selectedSeedKey, timerState }) {
  const audioRef = useRef(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playError, setPlayError] = useState("");
  const [userArmedAutoplay, setUserArmedAutoplay] = useState(false);

  const moodKey = plan?.seedKey ?? selectedSeedKey;

  const phaseInfo = useMemo(() => resolvePhase(plan, timerState), [plan, timerState]);
  const playlist = useMemo(
    () => getPlaylistForMoodPhase(moodKey, phaseInfo.phaseKey),
    [moodKey, phaseInfo.phaseKey]
  );

  const activeTrack = playlist[trackIndex % playlist.length];

  useEffect(() => {
    setTrackIndex(0);
  }, [moodKey, phaseInfo.phaseKey]);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    audioEl.load();

    if (timerState?.running && userArmedAutoplay) {
      audioEl.play().catch(() => {
        setPlayError("Tap play once to allow automatic switching on your browser.");
      });
    }
  }, [activeTrack?.url, timerState?.running, userArmedAutoplay]);

  const phaseLabel = phaseInfo.phaseName ?? "Warmup";
  const isRunning = Boolean(timerState?.running);

  if (!plan) {
    return (
      <section className="card musicCard musicCard-empty">
        <h2 className="cardTitle">Mood DJ</h2>
        <p className="muted">Generate a plan to unlock your whimsical soundtrack garden.</p>
      </section>
    );
  }

  return (
    <section className={`card musicCard ${isRunning ? "musicCard-live" : "musicCard-idle"}`}>
      <div className="musicGlow" aria-hidden="true" />

      <div className="musicVisual" aria-hidden="true">
        <div className="musicPlanet">
          <div className="musicPlanetCore" />
        </div>
        <div className="musicBars">
          {[0, 1, 2, 3, 4, 5].map((n) => (
            <span key={n} className="musicBar" />
          ))}
        </div>
      </div>

      <div className="row">
        <h2 className="cardTitle">Mood DJ</h2>
        <span className="pill">Auto phase: {phaseLabel}</span>
      </div>

      <p className="musicTagline">
        Tiny cloud-radio for your current mood. Playlists switch as your timer moves through phases.
      </p>

      <div className="musicMeta">
        <strong>{activeTrack.title}</strong>
        <span className="muted">{activeTrack.artist} - {activeTrack.license}</span>
      </div>

      <audio
        ref={audioRef}
        controls
        preload="none"
        className="musicAudio"
        src={activeTrack.url}
        onPlay={() => {
          setUserArmedAutoplay(true);
          setPlayError("");
        }}
        onEnded={() => {
          setTrackIndex((prev) => (prev + 1) % playlist.length);
        }}
      />

      <div className="row">
        <button
          type="button"
          className="btnGhost"
          onClick={() => setTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length)}
        >
          Previous bloom
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setTrackIndex((prev) => (prev + 1) % playlist.length)}
        >
          Next bloom
        </button>
      </div>

      {playError && <p className="tiny">{playError}</p>}

      <p className="tiny">
        Source: Incompetech royalty-free tracks (CC BY 4.0). Keep artist credit when redistributing.
      </p>
    </section>
  );
}
