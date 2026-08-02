"use client";

import { useState } from "react";

export interface PublicComment {
  id: string;
  author: string;
  body: string;
  createdAt: string; // ISO
}

// Fixed locale and time zone so the server render and the client render agree.
const FMT = new Intl.DateTimeFormat("en-GB", {
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
        setMsg({ text: data.error ?? "That did not go through.", err: true });
      } else {
        if (data.comment) setList((cur) => [data.comment, ...cur]);
        setAuthor("");
        setBody("");
        setMsg({ text: "Posted. Thank you.", err: false });
      }
    } catch {
      setMsg({ text: "No connection. Try again in a moment.", err: true });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="commentwrap reveal d2">
      <form className="cform" onSubmit={submit}>
        <label>
          <span>your name</span>
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            maxLength={MAX_AUTHOR}
            required
            placeholder="who are you"
          />
        </label>
        <label>
          <span>what would you change, or where could you help</span>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            maxLength={MAX_BODY}
            required
            rows={5}
            placeholder="be specific: which part, and what you would do instead"
          />
        </label>
        <label className="hp" aria-hidden="true">
          <span>website</span>
          <input value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" />
        </label>
        <button className="send" type="submit" disabled={sending || !author.trim() || !body.trim()}>
          {sending ? "sending" : "post"}
        </button>
        {msg && <div className={`msg${msg.err ? " err" : ""}`}>{msg.text}</div>}
      </form>

      <div>
        {list.length === 0 ? (
          <div className="cempty">
            nobody has said anything yet
            <br />
            be the first to tell me what to change
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
