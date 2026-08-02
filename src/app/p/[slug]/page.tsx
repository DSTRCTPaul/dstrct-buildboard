import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Deck } from "@/components/Deck";
import type { PublicComment } from "@/components/Comments";
import { PROJECTS, getProject } from "@/content/projects";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Not found · DSTRCT Build Board" };
  return { title: `${p.name} · DSTRCT Build Board`, description: p.tagline };
}

async function loadComments(slug: string): Promise<PublicComment[]> {
  try {
    const rows = await prisma.comment.findMany({
      where: { project: slug, hidden: false },
      orderBy: { createdAt: "desc" },
      take: 200,
    });
    return rows.map((r) => ({ id: r.id, author: r.author, body: r.body, createdAt: r.createdAt.toISOString() }));
  } catch {
    // A deck that loads without its reactions still beats an error page.
    return [];
  }
}

export default async function ProjectDeck({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const comments = await loadComments(slug);

  const i = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(i + 1) % PROJECTS.length];
  const neighbours = [{ slug: next.slug, name: next.name }];

  return <Deck project={project} comments={comments} neighbours={neighbours} />;
}
