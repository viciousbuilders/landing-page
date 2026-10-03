import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Baloo_2, Be_Vietnam_Pro } from "next/font/google";
import styles from "./pipet.module.css";

const display = Baloo_2({ subsets: ["latin", "vietnamese"], variable: "--pipet-display", display: "swap" });
const body = Be_Vietnam_Pro({ subsets: ["latin", "vietnamese"], weight: ["400", "500", "600"], variable: "--pipet-body", display: "swap" });

const source = "https://github.com/vietbrosinaus/pipet";
const release = `${source}/releases/download/v0.3.1/Pipet-0.3.1-universal.dmg`;

export const metadata: Metadata = {
  title: "Pipet | Say it. See it typed.",
  description: "Free, open-source voice dictation for your Mac. Hold Control-M, speak, and release. Apple-notarized. Made by viciousbuilders.",
  alternates: { canonical: "https://viciousbuilders.com/pipet" },
  openGraph: {
    title: "Pipet | Say it. See it typed.",
    description: "Your voice, wherever you type. Free voice dictation for macOS.",
    url: "https://viciousbuilders.com/pipet",
    images: [{ url: "https://viciousbuilders.com/pipet/logo.png", width: 1254, height: 1254, alt: "Pipet’s smiling speech bubble" }],
  },
};

export default function PipetPage() {
  return <div className={`${styles.page} ${display.variable} ${body.variable}`}>
    <header className={styles.nav}>
      <Link href="/apps" className={styles.brand}>← All apps</Link>
      <a href={source} className={styles.source}>Source code ↗</a>
    </header>
    <main className={styles.main}>
      <div className={styles.lockup}>
        <Image src="/pipet/logo.png" alt="" width={104} height={104} priority className={styles.logo} />
        <h1>Pipet</h1>
      </div>
      <h2>Say it. See it typed.</h2>
      <p className={styles.description}>Hold Control-M, speak, and release.<br />Your words land wherever you type on your Mac.</p>
      <a href={release} className={styles.download}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></svg>
        Download for Mac
      </a>
      <p className={styles.requirements}>macOS 14+ · Apple silicon & Intel<br />Requires your own Codex CLI sign-in.</p>
      <a href={`${source}#install-the-shared-app`} className={styles.guide}>Setup guide ↗</a>
    </main>
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
      <p className={styles.signature}>
        <span>Made with</span>
        <svg aria-hidden="true" viewBox="38 55 190 161"><path fill="currentColor" d="M132.8 214 45.6 107.2A30.3 30.3 0 0 1 40.5 90c0-18.2 13.8-33 30.8-33 17.4 0 30.8 13.2 30.8 30.6v29.1c0 18.7 11.8 30.3 30.7 30.3 19 0 31.2-11.6 31.2-30.3V87.6C164 70.2 177.7 57 195 57c17 0 30.8 14.8 30.8 33a30.3 30.3 0 0 1-5.1 17.2L132.8 214Z" /></svg>
        <span className="sr-only">love</span><span>by</span><Link href="/">viciousbuilders</Link>
      </p>
      <p>Built on <a href="https://github.com/anthnykr/codex-voice">Codex Voice</a> by <a href="https://github.com/anthnykr">Anthony Kroeger</a>, the GOAT.</p>
      </div>
    </footer>
  </div>;
}
