// Every block on the board. One entry = one project = one deck.
// Facts here come from the actual build sessions: repos, stacks, what shipped, what is still open.
// Keep it honest: a block that claims "live" must really be live.

export type Status = "live" | "built" | "building" | "exploring";

export interface Project {
  slug: string;
  name: string;
  monogram: string;
  tagline: string;
  status: Status;
  statusNote: string;
  family: string;
  accent: { cyan: string; blue: string };
  url?: string;
  links?: { label: string; url?: string; access: "open" | "login" | "password" | "closed"; note?: string }[];
  stats: { n: string; l: string }[];
  idea: { title: string; lead: string };
  why: { title: string; lead: string; quote?: string };
  stack: { title: string; lead?: string; items: { label: string; value: string }[] };
  build: { title: string; lead?: string; steps: { text: string; sub?: string }[] };
  open: { title: string; lead?: string; items: { text: string; sub?: string }[] };
}

export const STATUS_LABEL: Record<Status, string> = {
  live: "live",
  built: "built",
  building: "building",
  exploring: "exploring",
};

export const PROJECTS: Project[] = [
  // ---------------------------------------------------------------- DSTRCT OS
  {
    slug: "dstrct-os",
    name: "DSTRCT OS",
    monogram: "OS",
    tagline: "A company brain that understands **my whole context**, not another dashboard.",
    status: "live",
    statusNote: "core running on Render, brains connected",
    family: "The OS",
    accent: { cyan: "#34E0A1", blue: "#176999" },
    links: [
      { label: "dstrct-os.onrender.com", url: "https://dstrct-os.onrender.com", access: "open", note: "the running OS" },
    ],
    stats: [
      { n: "4", l: "connected brains" },
      { n: "~28", l: "brains in the vision" },
      { n: "6", l: "core layers" },
      { n: "2094", l: "tests green" },
    ],
    idea: {
      title: "Not separate tools but a **second brain**",
      lead:
        "An OS that understands my full context, private and business kept apart but seen together. It remembers what I forget, surfaces what still needs doing, spots patterns and looks ahead. The build bible calls it an Autonomous Enterprise Cortex: connect the data, understand the context, prepare the next action, learn from the outcome.",
    },
    why: {
      title: "Mechanical tools **get it wrong**",
      lead:
        "A tool that moves data around without grasping what it means paints a false picture, and that picture compounds. So every feature is an organ that feeds understood context into the knowledge graph, never a standalone button. Finance is deliberately the first wedge: that is where the data is most concrete and the pain is real.",
      quote: "Understanding context is everything. Without it the brain will be wrong later.",
    },
    stack: {
      title: "What it **runs on**",
      lead: "A Next.js monolith with a Prisma knowledge graph underneath and brains alongside.",
      items: [
        { label: "app", value: "Next.js App Router on Render, repo dstrct-pricing-tool" },
        { label: "data", value: "Prisma and Postgres: CanonicalEntity, KnowledgeNode, EpisodicMemory, PatternMemory" },
        { label: "actions", value: "Signal, ActionDraft, approval, Task, outcome" },
        { label: "connectors", value: "Jortt, Gmail, Vercel costs, Render, Discord" },
        { label: "design", value: "Minimal-Mesh design system, tokens in docs/design-system" },
      ],
    },
    build: {
      title: "How I **built it**",
      lead: "In waves. Every wave got its own spec, plan, subagents, review and deploy.",
      steps: [
        { text: "The finance wedge first", sub: "document intake, OCR, Jortt matching, coupling proposals. Concrete data for abstract brains." },
        { text: "Governance before autonomy", sub: "hard build and spend limits, dry runs, approval gates. Only then were the hands allowed off." },
        { text: "Self awareness", sub: "self check, self eval, and a bot that writes pull requests on its own code, always maintainer gated." },
        { text: "Connecting the brains", sub: "a BrainRegistry holding Midas, Ariel, Radar and Finance, each behind one tight ask contract." },
        { text: "The spine", sub: "provenance envelopes, a Canonical Entity Registry, an event bus and grounded ask in src/lib/spine." },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "Real grounding for the sibling brains", sub: "they still return a default confidence of 0.5 and no evidence" },
        { text: "Make the event bus durable", sub: "in process for now, and not a single real event flows through it yet" },
        { text: "An eval harness per brain", sub: "a golden set and a correction rate, so quality becomes measurable" },
        { text: "Catch up with the bible spine", sub: "the audit was honest: I built breadth where the product needed depth" },
      ],
    },
  },

  // ---------------------------------------------------------------- Ariel
  {
    slug: "ariel",
    name: "Ariel",
    monogram: "AR",
    tagline: "A **creative director** in Discord that actually coaches the creative team.",
    status: "live",
    statusNote: "on Render since July 2026",
    family: "Brains",
    accent: { cyan: "#C084FC", blue: "#EC4899" },
    links: [
      { label: "runs in Discord", access: "closed", note: "no public URL, it lives in the team's creative channel" },
    ],
    stats: [
      { n: "236", l: "tests green" },
      { n: "9", l: "cognition phases" },
      { n: "1-10", l: "creative scores" },
    ],
    idea: {
      title: "A brain that **understands creative work**",
      lead:
        "Ariel talks with the designer and the editor, celebrates what shipped and pushes on what is stalling. Not a bot that runs commands but a colleague that sees what is being made, why it works and what comes next. Natural language is the product: you type what you mean.",
    },
    why: {
      title: "Creative work **disappears** into the noise",
      lead:
        "A team makes a lot and nobody tracks what worked. Metrics sit apart from the creative choices underneath them. Ariel puts those side by side: which hook, which format, which editor, and what came out. And it never sounds more certain than the data, every profile carries a confidence label.",
      quote: "I do not want a tool that scores. I want something that understands what we make.",
    },
    stack: {
      title: "What it **runs on**",
      items: [
        { label: "runtime", value: "TypeScript and ESM on a Render worker, repo DSTRCTPaul/ariel" },
        { label: "data", value: "Prisma with a Descriptor EAV model beside relational platform and brand" },
        { label: "brain", value: "Claude Opus with adaptive thinking and art director discipline" },
        { label: "channel", value: "Discord, natural language, commands only as a hidden power layer" },
        { label: "decks", value: "the shared pitch engine with a violet and pink accent" },
      ],
    },
    build: {
      title: "How I **built it**",
      lead: "Subagent driven in six waves, each wave reviewed, merged and deployed on its own.",
      steps: [
        { text: "Model and repositories", sub: "Content as the source anchor: one shoot becomes many posts. Campaign kept deliberately light." },
        { text: "Dutch capture", sub: "spoken language into structured descriptors, people pinned to a stable Discord id" },
        { text: "A pure profile engine", sub: "a dimension is a rule that picks a set of posts and turns it into one ProfileCard" },
        { text: "Grounded creative brain", sub: "creative_context grounding plus the discipline see, why, change, keep, next" },
        { text: "Learning engine", sub: "what works, learned from real outcomes instead of from opinions" },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "The social ingestion layer", sub: "TikTok and Instagram deliver nothing yet, the foundation stands but the pipe is missing" },
        { text: "Platform tokens", sub: "a hard blocker, TikTok being the worst of them" },
        { text: "Parsing in a worker thread", sub: "one pathological file can still block the event loop, that is the real fix" },
        { text: "Phase 2 structured memory", sub: "from conversation memory to genuine understanding over time" },
      ],
    },
  },

  // ---------------------------------------------------------------- Midas
  {
    slug: "midas",
    name: "Midas",
    monogram: "MI",
    tagline: "An autonomous **Chief Growth Officer** for my clients, not a reporting tool.",
    status: "live",
    statusNote: "on Render, value spine closed",
    family: "Brains",
    accent: { cyan: "#22D3EE", blue: "#2563EB" },
    links: [
      { label: "runs in Discord", access: "closed", note: "ask and I will run a deck for your own company" },
    ],
    stats: [
      { n: "858", l: "tests green" },
      { n: "5", l: "layers of market research" },
      { n: "4", l: "bots share the deck engine" },
    ],
    idea: {
      title: "A brain that **grows clients**",
      lead:
        "Midas spots an opportunity, prepares it, waits for approval, executes and learns from the outcome. That loop is fully closed: opportunity, task, execution, outcome. It delivers research and opportunities as a presentation you can put in front of a client, not as a wall of text.",
    },
    why: {
      title: "Advice without **memory** is worthless",
      lead:
        "Anyone can produce a list of tips. The real value is a system that builds evidence across years and across clients: this advice held up X out of N times, and in healthcare it behaves differently. That is the moat. Every build step has to make Midas a better growth officer, not a prettier tool.",
      quote: "The test: does this make him a better CGO, or just a nicer looking tool.",
    },
    stack: {
      title: "What it **runs on**",
      items: [
        { label: "runtime", value: "TypeScript and ESM, a worker plus an API service on Render" },
        { label: "brain", value: "a Claude Opus tool agent, read only tools, anything consequential is approval gated" },
        { label: "data", value: "Prisma, an Advice Ledger, a belief system whose confidence moves over time" },
        { label: "research", value: "Serper, Google Places, Keyword Planner and an own crawler" },
        { label: "output", value: "the cinematic pitch engine in cyan and blue" },
      ],
    },
    build: {
      title: "How I **built it**",
      lead: "Cloned Ariel as the pattern, then took its own road.",
      steps: [
        { text: "Value spine first", sub: "sense, prepare, approve, execute gated, mark applied, learn. Validated in production on a real client." },
        { text: "Market research in five layers", sub: "competitors, reputation, customer voice, size, trend, plus primary intake" },
        { text: "Conversation layer", sub: "multi turn memory that survives a restart, and a persona that reads like a colleague" },
        { text: "Language mirroring", sub: "one Claude pass renders the answer in the writer's language, never changing a digit" },
        { text: "Deck engine", sub: "full screen keynote slides, not a scrolling document. The first attempt was rejected, rightly." },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "Auto grading the beliefs", sub: "GA4 and Search Console back into the ledger, so confidence corrects itself" },
        { text: "Execution integrations", sub: "hands outside Discord, still behind approval" },
        { text: "Cross brain last", sub: "every specialist genuinely strong first, orchestration only after that" },
      ],
    },
  },

  // ---------------------------------------------------------------- Finance brain
  {
    slug: "finance-brain",
    name: "Finance brain",
    monogram: "FI",
    tagline: "The bookkeeping as a **brain you can question**, with receipts that couple themselves.",
    status: "live",
    statusNote: "in the OS, auto coupling switched on",
    family: "Brains",
    accent: { cyan: "#34E0A1", blue: "#0E7490" },
    links: [
      { label: "inside the OS", access: "login", note: "an endpoint on dstrct-os, not a page of its own" },
    ],
    stats: [
      { n: "4th", l: "connected brain" },
      { n: "0.85", l: "confidence on real data" },
      { n: "58", l: "receipts coupled" },
    ],
    idea: {
      title: "Just **ask** your bookkeeping",
      lead:
        "How is the cash position, how many traffic fines this year, which transaction is missing a receipt. The finance brain answers on real data from Jortt, the bank, PayPal and the document vault, and it invents nothing. If the evidence is not there it says so.",
    },
    why: {
      title: "The AI performed **worse than I did**",
      lead:
        "The old flow left about ninety transactions without a receipt while by hand I got down to fifteen. That was the starting point: not to sound smarter but to genuinely beat manual work. So the engine became strict on uniqueness and sender, and loose on exactness, because that is where the safety lives.",
      quote: "If the machine does it worse than I do by hand, it is not a machine, it is an excuse.",
    },
    stack: {
      title: "What it **runs on**",
      items: [
        { label: "engine", value: "answerFinanceQuestion in the OS, reused by the UI and the brain endpoint" },
        { label: "pipeline", value: "mail to intake to OCR to match to coupling proposal to Jortt" },
        { label: "ocr", value: "PDF to PNG through mupdf, working inside serverless" },
        { label: "storage", value: "Vercel Blob over OIDC, no read write token" },
        { label: "safety", value: "kill switch, fail closed rollback, private documents never enter business flows" },
      ],
    },
    build: {
      title: "How I **built it**",
      steps: [
        { text: "The vault first", sub: "bulk upload, classification, OCR review, and a read only cockpit on top" },
        { text: "Then the matcher", sub: "currency aware, a date window, pollution filtered out, sender domain against vendor" },
        { text: "Gated before automatic", sub: "every coupling started as a proposal, the safe band grew until auto was allowed" },
        { text: "Promoted to a brain", sub: "an ask endpoint on top, registered, self check went from three to four" },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "The remaining April credit card items", sub: "roughly 1,792 euro still to reconcile" },
        { text: "Robustness of the LLM JSON", sub: "one cold start returned nothing usable, retry and repair are missing" },
        { text: "Location OCR and fines", sub: "phases 1a and 1b of the car and presence data are still open" },
      ],
    },
  },

  // ---------------------------------------------------------------- Spine / Sora
  {
    slug: "brain-spine",
    name: "Brain spine and Sora",
    monogram: "SP",
    tagline: "The spine the **brains talk over**, plus a voice that directs it.",
    status: "building",
    statusNote: "phases 1 and 2 live, Sora partly on a branch",
    family: "The OS",
    accent: { cyan: "#8B5CF6", blue: "#2563EB" },
    links: [
      { label: "inside the OS", access: "login", note: "endpoints, no interface yet" },
    ],
    stats: [
      { n: "2", l: "phases live" },
      { n: "0", l: "invented answers" },
    ],
    idea: {
      title: "Brains that **talk**, not one shared bucket",
      lead:
        "Every brain keeps its own memory and they communicate, instead of dumping everything into a central store. On top sits Sora: a command layer with a voice that turns one instruction into directives for the right brains, with preview, confirmation and an audit trail.",
    },
    why: {
      title: "A shared bucket turns into **mud**",
      lead:
        "If every brain writes into the same store, nobody knows where a claim came from anymore. So every answer carries an envelope: the claim, the evidence, the confidence, which brain and as of when. No evidence means no claim.",
      quote: "No phase invents certainty.",
    },
    stack: {
      title: "What it **runs on**",
      items: [
        { label: "provenance", value: "ProvenanceEnvelope with claim, evidenceRefs, confidence, sourceBrain, asOf" },
        { label: "identity", value: "a Canonical Entity Registry on top of the existing CanonicalEntity table" },
        { label: "events", value: "an in process event bus with a contract stable enough for Postgres later" },
        { label: "cortex", value: "an entity dossier that asks each owning brain, grounded" },
      ],
    },
    build: {
      title: "How I **built it**",
      steps: [
        { text: "Looked at what was already there", sub: "the schema already had CanonicalEntity, EvidenceRecord, Signal and ActionDraft. No new table needed." },
        { text: "Pure core, live edges", sub: "the library is deterministic and time comes from the caller. No Date.now in the core." },
        { text: "Dossier proven end to end", sub: "on a real client it returned finance evidence at 0.85 confidence, and refused where there was no data" },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "Sora actually in use", sub: "the M1 spine sits on a branch, not merged" },
        { text: "Wire the dossier into Sora", sub: "so you can simply ask instead of calling an endpoint" },
        { text: "Durable event transport", sub: "and then one real event flow through it" },
      ],
    },
  },

  // ---------------------------------------------------------------- Sentinel
  {
    slug: "sentinel",
    name: "Sentinel",
    monogram: "SE",
    tagline: "Realtime incident triage for security firms, **from the floor to the control room**.",
    status: "live",
    statusNote: "on Render since July 2026",
    family: "Own products",
    accent: { cyan: "#60A5FA", blue: "#1E40AF" },
    links: [
      { label: "sentinel-cp.onrender.com", url: "https://sentinel-cp.onrender.com", access: "login", note: "the control room, ask for a demo account" },
    ],
    stats: [
      { n: "24", l: "tests green" },
      { n: "3", l: "modules" },
      { n: "4", l: "roles" },
    ],
    idea: {
      title: "From **floor to control room** in a second",
      lead:
        "A guard writes a note on their phone with colour triage, it syncs idempotently to the API and appears live in the control room feed. Above that, admin reporting and export. Multi tenant, because this is a product for the whole industry.",
    },
    why: {
      title: "Incidents die in **group chats**",
      lead:
        "What happens on the floor arrives over WhatsApp and phone calls, and then vanishes. No timeline, no report, no evidence. And it has to work without a network, because a parking garage has no signal. Offline first is not a feature here, it is the condition.",
      quote: "The client's data is the source of truth. You do not touch it.",
    },
    stack: {
      title: "What it **runs on**",
      items: [
        { label: "monorepo", value: "pnpm and turbo" },
        { label: "api", value: "NestJS with Socket.io and Prisma on Postgres, Render Frankfurt" },
        { label: "web", value: "Next.js for the control room and admin" },
        { label: "mobile", value: "Expo, offline first with a local queue" },
        { label: "isolation", value: "tenantId as a choke point on the JWT, now moving to schema per tenant" },
      ],
    },
    build: {
      title: "How I **built it**",
      steps: [
        { text: "Slice 1 was the whole loop", sub: "write a note, sync, broadcast, see it. Not half a system first." },
        { text: "Hardened before it went live", sub: "timing safe login, fail fast JWT secret, a cross tenant IDOR guard, a gap free reconnect merge" },
        { text: "Closed the deploy gap", sub: "workspace packages shipped raw TypeScript, so everything now compiles to dist. Proven with a headless end to end smoke against a bare node process." },
        { text: "Now moving to hard isolation", sub: "schema per tenant, with the live data read only as a safety net" },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "Mobile login", sub: "the app still runs on pasted tokens" },
        { text: "Queue on expo-sqlite", sub: "in memory for now, the interface is already there for it" },
        { text: "Voice, photo, map and export", sub: "deliberately deferred to slices 2 and 3" },
        { text: "The cutover to schema per tenant", sub: "rebuild per service, boot test, and only then switch over" },
      ],
    },
  },

  // ---------------------------------------------------------------- Koekkoekk
  {
    slug: "koekkoekk",
    name: "Koekkoekk",
    monogram: "KK",
    tagline: "A creator platform with **direct payments**, no credits and no tricks.",
    status: "built",
    statusNote: "three slices done, waiting on external accounts",
    family: "Own products",
    accent: { cyan: "#F472B6", blue: "#9333EA" },
    links: [
      { label: "not deployed yet", access: "closed", note: "waiting on the payment and storage accounts" },
    ],
    stats: [
      { n: "124", l: "tests green" },
      { n: "3", l: "slices done" },
      { n: "30%", l: "commission" },
    ],
    idea: {
      title: "An **honest** creator platform",
      lead:
        "A creator passes KYC, puts up paid content, a fan buys directly, the payment lands, commission comes off, the rest goes to the creator wallet. Plus chat with gifts and credit, and a marketplace. No token currency that hides the real price.",
    },
    why: {
      title: "Money deserves a **ledger**",
      lead:
        "On a platform where people genuinely earn, you cannot be sloppy with amounts. So money is whole cents, the wallet is an append only ledger with the balance derived, webhooks are idempotent and re verify at the provider, and an advisory lock per user blocks concurrent debits.",
      quote: "Marketplace online first. That one has to go live before anything else.",
    },
    stack: {
      title: "What it **runs on**",
      items: [
        { label: "monorepo", value: "pnpm and Turbo: api, web, db, types" },
        { label: "api", value: "NestJS on /api/v1" },
        { label: "web", value: "Next.js, a marketplace first front end behind a flag" },
        { label: "edges", value: "Mollie, Sumsub and S3 behind ports, with fakes so everything runs without credentials" },
        { label: "safety", value: "argon2id, six roles, an audit log, an 18+ gate, signed URLs, never public media" },
      ],
    },
    build: {
      title: "How I **built it**",
      lead: "Brainstorm, plan, subagent driven development. Every task started with a test.",
      steps: [
        { text: "Slice 1, the buying flow", sub: "from KYC to content in the library, including an end to end purchase test" },
        { text: "Slice 2, chat and credit", sub: "twelve TDD tasks, each reviewed, green five runs in a row" },
        { text: "Slice 3, the marketplace", sub: "the launch goal pulled forward, the rest hidden behind a flag" },
        { text: "Made it deploy ready", sub: "a render.yaml blueprint plus a runbook, the API binds properly on PORT and 0.0.0.0" },
      ],
    },
    open: {
      title: "What is **still standing**",
      lead: "Everything left sits with external accounts, not with the code.",
      items: [
        { text: "Connect the Render Blueprint to the repo" },
        { text: "Cloudflare R2 buckets plus S3 keys" },
        { text: "A real Mollie key and the cross referenced URLs" },
        { text: "Small hardening in the ledger", sub: "wrap settle in a try catch, sign the avatar and cover keys" },
      ],
    },
  },

  // ---------------------------------------------------------------- CRM
  {
    slug: "dstrct-crm",
    name: "DSTRCT CRM",
    monogram: "CR",
    tagline: "Sellers see their commission, **never my cost price**.",
    status: "live",
    statusNote: "on Render, slice 1 proven",
    family: "Own products",
    accent: { cyan: "#34E0A1", blue: "#176999" },
    url: "https://dstrct-crm-r2y3.onrender.com",
    links: [
      { label: "dstrct-crm-r2y3.onrender.com", url: "https://dstrct-crm-r2y3.onrender.com", access: "login", note: "internal tool, ask for an account" },
    ],
    stats: [
      { n: "4", l: "roles" },
      { n: "6", l: "pipeline stages" },
    ],
    idea: {
      title: "A **seller cockpit** for the team",
      lead:
        "The team logs in, sees prices and their own commission, tracks leads and pushes quotes through the pipeline. External sellers can sign up and wait for approval. Adding a client works from a form or simply by speaking it out loud.",
    },
    why: {
      title: "Margin is **not for everyone**",
      lead:
        "If sellers work with your prices, the cost price has to be unreachable. Not hidden in the interface but stripped server side, so it is simply not in the response. The seller sees the sale price and their own commission, I see price, cost and profit.",
    },
    stack: {
      title: "What it **runs on**",
      items: [
        { label: "app", value: "Next.js 14 App Router" },
        { label: "auth", value: "a JWT cookie through jose, bcrypt for passwords" },
        { label: "data", value: "Prisma on Render Postgres in Frankfurt" },
        { label: "voice", value: "webkitSpeechRecognition in Dutch, parsing name, mail and phone" },
      ],
    },
    build: {
      title: "How I **built it**",
      steps: [
        { text: "Access first", sub: "roles, an approval gate and a waiting screen for anyone not cleared yet" },
        { text: "Role separated dashboards", sub: "and verified that the cost price genuinely does not appear in the sales response" },
        { text: "The cockpit", sub: "a client list with status dots, a pipeline from new to signed, a quote suggestion with margin" },
        { text: "Got it live despite a blocker", sub: "the GitHub app refused to connect, so it deployed over the Render API with the repo briefly public" },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "Kill that deploy trick", sub: "every update still needs a briefly public repo. The real fix is connecting the GitHub app." },
        { text: "Rotate the passwords", sub: "the seeded accounts still share one" },
        { text: "Finish the quote pipeline", sub: "signature, a proper quote document, payout rules" },
      ],
    },
  },

  // ---------------------------------------------------------------- Rates
  {
    slug: "rates",
    name: "Rates page",
    monogram: "RA",
    tagline: "My own cheat sheet against **underpricing myself**, public and shareable.",
    status: "live",
    statusNote: "on Render",
    family: "Own products",
    accent: { cyan: "#FDE047", blue: "#CA8A04" },
    url: "https://dstrct-tarieven.onrender.com",
    links: [
      { label: "dstrct-tarieven.onrender.com", url: "https://dstrct-tarieven.onrender.com", access: "password", note: "behind a password on purpose, ask if you want to see it" },
    ],
    stats: [
      { n: "700+", l: "data points" },
      { n: "320+", l: "agencies compared" },
    ],
    idea: {
      title: "What should this **actually** cost in 2026",
      lead:
        "A shareable page with fixed prices for software, apps and AI, plus hiring me and the team. Underneath it a section on pricing in the AI era: what AI really did to rates, per category, with a defensible range.",
    },
    why: {
      title: "I structurally charge **too little**",
      lead:
        "That is not a feeling, it is a pattern. So the page is as much a wall for me as it is a sales asset. The core rule is written large: do not lower your price because AI made you faster. The market pays a premium for AI augmented work.",
      quote: "I do not give workshops. I build software.",
    },
    stack: {
      title: "What it **runs on**",
      items: [
        { label: "site", value: "a static site on Render, content in data.js" },
        { label: "lock", value: "a password screen on SHA-256, deliberately a soft client side gate" },
        { label: "owner mode", value: "cost and margin live in localStorage only, never in the repo" },
      ],
    },
    build: {
      title: "How I **built it**",
      steps: [
        { text: "Market research first", sub: "real data points, not gut feeling" },
        { text: "The AI era section", sub: "video down seventy percent, custom software barely moved, hourly rates if anything up" },
        { text: "An audit on myself", sub: "the headline numbers contradicted the data, so they were pulled back to what is actually there" },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "Shield the sales playbook", sub: "the counter arguments are visible to anyone who gets in" },
        { text: "A real server login", sub: "the current gate can be worked around and I know it" },
      ],
    },
  },

  // ---------------------------------------------------------------- OS demo
  {
    slug: "os-demo",
    name: "OS demo site",
    monogram: "DM",
    tagline: "The whole OS story as a shareable site, **handmade** rather than generated.",
    status: "live",
    statusNote: "on Vercel",
    family: "Own products",
    accent: { cyan: "#22D3EE", blue: "#8B5CF6" },
    url: "https://dstrct-os-demo.vercel.app",
    links: [
      { label: "dstrct-os-demo.vercel.app", url: "https://dstrct-os-demo.vercel.app", access: "open" },
    ],
    stats: [
      { n: "5", l: "pages" },
      { n: "3", l: "rejected attempts" },
      { n: "17", l: "brains still to build" },
    ],
    idea: {
      title: "**Show** the system, do not explain it",
      lead:
        "A public site with an interactive dashboard, the four brains, the strategy, the deep dive and an investor pitch. Meant for people who cannot get into the system itself.",
    },
    why: {
      title: "Three attempts were **wrong**",
      lead:
        "The first three presentations were rejected, and rightly so. What worked was real handmade interface instead of AI imagery, with a light and dark toggle and the prism house style. A real screen convinces, a picture of a screen does not.",
    },
    stack: {
      title: "What it **runs on**",
      items: [
        { label: "build", value: "separate build scripts that write HTML, no framework" },
        { label: "hosting", value: "Vercel, deployed over the CLI, protection turned off through the API" },
        { label: "imagery", value: "brain illustrations generated with gpt-image-1" },
        { label: "sourcing", value: "the Build Bible plus 2026 market research" },
      ],
    },
    build: {
      title: "How I **built it**",
      steps: [
        { text: "One builder per page", sub: "dashboard, brains, strategy, deep dive, pitch" },
        { text: "Content backed by research", sub: "competitors per domain, whitespace, eleven module combinations, five packages" },
        { text: "Made it public", sub: "sso protection set to null over the API, otherwise nobody can look" },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "Its own domain", sub: "os.dstrctgroup.com for instance" },
        { text: "The dashboard on real data", sub: "right now it shows the shape, not the numbers" },
      ],
    },
  },

  // ---------------------------------------------------------------- Fionie
  {
    slug: "fionie",
    name: "Fionie",
    monogram: "FO",
    tagline: "An AI learning companion that **grows up with a child**, from toddler to career.",
    status: "exploring",
    statusNote: "spec approved, the writing workbench is built",
    family: "Exploration",
    accent: { cyan: "#F5C242", blue: "#4338CA" },
    links: [
      { label: "nothing to open yet", access: "closed", note: "the workbench runs locally, the companion is not built" },
    ],
    stats: [
      { n: "23", l: "sources verified" },
      { n: "1", l: "learning profile for life" },
      { n: "14", l: "founding documents" },
    ],
    idea: {
      title: "A companion you **do not lose**",
      lead:
        "An AI companion that follows a person from about four years old into their career, carrying one continuous learning profile that travels with them. Not a tutor for a subject but continuity: it knows how you learn, across years. It asks how you got to an answer instead of marking it wrong, because the reasoning is the part worth rewarding.",
    },
    why: {
      title: "Education sorts children by **grades**",
      lead:
        "Children get sorted while not every method suits every child, and schools do less and less on social development. I see it with my own kids. The first test subject is my daughter, who wants to finish fast and makes mistakes because of it. One principle: reward understanding, never speed.",
      quote: "I want the child to be understood, not judged.",
    },
    stack: {
      title: "What it **becomes**",
      lead: "The market scan shaped this as much as the technology did.",
      items: [
        { label: "character", value: "a genuinely talking 3D figure through react-three-fiber, TTS and lipsync" },
        { label: "brain", value: "Claude as the conversational engine" },
        { label: "first subject", value: "maths, around ages eight to ten" },
        { label: "privacy", value: "no accounts, no database, no personal data in version 0.1" },
        { label: "workbench", value: "Next.js 15 on Tailwind v4, autosave to JSON, streaming write-along AI" },
      ],
    },
    build: {
      title: "How I **approached it**",
      steps: [
        { text: "A real market scan first", sub: "twenty three sources, twenty five claims verified. Verdict: the three way combination belongs to nobody." },
        { text: "Cut the emotion camera", sub: "the EU AI Act bans emotion recognition in education. Fionie understands through conversation, not by filming." },
        { text: "Picked the channel", sub: "schools move slowly with four publishers holding eighty percent of the books, so parent pays first" },
        { text: "Wrote the spec", sub: "the understanding buddy: one principle, one subject, one test child" },
        { text: "Built the workbench", sub: "all 165 documents from the master index, my fourteen editable, the rest read only, with an AI that writes along into a preview instead of over your text" },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "The build plan", sub: "the spec is done, the planning phase is not" },
        { text: "Building version 0.1", sub: "the talking character plus the maths conversation" },
        { text: "Testing with a real child", sub: "everything before that is theory" },
        { text: "Export and upload from the workbench", sub: "the data model is ready for it, the button is not" },
      ],
    },
  },

  // ---------------------------------------------------------------- CMP
  {
    slug: "creatief-met-plezier",
    name: "Creatief met Plezier",
    monogram: "CM",
    tagline: "A webshop with **eleven thousand products** rebuilt, plus a back office that holds up.",
    status: "live",
    statusNote: "on Render, domain switch still open",
    family: "Client work",
    accent: { cyan: "#FF8A65", blue: "#E85A4F" },
    links: [
      { label: "cmp-storefront.onrender.com", url: "https://cmp-storefront.onrender.com", access: "open", note: "the rebuilt shop" },
    ],
    stats: [
      { n: "11,400", l: "products migrated" },
      { n: "642", l: "records cleaned" },
      { n: "6", l: "cafe packages live" },
    ],
    idea: {
      title: "A webshop you can **run yourself**",
      lead:
        "The old site rebuilt as a modern store, with a back office where the owner manages workshops, enriches products and sells packages. Including an AI button that proposes description, SEO, theme and tags with a live preview that moves along.",
    },
    why: {
      title: "The filters were **lying** to customers",
      lead:
        "The menu items turned out to be technical filters rather than categories, and the old tags were full of the wrong products. Click paper and you got things that are not paper. That is not cosmetic, it is a sales problem, so it got a cleanup tool with delete only rules.",
      quote: "If the filter lies, the customer stops trusting the whole store.",
    },
    stack: {
      title: "What it **runs on**",
      items: [
        { label: "monorepo", value: "pnpm and turbo: storefront and bff" },
        { label: "storefront", value: "Next.js 15" },
        { label: "bff", value: "NestJS 11 with Prisma 6 on one Postgres, Medusa ripped out" },
        { label: "hosting", value: "everything on Render, photos on a persistent disk" },
        { label: "payments", value: "Mollie through cart and checkout" },
      ],
    },
    build: {
      title: "How I **built it**",
      steps: [
        { text: "Migration first", sub: "eleven thousand products across, including three and a half gigabytes of legacy photos" },
        { text: "SEO as the foundation", sub: "structured data, a sharded sitemap, and the old URLs redirecting properly" },
        { text: "Back office in fourteen steps", sub: "workshop management, the admin shell, product AI, then the brand palette over it" },
        { text: "A real audit on top", sub: "seven critical findings, among them fake reviews in the structured data and overselling" },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "Switch the production domain", sub: "it still serves the old site" },
        { text: "Rotate the admin token", sub: "and the old password that once sat in history" },
        { text: "The last hardening steps", sub: "migration constraints, auth, checkout and bulk are deliberately gated" },
      ],
    },
  },

  // ---------------------------------------------------------------- Platinum
  {
    slug: "platinum",
    name: "Platinum",
    monogram: "PL",
    tagline: "Agency site plus webshop, pushed through **seven audit rounds** to zero blockers.",
    status: "live",
    statusNote: "site running, webshop go live audited",
    family: "Client work",
    accent: { cyan: "#A78BFA", blue: "#7C5CFF" },
    url: "https://platinum-management-agency.vercel.app",
    links: [
      { label: "platinum-management-agency.vercel.app", url: "https://platinum-management-agency.vercel.app/en", access: "open" },
    ],
    stats: [
      { n: "64", l: "pages" },
      { n: "52", l: "defects fixed" },
      { n: "7", l: "audit rounds" },
    ],
    idea: {
      title: "An agency that looks **serious**",
      lead:
        "A bilingual site with brands, creators, a roster with profiles and a booking form, cases, blog and recruitment. Behind it a platform: roles, organisations, applications with a state machine, a TikTok connection and a webshop.",
    },
    why: {
      title: "A green test suite proves **nothing**",
      lead:
        "The suite was green and seven audit rounds still found around fifty two real defects. The lesson I keep: never trust a bare claim that something is clean, verify every survivor yourself. Only then may you say go.",
      quote: "Green means your tests pass, not that your product works.",
    },
    stack: {
      title: "What it **runs on**",
      items: [
        { label: "site", value: "Next.js 16 with App Router and Turbopack, Tailwind v4" },
        { label: "language", value: "Dutch and English through a language segment in the route" },
        { label: "look", value: "dark with electric violet, heavy italic poster headlines" },
        { label: "hosting", value: "Vercel over the CLI, not git connected" },
      ],
    },
    build: {
      title: "How I **built it**",
      steps: [
        { text: "Content as code", sub: "all copy in typed files per language, no CMS needed" },
        { text: "A separate architecture phase", sub: "an audit, a target architecture in twenty one sections, an ERD and a plan of twenty pull requests" },
        { text: "Go live audit in rounds", sub: "several agents in parallel, every finding checked by hand" },
        { text: "Removed what the user disliked", sub: "smooth scroll ripped out because it felt laggy, and not an em dash anywhere" },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "Production environment variables", sub: "the last prerequisites are fail closed, so nothing breaks while they are empty" },
        { text: "Open decisions", sub: "payment provider, the TikTok app and its scopes, and the source for live status" },
      ],
    },
  },

  // ---------------------------------------------------------------- Maya
  {
    slug: "maya",
    name: "Maya",
    monogram: "MY",
    tagline: "Say **hey maya** in a voice channel and someone genuinely answers.",
    status: "built",
    statusNote: "worked live, GPU deliberately off",
    family: "Exploration",
    accent: { cyan: "#2DD4BF", blue: "#0EA5E9" },
    links: [
      { label: "runs in a Discord voice channel", access: "closed", note: "the GPU is off to avoid idle billing" },
    ],
    stats: [
      { n: "972", l: "tests green" },
      { n: "~1s", l: "achievable start" },
    ],
    idea: {
      title: "Two way **voice** in Discord",
      lead:
        "You say hey maya followed by your question, speech becomes text, the brain answers and a self hosted voice speaks it, with the ability to talk over it. Multiple turns back to back, confirmed working.",
    },
    why: {
      title: "Typing is a **threshold**",
      lead:
        "A brain you speak to feels different from a brain you type at. But I wanted to stay honest about the ceiling: this is a chain of separate parts, so it will not match an integrated speech model. About a second and then smooth is achievable, three hundred milliseconds is not.",
    },
    stack: {
      title: "What it **runs on**",
      items: [
        { label: "listening", value: "Deepgram, wake word detected on final transcripts" },
        { label: "thinking", value: "Claude, the same reply function as the text bot" },
        { label: "speaking", value: "self hosted CSM-1B on a Modal H100" },
        { label: "channel", value: "inside the existing Discord worker process, since one token means one connection" },
      ],
    },
    build: {
      title: "How I **built it**",
      steps: [
        { text: "Rewired the wake word", sub: "the first library never responded, so detection moved onto the transcripts themselves" },
        { text: "The big bug", sub: "the receiver delivers only one speaking burst, so you must resubscribe per burst, with a guard against dozens of subscriptions per second" },
        { text: "Pipelined the sentences", sub: "synthesising the next one while the current one plays" },
        { text: "Turned the GPU off", sub: "four dollars an hour idling is waste, so it is deliberately stopped until I continue" },
      ],
    },
    open: {
      title: "What is **still standing**",
      items: [
        { text: "Stream instead of wait", sub: "return audio in chunks as soon as they are ready" },
        { text: "Get faster than realtime", sub: "currently about one and a half times the length of the sentence" },
        { text: "Its own vocal tone", sub: "it leans on the text persona right now" },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export const FAMILIES = ["The OS", "Brains", "Own products", "Client work", "Exploration"] as const;
