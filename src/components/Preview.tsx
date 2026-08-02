// The "in action" slide. For the sites you can visit this is a real screenshot of the running
// product. For everything that lives in Discord, on a phone or behind a login, it is a crafted
// mini interface showing the actual flow, in that project's own accent. Nothing here is a stock
// image and nothing is generated: same rule as the OS demo site, real interface or nothing.

import type { ReactNode } from "react";
import type { Shot } from "@/components/Gallery";

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

// ------------------------------------------------------------------- galleries
// Real screenshots of the running product. The site ones are captured from the live URL,
// the deck ones are rendered by the actual pitch engine from that repo, the local tools
// are captured from the app running on this machine. Example figures, real interface.

export const SHOTS: Record<string, Shot[]> = {
  "dstrct-os": [
    { file: "engine--deck-cover.jpg", label: "daily briefing · cover", note: "The OS does not answer with a wall of text. This is the deck engine in the repo, rendering the morning briefing." },
    { file: "engine--deck-chart.jpg", label: "revenue against cost", note: "Charts draw themselves as the slide arrives. The line is the data, the caption is the point." },
    { file: "engine--deck-bars.jpg", label: "what each brain did", note: "Every brain reports what it actually did that week, which makes the fleet legible in one screen." },
    { file: "engine--deck-stats.jpg", label: "the month in four numbers", note: "Numbers count up on arrival. Same engine, four different slide types." },
  ],
  ariel: [
    { file: "ariel--deck-cover.jpg", label: "creative read · cover", note: "Ariel's own deck, violet and pink. Same engine as the other brains, its own accent." },
    { file: "ariel--deck-dimensions.jpg", label: "where it holds and slips", note: "Four creative dimensions scored. The amber bar is the one that keeps slipping, called out in the caption." },
    { file: "ariel--deck-stats.jpg", label: "the shape of the work", note: "Retention, hook, audio and how many posts sit behind the profile, so you can judge the confidence yourself." },
  ],
  midas: [
    { file: "midas--deck-cover.jpg", label: "growth research · cover", note: "What a client receives after one line of request in Discord." },
    { file: "midas--deck-gap.jpg", label: "the gap", note: "One number, full screen. The whole point of the deck lands before any explanation." },
    { file: "midas--deck-competitors.jpg", label: "who takes the clicks", note: "The two competitors and you, with the opening under each. The red line is where you stand." },
  ],
  "dstrct-crm": [
    { file: "dstrct-crm--cockpit.jpg", label: "seller cockpit", kind: "desktop", note: "Where a seller lands. Describe a client in plain language, or add one by voice, and the AI proposes the quote." },
    { file: "dstrct-crm--prices.jpg", label: "prices and commission", note: "The seller view: sale price and their own commission per service. No cost price anywhere, because the server strips it." },
    { file: "dstrct-crm--quotes.jpg", label: "quotes", note: "The quote pipeline, from new through called, interested, quoted, agreed." },
    { file: "dstrct-crm--salesaid.jpg", label: "sales aid", note: "The answers to the objections a seller actually gets, in the tool instead of in a document nobody opens." },
    { file: "dstrct-crm--mobile.jpg", label: "on a phone", kind: "phone", note: "Sellers work from their phone between appointments, so the cockpit had to survive a small screen." },
  ],
  koekkoekk: [
    { file: "koekkoekk--home.jpg", label: "marketplace", note: "The launch surface. Marketplace first, everything else behind a flag until this one works." },
    { file: "koekkoekk--shop.jpg", label: "the shop", note: "Items from verified sellers, priced in whole cents, media always behind signed URLs." },
    { file: "koekkoekk--mobile.jpg", label: "on a phone", kind: "phone", note: "Where this is actually used." },
  ],
  "fionie-docs": [
    { file: "fionie-docs--dashboard.jpg", label: "the workbench", note: "All 165 documents from the master index, with my fourteen lit up and the rest dimmed and read only." },
    { file: "fionie-docs--editor.jpg", label: "editor and assist rail", note: "Never a blank page: a starting structure on the left, the AI writing into a preview on the right that you insert or ignore." },
  ],
  "os-demo": [
    { file: "os-demo--dashboard.jpg", label: "the dashboard", note: "Real handmade interface, not a picture of one. Revenue, cashflow, the action list and what each brain did." },
    { file: "os-demo--brains.jpg", label: "the brains", note: "One OS, four specialists, each strong in its own subject." },
    { file: "os-demo--strategy.jpg", label: "strategy · the moat", note: "Why this wins is argued on the page: evidence graph, action first, founder context, governance, compounding." },
    { file: "os-demo--pitch.jpg", label: "investor pitch", note: "Problem through ask, on the same shareable link." },
    { file: "os-demo--mobile.jpg", label: "on a phone", kind: "phone", note: "Light and dark, and it holds up at 390 pixels wide." },
  ],
  platinum: [
    { file: "platinum--home.jpg", label: "home", note: "Dark with electric violet and heavy italic poster headlines. Bilingual from the route up." },
    { file: "platinum--roster.jpg", label: "creator roster", note: "Ten creator profiles with follower counts and a booking form behind each." },
    { file: "platinum--creators.jpg", label: "for creators", note: "The recruitment side, with TikTok attributes on the signup." },
    { file: "platinum--cases.jpg", label: "cases", note: "The proof pages, structured data included so they are crawlable." },
    { file: "platinum--mobile.jpg", label: "on a phone", kind: "phone", note: "Where an agency's audience actually looks." },
  ],
  "creatief-met-plezier": [
    { file: "creatief-met-plezier--home.jpg", label: "storefront", note: "The live shop. Warm palette, workshops and packages beside the catalogue." },
    { file: "creatief-met-plezier--shop.jpg", label: "10.934 products", note: "The full catalogue with brand and technique filters that finally tell the truth about what is in them." },
    { file: "creatief-met-plezier--workshops.jpg", label: "workshops", note: "Sessions and seats, managed by the owner herself from the back office." },
    { file: "creatief-met-plezier--mobile.jpg", label: "on a phone", kind: "phone", note: "Most of this shop's traffic." },
  ],
};

// The image that fronts a project on the board: the first real screenshot when there is one,
// otherwise the crafted panel from its own deck, captured as an image.
const PANEL_COVERS: Record<string, string> = {
  "finance-brain": "panel--finance-brain.jpg",
  "brain-spine": "panel--brain-spine.jpg",
  sentinel: "panel--sentinel.jpg",
  rates: "panel--rates.jpg",
  fionie: "panel--fionie.jpg",
  maya: "panel--maya.jpg",
};

export function coverFor(slug: string): string | null {
  const shots = SHOTS[slug];
  if (shots && shots.length) return shots[0].file;
  return PANEL_COVERS[slug] ?? null;
}

export function getShots(slug: string): Shot[] {
  return SHOTS[slug] ?? [];
}

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
