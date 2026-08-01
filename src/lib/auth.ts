import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "bb_admin";

function secret(): string {
  const s = process.env.SESSION_SECRET;
  // Fail closed: without a secret the cookie would be forgeable, so admin simply stays shut.
  if (!s || s.length < 8) throw new Error("SESSION_SECRET is not set");
  return s;
}

export function adminToken(): string {
  return createHmac("sha256", secret()).update("admin").digest("hex");
}

export function passwordMatches(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD ?? "";
  if (!expected) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  // Compare in constant time; different lengths short-circuit but leak only the length.
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function isAdmin(): Promise<boolean> {
  try {
    const jar = await cookies();
    const got = jar.get(ADMIN_COOKIE)?.value;
    if (!got) return false;
    const want = adminToken();
    const a = Buffer.from(got);
    const b = Buffer.from(want);
    return a.length === b.length && timingSafeEqual(a, b);
  } catch {
    return false;
  }
}
