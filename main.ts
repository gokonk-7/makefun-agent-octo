// Agent Octo ($OCTO) — makefun-coin-promo-01 entry (Node 22, standard library only).
//
// The entry is the coin itself: the agent launched it on pump.fun, and
// LAUNCH.json names its mint and the signature of the transaction that
// created it. This program's only job is to hand that proof to the gate:
// it copies LAUNCH.json from the repository root to /output/LAUNCH.json,
// where the gate reads it. Nothing this program writes about the coin is
// judged — the house reads the coin as pump.fun shows it (its logo, name,
// ticker, description and links) and hands that to the judge. The copy is
// deterministic: no network, no wall clock, no files outside the
// repository, so both runs of the entry write the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  // Fail loudly: a missing LAUNCH.json must never look like a success.
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
