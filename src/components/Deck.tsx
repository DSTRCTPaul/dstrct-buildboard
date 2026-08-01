"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CountUp } from "@/components/CountUp";
import { Rich } from "@/components/Rich";
import { Comments, type PublicComment } from "@/components/Comments";
import { STATUS_LABEL, type Project } from "@/content/projects";

export function Deck({
  project: p,
  comments,
  neighbours,
}: {
  project: Project;
  comments: PublicComment[];
  neighbours: { slug: string; name: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(1);

  // Reveal on entry, track which slide is in view, and drive the progress bar + dots.
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const slides = Array.from(root.querySelectorAll<HTMLElement>(".slide"));
    setTotal(slides.length);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting || e.intersectionRatio <= 0.5) continue;
          e.target.querySelectorAll(".reveal").forEach((r) => r.classList.add("in"));
          setIndex(slides.indexOf(e.target as HTMLElement));
        }
      },
      { root, threshold: [0.5, 0.75] }
    );
    slides.forEach((s) => io.observe(s));
    slides[0]?.querySelectorAll(".reveal").forEach((r) => r.classList.add("in"));

    return () => io.disconnect();
  }, []);

  function goTo(n: number) {
    const root = ref.current;
    if (!root) return;
    const slides = Array.from(root.querySelectorAll<HTMLElement>(".slide"));
    const target = slides[Math.max(0, Math.min(slides.length - 1, n))];
    target?.scrollIntoView({ behavior: "smooth" });
  }

  // Arrow keys move through the deck, unless the visitor is typing a reaction.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goTo(index + 1);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goTo(index - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="deck"
      ref={ref}
      style={{ ["--cyan" as string]: p.accent.cyan, ["--blue" as string]: p.accent.blue }}
    >
      <div className="mesh" />
      <div className="gridlines" />

      <div className="deck-progress" style={{ width: `${((index + 1) / total) * 100}%` }} />
      <Link href="/" className="deck-back">
        ← alle projecten
      </Link>
      <div className="deck-dots">
        {Array.from({ length: total }, (_, i) => (
          <button key={i} className={i === index ? "on" : ""} aria-label={`Slide ${i + 1}`} onClick={() => goTo(i)} />
        ))}
      </div>
      <div className="deck-counter">
        <b>{pad(index + 1)}</b> / {pad(total)}
      </div>
      <div className="deck-brand">DSTRCT · Build Board</div>

      {/* 01 cover */}
      <section className="slide cover">
        <div className="chips reveal">
          <div className="bigchip">{p.monogram}</div>
          <span className="x">×</span>
          <div className="b">{p.family}</div>
        </div>
        <div className="eyebrow reveal d1">{p.name}</div>
        <h1 className="reveal d2">
          <Rich text={p.tagline} as="grad" />
        </h1>
        <div className="statusline reveal d3">
          <span className={`dot ${p.status}`} /> {STATUS_LABEL[p.status]} · {p.statusNote}
        </div>
        <div className="scrollhint">scroll ↓ of gebruik →</div>
      </section>

      {/* 02 stats */}
      {p.stats.length > 0 && (
        <section className="slide">
          <div className="eyebrow">in cijfers</div>
          <h2 className="reveal">
            Waar dit <span className="g">staat</span>
          </h2>
          <div className="stats reveal d1">
            {p.stats.map((s, i) => (
              <div key={s.l}>
                <div className={`n${i % 2 ? " blue" : ""}`}>
                  <CountUp raw={s.n} />
                </div>
                <div className="l">{s.l}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 03 het idee */}
      <section className="slide">
        <div className="eyebrow">01 · het idee</div>
        <h2 className="reveal">
          <Rich text={p.idea.title} as="grad" />
        </h2>
        <p className="lead reveal d1">
          <Rich text={p.idea.lead} />
        </p>
      </section>

      {/* 04 waarom */}
      <section className="slide">
        <div className="eyebrow blue">02 · waarom</div>
        <h2 className="reveal">
          <Rich text={p.why.title} as="grad" />
        </h2>
        <p className="lead reveal d1">
          <Rich text={p.why.lead} />
        </p>
      </section>

      {/* 05 quote */}
      {p.why.quote && (
        <section className="slide quote">
          <div className="eyebrow blue">in mijn woorden</div>
          <div className="mark reveal">&quot;</div>
          <h2 className="reveal d1">
            <span className="g">{p.why.quote}</span>
          </h2>
          <cite className="reveal d2">Paul · {p.name}</cite>
        </section>
      )}

      {/* 06 de stack */}
      <section className="slide tall">
        <div className="eyebrow">03 · de stack</div>
        <h2 className="reveal">
          <Rich text={p.stack.title} as="grad" />
        </h2>
        {p.stack.lead && (
          <p className="lead reveal d1">
            <Rich text={p.stack.lead} />
          </p>
        )}
        <div className="stackrows reveal d1">
          {p.stack.items.map((it) => (
            <div className="srow" key={it.label}>
              <div className="k">{it.label}</div>
              <div className="v">{it.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 07 hoe ik het bouwde */}
      <section className="slide tall">
        <div className="eyebrow">04 · hoe ik het bouwde</div>
        <h2 className="reveal">
          <Rich text={p.build.title} as="grad" />
        </h2>
        {p.build.lead && (
          <p className="lead reveal d1">
            <Rich text={p.build.lead} />
          </p>
        )}
        <ol className="checklist reveal d1">
          {p.build.steps.map((s) => (
            <li key={s.text}>
              <div>
                <div className="ct">
                  <Rich text={s.text} />
                </div>
                {s.sub && (
                  <div className="cs">
                    <Rich text={s.sub} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 08 wat er nog staat */}
      <section className="slide tall">
        <div className="eyebrow blue">05 · wat er nog staat</div>
        <h2 className="reveal">
          <Rich text={p.open.title} as="grad" />
        </h2>
        {p.open.lead && (
          <p className="lead reveal d1">
            <Rich text={p.open.lead} />
          </p>
        )}
        <ul className="openlist reveal d1">
          {p.open.items.map((s) => (
            <li key={s.text}>
              <div>
                <div className="ct">
                  <Rich text={s.text} />
                </div>
                {s.sub && (
                  <div className="cs">
                    <Rich text={s.sub} />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 09 feedback */}
      <section className="slide tall">
        <div className="eyebrow">06 · jouw feedback</div>
        <h2 className="reveal">
          Wat vind jij van <span className="g">{p.name}</span>?
        </h2>
        <p className="lead reveal d1">
          Zeg het gewoon. Kritiek is nuttiger dan een compliment: wat mis je, wat zou jij anders doen, wat snap je niet?
        </p>

        <Comments slug={p.slug} initial={comments} />

        <div className="decknav">
          {neighbours.map((n) => (
            <Link key={n.slug} href={`/p/${n.slug}`}>
              {n.name} →
            </Link>
          ))}
          <Link href="/">alle projecten</Link>
        </div>

        {p.url && (
          <div className="decknav">
            <a href={p.url} target="_blank" rel="noreferrer noopener">
              bekijk het live ↗
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
