export type App = {
  name: string;
  category: string;
  image: string;
  description: string;
  href: string;
  domain: string;
  screenshotPatch?: string;
};

// Catalog order is deliberate: append new apps at the bottom.
export const apps: App[] = [
  {
    name: "Card Table",
    category: "Game",
    image: "/project-screenshots/ban-bai-home.webp",
    description:
      "Create a private card table, invite friends by link, and play with a classic deck or Sanguosha cards.",
    href: "https://card-table.viciousbuilders.com",
    domain: "card-table.viciousbuilders.com",
  },
  {
    name: "Karaoke Now",
    category: "Entertainment",
    image: "/project-screenshots/karaoke-live.jpg",
    screenshotPatch:
      "linear-gradient(135deg, rgb(7 8 12) 0%, rgb(10 10 17) 100%)",
    description:
      "Open a room, queue a song, and sing together from anywhere.",
    href: "https://karaokenow.co",
    domain: "karaokenow.co",
  },
  {
    name: "PriceCheck AU",
    category: "Shopping",
    image: "/project-screenshots/price-check-live.webp",
    description:
      "Compare Australian grocery prices side by side and find the best value per unit.",
    href: "https://price-check.viciousbuilders.com",
    domain: "price-check.viciousbuilders.com",
  },
  {
    name: "Pipet",
    category: "Mac app · Productivity",
    image: "/pipet/app.png",
    description:
      "Hold Control-M, speak, and release. Your words land wherever you type on your Mac.",
    href: "/pipet",
    domain: "viciousbuilders.com/pipet",
  },
  {
    name: "Plan2Go",
    category: "Travel",
    image: "/project-screenshots/plan2go-live.jpg",
    description:
      "Build a realistic multi-day itinerary with travel time, opening hours, and maps.",
    href: "https://plan2go.vietbrosinaus.com/",
    domain: "plan2go.vietbrosinaus.com",
  },
  {
    name: "PopPopAI",
    category: "iPhone app · Language learning",
    image: "/project-screenshots/poppopai-live.png",
    description:
      "Practice English or Chinese through real-life conversations with AI characters, and learn vocabulary from photos.",
    href: "https://acmenextjs-production-b9db.up.railway.app",
    domain: "acmenextjs-production-b9db.up.railway.app",
  },
  {
    name: "Scaffold",
    category: "Mac app · Learning",
    image: "/scaffold/app.png",
    description:
      "Practise coding, math and quant questions in a local workspace, with hints from your own AI CLI.",
    href: "/scaffold",
    domain: "viciousbuilders.com/scaffold",
  },
];

// Homepage curation is independent of the full catalog's display order.
const featuredAppNames = ["Scaffold", "Card Table", "Karaoke Now", "PriceCheck AU"];
export const featuredApps = featuredAppNames.flatMap((name) =>
  apps.filter((app) => app.name === name),
);

export const allApps = apps;
