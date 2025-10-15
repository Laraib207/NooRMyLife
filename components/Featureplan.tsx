// "use client";

// import { useMemo } from "react";
// import Link from "next/link";

// type Feature = {
//   id: string;
//   title: string;
//   tagline: string;
//   status: "shipped" | "in-progress" | "planned" | "idea";
//   eta?: string;
//   highlights: string[];
// };

// const STATUS_STYLES: Record<Feature["status"], { badge: string; dot: string; label: string }> = {
//   shipped: {
//     badge: "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30",
//     dot: "bg-emerald-500",
//     label: "Shipped",
//   },
//   "in-progress": {
//     badge: "bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/30",
//     dot: "bg-indigo-500",
//     label: "In Progress",
//   },
//   planned: {
//     badge: "bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/30",
//     dot: "bg-amber-500",
//     label: "Planned",
//   },
//   idea: {
//     badge: "bg-slate-500/10 text-slate-300 ring-1 ring-slate-500/30",
//     dot: "bg-slate-400",
//     label: "Idea",
//   },
// };

// const FEATURES: Feature[] = [
//   {
//     id: "portfolio-v2",
//     title: "Portfolio v2 Redesign",
//     tagline: "Faster, sleeker, and delightful micro-interactions.",
//     status: "in-progress",
//     eta: "Nov 2025",
//     highlights: [
//       "3D card hover and parallax",
//       "Atomic design refactor",
//       "Dark mode + system theme",
//     ],
//   },
//   {
//     id: "blog-engine",
//     title: "Content & Blog Engine",
//     tagline: "MDX-powered stories with code playgrounds.",
//     status: "planned",
//     eta: "Dec 2025",
//     highlights: [
//       "MDX with interactive components",
//       "SEO with OpenGraph & structured data",
//       "Tag search and reading progress",
//     ],
//   },
//   {
//     id: "showcase",
//     title: "Project Showcase Grid",
//     tagline: "Case studies with performance metrics.",
//     status: "shipped",
//     highlights: [
//       "Before/after timelines",
//       " Lighthouse score cards",
//       "Tech stack badges",
//     ],
//   },
//   {
//     id: "contact-studio",
//     title: "Contact Studio",
//     tagline: "Smart contact form with Notion + email automations.",
//     status: "planned",
//     eta: "Jan 2026",
//     highlights: [
//       "Spam shield with hCaptcha",
//       "Auto-replies + calendar link",
//       "Notion-based CRM light",
//     ],
//   },
//   {
//     id: "playground",
//     title: "UI Playground",
//     tagline: "Snippets, animations, and reusable UI kits.",
//     status: "idea",
//     highlights: [
//       "Framer Motion templates",
//       "Copy-paste React/Tailwind blocks",
//       "Themeable tokens",
//     ],
//   },
// ];

// export default function Page() {
//   const grouped = useMemo(() => {
//     return {
//       "In Progress": FEATURES.filter((f) => f.status === "in-progress"),
//       Planned: FEATURES.filter((f) => f.status === "planned"),
//       Shipped: FEATURES.filter((f) => f.status === "shipped"),
//       Ideas: FEATURES.filter((f) => f.status === "idea"),
//     };
//   }, []);

//   return (
//     <main className="min-h-screen bg-[#0B0F14] text-slate-200">
//       {/* Glow Background */}
//       <div className="pointer-events-none fixed inset-0 -z-10">
//         <div className="absolute -top-24 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600/20 via-fuchsia-500/10 to-cyan-500/20 blur-3xl" />
//       </div>

//       {/* Header */}
//       <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
//         <div className="flex items-start justify-between gap-6">
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
//               <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" />
//               Feature Plan
//             </div>
//             <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
//               Building in public, with taste.
//             </h1>
//             <p className="mt-3 max-w-2xl text-slate-400">
//               Here’s the evolving roadmap for my portfolio. Shipped, brewing, and brewing harder.
//               Expect polish, performance, and playful details.
//             </p>
//           </div>

//           <div className="hidden sm:flex flex-col items-end gap-2">
//             <Link
//               href="/"
//               className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10 transition"
//             >
//               ← Back to Home
//             </Link>
//             <a
//               href="mailto:hello@example.com"
//               className="rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90 transition"
//             >
//               Collaborate
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Sections */}
//       <section className="mx-auto max-w-6xl px-6 pb-28">
//         <div className="grid grid-cols-1 gap-10">
//           {Object.entries(grouped).map(([group, items]) => (
//             <div key={group} className="space-y-6">
//               <h2 className="text-xl font-semibold text-white/90">{group}</h2>
//               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                 {items.map((feature) => (
//                   <FeatureCard key={feature.id} feature={feature} />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer Note */}
//         <div className="mt-16 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-400">
//           Tip: Priorities flex with impact. If something here excites you, reach out and I’ll bump it up.
//         </div>
//       </section>
//     </main>
//   );
// }

// function FeatureCard({ feature }: { feature: Feature }) {
//   const style = STATUS_STYLES[feature.status];

//   return (
//     <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 transition hover:border-white/20 hover:from-white/10">
//       {/* Accent corner */}
//       <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-tr from-indigo-600/20 to-fuchsia-600/20 blur-2xl transition opacity-0 group-hover:opacity-100" />

//       <div className="flex items-center justify-between">
//         <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ${style.badge}`}>
//           <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
//           {style.label}
//         </span>
//         {feature.eta ? (
//           <span className="text-[11px] text-slate-400">ETA: {feature.eta}</span>
//         ) : (
//           <span className="text-[11px] text-slate-500">When it feels right</span>
//         )}
//       </div>

//       <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
//       <p className="mt-1 text-sm text-slate-400">{feature.tagline}</p>

//       <ul className="mt-4 space-y-2">
//         {feature.highlights.map((h, i) => (
//           <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
//             <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
//             {h}
//           </li>
//         ))}
//       </ul>

//       <div className="mt-5 flex items-center justify-between">
//         <span className="text-xs text-slate-500">#{feature.id}</span>
//         <button
//           className="text-xs rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-slate-200 transition hover:bg-white/10"
//           onClick={() => {
//             // Placeholder interaction
//             alert(`Subscribed to updates for: ${feature.title}`);
//           }}
//         >
//           Notify Me
//         </button>
//       </div>
//     </article>
//   );
// }




"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Track = "vision" | "roadmap" | "opensource" | "milestones";
type Status = "shipped" | "in-progress" | "planned" | "idea";

type Feature = {
  id: string;
  title: string;
  tagline: string;
  status: Status;
  eta?: string;
  highlights: string[];
  track: Track;
};

const STATUS_STYLES: Record<Status, { badge: string; dot: string; label: string }> = {
  shipped: {
    badge: "bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20",
    dot: "bg-emerald-400",
    label: "Shipped",
  },
  "in-progress": {
    badge: "bg-indigo-500/10 text-indigo-300 ring-1 ring-indigo-500/20",
    dot: "bg-indigo-400",
    label: "In Progress",
  },
  planned: {
    badge: "bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20",
    dot: "bg-amber-400",
    label: "Planned",
  },
  idea: {
    badge: "bg-slate-500/10 text-slate-300 ring-1 ring-slate-500/20",
    dot: "bg-slate-400",
    label: "Idea",
  },
};

const FEATURES: Feature[] = [
  {
    id: "input-planet-scale",
    title: "Input: Planet-Scale Vision",
    tagline:
      "SapshoTechnology ko duniya ke top level par le jana — accessibility, speed, aur taste ke sath.",
    status: "in-progress",
    eta: "Q1 2026",
    highlights: [
      "Global-first mindset: multi-region infra",
      "Design language: bold, minimal, kinetic",
      "Community-first: transparent public roadmap",
    ],
    track: "vision",
  },
  {
    id: "think-bigger",
    title: "Think Bigger Mode",
    tagline:
      "Wo level jaha ideas fly — Mark aur Elon wali audacity, ground reality ke mix ke sath.",
    status: "planned",
    eta: "Q2 2026",
    highlights: [
      "10x thinking workshops (public streams)",
      "Moonshot backlog + spike sprints",
      "Failure logs → learnings library",
    ],
    track: "vision",
  },
  {
    id: "type-with-every-tech",
    title: "Type With Every Tech",
    tagline:
      "Har ek technology ke sath pair programming feel — React, Next, Rust, Go, Python, and beyond.",
    status: "in-progress",
    eta: "Rolling",
    highlights: [
      "Interactive sandboxes (MDX + WASM)",
      "Copy-paste production-grade snippets",
      "AI-assisted code notes",
    ],
    track: "roadmap",
  },
  {
    id: "perf-obsessed",
    title: "Performance Obsessed",
    tagline: "Lighthouse 95+, Core Web Vitals green, micro-interactions buttery.",
    status: "planned",
    eta: "Q4 2025",
    highlights: [
      "Edge rendering + CDN smart caching",
      "Motion-safe animations (Framer Motion)",
      "Accessible components (WAI-ARIA)",
    ],
    track: "roadmap",
  },
  {
    id: "open-source-stack",
    title: "Free & Open Source Stack",
    tagline:
      "Open-source ke through value share — templates, hooks, animations, design tokens.",
    status: "in-progress",
    eta: "Monthly Drops",
    highlights: [
      "UI kit (Tailwind + Radix) with themes",
      "Hooks: useHotkeys, useScrollSpy, useTheme",
      "Animations library: motion-presets",
    ],
    track: "opensource",
  },
  {
    id: "community-drive",
    title: "Community Drive",
    tagline: "Issues → Ideas → PRs → Shipped. Sabko seat milti hai.",
    status: "planned",
    eta: "Q1 2026",
    highlights: [
      "Starter issues + mentorship notes",
      "Changelog streams + townhalls",
      "Hall of Fame contributors",
    ],
    track: "opensource",
  },
  {
    id: "showcase-vault",
    title: "Showcase Vault",
    tagline: "Case studies with real metrics, wins and scars.",
    status: "shipped",
    highlights: [
      "Before/After performance timelines",
      "Infra + cost breakdown",
      "Design decisions journal",
    ],
    track: "milestones",
  },
  {
    id: "contact-studio",
    title: "Contact Studio",
    tagline: "Smart contact form: Notion CRM, email automations, calendar slots.",
    status: "planned",
    eta: "Dec 2025",
    highlights: [
      "hCaptcha + rate limit + abuse checks",
      "Auto-reply with context & links",
      "Light CRM in Notion",
    ],
    track: "milestones",
  },
];

export default function Page() {
  const [activeTrack, setActiveTrack] = useState<Track | "all">("all");

  const grouped = useMemo(() => {
    const list = activeTrack === "all" ? FEATURES : FEATURES.filter((f) => f.track === activeTrack);
    return {
      "In Progress": list.filter((f) => f.status === "in-progress"),
      Planned: list.filter((f) => f.status === "planned"),
      Shipped: list.filter((f) => f.status === "shipped"),
      Ideas: list.filter((f) => f.status === "idea"),
    };
  }, [activeTrack]);

  return (
    <main className="relative min-h-screen bg-[#070A0F] text-slate-200">
      <DecorativeBackground />
      <div className="pt-10 sm:pt-14" />

      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge>Feature Vision</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              input by SapshoTechnology
            </h1>
            <p className="mt-3 max-w-2xl text-slate-400">
              {/* SapshoTechnology ka ek dream project — duniya ke top level par kam karna,
              har ek technology ke sath tie-up karna, aur open-source ke zariye
              ek aisi duniya banana jaha creativity aur technology ek ho. 🚀 */}
              The dream project of SapshoTechnology — to take it to the top level of the world,
              tie-up with every technology, and create a world where creativity and technology are one, through open-source. 🚀
              And theswe are the audacious plans to get there.Because dreams don't work unless you do. 😉
              I believe in dreaming big, thinking audaciously, and building openly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Pill>Open Source</Pill>
              <Pill>Audacity</Pill>
              <Pill>Innovation</Pill>
              <Pill>Future-Ready</Pill>
            </div>
          </div>

          <div className="flex gap-3">
            <Link
              href="/"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-slate-100 hover:bg-white/10 transition"
            >
              ← Back Home
            </Link>
            <a
              href="mailto:hello@example.com"
              className="rounded-xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-fuchsia-600/20 hover:opacity-95 transition"
            >
              Collaborate
            </a>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur">
          <div className="flex flex-wrap gap-2">
            {["all", "vision", "roadmap", "opensource", "milestones"].map((t) => (
              <TabButton
                key={t}
                label={t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1)}
                active={activeTrack === t}
                onClick={() => setActiveTrack(t as any)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* COOL MARQUEE */}
      <MarqueeStrip />

      {/* FEATURE GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid grid-cols-1 gap-12">
          {Object.entries(grouped).map(([group, items]) =>
            items.length ? (
              <div key={group} className="space-y-6">
                <h2 className="text-xl font-semibold text-white/90">{group}</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((feature) => (
                    <FeatureCard key={feature.id} feature={feature} />
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </section>
    </main>
  );
}

/* --- COMPONENTS --- */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
      <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-400" />
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-xl px-4 py-2 text-sm transition ${
        active ? "text-white" : "text-slate-300 hover:text-white hover:bg-white/5"
      }`}
    >
      {active && (
        <span className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-indigo-600/40 via-fuchsia-600/40 to-cyan-500/40 blur-sm" />
      )}
      {label}
    </button>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const style = STATUS_STYLES[feature.status];
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-5 transition hover:border-white/20 hover:from-white/[0.12]">
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-tr from-indigo-600/25 to-fuchsia-600/25 blur-2xl opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-center justify-between">
        <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] ${style.badge}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
          {style.label}
        </span>
        <span className="text-[11px] text-slate-400">{feature.eta ?? "Soon™"}</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
      <p className="mt-1 text-sm text-slate-400">{feature.tagline}</p>
      <ul className="mt-4 space-y-2">
        {feature.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
            {h}
          </li>
        ))}
      </ul>
    </article>
  );
}

function DecorativeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute left-1/2 top-[-120px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-600/25 via-fuchsia-500/15 to-cyan-500/25 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.2) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}

function MarqueeStrip() {
  const words = [
    "Input Project by SapshoTechnology",
    "Open Source Future 🔥",
    "Dream. Code. Repeat.",
    "Mark aur Elon wali Soch 🚀",
    "Innovation x Imagination",
    "Type with Every Tech 💡",
    "Think Beyond Limits",
    "Build for the Planet 🌍",
  ];

  return (
    <div className="mx-auto mt-8 max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A0F] via-transparent to-[#070A0F]" />
        <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap py-3 text-sm text-slate-300 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          {words.map((text, i) => (
            <span key={i} className="mx-8 inline-block font-medium text-slate-200">
              ✦ {text}
            </span>
          ))}
          {words.map((text, i) => (
            <span key={`dup-${i}`} className="mx-8 inline-block font-medium text-slate-200">
              ✦ {text}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
