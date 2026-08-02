"use client";

import { useCallback, useEffect, useState } from "react";

export interface Shot {
  file: string; // filename inside /public/shots
  label: string;
  kind?: "desktop" | "phone";
  note?: string;
}

export function Gallery({ shots }: { shots: Shot[] }) {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const current = shots[i];

  const step = useCallback(
    (d: number) => setI((cur) => (cur + d + shots.length) % shots.length),
    [shots.length]
  );

  // While the lightbox is open the deck must not scroll underneath, so it parks a flag
  // on the body that Deck's key handler checks.
  useEffect(() => {
    if (!zoom) return;
    document.body.dataset.lightbox = "1";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setZoom(false);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      delete document.body.dataset.lightbox;
      window.removeEventListener("keydown", onKey);
    };
  }, [zoom, step]);

  return (
    <div className="gal">
      <figure className={`gal-hero${current.kind === "phone" ? " phone" : ""}`}>
        <figcaption className="pv-bar">
          <i />
          <i />
          <i />
          <span>{current.label}</span>
        </figcaption>
        <button className="gal-open" onClick={() => setZoom(true)} aria-label="Enlarge">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/shots/${current.file}`} alt={current.label} width={1600} height={1000} />
          <span className="gal-zoomhint">click to enlarge</span>
        </button>
      </figure>

      {shots.length > 1 && (
        <div className="gal-thumbs">
          {shots.map((s, n) => (
            <button
              key={s.file}
              className={`gal-thumb${n === i ? " on" : ""}`}
              onClick={() => setI(n)}
              aria-label={s.label}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/shots/${s.file}`} alt="" loading="lazy" width={240} height={150} />
              <span className="lbl">{s.label}</span>
            </button>
          ))}
        </div>
      )}

      {current.note && <p className="pv-cap">{current.note}</p>}

      {zoom && (
        <div className="gal-lightbox" onClick={() => setZoom(false)} role="dialog" aria-modal="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/shots/${current.file}`} alt={current.label} />
          <div className="gal-lbbar">
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label="Previous"
            >
              ←
            </button>
            <span>{current.label}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label="Next"
            >
              →
            </button>
            <button onClick={() => setZoom(false)} aria-label="Close">
              esc
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
