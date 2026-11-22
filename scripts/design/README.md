# Design tooling

- `.claude/skills/impeccable`: main design system (Apache 2.0, from pbakaus/impeccable).
- `.claude/skills/emil-design-eng`, `break-ui`, `choreograph`: interaction polish and edge-case checks (MIT, from emilkowalski/skills).
- `design-references/taste-skill`: reference only (MIT, from leonxlnx/taste-skill). Not loaded as a skill: its house rules conflict with a working business site (e.g. placeholder `.example` contacts, no real phone numbers).

## Screenshots and checks

Playwright is not in `package.json`. To use it locally:

```bash
npm i -D playwright
npx playwright install chromium   # or set CHROME_PATH to an installed Chrome
npm run dev &                     # starts on :3000
node scripts/design/shoot.mjs http://localhost:3000/en design-shots
```

The script screenshots desktop, tablet and phone widths, and reports console errors and horizontal overflow.
