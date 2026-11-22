import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const url = process.argv[2] ?? 'http://localhost:3000/en';
const outDir = process.argv[3] ?? 'design-shots';
const sizes = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'phone', width: 390, height: 844 },
];

mkdirSync(outDir, { recursive: true });
const executablePath = process.env.CHROME_PATH || undefined;
const browser = await chromium.launch({ executablePath });
const failures = [];

for (const size of sizes) {
  const page = await browser.newPage({ viewport: { width: size.width, height: size.height } });
  page.on('console', (m) => { if (m.type() === 'error') failures.push(`${size.name}: ${m.text()}`); });
  page.on('pageerror', (e) => failures.push(`${size.name}: ${e.message}`));
  await page.goto(url, { waitUntil: 'networkidle' });
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  if (overflow > 0) failures.push(`${size.name}: horizontal overflow ${overflow}px`);
  await page.screenshot({ path: `${outDir}/${size.name}.png`, fullPage: true });
  await page.close();
}

await browser.close();
console.log(`Screenshots written to ${outDir}/`);
if (failures.length) {
  console.log('Problems:\n' + failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log('No console errors or horizontal overflow.');
}
