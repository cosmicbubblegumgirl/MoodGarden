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
  },

  // --- Calm / slow (Racing Thoughts palette) ---
  almostInF: {
    title: "Almost in F",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Almost%20in%20F.mp3",
    license: "CC BY 4.0"
  },
  comfortableMystery: {
    title: "Comfortable Mystery",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Comfortable%20Mystery.mp3",
    license: "CC BY 4.0"
  },
  namaste: {
    title: "Namaste",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Namaste.mp3",
    license: "CC BY 4.0"
  },
  meditationImpromtu: {
    title: "Meditation Impromptu 01",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Meditation%20Impromptu%2001.mp3",
    license: "CC BY 4.0"
  },
  slowBurn: {
    title: "Slow Burn",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Slow%20Burn.mp3",
    license: "CC BY 4.0"
  },
  serene: {
    title: "Serene",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Serene.mp3",
    license: "CC BY 4.0"
  },
  gymnopedie: {
    title: "Gymnopedie No 1",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Gymnopedie%20No%201.mp3",
    license: "CC BY 4.0"
  },
  floatingCities: {
    title: "Floating Cities",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Floating%20Cities.mp3",
    license: "CC BY 4.0"
  },

  // --- Gentle / mid-tempo (Overwhelm palette) ---
  easyLemon: {
    title: "Easy Lemon",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Easy%20Lemon.mp3",
    license: "CC BY 4.0"
  },
  perspectives: {
    title: "Perspectives",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Perspectives.mp3",
    license: "CC BY 4.0"
  },
  chillDay: {
    title: "Chill Day",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Chill%20Day.mp3",
    license: "CC BY 4.0"
  },
  calmDown: {
    title: "Calm Down",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Calm%20Down.mp3",
    license: "CC BY 4.0"
  },
  peaceOfMind: {
    title: "Peace of Mind",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Peace%20of%20Mind.mp3",
    license: "CC BY 4.0"
  },
  softie: {
    title: "Softie",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Softie.mp3",
    license: "CC BY 4.0"
  },
  warmthFuzzy: {
    title: "Warm Fuzzy Feeling",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Warm%20Fuzzy%20Feeling.mp3",
    license: "CC BY 4.0"
  },

  // --- Bright / upbeat (Low Focus palette) ---
  schemingWeasel: {
    title: "Scheming Weasel",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Scheming%20Weasel.mp3",
    license: "CC BY 4.0"
  },
  martyGotsAPlan: {
    title: "Marty Gots a Plan",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Marty%20Gots%20a%20Plan.mp3",
    license: "CC BY 4.0"
  },
  monkeysSpinning: {
    title: "Monkeys Spinning Monkeys",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Monkeys%20Spinning%20Monkeys.mp3",
    license: "CC BY 4.0"
  },
  quirkyDog: {
    title: "Quirky Dog",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Quirky%20Dog.mp3",
    license: "CC BY 4.0"
  },
  springInMyStep: {
    title: "Spring In My Step",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Spring%20In%20My%20Step.mp3",
    license: "CC BY 4.0"
  },
  fluffingADuck: {
    title: "Fluffing a Duck",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Fluffing%20a%20Duck.mp3",
    license: "CC BY 4.0"
  },
  sneakySnitch: {
    title: "Sneaky Snitch",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Sneaky%20Snitch.mp3",
    license: "CC BY 4.0"
  },
  upbeatNow: {
    title: "Upbeat Now",
    artist: "Kevin MacLeod",
    url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Upbeat%20Now.mp3",
    license: "CC BY 4.0"
  }
};

const FALLBACK = {
  warmup: [TRACKS.wallpaper, TRACKS.bossaAntigua, TRACKS.almostInF],
  focus: [TRACKS.hiddenAgenda, TRACKS.airportLounge, TRACKS.perspectives],
  cooldown: [TRACKS.carefree, TRACKS.wallpaper, TRACKS.gymnopedie]
};

export const MOOD_PLAYLISTS = {
  racing_thoughts: {
    warmup: [
      TRACKS.almostInF,
      TRACKS.gymnopedie,
      TRACKS.wallpaper,
      TRACKS.namaste
    ],
    focus: [
      TRACKS.hiddenAgenda,
      TRACKS.airportLounge,
      TRACKS.comfortableMystery,
      TRACKS.slowBurn,
      TRACKS.meditationImpromtu,
      TRACKS.floatingCities
    ],
    cooldown: [
      TRACKS.carefree,
      TRACKS.serene,
      TRACKS.bossaAntigua,
      TRACKS.wallpaper
    ]
  },
  overwhelm: {
    warmup: [
      TRACKS.bossaAntigua,
      TRACKS.easyLemon,
      TRACKS.softie,
      TRACKS.wallpaper
    ],
    focus: [
      TRACKS.airportLounge,
      TRACKS.perspectives,
      TRACKS.chillDay,
      TRACKS.peaceOfMind,
      TRACKS.warmthFuzzy,
      TRACKS.hiddenAgenda
    ],
    cooldown: [
      TRACKS.carefree,
      TRACKS.namaste,
      TRACKS.gymnopedie,
      TRACKS.bossaAntigua
    ]
  },
  low_focus: {
    warmup: [
      TRACKS.cheerUp,
      TRACKS.springInMyStep,
      TRACKS.hyperfun,
      TRACKS.fluffingADuck
    ],
    focus: [
      TRACKS.upbeatForever,
      TRACKS.cipher,
      TRACKS.schemingWeasel,
      TRACKS.martyGotsAPlan,
      TRACKS.monkeysSpinning,
      TRACKS.quirkyDog,
      TRACKS.sneakySnitch,
      TRACKS.upbeatNow
    ],
    cooldown: [
      TRACKS.carefree,
      TRACKS.easyLemon,
      TRACKS.wallpaper,
      TRACKS.serene
    ]
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
