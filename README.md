# EthioCode website

Bilingual (English and Amharic) portfolio site for our software studio. "EthioCode" is a working name until branding is done.

## Where things live

| What | File |
| --- | --- |
| Business name, Telegram handle, phone, email | `src/content/site.ts` |
| English copy, prices, demo projects | `src/content/en.ts` |
| Amharic copy | `src/content/am.ts` |
| Colors and fonts | `src/app/globals.css` |
| Pages | `src/app/[lang]/` |

To rename the business, change `name` in `src/content/site.ts` and the titles in `en.ts` and `am.ts`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000/en/

## Preview deployment

Every push to `main` builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`. In the repo settings, set **Pages > Source** to **GitHub Actions** once.

## Before launch

- Replace the placeholder Telegram handle, phone and email in `site.ts`
- Native-speaker review of all Amharic copy
- Real founder names and photos
- Lawyer review of the privacy policy and terms
- Remove `robots: noindex` in `src/app/[lang]/layout.tsx`
- Move hosting to Cloudflare Pages on the real domain
