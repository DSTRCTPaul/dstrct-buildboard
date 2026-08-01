// Every block on the board. One entry = one project = one deck.
// Facts here come from the actual build sessions: repos, stacks, what shipped, what is still open.
// Keep it honest — a block that claims "live" must really be live.

export type Status = "live" | "gebouwd" | "aanbouw" | "visie";

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
  stats: { n: string; l: string }[];
  idea: { title: string; lead: string };
  why: { title: string; lead: string; quote?: string };
  stack: { title: string; lead?: string; items: { label: string; value: string }[] };
  build: { title: string; lead?: string; steps: { text: string; sub?: string }[] };
  open: { title: string; lead?: string; items: { text: string; sub?: string }[] };
}

export const STATUS_LABEL: Record<Status, string> = {
  live: "live",
  gebouwd: "gebouwd",
  aanbouw: "in aanbouw",
  visie: "verkenning",
};

export const PROJECTS: Project[] = [
  // ---------------------------------------------------------------- DSTRCT OS
  {
    slug: "dstrct-os",
    name: "DSTRCT OS",
    monogram: "OS",
    tagline: "Een bedrijfsbrein dat mijn **hele context** begrijpt, niet nog een dashboard.",
    status: "live",
    statusNote: "kern draait op Render, breinen aangesloten",
    family: "Het OS",
    accent: { cyan: "#34E0A1", blue: "#176999" },
    stats: [
      { n: "4", l: "verbonden breinen" },
      { n: "~28", l: "breinen in de visie" },
      { n: "6", l: "kernlagen" },
      { n: "2094", l: "tests groen" },
    ],
    idea: {
      title: "Geen losse tools maar een **tweede brein**",
      lead:
        "Een OS dat mijn volledige context begrijpt, prive en zakelijk gescheiden maar in samenhang. Het onthoudt wat ik vergeet, haalt naar boven wat nog moet, ziet patronen en kijkt vooruit. In de bijbel heet dat een Autonomous Enterprise Cortex: verbind de data, begrijp de context, bereid de volgende actie voor, leer van de uitkomst.",
    },
    why: {
      title: "Mechanische tools **kloppen niet**",
      lead:
        "Een tool die data verplaatst zonder te snappen wat het betekent geeft een verkeerd beeld, en dat beeld stapelt op. Daarom is elke feature een orgaan dat begrepen context voedt aan de kennisgraaf, nooit een losstaand knopje. Finance is bewust de eerste wig: daar zit de meest concrete data en de meeste pijn.",
      quote: "Context begrijpen is het belangrijkste. Zonder begrip klopt het brein later niet.",
    },
    stack: {
      title: "Waar het **op draait**",
      lead: "Een Next.js-monoliet met een Prisma-kennisgraaf eronder en breinen ernaast.",
      items: [
        { label: "app", value: "Next.js App Router op Render, repo dstrct-pricing-tool" },
        { label: "data", value: "Prisma en Postgres: CanonicalEntity, KnowledgeNode, EpisodicMemory, PatternMemory" },
        { label: "acties", value: "Signal, ActionDraft, approval, Task, outcome" },
        { label: "koppelingen", value: "Jortt, Gmail, Vercel-kosten, Render, Discord" },
        { label: "design", value: "Minimal-Mesh design system, tokens in docs/design-system" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      lead: "In golven, elke golf spec, plan, subagents, review, deploy.",
      steps: [
        { text: "Eerst de finance-wig", sub: "document-intake, OCR, Jortt-matching, koppelvoorstellen. Concrete data voor abstracte breinen." },
        { text: "Governance voor autonomie", sub: "harde build- en spendlimieten, dry-run, approval-gates. Pas daarna mochten de handen los." },
        { text: "Zelfbewustzijn", sub: "self-check, self-eval, en een bot die PR's op zijn eigen code schrijft, altijd maintainer-gated." },
        { text: "Breinen aansluiten", sub: "BrainRegistry met Midas, Ariel, Radar en Finance, elk via een strak ask-contract." },
        { text: "De ruggengraat", sub: "provenance-envelopes, Canonical Entity Registry, event-bus en grounded-ask in src/lib/spine." },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Echte grounding voor Midas, Ariel en Radar", sub: "die geven nu nog standaard confidence 0.5 en geen bewijs terug" },
        { text: "Event-bus duurzaam maken", sub: "nu in-process, er stroomt nog geen enkel echt event doorheen" },
        { text: "Eval-harness per brein", sub: "golden-set en correctiegraad, zodat kwaliteit meetbaar wordt" },
        { text: "De bijbel-ruggengraat inhalen", sub: "de audit was eerlijk: er is breedte gebouwd voor diepte" },
      ],
    },
  },

  // ---------------------------------------------------------------- Ariel
  {
    slug: "ariel",
    name: "Ariel",
    monogram: "AR",
    tagline: "Een **creative director** in Discord die het creatieve team echt begeleidt.",
    status: "live",
    statusNote: "op Render sinds juli 2026",
    family: "Breinen",
    accent: { cyan: "#C084FC", blue: "#EC4899" },
    stats: [
      { n: "236", l: "tests groen" },
      { n: "9", l: "cognitie-fasen" },
      { n: "1-10", l: "creatieve scores" },
    ],
    idea: {
      title: "Een brein dat **creatief werk begrijpt**",
      lead:
        "Ariel praat mee met de designer en de editor, viert wat af is en pusht op wat blijft liggen. Niet een bot die commando's uitvoert maar een collega die ziet wat er gemaakt wordt, waarom het werkt en wat de volgende stap is. De taal is het product: je typt gewoon wat je bedoelt.",
    },
    why: {
      title: "Creatief werk **verdwijnt** in de ruis",
      lead:
        "Een team maakt veel en niemand houdt bij wat werkte. Metrics staan los van de creatieve keuzes die eronder liggen. Ariel legt die twee naast elkaar: welke hook, welk format, welke editor, en wat kwam eruit. En hij klinkt nooit zekerder dan de data, elk profiel draagt een confidence-label.",
      quote: "Ik wil geen tool die scoort. Ik wil iets dat begrijpt wat we maken.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "runtime", value: "TypeScript en ESM op een Render-worker, repo DSTRCTPaul/ariel" },
        { label: "data", value: "Prisma met een Descriptor-EAV-model naast relationeel platform en merk" },
        { label: "brein", value: "Claude Opus met adaptive thinking, art-director discipline" },
        { label: "kanaal", value: "Discord, natuurlijke taal, commando's alleen als verborgen power-laag" },
        { label: "decks", value: "gedeelde pitch-engine met violet-roze accent" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      lead: "Subagent-gedreven in zes golven, elke golf apart gereviewd, gemerged en gedeployed.",
      steps: [
        { text: "Model en repositories", sub: "Content als bron-anker: een opname wordt veel posts. Campaign licht gehouden." },
        { text: "Nederlandse capture", sub: "gesproken taal naar gestructureerde descriptors, personen op stabiel Discord-id" },
        { text: "Pure profiel-engine", sub: "een dimensie is een regel die een post-set kiest en er een ProfileCard van maakt" },
        { text: "Grounded creative brain", sub: "creative_context grounding plus de discipline zie, waarom, verander, behoud, volgende" },
        { text: "Learning engine", sub: "wat werkt er, geleerd uit echte uitkomsten in plaats van uit meningen" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "De social-ingestielaag", sub: "TikTok en Instagram leveren nul data aan, het fundament staat maar de pijp ontbreekt" },
        { text: "Platform-tokens", sub: "harde blokkade, TikTok is de lastigste" },
        { text: "Parsing in een worker-thread", sub: "een pathologisch bestand kan nog steeds het event-loop blokkeren, de echte OOM-fix" },
        { text: "Fase 2 gestructureerd geheugen", sub: "van gespreksgeheugen naar echt begrip over tijd" },
      ],
    },
  },

  // ---------------------------------------------------------------- Midas
  {
    slug: "midas",
    name: "Midas",
    monogram: "MI",
    tagline: "Een autonome **Chief Growth Officer** voor mijn klanten, geen rapportagetool.",
    status: "live",
    statusNote: "op Render, value-spine gesloten",
    family: "Breinen",
    accent: { cyan: "#22D3EE", blue: "#2563EB" },
    stats: [
      { n: "858", l: "tests groen" },
      { n: "5", l: "lagen marktonderzoek" },
      { n: "4", l: "bots met de deck-engine" },
    ],
    idea: {
      title: "Een brein dat klanten **laat groeien**",
      lead:
        "Midas ziet kansen, bereidt ze voor, wacht op goedkeuring, voert uit en leert van de uitkomst. Die lus is helemaal dicht: opportunity, task, execution, outcome. Hij levert onderzoek en kansen niet als tekstmuur maar als presentatie die je zo aan een klant laat zien.",
    },
    why: {
      title: "Advies zonder **geheugen** is waardeloos",
      lead:
        "Iedereen kan een lijstje tips maken. De echte waarde zit in een systeem dat over jaren en over klanten heen bewijs opbouwt: dit advies hield stand X van de N keer, in de zorg werkt het anders. Dat is de moat. Elke bouwstap moet Midas een betere groeidirecteur maken, niet een betere tool.",
      quote: "De miljoenentest: maakt dit hem een betere CGO of alleen een mooiere tool.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "runtime", value: "TypeScript en ESM, worker plus API-service op Render" },
        { label: "brein", value: "Claude Opus tool-agent, read-only tools, alles met gevolgen is approval-gated" },
        { label: "data", value: "Prisma, Advice Ledger, belief-systeem met confidence over tijd" },
        { label: "onderzoek", value: "Serper, Google Places, Keyword Planner, eigen crawler" },
        { label: "output", value: "cinematic pitch-engine, cyaan en blauw" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      lead: "Ariel gekloond als patroon, daarna een eigen weg.",
      steps: [
        { text: "Value-spine eerst", sub: "sense, prepare, approve, execute-gated, mark-applied, learn. Prod-gevalideerd op een echte klant." },
        { text: "Marktonderzoek in vijf lagen", sub: "concurrenten, reputatie, klantstem, omvang, trend, plus primaire intake" },
        { text: "Conversatielaag", sub: "meerdere beurten geheugen, restart-proof, persona die aanvoelt als een collega" },
        { text: "Taal-spiegeling", sub: "een Claude-pass rendert het antwoord in de taal van de schrijver, getallengetrouw" },
        { text: "Deck-engine", sub: "full-screen keynote-slides, geen scroll-doc. De eerste poging werd afgekeurd, terecht." },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Auto-grade van beliefs", sub: "GA4 en Search Console terug het belief-ledger in, zodat vertrouwen zichzelf bijstelt" },
        { text: "Execute-integraties", sub: "de handen buiten Discord, nog steeds achter approval" },
        { text: "Cross-brain als laatste", sub: "eerst elke specialist echt sterk, dan pas orkestreren" },
      ],
    },
  },

  // ---------------------------------------------------------------- Radar
  {
    slug: "radar",
    name: "Radar",
    monogram: "RA",
    tagline: "Lead-generatie en outreach, maar **nooit een mail zonder toestemming**.",
    status: "live",
    statusNote: "API op Render, bot nog niet gedeployed",
    family: "Breinen",
    accent: { cyan: "#FBBF24", blue: "#F97316" },
    stats: [
      { n: "3e", l: "sibling-brein" },
      { n: "0", l: "mails zonder akkoord" },
    ],
    idea: {
      title: "Een brein dat **prospects vindt**",
      lead:
        "Radar zoekt bedrijven die bij ons passen, bouwt een pijplijn, schrijft concept-outreach en houdt bij wat er gebeurt. Adwaith bouwt eraan mee. Het is het derde brein naast Midas en Ariel en het draait op precies hetzelfde patroon.",
    },
    why: {
      title: "Outreach is **onomkeerbaar**",
      lead:
        "Een verkeerde mail naar een prospect haal je niet terug. Daarom is de hardste regel in het hele systeem hier ingebouwd: Radar mag nooit outreach sturen zonder goedkeuring per geval. Dat zit niet in een beleidsdocument maar in de code, in approval.ts en in de send-claim van de executor.",
      quote: "Nooit outreach zonder mijn akkoord. Dat is geen instelling, dat is een muur.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "repo", value: "DSTRCT-Tech/radar, TypeScript en ESM, Prisma, vitest" },
        { label: "diensten", value: "radar-api op Render met eigen Postgres, plus een Discord-worker" },
        { label: "vinden", value: "Google Places en Brave search" },
        { label: "mailen", value: "Resend, altijd als concept, altijd gated" },
        { label: "model", value: "Claude Sonnet, agent-laag op Opus" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Pariteit met de siblings", sub: "conversatiegeheugen uit Ariel geport, dezelfde drie standaardlagen" },
        { text: "Read-only tool-agent", sub: "pipeline bekijken, leads en drafts lezen, peers bevragen. Zoeken en sturen staat bewust niet in de toollijst." },
        { text: "Aangesloten op het OS", sub: "als derde brein geregistreerd, self-check ging van 2 naar 3 reachable" },
        { text: "Migreren via het interne netwerk", sub: "een Pre-Deploy-stap op Render, want lokaal migreren naar die database valt dicht" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "radar-bot deployen", sub: "de Discord-kant draait nog niet live" },
        { text: "Regio-bewustzijn", sub: "landelijk ranken is onhaalbaar voor MKB, lokaal is de winbare route" },
        { text: "Echte grounding", sub: "bewijs en confidence teruggeven aan het OS in plaats van standaardwaarden" },
      ],
    },
  },

  // ---------------------------------------------------------------- Finance brein
  {
    slug: "finance-brein",
    name: "Finance-brein",
    monogram: "FI",
    tagline: "De boekhouding als **bevraagbaar brein**, inclusief bonnen die zichzelf koppelen.",
    status: "live",
    statusNote: "in het OS, auto-koppelen aan",
    family: "Breinen",
    accent: { cyan: "#34E0A1", blue: "#0E7490" },
    stats: [
      { n: "4e", l: "verbonden brein" },
      { n: "0.85", l: "confidence op echte data" },
      { n: "58", l: "gekoppelde bonnen" },
    ],
    idea: {
      title: "Vraag je **boekhouding** gewoon iets",
      lead:
        "Hoe staat de kaspositie, hoeveel verkeersboetes had ik dit jaar, welke afschrijving mist een bon. Het finance-brein antwoordt op echte data uit Jortt, ING, PayPal en de documentkluis, en het verzint niets. Als het bewijs er niet is zegt het dat.",
    },
    why: {
      title: "De AI deed het **slechter dan ik**",
      lead:
        "De oude flow liet negentig bonloze boekingen liggen terwijl ik met de hand tot vijftien kwam. Dat was het startpunt: niet slimmer klinken maar echt beter presteren dan handwerk. De motor werd daarom streng op uniciteit en afzender, en los op exactheid, want daar zit de fout-veiligheid.",
      quote: "Als de machine het slechter doet dan ik met de hand, dan is het geen machine maar een excuus.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "engine", value: "answerFinanceQuestion in het OS, hergebruikt door UI en brein-endpoint" },
        { label: "pijplijn", value: "mail naar intake naar OCR naar match naar koppelvoorstel naar Jortt" },
        { label: "OCR", value: "PDF naar PNG via mupdf, werkend in serverless" },
        { label: "opslag", value: "Vercel Blob via OIDC, geen read-write token" },
        { label: "veiligheid", value: "kill-switch, fail-closed rollback, prive-documenten nooit in zakelijke flows" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Eerst de kluis", sub: "bulk-upload, classificatie, OCR-review, een read-only cockpit erboven" },
        { text: "Toen de matcher", sub: "valuta-bewust, datumvenster, vervuiling eruit, afzenderdomein tegen leverancier" },
        { text: "Gated voor automatisch", sub: "elke koppeling eerst als voorstel, de veilige band groeide tot auto mocht" },
        { text: "Promotie tot brein", sub: "een ask-endpoint erop, geregistreerd, self-check van 3 naar 4" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Creditcard-restant april", sub: "ongeveer 1.792 euro nog af te letteren" },
        { text: "Robuustheid van de LLM-JSON", sub: "een koude start gaf ooit geen bruikbaar antwoord, retry en repair ontbreken" },
        { text: "Locatie-OCR en boetes", sub: "fase 1a en 1b van de auto- en aanwezigheidsdata staan nog open" },
      ],
    },
  },

  // ---------------------------------------------------------------- Spine / Sora
  {
    slug: "brain-spine",
    name: "Brain-spine en Sora",
    monogram: "SP",
    tagline: "De ruggengraat waarlangs **breinen praten**, plus een stem die het aanstuurt.",
    status: "aanbouw",
    statusNote: "fase 1 en 2 live, Sora deels op een branch",
    family: "Het OS",
    accent: { cyan: "#8B5CF6", blue: "#2563EB" },
    stats: [
      { n: "2", l: "fases live" },
      { n: "0", l: "verzonnen antwoorden" },
    ],
    idea: {
      title: "Breinen die **praten**, geen gedeelde bak",
      lead:
        "Elk brein houdt zijn eigen geheugen en ze communiceren, in plaats van alles in een centrale opslag te gooien. Daarboven staat Sora: een commandolaag met een stem, die een opdracht vertaalt naar directives voor de juiste breinen, met preview, bevestiging en audit.",
    },
    why: {
      title: "Een gedeelde bak maakt **modder**",
      lead:
        "Als alle breinen in dezelfde opslag schrijven weet niemand meer waar een claim vandaan komt. Daarom draagt elk antwoord een envelop mee: de claim, het bewijs, de confidence, welk brein en per wanneer. Wie geen bewijs heeft, mag niets beweren.",
      quote: "Geen fase verzint zekerheid.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "provenance", value: "ProvenanceEnvelope met claim, evidenceRefs, confidence, sourceBrain, asOf" },
        { label: "identiteit", value: "Canonical Entity Registry bovenop de bestaande CanonicalEntity-tabel" },
        { label: "events", value: "in-process event-bus met stabiel contract voor later Postgres" },
        { label: "cortex", value: "entity-dossier dat elk eigenaar-brein grounded bevraagt" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Eerst kijken wat er al was", sub: "het schema had al CanonicalEntity, EvidenceRecord, Signal en ActionDraft. Geen nieuwe tabel nodig." },
        { text: "Pure kern, live randen", sub: "de bibliotheek is deterministisch, tijd komt van de aanroeper. Geen Date.now in de kern." },
        { text: "Dossier end-to-end bewezen", sub: "op een echte klant kwam er finance-bewijs met confidence 0.85 terug, en een weigering waar geen data was" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Sora echt in gebruik", sub: "de M1-ruggengraat staat op een branch, niet gemerged" },
        { text: "Dossier aan Sora hangen", sub: "zodat je het gewoon kunt vragen in plaats van een endpoint aan te roepen" },
        { text: "Duurzame event-transport", sub: "en dan een eerste echte eventstroom" },
      ],
    },
  },

  // ---------------------------------------------------------------- Sentinel
  {
    slug: "sentinel",
    name: "Sentinel",
    monogram: "SE",
    tagline: "Realtime incident-triage voor de beveiligingsbranche, **van vloer naar centrale post**.",
    status: "live",
    statusNote: "op Render sinds juli 2026",
    family: "Eigen producten",
    accent: { cyan: "#60A5FA", blue: "#1E40AF" },
    stats: [
      { n: "24", l: "tests groen" },
      { n: "3", l: "modules" },
      { n: "4", l: "rollen" },
    ],
    idea: {
      title: "Van **vloer naar centrale post** in een seconde",
      lead:
        "Een beveiliger maakt op zijn telefoon een notitie met kleur-triage, die synchroniseert idempotent naar de API en verschijnt live in de feed van de centrale post. Daarboven admin-rapportage en export. Multi-tenant, want dit is een product voor de hele branche.",
    },
    why: {
      title: "Meldingen sterven in **appgroepen**",
      lead:
        "Wat op de vloer gebeurt komt nu aan via WhatsApp en telefoon, en verdwijnt daarna. Er is geen tijdlijn, geen rapport, geen bewijs. En het moet werken zonder netwerk, want een parkeergarage heeft geen bereik. Offline-first is geen feature maar de voorwaarde.",
      quote: "De data van de klant is de bron. Daar blijf je vanaf.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "monorepo", value: "pnpm en turbo" },
        { label: "api", value: "NestJS met Socket.io en Prisma op Postgres, Render Frankfurt" },
        { label: "web", value: "Next.js voor centrale post en admin" },
        { label: "mobiel", value: "Expo, offline-first met een lokale wachtrij" },
        { label: "isolatie", value: "tenantId als choke-point op JWT, nu in ombouw naar schema-per-tenant" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Slice 1 was de hele lus", sub: "notitie maken, syncen, broadcasten, zien. Niet eerst een half systeem." },
        { text: "Gehard voor het echt aanging", sub: "timing-safe login, fail-fast JWT-secret, cross-tenant IDOR-guard, gap-vrije reconnect-merge" },
        { text: "De deploy-gap opgelost", sub: "workspace-packages leverden rauwe TypeScript, dus alles naar dist gecompileerd. Bewezen met een headless e2e-smoke tegen een kaal node-proces." },
        { text: "Nu naar harde isolatie", sub: "schema-per-tenant, gemodelleerd naar de activity-booking-aanpak, met de live data read-only als vangnet" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Mobiele login", sub: "de app draait nog op plakbare tokens" },
        { text: "Wachtrij naar expo-sqlite", sub: "nu nog in het geheugen, de interface is er al voor" },
        { text: "Spraak, foto, kaart en export", sub: "bewust uitgesteld naar slice 2 en 3" },
        { text: "De cutover naar schema-per-tenant", sub: "per service ombouwen, boot-test, dan pas omschakelen" },
      ],
    },
  },

  // ---------------------------------------------------------------- Koekkoekk
  {
    slug: "koekkoekk",
    name: "Koekkoekk",
    monogram: "KK",
    tagline: "Een creator-platform met **directe betalingen**, zonder credits en zonder trucjes.",
    status: "gebouwd",
    statusNote: "drie slices af, wacht op externe accounts",
    family: "Eigen producten",
    accent: { cyan: "#F472B6", blue: "#9333EA" },
    stats: [
      { n: "124", l: "tests groen" },
      { n: "3", l: "slices af" },
      { n: "30%", l: "commissie" },
    ],
    idea: {
      title: "Een **eerlijk** creator-platform",
      lead:
        "Creator doet KYC, zet betaalde content klaar, fan koopt direct, betaling komt binnen, commissie eraf, rest naar de wallet van de creator. Daarnaast chat met cadeaus en tegoed, en een marktplaats. Geen credit-valuta die de prijs verstopt.",
    },
    why: {
      title: "Geld verdient **een grootboek**",
      lead:
        "Op een platform waar mensen echt verdienen mag je niet slordig zijn met bedragen. Dus geld in hele centen, de wallet als append-only grootboek waarbij het saldo wordt afgeleid, webhooks idempotent en her-verifierend bij de provider, en een advisory lock per gebruiker tegen gelijktijdig afboeken.",
      quote: "Eerst alleen de marktplaats online. Die moet als eerste live.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "monorepo", value: "pnpm en Turbo, api, web, db, types" },
        { label: "api", value: "NestJS op /api/v1" },
        { label: "web", value: "Next.js, marktplaats-first voorkant achter een flag" },
        { label: "randen", value: "Mollie, Sumsub en S3 achter ports, met fakes zodat alles draait zonder creds" },
        { label: "veiligheid", value: "argon2id, zes rollen, audit-log, 18+ gate, signed URLs, nooit publieke media" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      lead: "Brainstorm, plan, subagent-driven development. Elke taak eerst een test.",
      steps: [
        { text: "Slice 1, de koopstroom", sub: "van KYC tot content in de bibliotheek, inclusief e2e purchase-flow" },
        { text: "Slice 2, chat en tegoed", sub: "twaalf TDD-taken, elk apart gereviewd, vijf keer stabiel groen" },
        { text: "Slice 3, de marktplaats", sub: "het launch-doel naar voren gehaald, de rest verstopt achter een flag" },
        { text: "Deploy-klaar gemaakt", sub: "render.yaml blueprint plus een runbook, de API bindt netjes op PORT en 0.0.0.0" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      lead: "Alles wat rest ligt bij externe accounts, niet bij de code.",
      items: [
        { text: "Render Blueprint aan de repo koppelen" },
        { text: "Cloudflare R2 buckets plus S3-sleutels" },
        { text: "Echte Mollie-sleutel en de kruislingse URL's" },
        { text: "Kleine hardening in het grootboek", sub: "settle in try-catch, avatar- en cover-keys signen" },
      ],
    },
  },

  // ---------------------------------------------------------------- Klauterkooi
  {
    slug: "klauterkooi",
    name: "Activity Booking",
    monogram: "KB",
    tagline: "Multi-tenant boekingsplatform met een **eigen schema per klant**.",
    status: "gebouwd",
    statusNote: "draait, dient als model voor Sentinel",
    family: "Eigen producten",
    accent: { cyan: "#A3E635", blue: "#16A34A" },
    stats: [
      { n: "1", l: "schema per tenant" },
      { n: "0", l: "gedeelde rijen" },
    ],
    idea: {
      title: "Boekingen met **harde muren** ertussen",
      lead:
        "Een platform waarop meerdere locaties hun activiteiten verkopen, waarbij elke klant een eigen Postgres-schema krijgt in plaats van een kolom met een tenant-id. Fysieke isolatie in plaats van een filter die je kunt vergeten.",
    },
    why: {
      title: "Een vergeten **where** is een datalek",
      lead:
        "Bij gepoolde multi-tenancy is elke query die het tenant-filter mist een lek. Bij schema-per-tenant kan tenant A het schema van tenant B simpelweg niet lezen, dat is bewezen in de tests. Duurder in beheer, maar je slaapt beter. Deze aanpak werd het model voor de ombouw van Sentinel.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "api", value: "NestJS 11" },
        { label: "web", value: "Next.js 15" },
        { label: "data", value: "Postgres 16, control-plane-schema plus een schema per tenant" },
        { label: "provisioning", value: "rol, schema, baseline en grants in een provisioner-service" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Control-plane apart", sub: "Tenant, TenantDomain, PlatformUser, AuditLog in een eigen schema" },
        { text: "Tenant-schema zonder tenantId", sub: "de kolom is overbodig zodra de muur fysiek is" },
        { text: "Host naar tenant", sub: "het domein bepaalt in welk schema je terechtkomt" },
        { text: "Isolatie bewezen", sub: "een test die aantoont dat A niet bij B kan" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Bredere uitrol", sub: "het patroon is bewezen, de tweede klant is de test" },
        { text: "Migratiegereedschap generiek maken", sub: "de migrator is nu op maat" },
      ],
    },
  },

  // ---------------------------------------------------------------- CRM
  {
    slug: "dstrct-crm",
    name: "DSTRCT CRM",
    monogram: "CR",
    tagline: "Verkopers zien hun commissie, **nooit mijn kostprijs**.",
    status: "live",
    statusNote: "op Render, slice 1 bewezen",
    family: "Eigen producten",
    accent: { cyan: "#34E0A1", blue: "#176999" },
    url: "https://dstrct-crm-r2y3.onrender.com",
    stats: [
      { n: "4", l: "rollen" },
      { n: "6", l: "stappen in de pijplijn" },
    ],
    idea: {
      title: "Een **verkoper-cockpit** voor het team",
      lead:
        "Het team logt in, ziet prijzen en de eigen commissie, houdt leads bij en duwt offertes door de pijplijn. Externe verkopers kunnen zichzelf aanmelden en wachten op goedkeuring. Een nieuwe klant toevoegen kan met een formulier of gewoon door het in te spreken.",
    },
    why: {
      title: "Marge is **niet van iedereen**",
      lead:
        "Als je verkopers laat werken met jouw prijzen, moet de kostprijs onbereikbaar zijn. Niet verstopt in de interface maar server-side gestript, zodat het simpelweg niet in de response zit. De verkoper ziet verkoopprijs en zijn eigen commissie, ik zie prijs, kostprijs en winst.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "app", value: "Next.js 14 App Router" },
        { label: "auth", value: "JWT in een cookie via jose, bcrypt voor wachtwoorden" },
        { label: "data", value: "Prisma op Render Postgres in Frankfurt" },
        { label: "spraak", value: "webkitSpeechRecognition in het Nederlands, parseert naam, mail en telefoon" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Toegang eerst", sub: "rollen, goedkeur-gate en een wachtscherm voor wie nog niet vrij is" },
        { text: "Rol-gescheiden dashboards", sub: "en geverifieerd dat de kostprijs echt niet in de sales-response voorkomt" },
        { text: "De cockpit", sub: "klantenlijst met statusstip, pijplijn van nieuw tot akkoord, offertesuggestie met marge" },
        { text: "Live gekregen ondanks een blokkade", sub: "de GitHub-app liet zich niet koppelen, dus deploy via de Render-API met de repo kort publiek" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Die deploy-truc weg", sub: "elke update vereist nu weer even een publieke repo. De echte fix is de GitHub-app koppelen." },
        { text: "Wachtwoorden wisselen", sub: "de seed-accounts delen er nog een" },
        { text: "De offerte-pijplijn afmaken", sub: "handtekening, professionele offerte, uitbetaalregels" },
      ],
    },
  },

  // ---------------------------------------------------------------- Tarieven
  {
    slug: "tarieven",
    name: "Tarievenpagina",
    monogram: "TA",
    tagline: "Mijn eigen spiekbrief tegen **te laag prijzen**, publiek deelbaar.",
    status: "live",
    statusNote: "op Render",
    family: "Eigen producten",
    accent: { cyan: "#FDE047", blue: "#CA8A04" },
    url: "https://dstrct-tarieven.onrender.com",
    stats: [
      { n: "700+", l: "datapunten" },
      { n: "320+", l: "bureaus vergeleken" },
    ],
    idea: {
      title: "Wat kost dit **echt** in 2026",
      lead:
        "Een deelbare pagina met vaste prijzen voor software, apps en AI, plus het inhuren van mij en het team. Daaronder een sectie over prijzen in het AI-tijdperk: wat AI werkelijk met tarieven deed, per categorie, met een verdedigbare range.",
    },
    why: {
      title: "Ik vraag structureel **te weinig**",
      lead:
        "Dat is geen gevoel maar een patroon. De pagina is daarom net zo goed een muur voor mezelf als een verkoopmiddel. De kernregel staat er groot op: verlaag je prijs niet omdat AI je sneller maakt. De markt betaalt juist een premie voor AI-augmented werk.",
      quote: "Ik geef geen workshops. Ik bouw software.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "site", value: "statische site op Render, data in data.js" },
        { label: "slot", value: "wachtwoordscherm met SHA-256, bewust een zachte klantzijdige grendel" },
        { label: "eigenaar-modus", value: "kostprijs en marge alleen in localStorage, nooit in de repo" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Marktonderzoek eerst", sub: "echte datapunten verzamelen, geen onderbuik" },
        { text: "De AI-tijdperk-sectie", sub: "video min zeventig procent, maatwerk software nauwelijks, uurtarieven eerder omhoog" },
        { text: "Audit op mezelf", sub: "de kopgetallen spraken de data tegen, dus eerlijk teruggebracht naar wat er echt staat" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Het verkoop-playbook afschermen", sub: "weerwoorden zijn nu voor iedereen zichtbaar die binnenkomt" },
        { text: "Een echte serverlogin", sub: "de huidige grendel is technisch te omzeilen en dat weet ik" },
      ],
    },
  },

  // ---------------------------------------------------------------- OS demo
  {
    slug: "os-demo",
    name: "OS demo-site",
    monogram: "DM",
    tagline: "Het hele OS-verhaal als deelbare site, **handgemaakt** en niet gegenereerd.",
    status: "live",
    statusNote: "op Vercel",
    family: "Eigen producten",
    accent: { cyan: "#22D3EE", blue: "#8B5CF6" },
    url: "https://dstrct-os-demo.vercel.app",
    stats: [
      { n: "5", l: "pagina's" },
      { n: "3", l: "afgekeurde pogingen" },
      { n: "17", l: "breinen nog te bouwen" },
    ],
    idea: {
      title: "Het systeem **laten zien**, niet uitleggen",
      lead:
        "Een publieke site met een interactief dashboard, de vier breinen, de strategie, de verdieping en een investeerderspitch. Bedoeld om te delen met mensen die geen toegang tot het systeem zelf hebben.",
    },
    why: {
      title: "Drie pogingen waren **fout**",
      lead:
        "De eerste drie presentaties werden afgekeurd, en terecht. Wat wel werkte was echte handgemaakte interface in plaats van AI-plaatjes, met een licht- en donkerschakelaar en de prism-huisstijl. Een echt scherm overtuigt, een plaatje van een scherm niet.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "opbouw", value: "losse build-scripts die HTML schrijven, geen framework" },
        { label: "hosting", value: "Vercel, deploy via de CLI, protection uitgezet via de API" },
        { label: "beeld", value: "brein-illustraties via gpt-image-1" },
        { label: "onderbouwing", value: "de Build Bible plus marktonderzoek uit 2026" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Elke pagina een eigen builder", sub: "dashboard, breinen, strategie, verdieping, pitch" },
        { text: "Inhoud onderbouwd", sub: "concurrenten per domein, whitespace, elf modulecombinaties, vijf pakketten" },
        { text: "Publiek gemaakt", sub: "sso-protection via de API op null, anders kijkt niemand mee" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Een eigen domein", sub: "bijvoorbeeld os.dstrctgroup.com" },
        { text: "Het dashboard op echte data", sub: "nu toont het de vorm, niet de cijfers" },
      ],
    },
  },

  // ---------------------------------------------------------------- Fionie
  {
    slug: "fionie",
    name: "Fionie",
    monogram: "FO",
    tagline: "Een AI-leerbegeleider die **met een kind meegroeit**, van kleuter tot carriere.",
    status: "visie",
    statusNote: "spec goedgekeurd, eerste versie nog te bouwen",
    family: "Verkenning",
    accent: { cyan: "#F5C242", blue: "#4338CA" },
    stats: [
      { n: "23", l: "bronnen geverifieerd" },
      { n: "1", l: "leerprofiel voor het leven" },
    ],
    idea: {
      title: "Een begeleider die je **niet kwijtraakt**",
      lead:
        "Een AI-maatje dat een mens volgt van ongeveer vier jaar tot in de carriere, met een doorlopend leerprofiel dat meeverhuist. Geen tutor voor een vak maar continuiteit: het weet hoe jij leert, ook over jaren heen.",
    },
    why: {
      title: "Onderwijs sorteert op **cijfers**",
      lead:
        "Kinderen worden ingedeeld terwijl niet elke methode bij elk kind past, en scholen doen steeds minder aan sociale ontwikkeling. Ik zie het bij mijn eigen kinderen. Het eerste testkind is mijn dochter, die te snel klaar wil zijn en daardoor fouten maakt. Een principe: begrip belonen, snelheid niet.",
      quote: "Ik wil dat het kind begrepen wordt, niet beoordeeld.",
    },
    stack: {
      title: "Wat het **wordt**",
      lead: "De marktscan bepaalde de vorm net zo hard als de techniek.",
      items: [
        { label: "personage", value: "een echt pratend 3D-figuur via react-three-fiber, TTS en lipsync" },
        { label: "brein", value: "Claude als gespreksbrein" },
        { label: "eerste vak", value: "rekenen, groep 5 en 6" },
        { label: "privacy", value: "geen accounts, geen database, geen persoonsgegevens in versie 0.1" },
      ],
    },
    build: {
      title: "Hoe ik het **aanpakte**",
      steps: [
        { text: "Eerst een echte marktscan", sub: "drieentwintig bronnen, vijfentwintig claims geverifieerd. Verdict: de drie-combinatie is van niemand." },
        { text: "De emotiecamera geschrapt", sub: "de EU AI Act verbiedt emotieherkenning in onderwijs. Fionie begrijpt via het gesprek, niet door te filmen." },
        { text: "Kanaal gekozen", sub: "scholen zijn traag met vier uitgevers die tachtig procent van de boeken doen, dus ouder-betaalt eerst" },
        { text: "Spec geschreven", sub: "het begrip-maatje, een principe, een vak, een testkind" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Het bouwplan", sub: "de spec is af, de plannenfase nog niet" },
        { text: "Versie 0.1 bouwen", sub: "het pratende personage plus het rekengesprek" },
        { text: "Testen met een echt kind", sub: "alles daarvoor is theorie" },
      ],
    },
  },

  // ---------------------------------------------------------------- Fionie Docs
  {
    slug: "fionie-docs",
    name: "Fionie Docs",
    monogram: "FD",
    tagline: "Een werkbank voor veertien eigen documenten, met **AI die meeschrijft**.",
    status: "gebouwd",
    statusNote: "lokaal geverifieerd, bewust niet online",
    family: "Verkenning",
    accent: { cyan: "#E8B94A", blue: "#6D28D9" },
    stats: [
      { n: "165", l: "documenten in de index" },
      { n: "14", l: "van mij" },
      { n: "3", l: "soorten editor" },
    ],
    idea: {
      title: "Een werkbank in plaats van een **leeg vel**",
      lead:
        "De masterindex telt honderdvijfenzestig documenten, veertien daarvan staan op mijn naam. Deze tool toont de hele index, licht mijn veertien uit en geeft per document de juiste editor: Word-achtig, Excel-achtig of een notitie. Nooit een leeg vel, altijd een startopzet.",
    },
    why: {
      title: "Meeschrijven verslaat **genereren**",
      lead:
        "Een AI die het hele document voor je maakt levert tekst die niet van jou is. Deze schrijft mee: concept, uitwerken, verbeteren, streamend in een voorbeeld dat je invoegt of vervangt als je het goed vindt. Jij houdt de pen vast.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "app", value: "Next.js 15 met Tailwind v4, lokaal op poort 4321" },
        { label: "opslag", value: "geen database, autosave naar JSON buiten git" },
        { label: "ai", value: "streamend via OpenAI, provider-flexibel zodat Claude erin kan" },
        { label: "look", value: "warm perkament, indigo inkt, gouden accent, fase-gekleurde tegels" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "De index als bron", sub: "het platform per document bepaalt automatisch welk soort editor je krijgt" },
        { text: "Alleen mijn veertien bewerkbaar", sub: "de rest staat gedimd en read-only, met een gate in de API en niet alleen in de interface" },
        { text: "AI-uitvoer gesanitized", sub: "wat het model teruggeeft is HTML, dus dat gaat door een filter voor het het document raakt" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Exporteren en uploaden", sub: "het datamodel is er klaar voor, de knop nog niet" },
        { text: "Online zetten", sub: "bewust nog niet, alles blijft voorlopig lokaal" },
      ],
    },
  },

  // ---------------------------------------------------------------- CMP
  {
    slug: "creatief-met-plezier",
    name: "Creatief met Plezier",
    monogram: "CM",
    tagline: "Een webshop met **elfduizend producten** herbouwd, plus een back-office die klopt.",
    status: "live",
    statusNote: "op Render, domein-omschakeling open",
    family: "Klantwerk",
    accent: { cyan: "#FF8A65", blue: "#E85A4F" },
    stats: [
      { n: "11.400", l: "producten gemigreerd" },
      { n: "642", l: "records opgeschoond" },
      { n: "6", l: "cafe-pakketten live" },
    ],
    idea: {
      title: "Een webshop die je **zelf kunt runnen**",
      lead:
        "De oude site herbouwd als moderne winkel, met een back-office waarin de eigenaar zelf workshops beheert, producten verrijkt en pakketten verkoopt. Inclusief een AI-knop die beschrijving, SEO, thema en tags voorstelt met een live voorbeeld dat meebeweegt.",
    },
    why: {
      title: "De filters logen tegen **de klant**",
      lead:
        "De menu-items bleken techniek-filters, geen categorieen, en de oude tags zaten vol verkeerde producten. Wie op papier klikte kreeg dingen die geen papier zijn. Dat is geen cosmetisch probleem maar een verkoopprobleem, dus er kwam een opschoon-gereedschap met alleen verwijderende regels.",
      quote: "Als de filter liegt, vertrouwt de klant de hele winkel niet meer.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "monorepo", value: "pnpm en turbo, storefront en bff" },
        { label: "storefront", value: "Next.js 15" },
        { label: "bff", value: "NestJS 11 met Prisma 6 op een Postgres, Medusa is eruit gesloopt" },
        { label: "hosting", value: "alles op Render, foto's op een persistent disk" },
        { label: "betalen", value: "Mollie via winkelwagen en checkout" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Migratie eerst", sub: "elfduizend producten over, inclusief drieeneenhalve gigabyte legacy-foto's" },
        { text: "SEO als fundament", sub: "gestructureerde data, sitemap in shards, en de oude URL's die netjes doorverwijzen" },
        { text: "Back-office in veertien stappen", sub: "workshopbeheer, admin-omhulsel, product-AI, dan het merkpalet erover" },
        { text: "Een echte audit erop", sub: "zeven kritieke bevindingen, waaronder nep-reviews in de gestructureerde data en oversell" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Het productiedomein omzetten", sub: "dat serveert nog de oude site" },
        { text: "Het admin-token roteren", sub: "en het oude wachtwoord dat ooit in de historie stond" },
        { text: "De laatste hardening-PR's", sub: "migratie-constraints, auth, checkout en bulk zijn bewust gated" },
      ],
    },
  },

  // ---------------------------------------------------------------- Platinum
  {
    slug: "platinum",
    name: "Platinum",
    monogram: "PL",
    tagline: "Agency-site plus webshop, door **zeven rondes audit** heen geduwd tot nul blockers.",
    status: "live",
    statusNote: "site draait, webshop go-live geaudit",
    family: "Klantwerk",
    accent: { cyan: "#A78BFA", blue: "#7C5CFF" },
    url: "https://platinum-management-agency.vercel.app",
    stats: [
      { n: "64", l: "pagina's" },
      { n: "52", l: "defects gefixt" },
      { n: "7", l: "auditrondes" },
    ],
    idea: {
      title: "Een agency die er **groot** uitziet",
      lead:
        "Tweetalige site met merken, creators, een roster met profielen en boekingsformulier, cases, blog en werving. Daarachter een platform: rollen, organisaties, aanmeldingen met een statemachine, TikTok-koppeling en een webshop.",
    },
    why: {
      title: "Een groene testsuite bewijst **niets**",
      lead:
        "De suite stond op groen en toch vonden zeven auditrondes ongeveer tweeenvijftig echte defecten. De les die ik meeneem: vertrouw nooit een kale melding dat het schoon is, verifieer elke overlever zelf. Pas daarna mag je go zeggen.",
      quote: "Groen betekent dat je tests slagen, niet dat je product werkt.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "site", value: "Next.js 16 met App Router en Turbopack, Tailwind v4" },
        { label: "taal", value: "Nederlands en Engels via een taalsegment in de route" },
        { label: "look", value: "donker met elektrisch violet, zware italic posterkoppen" },
        { label: "hosting", value: "Vercel via de CLI, niet aan git gekoppeld" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Content als code", sub: "alle teksten in typed bestanden per taal, geen CMS nodig" },
        { text: "Architectuurfase apart", sub: "audit, doelarchitectuur in eenentwintig secties, ERD en een plan van twintig PR's" },
        { text: "Go-live-audit in rondes", sub: "meerdere agents parallel, elke bevinding met de hand nagelopen" },
        { text: "Wat de gebruiker niet wilde eruit", sub: "smooth-scroll gesloopt omdat het traag aanvoelde, en nergens een gedachtestreepje" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Productie-omgevingsvariabelen", sub: "de laatste voorwaarden staan fail-closed, dus zonder invullen gaat er niets stuk" },
        { text: "Openstaande keuzes", sub: "betaalprovider, TikTok-app en scopes, en de bron voor live-status" },
      ],
    },
  },

  // ---------------------------------------------------------------- Maya
  {
    slug: "maya",
    name: "Maya",
    monogram: "MY",
    tagline: "Zeg **hey maya** in een spraakkanaal en er antwoordt echt iemand.",
    status: "gebouwd",
    statusNote: "werkte live, GPU nu bewust uit",
    family: "Verkenning",
    accent: { cyan: "#2DD4BF", blue: "#0EA5E9" },
    stats: [
      { n: "972", l: "tests groen" },
      { n: "~1s", l: "haalbare start" },
    ],
    idea: {
      title: "Tweerichtings**stem** in Discord",
      lead:
        "Je zegt hey maya gevolgd door je vraag, de spraak gaat naar tekst, het brein antwoordt en een zelf-gehoste stem spreekt het uit, met de mogelijkheid om erdoorheen te praten. Meerdere beurten achter elkaar, bevestigd werkend.",
    },
    why: {
      title: "Typen is een **drempel**",
      lead:
        "Een brein waar je tegen praat voelt anders dan een brein waar je tegen typt. Maar ik wilde het eerlijk houden over het plafond: dit is een keten van losse onderdelen, dus het wordt niet zo snel als een geintegreerd spraakmodel. Ongeveer een seconde en dan vloeiend is haalbaar, driehonderd milliseconde niet.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "luisteren", value: "Deepgram, wake-woord op de definitieve transcripten" },
        { label: "denken", value: "Claude, dezelfde antwoordfunctie als de tekstbot" },
        { label: "spreken", value: "zelf-gehoste CSM-1B op een Modal H100" },
        { label: "kanaal", value: "in het bestaande Discord-worker-proces, want een token geeft een verbinding" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Het wake-woord omgegooid", sub: "de eerste bibliotheek reageerde nooit, dus detectie op de transcripten zelf" },
        { text: "De grote bug", sub: "de ontvanger levert maar een spreekmoment, dus je moet per moment opnieuw inschrijven, met een guard tegen tientallen inschrijvingen per seconde" },
        { text: "Zinnen pijplijnen", sub: "de volgende zin synthetiseren terwijl de huidige speelt" },
        { text: "De GPU uitgezet", sub: "vier dollar per uur stilstand is zonde, dus bewust gestopt tot ik verder ga" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Streamen in plaats van wachten", sub: "audio in stukjes teruggeven zodra ze klaar zijn" },
        { text: "Sneller dan realtime maken", sub: "nu ongeveer anderhalf keer de tijd van de zin" },
        { text: "Een eigen stemtoon", sub: "hij leunt nu op de tekst-persona" },
      ],
    },
  },

  // ---------------------------------------------------------------- Legendairs
  {
    slug: "legendairs",
    name: "Legendairs",
    monogram: "LG",
    tagline: "Boekingssite voor een brassband, met **aanvragen die echt aankomen**.",
    status: "live",
    statusNote: "op legendairs.nl",
    family: "Klantwerk",
    accent: { cyan: "#E0B050", blue: "#B45309" },
    stats: [{ n: "1", l: "formulier dat telt" }],
    idea: {
      title: "Boeken zonder **heen en weer mailen**",
      lead:
        "Een site waar je de band ziet, hoort en direct een offerte aanvraagt. De beschikbaarheid komt uit de echte agenda, dus je vraagt geen datum aan die al bezet is.",
    },
    why: {
      title: "Een lead die **verdwijnt** is erger dan geen site",
      lead:
        "Daarom faalt de lead-mail hard: komt hij niet aan, dan krijgt de bezoeker een foutmelding in plaats van een valse bevestiging. De bevestiging naar de klant mag wel stil mislukken, die is aardig maar niet kritiek. Leads komen binnen op de mailbox van de band zelf.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "site", value: "Next.js op Vercel, gealiast op legendairs.nl" },
        { label: "mail", value: "Resend met een geverifieerd afzenderdomein" },
        { label: "agenda", value: "Google Calendar via OAuth, gekoppeld in het beheerscherm" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Van SMTP terug naar Resend", sub: "betrouwbaarder aflevering en zichtbaar of het aankwam" },
        { text: "Echte data of eerlijk nep", sub: "de beschikbaarheid geeft expliciet aan of het echte agenda-data is of een terugval" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Het toestemmingsscherm publiceren", sub: "staat op testen, dus de agenda-koppeling verloopt elke week en valt terug op nep" },
      ],
    },
  },

  // ---------------------------------------------------------------- Van Oel
  {
    slug: "vanoel",
    name: "Van Oel",
    monogram: "VO",
    tagline: "Twee sites in een monorepo, met een **persoonlijke pagina** die eruit springt.",
    status: "live",
    statusNote: "beide sites draaien",
    family: "Klantwerk",
    accent: { cyan: "#EF4444", blue: "#B91C1C" },
    stats: [{ n: "2", l: "sites, 1 repo" }],
    idea: {
      title: "Een bedrijf met **twee gezichten**",
      lead:
        "Elektrotechniek en totaalprojecten zijn verschillende klanten met verschillende taal, dus twee aparte sites die wel dezelfde componenten en dezelfde backend delen. En een persoonlijke pagina, omdat mensen bij een klein bedrijf voor de persoon kiezen.",
    },
    why: {
      title: "Een gedeelde repo, **gescheiden** merken",
      lead:
        "Een monorepo houdt onderhoud in een plek zonder de merken door elkaar te laten lopen. Elke app deployt los, dus een wijziging aan de ene site kan de andere niet omgooien.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "monorepo", value: "npm workspaces met meerdere Next.js 14-apps en een NestJS-API" },
        { label: "deploy", value: "per app handmatig naar Vercel, pushen deployt bewust niets" },
        { label: "look", value: "rood, zwart en papier, Archivo Black voor de koppen, grain-overlay" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Design system per merk", sub: "eigen typografie en kleur, gedeelde bewegingscomponenten" },
        { text: "Handmatig deployen als keuze", sub: "geen verrassingen op productie door een push" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [{ text: "Automatisch deployen", sub: "als het aantal wijzigingen dat rechtvaardigt" }],
    },
  },

  // ---------------------------------------------------------------- Real Power Shop
  {
    slug: "realpowershop",
    name: "Real Power Shop",
    monogram: "RP",
    tagline: "Batterij-marketingsite die **eerlijk** werd gemaakt: verzonnen cijfers eruit.",
    status: "live",
    statusNote: "SEO fase 1 af",
    family: "Klantwerk",
    accent: { cyan: "#FACC15", blue: "#EA580C" },
    stats: [{ n: "0", l: "verzonnen reviews" }],
    idea: {
      title: "Vindbaar worden op wat mensen **echt zoeken**",
      lead:
        "Een marketingsite voor thuisbatterijen die het merk consistent neerzet en gevonden wordt. Titels op de zoekvraag, crawlbare gestructureerde data, en een duidelijke servicepagina per dienst.",
    },
    why: {
      title: "Nepcijfers zijn een **risico**, geen truc",
      lead:
        "Er stonden hero-statistieken, een cijferbalk en een vertrouwensstrip met fictieve klanten op de site. Die zijn eruit gehaald tot er echte data is. Verzonnen reviews in gestructureerde data zijn niet alleen oneerlijk, ze kunnen je ook je vindbaarheid kosten.",
      quote: "Liever een lege sectie dan een verzonnen review.",
    },
    stack: {
      title: "Waar het **op draait**",
      items: [
        { label: "repo", value: "pnpm-monorepo, de marketing-app erin" },
        { label: "hosting", value: "Vercel, handmatig deployen vanuit de root, monorepo-bewuste build" },
        { label: "seo", value: "gestructureerde data als statisch script, 308 van www naar kaal domein" },
      ],
    },
    build: {
      title: "Hoe ik het **bouwde**",
      steps: [
        { text: "Merkconsistentie eerst", sub: "een naam overal, de oude werktitel weg" },
        { text: "Crawlbaar maken", sub: "de gestructureerde data stond in een script dat de crawler niet zag" },
        { text: "Verzonnen sociale bewijzen verwijderd" },
      ],
    },
    open: {
      title: "Wat er **nog staat**",
      items: [
        { text: "Elf landingspagina's", sub: "fase 2, met echte inhoudsdiepte" },
        { text: "De hero-afbeelding lokaal maken", sub: "die hotlinkt nu extern en kost laadtijd" },
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export const FAMILIES = ["Het OS", "Breinen", "Eigen producten", "Klantwerk", "Verkenning"] as const;
