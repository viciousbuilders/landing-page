import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../theme-toggle";
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
    <div className={`${styles.page} min-h-dvh flex flex-col`}>
      <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className={`${styles.nav} max-w-[1200px] mx-auto px-6 h-16 sm:h-[4.5rem] flex items-center justify-between`}>
          <Link href="/" aria-label="viciousbuilders home" className="flex items-center">
            <span className="brand-mark" aria-hidden="true" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-9 font-mono text-xs sm:text-sm tracking-wide text-muted">
            <Link href="/apps" className="nav-link hover:text-foreground transition-colors duration-300">All apps</Link>
            <a href={source} className="nav-link hover:text-foreground transition-colors duration-300">Source code ↗</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 pt-16 sm:pt-[4.5rem]">
        <header className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 md:items-end pt-16 md:pt-20 pb-10 md:pb-12">
          <div>
            <div className="flex items-center gap-4 sm:gap-5">
              <Image src="/scaffold/icon.png" alt="" width={72} height={72} priority className="w-12 h-12 sm:w-16 sm:h-16" />
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-[-0.04em] leading-none">scaffold</h1>
            </div>
            <p className="mt-6 max-w-lg text-lg md:text-xl leading-relaxed text-foreground/75">Coding, math and quant practice, on your own Mac.</p>
          </div>
          <div className="md:pb-1">
            <a href={release} aria-describedby="mac-requirements" className={`${styles.download} inline-flex min-h-12 items-center justify-center whitespace-nowrap border border-foreground bg-transparent px-6 font-mono text-sm text-foreground hover:bg-foreground hover:text-background`}>Download for Mac</a>
            <p id="mac-requirements" className="mt-3 font-mono text-xs text-muted">macOS 13+ · Apple silicon</p>
          </div>
        </header>

        <figure className={styles.preview}>
          <Image src="/scaffold/app.png" alt="A Python practice question beside Scaffold’s code editor and test cases." width={1280} height={800} priority sizes="(min-width: 1200px) 1152px, calc(100vw - 48px)" />
        </figure>

        <section aria-labelledby="workspace-heading" className="max-w-2xl py-14 md:py-20">
          <h2 id="workspace-heading" className="text-2xl sm:text-3xl font-semibold tracking-[-0.025em]">Questions from your workspace.</h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-foreground/75">Ask your coding agent to create questions in a local folder. Open it in Scaffold to write code, solve problems and check your work.</p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-foreground/75">Connect Codex, Claude Code, OpenCode or Pi for hints as you work. Your questions and progress stay in your folder.</p>
          <a href={`${source}#install-the-mac-app`} className="mt-6 inline-flex min-h-11 items-center font-mono text-sm underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors duration-300">Setup guide ↗</a>
        </section>
      </main>

      <footer className="px-6 max-w-[1200px] w-full mx-auto py-8 border-t footer-divider">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 font-mono text-xs text-muted">
          <p>Free and open source.</p>
          <p className="flex items-center gap-1">
            <span>Made with</span>
            <span className="footer-heart" aria-hidden="true" />
            <span>by</span>
            <Link href="/" className="hover:text-foreground transition-colors duration-300">viciousbuilders</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
