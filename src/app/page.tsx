import { Board } from "@/components/Board";
import { Prism } from "@/components/Prism";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PROJECTS } from "@/content/projects";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

async function commentCounts(): Promise<Record<string, number>> {
  try {
    const rows = await prisma.comment.groupBy({
      by: ["project"],
      where: { hidden: false },
      _count: { _all: true },
    });
    return Object.fromEntries(rows.map((r) => [r.project, r._count._all]));
  } catch {
    // The board is the point; a database hiccup must not take the page down.
    return {};
  }
}

export default async function Home() {
  const counts = await commentCounts();
  const live = PROJECTS.filter((p) => p.status === "live").length;
  const building = PROJECTS.filter((p) => p.status === "built" || p.status === "building").length;

  return (
    <>
      <div className="mesh" />
      <div className="gridlines" />

      <div className="shell">
        <header className="topbar">
          <div className="wordmark">
            <Prism />
            DSTRCT · Build Board
          </div>
          <ThemeToggle />
        </header>

        <section className="hero">
          <div className="eyebrow">what I am building</div>
          <h1>
            One <span className="grad">block</span> per project. Click it and you get the whole story.
          </h1>
          <p>
            This is what I built across these sessions: own products, brains, client work and explorations. Per project
            the idea, why it exists, the stack, how I built it and what is still standing. At the end of every
            presentation you can leave a reply.
          </p>

          <div className="herostats">
            <div>
              <div className="n">{PROJECTS.length}</div>
              <div className="l">projects</div>
            </div>
            <div>
              <div className="n">{live}</div>
              <div className="l">live</div>
            </div>
            <div>
              <div className="n">{building}</div>
              <div className="l">built or building</div>
            </div>
          </div>
        </section>

        <Board counts={counts} />

        <footer className="foot">
          <span>DSTRCT · built across the 2026 sessions</span>
          <a href="/admin">admin</a>
        </footer>
      </div>
    </>
  );
}
