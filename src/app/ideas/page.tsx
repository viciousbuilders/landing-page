import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import { projectIdeas } from "./ideas";

export const metadata: Metadata = {
  alternates: { canonical: "/ideas" },
  title: "Project ideas | viciousbuilders",
  description:
    "Ideas we want to build with the community. Find a project to contribute to or bring an idea of your own.",
};

export default function IdeasPage() {
  return (
    <div className="min-h-dvh flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 h-16 sm:h-[4.5rem] flex items-center justify-between">
          <Link
            href="/"
            aria-label="viciousbuilders home"
            className="flex items-center gap-2.5 sm:gap-3 font-mono text-sm sm:text-base tracking-tight font-medium"
          >
            <span className="brand-mark" aria-hidden="true" />
          </Link>
          <div className="flex items-center gap-5 sm:gap-9 font-mono text-xs sm:text-sm tracking-wide text-muted">
            <Link href="/#build" className="nav-link min-h-11 inline-flex items-center hover:text-foreground transition-colors duration-300">
              Build with us
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="flex-1 px-6 max-w-[1200px] w-full mx-auto pt-36 sm:pt-44 pb-24 md:pb-32">
        <header className="border-b border-border pb-12 md:pb-16 mb-12 md:mb-16">
          <Link
            href="/#build"
            className="inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted hover:text-foreground transition-colors duration-300"
          >
            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to build with us
          </Link>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Community projects
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl md:text-7xl font-bold tracking-[-0.03em] leading-tight">
            What we want to build.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-muted">
            A place for app ideas we&apos;d like to bring to life together.
            Find something you care about, help shape it, and build with us.
          </p>
        </header>

        <section aria-labelledby="ideas-heading">
          <h2 id="ideas-heading" className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-muted">
            The idea list
          </h2>
          <div className="space-y-5">
            {projectIdeas.map((idea) => (
              <article key={idea.id} aria-labelledby={`${idea.id}-title`} className="border border-border bg-surface/40 p-7 md:p-12">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                  <span className="border border-border px-3 py-1.5">Exploring</span>
                  <span className="text-muted">{idea.category}</span>
                </div>
                <h3 id={`${idea.id}-title`} className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight">
                  {idea.title}
                </h3>
                <p className="mt-2 font-mono text-xs text-muted">Working title</p>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
                  {idea.description}
                </p>
                <div className="mt-8 grid gap-8 md:grid-cols-2 border-t border-border pt-8">
                  <div>
                    <h4 className="font-medium">What it could look like</h4>
                    <p className="mt-3 text-muted leading-relaxed">{idea.possibilities}</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Help shape the idea</h4>
                    <p className="mt-3 text-muted leading-relaxed">{idea.contribution}</p>
                  </div>
                </div>
                <Link
                  href="/#contact"
                  className="mt-8 inline-flex min-h-11 items-center gap-2 font-mono text-sm border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  Build this with us
                  <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="share-heading" className="mt-12 md:mt-16">
          <h2 id="share-heading" className="text-2xl font-semibold tracking-tight">
            Have an idea of your own?
          </h2>
          <p className="mt-4 max-w-xl text-muted leading-relaxed">
            Got something you&apos;d love to build? Tell us who it would help,
            what it could do, and how you&apos;d like to get involved.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex min-h-11 items-center gap-2 font-mono text-sm border border-foreground px-5 py-2.5 hover:bg-foreground hover:text-background transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Share an idea
            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </main>

      <footer className="px-6 max-w-[1200px] w-full mx-auto py-8 border-t footer-divider">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="font-mono text-xs text-muted">
            Vicious Builders Collective &copy; {new Date().getFullYear()}
          </span>
          <p className="flex items-center gap-1 font-mono text-xs text-muted">
            <span>Made with</span>
            <span className="footer-heart" aria-hidden="true" />
            <span>in Australia</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
