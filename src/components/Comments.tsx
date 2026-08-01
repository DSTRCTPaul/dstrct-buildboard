"use client";

import { useState } from "react";

export interface PublicComment {
  id: string;
  author: string;
  body: string;
  createdAt: string; // ISO
}

// Fixed locale and time zone so the server render and the client render agree.
const FMT = new Intl.DateTimeFormat("nl-NL", {
  day: "numeric",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Europe/Amsterdam",
});

export const MAX_AUTHOR = 60;
export const MAX_BODY = 1200;

export function Comments({ slug, initial }: { slug: string; initial: PublicComment[] }) {
  const [list, setList] = useState(initial);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [website, setWebsite] = useState(""); // honeypot: real people never see this
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState<{ text: string; err: boolean } | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setMsg(null);
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ project: slug, author, body, website }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMsg({ text: data.error ?? "Dat lukte niet.", err: true });
      } else {
        if (data.comment) setList((cur) => [data.comment, ...cur]);
        setAuthor("");
        setBody("");
        setMsg({ text: "Staat erbij. Dank je.", err: false });
      }
    } catch {
      setMsg({ text: "Geen verbinding. Probeer het zo nog eens.", err: true });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="commentwrap reveal d2">
      <form className="cform" onSubmit={submit}>
        <label>
          <span>je naam</span>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            maxLength={MAX_AUTHOR}
            required
            placeholder="wie ben je"
          />
        </label>
        <label>
          <span>je reactie</span>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            maxLength={MAX_BODY}
            required
            rows={5}
            placeholder="wat denk je hiervan"
          />
        </label>
        <label className="hp" aria-hidden="true">
          <span>website</span>
          <input value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
        <button className="send" type="submit" disabled={sending || !author.trim() || !body.trim()}>
          {sending ? "bezig" : "plaatsen"}
        </button>
        {msg && <div className={`msg${msg.err ? " err" : ""}`}>{msg.text}</div>}
      </form>

      <div>
        {list.length === 0 ? (
          <div className="cempty">
            nog geen reacties
            <br />
            wees de eerste
          </div>
        ) : (
          <div className="clist">
            {list.map((c) => (
              <div className="citem" key={c.id}>
                <div className="who">
                  <span className="nm">{c.author}</span>
                  <span className="when">{FMT.format(new Date(c.createdAt))}</span>
                </div>
                <div className="txt">{c.body}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
