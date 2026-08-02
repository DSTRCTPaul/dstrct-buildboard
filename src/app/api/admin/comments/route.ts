import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/auth";
import { prisma } from "@/lib/db";

// Hide or restore a reaction. Hiding keeps the row, so a mistake is reversible.
export async function PATCH(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "No access." }, { status: 401 });

  const { id, hidden } = (await req.json().catch(() => ({}))) as { id?: string; hidden?: boolean };
  if (typeof id !== "string" || typeof hidden !== "boolean") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  await prisma.comment.update({ where: { id }, data: { hidden } });
  return NextResponse.json({ ok: true });
}

// Permanent delete, for the reactions that should not exist at all.
export async function DELETE(req: Request) {
  if (!(await isAdmin())) return NextResponse.json({ error: "No access." }, { status: 401 });

  const { id } = (await req.json().catch(() => ({}))) as { id?: string };
  if (typeof id !== "string") return NextResponse.json({ error: "Invalid request." }, { status: 400 });

  await prisma.comment.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
