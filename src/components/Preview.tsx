// The "in action" slide. For the sites you can visit this is a real screenshot of the running
// product. For everything that lives in Discord, on a phone or behind a login, it is a crafted
// mini interface showing the actual flow, in that project's own accent. Nothing here is a stock
// image and nothing is generated: same rule as the OS demo site, real interface or nothing.

import type { ReactNode } from "react";

function Frame({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="pv">
      <div className="pv-bar">
        <i />
        <i />
        <i />
        <span>{label}</span>
      </div>
      <div className="pv-body">{children}</div>
    </div>
  );
}

function Shot({ slug, label, alt }: { slug: string; label: string; alt: string }) {
  return (
    <div className="pv">
      <div className="pv-bar">
        <i />
        <i />
        <i />
        <span>{label}</span>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="pv-shot" src={`/shots/${slug}.jpg`} alt={alt} loading="lazy" width={1920} height={1200} />
    </div>
  );
}

function Msg({ who, at, avatar, bot, children }: { who: string; at: string; avatar: string; bot?: boolean; children: ReactNode }) {
  return (
    <div className="pv-msg">
      <div className={`pv-av${bot ? " bot" : ""}`}>{avatar}</div>
      <div>
        <div className="pv-who">
          {who}
          <em>{at}</em>
        </div>
        <div className="pv-txt">{children}</div>
      </div>
    </div>
  );
}

function Wave({ bars }: { bars: number[] }) {
  return (
    <div className="pv-wave">
      {bars.map((h, i) => (
        <i key={i} style={{ height: `${h}%` }} />
      ))}
    </div>
  );
}

const WAVE = [18, 42, 70, 95, 62, 30, 55, 88, 100, 74, 40, 22, 48, 80, 66, 34, 20, 52, 76, 44, 26, 60, 90, 58, 30, 16];

// ---------------------------------------------------------------------------- per project

const PREVIEWS: Record<string, { caption: ReactNode; node: ReactNode }> = {
  "dstrct-os": {
    caption: (
      <>
        A signal becomes a prepared action, never an executed one. <b>Nothing leaves the building without a yes.</b> Approving
        writes a task and the outcome flows back into the learning layer.
      </>
    ),
    node: (
      <Frame label="dstrct os · action drafts">
        <div className="pv-card">
          <div className="pv-h">signal · finance</div>
          <div className="pv-kv">
            <span>Transaction without a receipt, Google Cloud</span>
            <b>436,80</b>
          </div>
          <div className="pv-kv">
            <span className="mono">evidence: jortt #4471 · mailbox match 0.91</span>
            <span className="pv-tag ok">auto eligible</span>
          </div>
        </div>
        <div className="pv-arrow">↓ prepared as</div>
        <div className="pv-card">
          <div className="pv-h">action draft</div>
          <div className="pv-kv">
            <span>Couple receipt to booking and mark as settled</span>
            <span className="pv-tag wait">waiting for you</span>
          </div>
          <div className="pv-kv">
            <span className="mono">reversible · writes a task, never an external call</span>
            <b className="mono">approve · reject</b>
          </div>
        </div>
      </Frame>
    ),
  },

  ariel: {
    caption: (
      <>
        You just say what happened. Ariel turns it into structured creative data, scores the dimensions and{" "}
        <b>never sounds more certain than the data allows.</b>
      </>
    ),
    node: (
      <Frame label="discord · #creative">
        <div className="pv-chat">
          <Msg who="Ahmed" at="14:02" avatar="AH">
            edited the new reel, hook is the jump cut on the drone shot
          </Msg>
          <Msg who="Ariel" at="14:02" avatar="AR" bot>
            Logged. Hook 9, audio 6, pacing 8. That audio score is your pattern lately, three of the last five sat under
            7 while everything else went up.
          </Msg>
          <Msg who="Paul" at="14:04" avatar="PA">
            how is the client doing overall
          </Msg>
          <Msg who="Ariel" at="14:04" avatar="AR" bot>
            <div className="pv-card" style={{ marginTop: ".4rem" }}>
              <div className="pv-h">profile · last 30 days</div>
              <div className="pv-kv">
                <span>Average retention</span>
                <b>41%</b>
              </div>
              <div className="pv-kv">
                <span>Best format</span>
                <b>talking head + b-roll</b>
              </div>
              <div className="pv-kv">
                <span className="mono">confidence</span>
                <span className="pv-tag wait">medium · 11 posts</span>
              </div>
            </div>
          </Msg>
        </div>
      </Frame>
    ),
  },

  midas: {
    caption: (
      <>
        Ask in one line, get something you can put in front of a client. The deck is generated from the research
        pipeline, so <b>every number on a slide traces back to a source.</b>
      </>
    ),
    node: (
      <Frame label="discord · #growth">
        <div className="pv-chat">
          <Msg who="Paul" at="09:12" avatar="PA">
            give me opportunities for the bakery client
          </Msg>
          <Msg who="Midas" at="09:13" avatar="MI" bot>
            Ran the hunt across five layers. Three angles worth your time, deck attached.
          </Msg>
        </div>
        <div className="pv-2" style={{ marginTop: ".9rem" }}>
          <div className="pv-slidemini">
            <div className="eb">opportunity 01</div>
            <div className="tt">Local search is where you are invisible</div>
            <div className="nm">73%</div>
            <div className="pv-h" style={{ marginTop: ".5rem", marginBottom: 0 }}>
              of nearby queries go to two competitors
            </div>
          </div>
          <div className="pv-card">
            <div className="pv-h">advice ledger</div>
            <div className="pv-kv">
              <span>Local pages per district</span>
              <b>held 7/9</b>
            </div>
            <div className="pv-kv">
              <span>Review velocity push</span>
              <b>held 5/6</b>
            </div>
            <div className="pv-kv">
              <span>Broad brand campaign</span>
              <span className="pv-tag no">dropped 1/4</span>
            </div>
          </div>
        </div>
      </Frame>
    ),
  },

  "finance-brain": {
    caption: (
      <>
        A receipt arrives by mail, gets read, and is matched against the open transactions. Strict on uniqueness and
        sender, loose on exactness. <b>If it is not certain it stays a proposal.</b>
      </>
    ),
    node: (
      <Frame label="finance · coupling engine">
        <div className="pv-2">
          <div className="pv-card">
            <div className="pv-h">incoming · mailbox</div>
            <div className="pv-kv">
              <span>invoice_4471.pdf</span>
              <span className="pv-tag ok">ocr done</span>
            </div>
            <div className="pv-kv">
              <span>Vendor</span>
              <b>Google Cloud EMEA</b>
            </div>
            <div className="pv-kv">
              <span>Amount</span>
              <b>436,80</b>
            </div>
            <div className="pv-kv">
              <span className="mono">sender domain</span>
              <b className="mono">google.com ✓</b>
            </div>
          </div>
          <div className="pv-card">
            <div className="pv-h">open transaction · jortt</div>
            <div className="pv-kv">
              <span>23 Jul · card 8767</span>
              <b>436,80</b>
            </div>
            <div className="pv-kv">
              <span>Candidates in window</span>
              <b>1 unique</b>
            </div>
            <div className="pv-kv">
              <span>Confidence</span>
              <b className="mono">0.91</b>
            </div>
            <div className="pv-kv">
              <span className="mono">result</span>
              <span className="pv-tag ok">coupled automatically</span>
            </div>
          </div>
        </div>
      </Frame>
    ),
  },

  "brain-spine": {
    caption: (
      <>
        Ask about an entity and the spine asks whichever brain owns that data. Every answer comes back wrapped:{" "}
        <b>claim, evidence, confidence, source, as of when.</b> A brain with no evidence returns a refusal, not a guess.
      </>
    ),
    node: (
      <Frame label="cortex · entity dossier">
        <div className="pv-card">
          <div className="pv-h">POST /api/cortex/dossier</div>
          <div className="pv-kv">
            <span className="mono">{'{ "entity": "a client name" }'}</span>
            <span className="pv-tag">2 brains own data</span>
          </div>
        </div>
        <div className="pv-arrow">↓ grounded answers</div>
        <div className="pv-2">
          <div className="pv-card">
            <div className="pv-h">finance</div>
            <div className="pv-txt">Invoiced three times this quarter, last one still open past terms.</div>
            <div className="pv-kv" style={{ marginTop: ".6rem" }}>
              <span className="mono">confidence</span>
              <b className="mono">0.85</b>
            </div>
            <div className="pv-kv">
              <span className="mono">evidence</span>
              <b className="mono">jortt · ing · intake</b>
            </div>
          </div>
          <div className="pv-card">
            <div className="pv-h">creative</div>
            <div className="pv-txt">I have no material on this entity. I do not fabricate, Paul confirm.</div>
            <div className="pv-kv" style={{ marginTop: ".6rem" }}>
              <span className="mono">confidence</span>
              <span className="pv-tag no">refused</span>
            </div>
          </div>
        </div>
      </Frame>
    ),
  },

  sentinel: {
    caption: (
      <>
        The guard writes offline on their phone, the queue syncs when there is signal, and the control room sees it
        appear. <b>Two guards on two sites never see each other's feed.</b>
      </>
    ),
    node: (
      <Frame label="floor → control room">
        <div className="pv-2">
          <div className="pv-card">
            <div className="pv-h">phone · guard</div>
            <div className="pv-note">
              <div className="pv-txt">Group of four at the rear entrance, refusing to move on. Requesting backup.</div>
            </div>
            <div className="pv-kv" style={{ marginTop: ".7rem" }}>
              <span>Triage</span>
              <span className="pv-tag no">security</span>
            </div>
            <div className="pv-kv">
              <span className="mono">offline · queued</span>
              <b className="mono">sent ✓</b>
            </div>
          </div>
          <div className="pv-card">
            <div className="pv-h">control room · live feed</div>
            <div className="pv-feed">
              <div className="pv-fitem">
                <span className="sig" style={{ background: "#fb7185" }} />
                <span>Rear entrance · backup requested</span>
                <span className="when">22:14</span>
              </div>
              <div className="pv-fitem">
                <span className="sig" style={{ background: "#f0a35e" }} />
                <span>First aid · guest unwell at bar</span>
                <span className="when">22:09</span>
              </div>
              <div className="pv-fitem">
                <span className="sig" style={{ background: "var(--cyan)" }} />
                <span>Traffic · car park full, diverting</span>
                <span className="when">21:52</span>
              </div>
            </div>
          </div>
        </div>
      </Frame>
    ),
  },

  koekkoekk: {
    caption: (
      <>
        A purchase is one webhook and four ledger lines. The balance is never stored, it is derived, so{" "}
        <b>the books cannot silently drift.</b>
      </>
    ),
    node: (
      <Frame label="purchase → wallet">
        <div className="pv-2">
          <div className="pv-card">
            <div className="pv-h">marketplace</div>
            <div className="pv-kv">
              <span>Photo set · 12 items</span>
              <b>12,50</b>
            </div>
            <div className="pv-kv">
              <span className="mono">signed url · never public</span>
              <span className="pv-tag ok">paid</span>
            </div>
            <div className="pv-kv">
              <span className="mono">mollie webhook</span>
              <b className="mono">idempotent · re verified</b>
            </div>
          </div>
          <div className="pv-card">
            <div className="pv-h">creator wallet · append only</div>
            <div className="pv-kv">
              <span>Sale</span>
              <b>+ 1250 cents</b>
            </div>
            <div className="pv-kv">
              <span>Commission 30%</span>
              <b>- 375 cents</b>
            </div>
            <div className="pv-kv">
              <span>Balance derived</span>
              <b className="pv-big acc" style={{ fontSize: "1.1rem" }}>
                875
              </b>
            </div>
          </div>
        </div>
      </Frame>
    ),
  },

  "dstrct-crm": {
    caption: (
      <>
        The same quote, seen by two roles. The cost price is not hidden in the interface, it is{" "}
        <b>stripped on the server so it never reaches the seller's browser.</b>
      </>
    ),
    node: (
      <Frame label="one quote · two roles">
        <div className="pv-2">
          <div className="pv-card">
            <div className="pv-h">owner view</div>
            <div className="pv-kv">
              <span>Sale price</span>
              <b>4.400</b>
            </div>
            <div className="pv-kv">
              <span>Cost price</span>
              <b>2.150</b>
            </div>
            <div className="pv-kv">
              <span>Profit</span>
              <b className="pv-big acc" style={{ fontSize: "1.1rem" }}>
                2.250
              </b>
            </div>
          </div>
          <div className="pv-card">
            <div className="pv-h">seller view</div>
            <div className="pv-kv">
              <span>Sale price</span>
              <b>4.400</b>
            </div>
            <div className="pv-kv">
              <span>Cost price</span>
              <b className="pv-blur">2.150</b>
            </div>
            <div className="pv-kv">
              <span>Your commission 10%</span>
              <b className="pv-big acc" style={{ fontSize: "1.1rem" }}>
                440
              </b>
            </div>
          </div>
        </div>
      </Frame>
    ),
  },

  rates: {
    caption: (
      <>
        Every category carries a defensible range and the reasoning behind it, so a conversation about price{" "}
        <b>stops being a negotiation about feelings.</b>
      </>
    ),
    node: (
      <Frame label="rates · what it should cost in 2026">
        <div className="pv-2">
          <div className="pv-card">
            <div className="pv-h">custom software</div>
            <div className="pv-big">-10 to -30%</div>
            <div className="pv-txt" style={{ marginTop: ".5rem" }}>
              AI moved this least. Writing code is about a fifth of a project.
            </div>
          </div>
          <div className="pv-card">
            <div className="pv-h">video and image</div>
            <div className="pv-big">-70 to -97%</div>
            <div className="pv-txt" style={{ marginTop: ".5rem" }}>
              This one genuinely collapsed. Price it accordingly or leave it.
            </div>
          </div>
        </div>
        <div className="pv-card" style={{ marginTop: ".9rem" }}>
          <div className="pv-h">the rule on the wall</div>
          <div className="pv-txt">
            Do not lower your price because AI made you faster. The market pays around a 22% premium for AI augmented
            work.
          </div>
        </div>
      </Frame>
    ),
  },

  "os-demo": {
    caption: (
      <>
        Real interface rather than pictures of interface. The dashboard, the brains, the strategy and the pitch all
        live on one shareable link, in light and dark. <b>This is the actual page, not a mockup of it.</b>
      </>
    ),
    node: <Shot slug="os-demo" label="dstrct-os-demo.vercel.app" alt="The DSTRCT OS demo dashboard with revenue, cashflow and brain actions" />,
  },

  fionie: {
    caption: (
      <>
        The child is not marked right or wrong. Fionie asks how they got there, because{" "}
        <b>the reasoning is the thing worth rewarding.</b>
      </>
    ),
    node: (
      <Frame label="fionie · understanding first">
        <div className="pv-chat">
          <Msg who="Fionie" at="" avatar="FO" bot>
            Seven times eight. Take your time, I am not counting seconds.
          </Msg>
          <Msg who="Child" at="" avatar="K">
            54
          </Msg>
          <Msg who="Fionie" at="" avatar="FO" bot>
            Close. How did you get there? If you tell me your route I can see where it slipped.
          </Msg>
          <Msg who="Child" at="" avatar="K">
            i did 7 times 7 and then plus 7 but i think i counted wrong
          </Msg>
          <Msg who="Fionie" at="" avatar="FO" bot>
            That route is exactly right, so you understand this. Only the last step went off. 49 plus 7 is?
          </Msg>
        </div>
        <div className="pv-card" style={{ marginTop: ".9rem" }}>
          <div className="pv-h">parent summary · no grade</div>
          <div className="pv-txt">Strategy is solid, the errors sit in the final step when going fast.</div>
        </div>
      </Frame>
    ),
  },

  "fionie-docs": {
    caption: (
      <>
        The AI writes into a preview, never straight into your document. You insert it, replace with it, or ignore it.{" "}
        <b>You keep the pen.</b>
      </>
    ),
    node: (
      <Frame label="fionie docs · assist rail">
        <div className="pv-2">
          <div className="pv-card">
            <div className="pv-h">document · mine, editable</div>
            <div className="pv-txt">
              <b style={{ color: "var(--d-ink)" }}>Mission</b>
              <br />
              We build learning that a child enjoys and that understands the child, instead of ranking them.
            </div>
            <div className="pv-kv" style={{ marginTop: ".7rem" }}>
              <span className="mono">autosave</span>
              <b className="mono">saved · 2s ago</b>
            </div>
          </div>
          <div className="pv-card">
            <div className="pv-h">assist · improve</div>
            <div className="pv-txt" style={{ opacity: 0.75 }}>
              Consider naming who it is for in the first sentence, and moving the contrast with grading to the second
              paragraph so the opening states what you are for…
            </div>
            <div className="pv-kv" style={{ marginTop: ".7rem" }}>
              <span className="pv-tag">streaming</span>
              <b className="mono">insert · replace</b>
            </div>
          </div>
        </div>
      </Frame>
    ),
  },

  "creatief-met-plezier": {
    caption: (
      <>
        Eleven thousand products, workshops and packages, all managed from a back office the owner runs herself.{" "}
        <b>This is the live storefront.</b>
      </>
    ),
    node: <Shot slug="creatief-met-plezier" label="the live storefront" alt="The Creatief met Plezier storefront homepage" />,
  },

  platinum: {
    caption: (
      <>
        Sixty four pages across two languages, and behind it a platform with roles, applications and a shop.{" "}
        <b>This is the live site.</b>
      </>
    ),
    node: <Shot slug="platinum" label="platinum-management-agency.vercel.app" alt="The Platinum agency homepage" />,
  },

  maya: {
    caption: (
      <>
        Wake word on the final transcript, then speech to text, brain, and a self hosted voice.{" "}
        <b>Honest about the ceiling: this is a chain, so about a second to first audio.</b>
      </>
    ),
    node: (
      <Frame label="voice channel · hey maya">
        <div className="pv-card">
          <div className="pv-h">listening</div>
          <Wave bars={WAVE} />
          <div className="pv-kv" style={{ marginTop: ".5rem" }}>
            <span className="mono">&quot;hey maya, how much runway do we have&quot;</span>
            <span className="pv-tag ok">wake word</span>
          </div>
        </div>
        <div className="pv-card">
          <div className="pv-h">answering</div>
          <div className="pv-txt">
            About seven months at the current burn, and that already accounts for the two invoices still open.
          </div>
          <div className="pv-kv" style={{ marginTop: ".6rem" }}>
            <span className="mono">deepgram → claude → csm on modal</span>
            <b className="mono">~1s to first audio</b>
          </div>
          <div className="pv-kv">
            <span className="mono">barge in</span>
            <b className="mono">you can talk over it</b>
          </div>
        </div>
      </Frame>
    ),
  },
};

export function Preview({ slug }: { slug: string }) {
  const p = PREVIEWS[slug];
  if (!p) return null;
  return (
    <div className="reveal d1">
      {p.node}
      <p className="pv-cap">{p.caption}</p>
    </div>
  );
}

export function hasPreview(slug: string): boolean {
  return Boolean(PREVIEWS[slug]);
}
