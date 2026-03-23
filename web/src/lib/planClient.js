const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

const LOCAL_SEEDS = {
  racing_thoughts: {
    label: "Racing Thoughts", vibe: "slow & steady", bpmHint: "60-80 BPM",
    steps: ["Pick one calm track (instrumental if possible).", "Breathe in for 4 beats, out for 6 beats.", "Write down the loudest thought in one sentence, then set it aside.", "Do one tiny task for 5 minutes-just one.", "End with a soft landing track."]
  },
  overwhelm: {
    label: "Overwhelm", vibe: "gentle structure", bpmHint: "70-95 BPM",
    steps: ["Choose a familiar playlist (avoid surprises).", "Do a 60-second body scan (shoulders, jaw, hands).", "Pick the smallest next action; name it out loud.", "Work in a short sprint, then pause and stretch.", "Finish by noting one win (even if it is tiny)."]
  },
  low_focus: {
    label: "Low Focus", vibe: "bright & bouncy", bpmHint: "90-120 BPM",
    steps: ["Choose upbeat music with minimal lyrics (or a language you do not speak).", "Set a 10-15 minute timer and begin immediately.", "Use if distracted, return on the next chorus or beat drop.", "When time ends, stop-even mid-task-to build trust with the timer.", "Do a quick reset: water and deep breath."]
  },
  anxiety: {
    label: "Anxiety", vibe: "grounded & slow", bpmHint: "50-70 BPM",
    steps: ["Choose very slow, repetitive ambient or nature-sounds music.", "Feel both feet flat on the floor. Name 5 things you can see.", "Breathe in for 4 counts, hold for 4, out for 6. Repeat twice.", "Write one small, safe thing you can do right now.", "Let the music carry you-you don't have to perform, just be."]
  },
  burnout: {
    label: "Burnout", vibe: "gentle restoration", bpmHint: "55-75 BPM",
    steps: ["Choose soft, nurturing music-no lyrics, no urgency.", "Give yourself permission to do less than you think you should.", "Pick one tiny task that feels manageable. Just one.", "Rest fully between tasks-this is not laziness, it is recovery.", "End by writing one thing you are grateful your body did today."]
  },
  creative_block: {
    label: "Creative Block", vibe: "flowing & curious", bpmHint: "80-100 BPM",
    steps: ["Choose music that surprises you-something new or genre-crossing.", "Spend 3 minutes doodling, writing nonsense, or humming randomly.", "Ask: What would I make if it didn't have to be good?", "Make that thing. It doesn't need to be finished or shown to anyone.", "End by capturing one idea-a word, a sketch, a voice note."]
  },
  restless_energy: {
    label: "Restless Energy", vibe: "channel the buzz", bpmHint: "95-130 BPM",
    steps: ["Match the music to your energy-fast, rhythmic, propulsive.", "Channel the energy into movement first: shake out, jump, pace.", "Pick the most stimulating task you have been putting off.", "Work in bursts-start the clock and go hard for 10 minutes.", "After each sprint, do 60 seconds of slow breathing to reset."]
  }
};

function generateLocalSessionPlan(seedKey, options = {}) {
  const now = new Date();
  const minutes = clamp(Number(options.minutes ?? 12), 3, 60);
  const seed = LOCAL_SEEDS[seedKey] ?? LOCAL_SEEDS.low_focus;
  const warmup = Math.max(1, Math.round(minutes * 0.1));
  const focus = Math.max(1, Math.round(minutes * 0.7));
  const cooldown = Math.max(1, minutes - warmup - focus);
  return {
    id: `mg_${now.getTime()}`,
    createdAt: now.toISOString(),
    seedKey,
    seedLabel: seed.label,
    totalMinutes: minutes,
    vibe: seed.vibe,
    bpmHint: seed.bpmHint,
    phases: [
      { name: "Warmup", minutes: warmup, prompt: "Settle in. One track. One intention." },
      { name: "Focus", minutes: focus, prompt: "Small steps only. Return to the beat when drifting." },
      { name: "Cool-down", minutes: cooldown, prompt: "Soft landing. Notice one win." }
    ],
    steps: seed.steps,
    disclaimer: "This tool supports wellbeing and focus routines, but it is not medical advice. If you are struggling, consider reaching out to a qualified professional."
  };
}

export async function fetchPlan(options) {
  const payload = { seedKey: options?.seedKey, minutes: options?.minutes };
  try {
    const response = await fetch("/api/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (response.ok) return await response.json();
    return generateLocalSessionPlan(payload.seedKey, { minutes: payload.minutes });
  } catch {
    return generateLocalSessionPlan(payload.seedKey, { minutes: payload.minutes });
  }
}

export async function savePlan(clientId, plan) {
  try {
    const response = await fetch(`/api/clients/${clientId}/plan`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(plan),
    });
    if (!response.ok) throw new Error('Failed to save plan');
    return await response.json();
  } catch (error) {
    console.error('Error saving plan:', error);
    return null;
  }
}
