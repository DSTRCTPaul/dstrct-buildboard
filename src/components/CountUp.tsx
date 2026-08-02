"use client";

import { useEffect, useRef, useState } from "react";

// A stat like "11,400" counts up and "0.85" keeps its decimals; something like "~28" or "1-10"
// is shown exactly as written. Never reformat a value into something the source did not say.
export function parseStat(raw: string): { value: number; prefix: string; suffix: string; dec: number } | null {
  const m = raw.match(/^([^\d-]*)(-?\d[\d.]*(?:,\d+)?)(.*)$/);
  if (!m) return null;
  const [, prefix, digits, suffix] = m;
  const normalised = digits.replace(/,/g, ""); // commas group thousands, the dot stays decimal
  const value = Number(normalised);
  if (!isFinite(value)) return null;
  const dec = normalised.includes(".") ? normalised.split(".")[1].length : 0;
  return { value, prefix, suffix, dec };
}

export function CountUp({ raw }: { raw: string }) {
  const parsed = parseStat(raw);
  const ref = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState(parsed ? `${parsed.prefix}0${parsed.suffix}` : raw);

  useEffect(() => {
    if (!parsed || !ref.current) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(raw);
      return;
    }
    const el = ref.current;
    let frame = 0;
    let started = false;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting || started) continue;
          started = true;
          const t0 = performance.now();
          const dur = 1100;
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            const v = parsed.value * eased;
            setText(
              parsed.prefix +
                v.toLocaleString("en-GB", { minimumFractionDigits: parsed.dec, maximumFractionDigits: parsed.dec }) +
                parsed.suffix
            );
            if (p < 1) frame = requestAnimationFrame(tick);
          };
          frame = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // parsed is derived from raw, so raw is the only real dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [raw]);

  return <span ref={ref}>{parsed ? text : raw}</span>;
}
