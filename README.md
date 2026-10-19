# Recipe App

Recipe app built with Node.js, Express, and MongoDB.

## Prerequisites

- Node.js and npm
- A MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free tier)

## Setup

1. Install dependencies:

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
PAGINATION_PERPAGE=10
```

Optional: Google/Facebook OAuth and email (`MAIL_*`) variables — leave blank if unused.

3. In MongoDB Atlas (if using cloud):

- Create a database user and put the username/password in `DB_URL`
- Under **Network Access**, allow your IP (or `0.0.0.0/0` for testing)

## Run locally

```bash
npm start
```

Or with auto-reload:

```bash
npm run start:dev
```

Open **http://localhost:3001**

You should see `Mongodb connected` and `app is running on port 3001` in the terminal.

### First login

There is no default account. Click **Register**, create a user, then log in.

### Recipes on the homepage

The homepage lists recipes with status **public**. Private recipes only appear on your own recipes page.

## Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start the server |
| `npm run start:dev` | Start with nodemon |
| `npm run build:css` | Rebuild Tailwind CSS (watch mode) |

## Deploy (Render)

See `render.yaml`. Set `DB_URL` and `SESSION_SECRET` in the Render environment.
