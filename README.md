# The Forgotten Road

**The Forgotten Road** is a dark fantasy ASCII browser RPG about memory, identity, and the truth hidden beneath a world that has forgotten itself.

You awaken on an ash-covered road without a name or a past. A broken sword, a marked stone, and a path vanishing into the mist are the first things waiting for you. What you choose shapes how the world responds — and which fragments of its lost history you are able to uncover.

> **Memory is power. Memory is danger. Memory is truth.**

## Play

The web version is published with GitHub Pages:

[Play The Forgotten Road](https://samme-commit.github.io/ForgottenRoad/)

## What is in the game?

- A story-driven opening with a chosen name and special reactions to names from the lore.
- Three starting paths: **Warrior**, **Keeper**, and **Explorer**.
- Typewriter narration, scene transitions, ASCII art, and a compact dark-fantasy interface.
- A connected campaign across The Forgotten Road, Silent Forest, Lost Camp, Keeper's Cairn, Forgotten City, Old Library, Empty Palace, Memory Archive, and Ashen Gate.
- Turn-based encounters with The Forgotten Guard, Hollowborn, Memory Wraiths, and the Hollow Remnant.
- Inventory, hotbar, health, map, journal, memories, quests, equipment, consumables, and permanent choices.
- Multiple endings that answer the question at the heart of the world: should it remember?

## The world

Long ago, an event known as **The Great Forgetting** stripped people, places, and entire civilizations of their histories. The Hollow did not break the world through force — it ate the meaning from everything it touched.

As the player, you recover fragments of a past that seems to recognize you. Every zone, enemy, item, and quest is tied to the same central mystery: what did the Keepers of Memory sacrifice, and what will happen if the world remembers again?

## Controls

The game is primarily played by clicking choices and actions.

- Click the narrative while it is typing to reveal the current passage immediately.
- `J` opens the journal after it is unlocked.
- `M` opens the map after it is unlocked.
- `1`–`4` use available hotbar items after the HUD appears.

## Development

The project is built with React, TypeScript, Zustand, and Vite.

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npm run build
```

## Design documents

The game is guided by four living documents:

- [Lore](docs/LORE.md) — the underlying truth, themes, and endings.
- [World](docs/WORLD.md) — regions, factions, and world rules.
- [Gameplay](docs/GAMEPLAY.md) — systems, progression, and player experience.
- [Content](docs/CONTENT.md) — planned chapters, zones, enemies, quests, and major moments.

## Project status

The current version is a complete, compact playable campaign. The next iterations can deepen individual zones, expand branching content, add more secrets, and refine balance — while keeping the story connected to the same central thread.
