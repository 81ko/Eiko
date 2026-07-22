import { cp, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const output = new URL('./dist/', import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

const files = ['index.html', 'styles.css', 'script.js', 'public'];
for (const file of files) {
  const source = new URL(`./${file}`, import.meta.url);
  if (!existsSync(source)) {
    throw new Error(`Required file or folder is missing: ${file}`);
  }
  await cp(source, new URL(`./dist/${file}`, import.meta.url), { recursive: true });
}

console.log('Portfolio successfully built in dist/.');
