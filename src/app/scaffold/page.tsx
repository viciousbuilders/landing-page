import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./scaffold.module.css";

const source = "https://github.com/viciousbuilders/scaffold";
const release = `${source}/releases/download/v0.1.0/Scaffold-0.1.0-arm64.dmg`;

export const metadata: Metadata = {
  title: "Scaffold | A place to practise",
  description: "A local Mac app for coding, math and quant practice. Create questions with your coding agent, then practise in Scaffold with an optional AI tutor.",
  alternates: { canonical: "https://viciousbuilders.com/scaffold" },
  openGraph: {
    title: "Scaffold | A place to practise",
    description: "Your questions, a code editor, and a little help when you need it.",
    url: "https://viciousbuilders.com/scaffold",
    images: [{ url: "https://viciousbuilders.com/scaffold/app.png", width: 1280, height: 800, alt: "Scaffold’s question panel and Python editor" }],
  },
};

export default function ScaffoldPage() {
  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <Link href="/apps">← All apps</Link>
        <a href={source}>Source code ↗</a>
      </header>
      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.lockup}>
            <Image src="/scaffold/icon.png" alt="" width={56} height={56} priority />
            <span>scaffold</span>
          </div>
          <h1>A place to practise.</h1>
          <p className={styles.description}>Coding, math and quant questions.<br />Your own curriculum, on your own Mac.</p>
          <a href={release} className={styles.download}>Download for Mac</a>
          <p className={styles.requirements}>macOS 13+ · Apple silicon · Free & open source</p>
          <a href={`${source}#install-the-mac-app`} className={styles.guide}>Setup guide ↗</a>
        </div>
        <figure className={styles.preview}>
          <Image src="/scaffold/app.png" alt="A Python practice question on the left, with a code editor and test cases on the right." width={1280} height={800} priority sizes="(max-width: 1100px) 92vw, 1060px" />
          <figcaption>A familiar split view, with room to think.</figcaption>
        </figure>
        <section className={styles.workflow} aria-label="How Scaffold works">
          <div>
            <h2>Create your questions.</h2>
            <p>Open a local folder with your coding agent. Ask it to build a curriculum for what you want to learn.</p>
          </div>
          <div>
            <h2>Open it in Scaffold.</h2>
            <p>Write code, solve problems and check your work. Questions and progress stay in your local workspace.</p>
          </div>
          <div>
            <h2>Ask for a hint.</h2>
            <p>Connect Codex, Claude Code, OpenCode or Pi. The optional tutor helps you work through a question without jumping to the answer.</p>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>Made by <Link href="/">viciousbuilders</Link><span>v0.1.0</span></footer>
    </div>
  );
}
