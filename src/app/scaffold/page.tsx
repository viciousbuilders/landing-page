import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./scaffold.module.css";

const source = "https://github.com/viciousbuilders/scaffold";
const release = `${source}/releases/download/v0.1.1/Scaffold-0.1.1-arm64.dmg`;

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
        <div className={styles.copy}>
          <div className={styles.lockup}>
            <Image src="/scaffold/icon.png" alt="" width={80} height={80} sizes="80px" className={styles.logo} />
            <span>scaffold</span>
          </div>
          <h1>Practise at your<br className={styles.desktopBreak} /> own pace.</h1>
          <p className={styles.description}>Coding, math and quant practice on your Mac. Your questions, your coding agent, your pace.</p>
          <div className={styles.actions}>
            <a href={release} aria-describedby="mac-requirements" className={styles.download}>Download for Mac</a>
            <p id="mac-requirements" className={styles.requirements}>macOS 13+ · Apple silicon</p>
            <a href={`${source}#install-the-mac-app`} className={styles.guide}>Setup guide ↗</a>
          </div>
        </div>

        <figure className={styles.preview}>
          <Image src="/scaffold/app.png" alt="A Python practice question beside Scaffold’s code editor and test cases." width={1280} height={800} preload sizes="(min-width: 1200px) 684px, (min-width: 900px) 58vw, calc(100vw - 48px)" />
        </figure>
      </main>

      <footer className={styles.footer}>
        <p>Free and open source.</p>
        <p className={styles.signature}>
          <span>Made with</span>
          <span className="footer-heart" aria-hidden="true" />
          <span className="sr-only">love</span>
          <span>by</span>
          <Link href="/">viciousbuilders</Link>
        </p>
      </footer>
    </div>
  );
}
