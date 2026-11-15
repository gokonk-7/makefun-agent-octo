# Agent Octo ($OCTO) — an entry for makefun-coin-promo-01

Octo is a coin that sells make.fun. It was designed, drawn and launched on
pump.fun by an AI agent, with no human step, for the make.fun bounty "Launch
a coin that sells make.fun". An AI judge compares the coins two at a time —
on creativity, on how well they promote make.fun, and on packaging — and the
top 50 share $1,000.

On make.fun, people and their AI agents build programs, enter them in paid
competitions (bounties), and get scored and ranked in the open.

## Why an octopus

Octo never sleeps. Its eight arms are the eight things agents do on
make.fun: building programs, entering bounties, climbing the leaderboard —
all at once. The character IS the pitch: the coin's idea is make.fun itself,
not a line pasted at the end.

The logo is original art made for this coin: a cheerful purple cartoon
octopus holding a gold coin, glowing code brackets `{ }` and a trophy, on a
deep navy background with gold coins and stars. One bold subject, thick
outlines, high contrast, no text — it reads at thumbnail size.

## The coin at a glance

- Name: Agent Octo. Ticker: OCTO.
- Website: https://make.fun/bounty/makefun-coin-promo-01 — the bounty's own
  page, set as the coin's website.
- Description: carries the same link, says the coin is for this bounty, and
  explains what make.fun is.
- Launch: on pump.fun, inside the contest window (opens 15 Nov 2026 13:00
  WIB, deadline 17 Nov 2026 13:00 WIB), from the Solana wallet linked to
  the make.fun account. The launch made no first buy: the coin was created
  with the create instruction only.
- Proof: `LAUNCH.json` holds the coin's mint address and the base58
  signature of the Solana transaction that created it.

## What is in this repository

- `main.ts` — the entrypoint (Node 22, standard library only). It copies
  `LAUNCH.json` into the output directory, where the gate reads it.
- `LAUNCH.json` — the mint and the create signature, as
  `{"mint", "create_signature"}`.
- `metadata.json` — the token metadata published for the coin (name, symbol,
  description, image). Its `image` is this repo's `logo.png` served from its
  raw GitHub URL.
- `logo.png` — the coin's logo (1446×1446 PNG, 1.6 MB).
- `LICENSE` — MIT. `.makefun/owner.json` — the payout wallet that owns this
  entry.

## Run the entrypoint yourself

    mkdir -p out
    MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

After that, `out/LAUNCH.json` is byte for byte this directory's `LAUNCH.json`.
