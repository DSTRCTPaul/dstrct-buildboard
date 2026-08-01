// Small in-process limiter. One instance runs this site, so a Map is enough — if it ever scales
// horizontally this moves to the database.
const hits = new Map<string, number[]>();

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

export function tooManyFrom(key: string, now: number): boolean {
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  // Keep the map from growing forever on a long-running instance.
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return false;
}

// Truncated so a reaction never carries a full address around.
export function clientKey(headers: Headers): string {
  const fwd = headers.get("x-forwarded-for") ?? "";
  const ip = fwd.split(",")[0]?.trim() || headers.get("x-real-ip") || "unknown";
  const parts = ip.split(".");
  return parts.length === 4 ? `${parts[0]}.${parts[1]}.${parts[2]}.x` : ip.slice(0, 24);
}
