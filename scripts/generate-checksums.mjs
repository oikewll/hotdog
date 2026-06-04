#!/usr/bin/env node
// Generate SHA-256 checksums for electron-builder release artifacts.
// Skips checksums.txt itself, latest-*.yml/.blockmap (electron-updater
// metadata), and builder-debug.yml (diagnostic).
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const targetDir = resolve(process.argv[2] ?? 'release');
const SKIP_PREFIXES = ['latest', 'checksums', 'builder-debug'];
const SKIP_SUFFIXES = ['.yml', '.blockmap'];

const lines = readdirSync(targetDir)
  .filter((name) => {
    if (SKIP_PREFIXES.some((p) => name.startsWith(p))) return false;
    if (SKIP_SUFFIXES.some((s) => name.endsWith(s))) return false;
    return statSync(join(targetDir, name)).isFile();
  })
  .sort()
  .map((name) => {
    const buf = readFileSync(join(targetDir, name));
    const hash = createHash('sha256').update(buf).digest('hex');
    return `${hash}  ${name}`;
  });

const out = join(targetDir, 'checksums.txt');
writeFileSync(out, lines.join('\n') + '\n');
console.log(lines.join('\n'));
console.log(`\nWrote ${lines.length} entries to ${out}`);
