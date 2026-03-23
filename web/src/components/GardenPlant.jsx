import { useRef } from "react";

const PLANT_CONFIG = {
  racing_thoughts: {
    name: "Willow",
    soilColor: "#2a1f14",
    bgGlow: "rgba(90,140,80,0.18)"
  },
  overwhelm: {
    name: "Succulent",
    soilColor: "#1e2a1a",
    bgGlow: "rgba(60,140,80,0.20)"
  },
  low_focus: {
    name: "Sunflower",
    soilColor: "#2a2010",
    bgGlow: "rgba(245,166,35,0.22)"
  },
  anxiety: {
    name: "Lavender",
    soilColor: "#1a1525",
    bgGlow: "rgba(150,80,220,0.18)"
  },
  burnout: {
    name: "Fern",
    soilColor: "#1a2518",
    bgGlow: "rgba(50,120,70,0.16)"
  },
  creative_block: {
    name: "Lotus",
    soilColor: "#251520",
    bgGlow: "rgba(220,80,140,0.20)"
  },
  restless_energy: {
    name: "Cactus",
    soilColor: "#22200f",
    bgGlow: "rgba(60,160,80,0.18)"
  }
};

function Willow({ bloomOp }) {
  return (
    <>
      <rect x="-5" y="70" width="10" height="98" fill="#7a5c3a" rx="4" />
      <ellipse cx="0" cy="72" rx="28" ry="20" fill="#3d6e44" />
      <ellipse cx="0" cy="66" rx="20" ry="14" fill="#52915c" />
      <path d="M -6,88 C -18,95 -38,105 -40,140" stroke="#4a7040" fill="none" strokeWidth="3" strokeLinecap="round" />
      <path d="M 6,88 C 18,95 38,105 40,140" stroke="#4a7040" fill="none" strokeWidth="3" strokeLinecap="round" />
      <path d="M -4,100 C -22,110 -46,122 -44,158" stroke="#3d6035" fill="none" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 4,100 C 22,110 46,122 44,158" stroke="#3d6035" fill="none" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="-40" cy="140" rx="9" ry="6" fill="#4a7040" opacity="0.85" />
      <ellipse cx="40" cy="140" rx="9" ry="6" fill="#4a7040" opacity="0.85" />
      <ellipse cx="-44" cy="155" rx="7" ry="5" fill="#3d6035" opacity="0.75" />
      <ellipse cx="44" cy="155" rx="7" ry="5" fill="#3d6035" opacity="0.75" />
      <ellipse cx="0" cy="60" rx="8" ry="6" fill="#7cd87a" opacity={bloomOp} />
      <ellipse cx="-12" cy="64" rx="5" ry="4" fill="#9ef09a" opacity={bloomOp * 0.8} />
      <ellipse cx="12" cy="64" rx="5" ry="4" fill="#9ef09a" opacity={bloomOp * 0.8} />
    </>
  );
}

function Succulent({ bloomOp }) {
  const petals = [
    { cx: 0, cy: -12, rx: 10, ry: 16, rot: 0 },
    { cx: 11, cy: -7, rx: 10, ry: 16, rot: 45 },
    { cx: 14, cy: 5, rx: 10, ry: 16, rot: 90 },
    { cx: 8, cy: 15, rx: 10, ry: 16, rot: 135 },
    { cx: -8, cy: 15, rx: 10, ry: 16, rot: 225 },
    { cx: -14, cy: 5, rx: 10, ry: 16, rot: 270 },
    { cx: -11, cy: -7, rx: 10, ry: 16, rot: 315 },
  ];
  return (
    <>
      <rect x="-18" y="148" width="36" height="18" rx="5" fill="#6b5030" />
      <g transform="translate(0, 148)">
        {petals.map((p, i) => (
          <ellipse
            key={i}
            cx={p.cx * 0.85} cy={p.cy * 0.85 - 8}
            rx={p.rx * 0.7} ry={p.ry * 0.7}
            fill={i % 2 === 0 ? "#2d7a4a" : "#3d9060"}
            opacity={0.88}
            transform={`rotate(${p.rot}, ${p.cx * 0.85}, ${p.cy * 0.85 - 8})`}
          />
        ))}
        <ellipse cx="0" cy="-8" rx="7" ry="7" fill="#52c47a" />
        <ellipse cx="0" cy="-8" rx="4" ry="4" fill="#74d99f" />
      </g>
      <ellipse cx="0" cy="130" rx="6" ry="6" fill="#ff8cb4" opacity={bloomOp} />
      {[0,60,120,180,240,300].map(a => (
        <ellipse
          key={a}
          cx={Math.cos(a * Math.PI / 180) * 10}
          cy={130 + Math.sin(a * Math.PI / 180) * 10}
          rx="4" ry="6"
          fill="#ffb3d0"
          opacity={bloomOp * 0.8}
          transform={`rotate(${a}, ${Math.cos(a * Math.PI / 180) * 10}, ${130 + Math.sin(a * Math.PI / 180) * 10})`}
        />
      ))}
    </>
  );
}

function Sunflower({ bloomOp }) {
  const petalAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
  return (
    <>
      <rect x="-5" y="55" width="10" height="112" fill="#3a7a22" rx="4" />
      <ellipse cx="-22" cy="115" rx="16" ry="8" fill="#3a7a22" transform="rotate(-30, -22, 115)" opacity="0.85" />
      <ellipse cx="22" cy="130" rx="16" ry="8" fill="#3a7a22" transform="rotate(30, 22, 130)" opacity="0.85" />
      <g transform="translate(0, 52)">
        {petalAngles.map(a => (
          <ellipse
            key={a}
            cx={Math.cos((a - 90) * Math.PI / 180) * 22}
            cy={Math.sin((a - 90) * Math.PI / 180) * 22}
            rx="6" ry="14"
            fill="#f5a623"
            opacity={0.85 + bloomOp * 0.15}
            transform={`rotate(${a}, ${Math.cos((a - 90) * Math.PI / 180) * 22}, ${Math.sin((a - 90) * Math.PI / 180) * 22})`}
          />
        ))}
        <circle cx="0" cy="0" r="16" fill="#6b3e10" />
        <circle cx="0" cy="0" r="11" fill="#8b5e1a" />
        {[-4,-2,0,2,4].map(dx => [-4,-2,0,2,4].map(dy => (
          <circle key={`${dx}${dy}`} cx={dx * 1.8} cy={dy * 1.8} r="1.2" fill="#4a2800" opacity="0.6" />
        )))}
        <circle cx="0" cy="0" r="4" fill="#f5cc80" opacity={bloomOp} />
      </g>
    </>
  );
}

function Lavender({ bloomOp }) {
  const stems = [-24, -12, 0, 12, 24];
  const heights = [80, 65, 55, 70, 85];
  return (
    <>
      {stems.map((x, i) => (
        <g key={i}>
          <rect x={x - 2} y={heights[i]} width="4" height={168 - heights[i]} fill="#5a8040" rx="2" />
          <ellipse cx={x} cy={heights[i]} rx="8" ry="12" fill="#7b2fbe" opacity={0.85 + bloomOp * 0.1} />
          <ellipse cx={x} cy={heights[i] - 5} rx="5" ry="7" fill="#9d4edd" opacity={0.75 + bloomOp * 0.1} />
          <ellipse cx={x} cy={heights[i] - 10} rx="3" ry="5" fill="#c77dff" opacity={0.65 + bloomOp * 0.2} />
        </g>
      ))}
      <ellipse cx="0" cy="40" rx="12" ry="8" fill="#e0aaff" opacity={bloomOp} />
      {stems.map((x, i) => (
        <ellipse key={i} cx={x} cy={heights[i] - 14} rx="4" ry="5" fill="#f0c9ff" opacity={bloomOp * 0.9} />
      ))}
    </>
  );
}

function Fern({ bloomOp }) {
  const frondPairs = [
    { y: 155, len: 24 },
    { y: 135, len: 30 },
    { y: 115, len: 34 },
    { y: 95, len: 30 },
    { y: 75, len: 24 },
    { y: 58, len: 16 },
  ];
  return (
    <>
      <rect x="-3" y="55" width="6" height="113" fill="#2d6a4f" rx="3" />
      {frondPairs.map(({ y, len }, i) => (
        <g key={i}>
          <path d={`M 0,${y} C -${len * 0.4},${y - 6} -${len},${y - 12} -${len},${y - 24}`}
            stroke="#3d8a62" fill="none" strokeWidth="3" strokeLinecap="round" opacity="0.88" />
          <path d={`M 0,${y} C ${len * 0.4},${y - 6} ${len},${y - 12} ${len},${y - 24}`}
            stroke="#3d8a62" fill="none" strokeWidth="3" strokeLinecap="round" opacity="0.88" />
          {[-1, 1].map(side => (
            [0.3, 0.6, 0.85].map((t, j) => {
              const px = side * len * t;
              const py = y - 6 * t - 14 * t;
              return <ellipse key={`${side}${j}`} cx={px} cy={py} rx="5" ry="3" fill="#52b788" opacity={0.7}
                transform={`rotate(${side * 25 * (j + 1)}, ${px}, ${py})`} />;
            })
          ))}
        </g>
      ))}
      <ellipse cx="0" cy="50" rx="10" ry="8" fill="#a5d6a7" opacity={bloomOp * 0.9} />
    </>
  );
}

function Lotus({ bloomOp }) {
  const outerPetals = [0, 40, 80, 120, 160, 200, 240, 280, 320];
  const innerPetals = [20, 60, 100, 140, 180, 220, 260, 300, 340];
  return (
    <>
      <rect x="-4" y="100" width="8" height="68" fill="#3d7a4a" rx="3" />
      <ellipse cx="-28" cy="155" rx="22" ry="10" fill="#3d7a4a" opacity="0.75" />
      <ellipse cx="28" cy="160" rx="20" ry="9" fill="#3d7a4a" opacity="0.70" />
      <g transform="translate(0, 100)">
        {outerPetals.map(a => (
          <ellipse key={a}
            cx={Math.cos((a - 90) * Math.PI / 180) * 26}
            cy={Math.sin((a - 90) * Math.PI / 180) * 14}
            rx="8" ry="20"
            fill="#e63946" opacity="0.80"
            transform={`rotate(${a}, ${Math.cos((a - 90) * Math.PI / 180) * 26}, ${Math.sin((a - 90) * Math.PI / 180) * 14})`}
          />
        ))}
        {innerPetals.map(a => (
          <ellipse key={a}
            cx={Math.cos((a - 90) * Math.PI / 180) * 16}
            cy={Math.sin((a - 90) * Math.PI / 180) * 8}
            rx="6" ry="16"
            fill="#ff6b6b" opacity={0.75 + bloomOp * 0.2}
            transform={`rotate(${a}, ${Math.cos((a - 90) * Math.PI / 180) * 16}, ${Math.sin((a - 90) * Math.PI / 180) * 8})`}
          />
        ))}
        <circle cx="0" cy="0" r="9" fill="#ffd166" />
        <circle cx="0" cy="0" r="5" fill="#ffec8b" opacity={0.9 + bloomOp * 0.1} />
      </g>
      {[0,45,90,135,180,225,270,315].map(a => (
        <circle key={a}
          cx={Math.cos((a - 90) * Math.PI / 180) * 14}
          cy={100 + Math.sin((a - 90) * Math.PI / 180) * 14}
          r="2.5"
          fill="#ffd166"
          opacity={bloomOp}
        />
      ))}
    </>
  );
}

function Cactus({ bloomOp }) {
  return (
    <>
      <rect x="-14" y="60" width="28" height="108" rx="12" fill="#2d6a4f" />
      <rect x="-14" y="60" width="28" height="108" rx="12" fill="none" stroke="#1b4332" strokeWidth="1.5" />
      {[-10, -5, 0, 5, 10].map((x, i) => (
        <g key={i}>
          <line x1={x} y1={70 + i * 18} x2={x - 5} y2={65 + i * 18} stroke="#1b4332" strokeWidth="1.5" strokeLinecap="round" />
          <line x1={x} y1={70 + i * 18} x2={x + 5} y2={65 + i * 18} stroke="#1b4332" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      ))}
      <path d="M -14,110 C -36,110 -44,95 -40,80" stroke="#2d6a4f" fill="none" strokeWidth="18" strokeLinecap="round" />
      <path d="M -14,110 C -36,110 -44,95 -40,80" stroke="#1b4332" fill="none" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 14,100 C 36,100 44,85 40,68" stroke="#2d6a4f" fill="none" strokeWidth="18" strokeLinecap="round" />
      <path d="M 14,100 C 36,100 44,85 40,68" stroke="#1b4332" fill="none" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="0" cy="55" r="12" fill="#ff6b6b" opacity={0.5 + bloomOp * 0.5} />
      {[0, 60, 120, 180, 240, 300].map(a => (
        <ellipse key={a}
          cx={Math.cos((a - 90) * Math.PI / 180) * 14}
          cy={55 + Math.sin((a - 90) * Math.PI / 180) * 14}
          rx="5" ry="9"
          fill="#ff8cb4"
          opacity={bloomOp}
          transform={`rotate(${a}, ${Math.cos((a - 90) * Math.PI / 180) * 14}, ${55 + Math.sin((a - 90) * Math.PI / 180) * 14})`}
        />
      ))}
      <circle cx="0" cy="55" r="6" fill="#ffd166" opacity={bloomOp} />
    </>
  );
}

const PLANT_COMPONENTS = {
  racing_thoughts: Willow,
  overwhelm: Succulent,
  low_focus: Sunflower,
  anxiety: Lavender,
  burnout: Fern,
  creative_block: Lotus,
  restless_energy: Cactus
};

export default function GardenPlant({ moodKey = "low_focus", growth = 0, isBloom = false, size = "medium", title = "" }) {
  const idRef = useRef(`plant-${Math.random().toString(36).slice(2)}`);
  const clipId = idRef.current;
  const config = PLANT_CONFIG[moodKey] || PLANT_CONFIG.low_focus;

  const clampedGrowth = Math.max(0, Math.min(1, growth));
  const clipY = 168 * (1 - clampedGrowth);
  const clipH = 168 * clampedGrowth;
  const bloomOp = Math.max(0, (clampedGrowth - 0.72) / 0.28);
  const seedOp = Math.max(0, 1 - clampedGrowth * 12);

  const PlantComp = PLANT_COMPONENTS[moodKey] || Sunflower;

  const sizeMap = { small: 72, medium: 120, large: 160 };
  const svgSize = sizeMap[size] || 120;
  const isLarge = size === "large";

  return (
    <div
      className={`gardenPlant gardenPlant-${size}`}
      title={title}
      style={{ "--glow-color": config.bgGlow }}
    >
      {isLarge && clampedGrowth === 1 && (
        <div className="bloomBurst" />
      )}
      <svg
        viewBox="-60 0 120 180"
        width={svgSize}
        height={svgSize}
        style={{ overflow: "visible", transition: "filter 1s" }}
        aria-label={config.name}
      >
        <defs>
          <clipPath id={clipId}>
            <rect x="-60" y={clipY} width="120" height={clipH} />
          </clipPath>
        </defs>

        <rect x="-58" y="165" width="116" height="16" rx="6" fill={config.soilColor} />
        <rect x="-50" y="162" width="100" height="8" rx="4" fill={config.soilColor} opacity="0.6" />

        <circle cx="0" cy="164" r="5" fill="#8b6914" opacity={seedOp} />
        <circle cx="0" cy="164" r="3" fill="#a07828" opacity={seedOp} />

        <g clipPath={`url(#${clipId})`} style={{ transition: "d 3s ease" }}>
          <PlantComp bloomOp={bloomOp} />
        </g>

        {isBloom && (
          <g>
            {[...Array(6)].map((_, i) => {
              const angle = (i / 6) * 360;
              const r = 35 + Math.random() * 15;
              return (
                <circle
                  key={i}
                  cx={Math.cos((angle - 90) * Math.PI / 180) * r}
                  cy={80 + Math.sin((angle - 90) * Math.PI / 180) * r}
                  r="3"
                  fill="#ffd166"
                  opacity="0.8"
                  style={{ animation: `sparkle 1.5s ease-in-out ${i * 0.25}s infinite` }}
                />
              );
            })}
          </g>
        )}
      </svg>

      {isLarge && (
        <div className="plantLabel">
          <span className="plantName">{config.name}</span>
          <span className="plantProgress">{Math.round(clampedGrowth * 100)}%</span>
        </div>
      )}
    </div>
  );
}
