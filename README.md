# Hammity Pulse Presences

Community-maintained Rich Presence integrations for **Hammity Pulse**.

This repository contains presence definitions for websites, games, and desktop applications. The Hammity Pulse runtime itself is maintained separately.

## What is a Presence?

A Presence tells Hammity Pulse how to recognise supported activity and how that activity should be displayed in Hammity.

Examples include:

- Watching a video on a supported website
- Playing a supported game
- Using a supported desktop application
- Exposing richer game information when an integration makes it available

## Repository layout

```text
presences/
├── websites/
├── games/
└── apps/

examples/
└── example-presence/

schemas/
└── presence.schema.json
```

## Creating a Presence

1. Fork this repository.
2. Copy `examples/example-presence` into the appropriate folder under `presences/`.
3. Give the Presence a unique lowercase ID.
4. Update `metadata.json`.
5. Implement the Presence logic in `presence.js`.
6. Test your changes with Hammity Pulse.
7. Open a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution rules.

## Presence types

- **Website** — browser-based services and websites.
- **Game** — games detected or enhanced by Hammity Pulse.
- **App** — desktop applications.

The format is intentionally small while Hammity Pulse is in early development. The schema may expand as the runtime gains additional capabilities.

## Security

Community Presences run through the Hammity Pulse Presence API. Presences should not rely on unrestricted filesystem, process execution, or arbitrary native access.

Do not submit code intended to collect credentials, private data, browser history unrelated to the active Presence, or other information that is not required to provide Rich Presence functionality.

## License

This repository is licensed under the [Mozilla Public License 2.0](LICENSE).

Hammity, Hammity Pulse, Hamster Systems, and their associated branding are not granted for unrestricted use by this license.
