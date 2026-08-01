import type { Metadata } from "next";
import "./globals.css";
import "./deck.css";

export const metadata: Metadata = {
  title: "DSTRCT Build Board",
  description:
    "Alles wat ik hier bouw, per project: het idee, waarom, de stack, hoe ik het bouwde en wat er nog staat. Reageren mag.",
};

// Applied before first paint so a light-mode visitor never sees a dark flash.
const THEME_BOOT = `try{var t=localStorage.getItem('bb-theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
