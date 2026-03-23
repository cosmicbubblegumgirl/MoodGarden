import { useCallback, useEffect, useRef, useState } from "react";
import { getPlaylistsForMood, getDefaultPlaylistIndex, resolvePhase } from "../lib/musicPlaylists.js";

function fmt(sec) {
  if (!isFinite(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function VisualizerBars({ isPlaying, count = 7 }) {
  return (
    <div className="vizBars" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={`vizBar ${isPlaying ? "vizBar-live" : ""}`}
          style={{ animationDelay: `${i * 0.13}s` }}
        />
      ))}
    </div>
  );
}

export default function MusicPlayer({ plan, selectedSeedKey, timerState }) {
  const audioRef = useRef(null);
  const moodKey = plan?.seedKey ?? selectedSeedKey;

  const playlists = getPlaylistsForMood(moodKey);
  const [plIdx, setPlIdx] = useState(0);
  const [trackIdx, setTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [userArmed, setUserArmed] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);

  const activePlaylist = playlists[plIdx] ?? playlists[0];
  const tracks = activePlaylist?.tracks ?? [];
  const activeTrack = tracks[trackIdx % tracks.length];

  // Auto-switch playlist based on timer phase
  useEffect(() => {
    const idx = getDefaultPlaylistIndex(plan, timerState);
    setPlIdx(idx);
    setTrackIdx(0);
  }, [plan?.seedKey, timerState?.running]);

  // Reset track index when playlist changes
  useEffect(() => {
    setTrackIdx(0);
  }, [plIdx]);

  // Load new track
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.load();
    setCurrentTime(0);
    setDuration(0);
    if (isPlaying) {
      audio.play().catch(() => setErrMsg("Tap play to enable audio in your browser."));
    }
  }, [activeTrack?.url]);

  // Sync volume
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  // Auto-play when timer starts
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !userArmed) return;
    if (timerState?.running) {
      audio.play().catch(() => {});
    }
  }, [timerState?.running, userArmed]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setUserArmed(true);
    if (audio.paused) {
      audio.play().catch(e => setErrMsg(e.message));
    } else {
      audio.pause();
    }
    setErrMsg("");
  }, []);

  const prevTrack = useCallback(() => {
    setTrackIdx(i => (i - 1 + tracks.length) % tracks.length);
  }, [tracks.length]);

  const nextTrack = useCallback(() => {
    setTrackIdx(i => (i + 1) % tracks.length);
  }, [tracks.length]);

  const seek = useCallback((e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audio.currentTime = ratio * duration;
  }, [duration]);

  const selectPlaylist = useCallback((idx) => {
    setPlIdx(idx);
  }, []);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (!plan) {
    return (
      <section className="card playerCard playerCard-empty">
        <h2 className="cardTitle">Mood DJ</h2>
        <p className="muted">Generate a plan to unlock your curated playlist garden.</p>
      </section>
    );
  }

  return (
    <section className="card playerCard">
      <audio
        ref={audioRef}
        preload="none"
        src={activeTrack?.url}
        onPlay={() => { setIsPlaying(true); setErrMsg(""); }}
        onPause={() => setIsPlaying(false)}
        onEnded={nextTrack}
        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime ?? 0)}
        onDurationChange={() => setDuration(audioRef.current?.duration ?? 0)}
        onError={() => setErrMsg("Track unavailable, skipping...")}
      />

      <div className="playerLayout">
        {/* ── Sidebar: playlist list ── */}
        <div className={`playerSidebar ${showSidebar ? "playerSidebar-open" : "playerSidebar-closed"}`}>
          <div className="sidebarHeader">
            <span>Playlists</span>
            <span className="sidebarMood">{playlists.length} vibes</span>
          </div>
          <div className="sidebarList">
            {playlists.map((pl, i) => (
              <button
                key={pl.id}
                type="button"
                className={`plItem ${i === plIdx ? "plItem-active" : ""}`}
                onClick={() => selectPlaylist(i)}
              >
                <span className="plNum">{i + 1}</span>
                <div className="plMeta">
                  <span className="plName">{pl.name}</span>
                  <span className="plCount">{pl.tracks.length} tracks</span>
                </div>
                {i === plIdx && <span className="plActive-dot" />}
              </button>
            ))}
          </div>
        </div>

        {/* ── Main: now playing ── */}
        <div className="playerMain">
          <div className="playerTopRow">
            <h2 className="cardTitle" style={{ margin: 0 }}>Mood DJ</h2>
            <button
              type="button"
              className="sidebarToggle"
              onClick={() => setShowSidebar(v => !v)}
              title={showSidebar ? "Hide playlists" : "Show playlists"}
            >
              {showSidebar ? "‹ Hide" : "Playlists ›"}
            </button>
          </div>

          <div className="nowPlayingBlock">
            <VisualizerBars isPlaying={isPlaying} />

            <div className="npInfo">
              <div className="npPlaylist">{activePlaylist?.name}</div>
              <div className="npTrack">{activeTrack?.title}</div>
              <div className="npArtist">{activeTrack?.artist} · CC BY 4.0</div>
              <div className="npPosition">{trackIdx + 1} of {tracks.length}</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="progressWrap" onClick={seek} role="slider" aria-label="Track progress">
            <div className="progressTrack">
              <div className="progressFill" style={{ width: `${progress}%` }} />
              <div className="progressThumb" style={{ left: `${progress}%` }} />
            </div>
            <div className="progressTimes">
              <span>{fmt(currentTime)}</span>
              <span>{fmt(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="playerControls">
            <button type="button" className="ctrlBtn" onClick={prevTrack} title="Previous">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"/>
              </svg>
            </button>

            <button type="button" className="ctrlBtn ctrlPlay" onClick={togglePlay} title={isPlaying ? "Pause" : "Play"}>
              {isPlaying
                ? <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M6 19h4V5H6zm8-14v14h4V5z"/></svg>
                : <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              }
            </button>

            <button type="button" className="ctrlBtn" onClick={nextTrack} title="Next">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M6 18l8.5-6L6 6v12zm2.5-6 8.5 6V6z"/>
              </svg>
            </button>

            <div className="volumeWrap">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ opacity: 0.6 }}>
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z"/>
              </svg>
              <input
                type="range" min="0" max="1" step="0.05"
                value={volume}
                onChange={e => setVolume(Number(e.target.value))}
                className="volumeSlider"
                aria-label="Volume"
              />
            </div>
          </div>

          {errMsg && <p className="npError">{errMsg}</p>}

          <div className="playerDesc">{activePlaylist?.desc}</div>

          <p className="tiny" style={{ marginTop: "6px" }}>
            All tracks: Kevin MacLeod · incompetech.com · CC BY 4.0
          </p>
        </div>
      </div>
    </section>
  );
}
