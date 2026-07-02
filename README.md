# RuneCast — runeca.st

The official landing page for **RuneCast**, a neon word game you play right inside
Discord. Live at <https://runeca.st> (served by GitHub Pages from this repo).

## What's here
- `index.html` — hero, live daily leaderboard, features, "play anywhere", community, footer.
- `styles.css` — refined-cyberpunk brand styles (Russo One wordmark + Space Grotesk; cyan/magenta on dark).
- `script.js` — fetches the live daily leaderboard from the app backend, with a graceful fallback.
- `assets/` — gameplay screenshots, favicon, and the social share image.
- `CNAME` — `runeca.st` (custom domain; don't remove).

## Live leaderboard
`script.js` fetches today's top scores from
`https://runecast.twkr.io/api/daily/leaderboard`. If the endpoint is unreachable or
empty, the widget shows a friendly fallback — never a broken or hanging state.

## Local dev
```bash
python3 -m http.server 8080   # open http://localhost:8080
node --test                   # unit tests for leaderboard render + username escaping
```

## Deploy
Push to `master` → GitHub Pages rebuilds `runeca.st` automatically.
