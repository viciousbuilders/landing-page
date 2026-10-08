import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./still.module.css";

const source = "https://github.com/viciousbuilders/still";

export const metadata: Metadata = {
  title: "Still | Block distracting websites on your Mac",
  description:
    "A free, open-source website blocker in your Mac’s menu bar. Set a focus timer or keep your blocklist always on. Turn it off whenever you want.",
  alternates: { canonical: "https://viciousbuilders.com/still" },
  openGraph: {
    title: "Still | Block distracting websites on your Mac",
    description: "A focus timer or an always-on blocklist, right in your menu bar.",
    url: "https://viciousbuilders.com/still",
    images: [{ url: "https://viciousbuilders.com/still/icon.png", width: 512, height: 512, alt: "Still’s green leaf icon" }],
  },
};

export default function StillPage() {
  return (
    <div className={styles.page}>
      <header className={styles.nav}>
        <Link href="/apps">← All apps</Link>
        <a href={source}>Source code ↗</a>
      </header>

      <main className={styles.main}>
        <div className={styles.copy}>
          <div className={styles.lockup}>
            <Image src="/still/icon.png" alt="" width={64} height={64} sizes="64px" className={styles.logo} />
            <span>still</span>
          </div>
          <h1>A little less distraction.</h1>
          <p className={styles.description}>
            Block distracting websites from your Mac’s menu bar. Set a focus
            timer or keep your blocklist always on. Stop whenever you’re ready.
          </p>
          <p className={styles.persistence}>
            Your blocklist stays active even when Still is closed.
          </p>
          <div className={styles.actions}>
            <a href={`${source}#build-and-open`} aria-describedby="still-requirements" className={styles.primary}>
              Get started on Mac
            </a>
            <p id="still-requirements" className={styles.requirements}>
              macOS 13+ · Build from source for now
            </p>
          </div>
          <details className={styles.details}>
            <summary>How blocking works</summary>
            <p>
              Still blocks listed domains and their www versions using your
              Mac’s hosts file. Add other subdomains separately. Browsers can
              keep cached connections, so quit and reopen your browser if a
              blocked website still loads. Secure DNS, VPNs, and proxies can
              bypass the block.
            </p>
            <a href={`${source}#blocking-behavior`}>Read about blocking ↗</a>
          </details>
        </div>

        <figure className={styles.preview}>
          <Image
            src="/still/app.png"
            alt="Still’s menu bar panel with three websites, an Always on duration, and a Start blocking button."
            width={812}
            height={1052}
            preload
            sizes="(min-width: 900px) 380px, (min-width: 460px) 360px, calc(100vw - 48px)"
          />
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
