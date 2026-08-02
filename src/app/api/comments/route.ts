import { NextResponse } from "next/server";
import { getProject } from "@/content/projects";
import { prisma } from "@/lib/db";
import { clientKey, tooManyFrom } from "@/lib/rate-limit";

const MAX_AUTHOR = 60;
const MAX_BODY = 1200;

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { project, author, body, website } = (payload ?? {}) as Record<string, unknown>;

  // Bots fill every field they find; a human never sees this one.
  if (typeof website === "string" && website.trim() !== "") {
    return NextResponse.json({ ok: true, comment: null });
  }

  if (typeof project !== "string" || !getProject(project)) {
    return NextResponse.json({ error: "Unknown project." }, { status: 400 });
  }
  if (typeof author !== "string" || typeof body !== "string") {
    return NextResponse.json({ error: "Name and reply are required." }, { status: 400 });
  }

  const cleanAuthor = author.trim().slice(0, MAX_AUTHOR);
  const cleanBody = body.trim().slice(0, MAX_BODY);
  if (!cleanAuthor || !cleanBody) {
    return NextResponse.json({ error: "Name and reply are required." }, { status: 400 });
  }

  const key = clientKey(req.headers);
  if (tooManyFrom(key, Date.now())) {
    return NextResponse.json({ error: "Easy there. Try again in a few minutes." }, { status: 429 });
  }

  try {
    const saved = await prisma.comment.create({
      data: { project, author: cleanAuthor, body: cleanBody, ip: key },
    });
    return NextResponse.json({
      ok: true,
      comment: {
        id: saved.id,
        author: saved.author,
        body: saved.body,
        createdAt: saved.createdAt.toISOString(),
      },
    });
  } catch {
    return NextResponse.json({ error: "Saving failed. Try again in a moment." }, { status: 500 });
  }
}
