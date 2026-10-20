# Rainbow Six Siege

Windows process-based Rich Presence with optional foreground-window awareness for **Rainbow Six Siege**, including **Rainbow Six Siege X**.

## Detection
Hammity Pulse detects the actual game process (not just the Ubisoft Connect, Steam, or anti-cheat launcher):

- `RainbowSix.exe` — standard game executable (DX11/DX12 depending on installation).
- `RainbowSix_DX12.exe` — alternative DirectX 12 executable on installations that use it.
- `RainbowSix_Vulkan.exe` — legacy compatibility for older Siege installations (Vulkan is no longer supported by the current game).

## Activity shown
- Playing Rainbow Six Siege
- Game window active, if Pulse can verify Siege is the foreground window
- Game in background, if another window is verified as active
- Game running, if foreground state is unavailable or Pulse is older
- Elapsed game time
- Original, redistribution-safe neutral number-six icon

**This is window focus, not in-game telemetry.** It cannot tell whether you're in the main menu or a live match. Map, match mode, score, operator, rank and party details are not automatically available from Windows process/window information. Never label a user as in a match without a verified source.

Hammity Pulse v0.1.2+ provides the optional `r6.foreground` and `r6.background` context from Windows's active-window process, with no memory reading, anti-cheat interaction, screen capture, or account credentials. Older Pulse builds still show the basic fallback state.

### Possible future offline replay analysis

Ubisoft stores recorded rounds in the local MatchReplay folder. Community tools such as [siege-dissect](https://github.com/lumina-r6/siege-dissect) can parse map, game mode, scores and related **recorded match** data. That data is not a guaranteed live feed. A future optional read-only post-match integration would need version-compatibility checks and must never present stale replay information as current.

## Windows test checklist
1. Start Hammity Pulse and ensure community Presences are enabled.
2. Launch Rainbow Six Siege from Ubisoft Connect or Steam.
3. Once the game executable is running, check for the Playing Rainbow Six Siege activity and elapsed timer.
4. Switch to another application and back; Pulse v0.1.2+ should show the foreground/background states when Windows reports a reliable active window.
5. Close the game and verify the activity clears.
6. If detection fails, use **Task Manager → Details** to inspect the real Siege executable name and report it so the process list can be adjusted.

The icon is an original generic numeral design, not Ubisoft artwork.
