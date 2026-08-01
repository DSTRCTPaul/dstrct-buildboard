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
  const building = PROJECTS.filter((p) => p.status === "gebouwd" || p.status === "aanbouw").length;

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
          <div className="eyebrow">wat ik hier bouw</div>
          <h1>
            Elk project een <span className="grad">blok</span>. Klik en je krijgt het hele verhaal.
          </h1>
          <p>
            Dit is alles wat ik in deze sessies heb gebouwd: eigen producten, breinen, klantwerk en verkenningen. Per
            project het idee, waarom het bestaat, de stack, hoe ik het bouwde en wat er nog staat. Onderaan elke
            presentatie kun je reageren.
          </p>

          <div className="herostats">
            <div>
              <div className="n">{PROJECTS.length}</div>
              <div className="l">projecten</div>
            </div>
            <div>
              <div className="n">{live}</div>
              <div className="l">live</div>
            </div>
            <div>
              <div className="n">{building}</div>
              <div className="l">gebouwd of in aanbouw</div>
            </div>
          </div>
        </section>

        <Board counts={counts} />

        <footer className="foot">
          <span>DSTRCT · gebouwd in de sessies van 2026</span>
          <a href="/admin">beheer</a>
        </footer>
      </div>
    </>
  );
}
