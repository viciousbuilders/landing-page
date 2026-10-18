import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./still.module.css";

const source = "https://github.com/viciousbuilders/still";

export const metadata: Metadata = {
  title: "Still | Block distracting websites on your Mac",
  description:
    "A free, open-source Mac focus timer and website blocker. Organize block groups, automate study breaks with one approval, and grow a virtual garden.",
  alternates: { canonical: "https://viciousbuilders.com/still" },
  openGraph: {
    title: "Still | Block distracting websites on your Mac",
    description: "Block groups, focus cycles, and a small virtual garden, right in your Mac’s menu bar.",
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
            Keep distractions blocked. Let study sites open for breaks.
            Grow a virtual garden as you focus.
          </p>
          <p className={styles.persistence}>
            One Touch ID approval covers a whole focus cycle. Always blocked
            groups stay on throughout, even when Still is closed.
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
            <summary>Groups, breaks, and trees</summary>
            <p>
              Keep Facebook, TikTok, and Threads in Always blocked. Put
              Instagram, LinkedIn, and X in Study. Choose 25/5 or 50/10
              focus cycles, and Still handles the breaks. Each 25 recorded
              focus minutes grows a virtual tree; partial progress carries over.
            </p>
            <p>
              Touch ID uses your Mac password as a fallback. Administrator
              setup is required once; Macs without Touch ID use administrator
              approval. Your garden stays on this Mac.
            </p>
          </details>
          <details className={styles.details}>
            <summary>How blocking works</summary>
            <p>
              Still blocks listed domains and their www versions using your
              Mac’s hosts file and firewall, including existing connections to
              blocked servers. Already downloaded content can remain visible.
              Add other subdomains separately. Shared server addresses can
              affect other websites, and VPNs, proxies, or different DNS
              results can bypass the block.
            </p>
            <a href={`${source}#blocking-behavior`}>Read about blocking ↗</a>
          </details>
        </div>

        <figure className={styles.preview}>
          <Image
            src="/still/focus.png"
            alt="Still’s Focus panel with the Study group, 25/5 focus and break durations, four rounds, and progress toward a virtual tree."
            width={800}
            height={1240}
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
