// ── Track library ────────────────────────────────────────────────────────────
const T = {
  wallpaper:         { title: "Wallpaper",              artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Wallpaper.mp3" },
  carefree:          { title: "Carefree",               artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Carefree.mp3" },
  hiddenAgenda:      { title: "Hidden Agenda",          artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Hidden%20Agenda.mp3" },
  bossaAntigua:      { title: "Bossa Antigua",          artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Bossa%20Antigua.mp3" },
  cipher:            { title: "Cipher",                 artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Cipher.mp3" },
  airportLounge:     { title: "Airport Lounge",         artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Airport%20Lounge.mp3" },
  hyperfun:          { title: "Hyperfun",               artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Hyperfun.mp3" },
  cheerUp:           { title: "Cheery Monday",          artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Cheery%20Monday.mp3" },
  upbeatForever:     { title: "Life of Riley",          artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Life%20of%20Riley.mp3" },
  almostInF:         { title: "Almost in F",            artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Almost%20in%20F.mp3" },
  comfortableMystery:{ title: "Comfortable Mystery",    artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Comfortable%20Mystery.mp3" },
  namaste:           { title: "Namaste",                artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Namaste.mp3" },
  meditationImpromtu:{ title: "Meditation Impromptu",   artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Meditation%20Impromptu%2001.mp3" },
  slowBurn:          { title: "Slow Burn",              artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Slow%20Burn.mp3" },
  serene:            { title: "Serene",                 artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Serene.mp3" },
  gymnopedie:        { title: "Gymnopedie No 1",        artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Gymnopedie%20No%201.mp3" },
  floatingCities:    { title: "Floating Cities",        artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Floating%20Cities.mp3" },
  easyLemon:         { title: "Easy Lemon",             artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Easy%20Lemon.mp3" },
  perspectives:      { title: "Perspectives",           artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Perspectives.mp3" },
  chillDay:          { title: "Chill Day",              artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Chill%20Day.mp3" },
  peaceOfMind:       { title: "Peace of Mind",          artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Peace%20of%20Mind.mp3" },
  softie:            { title: "Softie",                 artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Softie.mp3" },
  warmthFuzzy:       { title: "Warm Fuzzy Feeling",     artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Warm%20Fuzzy%20Feeling.mp3" },
  schemingWeasel:    { title: "Scheming Weasel",        artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Scheming%20Weasel.mp3" },
  martyGotsAPlan:    { title: "Marty Gots a Plan",      artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Marty%20Gots%20a%20Plan.mp3" },
  monkeysSpinning:   { title: "Monkeys Spinning Monkeys",artist:"Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Monkeys%20Spinning%20Monkeys.mp3" },
  quirkyDog:         { title: "Quirky Dog",             artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Quirky%20Dog.mp3" },
  springInMyStep:    { title: "Spring In My Step",      artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Spring%20In%20My%20Step.mp3" },
  fluffingADuck:     { title: "Fluffing a Duck",        artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Fluffing%20a%20Duck.mp3" },
  sneakySnitch:      { title: "Sneaky Snitch",          artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Sneaky%20Snitch.mp3" },
  upbeatNow:         { title: "Upbeat Now",             artist: "Kevin MacLeod", url: "https://incompetech.com/music/royalty-free/mp3-royaltyfree/Upbeat%20Now.mp3" },
};

// ── 10 curated playlists per mood ────────────────────────────────────────────
export const CURATED_PLAYLISTS = {
  racing_thoughts: [
    { id:"rt1",  name:"Still Water",      desc:"Soft piano for a quieter mind",        tracks:[T.gymnopedie, T.namaste, T.wallpaper] },
    { id:"rt2",  name:"Slow Breath",      desc:"Rhythms that pace your breathing",      tracks:[T.meditationImpromtu, T.slowBurn, T.almostInF] },
    { id:"rt3",  name:"Evening Tide",     desc:"Gentle drift toward stillness",         tracks:[T.serene, T.floatingCities, T.carefree] },
    { id:"rt4",  name:"Quiet Forest",     desc:"Sheltered thoughts, soft sounds",       tracks:[T.namaste, T.comfortableMystery, T.wallpaper] },
    { id:"rt5",  name:"Paper Lanterns",   desc:"Floating, luminous, light",             tracks:[T.gymnopedie, T.serene, T.almostInF] },
    { id:"rt6",  name:"Moonrise",         desc:"A slow, silver ascent",                 tracks:[T.floatingCities, T.bossaAntigua, T.wallpaper] },
    { id:"rt7",  name:"Candlelight",      desc:"Warm, steady, unwavering",              tracks:[T.comfortableMystery, T.carefree, T.namaste] },
    { id:"rt8",  name:"Silk Threads",     desc:"Smooth textures, unhurried time",       tracks:[T.slowBurn, T.serene, T.gymnopedie] },
    { id:"rt9",  name:"Haze & Honey",     desc:"Soft amber light through the fog",      tracks:[T.almostInF, T.floatingCities, T.carefree] },
    { id:"rt10", name:"Drift Away",       desc:"Let the current carry you gently",      tracks:[T.meditationImpromtu, T.namaste, T.comfortableMystery] },
  ],
  overwhelm: [
    { id:"ow1",  name:"One Step",         desc:"Just the very next thing",              tracks:[T.easyLemon, T.bossaAntigua, T.wallpaper] },
    { id:"ow2",  name:"Anchor",           desc:"Stable ground under your feet",         tracks:[T.perspectives, T.peaceOfMind, T.chillDay] },
    { id:"ow3",  name:"Clear Path",       desc:"One lane, ahead only",                  tracks:[T.softie, T.airportLounge, T.carefree] },
    { id:"ow4",  name:"Safe Harbour",     desc:"No storm can touch you here",           tracks:[T.warmthFuzzy, T.bossaAntigua, T.easyLemon] },
    { id:"ow5",  name:"Steady Ground",    desc:"Firm, unhurried, assured",              tracks:[T.hiddenAgenda, T.chillDay, T.perspectives] },
    { id:"ow6",  name:"Small Wins",       desc:"Celebrate every pebble moved",          tracks:[T.peaceOfMind, T.softie, T.wallpaper] },
    { id:"ow7",  name:"Return",           desc:"Come back to yourself, gently",         tracks:[T.airportLounge, T.bossaAntigua, T.chillDay] },
    { id:"ow8",  name:"Breathe Easy",     desc:"Unhurried air, unhurried mind",         tracks:[T.warmthFuzzy, T.easyLemon, T.perspectives] },
    { id:"ow9",  name:"Middle Ground",    desc:"Neither rushing nor hiding",            tracks:[T.hiddenAgenda, T.peaceOfMind, T.softie] },
    { id:"ow10", name:"Gentle Wave",      desc:"Let it roll through and recede",        tracks:[T.carefree, T.airportLounge, T.bossaAntigua] },
  ],
  low_focus: [
    { id:"lf1",  name:"Launch Pad",       desc:"Three, two, one — go",                  tracks:[T.cheerUp, T.springInMyStep, T.hyperfun] },
    { id:"lf2",  name:"Flow State",       desc:"Locked in, lights on",                  tracks:[T.upbeatForever, T.cipher, T.martyGotsAPlan] },
    { id:"lf3",  name:"Go Time",          desc:"Eyes open, brain on",                   tracks:[T.schemingWeasel, T.quirkyDog, T.fluffingADuck] },
    { id:"lf4",  name:"Momentum",         desc:"Keep the ball rolling",                 tracks:[T.monkeysSpinning, T.cheerUp, T.springInMyStep] },
    { id:"lf5",  name:"Energy Burst",     desc:"Spark, ignite, accelerate",             tracks:[T.upbeatNow, T.sneakySnitch, T.upbeatForever] },
    { id:"lf6",  name:"Kick Start",       desc:"Your morning espresso, in music",       tracks:[T.hyperfun, T.cipher, T.quirkyDog] },
    { id:"lf7",  name:"Wild Ride",        desc:"Buckle up, it's happening",             tracks:[T.martyGotsAPlan, T.fluffingADuck, T.monkeysSpinning] },
    { id:"lf8",  name:"Power Up",         desc:"XP loading, boss fight incoming",       tracks:[T.sneakySnitch, T.schemingWeasel, T.cheerUp] },
    { id:"lf9",  name:"Cruise Mode",      desc:"Fast but effortless",                   tracks:[T.upbeatForever, T.springInMyStep, T.upbeatNow] },
    { id:"lf10", name:"Full Send",        desc:"No half-measures today",                tracks:[T.quirkyDog, T.monkeysSpinning, T.cipher] },
  ],
  anxiety: [
    { id:"ax1",  name:"Earth Hold",       desc:"Feet on the ground, breath in the air", tracks:[T.namaste, T.gymnopedie, T.meditationImpromtu] },
    { id:"ax2",  name:"Slow River",       desc:"Move with the current, not against it", tracks:[T.almostInF, T.slowBurn, T.wallpaper] },
    { id:"ax3",  name:"Safe Place",       desc:"A room with no alarms",                 tracks:[T.floatingCities, T.serene, T.namaste] },
    { id:"ax4",  name:"Grounded",         desc:"You are here. You are okay.",           tracks:[T.comfortableMystery, T.gymnopedie, T.carefree] },
    { id:"ax5",  name:"Let It Pass",      desc:"Clouds move. This will too.",           tracks:[T.meditationImpromtu, T.wallpaper, T.slowBurn] },
    { id:"ax6",  name:"Deep Roots",       desc:"Anchored, not frozen",                  tracks:[T.namaste, T.almostInF, T.serene] },
    { id:"ax7",  name:"Soft Landing",     desc:"Descend slowly, land gently",           tracks:[T.gymnopedie, T.floatingCities, T.comfortableMystery] },
    { id:"ax8",  name:"Still Mind",       desc:"Quiet the static, find the signal",     tracks:[T.slowBurn, T.namaste, T.wallpaper] },
    { id:"ax9",  name:"Breathe",          desc:"In. Hold. Out. You've got this.",       tracks:[T.serene, T.almostInF, T.meditationImpromtu] },
    { id:"ax10", name:"Anchor Point",     desc:"Return here whenever you need",         tracks:[T.floatingCities, T.carefree, T.comfortableMystery] },
  ],
  burnout: [
    { id:"bo1",  name:"Gentle Rise",      desc:"No alarm needed — just light",          tracks:[T.serene, T.gymnopedie, T.softie] },
    { id:"bo2",  name:"Recovery Mode",    desc:"Restore before you resume",             tracks:[T.namaste, T.meditationImpromtu, T.wallpaper] },
    { id:"bo3",  name:"Soft Rebuild",     desc:"Brick by quiet brick",                  tracks:[T.peaceOfMind, T.almostInF, T.carefree] },
    { id:"bo4",  name:"Rest & Restore",   desc:"Permission granted to just be",         tracks:[T.slowBurn, T.floatingCities, T.serene] },
    { id:"bo5",  name:"Tender Care",      desc:"What would you do for someone you love?",tracks:[T.gymnopedie, T.namaste, T.softie] },
    { id:"bo6",  name:"Small Step",       desc:"One manageable thing. Just one.",       tracks:[T.meditationImpromtu, T.peaceOfMind, T.wallpaper] },
    { id:"bo7",  name:"Return Home",      desc:"Come back to what matters",             tracks:[T.serene, T.carefree, T.namaste] },
    { id:"bo8",  name:"Easy Does It",     desc:"Slow is smooth. Smooth is fast.",       tracks:[T.almostInF, T.slowBurn, T.gymnopedie] },
    { id:"bo9",  name:"Healing Hour",     desc:"Time set aside for you",                tracks:[T.floatingCities, T.softie, T.meditationImpromtu] },
    { id:"bo10", name:"Nourish",          desc:"Feed what's been running empty",        tracks:[T.peaceOfMind, T.serene, T.wallpaper] },
  ],
  creative_block: [
    { id:"cb1",  name:"Open Door",        desc:"Something new is just beyond here",     tracks:[T.bossaAntigua, T.easyLemon, T.cipher] },
    { id:"cb2",  name:"Wander",           desc:"No destination, just curiosity",        tracks:[T.perspectives, T.airportLounge, T.chillDay] },
    { id:"cb3",  name:"Curious Mind",     desc:"What if? Why not? Let's try.",          tracks:[T.hiddenAgenda, T.warmthFuzzy, T.bossaAntigua] },
    { id:"cb4",  name:"New Ideas",        desc:"Fresh angles, surprising corners",       tracks:[T.cipher, T.easyLemon, T.perspectives] },
    { id:"cb5",  name:"Dream State",      desc:"Logic off. Imagination on.",            tracks:[T.airportLounge, T.carefree, T.wallpaper] },
    { id:"cb6",  name:"Play Mode",        desc:"Make something bad on purpose",         tracks:[T.chillDay, T.bossaAntigua, T.easyLemon] },
    { id:"cb7",  name:"Loose Ends",       desc:"Pull a thread and see what unravels",   tracks:[T.warmthFuzzy, T.hiddenAgenda, T.cipher] },
    { id:"cb8",  name:"Flow",             desc:"When it comes, don't stop it",          tracks:[T.perspectives, T.airportLounge, T.warmthFuzzy] },
    { id:"cb9",  name:"Discovery",        desc:"You already know what to make",         tracks:[T.bossaAntigua, T.chillDay, T.hiddenAgenda] },
    { id:"cb10", name:"Creative Hour",    desc:"Dedicated time: no excuses, no rules",  tracks:[T.easyLemon, T.cipher, T.perspectives] },
  ],
  restless_energy: [
    { id:"re1",  name:"Full Send",        desc:"All the way in, all the way now",       tracks:[T.schemingWeasel, T.martyGotsAPlan, T.hyperfun] },
    { id:"re2",  name:"Power Hour",       desc:"60 minutes of maximum output",          tracks:[T.quirkyDog, T.sneakySnitch, T.upbeatNow] },
    { id:"re3",  name:"Sprint Mode",      desc:"Short. Fast. Effective.",               tracks:[T.monkeysSpinning, T.springInMyStep, T.cheerUp] },
    { id:"re4",  name:"Channel It",       desc:"Aim this energy at something worthy",   tracks:[T.upbeatForever, T.fluffingADuck, T.cipher] },
    { id:"re5",  name:"Release Valve",    desc:"Safe outlet for the pressure",          tracks:[T.schemingWeasel, T.quirkyDog, T.martyGotsAPlan] },
    { id:"re6",  name:"Storm Chaser",     desc:"Ride the wave instead of fighting it",  tracks:[T.upbeatNow, T.monkeysSpinning, T.sneakySnitch] },
    { id:"re7",  name:"Burn It Out",      desc:"Use it up so it can't use you",         tracks:[T.hyperfun, T.springInMyStep, T.upbeatForever] },
    { id:"re8",  name:"Max Output",       desc:"Your personal best, right now",         tracks:[T.martyGotsAPlan, T.fluffingADuck, T.schemingWeasel] },
    { id:"re9",  name:"Into the Zone",    desc:"Entry point to deep concentration",     tracks:[T.cipher, T.cheerUp, T.monkeysSpinning] },
    { id:"re10", name:"Push Through",     desc:"Momentum > motivation",                 tracks:[T.quirkyDog, T.upbeatNow, T.sneakySnitch] },
  ],
};

// ── Phase resolver (kept for compatibility) ───────────────────────────────────
function normalizePhaseName(name) {
  return String(name ?? "").toLowerCase().replace(/[^a-z]/g, "");
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
      return { phaseKey: normalizePhaseName(phase.name), phaseName: phase.name, elapsedSeconds };
    }
    cursor += phaseSeconds;
  }
  const last = plan.phases[plan.phases.length - 1];
  return { phaseKey: normalizePhaseName(last.name), phaseName: last.name, elapsedSeconds };
}

export function getPlaylistsForMood(seedKey) {
  return CURATED_PLAYLISTS[seedKey] ?? CURATED_PLAYLISTS.low_focus;
}

export function getDefaultPlaylistIndex(plan, timerState) {
  if (!plan) return 0;
  const phase = resolvePhase(plan, timerState);
  if (phase.phaseKey.startsWith("warm")) return 0;
  if (phase.phaseKey.startsWith("cool")) return 8;
  return 3;
}
