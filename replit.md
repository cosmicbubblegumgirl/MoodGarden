# MoodGarden

A whimsical music companion for focus and calm, designed with ADHD + GAD-friendly routines in mind.

## Architecture

- **Frontend**: React + Vite (`web/`) — runs on port 5000
- **Backend**: Express.js (`server/`) — runs on port 5179
- **Root**: Orchestrates both via `concurrently`

## Running the App

```bash
npm run start
```

This launches both services concurrently:
- Frontend: http://localhost:5000
- Backend API: http://localhost:5179 (proxied via Vite at `/api`)

## Project Structure

```
/
├── web/              # React frontend (Vite)
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/  # UI components
│   │   └── lib/         # planClient, seeds, storage helpers
│   └── vite.config.js
├── server/           # Express backend
│   └── src/
│       ├── index.js    # App entry point
│       ├── routes.js   # API routes (/api/health, /api/plan)
│       └── sessionPlan.js  # Plan generation logic
└── package.json      # Root orchestration (concurrently)
```

## Key Features

- Pick a "mood seed" (Racing Thoughts, Overwhelm, Low Focus)
- Generate a personalized focus session plan
- Built-in timer with phase tracking
- Mood DJ music suggestions
- Session history with localStorage persistence
- Falls back to local plan generation if backend is unavailable

## Deployment

Configured as autoscale deployment. The backend runs on port 5179 and the frontend serves on port 5000.
