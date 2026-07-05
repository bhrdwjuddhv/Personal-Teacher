# Hitesh & Piyush — AI Persona Chat

Ask a question, get an answer in the voice of one of two tech YouTubers —
Hitesh Choudhary or Piyush Garg — rendered on a classroom blackboard, chalk
word by word. A landing page, the chat/classroom experience, and a
documentation page explaining how the personas and memory work.

## Stack

- **Frontend** — React 19 + Vite, Tailwind CSS v4, React Router, Axios.
  `frontend/`
- **Backend** — Express 5 + the OpenAI SDK (`gpt-4o-mini`). `backend/`

They're two independent Node projects (no monorepo tooling) — install and
run each separately, as below.

## Prerequisites

- Node.js 20+ and npm (Express 5 / Vite 8 / React 19 are recent majors —
  an older Node may not run them).
- An OpenAI API key with access to `gpt-4o-mini`.

## 1. Backend setup

```bash
cd backend
npm install
```

Create `backend/.env`:

```env
PORT=3000
OPENAI_API_KEY=sk-your-key-here
CORS_ORIGIN=http://localhost:5173
```

- `PORT` — what the Express server listens on.
- `OPENAI_API_KEY` — required; requests fail without it.
- `CORS_ORIGIN` — must be the exact origin the frontend runs on (the Vite
  dev server default is `http://localhost:5173`). Don't use `*` — the
  server enables `credentials: true`, and browsers reject a wildcard origin
  combined with credentials.

Run it:

```bash
node index.js
```

There's no `dev`/`start` script yet, and no auto-reload on file changes — if
you're editing backend code, either restart manually after each change or
run it with `node --watch index.js` (Node 18.11+) for auto-restart.

The API is now listening at `http://localhost:3000`, with the app's only
route at `POST /api/v1/request-gpt/ask-ai`.

## 2. Frontend setup

```bash
cd frontend
npm install
```

Create `frontend/.env`:

```env
VITE_API_BASE_URL=http://localhost:3000
```

This must match wherever the backend from step 1 is actually running.

Run it:

```bash
npm run dev
```

Vite serves the app at `http://localhost:5173` by default. Open that URL —
you should land on the hero page, with `/chat` (the classroom) and `/docs`
(the documentation page) reachable from there.

## Building for production

Frontend:

```bash
cd frontend
npm run build      # outputs static files to frontend/dist
npm run preview    # serve that build locally to sanity-check it
```

Backend: it's a plain Node/Express app — there's no separate build step,
just run `node index.js` (or whatever process manager you deploy with) with
the same environment variables, pointed at the frontend's real deployed
origin via `CORS_ORIGIN`.

## Project layout

```
backend/
  constants.js            env vars + both personas' system prompts
  index.js                Express app entry point
  controller/ai.controller.js   builds the OpenAI messages array, calls the model
  routes/ai.router.js      POST /api/v1/request-gpt/ask-ai
  utils/                   ApiError, ApiResponse, asyncHandler

frontend/
  src/pages/               LandingPage, ChatPage, DocumentationPage, NotFoundPage
  src/components/          landing/, chat/, docs/ — grouped by page
  src/data/                teachers, quotes, socials, sampleConversations
  src/hooks/               useChatHistory (localStorage), useWordReveal (chalk animation)
  src/api/askTeacher.js    the only place that talks to the backend
  public/                  stickman art, landing art, doc sample screenshots
```

## More detail

- **[frontend/connect_to_backend.md](frontend/connect_to_backend.md)** —
  the exact request/response contract, what's been fixed, and what's still
  open on the backend side.
- **[CONTEXT_MANAGEMENT.md](CONTEXT_MANAGEMENT.md)** — how the app gives the
  model short-term memory of a conversation using localStorage, with no
  database.
