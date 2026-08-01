"use client";

import { useState } from "react";

export interface AdminComment {
  id: string;
  project: string;
  projectName: string;
  author: string;
  body: string;
  hidden: boolean;
  createdAt: string;
}

const FMT = new Intl.DateTimeFormat("nl-NL", {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Amsterdam",
});

export function AdminList({ initial }: { initial: AdminComment[] }) {
  const [rows, setRows] = useState(initial);
  const [busy, setBusy] = useState<string | null>(null);

  async function toggle(c: AdminComment) {
    setBusy(c.id);
    const res = await fetch("/api/admin/comments", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: c.id, hidden: !c.hidden }),
    });
    if (res.ok) setRows((cur) => cur.map((r) => (r.id === c.id ? { ...r, hidden: !c.hidden } : r)));
    setBusy(null);
  }

  async function remove(c: AdminComment) {
    if (!confirm(`Reactie van ${c.author} definitief verwijderen?`)) return;
    setBusy(c.id);
    const res = await fetch("/api/admin/comments", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ id: c.id }),
    });
    if (res.ok) setRows((cur) => cur.filter((r) => r.id !== c.id));
    setBusy(null);
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    location.href = "/";
  }

  const visible = rows.filter((r) => !r.hidden).length;

  return (
    <div style={{ marginTop: "2.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
        <div>
          <div className="eyebrow">reacties</div>
          <div style={{ fontSize: "1.6rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
            {visible} zichtbaar · {rows.length - visible} verborgen
          </div>
        </div>
        <button className="btn ghost" onClick={logout}>
          uitloggen
        </button>
      </div>

      <div className="panel" style={{ marginTop: "1.6rem" }}>
        {rows.length === 0 ? (
          <p style={{ color: "var(--ink-3)", fontFamily: "var(--mono)", fontSize: "0.8rem" }}>
            Nog geen reacties binnengekomen.
          </p>
        ) : (
          rows.map((c) => (
            <div className={`adminrow${c.hidden ? " hidden" : ""}`} key={c.id}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="meta">
                  {c.projectName} · {c.author} · {FMT.format(new Date(c.createdAt))}
                  {c.hidden ? " · verborgen" : ""}
                </div>
                <div className="body">{c.body}</div>
              </div>
              <div className="acts">
                <button className="btn ghost" disabled={busy === c.id} onClick={() => toggle(c)}>
                  {c.hidden ? "tonen" : "verbergen"}
                </button>
                <button className="btn ghost" disabled={busy === c.id} onClick={() => remove(c)}>
                  wissen
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
