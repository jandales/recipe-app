# Recipe App (Simply Savored)

Recipe sharing app built with **Node.js / Express / MongoDB** and a **Vue 3** frontend.

## Prerequisites

- Node.js and npm
- A MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free tier)

## Setup

1. Install server dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```env
NODE_ENV=development
PORT=3001
APP_URL=http://localhost:3001
APP_CLIENT_URL=http://localhost:3001

# Required — include a database name after the host
DB_URL=mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/recipe-app?retryWrites=true&w=majority

SESSION_SECRET=change-me-to-a-random-secret
PAGINATION_PERPAGE=50
```

Optional: Google/Facebook OAuth and email (`MAIL_*`) variables — leave blank if unused.

Google callback must be exactly:

```text
http://localhost:3001/api/auth/google/callback
```

(or your Render URL with `/api/auth/google/callback`)

3. Build the frontend:

```bash
npm run build:client
```

## Run locally

```bash
npm start
```

Or with auto-reload for the API:

```bash
npm run start:dev
```

Frontend-only Vite dev server (proxies `/api` to port 3001):

```bash
npm run dev:client
```

Open **http://localhost:3001**

### First login

There is no default account. Click **Register**, create a user, then log in.

### Recipes on the homepage

The homepage lists recipes with status **public**. Private recipes appear on your profile / My Recipes page.

## Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the Express server |
| `npm run start:dev` | Start API with nodemon |
| `npm run build:client` | Install & build the Vue app into `public/` |
| `npm run dev:client` | Vite frontend dev server |
| `npm run build:css` | Legacy Tailwind watch (optional) |

## Project structure

- `src/` — Express API, auth, MongoDB models
- `client/` — Vue 3 + Vite UI source
- `public/` — built frontend assets + uploaded images (`public/img`)

## Deploy (Render)

`render.yaml` builds with:

```bash
npm install && npm run build:client
```

Set `DB_URL`, `SESSION_SECRET`, `APP_URL`, and `APP_CLIENT_URL` in the Render environment.
