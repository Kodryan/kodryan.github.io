import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const MAX_EDGE = 2048;
const ROOT = 'src/assets/images';
const COPYRIGHT = '© Dimitrii Codrean';

const args = process.argv.slice(2);
const check = args.includes('--check');
const requested = args.filter((arg) => !arg.startsWith('--'));

const files = (requested.length > 0
  ? requested
  : (await readdir(ROOT, { recursive: true })).map((file) => path.join(ROOT, file))
).filter((file) => /\.jpe?g$/i.test(file));

const oversized = [];

for (const file of files) {
  const { width = 0, height = 0 } = await sharp(file).metadata();
  if (Math.max(width, height) <= MAX_EDGE) continue;

  oversized.push(`${file} (${width}x${height})`);
  if (check) continue;

  const output = await sharp(file)
    .autoOrient()
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside' })
    .keepIccProfile()
    .withExif({ IFD0: { Copyright: COPYRIGHT, Artist: 'Dimitrii Codrean' } })
    .jpeg({ quality: 85, mozjpeg: true })
    .toBuffer();
  await writeFile(file, output);
  console.log(`Resized ${file} from ${width}x${height} to fit ${MAX_EDGE}px`);
}

if (check && oversized.length > 0) {
  console.error(
    `Photos larger than ${MAX_EDGE}px on the long edge:\n  ${oversized.join('\n  ')}\n` +
      'Run `npm run photos` and commit the result.',
  );
  process.exit(1);
}
