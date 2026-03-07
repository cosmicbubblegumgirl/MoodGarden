const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

function generateLocalSessionPlan(seedKey, options = {}) {
  const now = new Date();
  const minutes = clamp(Number(options.minutes ?? 12), 3, 60);

  const seeds = {
    racing_thoughts: {
      label: "Racing Thoughts",
      vibe: "slow & steady",
      bpmHint: "60-80 BPM",
      steps: [
        "Pick one calm track (instrumental if possible).",
        "Breathe in for 4 beats, out for 6 beats.",
        "Write down the loudest thought in one sentence, then set it aside.",
        "Do one tiny task for 5 minutes-just one.",
        "End with a soft landing track."
      ]
    },
    overwhelm: {
      label: "Overwhelm",
      vibe: "gentle structure",
      bpmHint: "70-95 BPM",
      steps: [
        "Choose a familiar playlist (avoid surprises).",
        "Do a 60-second body scan (shoulders, jaw, hands).",
        "Pick the smallest next action; name it out loud.",
        "Work in a short sprint, then pause and stretch.",
        "Finish by noting one win (even if it is tiny)."
      ]
    },
    low_focus: {
      label: "Low Focus",
      vibe: "bright & bouncy",
      bpmHint: "90-120 BPM",
      steps: [
        "Choose upbeat music with minimal lyrics (or a language you do not speak).",
        "Set a 10-15 minute timer and begin immediately.",
        "Use if distracted, return on the next chorus or beat drop.",
        "When time ends, stop-even mid-task-to build trust with the timer.",
        "Do a quick reset: water and deep breath."
      ]
    }
  };

  const seed = seeds[seedKey] ?? seeds.low_focus;
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
    disclaimer:
      "This tool supports wellbeing and focus routines, but it is not medical advice. If you are struggling, consider reaching out to a qualified professional."
  };
}

export async function fetchPlan(options) {
  const payload = {
    seedKey: options?.seedKey,
    minutes: options?.minutes
  };

  try {
    const response = await fetch("/api/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      return await response.json();
    }

    // Static hosting fallback (GitHub Pages has no /api backend).
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
