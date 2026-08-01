import { NextResponse } from "next/server";
import { ADMIN_COOKIE, adminToken, passwordMatches } from "@/lib/auth";
import { clientKey, tooManyFrom } from "@/lib/rate-limit";

export async function POST(req: Request) {
  const form = await req.formData();
  const password = String(form.get("password") ?? "");

  // Same limiter as the comment form: five tries per window, then wait.
  if (tooManyFrom(`login:${clientKey(req.headers)}`, Date.now())) {
    return NextResponse.redirect(new URL("/admin?e=slow", req.url), 303);
  }

  if (!passwordMatches(password)) {
    return NextResponse.redirect(new URL("/admin?e=1", req.url), 303);
  }

  const res = NextResponse.redirect(new URL("/admin", req.url), 303);
  res.cookies.set(ADMIN_COOKIE, adminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}

export async function DELETE(req: Request) {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
