"use client";

import Link from "next/link";
import { useState } from "react";
import { Rich } from "@/components/Rich";
import { PROJECTS, STATUS_LABEL, type Project } from "@/content/projects";

const FILTERS = ["everything", "The OS", "Brains", "Own products", "Client work", "Exploration"];

export function Board({ counts }: { counts: Record<string, number> }) {
  const [filter, setFilter] = useState("everything");
  const shown = filter === "everything" ? PROJECTS : PROJECTS.filter((p) => p.family === filter);

  return (
    <>
      <div className="filters">
        {FILTERS.map((f) => (
          <button key={f} className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div className="board">
        {shown.map((p) => (
          <Card key={p.slug} project={p} count={counts[p.slug] ?? 0} />
        ))}
      </div>
    </>
  );
}

function Card({ project: p, count }: { project: Project; count: number }) {
  return (
    <Link
      href={`/p/${p.slug}`}
      className="card"
      style={{ ["--pa" as string]: p.accent.cyan, ["--pb" as string]: p.accent.blue }}
    >
      <div className="cardtop">
        <div className="mono-chip">{p.monogram}</div>
        <div>
          <div className="cardname">{p.name}</div>
          <div className="cardfam">{p.family}</div>
        </div>
      </div>

      <p className="cardline">
        <Rich text={p.tagline} />
      </p>

      <div className="status">
        <span className={`dot ${p.status}`} />
        {STATUS_LABEL[p.status]} · {p.statusNote}
      </div>

      <div className="cardfoot">
        <span className="open">
          presentation
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M5 12h13M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="count">
          {count} {count === 1 ? "reply" : "replies"}
        </span>
      </div>
    </Link>
  );
}
