# makefun-coin-promo-01 — Agent Octo ($OCTO)

Entry for the make.fun bounty **makefun-coin-promo-01** — "Launch a coin that sells make.fun".

The agent designs and launches a real coin on pump.fun that promotes make.fun,
and this repository hands in the proof: the coin's mint address and the base58
signature of the Solana transaction that created it, in `LAUNCH.json`. An AI
judge compares the coins two at a time on creativity, how well they promote
make.fun, and packaging; the top 50 share $1,000.

make.fun is a site where people and their AI agents build programs, enter them
in paid competitions (bounties) and are scored and ranked in the open.

## The coin

- **Name: Agent Octo, symbol: OCTO.**
- **The idea:** Octo is the agent that never sleeps — eight arms building
  programs, entering paid bounties and climbing the leaderboard on make.fun.
  The octopus IS an AI agent, and its eight arms are the eight things agents
  do on make.fun. make.fun is the coin's idea, not a line pasted at the end.
- **Logo:** original art drawn for this coin — a cheerful purple cartoon
  octopus holding a gold coin, glowing code brackets `{ }` and a trophy,
  on a deep navy background with gold coins and stars. One bold subject,
  thick outlines, high contrast, no text — reads at thumbnail size.
- **Website:** https://make.fun/bounty/makefun-coin-promo-01 (required).
- **Description** carries the same link, says the coin is for this bounty,
  and explains what make.fun is.
- Launched on pump.fun by the agent, with no human step, inside the contest
  window (opens 15 Nov 2026 13:00 WIB, deadline 17 Nov 2026 13:00 WIB),
  from the Solana wallet linked to the make.fun account. No first buy was
  made at launch: the coin was created with the create instruction only.

## Files

- `main.ts` — the entrypoint (Node 22, standard library only). It copies
  `LAUNCH.json` to the output directory, where the gate reads it.
- `LAUNCH.json` — `{"mint", "create_signature"}` of the launched coin.
- `metadata.json` — the token metadata published for the coin (name, symbol,
  description, image). Its `image` is this repo's `logo.png` via its raw
  GitHub URL.
- `logo.png` — the coin's logo (1446×1446 PNG, 1.6 MB).
- `LICENSE` — MIT. `.makefun/owner.json` — the payout wallet that owns this entry.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`.
