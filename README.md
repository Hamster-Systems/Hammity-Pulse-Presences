# Hammity Pulse Presences

Community-maintained Rich Presence integrations for **Hammity Pulse**.

This repository is the public source of truth for website, game, and desktop-app support in Hammity Pulse. The private Hammity Pulse application provides the runtime; individual application support belongs here.

## What is a Presence?

A Presence tells Hammity Pulse:

- how to detect an application or game;
- how the activity should be displayed;
- which icon/assets belong to it;
- its priority when more than one supported application is running.

## Repository layout

```text
registry.json

presences/
├── websites/
├── games/
│   └── example-game/
│       ├── metadata.json
│       └── icon.png
└── apps/
    └── example-app/
        ├── metadata.json
        └── icon.png

schemas/
└── presence.schema.json
```

## Creating a Presence

1. Fork this repository.
2. Create a folder under `presences/apps`, `presences/games`, or `presences/websites`.
3. Add `metadata.json`.
4. Add an `icon.png` or another supported image referenced by the metadata.
5. Add the metadata path to `registry.json`.
6. Test the Presence with Hammity Pulse.
7. Open a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full contribution rules.

## Example

```json
{
  "$schema": "../../../schemas/presence.schema.json",
  "id": "example-app",
  "name": "Example App",
  "type": "app",
  "version": "1.0.0",
  "description": "Example Hammity Pulse Presence.",
  "priority": 100,
  "detection": {
    "processes": [
      "example.exe"
    ]
  },
  "activity": {
    "type": "using",
    "name": "Example App",
    "details": "Using Example App",
    "state": "Detected by Hammity Pulse",
    "showElapsed": true,
    "assets": {
      "icon": "icon.png",
      "largeText": "Example App"
    }
  }
}
```

## Activity types

Currently supported activity types are:

- `playing`
- `watching`
- `listening`
- `using`

## Detection

Desktop/game detection currently uses process names. The public schema already reserves room for richer window-title and website-domain detection as the Pulse runtime expands.

## Assets

Assets live beside the Presence metadata.

```text
presences/apps/example-app/
├── metadata.json
└── icon.png
```

Do not add copyrighted or trademarked artwork unless you have the right to redistribute it. Neutral/community-created artwork is preferred when redistribution rights are unclear.

## Rich Presences

The first runtime uses declarative metadata rather than executing arbitrary community JavaScript. This is deliberate: community Presences should not receive unrestricted Node.js or filesystem access.

Future dynamic Presence support will use a controlled Hammity Pulse API.

## License

This repository is licensed under the [Mozilla Public License 2.0](LICENSE).

Hammity, Hammity Pulse, Hamster Systems, and their associated branding are not granted for unrestricted use by this license.
