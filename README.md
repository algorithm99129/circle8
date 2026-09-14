# Circle8 website

Marketing site for Circle8, built with Next.js (App Router) and plain CSS. One page: introduction, how it works, a week example, benefits, comparison, pricing, privacy, FAQ and an early-access form.

## Run

```
npm install
npm run dev      # http://localhost:3005
npm run build    # production build
npm start        # serve the production build
```

## Where things are

| Path | What it is |
|---|---|
| `content/site.ts` | All copy: nav, steps, benefits, comparison, plans, privacy points, FAQ, form options. Edit here. |
| `app/layout.tsx` | Fonts (self-hosted through `next/font`), metadata, the icon sprite. |
| `app/page.tsx` | Composes the sections. |
| `app/globals.css` | Design system and layout. |
| `app/api/early-access/route.ts` | Receives the form. |
| `app/opengraph-image.tsx` | Social preview image, generated at build time. |
| `app/icon.svg` | Favicon. |
| `components/` | One component per section; `Sprite.tsx` holds every icon; `HeroArt.tsx` is the street illustration; `QrPattern.tsx` draws the decorative code. |
| `public/hero-street.svg` | The street illustration as a standalone file for posts and slides. |

## Form submissions

The form posts to `/api/early-access`. Set `EARLY_ACCESS_WEBHOOK_URL` to forward each submission as JSON (a Slack incoming webhook, a Google Sheet via Apps Script, Zapier, Make, Formspree, or your own API). Without it, submissions are logged to the server console, which is fine for a preview but not for launch.

```
# .env.local
EARLY_ACCESS_WEBHOOK_URL=https://hooks.slack.com/services/...
```

## Before launch

1. Set `EARLY_ACCESS_WEBHOOK_URL` (above).
2. Set the real domain in `content/site.ts` (`site.url`); it feeds the metadata and the Open Graph image.
3. Localise prices (`$29`, `$1`, `$40`, `from $200`) in `content/site.ts` and `components/Pricing.tsx`.
4. "Circle8" is a working name; it lives in `content/site.ts` and a few headings.

## Deploy

`vercel` from this folder, or connect the repo to Vercel. Any Node host works too (`npm run build && npm start`).

## If `npm run build` fails on this Windows machine

On this PC a scanner (antivirus or indexer) holds every newly written file on the `E:` drive for about 100 ms. `npm run dev` copes with that, but `npm run build` fails with `EBUSY: resource busy or locked` while it renames files in `.next`. It has nothing to do with the code; the same build passes on `C:` and on Vercel.

Fix: exclude the project folder from the scanner. In Windows Security → Virus & threat protection → Manage settings → Exclusions, add the folder `E:\Market` (needs an administrator). Until then, develop with `npm run dev` and let Vercel do the production builds.

`next.config.ts` also keeps Turbopack's on-disk compiler cache off, because it hit the same lock; it only costs a little compile time and can be re-enabled once the exclusion is in place.
