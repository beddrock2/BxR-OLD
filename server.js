const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
const allowedOrigin = "http://127.0.0.1:5505";
const rateLimitWindowMs = 60 * 1000;
const rateLimitMax = 30;
const requestCounts = new Map();

app.use(cors({ origin: allowedOrigin }));

async function fetchSteamJson(url, res) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "BXR-Hub-Steam-Proxy/1.0" },
      signal: controller.signal
    });
    if (!response.ok) {
      return res.status(502).json({ error: "Unable to retrieve Steam details" });
    }
    return res.json(await response.json());
  } catch {
    return res.status(502).json({ error: "Unable to retrieve Steam details" });
  } finally {
    clearTimeout(timeout);
  }
}

function validateAppId(req, res, next) {
  if (!/^\d+$/.test(req.params.appId)) {
    return res.status(400).json({ error: "Invalid Steam app ID" });
  }
  return next();
}

function rateLimit(req, res, next) {
  const now = Date.now();
  const key = req.ip;
  const entry = requestCounts.get(key);

  if (!entry || now - entry.startedAt >= rateLimitWindowMs) {
    requestCounts.set(key, { startedAt: now, count: 1 });
    return next();
  }

  if (entry.count >= rateLimitMax) {
    return res.status(429).json({ error: "Too many requests. Please try again later." });
  }

  entry.count += 1;
  return next();
}

app.get("/api/steam/:appId", rateLimit, validateAppId, async (req, res) => {
  const appId = req.params.appId;
  return fetchSteamJson(`https://store.steampowered.com/api/appdetails?appids=${appId}&l=english`, res);
});

app.get("/api/steam/reviews/:appId", rateLimit, validateAppId, async (req, res) => {
  const appId = req.params.appId;
  return fetchSteamJson(`https://store.steampowered.com/appreviews/${appId}?json=1`, res);
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Steam proxy listening on http://localhost:${port}`);
});
