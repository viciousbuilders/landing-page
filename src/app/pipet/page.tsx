import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./pipet.module.css";

const release = "https://github.com/vietbrosinaus/pipet/releases/download/v0.3.1/Pipet-0.3.1-universal.dmg";
const source = "https://github.com/vietbrosinaus/pipet";

export const metadata: Metadata = {
  title: "Pipet — Your voice, wherever you type",
  description: "Free, open-source voice dictation for your Mac. Hold Control-M, speak, and release to type in your apps. Apple-notarized. Made by vietbrosinaus.",
  alternates: { canonical: "https://vietbrosinaus.com/pipet" },
  openGraph: {
    title: "Pipet — Your voice, wherever you type",
    description: "A little less typing. A little more you. Free voice dictation for macOS.",
    url: "https://vietbrosinaus.com/pipet",
    images: [{ url: "https://vietbrosinaus.com/pipet/logo.png", width: 1254, height: 1254, alt: "Pipet’s smiling speech bubble" }],
  },
};

function Download({ secondary = false }: { secondary?: boolean }) {
  return <a href={release} className={secondary ? styles.downloadSmall : styles.download}>
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5" /></svg>
    Download for Mac
  </a>;
}

export default function PipetPage() {
  return <div className={styles.page}>
    <a href="#main" className={styles.skip}>Skip to content</a>
    <header className={styles.nav}>
      <Link href="/pipet" className={styles.wordmark} aria-label="Pipet home"><Image src="/pipet/logo.png" width={42} height={42} alt="" />Pipet</Link>
      <div className={styles.navLinks}><Link href="/">by vietbrosinaus</Link><a href={source} className={styles.sourceLink}>Source code ↗</a></div>
    </header>
    <main id="main">
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>A small app with a lot to say.</p>
          <h1 id="hero-title">Your voice.<br /><span>Wherever<br />you type.</span></h1>
          <p className={styles.intro}>A little less typing. A little more you. Hold Control-M, say what’s on your mind, and let Pipet put it into words.</p>
          <Download />
          <p className={styles.downloadNote}>Free & open-source · macOS 14+<br />Apple silicon & Intel · Apple-notarized</p>
          <a className={styles.setupLink} href="#install">First time? Here’s the setup ↓</a>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.window}>
            <div className={styles.titlebar} aria-hidden="true"><span /><span /><span /><p>Pipet</p></div>
            <Image src="/pipet/app.png" alt="Pipet’s Mac window with permission setup and a practice text field" width={620} height={760} priority sizes="(max-width: 760px) 88vw, 430px" className={styles.screenshot} />
          </div>
          <div className={styles.shortcut}><kbd>⌃</kbd><span>+</span><kbd>M</kbd><p>Hold. Speak. Release.</p></div>
        </div>
      </section>
      <section className={styles.benefits} aria-label="Why Pipet">
        <div><span className={styles.number}>01</span><h2>Words, right where you need them.</h2><p>Notes, emails, documents, and chats. Dictate into editable text fields across your Mac, without moving to another app.</p></div>
        <div><span className={styles.number}>02</span><h2>Only when you have something to say.</h2><p>Pipet listens while you hold the shortcut. Release it to transcribe and insert. It never sends your message for you.</p></div>
        <div><span className={styles.number}>03</span><h2>Small enough to stay out of the way.</h2><p>A native Mac app in your menu bar. A practice field to get comfortable, and your last transcript to copy if you need it.</p></div>
      </section>
      <section id="install" className={styles.install} aria-labelledby="install-title">
        <div><p className={styles.eyebrow}>A quick hello before you start</p><h2 id="install-title">Meet your new<br />typing buddy.</h2><p className={styles.installIntro}>You’ll need an internet connection and your own Codex CLI sign-in for transcription.</p><Download secondary /></div>
        <ol className={styles.steps}>
          <li><span>1</span><div><h3>Install Pipet</h3><p>Open the download, drag Pipet into Applications, then open it. Look for the speech bubble in your menu bar.</p></div></li>
          <li><span>2</span><div><h3>Sign in to Codex</h3><p>Follow the <a href="https://developers.openai.com/codex/cli/">Codex CLI setup guide ↗</a>, then run <code>codex login</code>. Already signed in? Pipet uses your existing account.</p></div></li>
          <li><span>3</span><div><h3>Give Pipet a hand</h3><p>Allow Microphone in Pipet. Enable Pipet under System Settings → Privacy & Security → Accessibility so it can insert your words.</p></div></li>
          <li><span>4</span><div><h3>Say a little hello</h3><p>Click Pipet’s practice field. Hold Control-M, speak, and release. Then try it in your favourite app.</p></div></li>
        </ol>
      </section>
      <section className={styles.faq} aria-labelledby="faq-title">
        <h2 id="faq-title">A few good questions.</h2>
        <details><summary>Where does my audio go?</summary><p>Audio goes to OpenAI for transcription after you release the shortcut. Pipet deletes temporary recordings after each attempt. Your last transcript stays in memory until you quit.</p></details>
        <details><summary>Is Pipet free?</summary><p>Yes. Pipet is free and open-source under the MIT license. You’ll need your own Codex account access and an internet connection to transcribe.</p></details>
        <details><summary>Will it work in every text field?</summary><p>Most editable text fields support insertion. Secure fields and apps that block Accessibility or paste may need manual entry. You can always copy your last transcript from Pipet.</p></details>
        <details><summary>Anything else I should know?</summary><p>Pipet currently uses an experimental Codex transcription endpoint, which may change. The universal download includes Apple silicon and Intel builds; Intel hasn’t been tested on a physical Mac yet. <a href={`${source}/issues`}>Report a problem on GitHub ↗</a></p></details>
      </section>
      <section className={styles.credit} aria-labelledby="credit-title">
        <p className={styles.eyebrow}>Good software starts with good people.</p>
        <h2 id="credit-title">A tip of the hat<br />to the GOAT.</h2>
        <p>Pipet builds on <a href="https://github.com/anthnykr/codex-voice">Codex Voice</a>, the original project by <a href="https://github.com/anthnykr">Anthony Kroeger</a>. Anthony also happens to be our former colleague at Lyra. Thanks for giving this little app its voice.</p>
        <a className={styles.originalLink} href="https://github.com/anthnykr/codex-voice">Explore Anthony’s original project ↗</a>
      </section>
    </main>
    <footer className={styles.footer}><Link href="/">Made by vietbrosinaus</Link><a href={`${source}/releases/tag/v0.3.1`}>Pipet 0.3.1 · Release notes ↗</a><a href={`${source}/blob/main/LICENSE`}>Open source. MIT licensed.</a></footer>
  </div>;
}
