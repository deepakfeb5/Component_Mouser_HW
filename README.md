# Mouser BOM – Vercel Monorepo (FastAPI + Next.js)

## Deploy

1. Push this repo to GitHub.
2. In Vercel, import the project.
3. Set environment variables in Vercel Project Settings → Environment Variables:

   * `MOUSER\_API\_KEY` = 3f8661d7-e599-45f7-a572-72280fd2f09a
   * `BACKEND\_URL` = `https://Component\_Mouser\_HW.vercel.app/api`
4. Deploy.

## Local dev

Backend (FastAPI):

```bash
pip install -r requirements.txt
uvicorn api.mouser:app --host 0.0.0.0 --port 8000
```

Frontend (Next.js):

```bash
cd web
npm i
npm run dev
```

Then set `BACKEND\_URL=http://localhost:8000` in a `.env.local` under `web/` for local development.

