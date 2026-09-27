# Contributing to Hammity Pulse Presences

Thanks for helping expand Hammity Pulse support.

Application-specific support belongs in this public repository. The private Hammity Pulse runtime should remain generic.

## Presence structure

Choose the appropriate category:

```text
presences/websites/<presence-id>/
presences/games/<presence-id>/
presences/apps/<presence-id>/
```

A basic Presence contains:

```text
<presence-id>/
├── metadata.json
└── icon.png
```

Then add the metadata path to `registry.json`.

## Metadata

Metadata must validate against `schemas/presence.schema.json`.

Example:

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

## Priority

If multiple supported processes are running, the Presence with the higher `priority` is selected first.

Use priority to express specificity, not personal importance. A game should generally outrank a generic utility that is commonly left open in the background.

## Assets

Presence artwork must be redistributable.

Do not submit copyrighted logos, game artwork, screenshots, or trademark assets unless the repository is legally allowed to redistribute them.

Neutral original artwork is acceptable.

## Privacy and security

A Presence should only request data needed for Rich Presence.

Do not design Presence logic around:

- credentials or authentication tokens;
- unrelated browser history;
- private documents;
- unrestricted filesystem access;
- arbitrary command execution.

Dynamic Presences will use controlled Hammity Pulse APIs rather than unrestricted Node.js execution.

## Pull requests

Keep each pull request focused on one Presence or one related format change.

For new Presences:

- use a clear title such as `feat: add Example App presence`;
- explain exactly how it is detected;
- mention how you tested it;
- include screenshots where useful;
- update `registry.json`;
- ensure metadata validates against the current schema;
- ensure included assets may legally be redistributed.

By submitting a contribution, you agree that your contribution is licensed under the Mozilla Public License 2.0.

## Format changes

Hammity Pulse is still early in development. Open an issue before making a major format change so the public schema and private runtime remain compatible.
