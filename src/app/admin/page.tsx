import Link from "next/link";
import { AdminList, type AdminComment } from "@/components/AdminList";
import { Prism } from "@/components/Prism";
import { getProject } from "@/content/projects";
import { isAdmin } from "@/lib/auth";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";
export const metadata = { title: "Admin · DSTRCT Build Board", robots: { index: false, follow: false } };

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ e?: string }> }) {
  const { e } = await searchParams;
  const ok = await isAdmin();

  return (
    <>
      <div className="mesh" />
      <div className="gridlines" />

      <div className="adminwrap">
        <header className="topbar" style={{ padding: 0 }}>
          <Link href="/" className="wordmark">
            <Prism />
            DSTRCT · Admin
          </Link>
        </header>

        {!ok ? (
          <div className="panel" style={{ marginTop: "2.5rem", maxWidth: 420 }}>
            <div className="eyebrow">restricted</div>
            <p style={{ color: "var(--ink-2)", lineHeight: 1.6, fontSize: "0.95rem" }}>
              Log in to hide or delete replies.
            </p>
            <form method="post" action="/api/admin/login">
              <label className="field">
                <span>password</span>
                <input type="password" name="password" autoFocus required />
              </label>
              <div style={{ marginTop: "1.2rem" }}>
                <button className="btn" type="submit">
                  log in
                </button>
              </div>
            </form>
            {e && (
              <p style={{ color: "#fb7185", marginTop: "1rem", fontSize: "0.85rem" }}>
                {e === "slow" ? "Too many attempts. Wait a moment." : "That password is not right."}
              </p>
            )}
          </div>
        ) : (
          <Panel />
        )}
      </div>
    </>
  );
}

async function Panel() {
  let rows: AdminComment[] = [];
  let failed = false;
  try {
    const found = await prisma.comment.findMany({ orderBy: { createdAt: "desc" }, take: 500 });
    rows = found.map((r) => ({
      id: r.id,
      project: r.project,
      projectName: getProject(r.project)?.name ?? r.project,
      author: r.author,
      body: r.body,
      hidden: r.hidden,
      createdAt: r.createdAt.toISOString(),
    }));
  } catch {
    failed = true;
  }

  if (failed) {
    return (
      <div className="panel" style={{ marginTop: "2.5rem" }}>
        <div className="eyebrow">database</div>
        <p style={{ color: "var(--ink-2)" }}>No connection to the database.</p>
      </div>
    );
  }

  return <AdminList initial={rows} />;
}
