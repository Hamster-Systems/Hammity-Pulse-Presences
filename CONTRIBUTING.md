# Contributing to Hammity Pulse Presences

Thanks for helping expand Hammity Pulse support.

The goal is to keep Presence integrations small, readable, safe, and easy to maintain.

## Before contributing

A Presence should:

- Represent a real website, game, or desktop application.
- Use a unique lowercase ID.
- Only collect information needed to build the displayed activity.
- Avoid secrets, credentials, tokens, private files, and unrelated browsing information.
- Fail gracefully when the target application or page is unavailable.

## Folder structure

Choose the appropriate category:

```text
presences/websites/<presence-id>/
presences/games/<presence-id>/
presences/apps/<presence-id>/
```

A Presence currently contains:

```text
<presence-id>/
├── metadata.json
└── presence.js
```

Assets may be added later where required by the runtime.

## metadata.json

Metadata must validate against `schemas/presence.schema.json`.

Example:

```json
{
  "$schema": "../../../schemas/presence.schema.json",
  "id": "example",
  "name": "Example",
  "type": "app",
  "version": "1.0.0",
  "description": "Example Hammity Pulse Presence.",
  "entry": "presence.js"
}
```

## Presence logic

Presence scripts should export a single asynchronous function.

```js
export default async function presence(Hammity) {
  return {
    details: "Using Example",
    state: "Example activity"
  };
}
```

The public Presence API is intentionally limited. Do not depend on Node.js internals or unrestricted native APIs.

## Pull requests

Keep each pull request focused on one Presence or one related change.

For new Presences:

- Use a clear title such as `feat: add YouTube presence`.
- Explain what is detected.
- Mention how you tested it.
- Include screenshots where useful.
- Do not include copyrighted assets unless you have permission to redistribute them.

By submitting a contribution, you agree that your contribution is licensed under the Mozilla Public License 2.0.

## Changes to the format

Hammity Pulse is still early in development. If you want to change the Presence format itself, open an issue first so the runtime and public schema can stay compatible.
