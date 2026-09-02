# Don Dew — Portfolio

> Ignite Purpose, Elevate Passion, Shape the Future.

The personal portfolio of **Don Dew** (Dewmika Senarathna) — Computer Engineering
undergraduate, AI/ML engineer and full‑stack developer. Rebuilt on the MERN
stack (React front end, Express back end) without a database — the back end
exists solely to relay the contact form to email.

```
Don_Dew_Portfolio/
├── client/     React 18 + Vite single‑page application (the site itself)
├── server/     Express API — a single POST /api/contact endpoint
└── README.md   You are here
```

## Why this structure

- **client** is a fully static build once compiled (`npm run build`), so it can
  be hosted for free on Vercel, Netlify or GitHub Pages.
- **server** is a thin, stateless Express service. It does not persist any
  data — there is no database — it only validates and forwards contact‑form
  submissions by email (via Nodemailer) so messages don't disappear into a
  serverless void. If you'd rather not run a back end at all, the contact
  section can be pointed at a form service (Formspree, EmailJS, Resend) instead —
  see `client/src/data/contact.js`.

## Local development

Requirements: Node.js ≥ 18.

```bash
# 1. Front end
cd client
npm install
npm run dev          # http://localhost:5173

# 2. Back end (in a second terminal, optional in dev)
cd server
npm install
cp .env.example .env # fill in your SMTP / email credentials
npm run dev           # http://localhost:5000
```

The client proxies `/api/*` calls to `http://localhost:5000` during
development (see `client/vite.config.js`), so once both are running the
contact form works end‑to‑end locally.

## Deploying it for free

**Front end — Vercel (recommended)**
1. Push this repository to GitHub.
2. In Vercel: *New Project* → import the repo → set **Root Directory** to
   `client`. Vercel auto‑detects Vite (`npm run build`, output `dist`).
3. Add the environment variable `VITE_API_URL` set to your deployed server's
   URL (from the step below), then redeploy.

**Back end — Render**
1. In Render: *New → Web Service* → connect the same repo → set **Root
   Directory** to `server`.
2. Build command: `npm install`. Start command: `npm start`.
3. Add the environment variables from `server/.env.example` (your SMTP/email
   provider credentials and `CLIENT_URL` set to your Vercel domain, for CORS).

Once both are live, the site is fully public with no database to manage,
back up or pay for.

*(Netlify + Railway, or GitHub Pages + a serverless function, work exactly
the same way if you prefer those platforms instead.)*

## Content

All text content — education, skills, certifications, projects and blog
links — lives in plain data files under `client/src/data/`, so updating the
site never requires touching a component. Edit the relevant file, save, and
the build picks it up automatically.
