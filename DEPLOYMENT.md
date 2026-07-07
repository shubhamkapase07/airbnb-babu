# Deployment (Vercel)

This is a standard Next.js 16 app with no backend, no environment variables, and only local
assets — so it deploys to Vercel with zero configuration. Two ways to do it.

## Option A — Dashboard (recommended, uses the GitHub repo)

1. Go to **https://vercel.com/new** and sign in with GitHub.
2. Click **Import** next to the `airbnb-babu` repository. (If you don't see it, click
   *Adjust GitHub App Permissions* and grant Vercel access to the repo.)
3. Vercel auto-detects the settings — leave them as-is:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (the repo root already *is* the app)
   - **Build Command:** `next build` (default)
   - **Output:** handled automatically
   - **Install Command:** `npm install` (default)
   - **Environment Variables:** none needed
4. Click **Deploy** and wait ~1–2 minutes.
5. You get a live URL like `https://airbnb-babu.vercel.app`. Every future `git push` to `main`
   auto-deploys; pull requests get preview URLs.

## Option B — Vercel CLI (deploy from your machine)

```bash
npm i -g vercel
cd "/Users/shubhamkapase/Downloads/Dev Projects/Airbnb/airbnb-clone"
vercel            # first run: links the project, answer the prompts (accept defaults)
vercel --prod     # promote to a production deployment
```

## Verify the build locally first (optional but wise)

```bash
npm install
npm run build     # must finish green — it does for this project
npm run start     # serve the production build at http://localhost:3000
```

## Notes

- **Images:** the gallery photos live in `public/images/` and are served/optimized by Vercel's
  built-in `next/image` — no remote-image allowlist or CDN config required.
- **Node version:** Vercel defaults to a current LTS, which satisfies Next.js 16. To pin it, add
  `"engines": { "node": ">=18.18" }` to `package.json` or set the Node version in
  Project → Settings → General.
- **Custom domain:** Project → Settings → Domains → add your domain and follow the DNS steps.
- **Rollbacks:** Vercel keeps every deployment; use the Deployments tab to instantly roll back.
