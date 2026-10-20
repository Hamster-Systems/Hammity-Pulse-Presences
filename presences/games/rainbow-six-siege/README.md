# Rainbow Six Siege

Basic Windows process-based Rich Presence for **Rainbow Six Siege**, including **Rainbow Six Siege X**.

## Detection
Hammity Pulse detects the actual game process (not just the Ubisoft Connect, Steam, or anti-cheat launcher):

- `RainbowSix.exe` — standard game executable (DX11/DX12 depending on installation).
- `RainbowSix_DX12.exe` — alternative DirectX 12 executable on installations that use it.
- `RainbowSix_Vulkan.exe` — legacy compatibility for older Siege installations (Vulkan is no longer supported by the current game).

## Activity shown
- Playing Rainbow Six Siege
- Game running
- Elapsed game time
- Original, redistribution-safe neutral number-six icon

This Presence **does not** report map, match mode, score, operator, rank, or party details. The public Hammity Pulse metadata/runtime cannot obtain those details from Siege. No game memory reading, anti-cheat interactions, or account credentials are required.

## Windows test checklist
1. Start Hammity Pulse and ensure community Presences are enabled.
2. Launch Rainbow Six Siege from Ubisoft Connect or Steam.
3. Once the game executable is running, check for the Playing Rainbow Six Siege activity and elapsed timer.
4. Close the game and verify the activity clears.
5. If detection fails, use **Task Manager → Details** to inspect the real Siege executable name and report it so the process list can be adjusted.

The icon is an original generic numeral design, not Ubisoft artwork.
