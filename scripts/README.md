# Image scripts

The board's imagery is not stock and not generated. Screenshots come from the running
products; the covers and the hero are those screenshots composed in HTML and photographed.

Both scripts need Playwright and a Chromium binary. They read from and write to
`public/shots/`.

```bash
npm i -D playwright                    # or point EXE at an existing Chromium
export EXE="$HOME/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing"
export SHOTS="$PWD/public/shots" OUT="$PWD/public/shots"

node scripts/compose-covers.mjs        # one cover--<slug>.jpg per project
node scripts/compose-hero.mjs          # hero.jpg for the board
```

Capturing new screenshots: desktop at 1280x800 with deviceScaleFactor 1.25, phone at
390x844 deviceScaleFactor 2 with isMobile, dismiss the cookie banner, scroll to the part
worth showing. Deck images come from running the pitch engine in that project's repo with
`npx tsx` and example figures.
