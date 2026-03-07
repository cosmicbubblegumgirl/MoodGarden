const TRACKS = {
  wallpaper: {
    title: "Wallpaper",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Wallpaper.mp3",
    license: "CC BY 4.0"
  },
  carefree: {
    title: "Carefree",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Carefree.mp3",
    license: "CC BY 4.0"
  },
  hiddenAgenda: {
    title: "Hidden Agenda",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Hidden%20Agenda.mp3",
    license: "CC BY 4.0"
  },
  bossaAntigua: {
    title: "Bossa Antigua",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Bossa%20Antigua.mp3",
    license: "CC BY 4.0"
  },
  cipher: {
    title: "Cipher",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Cipher.mp3",
    license: "CC BY 4.0"
  },
  airportLounge: {
    title: "Airport Lounge",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Airport%20Lounge.mp3",
    license: "CC BY 4.0"
  },
  hyperfun: {
    title: "Hyperfun",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Hyperfun.mp3",
    license: "CC BY 4.0"
  },
  cheerUp: {
    title: "Cheery Monday",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Cheery%20Monday.mp3",
    license: "CC BY 4.0"
  },
  upbeatForever: {
    title: "Life of Riley",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Life%20of%20Riley.mp3",
    license: "CC BY 4.0"
  }
};

const FALLBACK = {
  warmup: [TRACKS.wallpaper, TRACKS.bossaAntigua],
  focus: [TRACKS.hiddenAgenda, TRACKS.airportLounge],
  cooldown: [TRACKS.carefree, TRACKS.wallpaper]
};

export const MOOD_PLAYLISTS = {
  racing_thoughts: {
    warmup: [TRACKS.wallpaper, TRACKS.bossaAntigua],
    focus: [TRACKS.hiddenAgenda, TRACKS.airportLounge],
    cooldown: [TRACKS.carefree, TRACKS.wallpaper]
  },
  overwhelm: {
    warmup: [TRACKS.bossaAntigua, TRACKS.wallpaper],
    focus: [TRACKS.airportLounge, TRACKS.hiddenAgenda],
    cooldown: [TRACKS.carefree, TRACKS.bossaAntigua]
  },
  low_focus: {
    warmup: [TRACKS.cheerUp, TRACKS.hyperfun],
    focus: [TRACKS.upbeatForever, TRACKS.cipher],
    cooldown: [TRACKS.carefree, TRACKS.wallpaper]
  }
};

function normalizePhaseName(name) {
  return String(name ?? "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}

export function resolvePhase(plan, timerState) {
  if (!plan || !Array.isArray(plan.phases) || plan.phases.length === 0) {
    return { phaseKey: "warmup", phaseName: "Warmup", elapsedSeconds: 0 };
  }

  const totalSeconds = timerState?.totalSeconds ?? plan.totalMinutes * 60;
  const secondsLeft = Math.max(0, Math.min(totalSeconds, timerState?.secondsLeft ?? totalSeconds));
  const elapsedSeconds = Math.max(0, totalSeconds - secondsLeft);

  let cursor = 0;
  for (const phase of plan.phases) {
    const phaseSeconds = Math.max(0, Number(phase.minutes) * 60);
    if (elapsedSeconds < cursor + phaseSeconds) {
      return {
        phaseKey: normalizePhaseName(phase.name),
        phaseName: phase.name,
        elapsedSeconds
      };
    }
    cursor += phaseSeconds;
  }

  const last = plan.phases[plan.phases.length - 1];
  return {
    phaseKey: normalizePhaseName(last.name),
    phaseName: last.name,
    elapsedSeconds
  };
}

export function getPlaylistForMoodPhase(seedKey, phaseKey) {
  const moodSet = MOOD_PLAYLISTS[seedKey] ?? FALLBACK;
  return moodSet[phaseKey] ?? FALLBACK[phaseKey] ?? FALLBACK.focus;
}
