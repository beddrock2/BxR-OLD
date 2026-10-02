# Adding Games

Catalog version 1.0.1.

The random-game reel lasts 8 seconds by default. Change `window.GAME_ROLL_DURATION_MS` at the top of `game-catalog.js` to any positive duration in milliseconds; the reel and reveal timing use the same value.

Edit `game-catalog.js` and add one object to `window.DOWNLOAD_GAME_CATALOG`:

```js
{
  "name": "Game Name",
  "steamUrl": "https://store.steampowered.com/app/123456/",
  "genre": "Action RPG",
  "description": "Short text shown in the game card search and details."
}
```

`name` and `steamUrl` are required. The app ID is read from either a Steam store URL (`/app/123456/`) or an app-details API URL (`?appids=123456`). That ID drives the card artwork and Steam details request. `genre` and `description` are optional. Keep entries in the order you want for the catalog and the Recently Added filter.

After editing the file, reload the page. No changes to the bundled JavaScript are needed for ordinary game additions.
