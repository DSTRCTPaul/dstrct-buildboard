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
          <div className="herotext">
            <div className="eyebrow">DSTRCT · built in public</div>
            <h1>
              Everything I build, <span className="grad">in the open</span>.
            </h1>
            <p>
              Fourteen products: the real screens, the stack underneath, and the parts that are still missing. Nothing
              is polished away.
            </p>
            <p className="ask">
              Read one. If you would want to help, or you would have built it differently, say so at the end of it.
              That is worth more to me than a compliment.
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
          </div>

          <div className="heroshot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/shots/hero.jpg" alt="Screens from several of the products, running" width={2800} height={1760} />
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
